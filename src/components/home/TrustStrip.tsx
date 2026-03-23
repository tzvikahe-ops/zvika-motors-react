export default function TrustStrip() {
  const stats = [
    { number: "30+", label: "שנות ניסיון" },
    { number: "10,000+", label: "רכבים טופלו" },
    { number: "98%", label: "לקוחות חוזרים" },
    { number: "4.8", label: "דירוג בגוגל", suffix: "★" },
  ];

  return (
    <div className="bg-surface-darker border-t border-primary-foreground/[0.06]" dir="rtl">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ number, label, suffix }, i) => (
            <div
              key={label}
              className={`py-8 md:py-10 ${
                i > 0 ? "border-r border-primary-foreground/[0.06] pr-6 md:pr-10" : ""
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[30px] md:text-[36px] font-black text-primary-foreground leading-none tracking-tight">
                  {number}
                </span>
                {suffix && <span className="text-brand-red text-[18px] font-bold">{suffix}</span>}
              </div>
              <p className="text-primary-foreground/25 text-[11px] font-medium mt-2 tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
