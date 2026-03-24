/**
 * Image Provider Factory
 * 
 * Returns the active image provider. To swap providers,
 * change the implementation returned here.
 * 
 * Future providers can be added by implementing the ImageProvider interface:
 * - GeminiDirectProvider (using GEMINI_API_KEY directly)
 * - DallEProvider (using OPENAI_API_KEY)
 * - StabilityProvider (using STABILITY_API_KEY)
 */

export type { ImageProvider, GenerateImageRequest, GenerateImageResponse, EditImageRequest, EditImageResponse, GeneratedImageResult } from "./types";
export { STYLE_META, ASPECT_META, QUALITY_META } from "./types";
export type { ImageStyle, AspectRatio, QualityTier } from "./types";

import { LovableAIProvider } from "./lovable-ai-provider";
import type { ImageProvider } from "./types";

let _provider: ImageProvider | null = null;

export function getImageProvider(): ImageProvider {
  if (!_provider) {
    _provider = new LovableAIProvider();
  }
  return _provider;
}

/**
 * Override the default provider (useful for testing or runtime swap)
 */
export function setImageProvider(provider: ImageProvider): void {
  _provider = provider;
}
