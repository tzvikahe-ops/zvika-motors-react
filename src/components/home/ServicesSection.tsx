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
    desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם — חוסך זמן, כסף ותיקונים מיותרים.",
  },
  {
    icon: <SnowflakeIcon />,
    title: "מיזוג אוויר לרכב",
    desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור. נסיעה נעימה גם בקיץ הירושלמי.",
  },
  {
    icon: <ChecklistIcon />,
    title: "הכנה לטסט שנתי",
    desc: "בדיקה מקיפה לפני מבחן הרישוי — נטפל בהכל כדי שתעברו בפעם הראשונה.",
  },
];

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-background" dir="rtl" aria-label="שירותי המוסך">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[3px] bg-brand-red rounded-full" />
              <span className="text-brand-red text-[11px] font-bold tracking-wider">שירותים</span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-black text-foreground leading-tight">
              שירותי מוסך מקצועיים
            </h2>
          </div>
          <button
            onClick={() => setPage("services")}
            className="text-brand-red text-[13px] font-bold hover:underline cursor-pointer bg-transparent border-none self-start md:self-auto"
          >
            לכל השירותים ←
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card rounded-lg p-7 md:p-8 border border-border hover:border-brand-red/30 transition-all duration-300 hover:shadow-[var(--shadow-md)] relative overflow-hidden"
            >
              {/* Red top accent on hover */}
              <div className="absolute top-0 right-0 left-0 h-[3px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              
              <div className="flex gap-5">
                <div className="text-brand-red/60 group-hover:text-brand-red transition-colors duration-300 shrink-0 mt-1">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-7 text-[13px]">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
