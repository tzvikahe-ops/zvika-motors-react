import { getContactEmail } from "@/lib/obfuscate-email";

export default function AccessibilityStatement() {
  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-black text-primary mb-3">הצהרת נגישות</h1>
        <p className="text-muted-foreground text-sm mb-10">עדכון אחרון: מרץ 2026</p>

        <div className="bg-background rounded-xl p-8 shadow-[var(--shadow-sm)] border border-border/40 text-sm leading-7 text-muted-foreground flex flex-col gap-6">
          <p>
            המוסך של צביקה (אור-צת שירותי רכב) מחויב להנגשת האתר לאנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
          </p>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">1. פעולות שבוצעו להנגשת האתר</h2>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4">
              <li>שימוש בניגודיות צבעים מתאימה</li>
              <li>תמיכה בכיוון קריאה מימין לשמאל (RTL)</li>
              <li>שימוש בגופנים קריאים ובגודל טקסט מתאים</li>
              <li>תיאור חלופי (alt) לתמונות</li>
              <li>מבנה סמנטי של דפי האתר</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">2. רמת הנגישות</h2>
            <p>אנו שואפים לעמוד ברמת הנגישות AA של תקן WCAG 2.1. ייתכן כי חלקים מסוימים באתר אינם נגישים באופן מלא ואנו עובדים על שיפור מתמיד.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">3. פנייה בנושא נגישות</h2>
            <p className="mb-3">
              אם נתקלת בבעיית נגישות באתר, נשמח לשמוע ממך ולטפל בכך בהקדם:
            </p>
            <div className="bg-gray-bg rounded-lg p-5 flex flex-col gap-2">
              <p><strong className="text-foreground">המוסך של צביקה – אור-צת שירותי רכב</strong></p>
              <p>טלפון: <a href="tel:02-6514446" className="text-primary underline" dir="ltr">02-6514446</a></p>
              <p>אימייל: <a href={`mailto:${getContactEmail()}`} className="text-primary underline">{getContactEmail()}</a></p>
              <p>כתובת: רחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">4. נגישות המוסך הפיזי</h2>
            <p>המוסך נגיש לאנשים עם מוגבלות פיזית, כולל כניסה נגישה וחניית נכים ייעודית.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
