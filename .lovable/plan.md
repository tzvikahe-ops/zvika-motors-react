

## תיקון הבהוב בניווט בין דפים

### הבעיה
כשעוברים מדף צור קשר/גלריה לדף הבית, לרגע קצר רואים את טקסט ההירו ("שירות אישי, שקיפות מלאה...") באמצע המסך לפני שהדף קופץ למעלה. זה קורה כי ה-`scrollTo` הנוכחי רץ לפני שריאקט מעדכן את ה-DOM, ולכן יש פריים אחד שבו התוכן החדש מוצג במיקום הגלילה הישן.

### הפתרון
שינוי ב-`src/pages/Index.tsx` בלבד:
- הוספת `useLayoutEffect` שמבצע את הגלילה **אחרי** עדכון ה-DOM אבל **לפני** שהדפדפן מצייר את המסך
- הסרת ה-`scrollTo` מתוך פונקציית `setPage`

### פירוט טכני
```tsx
// src/pages/Index.tsx
import { useState, useLayoutEffect } from "react";

const setPage = (page: Page) => {
  setCurrentPage(page);
  // הסרת scrollTo מכאן
};

useLayoutEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, [currentPage]);
```

`useLayoutEffect` רץ סינכרונית אחרי שריאקט מעדכן את ה-DOM ולפני שהדפדפן מצייר - כך הגלילה מתרחשת לפני שהמשתמש רואה משהו, מה שמונע את ההבזק לחלוטין.

