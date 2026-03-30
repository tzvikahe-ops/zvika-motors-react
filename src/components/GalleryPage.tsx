import garagePhoto from "@/assets/gallery-garage.webp";
import { Camera, Phone } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import InternalLink from "./InternalLink";

export default function GalleryPage() {
  return (
    <div dir="rtl" className="pt-[64px] md:pt-[72px] min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 pt-0 md:pt-1 pb-16 md:pb-20">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/[0.08] text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-1 tracking-wider">תמונות נוספות בדרך</div>
          <h1 className="text-3xl md:text-[40px] font-black text-foreground mb-2">הגלריה שלנו</h1>
          <p className="text-muted-foreground text-sm max-w-[500px] mx-auto">
            הצצה ראשונה למוסך שלנו ברחוב האופה 4, גבעת שאול - תמונות נוספות יתווספו בקרוב
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
            <p className="text-muted-foreground text-[13px] leading-relaxed max-w-[400px] mx-auto mb-5">
              בקרוב נוסיף לכאן תמונות אמיתיות מהמוסך. בינתיים, אנחנו כאן בטלפון או בוואטסאפ.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="tel:02-6514446"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-brand-red border border-brand-red/30 rounded-full px-4 min-h-[36px] hover:bg-brand-red/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                02-6514446
              </a>
              <a
                href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20האתר%20ואשמח%20לקבל%20פרטים%20%F0%9F%94%A7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("gallery")}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white bg-[#25D366] rounded-full px-4 min-h-[36px] hover:bg-[#20bd5a] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                וואטסאפ
              </a>
            </div>
          </div>
        </div>

        {/* CTA - conversion */}
        <div className="max-w-[560px] mx-auto mt-12 text-center">
          <p className="text-foreground/40 text-[11px] font-bold tracking-wider mb-3">רוצים לראות את המוסך מקרוב?</p>
          <h2 className="text-[20px] md:text-[24px] font-black text-foreground mb-2 tracking-[-0.02em]">תאמו ביקור במוסך</h2>
          <p className="text-muted-foreground text-[13px] mb-6 leading-[1.8]">נשמח לראות אתכם ולטפל ברכב. פנו אלינו בוואטסאפ או השאירו פרטים ונחזור אליכם.</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20הגלריה%20באתר%20ואשמח%20לתאם%20ביקור%20במוסך%20%F0%9F%94%A7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("gallery-cta")}
              className="inline-flex items-center gap-2 text-[13px] font-bold text-white bg-[#25D366] rounded-md px-6 min-h-[44px] hover:bg-[#20bd5a] transition-colors no-underline"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלחו הודעה בוואטסאפ
            </a>
            <InternalLink
              page="contact"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground/70 border border-border rounded-md px-6 min-h-[44px] hover:border-brand-red/30 hover:text-brand-red transition-colors no-underline"
            >
              <Phone className="w-3.5 h-3.5" />
              צרו קשר ותאמו תור
            </InternalLink>
          </div>
        </div>

        {/* Internal links */}
        <div className="max-w-[560px] mx-auto flex flex-wrap justify-center gap-3 mt-8">
          <InternalLink page="services" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">שירותי המוסך</InternalLink>
          <InternalLink page="about" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">הסיפור שלנו</InternalLink>
          <InternalLink page="faq" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">שאלות נפוצות</InternalLink>
          <InternalLink page="blog-article" slug="איך-לבחור-מוסך-אמין-בירושלים" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">איך לבחור מוסך אמין?</InternalLink>
          <InternalLink page="blog" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">טיפים לתחזוקת הרכב</InternalLink>
          <InternalLink page="contact" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">צרו קשר</InternalLink>
        </div>
      </div>
    </div>
  );
}
