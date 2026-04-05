

## עדכון Schema – קישורים, טלפון נוסף ותמונות

### קובץ לעריכה: `index.html`

**1. הרחבת `sameAs`**

הוספת קישור Google Maps למערך:
```json
"sameAs": [
  "https://wa.me/972526514446",
  "https://share.google/piCpY9zGL8WT6dowY"
]
```

**2. הוספת `contactPoint`**

בלוק חדש עם שני ערוצי תקשורת – קווי ווואטסאפ:
```json
"contactPoint": [
  {
    "@type": "ContactPoint",
    "telephone": "+972-2-6514446",
    "contactType": "customer service",
    "availableLanguage": ["Hebrew"]
  },
  {
    "@type": "ContactPoint",
    "telephone": "+972-52-6514446",
    "contactType": "customer service",
    "availableLanguage": ["Hebrew"],
    "description": "וואטסאפ"
  }
]
```

השדה `telephone` הראשי נשאר כקווי.

**3. הרחבת `image` למערך**

```json
"image": ["https://www.ortzat.co.il/og-home.jpg"]
```

מוכן להרחבה כשתעלה תמונות נוספות.

### סיכום
שינוי אחד בקובץ `index.html` בלבד – שלושה עדכונים בבלוק ה-JSON-LD הקיים.

