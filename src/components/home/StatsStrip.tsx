export default function StatsStrip() {
  return (
    <section className="bg-surface-dark border-b border-primary-foreground/[0.06]" dir="rtl" aria-label="יתרונות המוסך">
      <div className="max-w-[1100px] mx-auto grid grid-cols-4 px-6">
        {[
          { value: "30+", label: "שנות ניסיון" },
          { value: "שקיפות", label: "מלאה בכל טיפול" },
          { value: "אחריות", label: "על כל עבודה" },
          { value: "יום", label: "זמן תגובה" },
        ].map(({ value, label }, i) => (
          <div key={label} className={`flex flex-col items-center py-5 ${i > 0 ? "border-r border-primary-foreground/[0.06]" : ""}`}>
            <span className="text-primary-foreground font-black text-[14px] md:text-[16px] leading-none">{value}</span>
            <span className="text-primary-foreground/25 text-[10px] mt-1.5">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
