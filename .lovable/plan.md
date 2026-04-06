

## תיקון 4 נקודות נגישות שנותרו

### נקודה 1: ניגודיות WhatsApp — טקסט לבן על #128C7E
**בעיה:** יחס 4.12:1, צריך 4.5:1.
**פתרון:** בכל כפתורי WhatsApp באתר, הצבע כבר `text-white`. לפי ההצעה שלך, נחליף ל-`text-black` (שחור מלא) → יחס 5.56:1. זה ישפיע על ~12 קבצים שמכילים `bg-[#128C7E]`.

**קבצים:** HeroSection, CTASection, ProcessSection, Navbar, Footer, BlogPage, ContactPage, FAQPage, GalleryPage, AboutPage, Index.tsx (floating button), GoogleReviewsCarousel (אם רלוונטי).

---

### נקודה 2: כפתורי שפה (widget חיצוני)
**לא בשליטתנו** — אלה מגיעים מ-cdn.enable.co.il. אין מה לתקן בקוד שלנו.

---

### נקודה 3: iframe ללא title
**בעיה:** ה-iframe של Google Maps ב-MapSection.tsx **כבר מכיל title**. ה-iframe ה"חסר" כנראה מגיע מתוך ה-Google Maps embed עצמו (iframe פנימי שנוצר דינמית) — לא בשליטתנו. אם רוצים, אפשר להוסיף title גם ל-sandbox attribute.

---

### נקודה 4: 2 קישורים חסרי sr-only
**קישורים שזוהו:**
1. `GoogleReviewsCarousel.tsx` שורה 233 — "כתוב ביקורת" (target=_blank, ללא sr-only)
2. `AccessibilityStatement.tsx` שורה 79 — קישור וואטסאפ של רכז הנגישות (target=_blank, ללא sr-only)

**פתרון:** הוספת `<span className="sr-only">(נפתח בחלון חדש)</span>` בכל אחד מהם.

---

### סיכום שינויים
| # | פעולה | קבצים |
|---|-------|-------|
| 1 | `text-white` → `text-black` בכפתורי WhatsApp | ~12 קבצים |
| 2 | Widget חיצוני — דילוג | — |
| 3 | iframe כבר עם title — דילוג | — |
| 4 | הוספת sr-only ל-2 קישורים | GoogleReviewsCarousel.tsx, AccessibilityStatement.tsx |

