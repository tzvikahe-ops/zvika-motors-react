/**
 * Image Provider Abstraction Layer
 * 
 * Provides a provider-agnostic interface for AI image generation and editing.
 * Currently implements Lovable AI (backed by Google Gemini image models).
 * 
 * To swap providers:
 * 1. Implement the ImageProvider interface
 * 2. Update the factory in getImageProvider()
 * 
 * Environment variables (configured as backend secrets, never in client code):
 * - LOVABLE_API_KEY: Auto-provisioned by Lovable Cloud (used by default provider)
 * - GEMINI_API_KEY: For direct Google Gemini/Imagen access (future provider)
 * - OPENAI_API_KEY: For DALL-E provider (future)
 * - STABILITY_API_KEY: For Stability AI provider (future)
 */

// ── Types ──────────────────────────────────────────────────────────────────

export type ImageStyle =
  | "none"
  | "photorealistic"
  | "digital-art"
  | "oil-painting"
  | "watercolor"
  | "3d-render"
  | "anime"
  | "sketch"
  | "cinematic"
  | "minimalist"
  | "pop-art"
  | "concept-art";

export type AspectRatio = "1:1" | "16:9" | "9:16" | "4:3" | "3:2" | "21:9";

export type QualityTier = "fast" | "standard" | "premium";

export interface GenerateImageRequest {
  prompt: string;
  negativePrompt?: string;
  style?: ImageStyle;
  aspectRatio?: AspectRatio;
  quality?: QualityTier;
  numOutputs?: number; // 1-4
  referenceImage?: string; // base64 data URI for img2img
}

export interface EditImageRequest {
  sourceImage: string; // base64 data URI
  prompt: string; // editing instruction
  strength?: number; // 0-1, how much to change (provider-dependent)
}

export interface GeneratedImageResult {
  imageUrl: string;
  storagePath: string | null;
}

export interface GenerateImageResponse {
  images: GeneratedImageResult[];
  error?: string;
}

export interface EditImageResponse {
  image: GeneratedImageResult | null;
  error?: string;
}

export interface ImageProviderCapabilities {
  supportsGeneration: boolean;
  supportsEditing: boolean;
  supportsNegativePrompt: boolean;
  supportsReferenceImage: boolean;
  maxOutputs: number;
  supportedStyles: ImageStyle[];
  supportedAspectRatios: AspectRatio[];
  supportedQualities: QualityTier[];
}

// ── Provider Interface ─────────────────────────────────────────────────────

export interface ImageProvider {
  readonly name: string;
  readonly capabilities: ImageProviderCapabilities;
  generate(request: GenerateImageRequest): Promise<GenerateImageResponse>;
  edit(request: EditImageRequest): Promise<EditImageResponse>;
}

// ── Style & Aspect Ratio Metadata ──────────────────────────────────────────

export const STYLE_META: Record<ImageStyle, { label: string; description: string }> = {
  "none":           { label: "No Style",       description: "Raw prompt, no style modifier" },
  "photorealistic": { label: "Photorealistic",  description: "Lifelike photography quality" },
  "digital-art":    { label: "Digital Art",      description: "Modern digital illustration" },
  "oil-painting":   { label: "Oil Painting",     description: "Classical oil painting texture" },
  "watercolor":     { label: "Watercolor",       description: "Soft watercolor washes" },
  "3d-render":      { label: "3D Render",        description: "Clean 3D rendered output" },
  "anime":          { label: "Anime",            description: "Japanese anime art style" },
  "sketch":         { label: "Sketch",           description: "Pencil or ink sketch" },
  "cinematic":      { label: "Cinematic",        description: "Film-like dramatic lighting" },
  "minimalist":     { label: "Minimalist",       description: "Clean, simple composition" },
  "pop-art":        { label: "Pop Art",          description: "Bold pop art style" },
  "concept-art":    { label: "Concept Art",      description: "Professional concept artwork" },
};

export const ASPECT_META: Record<AspectRatio, { label: string; icon: string }> = {
  "1:1":  { label: "Square",     icon: "□" },
  "16:9": { label: "Landscape",  icon: "▬" },
  "9:16": { label: "Portrait",   icon: "▮" },
  "4:3":  { label: "Classic",    icon: "▭" },
  "3:2":  { label: "Photo",      icon: "▭" },
  "21:9": { label: "Ultra-wide", icon: "━" },
};

export const QUALITY_META: Record<QualityTier, { label: string; description: string }> = {
  fast:     { label: "Fast",     description: "Quick, good quality" },
  standard: { label: "Standard", description: "Balanced quality & speed" },
  premium:  { label: "Premium",  description: "Highest quality, slower" },
};
