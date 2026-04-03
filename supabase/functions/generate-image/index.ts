import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT_PER_DAY = 10;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // ── 1. AUTHENTICATION ────────────────────────────────────────────────────
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── 2. ADMIN ROLE CHECK ───────────────────────────────────────────────────
    // Role is set via Supabase Dashboard → Users → app_metadata: { "role": "admin" }
    const isAdmin =
      user.app_metadata?.role === "admin" ||
      user.user_metadata?.role === "admin";

    if (!isAdmin) {
      console.warn(`generate-image: non-admin attempt by user ${user.id}`);
      return new Response(
        JSON.stringify({ error: "Forbidden" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── 3. RATE LIMITING (max 10 images / user / day) ────────────────────────
    try {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { count } = await supabase
        .from("generated_images")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .gte("created_at", oneDayAgo);

      if (count !== null && count >= RATE_LIMIT_PER_DAY) {
        return new Response(
          JSON.stringify({ error: `Rate limit: max ${RATE_LIMIT_PER_DAY} images per day` }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } catch (_) {
      // user_id column may not exist yet — rate limiting degrades gracefully
      console.warn("generate-image: rate-limit check skipped (column missing?)");
    }

    // ── 4. PARSE & VALIDATE INPUT ────────────────────────────────────────────
    const { prompt, aspectRatio, style, quality, negativePrompt, referenceImage, numOutputs } =
      await req.json();

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Prompt is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // ── 5. BUILD PROMPT ───────────────────────────────────────────────────────
    let fullPrompt = prompt.trim();
    if (style && style !== "none") {
      fullPrompt += `, ${style} style`;
    }
    if (quality === "premium") {
      fullPrompt += ", ultra high quality, highly detailed, sharp focus, 8K resolution";
    } else if (quality === "standard") {
      fullPrompt += ", high quality, detailed";
    }
    if (negativePrompt && negativePrompt.trim()) {
      fullPrompt += `. Avoid: ${negativePrompt.trim()}`;
    }
    if (aspectRatio) {
      fullPrompt += `. Aspect ratio: ${aspectRatio}`;
    }

    console.log(`generate-image: user=${user.id} prompt="${fullPrompt.substring(0, 80)}..."`);

    const model = quality === "premium"
      ? "google/gemini-3-pro-image-preview"
      : "google/gemini-2.5-flash-image";

    const outputCount = Math.min(Math.max(numOutputs || 1, 1), 4);
    const results: Array<{ imageUrl: string; storagePath: string | null }> = [];

    // ── 6. GENERATE IMAGES ────────────────────────────────────────────────────
    for (let i = 0; i < outputCount; i++) {
      const content: Array<{ type: string; text?: string; image_url?: { url: string } }> = [];

      if (referenceImage) {
        content.push({ type: "text", text: fullPrompt });
        content.push({ type: "image_url", image_url: { url: referenceImage } });
      } else {
        content.push({ type: "text", text: fullPrompt });
      }

      const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: referenceImage ? content : fullPrompt }],
          modalities: ["image", "text"],
        }),
      });

      if (!aiResponse.ok) {
        if (aiResponse.status === 429) {
          return new Response(
            JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
            { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        if (aiResponse.status === 402) {
          return new Response(
            JSON.stringify({ error: "AI credits exhausted. Please add credits to your workspace." }),
            { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const errorText = await aiResponse.text();
        console.error("AI gateway error:", aiResponse.status, errorText);
        throw new Error(`AI gateway error: ${aiResponse.status}`);
      }

      const data = await aiResponse.json();
      const imageData = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

      if (!imageData) {
        console.warn(`No image generated for output ${i + 1}`);
        continue;
      }

      // ── 7. UPLOAD TO STORAGE ──────────────────────────────────────────────
      const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
      const imageBytes = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
      const fileName = `${crypto.randomUUID()}.png`;

      const { error: uploadError } = await supabase.storage
        .from("generated-images")
        .upload(fileName, imageBytes, { contentType: "image/png" });

      let publicUrl = imageData;
      let storagePath: string | null = null;

      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage
          .from("generated-images")
          .getPublicUrl(fileName);
        publicUrl = publicUrlData.publicUrl;
        storagePath = fileName;

        // Save metadata including user_id for rate limiting
        await supabase.from("generated_images").insert({
          prompt: prompt.trim(),
          image_url: publicUrl,
          storage_path: fileName,
          user_id: user.id,
        });
      } else {
        console.error("Storage upload error:", uploadError);
      }

      results.push({ imageUrl: publicUrl, storagePath });
    }

    if (results.length === 0) {
      return new Response(
        JSON.stringify({ error: "No images were generated. Try a different prompt." }),
        { status: 422, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ images: results }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("generate-image error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
