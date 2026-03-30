

## שינוי: הגדלת טקסט הלוגו האדום ב-BrandLockup

הרכיב `src/components/BrandLockup.tsx` משתמש בתמונת `logoText` (הטקסט האדום "אור-צת שירותי רכב"). צריך רק להגדיל את ה-height שלה מעט — בלי לגעת ב-logoMark או בשום דבר אחר.

### שינוי יחיד בקובץ `src/components/BrandLockup.tsx`

| מיקום | לפני | אחרי |
|---|---|---|
| Desktop logoText | `h-[50px]` | `h-[56px]` |
| Mobile logoText | `h-[52px]` | `h-[58px]` |

כל השאר (logoMark, gaps, max-width, overflow) נשאר כמו שהוא.

