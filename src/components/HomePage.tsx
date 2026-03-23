import { ClockIcon, EyeIcon, HistoryIcon, ShieldIcon, SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon, StarIcon } from "./Icons";
import heroImage from "@/assets/hero-garage.jpg";
import mechanicImage from "@/assets/mechanic-work.jpg";
import logoImage from "@/assets/logo.png";

type Page = "home" | "gallery" | "contact" | "privacy" | "accessibility";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div dir="rtl">
      {/* HERO */}
      <section
        className="min-h-screen flex items-center pt-[72px] bg-cover bg-center relative overflow-visible"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${logoImage}')`,
            backgroundSize: "contain",
            backgroundPosition: "center 72px",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 text-center">
          <div className="mx-auto mt-[55vh]">
            <p className="text-[20px] text-white font-extrabold leading-8 mb-9 max-w-[500px] mx-auto" style={{ WebkitTextStroke: '0.8px hsl(var(--brand-red))', paintOrder: 'stroke fill', textShadow: '0 0 8px rgba(0,0,0,0.8)' }}>
              שירות אישי, שקיפות מלאה וניסיון של שנים בטיפול בכל סוגי הרכבים. אנחנו כאן כדי לשמור על הבטיחות שלך על הכביש.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={() => setPage("contact")}
                className="bg-brand-red text-accent-foreground border-none rounded px-7 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-colors"
              >
                קבע תור עכשיו
              </button>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gray-bg text-primary border-none rounded px-7 py-3.5 text-[15px] font-semibold cursor-pointer hover:bg-secondary transition-colors"
              >
                צפה בשירותים שלנו
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gray-bg py-8 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <ClockIcon />, title: "זמינות גבוהה", sub: "טיפול מהיר ויעיל" },
            { icon: <EyeIcon />, title: "שקיפות מלאה", sub: "ללא הפתעות בחשבון" },
            { icon: <HistoryIcon />, title: "מעל 20 שנה", sub: "ניסיון מקצועי בשטח" },
            { icon: <ShieldIcon />, title: "אחריות מלאה", sub: "על כל חלקי החילוף" },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3 justify-center">
              <span className="text-primary opacity-70">{icon}</span>
              <div className="text-right">
                <div className="font-bold text-primary text-[15px]">{title}</div>
                <div className="text-[13px] text-muted-foreground">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-primary mb-3">השירותים שלנו</h2>
            <p className="text-muted-foreground text-base">
              כל מה שהרכב שלך צריך תחת קורת גג אחת, בסטנדרט הגבוה ביותר בירושלים.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* מיזוג אוויר */}
            <div className="bg-gray-bg-light rounded-xl p-10 flex flex-col gap-4">
              <SnowflakeIcon />
              <h3 className="font-extrabold text-[22px] text-primary">מיזוג אוויר</h3>
              <p className="text-muted-foreground leading-7">
                מילוי גז, תיקון דליפות ושדרוג מערכות קירור לימי הקיץ הירושלמים.
              </p>
            </div>

            {/* מכונאות כללית */}
            <div className="bg-gray-bg-light rounded-xl p-10 grid grid-cols-[1fr_auto] items-start gap-4">
              <div>
                <h3 className="font-extrabold text-[22px] text-primary mb-3">מכונאות כללית</h3>
                <p className="text-muted-foreground leading-7">
                  דיאגנוסטיקה ממוחשבת, טיפולים שוטפים ותיקוני מנוע ברמה הגבוהה ביותר לכל יצרני הרכב.
                </p>
              </div>
              <div className="opacity-15"><WrenchIcon /></div>
            </div>

            {/* דיאגנוסטיקה */}
            <div className="bg-gray-bg-light rounded-xl p-10 grid grid-cols-[auto_1fr] items-start gap-6">
              <div className="opacity-30"><DiagIcon /></div>
              <div>
                <h3 className="font-extrabold text-[22px] text-primary mb-3">דיאגנוסטיקה ממוחשבת</h3>
                <p className="text-muted-foreground leading-7">
                  איתור תקלות מדויק באמצעות ציוד סריקה מתקדם המותאם לרכבים חדישים.
                </p>
              </div>
            </div>

            {/* הכנה לטסט */}
            <div className="bg-gray-bg-light rounded-xl p-10 flex flex-col gap-4">
              <ChecklistIcon />
              <h3 className="font-extrabold text-[22px] text-primary">הכנה לטסט</h3>
              <p className="text-muted-foreground leading-7">
                בדיקה מקיפה והעברת מבחן הרישוי השנתי בראש שקט עבורך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-bg-light py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[34px] font-black text-primary mb-10">למה לבחור דווקא בנו?</h2>
            {[
              { num: "01", title: "מקצועיות ללא פשרות", desc: "צוות המוסך עובר השתלמויות תקופתיות כדי להישאר בחזית הטכנולוגיה של עולם הרכב." },
              { num: "02", title: "שקיפות ויושרה", desc: "אצלנו לא מחליפים חלקים ללא צורך. כל תיקון מוסבר ומאושר על ידי הלקוח מראש." },
              { num: "03", title: "מיקום מרכזי בירושלים", desc: "ממוקמים בלב אזור התעשייה גבעת שאול, נגישים וקרובים למרכז העיר." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="grid grid-cols-[auto_1fr] gap-5 mb-8 items-start">
                <div className="bg-primary text-primary-foreground w-11 h-11 rounded flex items-center justify-center text-[13px] font-bold shrink-0">
                  {num}
                </div>
                <div className="text-right">
                  <h4 className="font-extrabold text-base text-primary mb-1.5">{title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={mechanicImage}
              alt="מוסך מקצועי"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[34px] font-black text-primary mb-14">לקוחות מספרים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "שירות VIP. הכנה לטסט זריזה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון. זה המוסך הקבוע שלי מעכשיו.", author: "דוד מזרחי, ירושלים" },
              { text: "מוסך נקי, מסודר והכי חשוב - אמין. צביקה תמיד מסביר בדיוק מה הבעיה ומראה את החלקים שהוחלפו. מומלץ בחום!", author: "רונית לוי, מבשרת ציון" },
              { text: "הגעתי לצביקה עם תקלה שמוסכים אחרים לא הצליחו לפתור. תוך שעה האוטו היה מוכן במחיר הוגן ביותר. שירות מעל המצופה.", author: "יוסי כהן, ירושלים" },
            ].map(({ text, author }) => (
              <div key={author} className="bg-gray-bg-light rounded-xl p-8 border-b-[3px] border-brand-red flex flex-col gap-4">
                <div className="flex gap-1 justify-end">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
                <p className="text-muted-foreground leading-7 text-sm text-right italic">
                  "{text}"
                </p>
                <p className="font-bold text-primary text-sm text-left">
                  — {author}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://reviewthis.biz/dry-bird-8259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-red text-accent-foreground border-none rounded-lg px-8 py-4 text-[17px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all hover:scale-105 no-underline shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Leave us a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary py-20 px-6 text-center">
        <h2 className="text-[34px] font-black text-primary-foreground mb-4">
          צריכים טיפול לרכב? אנחנו כאן בשבילכם
        </h2>
        <p className="text-muted-foreground text-base mb-10 max-w-[500px] mx-auto">
          קבעו תור עוד היום ותנו לנו לדאוג לרכב שלכם בצורה הטובה ביותר.
        </p>
        <button
          onClick={() => setPage("contact")}
          className="bg-brand-red text-accent-foreground border-none rounded px-8 py-4 text-base font-bold cursor-pointer hover:bg-brand-red-hover transition-colors"
        >
          קבע תור עכשיו
        </button>
      </section>
    </div>
  );
}
