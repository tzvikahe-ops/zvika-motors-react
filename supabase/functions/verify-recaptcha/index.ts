import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { token, name, phone, message } = await req.json();

    if (!token || !name || !phone) {
      return new Response(
        JSON.stringify({ error: "חסרים שדות חובה" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
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

    if (!verifyData.success || verifyData.score < 0.3) {
      return new Response(
        JSON.stringify({ error: "אימות reCAPTCHA נכשל", details: verifyData }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: name.trim().slice(0, 100),
      phone: phone.trim().slice(0, 20),
      message: message?.trim().slice(0, 1000) || null,
      recaptcha_score: verifyData.score,
    });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "שגיאה בשמירת הפנייה" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send SMS notification via Twilio
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const TWILIO_API_KEY = Deno.env.get("TWILIO_API_KEY");
    if (LOVABLE_API_KEY && TWILIO_API_KEY) {
      try {
        const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";
        const msgBody = `📋 פנייה חדשה מהאתר!\n👤 שם: ${name.trim()}\n📱 טלפון: ${phone.trim()}${message ? `\n💬 הודעה: ${message.trim().slice(0, 200)}` : ""}`;

        const smsRes = await fetch(`${GATEWAY_URL}/Messages.json`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": TWILIO_API_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            To: "+972526514446",
            From: "+972526514446",
            Body: msgBody,
          }),
        });

        if (!smsRes.ok) {
          const errData = await smsRes.text();
          console.error("Twilio SMS error:", smsRes.status, errData);
        }
      } catch (smsErr) {
        console.error("SMS notification error:", smsErr);
      }
    } else {
      console.warn("Twilio keys not configured, skipping SMS notification");
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
