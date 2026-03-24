import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, aspectRatio, style, quality, negativePrompt, referenceImage, numOutputs } = await req.json();

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Prompt is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Build enhanced prompt
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

    console.log("Generating image with prompt:", fullPrompt);

    // Determine model based on quality
    const model = quality === "premium"
      ? "google/gemini-3-pro-image-preview"
      : "google/gemini-2.5-flash-image";

    const outputCount = Math.min(Math.max(numOutputs || 1, 1), 4);
    const results: Array<{ imageUrl: string; storagePath: string | null }> = [];

    for (let i = 0; i < outputCount; i++) {
      // Build message content
      const content: Array<{ type: string; text?: string; image_url?: { url: string } }> = [];

      // If reference image provided, use image-to-image
      if (referenceImage) {
        content.push({
          type: "text",
          text: fullPrompt,
        });
        content.push({
          type: "image_url",
          image_url: { url: referenceImage },
        });
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

      // Upload to storage
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
      const imageBytes = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
      const fileName = `${crypto.randomUUID()}.png`;

      const { error: uploadError } = await supabase.storage
        .from("generated-images")
        .upload(fileName, imageBytes, { contentType: "image/png" });

      let publicUrl = imageData; // fallback to base64
      let storagePath: string | null = null;

      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage
          .from("generated-images")
          .getPublicUrl(fileName);
        publicUrl = publicUrlData.publicUrl;
        storagePath = fileName;

        // Save metadata
        await supabase.from("generated_images").insert({
          prompt: prompt.trim(),
          image_url: publicUrl,
          storage_path: fileName,
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
