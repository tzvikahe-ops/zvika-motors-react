import { useState } from "react";
import type { Page } from "@/types/page";

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
  {
    question: "כמה עולה טיפול שוטף לרכב?",
    answer: "המחיר תלוי בסוג הרכב, בשנת הייצור ובסוג הטיפול הנדרש. טיפול שוטף בסיסי (החלפת שמן ופילטרים) עולה בדרך כלל בין 250 ל-500 ש\"ח. אצלנו במוסך בגבעת שאול, ירושלים, תמיד נציג מראש את המחיר המדויק לפני שמתחילים לעבוד.",
    links: [{ text: "צרו קשר לקבלת הצעת מחיר", page: "contact" }],
  },
  {
    question: "כל כמה זמן צריך לעשות טיפול לרכב?",
    answer: "ההמלצה הכללית היא טיפול כל 10,000-15,000 ק\"מ או פעם בשנה, לפי המוקדם מביניהם. רכבים ישנים יותר או רכבים שנוסעים בעיקר בעיר (כמו בירושלים) ייתכן שיצטרכו טיפולים תכופים יותר. בבדיקה במוסך נוכל לתת המלצה מדויקת.",
    links: [{ text: "עמוד השירותים שלנו", page: "services" }],
  },
  {
    question: "איך אפשר לדעת שהרכב צריך טיפול?",
    answer: "סימנים שכדאי לשים לב אליהם: נורית אזהרה שנדלקת, רעשים חריגים מהמנוע, רטט בהגה, בלמים שמגיבים לאט, צריכת דלק גבוהה מהרגיל, או דליפות מתחת לרכב. אם שמתם לב למשהו חריג, עדיף לבדוק מוקדם ולחסוך תיקון יקר בהמשך.",
    links: [{ text: "דברו איתנו בוואטסאפ", page: "contact" }],
  },
  {
    question: "איך מתכוננים לטסט שנתי?",
    answer: "לפני הטסט כדאי לוודא שהפנסים תקינים, המגבים עובדים, הצמיגים לא שחוקים, הבלמים תקינים, ואין דליפות שמן. אצלנו במוסך עושים בדיקת פרה-טסט מקיפה ומתקנים את כל מה שנדרש כדי שהרכב יעבור בפעם הראשונה.",
    links: [{ text: "תאמו בדיקת פרה-טסט", page: "contact" }],
  },
  {
    question: "מתי צריך לבדוק את המזגן ברכב?",
    answer: "אם המזגן לא מקרר כמו פעם, מוציא ריח לא נעים, או משמיע רעשים מוזרים, הגיע הזמן לבדיקה. מומלץ לבדוק את המזגן לפני הקיץ. אנחנו עושים מילוי גז, איתור דליפות ותיקון מערכות קירור לכל סוגי הרכבים.",
    links: [{ text: "תאמו בדיקת מזגן", page: "contact" }],
  },
  {
    question: "מה ההבדל בין מוסך מורשה למוסך עצמאי?",
    answer: "מוסך מורשה עובד עם יבואן ספציפי ומחויב למחירון שלו. מוסך עצמאי כמו שלנו יכול לטפל בכל סוגי הרכבים, להשתמש בחלקים איכותיים, ולהציע מחירים תחרותיים יותר. עם ניסיון של מעל 30 שנה וציוד דיאגנוסטי מתקדם, אנחנו מספקים את אותה רמת מקצועיות.",
    links: [{ text: "למה לבחור בנו", page: "about" }],
  },
  {
    question: "אתם מטפלים בכל סוגי הרכבים?",
    answer: "כן. אנחנו מטפלים ברכבים פרטיים מכל היצרנים: יונדאי, טויוטה, מאזדה, קיה, סקודה, פולקסווגן, ועוד. הציוד הממוחשב שלנו מתאים לכל סוגי הרכבים ומאפשר אבחון מדויק.",
    links: [{ text: "ראו את כל השירותים", page: "services" }],
  },
  {
    question: "כמה זמן לוקח טיפול שוטף?",
    answer: "טיפול שוטף בסיסי (שמן ופילטרים) לוקח בדרך כלל כשעה עד שעתיים. טיפולים מורכבים יותר, כמו החלפת בלמים או תיקון מנוע, יכולים לקחת יום עבודה. תמיד נעדכן אתכם מראש כמה זמן זה ייקח.",
  },
  {
    question: "איפה אתם נמצאים?",
    answer: "המוסך נמצא ברחוב האופה 4, גבעת שאול, ירושלים. קל להגיע אלינו מכל חלקי העיר. אפשר לנווט עם Waze או Google Maps ישירות מהאתר שלנו.",
    links: [{ text: "ראו מפה והוראות הגעה", page: "contact" }],
  },
  {
    question: "אפשר לתאם ביקור גם בוואטסאפ?",
    answer: "בהחלט. הרבה לקוחות מעדיפים לתאם בוואטסאפ וזה עובד מצוין. שלחו לנו הודעה עם פרטי הרכב ומה הבעיה, ונחזור אליכם עם זמן פנוי קרוב.",
  },
  {
    question: "האם יש אחריות על העבודה?",
    answer: "כן. אנחנו נותנים אחריות על כל עבודה שאנחנו מבצעים, כולל חלקי חילוף. אם משהו לא תקין אחרי הטיפול, תחזרו אלינו ונטפל בזה ללא עלות נוספת.",
  },
];

export default function FAQPage({ setPage }: { setPage: (p: Page) => void }) {
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
                        <button
                          key={j}
                          onClick={() => setPage(link.page)}
                          className="bg-transparent border border-brand-red/20 text-brand-red text-[12px] font-bold px-3 py-1.5 cursor-pointer hover:bg-brand-red/5 transition-colors duration-200"
                        >
                          {link.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-5 sm:px-6 bg-surface-warm">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-black text-foreground tracking-[-0.02em] mb-3">
            לא מצאתם תשובה?
          </h2>
          <p className="text-foreground/50 text-[13px] md:text-[14px] leading-[1.8] mb-6">
            דברו איתנו ונשמח לעזור. אפשר להתקשר או לשלוח הודעה בוואטסאפ.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/972526514446"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary no-underline inline-flex items-center justify-center gap-2 text-[14px]"
            >
              <WhatsAppSVG />
              שלחו הודעה בוואטסאפ
            </a>
            <a
              href="tel:02-6514446"
              className="btn-outline no-underline inline-flex items-center justify-center gap-2 text-[14px]"
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
