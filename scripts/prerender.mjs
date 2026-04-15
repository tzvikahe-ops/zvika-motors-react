/**
 * Post-build pre-render script.
 * Runs after `vite build` and creates a static index.html for each route.
 * Each file gets the correct <title>, <meta description>, <link rel="canonical">
 * and Open Graph tags - so crawlers see unique HTML without needing a JS runtime.
 *
 * Usage (auto-called from `npm run build`):
 *   node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const BASE_URL = "https://www.ortzat.co.il";

/** Mirrors the seoConfig in src/components/SeoHead.tsx */
const routes = [
  {
    path: "/",
    title: "המוסך של צביקה (אור-צת) | מוסך מקצועי בירושלים",
    description:
      "מוסך מקצועי בגבעת שאול, ירושלים. דיאגנוסטיקה ממוחשבת, מיזוג אוויר, הכנה לטסט וטיפולים שוטפים לכל סוגי הרכבים. 30+ שנות ניסיון, שקיפות מלאה. ☎ 02-6514446.",
  },
  {
    path: "/services",
    title: "שירותי מוסך בירושלים | רשימת השירותים המלאה - המוסך של צביקה",
    description:
      "כל שירותי המוסך של צביקה בגבעת שאול, ירושלים: טיפולים שוטפים, דיאגנוסטיקה ממוחשבת, מיזוג אוויר, הכנה לטסט, בדיקת רכב לפני קנייה, טיפול בבעיות חשמל ומנוע. 02-6514446.",
  },
  {
    path: "/about",
    title: "אודות המוסך של צביקה (אור-צת) | מוסך בירושלים מאז 1993",
    description:
      "המוסך של צביקה (אור-צת) בגבעת שאול, ירושלים. מוסך משפחתי מאז 1993 עם 98% לקוחות חוזרים, דירוג 4.8 בגוגל ומעל 30 שנות ניסיון. שקיפות מחירים ויחס אישי.",
  },
  {
    path: "/gallery",
    title: "הצצה למוסך | המוסך של צביקה בגבעת שאול, ירושלים",
    description:
      "כרגע מוצגת בעמוד תמונה אמיתית אחת של חזית המוסך של צביקה ברחוב האופה 4, גבעת שאול. תמונות נוספות מתוך המוסך והעבודה השוטפת יתווספו בהמשך.",
  },
  {
    path: "/contact",
    title: "צור קשר | טלפון, וואטסאפ והגעה למוסך של צביקה בירושלים",
    description:
      "צרו קשר עם המוסך של צביקה בגבעת שאול, ירושלים. טלפון: 02-6514446, וואטסאפ: 052-651-4446, כתובת: רחוב האופה 4. ניווט ב-Waze, שעות פעילות ואפשרות להשאיר פרטים.",
  },
  {
    path: "/faq",
    title: "שאלות נפוצות | המוסך של צביקה - ירושלים",
    description:
      "תשובות לשאלות נפוצות על שירותי המוסך של צביקה בירושלים: עלויות טיפול, הכנה לטסט, זמני המתנה, ציוד, חלקים ואחריות לאחר תיקון. מוסך מקצועי מאז 1993.",
  },
  {
    path: "/blog",
    title: "טיפים, תקלות ותחזוקת רכב | בלוג המוסך של צביקה - ירושלים",
    description:
      "מאמרים ומדריכים מקצועיים על תחזוקת רכב, זיהוי תקלות, הכנה לטסט, החלפת שמן, מיזוג אוויר ורעשים חריגים. טיפים שימושיים ממוסך בגבעת שאול, ירושלים.",
  },
  {
    path: "/privacy",
    title: "מדיניות פרטיות | המוסך של צביקה (אור-צת)",
    description:
      "מדיניות הפרטיות של המוסך של צביקה (אור-צת). מידע על איסוף, שימוש והגנה על מידע אישי בהתאם לחוק הגנת הפרטיות.",
    robots: "noindex, follow",
  },
  {
    path: "/accessibility",
    title: "הצהרת נגישות | המוסך של צביקה (אור-צת)",
    description:
      "הצהרת הנגישות של אתר המוסך של צביקה. מחויבות להנגשת האתר לאנשים עם מוגבלויות בהתאם לתקנות הנגישות.",
    robots: "noindex, follow",
  },
  // Blog articles — synced with src/data/blog-articles.ts
  { path: "/blog/musach-mumla-yerushalayim", title: "מוסך מומלץ בירושלים: המדריך לבחירה נכונה ב-2025 | בלוג המוסך של צביקה", description: "מחפשים מוסך מומלץ בירושלים? מדריך מקיף עם טיפים מעשיים לבחירת מוסך מקצועי, שקוף והוגן באזור ירושלים וגבעת שאול.", date: "2026-04-06" },
  { path: "/blog/סימנים-שהרכב-צריך-טיפול", title: "סימנים שהרכב צריך טיפול מיידי | בלוג המוסך של צביקה", description: "אל תתעלמו מסימני אזהרה ברכב. מדריך לזיהוי 8 סימנים שמעידים שהרכב שלכם צריך טיפול דחוף במוסך.", date: "2026-03-15" },
  { path: "/blog/כמה-עולה-טיפול-לרכב", title: "כמה עולה טיפול לרכב ומה משפיע על המחיר | בלוג המוסך של צביקה", description: "תוהים כמה עולה טיפול לרכב? מדריך מפורט על עלויות טיפולים שוטפים, מה משפיע על המחיר, ואיך לחסוך בטיפולי רכב.", date: "2026-03-10" },
  { path: "/blog/מתי-לבדוק-מזגן-ברכב", title: "מתי צריך לבדוק מזגן ברכב ואיך לשמור עליו | בלוג המוסך של צביקה", description: "המזגן ברכב לא מקרר? מדריך מקיף על תחזוקת מזגן רכב, סימני אזהרה, ומתי להגיע למוסך לבדיקה.", date: "2026-03-05" },
  { path: "/blog/איך-לעבור-טסט-בקלות", title: "איך להתכונן לטסט לרכב ולעבור בקלות | בלוג המוסך של צביקה", description: "מתכוננים לטסט השנתי? מדריך מלא עם רשימת בדיקות, טיפים לעבור בפעם הראשונה, ומה עושים אם הרכב נכשל.", date: "2026-03-01" },
  { path: "/blog/רעשים-חריגים-ברכב-מה-הם-אומרים", title: "רעשים חריגים ברכב: מה הם אומרים ומתי לדאוג | בלוג המוסך של צביקה", description: "שומעים רעש מוזר מהרכב? מדריך מקיף לזיהוי רעשים חריגים ברכב, מה הסיבות האפשריות, ומתי חייבים להגיע למוסך בירושלים.", date: "2025-03-28" },
  { path: "/blog/נורת-צק-אנגין-מה-לעשות", title: "נורת צ׳ק אנג׳ין נדלקה? מה זה אומר ומה לעשות | בלוג המוסך של צביקה", description: "נורת הצ'ק אנג'ין נדלקה ברכב? מדריך מעשי עם הסיבות הנפוצות, מתי זה דחוף ומתי פחות, ומה לעשות צעד אחר צעד.", date: "2025-03-14" },
  { path: "/blog/החלפת-שמן-מנוע-למה-חשוב-ומתי", title: "החלפת שמן מנוע: למה זה קריטי ומתי צריך להחליף | בלוג המוסך של צביקה", description: "מתי צריך להחליף שמן מנוע? מדריך מעשי על סוגי שמנים, תדירות החלפה, מה קורה אם מזניחים, וכמה זה עולה במוסך בירושלים.", date: "2025-02-28" },
  { path: "/blog/רכב-מתחמם-סיבות-ופתרונות", title: "הרכב מתחמם? סיבות נפוצות ומה לעשות מיד | בלוג המוסך של צביקה", description: "מחוג הטמפרטורה עולה? מדריך מעשי על התחממות יתר של מנוע רכב - למה זה קורה, מה לעשות ברגע שזה קורה, ואיך למנוע את זה.", date: "2025-02-14" },
  { path: "/blog/למה-הרכב-צורך-יותר-דלק", title: "למה הרכב צורך יותר דלק ואיך לתקן את זה | בלוג המוסך של צביקה", description: "הרכב שותה יותר דלק מהרגיל? מדריך מעשי על 8 סיבות נפוצות לצריכת דלק גבוהה ברכב, ואיך לחסוך כסף בתדלוק.", date: "2025-01-31" },
  { path: "/blog/מתי-להחליף-מצבר-לרכב", title: "מתי להחליף מצבר לרכב ואיך לדעת שהוא גמור | בלוג המוסך של צביקה", description: "הרכב לא מתניע? מדריך מעשי על סימנים שהמצבר עומד להיגמר, כמה זמן מצבר מחזיק, כמה עולה החלפה, ואיך לשמור עליו.", date: "2025-01-17" },
  { path: "/blog/מתי-להחליף-בלמים-ברכב", title: "מתי להחליף בלמים ברכב וכמה זה עולה | בלוג המוסך של צביקה", description: "שומעים חריקה בבלימה? מדריך מעשי על סימנים שהבלמים צריכים החלפה, סוגי בלמים, עלויות, ומתי זה דחוף.", date: "2025-01-03" },
  { path: "/blog/בדיקת-רכב-לפני-קנייה", title: "בדיקת רכב לפני קנייה: מה חייבים לבדוק ולמה | בלוג המוסך של צביקה", description: "קונים רכב יד שנייה? מדריך מקיף על מה לבדוק לפני שסוגרים עסקה, סימנים שמשהו לא בסדר, ולמה חשובה בדיקה במוסך.", date: "2024-12-20" },
  { path: "/blog/כמה-זמן-לוקח-טיפול-במוסך", title: "כמה זמן לוקח טיפול במוסך ומה משפיע על זמן ההמתנה | בלוג המוסך של צביקה", description: "תוהים כמה זמן תהיו בלי רכב? מדריך מעשי על זמני טיפול במוסך לפי סוג הטיפול, ואיך לתכנן את הביקור.", date: "2024-12-06" },
  { path: "/blog/טיפול-ברכב-היברידי", title: "טיפול ברכב היברידי: מה שונה ומה צריך לדעת | בלוג המוסך של צביקה", description: "יש לכם רכב היברידי? מדריך מעשי על תחזוקת רכב היברידי, מה שונה מרכב רגיל, מה עולה יותר, ומה דווקא זול יותר.", date: "2024-11-22" },
  { path: "/blog/תחזוקת-רכב-בירושלים", title: "תחזוקת רכב בירושלים: מה שונה ולמה זה חשוב | בלוג המוסך של צביקה", description: "גרים בירושלים? הרכב שלכם עובד קשה יותר. מדריך על תחזוקת רכב מותאמת לנסיעה בעיר עם עליות תלולות, פקקים ומזג אוויר קיצוני.", date: "2024-11-08" },
  { path: "/blog/מקורי-מול-גנרי-חלקי-חילוף-לרכב", title: "חלקי חילוף מקוריים לעומת גנריים: מה ההבדל האמיתי | בלוג המוסך של צביקה", description: "חלק מקורי לרכב עולה פי 2-2.5 מגנרי, אבל לעתים קרובות מגיע מאותו מפעל. מדריך מלא: מה ההבדל, מתי כדאי לשלם יותר, ומתי אתה פשוט קונה לוגו.", date: "2026-04-03" },
  { path: "/blog/הרכב-בחורף-בעיות-ומניעה", title: "הרכב שלכם מוכן לחורף? 4 בעיות שהחורף גורם ואיך למנוע אותן | בלוג המוסך של צביקה", description: "בעיות חשמל, קשיי התנעה, עלים שסותמים את האוורור. הנה מה שקורה לרכב בחורף ואיך להתכונן נכון לפני שהגשם מתחיל.", date: "2026-03-20" },
  { path: "/blog/מזגן-לא-מחמם-בחורף-הסבר-ופתרון", title: "המזגן לא מחמם בחורף? ההסבר הפשוט ולמה זה לא באמת המזגן | בלוג המוסך של צביקה", description: "מזגן ברכב מקרר בלבד. החימום הוא מערכת אחרת לגמרי. הנה איך זה עובד ומה לעשות כשזה מתקלקל.", date: "2026-02-20" },
  { path: "/blog/אחריות-על-רכב-חדש-זכויות-שלא-ידעתם", title: "אחריות על רכב חדש: הזכות שרוב הנהגים לא יודעים שיש להם | בלוג המוסך של צביקה", description: "האם חייבים לטפל ביבואן מורשה כדי לא לאבד את אחריות הרכב? לא. חוק ישראלי מגן עליכם. כל מה שצריך לדעת על זכויות האחריות.", date: "2026-02-06" },
  // Service sub-pages
  { path: "/services/diagnostics", title: "דיאגנוסטיקה ממוחשבת לרכב בירושלים | המוסך של צביקה", description: "אבחון תקלות מדויק עם ציוד סריקה מתקדם. סריקת מחשב רכב, קודי תקלה, בדיקת חיישנים ומערכות בטיחות. המוסך של צביקה בירושלים." },
  { path: "/services/ac", title: "טיפול במיזוג אוויר לרכב בירושלים | המוסך של צביקה", description: "מילוי גז מזגן, איתור דליפות, תיקון מדחס ומערכת קירור לרכב. טיפול מקצועי במיזוג אוויר במוסך של צביקה בירושלים." },
  { path: "/services/test", title: "הכנה לטסט שנתי בירושלים | המוסך של צביקה", description: "בדיקה מקיפה לפני מבחן רישוי שנתי כולל תיקון ממצאים במקום. מעבר בפעם הראשונה בלי הפתעות. המוסך של צביקה בירושלים." },
  { path: "/services/general", title: "מכונאות רכב כללית בירושלים | המוסך של צביקה", description: "טיפולים שוטפים, החלפת שמנים ופילטרים, תיקוני מנוע ובלמים לכל סוגי הרכבים. מוסך מקצועי בירושלים עם מעל 30 שנות ניסיון. 02-6514446." },
];

function escapeForAttr(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function getStaticH1(path, title) {
  const h1Map = {
    "/services": "שירותי המוסך",
    "/about": "אודות המוסך",
    "/gallery": "הגלריה שלנו",
    "/contact": "צרו קשר עם המוסך",
    "/faq": "שאלות נפוצות",
    "/blog": "הבלוג שלנו",
    "/privacy": "מדיניות פרטיות",
    "/accessibility": "הצהרת נגישות",
    "/services/diagnostics": "דיאגנוסטיקה ממוחשבת לרכב",
    "/services/ac": "טיפול במיזוג אוויר לרכב",
    "/services/test": "הכנה לטסט שנתי",
    "/services/general": "מכונאות רכב כללית",
  };

  if (path.startsWith("/blog/")) {
    return title.split(" | ")[0];
  }

  return h1Map[path] || "המוסך של צביקה - מוסך מקצועי בירושלים";
}

function patchHtml(html, { path, title, description, robots, date }) {
  const canonicalUrl = path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}/`;
  const safeTitle = escapeForAttr(title);
  const safeDesc = escapeForAttr(description);
  const safeUrl = escapeForAttr(canonicalUrl);
  const safeH1 = escapeForAttr(getStaticH1(path, title));

  let patched = html
    // <title>
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    // meta description
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${safeDesc}$2`
    )
    // canonical href
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${safeUrl}$2`
    )
    // hreflang he-IL
    .replace(
      /(<link\s+rel="alternate"\s+hreflang="he-IL"\s+href=")[^"]*(")/,
      `$1${safeUrl}$2`
    )
    // hreflang x-default
    .replace(
      /(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,
      `$1${safeUrl}$2`
    )
    // og:title
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${safeTitle}$2`
    )
    // og:description
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${safeDesc}$2`
    )
    // og:url
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${safeUrl}$2`
    )
    // twitter:title
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${safeTitle}$2`
    )
    // twitter:description
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${safeDesc}$2`
    )
    // Static skeleton H1 for no-JS crawlers
    .replace(
      /(<h1[^>]*id="seo-h1"[^>]*>)[^<]*(<\/h1>)/,
      `$1${safeH1}$2`
    );

  if (robots) {
    patched = patched.replace(
      /(<meta\s+name="robots"\s+content=")[^"]*(")/,
      `$1${escapeForAttr(robots)}$2`
    );
  }

  // Inject JSON-LD: BreadcrumbList for non-home routes
  const breadcrumbNames = {
    "/services": "שירותים", "/about": "אודות", "/gallery": "גלריה",
    "/contact": "צור קשר", "/faq": "שאלות נפוצות", "/blog": "בלוג",
    "/privacy": "מדיניות פרטיות", "/accessibility": "הצהרת נגישות",
  };

  if (path !== "/") {
    const bcItems = [{ "@type": "ListItem", position: 1, name: "דף הבית", item: `${BASE_URL}/` }];
    if (path.startsWith("/blog/")) {
      bcItems.push({ "@type": "ListItem", position: 2, name: "בלוג", item: `${BASE_URL}/blog` });
      bcItems.push({ "@type": "ListItem", position: 3, name: title.split(" | ")[0] });
    } else {
      bcItems.push({ "@type": "ListItem", position: 2, name: breadcrumbNames[path] || title.split(" | ")[0] });
    }
    const bcLD = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: bcItems });
    patched = patched.replace("</head>", `<script type="application/ld+json">${bcLD}</script>\n</head>`);

    // Article JSON-LD + og:type for blog articles
    if (path.startsWith("/blog/") && date) {
      const articleName = title.split(" | ")[0];
      const articleLD = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articleName,
        description: description,
        datePublished: date,
        dateModified: date,
        url: canonicalUrl,
        inLanguage: "he",
        author: {
          "@type": "Organization",
          name: "המוסך של צביקה (אור-צת)",
          url: BASE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "המוסך של צביקה (אור-צת)",
          url: BASE_URL,
          logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
        image: `${BASE_URL}/og-home.jpg`,
      });
      patched = patched.replace("</head>", `<script type="application/ld+json">${articleLD}</script>\n</head>`);

      // Change og:type from "website" to "article"
      patched = patched.replace(
        /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
        `$1article$2`
      );
    }
  }

  // Inject FAQPage JSON-LD for /faq
  if (path === "/faq") {
    const faqLD = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "כמה עולה טיפול שוטף לרכב?", acceptedAnswer: { "@type": "Answer", text: "המחיר תלוי בסוג הרכב, בשנת הייצור ובסוג הטיפול הנדרש. טיפול שוטף בסיסי (החלפת שמן ופילטרים) עולה בדרך כלל בין 250 ל-500 ש\"ח. אצלנו במוסך בגבעת שאול, ירושלים, תמיד נציג מראש את המחיר המדויק לפני שמתחילים לעבוד." } },
        { "@type": "Question", name: "כל כמה זמן צריך לעשות טיפול לרכב?", acceptedAnswer: { "@type": "Answer", text: "ההמלצה הכללית היא טיפול כל 10,000-15,000 ק\"מ או פעם בשנה, לפי המוקדם מביניהם. רכבים ישנים יותר או רכבים שנוסעים בעיקר בעיר (כמו בירושלים) ייתכן שיצטרכו טיפולים תכופים יותר." } },
        { "@type": "Question", name: "איך אפשר לדעת שהרכב צריך טיפול?", acceptedAnswer: { "@type": "Answer", text: "סימנים שכדאי לשים לב אליהם: נורית אזהרה שנדלקת, רעשים חריגים מהמנוע, רטט בהגה, בלמים שמגיבים לאט, צריכת דלק גבוהה מהרגיל, או דליפות מתחת לרכב." } },
        { "@type": "Question", name: "איך מתכוננים לטסט שנתי?", acceptedAnswer: { "@type": "Answer", text: "לפני הטסט כדאי לוודא שהפנסים תקינים, המגבים עובדים, הצמיגים לא שחוקים, הבלמים תקינים, ואין דליפות שמן. אצלנו במוסך עושים בדיקת פרה-טסט מקיפה." } },
        { "@type": "Question", name: "מתי צריך לבדוק את המזגן ברכב?", acceptedAnswer: { "@type": "Answer", text: "אם המזגן לא מקרר כמו פעם, מוציא ריח לא נעים, או משמיע רעשים מוזרים, הגיע הזמן לבדיקה. מומלץ לבדוק את המזגן לפני הקיץ." } },
        { "@type": "Question", name: "מה ההבדל בין מוסך מורשה למוסך עצמאי?", acceptedAnswer: { "@type": "Answer", text: "מוסך מורשה עובד עם יבואן ספציפי ומחויב למחירון שלו. מוסך עצמאי כמו שלנו יכול לטפל בכל סוגי הרכבים, להשתמש בחלקים איכותיים, ולהציע מחירים תחרותיים יותר." } },
        { "@type": "Question", name: "אתם מטפלים בכל סוגי הרכבים?", acceptedAnswer: { "@type": "Answer", text: "כן. אנחנו מטפלים ברכבים פרטיים מכל היצרנים: יונדאי, טויוטה, מאזדה, קיה, סקודה, פולקסווגן, ועוד." } },
        { "@type": "Question", name: "כמה זמן לוקח טיפול שוטף?", acceptedAnswer: { "@type": "Answer", text: "טיפול שוטף בסיסי (שמן ופילטרים) לוקח בדרך כלל כשעה עד שעתיים. טיפולים מורכבים יותר יכולים לקחת יום עבודה." } },
        { "@type": "Question", name: "איפה אתם נמצאים?", acceptedAnswer: { "@type": "Answer", text: "המוסך נמצא ברחוב האופה 4, גבעת שאול, ירושלים. קל להגיע אלינו מכל חלקי העיר." } },
        { "@type": "Question", name: "אפשר לתאם ביקור גם בוואטסאפ?", acceptedAnswer: { "@type": "Answer", text: "בהחלט. שלחו לנו הודעה עם פרטי הרכב ומה הבעיה, ונחזור אליכם עם זמן פנוי קרוב." } },
        { "@type": "Question", name: "האם יש אחריות על העבודה?", acceptedAnswer: { "@type": "Answer", text: "כן. אנחנו נותנים אחריות על כל עבודה שאנחנו מבצעים, כולל חלקי חילוף." } },
      ],
    });
    patched = patched.replace("</head>", `<script type="application/ld+json">${faqLD}</script>\n</head>`);
  }

  return patched;
}

const baseHtml = readFileSync(join(distDir, "index.html"), "utf-8");

for (const route of routes) {
  const patched = patchHtml(baseHtml, route);

  if (route.path === "/") {
    // Overwrite the root index.html with the correct home-page title
    writeFileSync(join(distDir, "index.html"), patched, "utf-8");
    console.log(`✓ Patched  /  (root index.html)`);
  } else {
    const segments = route.path.slice(1).split("/");
    const isBlogArticle = segments[0] === "blog" && segments.length === 2;

    if (isBlogArticle) {
      const encodedSlug = encodeURIComponent(segments[1]);
      const blogDir = join(distDir, "blog");
      mkdirSync(blogDir, { recursive: true });
      writeFileSync(join(blogDir, `${encodedSlug}.html`), patched, "utf-8");
      console.log(`✓ Pre-rendered  ${route.path}  →  blog/${encodedSlug}.html`);
    } else {
      const dir = join(distDir, ...segments);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "index.html"), patched, "utf-8");
      console.log(`✓ Pre-rendered  ${route.path}`);
    }
  }
}

console.log(`\n✅ Pre-rendering complete - ${routes.length} pages`);
