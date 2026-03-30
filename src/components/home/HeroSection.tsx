import heroImage from "@/assets/hero-garage.webp";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

import type { Page } from "@/types/page";

const WhatsAppSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const PhoneSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const trustItems = [
  { icon: "🔧", text: "מעל 30 שנות ניסיון" },
  { icon: "👨‍👩‍👧‍👦", text: "אלפי לקוחות מרוצים" },
  { icon: "🤝", text: "שירות אישי ואמין" },
];

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative bg-surface-darker overflow-hidden" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90svh] md:min-h-[85svh]">
        {/* Content panel */}
        <div className="relative z-10 bg-surface-darker flex flex-col justify-center order-2 md:order-1">
          <div className="hidden md:block absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-brand-red/40 to-transparent" />

          <div className="relative px-6 sm:px-10 md:px-12 lg:px-16 py-20 md:py-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-red/50" />
              <p className="text-primary-foreground/60 text-[11px] font-bold tracking-[0.15em] uppercase">
                מאז 1993 · גבעת שאול, ירושלים
              </p>
            </div>

            <div className="mb-5 md:mb-6" role="presentation">
              <span className="block text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-black text-primary-foreground leading-[1.05] tracking-[-0.035em]">
                המוסך שאפשר
              </span>
              <span className="block text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-black leading-[1.05] tracking-[-0.035em] text-brand-red mt-1">
                לסמוך עליו.
              </span>
            </div>

            <p className="text-primary-foreground/70 text-[14px] md:text-[15px] leading-[1.9] mb-6 md:mb-8 max-w-[400px]">
              טיפול מקצועי, מחירים שקופים, ובעל מקצוע שמדבר איתכם ישירות. בלי הפתעות, בלי עבודות מיותרות.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 md:mb-10">
              {trustItems.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="text-[16px]">{icon}</span>
                  <span className="text-primary-foreground/70 text-[12px] font-bold">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* GA4: whatsapp_click / hero */}
              <a
                href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero")}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-3.5 text-[13px] font-bold no-underline transition-all duration-200 shadow-[0_4px_24px_-6px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_28px_-4px_rgba(37,211,102,0.45)] hover:-translate-y-px"
              >
                <WhatsAppSVG />
                <span>שלחו וואטסאפ</span>
              </a>
              {/* GA4: phone_click / hero */}
              <a
                href="tel:02-6514446"
                onClick={() => trackPhoneClick("hero")}
                className="btn-primary text-center no-underline inline-flex items-center justify-center gap-2"
              >
                <PhoneSVG />
                02-6514446
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-6 mt-10 md:mt-12 pt-8 border-t border-primary-foreground/[0.06]">
              <div>
                <div className="text-[22px] font-black text-primary-foreground leading-none">30+</div>
                <p className="text-primary-foreground/55 text-[10px] font-medium mt-1">שנות ניסיון</p>
              </div>
              <div className="w-px h-8 bg-primary-foreground/[0.06]" />
              <div>
                <div className="text-[22px] font-black text-primary-foreground leading-none">4.8</div>
                <p className="text-primary-foreground/55 text-[10px] font-medium mt-1">דירוג בגוגל</p>
              </div>
              <div className="w-px h-8 bg-primary-foreground/[0.06]" />
              <div>
                <div className="text-[22px] font-black text-primary-foreground leading-none">98%</div>
                <p className="text-primary-foreground/55 text-[10px] font-medium mt-1">לקוחות חוזרים</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image panel */}
        <div className="relative order-1 md:order-2 min-h-[280px] md:min-h-0">
          <img
            src={heroImage}
            alt="מוסך של צביקה – מוסך מקצועי בגבעת שאול, ירושלים"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-surface-darker/10" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-darker to-transparent" />
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-darker to-transparent" />
        </div>
      </div>
    </section>
  );
}
