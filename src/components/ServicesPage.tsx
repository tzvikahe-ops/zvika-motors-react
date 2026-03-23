import { SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon, ShieldIcon, StarIcon, ClockIcon, EyeIcon } from "./Icons";

const ServicesPage = () => {
  const services = [
    {
      icon: <WrenchIcon />,
      title: "מכונאות כללית",
      description: "טיפולים שוטפים, החלפת שמנים ופילטרים, ותיקוני מנוע מקצועיים. אנחנו מוודאים שהרכב שלך יוצא מהמוסך במצב מושלם ובטוח לנהיגה.",
    },
    {
      icon: <DiagIcon />,
      title: "דיאגנוסטיקה ממוחשבת",
      description: "איתור תקלות מדויק עם ציוד סריקה מתקדם. חוסך לך זמן, כסף ועוגמת נפש מתיקונים מיותרים.",
    },
    {
      icon: <SnowflakeIcon />,
      title: "מיזוג אוויר לרכב",
      description: "מילוי גז, איתור דליפות ותיקון מערכות קירור. תיהנו מנסיעה נעימה גם בימי הקיץ החמים בירושלים.",
    },
    {
      icon: <ChecklistIcon />,
      title: "הכנה לטסט",
      description: "בדיקה מקיפה לפני מבחן הרישוי השנתי. אנחנו מטפלים בכל מה שצריך כדי שתעברו בראש שקט.",
    },
  ];

  const trustPoints = [
    {
      icon: <ClockIcon />,
      title: "מעל 30 שנות ניסיון אמיתי",
      description: "ניסיון מוכח בטיפול בכל סוגי הרכבים, מכל היצרנים.",
    },
    {
      icon: <DiagIcon />,
      title: "אבחון מדויק שחוסך זמן וכסף",
      description: "ציוד מתקדם ומקצועיות שמונעים תיקונים מיותרים.",
    },
    {
      icon: <EyeIcon />,
      title: "מחירים הוגנים ושקיפות מלאה",
      description: "ללא הפתעות. כל תיקון מוסבר ומאושר על ידך מראש.",
    },
    {
      icon: <ShieldIcon />,
      title: "שירות אישי עם אחריות מלאה",
      description: "כל לקוח מקבל יחס אישי ואחריות על כל עבודה.",
    },
  ];

  const testimonials = [
    {
      text: "הגעתי עם תקלה שמוסכים אחרים לא הצליחו לפתור. צביקה אבחן את הבעיה תוך דקות ותיקן במחיר הוגן. מוסך בירושלים שאפשר לסמוך עליו.",
      author: "יוסי כהן",
      location: "ירושלים",
    },
    {
      text: "שירות מקצועי, נקי ואמין. תמיד מסבירים מה הבעיה לפני שמתחילים לעבוד. אני לקוח קבוע כבר 5 שנים ולא מחליף.",
      author: "רונית לוי",
      location: "מבשרת ציון",
    },
    {
      text: "הכנה לטסט מהירה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון. ממליץ בחום לכל מי שמחפש מוסך אמין בירושלים.",
      author: "דוד מזרחי",
      location: "ירושלים",
    },
  ];

  return (
    <main dir="rtl" className="bg-background">
      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-[42px] font-black text-primary-foreground mb-5 leading-tight">
            שירותי מוסך מקצועיים בירושלים
            <br />
            <span className="text-brand-red">אמינות, ניסיון ושירות ללא פשרות</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            עם מעל 30 שנות ניסיון, אנחנו מטפלים בכל סוגי הרכבים במהירות, מקצועיות ושקיפות מלאה
          </p>
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red-hover transition-all hover:scale-105 shadow-lg"
          >
            קבל הצעת מחיר עכשיו
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-content" className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-4">
            השירותים שלנו
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            כל מה שהרכב שלך צריך תחת קורת גג אחת, בסטנדרט הגבוה ביותר
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-secondary rounded-2xl p-8 border border-border hover:border-brand-red/30 transition-colors group"
              >
                <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-12">
            למה לבחור במוסך של צביקה?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border"
              >
                <div className="bg-primary w-11 h-11 rounded-lg flex items-center justify-center shrink-0 text-primary-foreground">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-[15px] mb-1">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-12">
            לקוחות מרוצים מספרים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(({ text, author, location }) => (
              <div
                key={author}
                className="bg-secondary rounded-xl p-7 border-b-[3px] border-brand-red flex flex-col gap-3"
              >
                <div className="flex gap-1 justify-end">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-7 text-sm text-right italic">
                  &ldquo;{text}&rdquo;
                </p>
                <p className="font-bold text-primary text-sm text-left mt-auto">
                  — {author}, {location}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://reviewthis.biz/dry-bird-8259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              לצפייה בכל הביקורות
            </a>
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="py-10 bg-brand-red">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-accent-foreground text-xl md:text-2xl font-bold">
            אל תחכו שהבעיה תחמיר, קבעו טיפול עוד היום
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-[34px] font-black text-primary-foreground mb-4 leading-tight">
            צריכים מוסך בירושלים שאפשר לסמוך עליו?
            <br />
            אנחנו כאן בשבילכם
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            התקשרו עכשיו ונתאם טיפול מהיר ומקצועי לרכב שלכם.
          </p>
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red-hover transition-all hover:scale-105 shadow-lg"
          >
            התקשרו עכשיו — 02-6514446
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
