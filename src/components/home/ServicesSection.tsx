import diagnosticImage from "@/assets/diagnostic-work.jpg";

import type { Page } from "@/types/page";

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-16 md:py-24 px-5 sm:px-6 bg-surface-darker relative" dir="rtl" aria-label="שירותי המוסך">
      <div className="absolute inset-0 pattern-dots opacity-50" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-brand-red/50" />
              <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">השירותים שלנו</p>
            </div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.1]">
              טיפול מקצועי לכל סוגי הרכבים
            </h2>
          </div>
          <button
            onClick={() => setPage("services")}
            className="btn-text group hidden sm:flex"
          >
            <span>כל השירותים</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-1"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
        </div>

        {/* Featured service — large split panel */}
        <div className="border border-primary-foreground/[0.08] overflow-hidden mb-3">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
            {/* Image */}
            <div className="aspect-[16/10] md:aspect-auto overflow-hidden relative order-1 md:order-2">
              <img
                src={diagnosticImage}
                alt="עבודת דיאגנוסטיקה ממוחשבת"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
              {/* Red accent corner */}
              <div className="absolute top-0 left-0 w-16 h-[3px] bg-brand-red" />
              <div className="absolute top-0 left-0 w-[3px] h-16 bg-brand-red" />
            </div>
            {/* Content */}
            <div className="bg-surface-dark p-7 sm:p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative">
              <div className="flex items-center gap-2.5 mb-5">
                <WrenchSVG />
                <span className="text-primary-foreground/20 text-[10px] font-bold tracking-[0.15em] uppercase">שירות מרכזי</span>
              </div>
              <h3 className="font-black text-[20px] sm:text-[22px] md:text-[26px] text-primary-foreground tracking-[-0.02em] mb-3 leading-[1.15]">
                מכונאות רכב כללית
              </h3>
              <p className="text-primary-foreground/40 text-[13px] md:text-[14px] leading-[1.85] max-w-[420px] mb-7">
                טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים. היסודות שמאריכים את חיי הרכב שלכם, בביצוע מקצועי ואמין.
              </p>
              <button
                onClick={() => setPage("services")}
                className="btn-primary w-fit group"
              >
                <span>פרטים נוספים</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-1"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/[0.05]">
          {[
            { icon: <ScanSVG />, title: "דיאגנוסטיקה ממוחשבת", desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם" },
            { icon: <ACSvg />, title: "מיזוג אוויר לרכב", desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור" },
            { icon: <ClipboardSVG />, title: "הכנה לטסט שנתי", desc: "בדיקה מקיפה שמוודאת שהרכב מוכן למבחן הרישוי" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-surface-darker p-6 sm:p-7 md:p-8 group relative">
              {/* Top accent line */}
              <div className="absolute top-0 right-0 w-0 group-hover:w-full h-[2px] bg-brand-red/30 transition-all duration-500" />
              <div className="text-brand-red/40 group-hover:text-brand-red/70 mb-4 transition-colors duration-200">{icon}</div>
              <h3 className="font-bold text-[13px] md:text-[14px] text-primary-foreground tracking-[-0.01em] mb-2">{title}</h3>
              <p className="text-primary-foreground/30 text-[12px] md:text-[13px] leading-[1.75] max-w-[280px]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <button
          onClick={() => setPage("services")}
          className="btn-outline-dark w-full mt-4 sm:hidden"
        >
          כל השירותים שלנו
        </button>
      </div>
    </section>
  );
}

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
