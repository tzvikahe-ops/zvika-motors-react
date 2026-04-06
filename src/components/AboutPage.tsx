import { Shield, Users, Wrench, Clock, Star, CheckCircle, Heart, Eye, MapPin } from "lucide-react";
import InternalLink from "./InternalLink";

const AboutPage = () => {
  const values = [
    { icon: <Eye className="w-5 h-5" />, title: "שקיפות מלאה", description: "לפני כל תיקון נסביר מה נמצא, מה צריך לתקן ומה יכול לחכות. לא נתקן דברים שלא צריך ולא נחליף חלקים בלי אישור מפורש שלכם." },
    { icon: <Heart className="w-5 h-5" />, title: "יחס אישי", description: "אצלנו מכירים את הלקוחות בשם. כשאתם מתקשרים, אתם מדברים ישירות עם הצוות המקצועי, לא עם מוקד שירות." },
    { icon: <Shield className="w-5 h-5" />, title: "אחריות על העבודה", description: "אנחנו עומדים מאחורי כל טיפול שאנחנו מבצעים. אם משהו לא בסדר - תמיד אפשר לחזור ונתקן." },
    { icon: <Wrench className="w-5 h-5" />, title: "מקצועיות ללא פשרות", description: "ציוד דיאגנוסטי מתקדם, חלפים איכותיים ועדכון מקצועי שוטף. אנחנו מתייחסים לכל רכב כאילו הוא שלנו." },
  ];

  const milestones = [
    { year: "1993", text: "יהושע הרשקוביץ מקים את אור-צת שירותי רכב בגבעת שאול, ירושלים" },
    { year: "1998", text: "המוסך מתרחב ומשתדרג למחלקות נוספות ולציוד דיאגנוסטיקה מתקדמת" },
    { year: "2004", text: "צביקה מצטרף למוסך ולומד את המקצוע לצד אביו" },
    { year: "2011", text: "צביקה לוקח אחריות מלאה על ניהול המוסך" },
    { year: "2026", text: "מעל 30 שנות ניסיון, אלפי לקוחות מרוצים ו-98% לקוחות חוזרים" },
  ];

  const stats = [
    { value: "30+", label: "שנות ניסיון" },
    { value: "96.1%", label: "מרוצה מאוד" },
    { value: "4.8", label: "דירוג בגוגל" },
    { value: "1993", label: "שנת הקמה" },
  ];

  return (
    <main dir="rtl" className="bg-background">
      {/* HERO */}
      <section className="relative pt-[68px] py-20 md:py-28 bg-surface-dark">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--primary-foreground)) 0px, transparent 1px, transparent 60px)" }} />
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red text-[12px] font-bold px-3 py-1 rounded-full mb-5 tracking-wider">אודות המוסך</div>
          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-black text-primary-foreground mb-5 leading-tight tracking-[-0.03em]">
            המוסך של צביקה - הסיפור שלנו
          </h1>
          <p className="text-[14px] md:text-[15px] text-primary-foreground/50 leading-[1.8] max-w-2xl mx-auto">
            מוסך משפחתי בירושלים עם מעל שלושה עשורים של ניסיון. שירות אישי, מקצועי ואמין - כי אצלנו הרכב שלכם בידיים בטוחות.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand-red py-8 md:py-10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-accent-foreground text-[28px] md:text-[36px] font-black tracking-[-0.03em] leading-none mb-1">{stat.value}</p>
                <p className="text-accent-foreground/70 text-[12px] md:text-[13px] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 md:py-24 bg-background" aria-label="הסיפור של המוסך">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[12px] font-bold tracking-[0.15em] uppercase">הסיפור שלנו</p>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground mb-8 tracking-[-0.03em] leading-[1.15]">
            מעל שלושה עשורים של נסיון בירושלים
          </h2>
          <div className="text-foreground/60 text-[13px] md:text-[14px] leading-[2.1] space-y-5">
            <p>
              הסיפור שלנו מתחיל ב-1993, כשיהושע הרשקוביץ, בעל רקע בהנדסת מכונות, פתח מעבדת שירותים לתאורה והצתה ברחוב בית הדפוס בגבעת שאול, ירושלים. השם "אור-צת" לא נבחר במקרה. "אור" עבור תאורה, "צת" עבור הצתה. כי זה היה הלב הטכני של הרכב של אותם ימים.
            </p>
            <p>
              מאז השתנה הרכב המודרני מקצה לקצה. מערכות ההצתה המכניות שהיו הבסיס להקמת המוסך פינו את מקומן למערכות הזרקה ממוחשבות שמשתכללות משנה לשנה. היום הן שולטות על כל מערכות הרכב: מנוע, בלמים, בטיחות ואלקטרוניקה. לא יכולנו לדרוך במקום, ואכן יישרנו קו עם הטכנולוגיה. כשאתם מביאים אלינו רכב עם בעיה, אנחנו מאבחנים אותה עם ציוד דיאגנוסטי ממוחשב מהמתקדמים בתחום.
            </p>
            <p>
              בנו, צביקה, גדל במוסך. עם השנים, הסקרנות הפכה לתשוקה, והתשוקה למקצוע. צביקה למד מהשטח. לא רק מלימודים ותעודות, אלא בעיקר מניסיון שנצבר רכב אחרי רכב לאורך שנים רבות.
            </p>
            <p>
              היום צביקה מנהל את המוסך ומביא איתו את כל מה שלמד מאביו: את היושר, את הדקדקנות ואת המחויבות ללקוח. הוא מכיר רבים מהלקוחות בשם, עוקב אחרי ההיסטוריה של הרכבים, וזמין לייעוץ בטלפון ובוואטסאפ.
            </p>
            <p>
              חשוב לנו לומר גם מה <strong className="text-foreground/80">לא</strong> עושים אצלנו: זגגות, אבזור ומיגון. אלה לא ברשימת השירותים שלנו, מסיבות לוגיסטיות בלבד. הלקוחות שלנו יודעים לאן לפנות לכל שירות, ואנחנו שמחים להמליץ.
            </p>
            <p>
              לאורך 30+ שנות פעילות, הלקוחות שלנו החליפו דגמים ומותגים של רכב, אבל לא את המוסך. רובם עדיין אתנו, ומביאים גם את הילדים שלהם. זה לא מקרי. ובמילים של יהושע, מייסד המוסך: <em>"יהללך זר ולא פיך."</em>
            </p>
          </div>

          {/* SEO bridge: old name → new name */}
          <div className="mt-10 p-6 bg-surface-warm border border-border rounded-lg">
            <h2 className="text-[17px] md:text-[19px] font-black text-foreground mb-3 tracking-[-0.02em]">
              מחפשים מוסך אור צת?
            </h2>
            <p className="text-foreground/60 text-[13px] md:text-[14px] leading-[2]">
              <strong className="text-foreground/80">מוסך אור צת</strong> ו-<strong className="text-foreground/80">אור צת שירותי רכב</strong> - זה אנחנו. המוסך נוסד ב-1993 בגבעת שאול על ידי יהושע הרשקוביץ תחת השם "אור-צת שירותי רכב", ומאז 2011 מנוהל על ידי בנו, <strong className="text-foreground/80">צביקה הרשקוביץ</strong>. הכתובת זהה: <strong className="text-foreground/80">רחוב האופה 4, גבעת שאול, ירושלים</strong>. אם הכרתם אותנו בשם הישן - ברוכים השבים. אם זו הפעם הראשונה שאתם שומעים עלינו - ברוכים הבאים.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24 bg-surface-warm" aria-label="ציר הזמן של המוסך">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[12px] font-bold tracking-[0.15em] uppercase">ציר זמן</p>
            <div className="w-10 h-[2px] bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground text-center mb-12 tracking-[-0.03em]">
            אבני דרך
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-[19px] md:right-[23px] top-0 bottom-0 w-[2px] bg-border" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-5 relative">
                  <div className="relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-red rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground text-[12px] font-black">{m.year}</span>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 flex-1 hover:border-brand-red/20 transition-colors">
                    <p className="text-foreground/70 text-[13px] md:text-[14px] leading-[1.7]">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SATISFACTION SURVEY */}
      <section className="py-16 md:py-24 bg-background" aria-label="סקר שביעות רצון לקוחות">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[12px] font-bold tracking-[0.15em] uppercase">מה הלקוחות אומרים</p>
            <div className="w-10 h-[2px] bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground text-center mb-4 tracking-[-0.03em]">
            שביעות רצון לקוחות - הנתונים האמיתיים
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto leading-[1.8] text-[13px] md:text-[14px]">
            אנחנו מקיימים מעקב פרטני אחר כל שירות וכל לקוח. הנה מה שהלקוחות מדווחים.
          </p>

          {/* Big number */}
          <div className="text-center mb-10">
            <p className="text-[64px] md:text-[80px] font-black text-brand-red leading-none tracking-[-0.04em]">96.1%</p>
            <p className="text-foreground/60 text-[15px] md:text-[16px] font-bold mt-2">מרוצה מאוד מהשירות</p>
            <p className="text-foreground/35 text-[12px] mt-1">מתוך 594 משובים שנאספו</p>
          </div>

          {/* Breakdown */}
          <div className="border border-border divide-y divide-border">
            {[
              { label: "מרוצה מאוד", count: 571, pct: "96.1%", color: "bg-green-600" },
              { label: "מרוצה", count: 9, pct: "1.5%", color: "bg-blue-500" },
              { label: "אין מענה", count: 7, pct: "1.2%", color: "bg-yellow-400" },
              { label: "לא להתקשר", count: 2, pct: "0.3%", color: "bg-gray-400" },
              { label: "לא טופל", count: 4, pct: "0.7%", color: "bg-slate-600" },
              { label: "לא מרוצה", count: 1, pct: "0.2%", color: "bg-red-500" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-4 px-5 py-3">
                <div className={`w-3 h-3 rounded-full shrink-0 ${row.color}`} />
                <p className="text-foreground/70 text-[13px] md:text-[14px] flex-1">{row.label}</p>
                <p className="text-foreground/50 text-[13px] tabular-nums">{row.count}</p>
                <p className="text-foreground font-bold text-[13px] md:text-[14px] tabular-nums w-14 text-left">{row.pct}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground/35 text-[11px] text-center mt-4">נתונים מסקר שביעות רצון פנימי, אור-צת שירותי רכב</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 bg-surface-warm" aria-label="הערכים שלנו">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">מה מנחה אותנו</p>
            <div className="w-10 h-[2px] bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground text-center mb-4 tracking-[-0.03em]">
            הערכים שמנחים אותנו כל יום
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto leading-[1.8] text-[13px] md:text-[14px]">
            העקרונות שלנו הם לא סיסמאות - הם הדרך שבה אנחנו עובדים, כל יום מחדש
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((item) => (
              <article key={item.title} className="bg-card rounded-lg p-6 md:p-7 border border-border hover:border-brand-red/20 hover:shadow-[var(--shadow-md)] transition-all duration-300 flex items-start gap-4">
                <div className="bg-brand-red/10 w-11 h-11 rounded-lg flex items-center justify-center shrink-0 text-brand-red">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.85]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ZVIKA - Personal */}
      <section className="py-16 md:py-24 bg-surface-steel" aria-label="על צביקה">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">הצוות</p>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground mb-8 tracking-[-0.03em] leading-[1.15]">
            צביקה הרשקוביץ - בעל המוסך
          </h2>
          <div className="text-foreground/60 text-[13px] md:text-[14px] leading-[2.1] space-y-5">
            <p>
              צביקה גדל במוסך של אביו מגיל צעיר. הוא למד את עולם הרכב מתוך אהבה אמיתית למקצוע - לא כדי לעבוד "על הרכב" אלא כדי לעזור לאנשים. הוא מאמין שבעל מוסך טוב הוא לא רק מי שיודע לתקן רכבים, אלא מי שיודע להסביר, להיות ישר ולתת ללקוח הרגשה שהוא בידיים טובות.
            </p>
            <p>
              צביקה מתמחה בדיאגנוסטיקה ממוחשבת ואבחון תקלות מורכבות. הוא מעדכן את עצמו באופן שוטף בטכנולוגיות רכב חדשות ומשקיע בציוד מתקדם. אבל מה שמבדיל אותו מבעלי מוסכים אחרים הוא היכולת להקשיב - להקשיב ללקוח, להקשיב לרכב, ולתת פתרון שמתאים בדיוק.
            </p>
            <p>
              &ldquo;כשלקוח מגיע אלי, אני רוצה שהוא ירגיש שהוא מדבר עם חבר שמבין ברכבים - לא עם מוסך שמנסה למכור לו משהו,&rdquo; אומר צביקה. &ldquo;אם אני רואה שמשהו יכול לחכות - אני אומר. אם אני יודע שיש פתרון זול יותר - אני מציע. ככה בניתי את האמון של הלקוחות שלי לאורך השנים.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-24 bg-background" aria-label="מיקום המוסך">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">איפה אנחנו</p>
            <div className="w-10 h-[2px] bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground text-center mb-8 tracking-[-0.03em]">
            מוסך בגבעת שאול, ירושלים
          </h2>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-bold text-[14px] mb-0.5">כתובת</p>
                    <p className="text-foreground/60 text-[13px] leading-[1.7]">רחוב האופה 4 (בית הדפוס 24)<br />גבעת שאול, ירושלים</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-bold text-[14px] mb-0.5">שעות פעילות</p>
                    <p className="text-foreground/60 text-[13px] leading-[1.7]">ימים א׳-ה׳: 08:00-16:30<br />שישי ושבת: סגור</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <p className="text-foreground font-bold text-[14px] mb-0.5">טלפון</p>
                    <a href="tel:02-6514446" className="text-brand-red text-[13px] font-bold no-underline hover:text-brand-red-hover transition-colors">02-6514446</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-brand-red shrink-0 mt-0.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <div>
                    <p className="text-foreground font-bold text-[14px] mb-0.5">וואטסאפ</p>
                    <a href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7" target="_blank" rel="noopener noreferrer" className="text-brand-red text-[13px] font-bold no-underline hover:text-brand-red-hover transition-colors">052-651-4446</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-foreground/50 text-[12px] md:text-[13px] leading-[1.85]">
                המוסך ממוקם באזור התעשייה של גבעת שאול, ירושלים - נגיש בקלות מכל רחבי העיר ומהכניסה המערבית. חניה חופשית בסביבת המוסך. אנו משרתים לקוחות מירושלים, מבשרת ציון, מעלה אדומים, בית שמש והסביבה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT - About-focused, not services list */}
      <section className="py-16 md:py-20 bg-surface-warm" aria-label="מידע נוסף">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6">
          <h2 className="text-[20px] md:text-[24px] font-bold text-foreground mb-6 tracking-[-0.02em]">אודות המוסך של צביקה (אור-צת)</h2>
          <div className="text-foreground/55 text-[13px] md:text-[14px] leading-[2] space-y-4">
            <p>
              <strong className="text-foreground/80">המוסך של צביקה (אור-צת)</strong> הוא מוסך משפחתי מקצועי בירושלים שהוקם בשנת 1993 על ידי יהושע הרשקוביץ. במשך יותר מ-30 שנה, השם "אור צת" הפך לסמל של אמינות ומקצועיות בגבעת שאול ובכל ירושלים.
            </p>
            <p>
              כיום מנוהל <strong className="text-foreground/80">המוסך של צביקה (אור-צת)</strong> על ידי צביקה הרשקוביץ, שגדל במוסך של אביו ולמד את המקצוע מהשטח. צביקה מכיר את כל לקוחותיו בשם, זמין לשיחת ייעוץ בכל עת ועומד באופן אישי מאחורי כל טיפול. הגישה שלו פשוטה: להיות ישרים, להסביר הכל, ולעשות רק מה שבאמת צריך.
            </p>
            <p>
              <strong className="text-foreground/80">המוסך של צביקה (אור-צת)</strong> ממוקם ברחוב האופה 4 (בית הדפוס 24) בגבעת שאול, ירושלים, ומשרת לקוחות מכל רחבי העיר ומהסביבה, מבשרת ציון, מעלה אדומים ובית שמש. עם 98% לקוחות חוזרים ודירוג 4.8 בגוגל מעל 107 ביקורות, זהו מוסך שהלקוחות ממליצים עליו בחום.
            </p>
            <p>
              מחפשים <strong className="text-foreground/80">המוסך של צביקה (אור-צת)</strong> בירושלים? זה אנחנו. אותו מוסך, אותו צוות, אותה מקצועיות.
            </p>
          </div>
          {/* Internal links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <InternalLink page="services" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">שירותי המוסך שלנו</InternalLink>
            <InternalLink page="faq" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">שאלות ותשובות נפוצות</InternalLink>
            <InternalLink page="blog" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">מדריכים וטיפים מקצועיים</InternalLink>
            <InternalLink page="gallery" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">תמונות מהמוסך</InternalLink>
            <InternalLink page="contact" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">צרו קשר ותאמו תור</InternalLink>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-surface-dark" aria-label="יצירת קשר">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-[22px] md:text-[32px] font-black text-primary-foreground mb-3 tracking-[-0.03em]">רוצים להכיר אותנו מקרוב?</h2>
          <p className="text-primary-foreground/45 mb-9 text-[13px] md:text-[14px] leading-[1.8] max-w-md mx-auto">
            בואו לביקור במוסך, התקשרו או שלחו הודעה. נשמח להכיר ולטפל ברכב שלכם.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a href="tel:02-6514446" className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-3.5 rounded-md font-bold text-[15px] hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_20px_-4px_hsl(var(--brand-red)/0.5)] no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              התקשרו עכשיו - 02-6514446
            </a>
            <a href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-primary-foreground/[0.1] transition-all duration-200 no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלחו הודעה בוואטסאפ
            </a>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://www.ortzat.co.il/#business",
        "name": "המוסך של צביקה - אור-צת שירותי רכב",
        "alternateName": ["אור צת", "אור-צת", "מוסך אור צת", "אור צת שירותי רכב", "אור-צת שירותי רכב", "המוסך של צביקה"],
        "url": "https://www.ortzat.co.il/about",
        "description": "מוסך משפחתי מקצועי בירושלים עם מעל 30 שנות ניסיון. שירות אישי, שקיפות מלאה ואחריות על כל עבודה.",
        "foundingDate": "1993",
        "founder": {
          "@type": "Person",
          "name": "יהושע הרשקוביץ"
        },
        "employee": {
          "@type": "Person",
          "name": "צביקה הרשקוביץ",
          "jobTitle": "בעלים ומנהל המוסך"
        },
        "telephone": "+972-2-6514446",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "רחוב האופה 4",
          "addressLocality": "ירושלים",
          "addressRegion": "גבעת שאול",
          "addressCountry": "IL"
        },
        "areaServed": [
          { "@type": "City", "name": "ירושלים" },
          { "@type": "City", "name": "מבשרת ציון" },
          { "@type": "City", "name": "מעלה אדומים" },
          { "@type": "City", "name": "בית שמש" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
          "opens": "08:00",
          "closes": "16:30"
        }
      })}} />
    </main>
  );
};

export default AboutPage;
