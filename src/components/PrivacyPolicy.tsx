import { getContactEmail } from "@/lib/obfuscate-email";

export default function PrivacyPolicy() {
  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-black text-primary mb-3">מדיניות פרטיות</h1>
        <p className="text-muted-foreground text-sm mb-10">
          עדכון אחרון: מרץ 2026
        </p>

        <div className="bg-background rounded-xl p-8 shadow-[var(--shadow-sm)] border border-border/40 text-sm leading-8 text-muted-foreground flex flex-col gap-8">
          {/* Introduction */}
          <p className="text-[15px] leading-8">
            המוסך של צביקה – אור-צת שירותי רכב ("העסק", "אנחנו") מכבד את פרטיות לקוחותיו ומחויב להגנה על המידע האישי שלהם. מדיניות פרטיות זו מפרטת כיצד אנו אוספים, משתמשים, מאחסנים ומגנים על מידע אישי, בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, לרבות תיקון מס' 13 לחוק, ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
          </p>

          {/* 1. Types of information collected */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">1. סוגי המידע שאנו אוספים</h2>
            <p className="mb-3">
              במסגרת פעילותנו, אנו עשויים לאסוף את סוגי המידע הבאים, שנמסרים לנו על ידי הלקוח מרצונו החופשי:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4">
              <li>שם מלא</li>
              <li>מספר טלפון</li>
              <li>כתובת דוא"ל</li>
              <li>פרטי רכב (סוג, דגם, מספר רישוי, שנת ייצור)</li>
              <li>מידע שנמסר באמצעות טופס יצירת קשר באתר</li>
              <li>היסטוריית טיפולים ותיקונים שבוצעו במוסך</li>
            </ul>
          </section>

          {/* 2. Purpose of data collection */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">2. מטרות איסוף המידע</h2>
            <p className="mb-3">המידע שנאסף משמש אותנו למטרות הבאות בלבד:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4">
              <li>מתן שירותי תיקון ואחזקת רכב</li>
              <li>יצירת קשר עם הלקוח לתיאום תורים ומתן עדכונים</li>
              <li>שיפור איכות השירות והתאמתו לצרכי הלקוח</li>
              <li>עמידה בדרישות חוקיות ורגולטוריות</li>
              <li>ניהול תקין ושוטף של פעילות העסק</li>
            </ul>
          </section>

          {/* 3. Data storage and security */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">3. אחסון מידע ואבטחתו</h2>
            <p>
              אנו נוקטים אמצעי אבטחה סבירים ומקובלים כדי להגן על המידע האישי שלך מפני גישה בלתי מורשית, שימוש לרעה, שינוי, חשיפה או השמדה. אמצעים אלו כוללים, בין היתר, הגבלת גישה למידע לעובדים מורשים בלבד, שימוש באמצעי אבטחה טכנולוגיים, ושמירה על נהלי אבטחת מידע בהתאם לתקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
            </p>
            <p className="mt-3">
              המידע האישי נשמר רק למשך הזמן הדרוש למימוש המטרות שלשמן נאסף, או כנדרש על פי דין.
            </p>
          </section>

          {/* 4. Sharing information */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">4. העברת מידע לצדדים שלישיים</h2>
            <p>
              אנו לא מוכרים, משכירים או מעבירים את המידע האישי שלך לצדדים שלישיים לכל מטרה שהיא, למעט במקרים הבאים:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4 mt-3">
              <li>כאשר הדבר נדרש על פי חוק, צו בית משפט או דרישה של רשות מוסמכת</li>
              <li>לצורך הגנה על זכויות העסק, בטיחות לקוחותיו או הציבור</li>
              <li>לספקי שירות הפועלים מטעמנו ובכפוף להתחייבויות סודיות (כגון ספקי חלפים הדורשים פרטי רכב)</li>
            </ul>
          </section>

          {/* 5. User rights — Amendment 13 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">5. זכויות נושא המידע (תיקון 13 לחוק הגנת הפרטיות)</h2>
            <p className="mb-3">
              בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, ובפרט תיקון מס' 13, עומדות לך הזכויות הבאות:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pr-4">
              <li>
                <strong className="text-foreground">זכות עיון</strong> — הזכות לעיין במידע האישי המוחזק אצלנו אודותיך
              </li>
              <li>
                <strong className="text-foreground">זכות תיקון</strong> — הזכות לבקש תיקון מידע שגוי, לא מדויק או לא מעודכן
              </li>
              <li>
                <strong className="text-foreground">זכות מחיקה</strong> — הזכות לבקש מחיקת המידע האישי שלך ממאגרי המידע שלנו, בכפוף לדרישות חוקיות
              </li>
              <li>
                <strong className="text-foreground">זכות חזרה מהסכמה</strong> — הזכות לחזור בך מהסכמה שנתת לעיבוד המידע, בכל עת
              </li>
            </ul>
            <p className="mt-3">
              לצורך מימוש זכויותיך, ניתן לפנות אלינו באמצעות פרטי הקשר המפורטים בסעיף 7 להלן. נשתדל לטפל בפנייתך בהקדם האפשרי ולא יאוחר מ-30 ימים מיום קבלתה.
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">6. עוגיות (Cookies)</h2>
            <p>
              אתר זה אינו משתמש בעוגיות (Cookies) לאיסוף מידע אישי או למעקב אחר משתמשים.
            </p>
          </section>

          {/* 7. Contact */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">7. יצירת קשר בנושאי פרטיות</h2>
            <p className="mb-3">
              לכל שאלה, בקשה או תלונה הנוגעת למדיניות פרטיות זו או לטיפול במידע האישי שלך, ניתן לפנות אלינו:
            </p>
            <div className="bg-gray-bg rounded-lg p-5 flex flex-col gap-2">
              <p><strong className="text-foreground">המוסך של צביקה – אור-צת שירותי רכב</strong></p>
              <p>כתובת: רחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים</p>
              <p>טלפון: <a href="tel:02-6514446" className="text-primary underline" dir="ltr">02-6514446</a></p>
              <p>אימייל: <a href={`mailto:${getContactEmail()}`} className="text-primary underline">{getContactEmail()}</a></p>
            </div>
          </section>

          {/* 8. Updates */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">8. עדכון מדיניות הפרטיות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת, על מנת לשקף שינויים בפעילות העסק או בדרישות החוק. שינויים מהותיים יפורסמו בעמוד זה. אנו ממליצים לעיין במדיניות זו מדי פעם כדי להתעדכן בשינויים.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
