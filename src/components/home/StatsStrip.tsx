import { ClockIcon, EyeIcon, HistoryIcon, ShieldIcon } from "../Icons";

const stats = [
  { icon: <HistoryIcon />, value: "30+", label: "שנות ניסיון" },
  { icon: <EyeIcon />, value: "100%", label: "שקיפות מלאה" },
  { icon: <ShieldIcon />, value: "אחריות", label: "על כל טיפול" },
  { icon: <ClockIcon />, value: "יום", label: "זמן תגובה" },
];

export default function StatsStrip() {
  return (
    <section className="bg-surface-dark" dir="rtl" aria-label="יתרונות המוסך">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-primary-foreground/[0.06]">
        {stats.map(({ icon, value, label }) => (
          <div key={label} className="flex flex-col items-center justify-center py-8 px-4 gap-2">
            <span className="text-brand-red">{icon}</span>
            <div className="text-center">
              <div className="font-black text-2xl md:text-3xl text-primary-foreground leading-none">{value}</div>
              <div className="text-[11px] text-primary-foreground/40 font-medium mt-1">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
