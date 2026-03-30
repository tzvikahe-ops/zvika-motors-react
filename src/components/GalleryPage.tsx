import { useState } from "react";
import garagePhoto from "@/assets/gallery-garage.webp";

function unsplashSrcSet(id: string) {
  return `https://images.unsplash.com/${id}?w=400&q=75 400w, https://images.unsplash.com/${id}?w=600&q=80 600w, https://images.unsplash.com/${id}?w=800&q=80 800w`;
}

const galleryImages = [
  { src: garagePhoto, alt: "חזית המוסך של צביקה בגבעת שאול", srcSet: undefined as string | undefined, caption: "המוסך ממוקם ברחוב האופה 4, גבעת שאול - נגיש ועם חניה חופשית" },
  { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80", alt: "בדיקת רכב מקצועית", srcSet: unsplashSrcSet("photo-1530046339160-ce3e530c7d2f"), caption: "בדיקת רכב מקיפה - אבחון ויזואלי ומכני לפני כל טיפול" },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80", alt: "מוסך מקצועי בירושלים", srcSet: unsplashSrcSet("photo-1619642751034-765dfdf7c58e"), caption: "סביבת עבודה מאורגנת ונקייה - ככה נראה מוסך שעובד נכון" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", alt: "רכב מטופל", srcSet: unsplashSrcSet("photo-1492144534655-ae79c964c9d7"), caption: "מטפלים בכל סוגי הרכבים - יפניים, קוריאניים, אירופיים ואמריקאיים" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "כלי עבודה מקצועיים", srcSet: unsplashSrcSet("photo-1558618666-fcd25c85cd64"), caption: "ציוד מקצועי ומתקדם לאבחון ותיקון מדויק" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80", alt: "עבודת מכונאות", srcSet: unsplashSrcSet("photo-1486262715619-67b85e0b08d3"), caption: "מעל 30 שנות ניסיון בעבודת ידיים מקצועית" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div dir="rtl" className="pt-[64px] md:pt-[72px] min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 pt-0 md:pt-1 pb-16 md:pb-20">
        <div className="text-center mb-5 md:mb-6">
          <div className="inline-flex items-center gap-2 bg-brand-red/[0.08] text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-1 tracking-wider">הוכחה ויזואלית</div>
          <h1 className="text-3xl md:text-[40px] font-black text-foreground mb-2">הגלריה שלנו</h1>
          <p className="text-muted-foreground text-sm max-w-[500px] mx-auto">
            תמונות אמיתיות מהמוסך - ככה נראית עבודה מקצועית, סביבה מסודרת וציוד שעובד
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="rounded-lg overflow-hidden cursor-pointer group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-muted-foreground text-[11px] md:text-[12px] leading-[1.6] mt-2 px-1">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          role="dialog"
          aria-label="תמונה מוגדלת - לחצו לסגירה"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-surface-darker/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 cursor-pointer"
        >
          <img
            src={galleryImages[selected].src.replace("w=600", "w=1200")}
            alt={galleryImages[selected].alt}
            className="max-w-full max-h-[75vh] rounded-lg object-contain"
          />
          <p className="text-primary-foreground/70 text-[13px] mt-4 max-w-[500px] text-center">{galleryImages[selected].caption}</p>
        </div>
      )}
    </div>
  );
}
