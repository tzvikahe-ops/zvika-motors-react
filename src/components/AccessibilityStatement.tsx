export default function AccessibilityStatement() {
  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-primary mb-8">הצהרת נגישות</h1>
        <div className="bg-background rounded-xl p-10 shadow-sm text-sm leading-7 text-muted-foreground flex flex-col gap-6">
          <p>
            המוסך של צביקה (אור-צת שירותי רכב) מחויב להנגשת האתר לאנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
          </p>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">1. פעולות שבוצעו להנגשת האתר</h2>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li>שימוש בניגודיות צבעים מתאימה</li>
              <li>תמיכה בכיוון קריאה מימין לשמאל (RTL)</li>
              <li>שימוש בגופנים קריאים ובגודל טקסט מתאים</li>
              <li>תיאור חלופי (alt) לתמונות</li>
              <li>מבנה סמנטי של דפי האתר</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">2. רמת הנגישות</h2>
            <p>אנו שואפים לעמוד ברמת הנגישות AA של תקן WCAG 2.1. ייתכן כי חלקים מסוימים באתר אינם נגישים באופן מלא ואנו עובדים על שיפור מתמיד.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">3. פנייה בנושא נגישות</h2>
            <p>
              אם נתקלת בבעיית נגישות באתר, נשמח לשמוע ממך ולטפל בכך בהקדם:
            </p>
            <ul className="list-none flex flex-col gap-1 mt-2">
              <li><strong className="text-primary">טלפון:</strong> 02-652-1234</li>
              <li><strong className="text-primary">כתובת:</strong> רחוב האופה 4, גבעת שאול, ירושלים</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">4. נגישות המוסך הפיזי</h2>
            <p>המוסך נגיש לאנשים עם מוגבלות פיזית, כולל כניסה נגישה וחניית נכים ייעודית.</p>
          </div>

          <p className="text-xs text-muted-foreground mt-4">עדכון אחרון: מרץ 2026</p>
        </div>
      </div>
    </div>
  );
}
