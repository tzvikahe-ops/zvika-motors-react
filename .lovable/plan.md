

## תוכנית לתיקון בעיות Schema בתוצאות העשירות של Google

### הבעיה
האתר מכיל **שני בלוקי LocalBusiness Schema זהים** – אחד ב-`index.html` (סטטי, לסורקים) ואחד ב-`HomePage.tsx` (דינמי, React). Google רואה כפילות של `AggregateRating` ופוסל את התוצאה העשירה.

### מה צריך לתקן

**שלב 1 – הסרת הסכמה הכפולה מ-HomePage.tsx**

הבלוק ב-`index.html` מלא ומפורט יותר (כולל `bestRating`, `logo`, `legalName`, `hasOfferCatalog`). לכן נשאיר אותו ונסיר את בלוק `localBusinessSchema` מ-`HomePage.tsx` כולל תג ה-`<script>` שמזריק אותו.

> הבלוק של `homeFaqSchema` ב-`HomePage.tsx` יישאר – הוא לא כפול.

**שלב 2 – תיקון הבלוק שנשאר ב-index.html**

- `priceRange`: שינוי מ-`"$$"` ל-`"₪₪"` (סימון מקומי מתאים יותר).
- `addressCountry`: שינוי מ-`"IL"` למבנה מלא:
  ```json
  "addressCountry": { "@type": "Country", "name": "IL" }
  ```
  (או שנשאיר `"IL"` כמחרוזת פשוטה – שניהם תקפים ב-Schema.org, אבל Google ממליץ שיהיה `name`).
- `bestRating`: כבר קיים בבלוק של `index.html` – תקין.

**שלב 3 – סנכרון prerender.mjs**

בדיקה האם `scripts/prerender.mjs` מזריק בלוק LocalBusiness נוסף. אם כן – הסרה גם משם.

### קבצים שיערכו
| קובץ | שינוי |
|---|---|
| `src/components/HomePage.tsx` | הסרת `localBusinessSchema` ותג ה-script שלו |
| `index.html` | תיקון `priceRange` ו-`addressCountry` |
| `scripts/prerender.mjs` | בדיקה והסרה אם יש כפילות |

### תוצאה צפויה
- בלוק `LocalBusiness` + `AggregateRating` אחד בלבד באתר
- כל השדות הנדרשים קיימים (`bestRating`, `priceRange`, `addressCountry.name`)
- Google יוכל להציג Review Snippet בתוצאות החיפוש

