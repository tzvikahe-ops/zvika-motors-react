const corsHeaders = {
  "Access-Control-Allow-Origin": "https://ortzat.co.il",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const TWILIO_API_KEY = Deno.env.get("TWILIO_API_KEY");

  if (!LOVABLE_API_KEY || !TWILIO_API_KEY) {
    console.error("Missing LOVABLE_API_KEY or TWILIO_API_KEY");
    return new Response(
      JSON.stringify({ error: "Missing credentials" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";

    const adminPhone = Deno.env.get("ADMIN_WHATSAPP_TO")?.trim() || "+972526514446";
    const toWhatsApp = adminPhone.startsWith("whatsapp:") ? adminPhone : `whatsapp:${adminPhone}`;

    const configuredFrom =
      Deno.env.get("TWILIO_WHATSAPP_FROM")?.trim() ||
      Deno.env.get("TWILIO_FROM_NUMBER")?.trim() ||
      "whatsapp:+14155238886";
    const fromWhatsApp = configuredFrom.startsWith("whatsapp:") ? configuredFrom : `whatsapp:${configuredFrom}`;

    const res = await fetch(`${GATEWAY_URL}/Messages.json`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": TWILIO_API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        To: toWhatsApp,
        From: fromWhatsApp,
        Body: "🔔 תזכורת חיבור: כדי לשמור על קבלת התראות, השב 1 לשמירה על חיבור פעיל.",
      }),
    });

    if (!res.ok) {
      const errData = await res.text();
      console.error("WhatsApp keep-alive error:", res.status, errData);
      return new Response(
        JSON.stringify({ error: "Failed to send keep-alive", details: errData }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("WhatsApp keep-alive sent successfully");
    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("WhatsApp keep-alive error:", err);
    return new Response(
      JSON.stringify({ error: "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});