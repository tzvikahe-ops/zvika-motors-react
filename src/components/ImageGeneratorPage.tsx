import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Download, ImageIcon, Sparkles, History } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface GeneratedImage {
  imageUrl: string;
  prompt: string;
  text?: string;
}

const STYLE_OPTIONS = [
  { value: "none", label: "ללא סגנון" },
  { value: "photorealistic", label: "פוטוריאליסטי" },
  { value: "digital art", label: "אמנות דיגיטלית" },
  { value: "oil painting", label: "ציור שמן" },
  { value: "watercolor", label: "צבעי מים" },
  { value: "3D render", label: "רנדר תלת-ממדי" },
  { value: "anime", label: "אנימה" },
  { value: "sketch", label: "סקיצה" },
  { value: "cinematic", label: "קולנועי" },
];

const ASPECT_OPTIONS = [
  { value: "1:1", label: "1:1 — ריבועי" },
  { value: "16:9", label: "16:9 — רחב" },
  { value: "9:16", label: "9:16 — גבוה" },
  { value: "4:3", label: "4:3 — קלאסי" },
  { value: "3:2", label: "3:2 — צילום" },
];

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("none");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({ title: "נא להזין תיאור לתמונה", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-image", {
        body: { prompt: prompt.trim(), style, aspectRatio },
      });

      if (error) throw error;

      if (data.error) {
        toast({ title: "שגיאה", description: data.error, variant: "destructive" });
        return;
      }

      setGeneratedImages((prev) => [
        { imageUrl: data.imageUrl, prompt: prompt.trim(), text: data.text },
        ...prev,
      ]);

      toast({ title: "התמונה נוצרה בהצלחה!" });
    } catch (err: any) {
      console.error("Generation error:", err);
      toast({
        title: "שגיאה ביצירת תמונה",
        description: err.message || "נסה שוב מאוחר יותר",
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
      a.download = `generated-${promptText.slice(0, 30).replace(/\s+/g, "-")}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch {
      window.open(url, "_blank");
    }
  };

  return (
    <div dir="rtl" className="pt-[68px] min-h-screen bg-background">
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/[0.08] text-accent text-[11px] font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
            <Sparkles className="w-3 h-3" />
            מחולל תמונות AI
          </div>
          <h1 className="text-3xl md:text-[40px] font-black text-foreground mb-3">
            יצירת תמונות בינה מלאכותית
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            תאר את התמונה שברצונך ליצור והמערכת תייצר אותה עבורך
          </p>
        </div>

        {/* Controls */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">תיאור התמונה</label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="לדוגמה: רכב ספורט אדום חונה במוסך מקצועי, תאורה דרמטית, פוטוריאליסטי..."
                className="min-h-[100px] resize-none text-right"
                dir="rtl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">סגנון</label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {STYLE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">יחס גובה-רוחב</label>
                <Select value={aspectRatio} onValueChange={setAspectRatio}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ASPECT_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-bold"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  יוצר תמונה...
                </>
              ) : (
                <>
                  <ImageIcon className="w-4 h-4" />
                  צור תמונה
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        {generatedImages.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <History className="w-4 h-4 text-muted-foreground" />
              <h2 className="text-lg font-bold text-foreground">תמונות שנוצרו</h2>
              <span className="text-xs text-muted-foreground">({generatedImages.length})</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {generatedImages.map((img, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm group">
                  <div
                    className="aspect-square cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage(img.imageUrl)}
                  >
                    <img
                      src={img.imageUrl}
                      alt={img.prompt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-3 flex items-start justify-between gap-2">
                    <p className="text-xs text-muted-foreground line-clamp-2 flex-1">{img.prompt}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                      onClick={() => handleDownload(img.imageUrl, img.prompt)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {generatedImages.length === 0 && !isGenerating && (
          <div className="text-center py-16 text-muted-foreground">
            <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">התמונות שתיצור יופיעו כאן</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="Generated image"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}
