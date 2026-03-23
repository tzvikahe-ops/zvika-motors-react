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
          <div>
            <h2 className="text-[22px] md:text-[28px] font-black text-foreground tracking-[-0.02em]">שירותים</h2>
            <p className="text-muted-foreground text-[13px] mt-1.5">מגוון שירותי רכב תחת קורת גג אחת</p>
          </div>
          <button
            onClick={() => setPage("services")}
            className="text-muted-foreground text-[12px] font-medium hover:text-foreground cursor-pointer bg-transparent border-none transition-colors duration-200"
          >
            כל השירותים ←
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="bg-background flex items-start gap-5 p-6 md:p-8">
              <div className="text-brand-red/50 shrink-0 mt-0.5">{icon}</div>
              <div className="max-w-[340px]">
                <h3 className="font-bold text-[15px] text-foreground tracking-[-0.01em]">{title}</h3>
                <p className="text-muted-foreground text-[13px] mt-1.5 leading-[1.7]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
