import { WrenchIcon, DiagIcon, SnowflakeIcon, ChecklistIcon } from "../Icons";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-surface-darker" dir="rtl" aria-label="שירותי המוסך">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <h2 className="text-[22px] md:text-[28px] font-black text-primary-foreground tracking-[-0.02em]">שירותים</h2>
            <p className="text-primary-foreground/30 text-[13px] mt-1.5">מגוון שירותי רכב תחת קורת גג אחת</p>
          </div>
          <button
            onClick={() => setPage("services")}
            className="text-primary-foreground/30 text-[12px] font-medium hover:text-primary-foreground/60 cursor-pointer bg-transparent border-none transition-colors duration-200"
          >
            כל השירותים ←
          </button>
        </div>

        {/* Featured service */}
        <div className="border border-primary-foreground/[0.08] p-8 md:p-10 mb-px">
          <div className="flex items-start gap-5">
            <div className="text-brand-red/60 shrink-0 mt-1">
              <WrenchIcon />
            </div>
            <div className="max-w-[520px]">
              <h3 className="font-black text-[18px] md:text-[20px] text-primary-foreground tracking-[-0.02em] mb-2">מכונאות רכב כללית</h3>
              <p className="text-primary-foreground/35 text-[14px] leading-[1.8]">
                טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים.
                הבסיס של כל מה שאנחנו עושים — טיפול מקצועי ואמין שמאריך את חיי הרכב שלכם.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/[0.08]">
          {[
            { icon: <DiagIcon />, title: "דיאגנוסטיקה ממוחשבת", desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם" },
            { icon: <SnowflakeIcon />, title: "מיזוג אוויר לרכב", desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור" },
            { icon: <ChecklistIcon />, title: "הכנה לטסט שנתי", desc: "בדיקה מקיפה לפני מבחן הרישוי" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-surface-darker p-6 md:p-8">
              <div className="text-brand-red/40 mb-4">{icon}</div>
              <h3 className="font-bold text-[14px] text-primary-foreground tracking-[-0.01em] mb-1.5">{title}</h3>
              <p className="text-primary-foreground/30 text-[12px] leading-[1.7] max-w-[260px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
