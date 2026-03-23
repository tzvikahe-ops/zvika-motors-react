import { ClockIcon, EyeIcon, HistoryIcon, ShieldIcon, SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon, StarIcon } from "./Icons";
import mechanicImage from "@/assets/mechanic-work.jpg";
const logoImage = "/logo-full-transparent.png";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div dir="rtl">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center pt-[68px]">
        <div className="absolute inset-0 bg-surface-darker" />
        {/* Subtle industrial pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--primary-foreground)) 0px, transparent 1px, transparent 60px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 text-center py-20 md:py-28">
          <div className="mx-auto mb-10 w-[80vw] max-w-[300px] md:w-[520px] md:max-w-none aspect-[945/540]">
            <img
              src={logoImage}
              alt="המוסך של צביקה – מוסך מקצועי בירושלים, גבעת שאול"
              width={945}
              height={540}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-contain drop-shadow-[0_4px_24px_hsl(0_0%_0%/0.3)]"
            />
          </div>
          <h1 className="sr-only">המוסך של צביקה – מוסך מקצועי בירושלים</h1>

          <p className="text-[13px] md:text-sm text-primary-foreground/50 font-medium mb-4 max-w-md mx-auto leading-relaxed">
            מוסך מקצועי בגבעת שאול, ירושלים. שירות אישי, שקיפות מלאה וניסיון של מעל 30 שנה.
          </p>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 text-primary-foreground/30 text-[11px] font-medium">
            <span>✦ פעילים מאז 1993</span>
            <span className="w-px h-3 bg-primary-foreground/15" />
            <span>✦ האופה 4, גבעת שאול</span>
            <span className="hidden sm:block w-px h-3 bg-primary-foreground/15" />
            <span className="hidden sm:block">✦ א׳–ה׳ 08:00–16:30</span>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setPage("contact")}
              className="bg-brand-red text-accent-foreground border-none rounded-md px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_20px_-4px_hsl(var(--brand-red)/0.5)]"
            >
              קבעו תור עכשיו
            </button>
            <button
              onClick={() => setPage("services")}
              className="bg-primary-foreground/[0.06] text-primary-foreground/80 border border-primary-foreground/10 rounded-md px-8 py-3.5 text-[15px] font-medium cursor-pointer hover:bg-primary-foreground/[0.1] transition-all duration-200"
            >
              לשירותי המוסך
            </button>
          </div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      </section>

      {/* STATS BAR */}
      <section className="bg-surface-dark py-0" aria-label="יתרונות המוסך">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { icon: <ClockIcon />, title: "מענה מהיר", sub: "תיאום טיפול תוך יום עבודה" },
            { icon: <EyeIcon />, title: "שקיפות מלאה", sub: "כל תיקון מוסבר ומאושר מראש" },
            { icon: <HistoryIcon />, title: "מעל 30 שנה", sub: "ניסיון מוכח בכל סוגי הרכבים" },
            { icon: <ShieldIcon />, title: "אחריות מלאה", sub: "על כל עבודה וחלקי חילוף" },
          ].map(({ icon, title, sub }, i) => (
            <div key={title} className={`flex items-center gap-3 justify-center py-6 px-4 ${i < 3 ? "border-l border-primary-foreground/[0.06]" : ""}`}>
              <span className="text-brand-red">{icon}</span>
              <div className="text-right">
                <div className="font-bold text-primary-foreground text-[13px]">{title}</div>
                <div className="text-[11px] text-primary-foreground/40 leading-relaxed mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 px-6 bg-background" aria-label="שירותי המוסך">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-red/[0.08] text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
              שירותים מקצועיים
            </div>
            <h2 className="text-3xl md:text-[40px] font-black text-foreground mb-4">שירותי מוסך מקצועיים בירושלים</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
              מכונאות רכב, דיאגנוסטיקה, מיזוג אוויר והכנה לטסט – הכל תחת קורת גג אחת בגבעת שאול
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <WrenchIcon />, title: "מכונאות רכב כללית", desc: "טיפולים שוטפים, החלפת שמנים, תיקוני מנוע ובלמים. הרכב שלכם יוצא מהמוסך בטוח, מטופל ומוכן לדרך." },
              { icon: <DiagIcon />, title: "דיאגנוסטיקה ממוחשבת", desc: "אבחון תקלות מדויק עם ציוד סריקה מתקדם – חוסך לכם זמן, כסף ותיקונים מיותרים." },
              { icon: <SnowflakeIcon />, title: "מיזוג אוויר לרכב", desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור. נסיעה נעימה גם בקיץ הירושלמי." },
              { icon: <ChecklistIcon />, title: "הכנה לטסט שנתי", desc: "בדיקה מקיפה לפני מבחן הרישוי – נטפל בהכל כדי שתעברו בפעם הראשונה, בראש שקט." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-card rounded-lg p-7 md:p-8 flex gap-5 border border-border hover:border-brand-red/20 transition-all duration-300 group hover:shadow-[var(--shadow-md)]">
                <div className="text-brand-red/70 group-hover:text-brand-red transition-colors duration-300 shrink-0 mt-1">{icon}</div>
                <div>
                  <h3 className="font-bold text-[16px] text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-7 text-[13px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface-dark py-20 md:py-28 px-6" aria-label="למה לבחור בנו">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-5 tracking-wider">
              למה דווקא אנחנו
            </div>
            <h2 className="text-3xl md:text-[36px] font-black text-primary-foreground mb-4 leading-tight">למה לקוחות בירושלים<br />בוחרים בנו?</h2>
            <p className="text-primary-foreground/50 text-sm mb-10 leading-relaxed">
              כי אצלנו הרכב שלכם בידיים בטוחות – שקיפות מלאה, מחיר הוגן ואחריות על כל טיפול.
            </p>
            {[
              { num: "01", title: "ניסיון של מעל 30 שנה", desc: "מעל שלושה עשורים של טיפול מקצועי בירושלים. אנחנו מכירים כל רכב מקרוב." },
              { num: "02", title: "שקיפות מלאה – בלי הפתעות", desc: "כל תיקון מוסבר ומאושר מראש. המחיר ברור לפני שמתחילים." },
              { num: "03", title: "יחס אישי ואחריות מלאה", desc: "מענה ישיר, יחס צמוד ואחריות מלאה על כל עבודה שיוצאת מהמוסך." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="grid grid-cols-[auto_1fr] gap-4 mb-7 items-start">
                <div className="bg-brand-red text-accent-foreground w-10 h-10 rounded-md flex items-center justify-center text-xs font-black shrink-0">
                  {num}
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-primary-foreground mb-1">{title}</h4>
                  <p className="text-primary-foreground/45 leading-relaxed text-[13px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-[var(--shadow-xl)]">
            <img
              src={mechanicImage}
              alt="עבודת מכונאות מקצועית במוסך בירושלים"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-background py-20 md:py-28 px-6" aria-label="המלצות לקוחות">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-red/[0.08] text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
              המלצות לקוחות
            </div>
            <h2 className="text-3xl md:text-[36px] font-black text-foreground mb-3">לקוחות המוסך ממליצים</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
              לקוחות שמגיעים אלינו חוזרים שנה אחרי שנה
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { text: "הגעתי עם תקלה שמוסכים אחרים לא הצליחו לפתור. צביקה אבחן את הבעיה תוך דקות ותיקן במחיר הוגן. מוסך שסומכים עליו.", author: "יוסי כהן", location: "ירושלים" },
              { text: "מוסך נקי, מסודר ואמין. תמיד מסבירים מה הבעיה לפני שמתחילים. לקוח קבוע כבר שנים ולא מחליף.", author: "רונית לוי", location: "מבשרת ציון" },
              { text: "הכנה לטסט מהירה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון. ממליץ לכל מי שמחפש מוסך אמין.", author: "דוד מזרחי", location: "ירושלים" },
            ].map(({ text, author, location }) => (
              <div key={author} className="bg-card rounded-lg p-7 border border-border flex flex-col gap-4 hover:shadow-[var(--shadow-md)] transition-all duration-300 relative">
                <div className="absolute top-0 right-0 left-0 h-[3px] bg-brand-red rounded-t-lg" />
                <div className="flex gap-0.5 justify-end">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
                <p className="text-foreground/75 leading-7 text-[13px] text-right flex-1">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="text-right mt-auto pt-4 border-t border-border">
                  <p className="font-bold text-foreground text-[13px]">{author}</p>
                  <p className="text-muted-foreground text-[11px] mt-0.5">{location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://reviewthis.biz/dry-bird-8259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-surface-dark text-primary-foreground rounded-md px-7 py-3 text-[13px] font-bold cursor-pointer hover:bg-surface-darker transition-all duration-200 no-underline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              כתבו לנו ביקורת בגוגל
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-surface-dark py-16 md:py-20 px-6 text-center relative overflow-hidden" aria-label="יצירת קשר">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--primary-foreground)) 0px, transparent 1px, transparent 60px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-[34px] font-black text-primary-foreground mb-3">
            צריכים טיפול לרכב? אנחנו כאן בשבילכם
          </h2>
          <p className="text-primary-foreground/45 text-sm mb-3 max-w-[480px] mx-auto leading-relaxed">
            התקשרו, שלחו הודעה בוואטסאפ או פשוט בואו. נתאם טיפול מהיר, שקוף ומקצועי.
          </p>
          <p className="text-primary-foreground/25 text-[11px] mb-9 tracking-wider font-medium">
            מעל 30 שנות ניסיון · שקיפות מלאה · אחריות על כל טיפול
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="tel:02-6514446"
              className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground border-none rounded-md px-8 py-3.5 text-[15px] font-bold hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_20px_-4px_hsl(var(--brand-red)/0.5)] no-underline"
            >
              התקשרו עכשיו – 02-6514446
            </a>
            <a
              href="https://wa.me/972526514446"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 rounded-md px-8 py-3.5 text-[15px] font-medium hover:bg-primary-foreground/[0.1] transition-all duration-200 no-underline"
            >
              שלחו הודעה בוואטסאפ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
