import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Loader2, Download, ImageIcon, Sparkles, Upload, X, Trash2,
  ZoomIn, AlertTriangle, Clock, Wand2, PenTool,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  getImageProvider,
  STYLE_META, ASPECT_META, QUALITY_META,
  type ImageStyle, type AspectRatio, type QualityTier,
  type GeneratedImageResult,
} from "@/lib/image-provider";

// ── History item ───────────────────────────────────────────────────────────

interface HistoryItem {
  id: string;
  prompt: string;
  style: ImageStyle;
  aspectRatio: AspectRatio;
  quality: QualityTier;
  images: GeneratedImageResult[];
  timestamp: number;
}

// ── Component ──────────────────────────────────────────────────────────────

export default function ImageStudioPage() {
  const provider = getImageProvider();

  // Generation state
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [style, setStyle] = useState<ImageStyle>("none");
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("1:1");
  const [quality, setQuality] = useState<QualityTier>("standard");
  const [numOutputs, setNumOutputs] = useState([1]);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [referenceFileName, setReferenceFileName] = useState<string | null>(null);

  // Edit state (scaffolded)
  const [editSourceImage, setEditSourceImage] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState("");

  // UI state
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("generate");

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("image-studio-history");
      if (saved) setHistory(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  // Save history
  useEffect(() => {
    try {
      localStorage.setItem("image-studio-history", JSON.stringify(history.slice(0, 50)));
    } catch { /* ignore */ }
  }, [history]);

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
    setError(null);

    try {
      const result = await provider.generate({
        prompt: prompt.trim(),
        negativePrompt: negativePrompt.trim() || undefined,
        style,
        aspectRatio,
        quality,
        numOutputs: numOutputs[0],
        referenceImage: referenceImage || undefined,
      });

      if (result.error) {
        setError(result.error);
        toast({ title: "Generation failed", description: result.error, variant: "destructive" });
        return;
      }

      if (result.images.length === 0) {
        setError("No images were generated. Try a different prompt.");
        return;
      }

      const item: HistoryItem = {
        id: crypto.randomUUID(),
        prompt: prompt.trim(),
        style,
        aspectRatio,
        quality,
        images: result.images,
        timestamp: Date.now(),
      };

      setHistory((prev) => [item, ...prev]);
      setError(null);
      toast({ title: `${result.images.length} image(s) generated!` });
    } catch (err: any) {
      const msg = err.message || "Unexpected error";
      setError(msg);
      toast({ title: "Error", description: msg, variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEdit = async () => {
    if (!editSourceImage || !editPrompt.trim()) {
      toast({ title: "Upload an image and enter an editing instruction", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const result = await provider.edit({
        sourceImage: editSourceImage,
        prompt: editPrompt.trim(),
      });

      if (result.error) {
        setError(result.error);
        toast({ title: "Edit failed", description: result.error, variant: "destructive" });
        return;
      }

      if (result.image) {
        const item: HistoryItem = {
          id: crypto.randomUUID(),
          prompt: `[Edit] ${editPrompt.trim()}`,
          style: "none",
          aspectRatio: "1:1",
          quality: "standard",
          images: [result.image],
          timestamp: Date.now(),
        };
        setHistory((prev) => [item, ...prev]);
        toast({ title: "Image edited successfully!" });
      }
    } catch (err: any) {
      setError(err.message || "Edit failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async (url: string, name: string) => {
    try {
      const resp = await fetch(url);
      const blob = await resp.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `studio-${name.slice(0, 30).replace(/\s+/g, "-")}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch {
      window.open(url, "_blank");
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("image-studio-history");
    toast({ title: "History cleared" });
  };

  const allImages = history.flatMap((h) =>
    h.images.map((img) => ({ ...img, prompt: h.prompt, timestamp: h.timestamp }))
  );

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="h-14 bg-card/80 backdrop-blur-md border-b border-border flex items-center px-6 sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight block leading-none">Image Studio</span>
            <span className="text-[10px] text-muted-foreground leading-none">
              {provider.name} • Internal tool
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-56px)]">
        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside className="w-full lg:w-[380px] bg-card border-b lg:border-b-0 lg:border-r border-border overflow-y-auto shrink-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
            <TabsList className="w-full rounded-none border-b border-border bg-transparent h-11">
              <TabsTrigger value="generate" className="flex-1 data-[state=active]:bg-accent/10 data-[state=active]:text-accent rounded-none border-b-2 border-transparent data-[state=active]:border-accent">
                <Wand2 className="w-3.5 h-3.5 mr-1.5" /> Generate
              </TabsTrigger>
              <TabsTrigger value="edit" className="flex-1 data-[state=active]:bg-accent/10 data-[state=active]:text-accent rounded-none border-b-2 border-transparent data-[state=active]:border-accent">
                <PenTool className="w-3.5 h-3.5 mr-1.5" /> Edit
                {!provider.capabilities.supportsEditing && (
                  <span className="ml-1 text-[9px] bg-muted text-muted-foreground px-1 rounded">Soon</span>
                )}
              </TabsTrigger>
            </TabsList>

            {/* ── Generate Tab ───────────────────────────────────────────── */}
            <TabsContent value="generate" className="p-5 space-y-5 mt-0">
              {/* Prompt */}
              <Field label="Prompt">
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A red sports car parked in a professional garage, dramatic lighting..."
                  className="min-h-[90px] resize-none text-sm"
                />
              </Field>

              {/* Negative prompt */}
              <Field label="Negative Prompt" optional>
                <Textarea
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  placeholder="blurry, low quality, text, watermark..."
                  className="min-h-[50px] resize-none text-sm"
                />
              </Field>

              {/* Reference image */}
              <Field label="Reference Image" optional hint="For image-to-image">
                {referenceImage ? (
                  <div className="relative rounded-lg overflow-hidden border border-border">
                    <img src={referenceImage} alt="תמונת ייחוס שנבחרה" className="w-full h-28 object-cover" />
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button variant="destructive" size="sm" onClick={() => { setReferenceImage(null); setReferenceFileName(null); }}>
                        <Trash2 className="w-3 h-3 mr-1" /> Remove
                      </Button>
                    </div>
                    <p className="text-[10px] text-muted-foreground p-1.5 truncate">{referenceFileName}</p>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-24 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent/40 hover:bg-accent/[0.02] transition-colors">
                    <Upload className="w-4 h-4 text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">Click to upload</span>
                    <span className="text-[10px] text-muted-foreground/50">PNG, JPG up to 10MB</span>
                    <Input type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={handleReferenceUpload} />
                  </label>
                )}
              </Field>

              {/* Style */}
              <Field label="Style">
                <div className="grid grid-cols-3 gap-1">
                  {provider.capabilities.supportedStyles.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`text-[11px] py-1.5 px-1.5 rounded-md border transition-all font-medium truncate ${
                        style === s
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-muted-foreground hover:border-foreground/20"
                      }`}
                      title={STYLE_META[s].description}
                    >
                      {STYLE_META[s].label}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Aspect ratio */}
              <Field label="Aspect Ratio">
                <div className="grid grid-cols-3 gap-1.5">
                  {provider.capabilities.supportedAspectRatios.map((ar) => (
                    <button
                      key={ar}
                      onClick={() => setAspectRatio(ar)}
                      className={`text-xs py-2 rounded-md border transition-all font-medium ${
                        aspectRatio === ar
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-muted-foreground hover:border-foreground/20"
                      }`}
                    >
                      <span className="text-sm mr-1">{ASPECT_META[ar].icon}</span>
                      {ASPECT_META[ar].label}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Quality */}
              <Field label="Quality">
                <div className="grid grid-cols-3 gap-1.5">
                  {provider.capabilities.supportedQualities.map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      className={`text-xs py-2 rounded-md border transition-all text-center ${
                        quality === q
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-muted-foreground hover:border-foreground/20"
                      }`}
                    >
                      <span className="font-semibold block text-[11px]">{QUALITY_META[q].label}</span>
                      <span className="text-[9px] opacity-60">{QUALITY_META[q].description}</span>
                    </button>
                  ))}
                </div>
              </Field>

              {/* Num outputs */}
              <Field label={<>Images: <span className="text-accent font-bold">{numOutputs[0]}</span></>}>
                <Slider value={numOutputs} onValueChange={setNumOutputs} min={1} max={provider.capabilities.maxOutputs} step={1} />
                <div className="flex justify-between text-[9px] text-muted-foreground mt-0.5">
                  {Array.from({ length: provider.capabilities.maxOutputs }, (_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
              </Field>

              {/* Generate button */}
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 text-sm font-bold shadow-md"
              >
                {isGenerating ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles className="w-4 h-4" /> Generate{numOutputs[0] > 1 ? ` ${numOutputs[0]} Images` : ""}</>
                )}
              </Button>
            </TabsContent>

            {/* ── Edit Tab (Scaffolded) ──────────────────────────────────── */}
            <TabsContent value="edit" className="p-5 space-y-5 mt-0">
              <Field label="Source Image">
                {editSourceImage ? (
                  <div className="relative rounded-lg overflow-hidden border border-border">
                    <img src={editSourceImage} alt="תמונת מקור לעריכה" className="w-full h-36 object-cover" />
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button variant="destructive" size="sm" onClick={() => setEditSourceImage(null)}>
                        <Trash2 className="w-3 h-3 mr-1" /> Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent/40 transition-colors">
                    <Upload className="w-5 h-5 text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">Upload image to edit</span>
                    <Input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = () => setEditSourceImage(reader.result as string);
                        reader.readAsDataURL(file);
                      }}
                    />
                  </label>
                )}
              </Field>

              <Field label="Edit Instruction">
                <Textarea
                  value={editPrompt}
                  onChange={(e) => setEditPrompt(e.target.value)}
                  placeholder="Make the sky more dramatic, add golden hour lighting..."
                  className="min-h-[80px] resize-none text-sm"
                />
              </Field>

              <Button
                onClick={handleEdit}
                disabled={isGenerating || !editSourceImage || !editPrompt.trim()}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 text-sm font-bold"
              >
                {isGenerating ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Editing...</>
                ) : (
                  <><PenTool className="w-4 h-4" /> Apply Edit</>
                )}
              </Button>

              {!provider.capabilities.supportsEditing && (
                <div className="bg-muted/50 border border-border rounded-lg p-3 text-xs text-muted-foreground">
                  <AlertTriangle className="w-3.5 h-3.5 inline mr-1 text-amber-500" />
                  Image editing is scaffolded but not yet available with the current provider.
                  The UI and contracts are ready for when editing APIs become available.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </aside>

        {/* ── Main Canvas ──────────────────────────────────────────────────── */}
        <main className="flex-1 p-5 overflow-y-auto">
          {/* Error state */}
          {error && (
            <div className="mb-4 bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-destructive">Generation Error</p>
                <p className="text-xs text-destructive/80 mt-0.5">{error}</p>
              </div>
              <button onClick={() => setError(null)} className="ml-auto text-destructive/60 hover:text-destructive">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Loading state */}
          {isGenerating && (
            <div className="mb-4 bg-accent/5 border border-accent/20 rounded-lg p-6 flex flex-col items-center text-center">
              <Loader2 className="w-8 h-8 text-accent animate-spin mb-3" />
              <p className="text-sm font-semibold text-foreground">Generating your image{numOutputs[0] > 1 ? "s" : ""}...</p>
              <p className="text-xs text-muted-foreground mt-1">This may take 10-30 seconds depending on quality</p>
            </div>
          )}

          {/* History header */}
          {history.length > 0 && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <h2 className="text-sm font-bold text-foreground">Generated Images</h2>
                <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                  {allImages.length}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={clearHistory} className="text-xs text-muted-foreground">
                <Trash2 className="w-3 h-3 mr-1" /> Clear
              </Button>
            </div>
          )}

          {/* Image grid */}
          {allImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {allImages.map((img, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={img.imageUrl}
                      alt={img.prompt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <Button size="icon" variant="secondary" className="h-9 w-9" onClick={() => setSelectedImage(img.imageUrl)}>
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-9 w-9" onClick={() => handleDownload(img.imageUrl, img.prompt)}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">{img.prompt}</p>
                    <p className="text-[9px] text-muted-foreground/50 mt-1">
                      {new Date(img.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : !isGenerating ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-muted-foreground">
              <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mb-5">
                <ImageIcon className="w-10 h-10 opacity-30" />
              </div>
              <p className="text-sm font-semibold text-foreground/70 mb-1">No images yet</p>
              <p className="text-xs opacity-60 max-w-[260px] text-center">
                Enter a prompt in the sidebar and click Generate to create your first image
              </p>
            </div>
          ) : null}
        </main>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
        >
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-background/80 hover:text-background transition-colors">
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

// ── Field helper ──────────────────────────────────────────────────────────

function Field({
  label,
  optional,
  hint,
  children,
}: {
  label: React.ReactNode;
  optional?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-[11px] font-semibold text-foreground mb-1.5 block uppercase tracking-wider">
        {label}
        {optional && <span className="text-muted-foreground font-normal normal-case ml-1">(optional)</span>}
        {hint && <span className="text-muted-foreground font-normal normal-case ml-1">— {hint}</span>}
      </label>
      {children}
    </div>
  );
}
