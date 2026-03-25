

## הסרת סמל Lovable מהטאב והחלפתו בלוגו שלך

### מה קורה כרגע
אין תג `<link rel="icon">` ב-`index.html`, כך שהדפדפן משתמש בברירת המחדל של Lovable (הלב).

### מה צריך לעשות

1. **יצירת favicon מהלוגו שלך** — להשתמש בקובץ `logo-full-transparent.png` שכבר קיים ב-`public/` כדי ליצור favicon מותאם.

2. **עדכון `index.html`** — להוסיף תג favicon שמצביע על הלוגו:
   ```html
   <link rel="icon" type="image/png" href="/logo-full-transparent.png" />
   ```

### הערה
אם יש לך אייקון ייעודי קטן (למשל רק סמל ללא טקסט) שמתאים יותר לטאב — שלח אותו ואשתמש בו במקום. אחרת אשתמש בלוגו הקיים.

