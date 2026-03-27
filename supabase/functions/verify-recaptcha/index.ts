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

    if (!verifyData.success || verifyData.score < 0.5) {
      return new Response(
        JSON.stringify({ error: "אימות reCAPTCHA נכשל", score: verifyData.score }),
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

    // Send WhatsApp notification via CallMeBot
    const whatsappApiKey = Deno.env.get("CALLMEBOT_API_KEY");
    if (whatsappApiKey) {
      try {
        const notifyPhone = "972526514446";
        const msgText = `📋 פנייה חדשה מהאתר!\n\n👤 שם: ${name.trim()}\n📱 טלפון: ${phone.trim()}${message ? `\n💬 הודעה: ${message.trim().slice(0, 200)}` : ""}`;
        const encoded = encodeURIComponent(msgText);
        await fetch(
          `https://api.callmebot.com/whatsapp.php?phone=${notifyPhone}&text=${encoded}&apikey=${whatsappApiKey}`
        );
      } catch (whatsappErr) {
        console.error("WhatsApp notification error:", whatsappErr);
        // Don't fail the submission if WhatsApp notification fails
      }
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
