

## תוכנית ביצוע — ליקויים שבאמת צריכים טיפול

### מצב קיים — רוב הליקויים כבר מטופלים

אחרי בדיקת הקוד, רוב הפריטים ברשימה **כבר מיושמים**:

- **Banner חג פסח** — קיים וידפיק עד 9.4
- **Schema LocalBusiness + AutoRepair** — קיים ב-index.html עם address, geo, openingHours, founder, services
- **Schema AggregateRating** — קיים (4.8, 108 ביקורות)
- **www → non-www redirect** — מוגדר ברמת DNS/דומיין (Lovable לא משתמש ב-Netlify _redirects)
- **slugs בלוג** — רובם בעברית, רק הראשון (musach-mumla-yerushalayim) בלטינית בכוונה

### מה נשאר לתקן (2 פריטים בלבד)

#### 1. Schema Person לצביקה (index.html)
כרגע יש רק `founder` ליהושע. צריך להוסיף סכימת `Person` נפרדת לצביקה:
- `name`: "צביקה הרשקוביץ"
- `jobTitle`: "מנהל המוסך"
- `worksFor`: הפניה ל-LocalBusiness הקיים
- `sameAs`: קישור לוואטסאפ

הסכימה תתווסף כבלוק JSON-LD נפרד ב-index.html, ו/או כחלק מ-`employee` בתוך הסכימה הקיימת.

#### 2. H1 בעמוד אודות (AboutPage.tsx)
שינוי שורה אחת מ:
```
מוסך משפחתי בירושלים מאז 1993
```
ל:
```
המוסך של צביקה – מוסך משפחתי בירושלים מאז 1993
```

### קבצים מושפעים
| קובץ | שינוי |
|-------|--------|
| `index.html` | הוספת Person schema לצביקה |
| `src/components/AboutPage.tsx` | עדכון טקסט H1 |

### הערה לגבי redirect
האתר מפורסם ב-Lovable (לא Netlify), כך שקובץ `_redirects` לא פועל. ה-redirect מ-www מנוהל ברמת DNS/דומיין דרך Wix. אם ה-redirect לא עובד כרגע, זה דורש שינוי ברשומות DNS, לא בקוד.

