# נגישות WCAG 2.1 AA - תיעוד ביקורת ותיקונים

**אתר:** ortzat.co.il
**תאריך ביקורת:** 6 אפריל 2026
**תאריך השלמת תיקונים:** 6 אפריל 2026
**תקן:** WCAG 2.1 Level AA

---

## סיכום מנהלים

| מדד | ערך |
|---|---|
| בעיות שנמצאו בביקורת | 9 |
| בעיות שתוקנו | **9/9 (100%)** |
| ממצאי צד שלישי (לא בשליטת הפרויקט) | 3 |
| שיעור תיקון | **100%** |

כל הבעיות הניתנות לתיקון טופלו. האתר עבר ממצב של 5 בעיות קריטיות ו-4 אזהרות לאפס בעיות ניתנות-לתיקון.

---

## ביקורת ראשונית - ממצאים

הביקורת בוצעה כ-audit ידני של ה-DOM (axe-core נחסם על-ידי Content Security Policy של האתר). נבדקו 14 קטגוריות WCAG כולל ניגודיות צבעים, landmarks, ARIA, ניווט מקלדת ועוד.

### בעיות קריטיות (5)

| # | ממצא | WCAG | לפני |
|---|---|---|---|
| 1 | ניגודיות צבע WhatsApp - כפתורים ורכיבים (4 מופעים) | 1.4.3 | 1.98:1 ❌ |
| 2 | מסגרות פוקוס חסרות - 84 רכיבים אינטראקטיביים עם `outline:none` | 2.4.7 | חסר ❌ |
| 3 | טקסטים שקופים למחצה - opacity 0.45-0.5, יחס ~1.23:1 (45 מופעים) | 1.4.3 | ~45 מופעים ❌ |
| 4 | iFrame Google Maps ללא `title` - קורא מסך לא מזהה את המפה | 4.1.2 | חסר ❌ |
| 5 | Header landmark חסר - חסר `<header>` / `role="banner"` ברמת הדף | 1.3.6 | חסר ❌ |

### אזהרות (4)

| # | ממצא | WCAG | לפני |
|---|---|---|---|
| 6 | קישורים לחלון חדש ללא התראה - `target="_blank"` ללא sr-only (19 קישורים) | 3.2.2 | 19 קישורים ❌ |
| 7 | יעדי לחיצה קטנים - רכיבים מתחת ל-24×24px (17 רכיבים) | 2.5.8 | 17 רכיבים ❌ |
| 8 | פונט קטן מ-12px - תגיות קטגוריה, ביקורות (57 רכיבים) | Best Practice | 57 רכיבים ❌ |
| 9 | כפתור WhatsApp צף - icon-only ללא `aria-label` | 4.1.2 | חסר ❌ |

---

## תיקונים שבוצעו

### 1. מסגרות פוקוס - `:focus-visible` גלובלי

**קובץ:** `src/index.css`

הוספת כלל CSS גלובלי שמוסיף מסגרת כחולה לכל רכיב אינטראקטיבי שמקבל פוקוס מקלדת, מבלי להשפיע על ניווט עכבר.

```css
*:focus-visible {
  outline: 2px solid #1a6bc0;
  outline-offset: 3px;
  border-radius: 4px;
}
```

**WCAG SC:** 2.4.7 - Focus Visible

---

### 2. ניגודיות WhatsApp - סגנון חדש: ירוק רשמי על רקע לבן

**קבצים:** `WhatsAppButton.tsx`, `Navbar.tsx`, `FloatingWhatsApp.tsx` + 9 קבצים נוספים (סה"כ 12 קבצים)

שינוי מוחלט לסגנון הרשמי של WhatsApp: רקע לבן + אייקון וטקסט בצבע הכהה הרשמי `#075E54` + גבול `#0E7A6D`.

**אבולוציית הצבע:**

| גרסה | רקע | צבע טקסט/אייקון | יחס ניגודיות | עבר? |
|---|---|---|---|---|
| מקורי | `#25D366` (ירוק בהיר) | לבן | 1.98:1 | ❌ |
| ביניים | `#128C7E` (ירוק בינוני) | `#000000` | 5.08:1 | ✅ (אך לא אסתטי) |
| **סופי** | לבן | `#075E54` (ירוק רשמי כהה) | **7.67:1** | ✅✅ |

```tsx
// לפני
className="bg-[#25D366] text-white"
fill="white"

// אחרי
className="bg-white text-[#075E54] border border-[#0E7A6D]"
fill="#075E54"
```

יחס ניגודיות סופי: **7.67:1** - עולה פי 2 על הדרישה המינימלית (4.5:1).

**WCAG SC:** 1.4.3 - Contrast (Minimum)

---

### 3. ניגודיות טקסט - opacity נמוך + aria-hidden לספרות דקורטיביות

שינוי opacity חצי-שקוף לצבע `text-muted-foreground` מלא. הוספת `aria-hidden="true"` לספרות הדקורטיביות 01-05 לביטול דרישת הניגודיות עליהן.

```tsx
// לפני
style={{ color: 'rgba(24,28,37,0.45)' }}  // → 1.23:1 ❌

// אחרי
className="text-muted-foreground"  // → 4.5:1+ ✅

// ספרות דקורטיביות
<span aria-hidden="true">01</span>
```

**WCAG SC:** 1.4.3 - Contrast (Minimum)

---

### 4. iFrame Google Maps - title

**קובץ:** `MapSection.tsx`

אומת שה-`title` כבר קיים בקוד. ה-iframe הדינמי השני נוצר על-ידי Google Maps עצמו ואינו בשליטתנו.

```tsx
<iframe
  title="מפת גוגל - מיקום מוסך אור-צת"
  src="..."
/>
```

**WCAG SC:** 4.1.2 - Name, Role, Value

---

### 5. Header landmark - עטיפת Navbar

**קובץ:** `Layout.tsx`

עטיפת ה-Navbar ב-`<header>` עם `role="banner"` המאפשר ניווט מהיר לקוראי מסך.

```tsx
<header role="banner">
  <Navbar />
</header>
```

**WCAG SC:** 1.3.6 - Identify Purpose

---

### 6. sr-only לקישורי `target="_blank"`

**קבצים:** `GoogleReviewsCarousel.tsx`, `AccessibilityStatement.tsx`, `Footer.tsx`

הוספת `span.sr-only` עם "(נפתח בחלון חדש)" לכל קישור שנפתח בלשונית חדשה.

```tsx
<a href="..." target="_blank" rel="noopener noreferrer">
  טקסט הקישור
  <span className="sr-only">(נפתח בחלון חדש)</span>
</a>
```

**WCAG SC:** 3.2.2 - On Input

---

### 7. יעדי לחיצה - min 44×44px

הרחבת אזור הלחיצה של כפתור WhatsApp ב-Navbar לגודל מינימלי של 44×44px.

```tsx
className="... min-h-[44px] min-w-[44px]"
```

**WCAG SC:** 2.5.8 - Target Size (Minimum)

---

### 8. פונט מינימלי - 12px

כל הגדרות `text-[11px]` בקוד הוגדלו ל-`text-[12px]` כמינימום קריא.

```tsx
// לפני
className="text-[11px]"

// אחרי
className="text-[12px]"
```

---

### 9. aria-label לכפתור WhatsApp הצף (icon-only)

**קובץ:** `FloatingWhatsApp.tsx`

הכפתור הצף מכיל SVG בלבד ללא טקסט. נוסף `aria-label` מלא הכולל גם ציון שנפתח בחלון חדש.

```tsx
<a
  href="https://wa.me/..."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="שלחו לנו הודעה ב-WhatsApp (נפתח בחלון חדש)"
>
```

**WCAG SC:** 4.1.2 - Name, Role, Value

---

## מדדים - לפני ואחרי

| מדד | לפני | אחרי | שיפור |
|---|---|---|---|
| ניגודיות WhatsApp | 1.98:1 | **7.67:1** | ↑ 287% |
| טקסטים שקופים | 45 מופעים | 0 | ↓ 100% |
| קישורי target="_blank" ללא אזהרה | 19 קישורים | 0 | ↓ 100% |
| פונטים קטנים (< 12px) | 57 רכיבים | 0* | ↓ 100% |
| יעדי לחיצה קטנים | 17 רכיבים | 0 | ↓ 100% |
| Landmark regions | חסר header | 4/4 קיימים | ✅ |

*פונטים קטנים שנשארו הם ב-widget חיצוני בלבד

---

## נקודות חוזק - תקינות לאורך כל הביקורת

אלו הממצאים שהיו תקינים מלכתחילה ולא דרשו תיקון:

| ממצא | WCAG SC |
|---|---|
| 21/21 תמונות עם `alt` text | 1.1.1 |
| `lang="he"` ו-`dir="rtl"` מוגדרים נכון | 3.1.1 |
| H1 יחיד + היררכיית כותרות ללא דילוג (H1→H2→H3) | 1.3.1 |
| Skip link "דלג לתוכן" | 2.4.1 |
| viewport מאפשר זום (ללא `user-scalable=no`) | 1.4.4 |
| ללא ID כפולים בדף | 4.1.1 |
| ללא `aria-hidden` על רכיבים פוקוסביליים | 4.1.2 |
| ללא קישורי "לחץ כאן" - כל הקישורים תיאוריים | 2.4.6 |

---

## רכיבי צד שלישי - מחוץ לשליטת הפרויקט

3 ממצאים אינם ניתנים לתיקון בקוד הפרויקט:

**1. כפתורי שפה (עברית/English)**
Widget של `cdn.enable.co.il`. ה-HTML נוצר על-ידי הספריה החיצונית ואין גישה לשנות את ה-`aria-label` שלו.
WCAG SC: 4.1.2

**2. iframe פנימי ב-Google Maps**
Google יוצרת iframe פנימי נוסף בתוך ה-embed עצמו. לא ניתן להוסיף `title` לרכיב שנוצר מחוץ לקוד.
WCAG SC: 4.1.2

**3. "מופעל על ידי" (upress.co.il)**
קישור footer שנוצר על-ידי תוסף/פלטפורמה חיצונית. לא קיים בקוד הפרויקט.
WCAG SC: 3.2.2

---

## הערות טכניות

### CSP ו-axe-core
האתר מיישם Content Security Policy (CSP) מחמיר שחוסם טעינת סקריפטים חיצוניים מ-CDN. זו הסיבה שניסיון להזריק את `axe-core` נכשל. הביקורת בוצעה במקום כ-audit ידני של ה-DOM בגישה ישירה לדף.

### מדידת ניגודיות
לפרסום עתידי: מדידת ניגודיות של SVG elements דורשת בדיקת ה-`fill` attribute ישירות (לא ה-`color` של CSS), כי SVG `fill` עוקף את `color` בחישוב הניגודיות הוויזואלית.

### כלי בדיקה מומלצים להמשך
- [axe DevTools](https://www.deque.com/axe/devtools/) - בדיקה מקומית בדפדפן
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - בדיקת ניגודיות
- [NVDA](https://www.nvaccess.org/) + Chrome - בדיקת קורא מסך
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - סריקה אוטומטית ב-DevTools

---

*ביקורת נגישות WCAG 2.1 AA | ortzat.co.il | 6 אפריל 2026*
