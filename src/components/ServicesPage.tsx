import { SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon, ShieldIcon, StarIcon, ClockIcon, EyeIcon } from "./Icons";

const ServicesPage = () => {
  const services = [
    { icon: <WrenchIcon />, title: "מכונאות רכב כללית", description: "טיפולים שוטפים, החלפת שמנים ופילטרים, ותיקוני מנוע מקצועיים לכל סוגי הרכבים. הרכב שלכם יוצא מהמוסך במצב מושלם ובטוח לנהיגה." },
    { icon: <DiagIcon />, title: "דיאגנוסטיקה ממוחשבת לרכב", description: "איתור תקלות מדויק עם ציוד סריקה מתקדם. חוסך לכם זמן וכסף על ידי אבחון ממוקד שמונע תיקונים מיותרים." },
    { icon: <SnowflakeIcon />, title: "מיזוג אוויר לרכב", description: "מילוי גז, איתור דליפות ותיקון מערכות קירור. נדאג שתיהנו מנסיעה נעימה גם בימי הקיץ החמים בירושלים." },
    { icon: <ChecklistIcon />, title: "הכנה לטסט שנתי", description: "בדיקה מקיפה לפני מבחן הרישוי. אנחנו מטפלים בכל מה שצריך כדי שתעברו בראש שקט, בלי חזרות מיותרות." },
  ];

  const trustPoints = [
    { icon: <ClockIcon />, title: "ניסיון של מעל 30 שנה", description: "מכירים כל דגם מקרוב ומטפלים בכל סוגי הרכבים." },
    { icon: <DiagIcon />, title: "אבחון מדויק שחוסך כסף", description: "ציוד מתקדם ומקצועיות שמונעים תיקונים מיותרים." },
    { icon: <EyeIcon />, title: "שקיפות מלאה ומחיר הוגן", description: "כל תיקון מוסבר, מתואם ומאושר על ידכם מראש." },
    { icon: <ShieldIcon />, title: "שירות אישי ואחריות מלאה", description: "כל לקוח מקבל יחס צמוד ואחריות מלאה על כל עבודה." },
  ];

  const testimonials = [
    { text: "הגעתי עם תקלה שמוסכים אחרים לא הצליחו לפתור. צביקה אבחן תוך דקות ותיקן במחיר הוגן.", author: "יוסי כהן", location: "ירושלים" },
    { text: "מוסך נקי, מסודר ואמין. תמיד מסבירים מה הבעיה לפני שמתחילים. לקוח קבוע כבר שנים.", author: "רונית לוי", location: "מבשרת ציון" },
    { text: "הכנה לטסט מהירה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון.", author: "דוד מזרחי", location: "ירושלים" },
  ];

  return (
    <main dir="rtl" className="bg-background">
      {/* HERO */}
      <section className="relative pt-[68px] py-20 md:py-28 bg-surface-dark">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--primary-foreground)) 0px, transparent 1px, transparent 60px)" }} />
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-5 tracking-wider">שירותים מקצועיים</div>
          <h1 className="text-3xl md:text-[42px] font-black text-primary-foreground mb-5 leading-tight">
            שירותי מוסך מקצועיים בירושלים
          </h1>
          <p className="text-sm md:text-base text-primary-foreground/50 mb-9 max-w-2xl mx-auto leading-relaxed">
            מעל 30 שנות ניסיון במכונאות רכב בירושלים. שקיפות מלאה, מחיר הוגן ויחס אישי לכל לקוח.
          </p>
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-3.5 rounded-md font-bold text-[15px] hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_20px_-4px_hsl(var(--brand-red)/0.5)] no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            התקשרו עכשיו לתיאום טיפול
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-content" className="py-16 md:py-24 bg-background" aria-label="רשימת שירותי המוסך">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-[38px] font-black text-foreground text-center mb-4">שירותי מכונאות רכב בירושלים</h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto leading-relaxed text-sm">
            טיפול מקצועי, אמין ושקוף לכל סוגי הרכבים – הכל תחת קורת גג אחת בגבעת שאול
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <article key={service.title} className="bg-card rounded-lg p-7 border border-border hover:border-brand-red/20 transition-all duration-300 group hover:shadow-[var(--shadow-md)] flex gap-5">
                <div className="shrink-0 mt-1 text-brand-red/60 group-hover:text-brand-red transition-colors">{service.icon}</div>
                <div>
                  <h3 className="text-[16px] font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 md:py-24 bg-surface-steel" aria-label="למה לבחור בנו">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-[38px] font-black text-foreground text-center mb-3">למה לקוחות בירושלים בוחרים בנו?</h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto text-sm leading-relaxed">
            כי אצלנו הרכב שלכם בידיים בטוחות – עם יחס אישי ושקיפות מלאה
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4 bg-card rounded-lg p-6 border border-border hover:shadow-[var(--shadow-sm)] transition-all duration-200">
                <div className="bg-brand-red w-10 h-10 rounded-md flex items-center justify-center shrink-0 text-accent-foreground">{point.icon}</div>
                <div>
                  <h3 className="font-bold text-foreground text-[14px] mb-1">{point.title}</h3>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-background" aria-label="המלצות לקוחות">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-[36px] font-black text-foreground text-center mb-14">לקוחות המוסך ממליצים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map(({ text, author, location }) => (
              <div key={author} className="bg-card rounded-lg p-7 border border-border flex flex-col gap-4 hover:shadow-[var(--shadow-md)] transition-all duration-300 relative">
                <div className="absolute top-0 right-0 left-0 h-[3px] bg-brand-red rounded-t-lg" />
                <div className="flex gap-0.5 justify-end">{[1,2,3,4,5].map((i) => <StarIcon key={i} />)}</div>
                <p className="text-foreground/75 leading-7 text-[13px] text-right flex-1">&ldquo;{text}&rdquo;</p>
                <div className="text-right mt-auto pt-3 border-t border-border">
                  <p className="font-bold text-foreground text-[13px]">{author}</p>
                  <p className="text-muted-foreground text-[11px] mt-0.5">{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="py-8 bg-brand-red">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-accent-foreground text-[15px] md:text-lg font-bold tracking-wide">
            אל תחכו שהבעיה תחמיר. קבעו טיפול עוד היום
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-surface-dark" aria-label="יצירת קשר עם המוסך">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-[32px] font-black text-primary-foreground mb-3">מחפשים מוסך מקצועי בירושלים?</h2>
          <p className="text-primary-foreground/45 mb-9 text-sm leading-relaxed max-w-md mx-auto">
            התקשרו, שלחו הודעה בוואטסאפ או פשוט בואו. נתאם טיפול מהיר, שקוף ומקצועי.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a href="tel:02-6514446" className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-3.5 rounded-md font-bold text-[15px] hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_20px_-4px_hsl(var(--brand-red)/0.5)] no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              התקשרו עכשיו – 02-6514446
            </a>
            <a href="https://wa.me/972526514446" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-primary-foreground/[0.1] transition-all duration-200 no-underline">
              שלחו הודעה בוואטסאפ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
