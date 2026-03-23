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
    <section id="services" className="py-14 md:py-20 px-6 bg-background" dir="rtl" aria-label="שירותי המוסך">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-[20px] md:text-[26px] font-black text-foreground">שירותים</h2>
          <button
            onClick={() => setPage("services")}
            className="text-muted-foreground text-[12px] font-medium hover:text-foreground cursor-pointer bg-transparent border-none transition-colors duration-200"
          >
            הכל ←
          </button>
        </div>

        {/* Services as rows, not cards */}
        <div className="border-t border-border">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 py-5 border-b border-border">
              <div className="text-muted-foreground/40 shrink-0 mt-0.5">{icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-[14px] text-foreground">{title}</h3>
                <p className="text-muted-foreground text-[12px] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
