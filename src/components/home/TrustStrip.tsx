export default function TrustStrip() {
  const stats = [
    { number: "30+", label: "שנות ניסיון", icon: <ClockSVG /> },
    { number: "10,000+", label: "רכבים טופלו", icon: <CarSVG /> },
    { number: "98%", label: "לקוחות חוזרים", icon: <RepeatSVG /> },
    { number: "4.8", label: "דירוג בגוגל", icon: <StarSVG /> },
  ];

  return (
    <div className="bg-surface-darker pattern-dots" dir="rtl">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ number, label, icon }, i) => (
            <div
              key={label}
              className={`py-10 md:py-12 ${
                i > 0 ? "border-r border-primary-foreground/[0.06] pr-6 md:pr-10" : ""
              }`}
            >
              <div className="text-brand-red/40 mb-3">{icon}</div>
              <div className="text-[28px] md:text-[34px] font-black text-primary-foreground leading-none tracking-tight">
                {number}
              </div>
              <p className="text-primary-foreground/25 text-[11px] font-medium mt-2 tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Minimal, consistent SVG icons — 18×18, stroke-based */
const ClockSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const CarSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 17h14M5 17a2 2 0 01-2-2v-3a1 1 0 011-1h1l2-4h10l2 4h1a1 1 0 011 1v3a2 2 0 01-2 2M5 17a2 2 0 002 2h1a2 2 0 002-2M14 17a2 2 0 002 2h1a2 2 0 002-2" />
  </svg>
);

const RepeatSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 014-4h14" />
    <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 01-4 4H3" />
  </svg>
);

const StarSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
