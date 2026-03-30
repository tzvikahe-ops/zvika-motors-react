import { SnowflakeIcon, WrenchIcon, DiagIcon, ChecklistIcon } from "./Icons";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import { usePageNavigation } from "@/hooks/use-page-navigation";

const WhatsAppSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const PhoneSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const ServicesPage = () => {
  const { setPage } = usePageNavigation();
  const mainServices = [
    {
      icon: <WrenchIcon />,
      title: "מכונאות רכב כללית",
      subtitle: "טיפולים שוטפים ותיקונים מקצועיים",
      description: "טיפולים שוטפים, החלפת שמנים ופילטרים, ותיקוני מנוע מקצועיים לכל סוגי הרכבים. הרכב שלכם יוצא מהמוסך במצב מושלם ובטוח לנהיגה.",
      whenToVisit: "הרכב מוציא רעשים חריגים, נורית אזהרה נדלקה, או שעבר יותר מ-10,000 ק\"מ מהטיפול האחרון.",
      details: [
        "החלפת שמן מנוע ופילטרים - שמנים מקוריים ותחליפיים באיכות גבוהה",
        "בדיקת ותיקון מערכת בלמים - רפידות, דיסקיות ונוזל בלמים",
        "טיפולי קילומטראז׳ לפי יצרן - שמירה על תוקף האחריות",
        "החלפת רצועות תזמון ומשאבת מים",
        "תיקון ואיתור דליפות שמן ונוזלי קירור",
        "בדיקת מערכת מתלים ותיקון בעיות הגה",
        "החלפת מצברים ובדיקת מערכת חשמל",
      ],
    },
    {
      icon: <DiagIcon />,
      title: "דיאגנוסטיקה ממוחשבת",
      subtitle: "אבחון תקלות מדויק שחוסך לכם כסף",
      description: "איתור תקלות מדויק עם ציוד סריקה מתקדם. חוסך לכם זמן וכסף על ידי אבחון ממוקד שמונע תיקונים מיותרים.",
      whenToVisit: "נורית צ׳ק אנג׳ין דולקת, הרכב מתקשה להתניע, צריכת דלק עלתה, או שיש ירידה בביצועי המנוע.",
      details: [
        "סריקת מחשב רכב מלאה - קריאת קודי תקלה ומחיקתם",
        "אבחון מערכת ניהול מנוע וחיישנים",
        "בדיקת מערכות בטיחות אלקטרוניות (ABS, ESP, כריות אוויר)",
        "אבחון תקלות חשמל ומערכות תאורה",
        "בדיקת פליטת מזהמים ויעילות ממיר קטליטי",
        "קריאת נתוני זמן אמת מחיישני הרכב",
      ],
    },
    {
      icon: <SnowflakeIcon />,
      title: "מיזוג אוויר לרכב",
      subtitle: "טיפול מלא במערכת הקירור והחימום",
      description: "מילוי גז, איתור דליפות ותיקון מערכות קירור. נדאג שתיהנו מנסיעה נעימה גם בימי הקיץ החמים בירושלים.",
      whenToVisit: "המזגן לא מקרר כמו פעם, יוצא ממנו ריח לא נעים, או שנשמעים רעשים מהמערכת.",
      details: [
        "מילוי גז מזגן עם בדיקת לחצים",
        "איתור ותיקון דליפות גז במערכת",
        "החלפת מדחס (קומפרסור) מזגן",
        "ניקוי וחיטוי מערכת המזגן למניעת ריחות",
        "תיקון והחלפת מאייד (אוואפורטור) ומעבה (קונדנסר)",
        "בדיקת מערכת חימום ותרמוסטט",
      ],
    },
    {
      icon: <ChecklistIcon />,
      title: "הכנה לטסט שנתי",
      subtitle: "בדיקה מקיפה שמבטיחה מעבר בפעם הראשונה",
      description: "בדיקה מקיפה לפני מבחן הרישוי. אנחנו מטפלים בכל מה שצריך כדי שתעברו בראש שקט, בלי חזרות מיותרות.",
      whenToVisit: "הטסט השנתי מתקרב ואתם רוצים לעבור בפעם הראשונה בלי הפתעות.",
      details: [
        "בדיקת מערכת בלמים - רפידות, דיסקיות, צנרת ונוזל",
        "בדיקת מערכת תאורה מלאה - פנסים, איתותים, בלמים וחניה",
        "בדיקת מערכת פליטה ורמת זיהום אוויר",
        "בדיקת צמיגים, מתלים ובולמי זעזועים",
        "בדיקת מערכת היגוי, הגה כוח ומוטות מייצבים",
        "בדיקת שמשות, מגבים ומערכת מים",
        "תיקון כל הממצאים במקום - חוסכים לכם נסיעה נוספת",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "החלפת תזמון",
      description: "החלפת רצועת או שרשרת תזמון במועד, כולל משאבת מים וגלגלת מותחן. מניעת נזק חמור למנוע.",
    },
    {
      title: "מערכת קירור מנוע",
      description: "בדיקה ותיקון רדיאטור, משאבת מים, תרמוסטט וצנרת. מניעת התחממות יתר שעלולה לגרום לנזק בלתי הפיך.",
    },
    {
      title: "תיבת הילוכים",
      description: "החלפת שמן גיר אוטומטי וידני, אבחון ותיקון תקלות בתיבת ההילוכים ומצמד.",
    },
    {
      title: "מערכת חשמל לרכב",
      description: "איתור ותיקון תקלות חשמל, החלפת מצבר, אלטרנטור, מתנע ותיקון מערכות חשמל מורכבות.",
    },
    {
      title: "בדיקת רכב לפני קנייה",
      description: "בדיקה מקיפה של מצב הרכב: מנוע, שלדה, חשמל, פח וצבע. חוות דעת מקצועית שעוזרת לכם לקבל החלטה מושכלת.",
    },
    {
      title: "טיפול במערכת פליטה",
      description: "תיקון והחלפת ממיר קטליטי, צנרת פליטה וחיישני חמצן. עמידה בתקני זיהום אוויר.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "המוסך של צביקה - אור-צת שירותי רכב",
    url: "https://www.ortzat.co.il/services",
    telephone: "+972-2-6514446",
    areaServed: { "@type": "City", name: "ירושלים" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "שירותי מוסך",
      itemListElement: mainServices.map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
        position: i + 1,
      })),
    },
  };

  return (
    <main dir="rtl" className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO - Problem-focused */}
      <section className="relative pt-[68px] py-20 md:py-28 bg-surface-dark">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--primary-foreground)) 0px, transparent 1px, transparent 60px)" }} />
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-5 tracking-wider">פתרונות לכל בעיה ברכב</div>
          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-black text-primary-foreground mb-5 leading-tight tracking-[-0.03em]">
            משהו לא בסדר ברכב? אנחנו נמצא את הבעיה ונתקן
          </h1>
          <p className="text-[14px] md:text-[15px] text-primary-foreground/50 mb-9 max-w-2xl mx-auto leading-[1.8]">
            רעשים חריגים, נורית שנדלקה, מזגן שלא מקרר, טסט שמתקרב? בכל מצב יש לנו את הציוד, הניסיון והידע לטפל ברכב שלכם. תארו לנו את הבעיה ונחזור עם פתרון.
          </p>
          <a
            href="https://wa.me/972526514446?text=שלום%2C%20יש%20לי%20בעיה%20ברכב%20ואשמח%20לייעוץ%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("services-hero")}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-3.5 rounded-md font-bold text-[15px] transition-all duration-200 shadow-[0_4px_24px_-6px_rgba(37,211,102,0.35)] no-underline"
          >
            <WhatsAppSVG />
            תארו את הבעיה בוואטסאפ
          </a>
        </div>
      </section>

      {/* MAIN SERVICES - Detailed with "when to visit" */}
      <section id="services-content" className="py-16 md:py-24 bg-background" aria-label="שירותי המוסך המרכזיים">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">מה אנחנו מטפלים</p>
            <div className="w-10 h-[2px] bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[38px] font-black text-foreground text-center mb-4 tracking-[-0.03em]">תחומי ההתמחות שלנו</h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto leading-[1.8] text-[13px] md:text-[14px]">
            כל סוג בעיה דורש גישה שונה. הנה מה שאנחנו יודעים לעשות הכי טוב
          </p>

          <div className="space-y-6">
            {mainServices.map((service) => (
              <article key={service.title} className="bg-card border border-border rounded-lg overflow-hidden hover:border-brand-red/20 transition-all duration-300 hover:shadow-[var(--shadow-md)]">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-brand-red/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-brand-red">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] md:text-[20px] font-bold text-foreground tracking-[-0.02em]">{service.title}</h3>
                      <p className="text-brand-red text-[12px] font-medium mt-0.5">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground/60 text-[13px] md:text-[14px] leading-[1.85] mb-4">{service.description}</p>
                  
                  {/* When to visit - unique to services page */}
                  <div className="bg-brand-red/[0.04] border border-brand-red/10 rounded-md px-4 py-3 mb-5">
                    <p className="text-foreground/70 text-[12px] md:text-[13px] leading-[1.7]">
                      <strong className="text-foreground/90">מתי להגיע?</strong>{" "}
                      {service.whenToVisit}
                    </p>
                  </div>

                  <div className="border-t border-border pt-5">
                    <p className="text-foreground/40 text-[10px] font-bold tracking-[0.15em] uppercase mb-3">מה כולל השירות</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/65 text-[12px] md:text-[13px] leading-[1.7]">
                          <span className="text-brand-red mt-1 shrink-0">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-16 md:py-24 bg-surface-warm" aria-label="שירותים נוספים">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">עוד התמחויות</p>
            <div className="w-10 h-[2px] bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground text-center mb-4 tracking-[-0.03em]">עוד תחומים שאנחנו מטפלים בהם</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto leading-[1.8] text-[13px] md:text-[14px]">
            כל מה שהרכב שלכם צריך - במקום אחד, עם אחריות מלאה
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {additionalServices.map((service) => (
              <article key={service.title} className="bg-card border border-border rounded-lg p-6 hover:border-brand-red/20 transition-all duration-300 hover:shadow-[var(--shadow-sm)]">
                <h3 className="text-[15px] font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.8]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="py-8 bg-brand-red">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 text-center">
          <p className="text-accent-foreground text-[15px] md:text-lg font-bold tracking-wide">
            אל תחכו שהבעיה תחמיר. קבעו טיפול עוד היום
          </p>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="py-16 md:py-20 bg-background" aria-label="מידע על שירותי המוסך">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6">
          <h2 className="text-[20px] md:text-[24px] font-bold text-foreground mb-6 tracking-[-0.02em]">מוסך מקצועי בירושלים - המוסך של צביקה</h2>
          <div className="text-foreground/55 text-[13px] md:text-[14px] leading-[2] space-y-4">
            <p>
              המוסך של צביקה (אור-צת שירותי רכב) הוא מוסך מורשה בירושלים, הממוקם ברחוב האופה 4 (בית הדפוס 24) בגבעת שאול. המוסך מספק שירותי מכונאות רכב מקיפים כבר מעל שלושה עשורים, ומתמחה בטיפולים שוטפים, דיאגנוסטיקה ממוחשבת, טיפול במערכת מיזוג אוויר לרכב והכנת רכבים לטסט השנתי.
            </p>
            <p>
              המוסך פתוח בימים א׳ עד ה׳, בין השעות 08:00 ל-16:30. ניתן לתאם טיפול בטלפון 02-6514446 או בהודעת וואטסאפ
              למספר 052-651-4446. אנחנו ממליצים לקבוע תור מראש, אך מקבלים גם לקוחות שמגיעים ללא תיאום מוקדם בכפוף לזמינות.
            </p>
          </div>
          {/* Internal links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => setPage("faq")} className="text-[12px] text-foreground/50 hover:text-brand-red bg-transparent border border-border hover:border-brand-red/20 px-4 py-2 cursor-pointer transition-colors duration-200">שאלות נפוצות על השירותים</button>
            <button onClick={() => setPage("about")} className="text-[12px] text-foreground/50 hover:text-brand-red bg-transparent border border-border hover:border-brand-red/20 px-4 py-2 cursor-pointer transition-colors duration-200">הכירו את הצוות שלנו</button>
            <button onClick={() => setPage("blog")} className="text-[12px] text-foreground/50 hover:text-brand-red bg-transparent border border-border hover:border-brand-red/20 px-4 py-2 cursor-pointer transition-colors duration-200">טיפים לתחזוקת הרכב</button>
            <button onClick={() => setPage("gallery")} className="text-[12px] text-foreground/50 hover:text-brand-red bg-transparent border border-border hover:border-brand-red/20 px-4 py-2 cursor-pointer transition-colors duration-200">תמונות מהמוסך</button>
            <button onClick={() => setPage("contact")} className="text-[12px] text-foreground/50 hover:text-brand-red bg-transparent border border-border hover:border-brand-red/20 px-4 py-2 cursor-pointer transition-colors duration-200">צרו קשר ותאמו תור</button>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Unique to services: describe your problem */}
      <section className="py-16 md:py-20 bg-surface-dark" aria-label="שלחו תיאור הבעיה">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-[22px] md:text-[32px] font-black text-primary-foreground mb-3 tracking-[-0.03em]">לא בטוחים מה הבעיה? ספרו לנו</h2>
          <p className="text-primary-foreground/45 mb-9 text-[13px] md:text-[14px] leading-[1.8] max-w-md mx-auto">
            שלחו תיאור קצר של מה שקורה ברכב - רעש, ריח, נורית, תחושה. נחזור אליכם עם הערכה ראשונית בלי עלות.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://wa.me/972526514446?text=שלום%2C%20יש%20לי%20בעיה%20ברכב%20ואשמח%20לייעוץ%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("services-cta")}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-3.5 rounded-md font-bold text-[15px] transition-all duration-200 shadow-[0_4px_24px_-6px_rgba(37,211,102,0.35)] no-underline"
            >
              <WhatsAppSVG />
              שלחו תיאור הבעיה בוואטסאפ
            </a>
            <a
              href="tel:02-6514446"
              onClick={() => trackPhoneClick("services-cta")}
              className="inline-flex items-center gap-2 bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-primary-foreground/[0.1] transition-all duration-200 no-underline"
            >
              <PhoneSVG />
              התקשרו - 02-6514446
            </a>
          </div>
        </div>
      </section>

      {/* Service Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "המוסך של צביקה - אור-צת שירותי רכב",
        "url": "https://www.ortzat.co.il/services",
        "telephone": "+972-2-6514446",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "רחוב האופה 4",
          "addressLocality": "ירושלים",
          "addressRegion": "גבעת שאול",
          "addressCountry": "IL"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "שירותי מוסך",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "מכונאות רכב כללית", "description": "טיפולים שוטפים, החלפת שמנים ופילטרים, תיקוני מנוע ומערכת בלמים" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "דיאגנוסטיקה ממוחשבת", "description": "סריקת מחשב רכב, איתור תקלות מדויק וקריאת קודי שגיאה" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "מיזוג אוויר לרכב", "description": "מילוי גז מזגן, איתור דליפות, תיקון מדחס ומערכת קירור" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "הכנה לטסט שנתי", "description": "בדיקה מקיפה לפני מבחן רישוי שנתי כולל תיקון ממצאים" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בדיקת רכב לפני קנייה", "description": "בדיקה מקצועית של מצב הרכב לפני רכישה" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "החלפת תזמון", "description": "החלפת רצועת או שרשרת תזמון כולל משאבת מים" }},
          ]
        },
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

export default ServicesPage;
