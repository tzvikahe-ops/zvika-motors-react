type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

/* Service icon strip — inspired by Alastair Reid / Autotec service bars */
const services = [
  { icon: <WrenchSVG />, label: "מכונאות כללית" },
  { icon: <ScanSVG />, label: "דיאגנוסטיקה" },
  { icon: <ACSvg />, label: "מיזוג אוויר" },
  { icon: <ClipboardSVG />, label: "הכנה לטסט" },
  { icon: <OilSVG />, label: "החלפת שמנים" },
  { icon: <BrakeSVG />, label: "בלמים" },
];

export default function ServiceStrip({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="bg-surface-dark border-t border-b border-primary-foreground/[0.06] relative" dir="rtl">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {services.map(({ icon, label }, i) => (
            <button
              key={label}
              onClick={() => setPage("services")}
              className={`flex flex-col items-center justify-center gap-2.5 py-6 md:py-7 cursor-pointer bg-transparent border-none group transition-all duration-200 hover:bg-primary-foreground/[0.02] relative ${
                i > 0 ? "border-r border-primary-foreground/[0.05]" : ""
              }`}
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-[2px] bg-brand-red/50 transition-all duration-300" />
              <div className="text-primary-foreground/25 group-hover:text-brand-red/60 transition-colors duration-200">{icon}</div>
              <span className="text-primary-foreground/40 group-hover:text-primary-foreground/70 text-[11px] md:text-[12px] font-bold transition-colors duration-200">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Icons — 22×22, consistent stroke weight */
const WrenchSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
