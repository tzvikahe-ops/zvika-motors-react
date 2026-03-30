import { supabase } from "@/integrations/supabase/client";
import type {
  ImageProvider,
  ImageProviderCapabilities,
  GenerateImageRequest,
  GenerateImageResponse,
  EditImageRequest,
  EditImageResponse,
} from "./types";

/**
 * Lovable AI Image Provider
 * 
 * Uses the Lovable AI Gateway (backed by Google Gemini image models)
 * via the generate-image edge function. All API keys are handled
 * server-side - no secrets in client code.
 */
export class LovableAIProvider implements ImageProvider {
  readonly name = "Lovable AI (Gemini)";

  readonly capabilities: ImageProviderCapabilities = {
    supportsGeneration: true,
    supportsEditing: false, // Scaffold - will be enabled when edit endpoint is ready
    supportsNegativePrompt: true,
    supportsReferenceImage: true,
    maxOutputs: 4,
    supportedStyles: [
      "none", "photorealistic", "digital-art", "oil-painting", "watercolor",
      "3d-render", "anime", "sketch", "cinematic", "minimalist", "pop-art", "concept-art",
    ],
    supportedAspectRatios: ["1:1", "16:9", "9:16", "4:3", "3:2", "21:9"],
    supportedQualities: ["fast", "standard", "premium"],
  };

  async generate(request: GenerateImageRequest): Promise<GenerateImageResponse> {
    const { data, error } = await supabase.functions.invoke("generate-image", {
      body: {
        prompt: request.prompt,
        negativePrompt: request.negativePrompt || undefined,
        style: request.style || "none",
        aspectRatio: request.aspectRatio || "1:1",
        quality: request.quality || "standard",
        numOutputs: request.numOutputs || 1,
        referenceImage: request.referenceImage || undefined,
      },
    });

    if (error) {
      return { images: [], error: error.message || "Generation failed" };
    }

    if (data?.error) {
      return { images: [], error: data.error };
    }

    return {
      images: (data?.images || []).map((img: any) => ({
        imageUrl: img.imageUrl,
        storagePath: img.storagePath || null,
      })),
    };
  }

  async edit(request: EditImageRequest): Promise<EditImageResponse> {
    // Scaffold: editing not yet available via this provider
    return {
      image: null,
      error: "Image editing is not yet available. This feature is coming soon.",
    };
  }
}
