import { WrenchIcon, DiagIcon, SnowflakeIcon, ChecklistIcon } from "../Icons";
import diagnosticImage from "@/assets/diagnostic-work.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function ServicesSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-surface-darker" dir="rtl" aria-label="שירותי המוסך">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p className="text-brand-red text-[11px] font-bold tracking-wider mb-3">שירותים</p>
            <h2 className="text-[26px] md:text-[34px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.12]">
              מה אנחנו עושים
            </h2>
          </div>
          <button
            onClick={() => setPage("services")}
            className="text-primary-foreground/30 text-[12px] font-medium hover:text-primary-foreground/60 cursor-pointer bg-transparent border-none transition-colors duration-200"
          >
            כל השירותים ←
          </button>
        </div>

        {/* Featured service with image */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-0 mb-px">
          <div className="bg-surface-dark p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
            <div className="text-brand-red/60 mb-4"><WrenchIcon /></div>
            <h3 className="font-black text-[20px] md:text-[22px] text-primary-foreground tracking-[-0.02em] mb-3">מכונאות רכב כללית</h3>
            <p className="text-primary-foreground/40 text-[14px] leading-[1.8] max-w-[400px] mb-6">
              טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים.
              הבסיס של כל מה שאנחנו עושים — טיפול מקצועי ואמין שמאריך את חיי הרכב שלכם.
            </p>
            <button
              onClick={() => setPage("services")}
              className="text-brand-red text-[13px] font-bold bg-transparent border-none cursor-pointer text-right p-0 hover:text-brand-red-hover transition-colors w-fit"
            >
              פרטים נוספים ←
            </button>
          </div>
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2">
            <img
              src={diagnosticImage}
              alt="דיאגנוסטיקה ממוחשבת"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>

        {/* Secondary services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/[0.06]">
          {[
            { icon: <DiagIcon />, title: "דיאגנוסטיקה ממוחשבת", desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם" },
            { icon: <SnowflakeIcon />, title: "מיזוג אוויר לרכב", desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור" },
            { icon: <ChecklistIcon />, title: "הכנה לטסט שנתי", desc: "בדיקה מקיפה לפני מבחן הרישוי השנתי" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-surface-darker p-7 md:p-8">
              <div className="text-brand-red/40 mb-4">{icon}</div>
              <h3 className="font-bold text-[14px] text-primary-foreground tracking-[-0.01em] mb-2">{title}</h3>
              <p className="text-primary-foreground/30 text-[13px] leading-[1.7] max-w-[280px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
