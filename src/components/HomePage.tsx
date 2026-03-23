import { ClockIcon, EyeIcon, HistoryIcon, ShieldIcon, SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon, StarIcon } from "./Icons";
import mechanicImage from "@/assets/mechanic-work.jpg";
const logoImage = "/logo-full-transparent.png";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div dir="rtl">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[72px]">
        <div className="absolute inset-0 bg-black" />

        <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10 text-center py-20 md:py-28">
          <div className="mx-auto mb-8 w-[85vw] max-w-[340px] md:w-[580px] md:max-w-none aspect-[945/540]">
            <img
              src={logoImage}
              alt="המוסך של צביקה – מוסך מקצועי בירושלים, גבעת שאול"
              width={945}
              height={540}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="sr-only">המוסך של צביקה – מוסך מקצועי בירושלים</h1>
            <p className="text-sm md:text-[15px] text-white/70 font-normal mb-4 max-w-md mx-auto leading-relaxed tracking-wide">
            מוסך מקצועי בגבעת שאול, ירושלים. שירות אישי, שקיפות מלאה וניסיון של מעל 30 שנה בטיפול בכל סוגי הרכבים.
          </p>
          <p className="text-[11px] text-white/40 mb-10 tracking-wider font-medium">
            האופה 4, גבעת שאול · א׳–ה׳ 08:00–16:30
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setPage("contact")}
              className="bg-brand-red text-accent-foreground border-none rounded-[10px] px-7 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_16px_-4px_hsl(0_68%_32%/0.4)]"
            >
              קבעו תור עכשיו
            </button>
            <button
              onClick={() => setPage("services")}
              className="bg-white/[0.08] text-white/90 border border-white/20 rounded-[10px] px-7 py-3.5 text-[15px] font-medium cursor-pointer hover:bg-white/[0.14] transition-all duration-200 backdrop-blur-sm"
            >
              לשירותי המוסך שלנו
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gray-bg py-10 px-6" aria-label="יתרונות המוסך">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <ClockIcon />, title: "מענה מהיר", sub: "תיאום טיפול תוך יום עבודה" },
            { icon: <EyeIcon />, title: "שקיפות מלאה", sub: "כל תיקון מוסבר ומאושר מראש" },
            { icon: <HistoryIcon />, title: "מעל 30 שנה", sub: "ניסיון מוכח בכל סוגי הרכבים" },
            { icon: <ShieldIcon />, title: "אחריות מלאה", sub: "על כל עבודה וחלקי חילוף" },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3 justify-center">
              <span className="text-primary/60">{icon}</span>
              <div className="text-right">
                <div className="font-bold text-primary text-sm">{title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 px-6 bg-background" aria-label="שירותי המוסך">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-[38px] font-black text-primary mb-4">שירותי מוסך מקצועיים בירושלים</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
              מכונאות רכב, דיאגנוסטיקה, מיזוג אוויר והכנה לטסט – הכל תחת קורת גג אחת, בגבעת שאול
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: <SnowflakeIcon />, title: "מיזוג אוויר לרכב בירושלים", desc: "מילוי גז, איתור דליפות ותיקון מערכות קירור. נדאג שתיהנו מנסיעה נעימה גם בימי הקיץ החמים, בלי הפתעות במחיר." },
              { icon: <WrenchIcon />, title: "מכונאות רכב כללית", desc: "טיפולים שוטפים, החלפת שמנים ופילטרים, ותיקוני מנוע מקצועיים. הרכב שלכם יוצא מהמוסך במצב מושלם ובטוח לנהיגה." },
              { icon: <DiagIcon />, title: "דיאגנוסטיקה ממוחשבת לרכב", desc: "איתור תקלות מדויק עם ציוד סריקה מתקדם. חוסך לכם זמן וכסף על ידי אבחון ממוקד שמונע תיקונים מיותרים." },
              { icon: <ChecklistIcon />, title: "הכנה לטסט שנתי בירושלים", desc: "בדיקה מקיפה לפני מבחן הרישוי. אנחנו מטפלים בכל מה שצריך כדי שתעברו בראש שקט, בלי חזרות מיותרות." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-bg-light rounded-xl p-8 md:p-9 flex flex-col gap-4 border border-transparent hover:border-border transition-all duration-200 group">
                <div className="text-primary/60 group-hover:text-primary/80 transition-colors duration-200">{icon}</div>
                <h3 className="font-extrabold text-lg md:text-xl text-primary">{title}</h3>
                <p className="text-muted-foreground leading-7 text-[13px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-bg-light py-20 md:py-28 px-6" aria-label="למה לבחור בנו">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[34px] font-black text-primary mb-3">למה לקוחות בירושלים בוחרים בנו?</h2>
            <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
              כי אצלנו הרכב שלכם בידיים בטוחות – עם יחס אישי, שקיפות מלאה ואחריות בכל שלב.
            </p>
            {[
              { num: "01", title: "ניסיון של מעל 30 שנה", desc: "מטפלים בכל סוגי הרכבים ומכירים כל דגם מקרוב. הניסיון שלנו בשירותי רכב בירושלים הוא הביטחון שלכם." },
              { num: "02", title: "שקיפות מלאה ומחיר הוגן", desc: "אצלנו לא מחליפים חלקים ללא צורך. כל תיקון מוסבר, מתואם ומאושר על ידכם מראש." },
              { num: "03", title: "שירות אישי ואחריות מלאה", desc: "כל לקוח מקבל יחס צמוד, מענה זמין ואחריות מלאה על כל עבודה שיוצאת מהמוסך." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="grid grid-cols-[auto_1fr] gap-4 mb-8 items-start">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                  {num}
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-[15px] text-primary mb-1.5">{title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-[13px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-lg)]">
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
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-[34px] font-black text-primary mb-3">לקוחות המוסך ממליצים</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
              לקוחות שמגיעים אלינו חוזרים שנה אחרי שנה. הנה מה שהם אומרים:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { text: "הכנה לטסט מהירה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון. מוסך שאפשר לסמוך עליו.", author: "דוד מזרחי", location: "ירושלים" },
              { text: "מוסך נקי, מסודר ובעיקר אמין. צביקה תמיד מסביר מה הבעיה לפני שמתחילים לעבוד. אני לקוח קבוע כבר שנים.", author: "רונית לוי", location: "מבשרת ציון" },
              { text: "הגעתי עם תקלה שמוסכים אחרים לא הצליחו לפתור. תוך שעה הרכב היה מוכן, במחיר הוגן ובלי הפתעות.", author: "יוסי כהן", location: "ירושלים" },
            ].map(({ text, author, location }) => (
              <div key={author} className="bg-gray-bg-light rounded-xl p-7 border-b-[3px] border-brand-red flex flex-col gap-3 hover:shadow-[var(--shadow-md)] transition-shadow duration-200">
                <div className="flex gap-0.5 justify-end">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
                <p className="text-muted-foreground leading-7 text-[13px] text-right italic flex-1">
                  "{text}"
                </p>
                <div className="text-left mt-auto pt-3 border-t border-border/60">
                  <p className="font-bold text-primary text-sm">{author}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://reviewthis.biz/dry-bird-8259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-red text-accent-foreground border-none rounded-[10px] px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 hover:scale-[1.02] no-underline shadow-[0_4px_16px_-4px_hsl(0_68%_32%/0.4)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
      <section className="bg-primary py-16 md:py-20 px-6 text-center" aria-label="יצירת קשר">
        <h2 className="text-2xl md:text-[32px] font-extrabold text-primary-foreground mb-3 tracking-wide">
          מחפשים מוסך אמין בירושלים?
        </h2>
        <p className="text-primary-foreground/60 text-sm mb-9 max-w-[440px] mx-auto leading-relaxed">
          התקשרו, שלחו הודעה בוואטסאפ או השאירו פרטים. נחזור אליכם במהירות ונתאם טיפול בזמן שמתאים לכם.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={() => setPage("contact")}
            className="bg-brand-red text-accent-foreground border-none rounded-[10px] px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_16px_-4px_hsl(0_68%_32%/0.4)]"
          >
            צרו קשר עכשיו
          </button>
          <a
            href="tel:02-6514446"
            className="bg-white/10 text-primary-foreground border border-white/20 rounded-[10px] px-8 py-3.5 text-[15px] font-semibold hover:bg-white/[0.18] transition-all duration-200 no-underline"
          >
            02-6514446
          </a>
        </div>
      </section>
    </div>
  );
}
