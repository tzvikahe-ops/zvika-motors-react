import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Download, ImageIcon, Sparkles, Upload, X, Trash2, ZoomIn } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface GeneratedImage {
  imageUrl: string;
  prompt: string;
}

const STYLE_OPTIONS = [
  { value: "none", label: "No style" },
  { value: "photorealistic", label: "Photorealistic" },
  { value: "digital art", label: "Digital Art" },
  { value: "oil painting", label: "Oil Painting" },
  { value: "watercolor", label: "Watercolor" },
  { value: "3D render", label: "3D Render" },
  { value: "anime", label: "Anime" },
  { value: "sketch", label: "Sketch" },
  { value: "cinematic", label: "Cinematic" },
  { value: "minimalist", label: "Minimalist" },
  { value: "pop art", label: "Pop Art" },
  { value: "concept art", label: "Concept Art" },
];

const ASPECT_OPTIONS = [
  { value: "1:1", label: "1:1 — Square" },
  { value: "16:9", label: "16:9 — Landscape" },
  { value: "9:16", label: "9:16 — Portrait" },
  { value: "4:3", label: "4:3 — Classic" },
  { value: "3:2", label: "3:2 — Photo" },
  { value: "21:9", label: "21:9 — Ultra-wide" },
];

const QUALITY_OPTIONS = [
  { value: "fast", label: "Fast", desc: "Quick generation, good quality" },
  { value: "standard", label: "Standard", desc: "Balanced quality & speed" },
  { value: "premium", label: "Premium", desc: "Highest quality, slower" },
];

export default function ImageStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [style, setStyle] = useState("none");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [quality, setQuality] = useState("standard");
  const [numOutputs, setNumOutputs] = useState([1]);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [referenceFileName, setReferenceFileName] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleReferenceUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: "File too large", description: "Max 10MB", variant: "destructive" });
      return;
    }
    setReferenceFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setReferenceImage(reader.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({ title: "Please enter a prompt", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-image", {
        body: {
          prompt: prompt.trim(),
          style,
          aspectRatio,
          quality,
          negativePrompt: negativePrompt.trim() || undefined,
          referenceImage: referenceImage || undefined,
          numOutputs: numOutputs[0],
        },
      });

      if (error) throw error;
      if (data.error) {
        toast({ title: "Error", description: data.error, variant: "destructive" });
        return;
      }

      const newImages: GeneratedImage[] = (data.images || []).map((img: any) => ({
        imageUrl: img.imageUrl,
        prompt: prompt.trim(),
      }));

      setGeneratedImages((prev) => [...newImages, ...prev]);
      toast({ title: `${newImages.length} image(s) generated!` });
    } catch (err: any) {
      console.error("Generation error:", err);
      toast({
        title: "Generation failed",
        description: err.message || "Try again later",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async (url: string, promptText: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `studio-${promptText.slice(0, 30).replace(/\s+/g, "-")}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(220,6%,97%)] text-foreground">
      {/* Top bar */}
      <header className="h-14 bg-card border-b border-border flex items-center px-6 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="font-bold text-base tracking-tight">Image Studio</span>
        </div>
        <span className="text-xs text-muted-foreground ml-4">Internal tool — not public</span>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-56px)]">
        {/* Sidebar controls */}
        <aside className="w-full lg:w-[360px] bg-card border-b lg:border-b-0 lg:border-r border-border p-5 overflow-y-auto shrink-0">
          <div className="space-y-5">
            {/* Prompt */}
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">Prompt</label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate..."
                className="min-h-[100px] resize-none text-sm"
              />
            </div>

            {/* Negative prompt */}
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">
                Negative Prompt <span className="text-muted-foreground font-normal normal-case">(optional)</span>
              </label>
              <Textarea
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                placeholder="Things to avoid: blurry, low quality, text..."
                className="min-h-[60px] resize-none text-sm"
              />
            </div>

            {/* Reference image */}
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">
                Reference Image <span className="text-muted-foreground font-normal normal-case">(optional, for img2img)</span>
              </label>
              {referenceImage ? (
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <img src={referenceImage} alt="Reference" className="w-full h-32 object-cover" />
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => { setReferenceImage(null); setReferenceFileName(null); }}
                    >
                      <Trash2 className="w-3 h-3 mr-1" /> Remove
                    </Button>
                  </div>
                  <p className="text-[10px] text-muted-foreground p-1.5 truncate">{referenceFileName}</p>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-28 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent/50 hover:bg-accent/[0.03] transition-colors">
                  <Upload className="w-5 h-5 text-muted-foreground mb-1" />
                  <span className="text-xs text-muted-foreground">Click to upload reference</span>
                  <span className="text-[10px] text-muted-foreground/60">PNG, JPG up to 10MB</span>
                  <Input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    className="hidden"
                    onChange={handleReferenceUpload}
                  />
                </label>
              )}
            </div>

            {/* Style */}
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">Style Preset</label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger className="text-sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {STYLE_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Aspect ratio */}
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">Aspect Ratio</label>
              <div className="grid grid-cols-3 gap-1.5">
                {ASPECT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAspectRatio(opt.value)}
                    className={`text-xs py-2 px-2 rounded-md border transition-all font-medium ${
                      aspectRatio === opt.value
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-muted-foreground hover:border-foreground/20"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality */}
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">Quality</label>
              <div className="grid grid-cols-3 gap-1.5">
                {QUALITY_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setQuality(opt.value)}
                    className={`text-xs py-2.5 px-2 rounded-md border transition-all text-center ${
                      quality === opt.value
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-muted-foreground hover:border-foreground/20"
                    }`}
                  >
                    <span className="font-semibold block">{opt.label}</span>
                    <span className="text-[10px] opacity-70">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Number of outputs */}
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">
                Number of Images: <span className="text-accent">{numOutputs[0]}</span>
              </label>
              <Slider
                value={numOutputs}
                onValueChange={setNumOutputs}
                min={1}
                max={4}
                step={1}
                className="mt-2"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
            </div>

            {/* Generate button */}
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-sm font-bold"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating{numOutputs[0] > 1 ? ` ${numOutputs[0]} images` : ""}...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate{numOutputs[0] > 1 ? ` ${numOutputs[0]} Images` : " Image"}
                </>
              )}
            </Button>
          </div>
        </aside>

        {/* Main canvas area */}
        <main className="flex-1 p-5 overflow-y-auto">
          {generatedImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {generatedImages.map((img, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm group">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={img.imageUrl}
                      alt={img.prompt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-9 w-9"
                        onClick={() => setSelectedImage(img.imageUrl)}
                      >
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-9 w-9"
                        onClick={() => handleDownload(img.imageUrl, img.prompt)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-muted-foreground line-clamp-2">{img.prompt}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-muted-foreground">
              <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-sm font-medium mb-1">No images yet</p>
              <p className="text-xs opacity-70">Enter a prompt and hit Generate</p>
            </div>
          )}
        </main>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-background/80 hover:text-background"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Generated image"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
