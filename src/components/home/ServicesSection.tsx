import { WrenchIcon, DiagIcon, SnowflakeIcon, ChecklistIcon } from "../Icons";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

const services = [
  {
    icon: <WrenchIcon />,
    title: "מכונאות רכב כללית",
    desc: "טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים. הרכב שלכם יוצא מהמוסך בטוח ומוכן לדרך.",
  },
  {
    icon: <DiagIcon />,
    title: "דיאגנוסטיקה ממוחשבת",
    desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם. חוסך זמן, כסף ותיקונים מיותרים.",
  },
  {
    icon: <SnowflakeIcon />,
    title: "מיזוג אוויר לרכב",
    desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור. נסיעה נעימה גם בקיץ הירושלמי.",
  },
  {
    icon: <ChecklistIcon />,
    title: "הכנה לטסט שנתי",
    desc: "בדיקה מקיפה לפני מבחן הרישוי. נטפל בהכל כדי שתעברו בפעם הראשונה.",
  },
];

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-background" dir="rtl" aria-label="שירותי המוסך">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl md:text-[36px] font-black text-foreground leading-tight">
              שירותי המוסך
            </h2>
            <p className="text-muted-foreground text-[13px] mt-2 max-w-[400px]">
              מכונאות כללית, דיאגנוסטיקה, מיזוג אוויר והכנה לטסט. הכל תחת קורת גג אחת.
            </p>
          </div>
          <button
            onClick={() => setPage("services")}
            className="text-foreground text-[13px] font-bold hover:text-brand-red cursor-pointer bg-transparent border-none self-start md:self-auto transition-colors duration-200"
          >
            כל השירותים ←
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-card p-7 md:p-8 flex gap-5"
            >
              <div className="text-muted-foreground shrink-0 mt-0.5">
                {icon}
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-foreground mb-1.5">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[13px]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
