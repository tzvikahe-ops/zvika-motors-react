

## תיקון 3 פריטי נגישות אחרונים

### נקודה 1: ניגודיות WhatsApp — SVG fill נחסם על ידי theme
**בעיה:** `fill="black"` ב-SVG מתורגם ל-`rgb(24,28,37)` בגלל ה-theme. יחס 4.12:1 במקום 4.5:1.

**פתרון:** שינוי `fill="black"` ל-`fill="#000000"` ב-3 מקומות:
- `src/components/Icons.tsx` שורה 97 — `WhatsAppIcon` (כפתור צף)
- `src/components/Navbar.tsx` שורה 110 — אייקון WhatsApp ב-navbar desktop
- בדיקת כל שאר ה-SVGs עם `fill="black"` בפרויקט

### נקודה 2: כפתור WhatsApp צף — שיפור aria-label
**בעיה:** ה-aria-label הקיים ("שלח הודעה בוואטסאפ") לא מציין שנפתח בחלון חדש.

**פתרון:** ב-`src/pages/Index.tsx` שורה 125, שינוי ל:
```
aria-label="שלחו לנו הודעה ב-WhatsApp (נפתח בחלון חדש)"
```

### נקודה 3: "מופעל על ידי" (upress.co.il)
**ממצא:** הקישור הזה **לא קיים בקוד** — לא נמצא שום אזכור ל-`upress` בפרויקט. כנראה מגיע מ-widget חיצוני או מתוסף שאינו בשליטתנו.

---

### קבצים מושפעים
- `src/components/Icons.tsx` — `fill="#000000"`
- `src/components/Navbar.tsx` — `fill="#000000"` ב-SVG
- `src/pages/Index.tsx` — עדכון aria-label לכפתור צף

