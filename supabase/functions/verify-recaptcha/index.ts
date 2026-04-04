import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ✅ תיקון 1: CORS מוגבל לדומיין האתר בלבד (לא *)
const ALLOWED_ORIGIN = "https://www.ortzat.co.il";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ✅ תיקון 2: סינון תווי RTL מסוכנים (U+202A–U+202E, U+2066–U+2069)
// תווים אלו יכולים להסתיר קוד זדוני, למשל: evil.com/gnp.exe נראה כ-evil.com/exe.png
function stripRTLChars(input: string): string {
  return input.replace(/[\u202A-\u202E\u2066-\u2069]/g, "");
}

// ✅ תיקון 3: validation של מספר טלפון ישראלי
// תקף: 05x-xxxxxxx, 07x-xxxxxxx, +972-5x-xxxxxxx
const IL_PHONE_REGEX = /^(\+972|0)(5[0-9]|7[2-9])\d{7}$/;

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  return IL_PHONE_REGEX.test(cleaned);
}

// ✅ sanitize + חיתוך אורך
function sanitize(input: string, maxLen: number): string {
  return stripRTLChars(input.trim()).slice(0, maxLen);
}

// ✅ Rate limiting: בדיקת מספר בקשות בחלון זמן נתון
async function checkRateLimit(
  supabase: ReturnType<typeof createClient>,
  identifier: string,
  idType: "phone" | "ip",
  maxRequests: number,
  windowMinutes: number
): Promise<boolean> {
  const since = new Date(Date.now() - windowMinutes * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("rate_limits")
    .select("*", { count: "exact", head: true })
    .eq("identifier", identifier)
    .eq("id_type", idType)
    .gte("created_at", since);
  return (count ?? 0) < maxRequests;
}

async function recordRequest(
  supabase: ReturnType<typeof createClient>,
  identifier: string,
  idType: "phone" | "ip"
): Promise<void> {
  await supabase.from("rate_limits").insert({ identifier, id_type: idType });
  // ניקוי רשומות ישנות (מעל שעתיים) למניעת נפיחות טבלה
  await supabase.rpc("cleanup_rate_limits");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { token, name, phone, message, consentAt } = await req.json();

    if (!token || !name || !phone) {
      return new Response(
        JSON.stringify({ error: "חסרים שדות חובה" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ סינון כל השדות לפני כל עיבוד
    const safeName = sanitize(name, 100);
    const safePhone = sanitize(phone, 20);
    const safeMessage = message ? sanitize(message, 1000) : null;

    // ✅ בדיקת תקינות לאחר הסינון
    if (!safeName) {
      return new Response(
        JSON.stringify({ error: "שם לא תקין" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ validation מספר טלפון ישראלי
    if (!validatePhone(safePhone)) {
      return new Response(
        JSON.stringify({ error: "מספר טלפון לא תקין. יש להזין מספר ישראלי (05x/07x)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ Rate limiting — נבדוק לפני reCAPTCHA כדי לחסוך קריאות Google
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const normalizedPhone = safePhone.replace(/[\s\-\(\)]/g, "");

    // 3 בקשות לכל מספר טלפון ב-15 דקות
    const phoneAllowed = await checkRateLimit(supabase, normalizedPhone, "phone", 3, 15);
    if (!phoneAllowed) {
      console.warn("Rate limit: phone", normalizedPhone);
      return new Response(
        JSON.stringify({ error: "יותר מדי ניסיונות. נסו שוב בעוד 15 דקות." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 10 בקשות לכל IP בשעה
    if (clientIp !== "unknown") {
      const ipAllowed = await checkRateLimit(supabase, clientIp, "ip", 10, 60);
      if (!ipAllowed) {
        console.warn("Rate limit: IP", clientIp);
        return new Response(
          JSON.stringify({ error: "יותר מדי ניסיונות. נסו שוב בעוד שעה." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Verify reCAPTCHA token with Google
    const secretKey = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY not configured");
      return new Response(
        JSON.stringify({ error: "שגיאת שרת" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    );
    const verifyData = await verifyRes.json();
    console.log("reCAPTCHA verify response:", JSON.stringify(verifyData));

    const isBrowserError = !verifyData.success &&
      verifyData["error-codes"]?.includes("browser-error");

    if (!verifyData.success && !isBrowserError) {
      console.error("reCAPTCHA hard failure:", JSON.stringify(verifyData));
      return new Response(
        JSON.stringify({ error: "אימות reCAPTCHA נכשל", details: verifyData }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (isBrowserError) {
      console.warn("reCAPTCHA browser-error - allowing submission with warning");
    } else if (verifyData.score < 0.3) {
      return new Response(
        JSON.stringify({ error: "אימות reCAPTCHA נכשל", score: verifyData.score }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database — ✅ שומרים את השדות המסוננים
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: safeName,
      phone: safePhone,
      message: safeMessage,
      recaptcha_score: verifyData.score,
      consent_at: consentAt ?? new Date().toISOString(),
    });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "שגיאה בשמירת הפנייה" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ רשום את הבקשה במונה rate limiting
    await recordRequest(supabase, normalizedPhone, "phone");
    if (clientIp !== "unknown") await recordRequest(supabase, clientIp, "ip");

    // Send WhatsApp notification via Twilio — ✅ משתמשים בשדות המסוננים
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const TWILIO_API_KEY = Deno.env.get("TWILIO_API_KEY");
    if (LOVABLE_API_KEY && TWILIO_API_KEY) {
      try {
        const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";
        const normalizeWhatsAppAddress = (value: string) => {
          const trimmed = value.trim();
          return trimmed.startsWith("whatsapp:") ? trimmed : `whatsapp:${trimmed}`;
        };

        const adminPhone = Deno.env.get("ADMIN_WHATSAPP_TO")?.trim() || "+972526514446";
        const toWhatsApp = normalizeWhatsAppAddress(adminPhone);
        const configuredFrom =
          Deno.env.get("TWILIO_WHATSAPP_FROM")?.trim() ||
          Deno.env.get("TWILIO_FROM_NUMBER")?.trim() ||
          "whatsapp:+14155238886";
        const fromWhatsApp = normalizeWhatsAppAddress(configuredFrom);

        // ✅ הודעת WhatsApp בנויה מהשדות המסוננים בלבד
        const msgBody = [
          "פנייה חדשה מהאתר!",
          `שם: ${safeName}`,
          `טלפון: ${safePhone}`,
          safeMessage ? `הודעה: ${safeMessage.slice(0, 200)}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        if (fromWhatsApp === toWhatsApp) {
          console.error("Twilio WhatsApp sender and recipient cannot be the same number.");
        } else {
          const smsRes = await fetch(`${GATEWAY_URL}/Messages.json`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": TWILIO_API_KEY,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              To: toWhatsApp,
              From: fromWhatsApp,
              Body: msgBody,
            }),
          });

          if (!smsRes.ok) {
            const errData = await smsRes.text();
            console.error("Twilio WhatsApp error:", smsRes.status, errData);
          }
        }
      } catch (smsErr) {
        console.error("WhatsApp notification error:", smsErr);
      }
    } else {
      console.warn("Twilio keys not configured, skipping WhatsApp notification");
    }

    return new Response(
      JSON.stringify({ success: true, score: verifyData.score }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "שגיאת שרת" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
