import { WrenchIcon, DiagIcon, SnowflakeIcon, ChecklistIcon } from "../Icons";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

const services = [
  { icon: <WrenchIcon />, title: "מכונאות רכב כללית", desc: "טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים" },
  { icon: <DiagIcon />, title: "דיאגנוסטיקה ממוחשבת", desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם" },
  { icon: <SnowflakeIcon />, title: "מיזוג אוויר לרכב", desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור" },
  { icon: <ChecklistIcon />, title: "הכנה לטסט שנתי", desc: "בדיקה מקיפה לפני מבחן הרישוי" },
];

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-background" dir="rtl" aria-label="שירותי המוסך">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-[22px] md:text-[28px] font-black text-foreground tracking-[-0.02em]">שירותים</h2>
          <button
            onClick={() => setPage("services")}
            className="text-muted-foreground text-[12px] font-medium hover:text-foreground cursor-pointer bg-transparent border-none transition-colors duration-200"
          >
            הכל ←
          </button>
        </div>

        <div className="border-t border-border">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-5 py-6 border-b border-border">
              <div className="text-muted-foreground/30 shrink-0 mt-0.5">{icon}</div>
              <div className="flex-1 max-w-[480px]">
                <h3 className="font-bold text-[15px] text-foreground tracking-[-0.01em]">{title}</h3>
                <p className="text-muted-foreground text-[13px] mt-1 leading-[1.7]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
