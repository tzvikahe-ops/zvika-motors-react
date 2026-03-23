import { ClockIcon, EyeIcon, HistoryIcon, ShieldIcon, SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon, StarIcon } from "./Icons";
import heroImage from "@/assets/hero-garage.jpg";
import mechanicImage from "@/assets/mechanic-work.jpg";

type Page = "home" | "gallery" | "contact" | "privacy" | "accessibility";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div dir="rtl">
      {/* HERO */}
      <section
        className="min-h-screen flex items-center pt-[72px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to left, hsla(216,33%,96%,0.92) 45%, hsla(216,33%,96%,0.4) 100%), url('${heroImage}')`,
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-[560px] mr-auto">
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-tight text-primary mb-6">
              המוסך של צביקה<br />המקצוענים שלך<br />בירושלים
            </h1>
            <p className="text-[17px] text-muted-foreground leading-7 mb-9 max-w-[420px]">
              שירות אישי, שקיפות מלאה וניסיון של שנים בטיפול בכל סוגי הרכבים. אנחנו כאן כדי לשמור על הבטיחות שלך על הכביש.
            </p>
            <div className="flex gap-4 flex-wrap">
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
              href="https://www.google.com/maps/place/?q=place_id:CWH4eCfd2MAOEBM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-red text-accent-foreground border-none rounded px-7 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-colors"
            >
              כתבו לנו ביקורת בגוגל
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
