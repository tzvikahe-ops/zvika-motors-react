import { useState } from "react";
import type { Page } from "@/types/page";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import InternalLink from "./InternalLink";

const WhatsAppSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const PhoneSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

interface FAQItem {
  question: string;
  answer: string;
  links?: { text: string; page: Page }[];
}

const faqs: FAQItem[] = [
  // - תיאום ונגישות -
  {
    question: "אפשר להגיע בלי תור?",
    answer: "כן, אפשר. אנחנו מקבלים גם לקוחות שמגיעים בלי תיאום מראש, בכפוף לזמינות. עם זאת, אם תתאמו מראש בטלפון או בוואטסאפ, נוכל להבטיח שנפנה לכם זמן ולא תחכו.",
  },
  {
    question: "אפשר לתאם ביקור בוואטסאפ?",
    answer: "בהחלט, והרבה לקוחות עושים את זה. שלחו הודעה עם סוג הרכב, שנת ייצור ותיאור קצר של הבעיה - נחזור אליכם עם זמן פנוי קרוב. המספר: 052-651-4446.",
  },
  {
    question: "איפה המוסך ואיך מגיעים?",
    answer: "המוסך ברחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים. קל להגיע מכל רחבי העיר ומהכניסה המערבית. יש חניה חופשית בסביבה. אפשר לנווט ישירות עם Waze או Google Maps מדף יצירת הקשר באתר.",
    links: [{ text: "מפה והוראות הגעה", page: "contact" }],
  },
  {
    question: "מה שעות הפעילות שלכם?",
    answer: "אנחנו פתוחים ימים א׳ עד ה׳, 08:00 עד 16:30. שישי ושבת סגור. בימי חול המועד ייתכנו שינויים - כדאי לבדוק מראש.",
  },
  // - עלויות וזמנים -
  {
    question: "כמה עולה טיפול שוטף לרכב?",
    answer: "תלוי בסוג הרכב ובשנת הייצור. טיפול בסיסי (שמן ופילטרים) נע בדרך כלל סביב 700 ש\"ח. תמיד נגיד לכם את המחיר המדויק לפני שמתחילים - בלי הפתעות בחשבונית.",
    links: [{ text: "קבלו הצעת מחיר", page: "contact" }],
  },
  {
    question: "כמה זמן לוקח טיפול שוטף?",
    answer: "טיפול בסיסי (שמן ופילטרים) לוקח כשעה עד שעתיים. טיפולים מורכבים יותר יכולים לקחת יותר זמן. תמיד נעדכן אתכם מראש כמה זמן לחכות.",
  },
  {
    question: "אפשר לחכות במוסך בזמן הטיפול?",
    answer: "כן, יש לנו אזור המתנה. לטיפולים ארוכים יותר, אפשר להשאיר את הרכב ולאסוף אותו מאוחר יותר באותו יום. נתקשר אליכם כשהרכב מוכן.",
  },
  // - שירותים ומקצועיות -
  {
    question: "אתם מטפלים בכל סוגי הרכבים?",
    answer: "כן. רכבים פרטיים מכל היצרנים: יונדאי, טויוטה, מאזדה, קיה, סקודה, פולקסווגן, שברולט ועוד. הציוד הממוחשב שלנו מתאים לכל הדגמים הנפוצים בישראל.",
    links: [{ text: "רשימת השירותים המלאה", page: "services" }],
  },
  {
    question: "אתם מטפלים ברכבים היברידיים?",
    answer: "כן, אנחנו מטפלים ברכבים היברידיים בכל מה שקשור למנוע הבנזין, מערכת הבלמים, מתלים, מיזוג אוויר ושאר המערכות המכניות. לטיפולים במערכת החשמלית הייעודית (סוללה, מנוע חשמלי) אנחנו מפנים למרכזי שירות מתמחים.",
  },
  {
    question: "אתם עושים בדיקת רכב לפני קנייה?",
    answer: "כן, וזה אחד השירותים שאנחנו ממליצים עליהם בחום. אנחנו בודקים את מצב המנוע, השלדה, החשמל, הפח והצבע ונותנים חוות דעת מקצועית וכנה. זה יכול לחסוך לכם אלפי שקלים על רכב בעייתי.",
    links: [{ text: "תאמו בדיקת רכב", page: "contact" }],
  },
  // - טסט שנתי -
  {
    question: "איך מתכוננים לטסט שנתי?",
    answer: "לפני הטסט כדאי לוודא שהפנסים תקינים, המגבים עובדים, הצמיגים לא שחוקים, הבלמים תקינים ואין דליפות שמן. אצלנו עושים בדיקת פרה-טסט מקיפה ומתקנים את כל מה שנדרש כדי שהרכב יעבור בפעם הראשונה.",
    links: [{ text: "תאמו בדיקת פרה-טסט", page: "contact" }],
  },
  {
    question: "מה קורה אם הרכב נכשל בטסט?",
    answer: "אם הרכב נכשל בטסט, תביאו אותו אלינו עם דו\"ח הממצאים. נתקן את כל מה שנדרש ונוודא שהרכב יעבור בבדיקה החוזרת. אם עשיתם אצלנו בדיקת פרה-טסט לפני - הסיכוי לכישלון נמוך משמעותית.",
  },
  // - חלפים ואחריות -
  {
    question: "אתם משתמשים בחלפים מקוריים או תחליפיים?",
    answer: "אנחנו מציעים שתי אפשרויות: חלפים מקוריים וחלפים תחליפיים באיכות גבוהה (OEM). תמיד נסביר את ההבדלים ונתאים לתקציב ולצרכים שלכם. לא נשתמש בחלקים זולים שיגרמו לבעיות בהמשך.",
  },
  {
    question: "יש אחריות על העבודה?",
    answer: "כן, אחריות מלאה על כל עבודה שאנחנו מבצעים וגם על חלקי החילוף. אם משהו לא תקין אחרי הטיפול - תחזרו אלינו ונטפל בזה ללא עלות נוספת. זו המחויבות שלנו.",
  },
  {
    question: "האם אאבד את אחריות היצרן אם אטפל במוסך עצמאי?",
    answer: "לא. על פי חוק רישוי שירותים ומקצועות בענף הרכב (תשע\"ו-2016), יבואן אינו רשאי להתנות את האחריות על הרכב בביצוע טיפולים תקופתיים אצל מורשי היבואן בלבד. כל עוד המוסך שבחרתם מורשה על ידי משרד התחבורה (כפי שאנחנו), הטיפולים יוכרו לצורך שמירת האחריות. שימו לב: מדובר בטיפולים שוטפים ותחזוקה; ליקויי ייצור ותיקונים תחת אחריות ספציפית מבוצעים על ידי היבואן.",
    links: [{ text: "מדריך זכויות האחריות בבלוג שלנו", page: "blog" }],
  },
  // - זיהוי ושם המוסך -
  {
    question: "מה הקשר בין 'מוסך אור צת' ל'המוסך של צביקה'?",
    answer: "זה אותו מוסך בדיוק. מוסך אור צת, שנפתח בגבעת שאול ירושלים בשנת 1993 על ידי יהושע הרשקוביץ תחת השם 'אור-צת שירותי רכב', הוא כיום המוסך של צביקה. בנו של יהושע, צביקה הרשקוביץ, ניהל את המוסך בהדרגה ומ-2011 הוא מנהל אותו לחלוטין. השם 'אור-צת' נשמר בסמל המסחרי ובמוניטין שנצבר לאורך 30+ שנה.",
    links: [{ text: "הסיפור המלא", page: "about" }],
  },
  {
    question: "חיפשתי 'אור צת שירותי רכב' - האם זה עדיין קיים?",
    answer: "כן, 'אור צת שירותי רכב' (או 'מוסך אור צת') הוא המוסך של צביקה הרשקוביץ ברחוב האופה 4, גבעת שאול, ירושלים. השם הרשמי שונה אך הכתובת, הטלפון (02-6514446) והצוות נשארו. אם הכרתם אותנו בשם הישן - תשמחו לדעת שאנחנו עדיין כאן, עם אותה מקצועיות ואמינות.",
  },
  // - אמון ושקיפות -
  {
    question: "מה ההבדל בין מוסך מורשה למוסך עצמאי?",
    answer: "מוסך מורשה עובד עם יבואן ספציפי ומחויב למחירון שלו. מוסך עצמאי כמו שלנו יכול לטפל בכל סוגי הרכבים, להשתמש בחלקים איכותיים ולהציע מחירים תחרותיים יותר. עם ניסיון של מעל 30 שנה וציוד דיאגנוסטי מתקדם, אנחנו מספקים את אותה רמת מקצועיות.",
    links: [{ text: "עוד עלינו", page: "about" }],
  },
  {
    question: "איך אני יודע שלא יעשו לי עבודות מיותרות?",
    answer: "לפני כל תיקון, צביקה מסביר מה נמצא, מה חייבים לתקן ומה יכול לחכות. לא מתחילים לעבוד בלי אישור שלכם ובלי שתדעו את המחיר המדויק. ככה אנחנו עובדים כבר מעל 30 שנה, ולכן 98% מהלקוחות שלנו חוזרים.",
  },
  // - סימנים ותקלות -
  {
    question: "כל כמה זמן צריך לעשות טיפול לרכב?",
    answer: "ההמלצה הכללית היא טיפול כל 10,000 עד 15,000 ק\"מ או פעם בשנה, לפי המוקדם מביניהם. רכבים ישנים או רכבים שנוסעים בעיקר בעיר עשויים לצרוך טיפולים תכופים יותר. במוסך נוכל לתת המלצה מדויקת לפי הרכב שלכם.",
    links: [{ text: "עמוד השירותים", page: "services" }],
  },
  {
    question: "מתי צריך לבדוק את המזגן ברכב?",
    answer: "אם המזגן לא מקרר כמו פעם, מוציא ריח לא נעים או משמיע רעשים - הגיע הזמן לבדיקה. מומלץ לבדוק לפני הקיץ. אנחנו עושים מילוי גז, איתור דליפות ותיקון מערכות קירור לכל סוגי הרכבים.",
    links: [{ text: "תאמו בדיקת מזגן", page: "contact" }],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-background" dir="rtl">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-5 sm:px-6 bg-surface-darker relative">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="max-w-[800px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-5" dir="rtl">
            <ol className="flex flex-wrap items-center gap-1 text-[11px] text-primary-foreground/40">
              <li><a href="/" className="hover:text-primary-foreground/60 transition-colors">דף הבית</a></li>
              <li aria-hidden="true" className="mx-0.5 select-none">›</li>
              <li className="text-primary-foreground/60" aria-current="page">שאלות נפוצות</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">שאלות נפוצות</p>
          </div>
          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.1] mb-4">
            שאלות ותשובות על טיפול ברכב
          </h1>
          <p className="text-primary-foreground/50 text-[14px] md:text-[15px] leading-[1.8] max-w-[600px]">
            ריכזנו עבורכם את השאלות שהלקוחות שלנו שואלים הכי הרבה. לא מצאתם תשובה? דברו איתנו.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-20 px-5 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 md:py-6 bg-transparent border-none cursor-pointer text-right"
                >
                  <h2 className="text-[14px] md:text-[16px] font-bold text-foreground leading-[1.5] flex-1">
                    {faq.question}
                  </h2>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 mt-1 text-muted-foreground transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-[500px] pb-5 md:pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-foreground/60 text-[13px] md:text-[14px] leading-[2] max-w-[700px]">
                    {faq.answer}
                  </p>
                  {faq.links && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {faq.links.map((link, j) => (
                        <InternalLink
                          key={j}
                          page={link.page}
                          className="border border-brand-red/20 text-brand-red text-[12px] font-bold px-3 py-1.5 hover:bg-brand-red/5 transition-colors duration-200 no-underline"
                        >
                          {link.text}
                        </InternalLink>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-5 sm:px-6 border-t border-border bg-background">
        <div className="max-w-[700px] mx-auto">
          <p className="text-foreground/30 text-[11px] font-bold tracking-wider mb-4">עמודים שימושיים</p>
          <div className="flex flex-wrap gap-3">
            <InternalLink page="services" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">שירותי המוסך שלנו</InternalLink>
            <InternalLink page="blog" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">מדריכים וטיפים מקצועיים</InternalLink>
            <InternalLink page="about" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">הסיפור שלנו</InternalLink>
            <InternalLink page="gallery" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">תמונות מהמוסך</InternalLink>
            <InternalLink page="contact" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">צרו קשר ותאמו תור</InternalLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-5 sm:px-6 bg-surface-dark">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-black text-primary-foreground tracking-[-0.02em] mb-3">
            עדיין יש שאלה? דברו איתנו
          </h2>
          <p className="text-primary-foreground/50 text-[13px] md:text-[14px] leading-[1.8] mb-8">
            אנחנו כאן לענות על כל שאלה, לתת הערכת מחיר או לתאם ביקור. בלי התחייבות.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/972526514446?text=שלום%2C%20יש%20לי%20שאלה%20לפני%20שאני%20מגיע%20למוסך%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("faq-cta")}
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#0E7A6D] text-[#075E54] px-8 py-3.5 rounded-md font-bold text-[14px] no-underline transition-all duration-200 shadow-[0_2px_12px_-4px_rgba(7,94,84,0.2)] hover:bg-[#f0faf8]"
            >
              <WhatsAppSVG />
              שאלו אותנו בוואטסאפ
              <span className="sr-only">(נפתח בחלון חדש)</span>
            </a>
            <a
              href="tel:02-6514446"
              onClick={() => trackPhoneClick("faq-cta")}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 px-8 py-3.5 rounded-md font-medium text-[14px] no-underline hover:bg-primary-foreground/[0.1] transition-all duration-200"
            >
              <PhoneSVG />
              02-6514446
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
