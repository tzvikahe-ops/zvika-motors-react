import diagnosticImage from "@/assets/diagnostic-work.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-surface-darker relative" dir="rtl" aria-label="שירותי המוסך">
      <div className="absolute inset-0 pattern-dots opacity-60" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-red/50" />
              <p className="text-brand-red text-[11px] font-bold tracking-wider">שירותים</p>
            </div>
            <h2 className="text-[26px] md:text-[34px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.12]">
              מה אנחנו עושים
            </h2>
          </div>
          <button
            onClick={() => setPage("services")}
            className="text-primary-foreground/30 text-[12px] font-medium hover:text-primary-foreground/60 cursor-pointer bg-transparent border-none transition-colors duration-200"
          >
            כל השירותים ←
          </button>
        </div>

        {/* Featured service — panel with image */}
        <div className="border border-primary-foreground/[0.08] mb-px overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
            <div className="bg-surface-dark p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <WrenchSVG />
                <span className="text-primary-foreground/20 text-[10px] font-bold tracking-wider">שירות מרכזי</span>
              </div>
              <h3 className="font-black text-[20px] md:text-[22px] text-primary-foreground tracking-[-0.02em] mb-3">מכונאות רכב כללית</h3>
              <p className="text-primary-foreground/40 text-[14px] leading-[1.8] max-w-[400px] mb-6">
                טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים.
                הבסיס של כל מה שאנחנו עושים — טיפול מקצועי ואמין שמאריך את חיי הרכב שלכם.
              </p>
              <button
                onClick={() => setPage("services")}
                className="flex items-center gap-2 text-brand-red text-[13px] font-bold bg-transparent border-none cursor-pointer p-0 hover:text-brand-red-hover transition-colors w-fit"
              >
                <span>פרטים נוספים</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
            </div>
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2">
              <img
                src={diagnosticImage}
                alt="דיאגנוסטיקה ממוחשבת"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>

        {/* Secondary services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/[0.06]">
          {[
            { icon: <ScanSVG />, title: "דיאגנוסטיקה ממוחשבת", desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם" },
            { icon: <ACSvg />, title: "מיזוג אוויר לרכב", desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור" },
            { icon: <ClipboardSVG />, title: "הכנה לטסט שנתי", desc: "בדיקה מקיפה לפני מבחן הרישוי השנתי" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-surface-darker p-7 md:p-8 group relative">
              <div className="absolute top-0 right-0 w-8 h-px bg-brand-red/20 group-hover:w-16 transition-all duration-300" />
              <div className="text-brand-red/40 mb-4">{icon}</div>
              <h3 className="font-bold text-[14px] text-primary-foreground tracking-[-0.01em] mb-2">{title}</h3>
              <p className="text-primary-foreground/30 text-[13px] leading-[1.7] max-w-[280px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Custom service icons — consistent 20×20, strokeWidth 1.5 */
const WrenchSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(2 58% 42% / 0.5)" strokeWidth="1.5">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const ScanSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <line x1="12" y1="7" x2="12" y2="17" />
  </svg>
);

const ACSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2v20M2 12h20M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ClipboardSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);
