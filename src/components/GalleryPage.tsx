import garagePhoto from "@/assets/gallery-garage.webp";
import { Camera } from "lucide-react";

export default function GalleryPage() {
  return (
    <div dir="rtl" className="pt-[64px] md:pt-[72px] min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 pt-0 md:pt-1 pb-16 md:pb-20">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/[0.08] text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-1 tracking-wider">הוכחה ויזואלית</div>
          <h1 className="text-3xl md:text-[40px] font-black text-foreground mb-2">הגלריה שלנו</h1>
          <p className="text-muted-foreground text-sm max-w-[500px] mx-auto">
            תמונות אמיתיות מהמוסך - ככה נראית עבודה מקצועית, סביבה מסודרת וציוד שעובד
          </p>
        </div>

        {/* Real photo */}
        <div className="max-w-[720px] mx-auto mb-10">
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={garagePhoto}
                alt="חזית המוסך של צביקה בגבעת שאול"
                width={720}
                height={540}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <p className="text-muted-foreground text-[12px] leading-[1.6] mt-2 px-1 text-center">
              המוסך ממוקם ברחוב האופה 4, גבעת שאול - נגיש ועם חניה חופשית
            </p>
          </div>
        </div>

        {/* Coming soon notice */}
        <div className="max-w-[560px] mx-auto text-center">
          <div className="bg-muted/50 border border-border rounded-xl px-8 py-10">
            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
              <Camera className="w-5 h-5 text-brand-red" />
            </div>
            <h2 className="text-lg font-bold text-foreground mb-2">תמונות נוספות בדרך</h2>
            <p className="text-muted-foreground text-[13px] leading-relaxed max-w-[400px] mx-auto">
              אנחנו מצלמים את המוסך, הצוות והעבודה היומיומית כדי לתת לכם תמונה אמיתית של מה שמחכה לכם. העמוד יתעדכן בקרוב עם תמונות נוספות.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
