import type { Page } from "@/types/page";
import { trackWhatsAppClick } from "@/lib/analytics";
import InternalLink from "../InternalLink";

const WhatsAppSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const WrenchSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(2 58% 42% / 0.5)" strokeWidth="1.5">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);
const ScanSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
    <line x1="7" y1="12" x2="17" y2="12" /><line x1="12" y1="7" x2="12" y2="17" />
  </svg>
);
const ACSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="3" />
    <path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83" />
  </svg>
);
const ClipboardSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 14l2 2 4-4" />
  </svg>
);
const OilSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2v6M6 8h12l-2 14H8L6 8z" /><circle cx="12" cy="5" r="1" fill="currentColor" />
  </svg>
);
const BrakeSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

const services = [
  {
    icon: <WrenchSVG />,
    title: "מכונאות רכב כללית",
    desc: "טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים - היסודות שמאריכים את חיי הרכב.",
  },
  {
    icon: <ScanSVG />,
    title: "דיאגנוסטיקה ממוחשבת",
    desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם. מזהים בעיות שאחרים מפספסים.",
  },
  {
    icon: <ACSvg />,
    title: "מיזוג אוויר לרכב",
    desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור. חוזרים לנהוג בנוחות.",
  },
  {
    icon: <ClipboardSVG />,
    title: "הכנה לטסט שנתי",
    desc: "בדיקה מקיפה לפני הטסט. מתקנים מה שצריך כדי שהרכב יעבור בפעם הראשונה.",
  },
  {
    icon: <OilSVG />,
    title: "החלפת שמנים ופילטרים",
    desc: "שמנים איכותיים ופילטרים מקוריים. טיפול מהיר שמגן על המנוע לטווח ארוך.",
  },
  {
    icon: <BrakeSVG />,
    title: "בלמים ומערכות בטיחות",
    desc: "בדיקה, תיקון והחלפת רפידות ודיסקים. הבטיחות שלכם קודמת לכל.",
  },
];

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-20 md:py-28 px-5 sm:px-6 bg-surface-darker relative" dir="rtl" aria-label="שירותי המוסך">
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-brand-red/40" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">השירותים שלנו</p>
            <div className="w-8 h-[2px] bg-brand-red/40" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.1]">
            טיפול מקצועי לכל סוגי הרכבים
          </h2>
        </div>

        {/* 6-service grid - more spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ icon, title, desc }, i) => (
            <div key={title} className={`rounded-lg p-6 md:p-7 group relative flex flex-col border transition-all duration-300 ${
              i === 0
                ? "bg-brand-red/[0.04] border-brand-red/10 hover:border-brand-red/25 sm:col-span-2 lg:col-span-1"
                : "bg-primary-foreground/[0.03] border-primary-foreground/[0.04] hover:border-brand-red/15"
            }`}>
              <div className="absolute top-0 right-4 left-4 h-[2px] bg-brand-red/0 group-hover:bg-brand-red/25 rounded-full transition-all duration-500" />
              <div className={`mb-3 transition-colors duration-200 ${i === 0 ? "text-brand-red/80 group-hover:text-brand-red" : "text-brand-red/50 group-hover:text-brand-red/80"}`}>{icon}</div>
              <h3 className="font-bold text-[14px] md:text-[15px] text-primary-foreground tracking-[-0.01em] mb-1.5">{title}</h3>
              <p className="text-primary-foreground/50 text-[12px] md:text-[13px] leading-[1.7] flex-1">{desc}</p>
              <a
                href="https://wa.me/972526514446?text=שלום%2C%20אשמח%20לשמוע%20פרטים%20על%20השירות%3A%20" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`service-card-${i}`)}
                className="inline-flex items-center gap-1.5 mt-3 pt-2 border-t border-primary-foreground/[0.06] text-[11px] md:text-[12px] text-[#25D366]/80 hover:text-[#25D366] font-medium transition-colors duration-200 md:opacity-0 md:group-hover:opacity-100 min-h-[36px] no-underline"
              >
                <WhatsAppSVG />
                <span>התייעצות בוואטסאפ</span>
              </a>
            </div>
          ))}
        </div>

        {/* Primary WhatsApp CTA */}
        <div className="text-center mt-10 md:mt-14 flex flex-col items-center gap-3">
          <a
            href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("services-main")}
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white text-[14px] md:text-[15px] font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 no-underline"
          >
            <WhatsAppSVG />
            <span>תאמו טיפול בוואטסאפ</span>
          </a>
          <InternalLink
            page="services"
            className="btn-text text-primary-foreground/40 hover:text-primary-foreground/70 text-[12px] no-underline"
          >
            כל השירותים שלנו ←
          </InternalLink>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <InternalLink page="blog" className="text-[12px] text-primary-foreground/35 hover:text-primary-foreground/70 border border-primary-foreground/10 hover:border-primary-foreground/20 px-4 py-2 transition-colors duration-200 no-underline">מדריכים וטיפים מקצועיים ←</InternalLink>
            <InternalLink page="contact" className="text-[12px] text-primary-foreground/35 hover:text-primary-foreground/70 border border-primary-foreground/10 hover:border-primary-foreground/20 px-4 py-2 transition-colors duration-200 no-underline">צרו קשר ותאמו תור ←</InternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
