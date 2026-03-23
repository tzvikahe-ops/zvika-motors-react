import { useState } from "react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80", alt: "תיקון מנוע במוסך" },
  { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80", alt: "בדיקת רכב מקצועית" },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80", alt: "מוסך מקצועי בירושלים" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", alt: "רכב מטופל" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "כלי עבודה מקצועיים" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80", alt: "עבודת מכונאות" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div dir="rtl" className="pt-[68px] min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-red/[0.08] text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-4 tracking-wider">גלריה</div>
          <h1 className="text-3xl md:text-[40px] font-black text-foreground mb-3">הגלריה שלנו</h1>
          <p className="text-muted-foreground text-sm">הצצה לעבודה היומיומית במוסך של צביקה</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="rounded-lg overflow-hidden aspect-[4/3] cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-surface-darker/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
        >
          <img
            src={galleryImages[selected].src.replace("w=600", "w=1200")}
            alt={galleryImages[selected].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}
