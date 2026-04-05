import { getContactEmail } from "@/lib/obfuscate-email";

export default function AccessibilityStatement() {
  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-black text-primary mb-3">הצהרת נגישות</h1>
        <p className="text-muted-foreground text-sm mb-10">עדכון אחרון: אפריל 2026</p>

        <div className="bg-background rounded-xl p-8 shadow-[var(--shadow-sm)] border border-border/40 text-sm leading-7 text-muted-foreground flex flex-col gap-6">
          <p>
            המוסך של צביקה (אור-צת שירותי רכב) מחויב להנגשת האתר לאנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ובהתאם לתקן הישראלי ת"י 5568.
          </p>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">1. רמת הנגישות</h2>
            <p>אנו שואפים לעמוד ברמת הנגישות AA של תקן WCAG 2.1 ובהתאם לדרישות תקן ת"י 5568. ייתכן כי חלקים מסוימים באתר אינם נגישים באופן מלא ואנו עובדים על שיפור מתמיד.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">2. פעולות שבוצעו להנגשת האתר</h2>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4">
              <li>קישור "דלג לתוכן הראשי" לדילוג על הניווט</li>
              <li>שימוש בניגודיות צבעים מתאימה</li>
              <li>תמיכה בכיוון קריאה מימין לשמאל (RTL)</li>
              <li>שימוש בגופנים קריאים ובגודל טקסט מתאים</li>
              <li>תיאור חלופי (alt) לתמונות</li>
              <li>מבנה סמנטי של דפי האתר עם תגיות ARIA</li>
              <li>תמיכה בניווט באמצעות מקלדת</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">3. טכנולוגיות מסייעות נתמכות</h2>
            <p>האתר נבדק ותואם לשימוש עם הטכנולוגיות המסייעות הבאות:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4 mt-2">
              <li>קורא מסך NVDA (עם תמיכה בעברית)</li>
              <li>קורא מסך JAWS</li>
              <li>VoiceOver (macOS / iOS)</li>
              <li>TalkBack (Android)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">4. מגבלות נגישות ידועות</h2>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4">
              <li>חלק מהתמונות בגלריה עשויות שלא לכלול תיאור alt מפורט</li>
              <li>מפת גוגל המוטמעת באתר מנוהלת על ידי צד שלישי ואינה תחת שליטתנו המלאה</li>
              <li>תוכן שנוצר באמצעות בינה מלאכותית (מחולל התמונות) עשוי שלא לעמוד בכל דרישות הנגישות</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">5. רכז נגישות</h2>
            <p className="mb-3">
              לפניות בנושא נגישות ניתן לפנות לרכז הנגישות של העסק:
            </p>
            <div className="bg-gray-bg rounded-lg p-5 flex flex-col gap-2">
              <p><strong className="text-foreground">צביקה — רכז נגישות</strong></p>
              <p><strong className="text-foreground">המוסך של צביקה (אור-צת שירותי רכב)</strong></p>
              <p>טלפון: <a href="tel:02-6514446" className="text-primary underline" dir="ltr">02-6514446</a></p>
              <p>אימייל: <a href={`mailto:${getContactEmail()}`} className="text-primary underline">{getContactEmail()}</a></p>
              <p>כתובת: רחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים</p>
              <p className="text-xs text-muted-foreground/70 mt-1">זמן מענה: עד 5 ימי עסקים</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">6. נגישות המוסך הפיזי</h2>
            <p>המוסך נגיש לאנשים עם מוגבלות פיזית, כולל כניסה נגישה וחניית נכים ייעודית.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
