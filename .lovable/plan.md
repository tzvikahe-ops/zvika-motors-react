

## תוכנית תיקון נגישות - לפי דוח WCAG 2.1

הדוח זיהה 5 בעיות קריטיות ו-4 אזהרות. להלן תוכנית היישום:

---

### שלב 1: מסגרות פוקוס (focus-visible) - P1
**הבעיה:** 84 רכיבים אינטראקטיביים ללא מסגרת פוקוס נראית (WCAG 2.4.7)

**הפתרון:** הוספת כלל `:focus-visible` גלובלי ב-`src/index.css` שיחול על כל הקישורים, כפתורים ושדות קלט. מסגרת כחולה עם offset.

---

### שלב 2: ניגודיות כפתור WhatsApp - P1
**הבעיה:** רקע `#25D366` עם טקסט לבן = יחס 1.98:1 (דרוש 4.5:1)

**הפתרון:** שינוי רקע כפתורי WhatsApp ל-`#128C7E` (ירוק כהה יותר, יחס ~4.9:1) בכל הקבצים:
- `HeroSection.tsx`, `CTASection.tsx`, `ProcessSection.tsx`
- `Navbar.tsx`, `Footer.tsx`, `BlogPage.tsx`
- `AboutPage.tsx`, `Index.tsx` (floating button)

---

### שלב 3: ניגודיות טקסטים שקופים - P1
**הבעיה:** טקסטים עם opacity נמוך (0.45-0.5) = יחס ~1.23:1

**הפתרון:**
- `WhyUsSection.tsx`: שינוי `text-foreground/50` ו-`text-foreground/45` ל-`text-muted-foreground` (יחס 4.5+)
- ספרות דקורטיביות (`text-brand-red/60`) - הוספת `aria-hidden="true"` כי הן דקורטיביות
- תגית "למה אנחנו" ב-11px: הגדלה ל-12px + הכהת הצבע

---

### שלב 4: title ל-iFrames - P1
**הבעיה:** iFrame של Google Maps ללא title

**הפתרון:** ה-iframe ב-`MapSection.tsx` כבר מכיל `title`. יש לוודא שגם iframes בקומפוננטות אחרות (אם קיימים) מכילים title.

---

### שלב 5: `<header>` landmark - P2
**הבעיה:** חסר `<header role="banner">` ברמת הדף

**הפתרון:** עטיפת ה-Navbar ב-`<header role="banner">` בתוך `Index.tsx`.

---

### שלב 6: התראה לקישורי target="_blank" - P2
**הבעיה:** 19 קישורים נפתחים בחלון חדש ללא הודעה

**הפתרון:** הוספת `<span className="sr-only">(נפתח בחלון חדש)</span>` לכל קישור עם `target="_blank"` ברכיבים הרלוונטיים.

---

### שלב 7: הגדלת יעדי לחיצה - P2
**הבעיה:** 17 רכיבים קטנים מ-24x24px

**הפתרון:** הוספת `min-h-[44px] min-w-[44px]` לקישורים קטנים (בעיקר תגיות קטגוריה, קישורי footer).

---

### שלב 8: הגדלת פונט קטן - P3
**הבעיה:** 57 רכיבים עם font-size מתחת ל-12px

**הפתרון:** שינוי כל `text-[11px]` ל-`text-[12px]` לפחות ברכיבי טקסט (לא דקורטיביים).

---

### קבצים מושפעים
- `src/index.css` - כלל focus-visible גלובלי
- `src/pages/Index.tsx` - header landmark
- `src/components/home/HeroSection.tsx` - WhatsApp color
- `src/components/home/CTASection.tsx` - WhatsApp color
- `src/components/home/ProcessSection.tsx` - WhatsApp color
- `src/components/home/WhyUsSection.tsx` - contrast fixes, font sizes
- `src/components/Navbar.tsx` - WhatsApp color, sr-only hints
- `src/components/Footer.tsx` - WhatsApp color, sr-only hints
- `src/components/MapSection.tsx` - sr-only hints
- `src/components/BlogPage.tsx` - WhatsApp color
- `src/components/AboutPage.tsx` - WhatsApp color, sr-only hints
- `src/components/GoogleReviewsCarousel.tsx` - sr-only hints
- רכיבים נוספים עם target="_blank"

