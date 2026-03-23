import { SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon, ShieldIcon, StarIcon, ClockIcon, EyeIcon } from "./Icons";

const ServicesPage = () => {
  const services = [
    {
      icon: <WrenchIcon />,
      title: "מכונאות רכב כללית",
      description: "טיפולים שוטפים, החלפת שמנים ופילטרים, ותיקוני מנוע מקצועיים לכל סוגי הרכבים. הרכב שלכם יוצא מהמוסך במצב מושלם ובטוח לנהיגה.",
    },
    {
      icon: <DiagIcon />,
      title: "דיאגנוסטיקה ממוחשבת לרכב",
      description: "איתור תקלות מדויק עם ציוד סריקה מתקדם. חוסך לכם זמן וכסף על ידי אבחון ממוקד שמונע תיקונים מיותרים.",
    },
    {
      icon: <SnowflakeIcon />,
      title: "מיזוג אוויר לרכב",
      description: "מילוי גז, איתור דליפות ותיקון מערכות קירור. נדאג שתיהנו מנסיעה נעימה גם בימי הקיץ החמים בירושלים, בלי הפתעות במחיר.",
    },
    {
      icon: <ChecklistIcon />,
      title: "הכנה לטסט שנתי",
      description: "בדיקה מקיפה לפני מבחן הרישוי. אנחנו מטפלים בכל מה שצריך כדי שתעברו בראש שקט, בלי חזרות מיותרות.",
    },
  ];

  const trustPoints = [
    {
      icon: <ClockIcon />,
      title: "ניסיון של מעל 30 שנה",
      description: "מכירים כל דגם מקרוב ומטפלים בכל סוגי הרכבים. הניסיון שלנו זה הביטחון שלכם.",
    },
    {
      icon: <DiagIcon />,
      title: "אבחון מדויק שחוסך לכם כסף",
      description: "ציוד מתקדם ומקצועיות שמונעים תיקונים מיותרים ועלויות מפתיעות.",
    },
    {
      icon: <EyeIcon />,
      title: "שקיפות מלאה ומחיר הוגן",
      description: "כל תיקון מוסבר, מתואם ומאושר על ידכם מראש. ללא הפתעות.",
    },
    {
      icon: <ShieldIcon />,
      title: "שירות אישי ואחריות מלאה",
      description: "כל לקוח מקבל יחס צמוד ואחריות מלאה על כל עבודה שיוצאת מהמוסך.",
    },
  ];

  const testimonials = [
    {
      text: "הגעתי עם תקלה שמוסכים אחרים לא הצליחו לפתור. צביקה אבחן תוך דקות ותיקן במחיר הוגן. מוסך שסומכים עליו.",
      author: "יוסי כהן",
      location: "ירושלים",
    },
    {
      text: "מוסך נקי, מסודר ואמין. תמיד מסבירים מה הבעיה לפני שמתחילים. לקוח קבוע כבר שנים ולא מחליף.",
      author: "רונית לוי",
      location: "מבשרת ציון",
    },
    {
      text: "הכנה לטסט מהירה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון. ממליץ לכל מי שמחפש מוסך אמין.",
      author: "דוד מזרחי",
      location: "ירושלים",
    },
  ];

  return (
    <main dir="rtl" className="bg-background">
      {/* HERO */}
      <section className="relative pt-[72px] py-20 md:py-28 bg-primary">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-[40px] font-black text-primary-foreground mb-5 leading-tight">
            שירותי מוסך מקצועיים בירושלים
            <br />
            <span className="text-brand-red">אמינות, ניסיון ושירות ללא פשרות</span>
          </h1>
          <p className="text-sm md:text-base text-primary-foreground/70 mb-9 max-w-2xl mx-auto leading-relaxed">
            מעל 30 שנות ניסיון במכונאות רכב בירושלים. שקיפות מלאה, מחיר הוגן ויחס אישי לכל לקוח.
          </p>
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-3.5 rounded-[10px] font-bold text-lg hover:bg-brand-red-hover transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_16px_-4px_hsl(0_68%_32%/0.4)] no-underline"
          >
            התקשרו עכשיו לתיאום טיפול
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-content" className="py-16 md:py-24 bg-background" aria-label="רשימת שירותי המוסך">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-[38px] font-black text-primary text-center mb-4">
            שירותי מכונאות רכב בירושלים
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto leading-relaxed text-sm">
            טיפול מקצועי, אמין ושקוף לכל סוגי הרכבים – הכל תחת קורת גג אחת בגבעת שאול, ירושלים
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-secondary rounded-xl p-8 border border-border/60 hover:border-brand-red/20 transition-all duration-200 group hover:shadow-[var(--shadow-md)]"
              >
                <div className="mb-4 text-primary/50 group-hover:text-primary/70 transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 md:py-24 bg-secondary" aria-label="למה לבחור בנו">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-[38px] font-black text-primary text-center mb-3">
            למה לקוחות בירושלים בוחרים במוסך של צביקה?
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto text-sm leading-relaxed">
            כי אצלנו הרכב שלכם בידיים בטוחות – עם יחס אישי ושקיפות מלאה בכל שלב
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border/60 hover:shadow-[var(--shadow-sm)] transition-all duration-200"
              >
                <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-primary-foreground">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm mb-1">{point.title}</h3>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-background" aria-label="המלצות לקוחות">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-[38px] font-black text-primary text-center mb-3">
            לקוחות המוסך ממליצים
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto text-sm leading-relaxed">
            לקוחות שמגיעים אלינו חוזרים שנה אחרי שנה
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(({ text, author, location }) => (
              <div
                key={author}
                className="bg-secondary rounded-xl p-7 border-b-[3px] border-brand-red flex flex-col gap-3 hover:shadow-[var(--shadow-md)] transition-shadow duration-200"
              >
                <div className="flex gap-0.5 justify-end">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-foreground/80 leading-7 text-[13.5px] text-right italic flex-1">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="text-right mt-auto pt-3 border-t border-border/60">
                  <p className="font-bold text-primary text-[13.5px]">{author}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://reviewthis.biz/dry-bird-8259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-[10px] font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              לצפייה בכל הביקורות
            </a>
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="py-10 bg-brand-red">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-accent-foreground text-lg md:text-xl font-bold tracking-wide">
            אל תחכו שהבעיה תחמיר. קבעו טיפול עוד היום
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-primary" aria-label="יצירת קשר עם המוסך">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-[32px] font-black text-primary-foreground mb-3 leading-tight">
            מחפשים מוסך מקצועי בירושלים?
          </h2>
          <p className="text-primary-foreground/65 mb-4 text-sm leading-relaxed max-w-md mx-auto">
            התקשרו, שלחו הודעה בוואטסאפ או פשוט בואו. נתאם טיפול מהיר, שקוף ומקצועי.
          </p>
          <p className="text-primary-foreground/35 text-xs mb-9">
            מעל 30 שנות ניסיון · שקיפות מלאה · אחריות על כל טיפול
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="tel:02-6514446"
              className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-3.5 rounded-[10px] font-bold text-lg hover:bg-brand-red-hover transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_16px_-4px_hsl(0_68%_32%/0.4)] no-underline"
            >
              התקשרו עכשיו – 02-6514446
            </a>
            <a
              href="https://wa.me/972526514446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-primary-foreground border border-white/20 px-8 py-3.5 rounded-[10px] font-semibold text-lg hover:bg-white/[0.18] transition-all duration-200 no-underline"
            >
              שלחו הודעה בוואטסאפ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
