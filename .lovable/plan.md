

## תוכנית: שיפור נראות דיגיטלית לעידן AI

### מה קיים (סיכום)
האתר כבר במצב טוב מאוד: robots.txt פתוח ל-AI bots, structured data עשיר (LocalBusiness, FAQPage, BlogPosting, BreadcrumbList), prerendered HTML, noscript fallback, inline SEO patcher, בלוג עם 16 מאמרים, OG/Twitter מלא.

### מה חסר — 7 שיפורים מומלצים

**1. הוספת `public/llms.txt`**
קובץ Markdown פשוט ב-root שמסכם את העסק, השירותים, המיקום, ושעות הפעילות. פרוטוקול מתפתח ש-LLMs מתחילים לקרוא.

**2. הוספת Schema `WebSite` עם `potentialAction: SearchAction`**
JSON-LD ב-`index.html` שמגדיר את האתר כישות WebSite עם חיפוש פנימי — מאפשר sitelinks search box בגוגל.

**3. פתיחת `ChatGPT-User` ב-robots.txt**
כרגע חסום (`Disallow: /`). שינוי ל-`Allow: /` יאפשר ל-ChatGPT לגשת לתוכן האתר כשמשתמשים שואלים שאלות עם Browse.

**4. הרחבת `sameAs` ב-LocalBusiness Schema**
הוספת קישור ל-Google Business Profile (אם קיים), Facebook, או כל פלטפורמה אחרת — מחזק אימות זהות העסק אצל AI bots.

**5. הוספת `Speakable` Schema**
JSON-LD מסוג Speakable על דף FAQ ומאמרי בלוג, שמצביע על CSS selectors של תשובות מתאימות להקראה קולית.

**6. הוספת Schema `Service` בדף `/services`**
JSON-LD נפרד עם פירוט מלא של כל שירות (שם, תיאור, areaServed, provider) — מעבר ל-OfferCatalog הקיים ב-LocalBusiness.

**7. הוספת `public/llms-full.txt`**
גרסה מורחבת של llms.txt עם כל תוכן מאמרי הבלוג ושאלות נפוצות — מאפשרת ל-LLMs למשוך תוכן עשיר בקריאה אחת.

### קבצים שישתנו
| קובץ | שינוי |
|---|---|
| `public/llms.txt` | חדש — סיכום העסק ב-Markdown |
| `public/llms-full.txt` | חדש — גרסה מורחבת עם כל התוכן |
| `public/robots.txt` | ChatGPT-User → Allow, הוספת llms.txt |
| `index.html` | הוספת WebSite Schema, הרחבת sameAs |
| `src/components/HomePage.tsx` | הרחבת sameAs ב-localBusinessSchema |
| `src/components/SeoHead.tsx` | הוספת Speakable Schema למאמרים ו-FAQ |
| `src/components/ServicesPage.tsx` | הוספת Service JSON-LD |
| `public/_headers` | cache rule ל-llms.txt |

### סדר עדיפות
1-3 הם הכי משפיעים ומהירים ליישום. 4-7 הם שיפורים נוספים שמחזקים את הנוכחות.

