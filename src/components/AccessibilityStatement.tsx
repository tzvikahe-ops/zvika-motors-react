import { getContactEmail } from "@/lib/obfuscate-email";

export default function AccessibilityStatement() {
  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-black text-primary mb-3">הצהרת נגישות</h1>
        <p className="text-muted-foreground text-sm mb-10"><p className="text-muted-foreground text-sm mb-10">עדכון אחרון: 6 באפריל 2026</p></p>

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
              <li>שימוש בניגודיות צבעים מתאימה (יחס 4.5:1 לפחות לכל טקסט, כולל כפתורי WhatsApp)</li>
              <li>תמיכה בכיוון קריאה מימין לשמאל (RTL)</li>
              <li>שימוש בגופנים קריאים ובגודל טקסט מינימלי של 12px</li>
              <li>תיאור חלופי (alt) לתמונות</li>
              <li>מבנה סמנטי של דפי האתר עם תגיות ARIA</li>
              <li>תמיכה בניווט באמצעות מקלדת עם מסגרות פוקוס נראות (focus-visible) לכל רכיב אינטראקטיבי</li>
              <li>הגדרת Landmark Roles לאזורי העמוד (header, ניווט, תוכן ראשי, פוטר)</li>
              <li>תוויות aria-label לכל האלמנטים האינטראקטיביים</li>
              <li>התראת קורא מסך (sr-only) בכל קישור הנפתח בחלון חדש</li>
              <li>יעדי לחיצה מינימליים של 44×44 פיקסלים לפי WCAG 2.5.5</li>
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
            <h2 className="text-lg font-bold text-primary mb-2">5. סקירת נגישות</h2>
            <p>סקירת הנגישות האחרונה של האתר בוצעה <p>סקירת הנגישות האחרונה של האתר בוצעה ב-6 באפריל 2026, על בסיס דוח WCAG 2.1 AA מקיף. כל הממצאים שזוהו בדוח טופלו, לרבות:</p>, על בסיס דוח WCAG 2.1 AA מקיף. כל הממצאים שזוהו בדוח טופלו, לרבות:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4 mt-2">
              <li>תיקון ניגודיות כפתורי WhatsApp ליחס של 4.5:1 לפחות</li>
              <li>הוספת מסגרות פוקוס נראות לכל 84 הרכיבים האינטראקטיביים</li>
              <li>הגדלת גודל פונט מינימלי ל-12px בכל רחבי האתר</li>
              <li>הוספת התראות sr-only ל-19 קישורים הנפתחים בחלון חדש</li>
              <li>הוספת תגית header (banner landmark) ברמת הדף</li>
              <li>הגדלת יעדי לחיצה לרכיבים קטנים מ-24px</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">6. רכז נגישות</h2>
            <p className="mb-3">
              לפניות בנושא נגישות ניתן לפנות לרכז הנגישות של העסק:
            </p>
            <div className="bg-gray-bg rounded-lg p-5 flex flex-col gap-2">
              <p><strong className="text-foreground">צביקה - רכז נגישות</strong></p>
              <p><strong className="text-foreground">המוסך של צביקה (אור-צת שירותי רכב)</strong></p>
              <p>טלפון: <a href="tel:02-6514446" className="text-primary underline" dir="ltr">02-6514446</a></p>
              <p>וואטסאפ: <a href="https://wa.me/972526814446" className="text-primary underline" target="_blank" rel="noopener noreferrer">052-681-4446</a></p>
              <p>אימייל: <a href={`mailto:${getContactEmail()}`} className="text-primary underline">{getContactEmail()}</a></p>
              <p>כתובת: רחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים</p>
              <p className="text-xs text-muted-foreground/70 mt-1">זמן מענה: עד 5 ימי עסקים</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">7. נגישות המוסך הפיזי</h2>
            <p>המוסך נגיש לאנשים עם מוגבלות פיזית, כולל כניסה נגישה וחניית נכים ייעודית.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">8. פנייה לנציבות שוויון זכויות</h2>
            <p>
              אם נתקלתם בבעיית נגישות שלא נפתרה, ניתן לפנות לנציבות שוויון זכויות לאנשים עם מוגבלות:{" "}
              <a href="https://www.gov.il/he/departments/topics/equal_rights_commission" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                אתר הנציבות
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
