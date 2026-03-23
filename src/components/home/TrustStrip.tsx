export default function TrustStrip() {
  return (
    <div className="bg-surface-dark border-y border-primary-foreground/[0.06]" dir="rtl">
      <div className="max-w-[1100px] mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {[
            { number: "30+", label: "שנות ניסיון" },
            { number: "10,000+", label: "רכבים טופלו" },
            { number: "98%", label: "לקוחות חוזרים" },
            { number: "4.8", label: "דירוג בגוגל", suffix: "★" },
          ].map(({ number, label, suffix }, i) => (
            <div
              key={label}
              className={`${i > 0 ? "md:border-r md:border-primary-foreground/[0.08]" : ""} md:pr-8 first:md:pr-0`}
            >
              <div className="text-[28px] md:text-[32px] font-black text-primary-foreground leading-none tracking-tight">
                {number}
                {suffix && <span className="text-brand-red text-[20px] mr-1">{suffix}</span>}
              </div>
              <p className="text-primary-foreground/30 text-[12px] font-medium mt-1.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
