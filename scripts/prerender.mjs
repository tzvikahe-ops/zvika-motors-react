/**
 * Post-build pre-render script.
 * Runs after `vite build` and creates a static index.html for each route.
 * Each file gets the correct <title>, <meta description>, <link rel="canonical">
 * and Open Graph tags — so crawlers see unique HTML without needing a JS runtime.
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

/** Mirrors the pageSeoMap in src/hooks/use-seo.ts */
const routes = [
  {
    path: "/",
    title: "המוסך של צביקה | מוסך מקצועי בירושלים – אור-צת שירותי רכב",
    description:
      "המוסך של צביקה – מוסך מקצועי בירושלים, גבעת שאול. מעל 30 שנות ניסיון במכונאות רכב, דיאגנוסטיקה ממוחשבת, מיזוג אוויר והכנה לטסט. שקיפות מלאה, מחיר הוגן ושירות אישי. 02-6514446.",
  },
  {
    path: "/services",
    title: "שירותי מוסך מקצועיים בירושלים | המוסך של צביקה",
    description:
      "שירותי מכונאות רכב מקיפים בירושלים: טיפולים שוטפים, דיאגנוסטיקה ממוחשבת, מיזוג אוויר לרכב, הכנה לטסט שנתי, בדיקת רכב לפני קנייה ועוד. מעל 30 שנות ניסיון. 02-6514446.",
  },
  {
    path: "/about",
    title: "אודות המוסך של צביקה | מוסך משפחתי בירושלים מאז 1993",
    description:
      "הכירו את המוסך של צביקה – מוסך משפחתי בגבעת שאול, ירושלים. מעל 30 שנות ניסיון, שירות אישי ושקיפות מלאה. הסיפור שלנו, הערכים שמנחים אותנו והצוות.",
  },
  {
    path: "/gallery",
    title: "גלריית תמונות | המוסך של צביקה – ירושלים",
    description:
      "צפו בתמונות מהמוסך של צביקה בגבעת שאול, ירושלים. מוסך מקצועי, מצויד ומסודר עם ציוד מתקדם לטיפול ברכב.",
  },
  {
    path: "/contact",
    title: "צור קשר | המוסך של צביקה – ירושלים",
    description:
      "צרו קשר עם המוסך של צביקה בגבעת שאול, ירושלים. טלפון: 02-6514446, וואטסאפ: 052-651-4446. רחוב האופה 4. שעות פעילות: א׳–ה׳ 08:00–16:30.",
  },
  {
    path: "/faq",
    title: "שאלות נפוצות | המוסך של צביקה – ירושלים",
    description:
      "תשובות לשאלות נפוצות על שירותי המוסך של צביקה: עלויות טיפול, הכנה לטסט, זמני טיפול, סוגי רכבים ועוד. מוסך מקצועי בירושלים מאז 1993.",
  },
  {
    path: "/blog",
    title: "בלוג | טיפים ומדריכים לטיפול ברכב – המוסך של צביקה",
    description:
      "מאמרים מקצועיים על טיפול ברכב: איך לבחור מוסך, הכנה לטסט, החלפת שמן, מיזוג אוויר, סימני אזהרה ועוד. טיפים מהמוסך של צביקה בירושלים.",
  },
  {
    path: "/privacy",
    title: "מדיניות פרטיות | המוסך של צביקה – אור-צת שירותי רכב",
    description:
      "מדיניות הפרטיות של המוסך של צביקה – אור-צת שירותי רכב. מידע על איסוף, שימוש והגנה על מידע אישי בהתאם לחוק הגנת הפרטיות.",
    robots: "noindex, follow",
  },
  {
    path: "/accessibility",
    title: "הצהרת נגישות | המוסך של צביקה – אור-צת שירותי רכב",
    description:
      "הצהרת הנגישות של אתר המוסך של צביקה. מחויבות להנגשת האתר לאנשים עם מוגבלויות בהתאם לתקנות הנגישות.",
    robots: "noindex, follow",
  },
  // Blog articles
  { path: "/blog/איך-לבחור-מוסך-אמין-בירושלים", title: "איך לבחור מוסך אמין בירושלים | בלוג המוסך של צביקה", description: "מחפשים מוסך אמין בירושלים? מדריך מקיף עם טיפים מעשיים לבחירת מוסך מקצועי, שקוף והוגן באזור ירושלים וגבעת שאול." },
  { path: "/blog/סימנים-שהרכב-צריך-טיפול", title: "סימנים שהרכב צריך טיפול | בלוג המוסך של צביקה", description: "אל תתעלמו מסימני אזהרה ברכב. מדריך לזיהוי 8 סימנים שמעידים שהרכב שלכם צריך טיפול דחוף במוסך." },
  { path: "/blog/כמה-עולה-טיפול-לרכב", title: "כמה עולה טיפול לרכב | בלוג המוסך של צביקה", description: "תוהים כמה עולה טיפול לרכב? מדריך מפורט על עלויות טיפולים שוטפים, מה משפיע על המחיר, ואיך לחסוך בטיפולי רכב." },
  { path: "/blog/מתי-לבדוק-מזגן-ברכב", title: "מתי צריך לבדוק מזגן ברכב ואיך לשמור עליו | בלוג המוסך של צביקה", description: "המזגן ברכב לא מקרר? מדריך מקיף על תחזוקת מזגן רכב, סימני אזהרה, ומתי להגיע למוסך לבדיקה." },
  { path: "/blog/איך-לעבור-טסט-בקלות", title: "איך להתכונן לטסט לרכב ולעבור בקלות | בלוג המוסך של צביקה", description: "מתכוננים לטסט השנתי? מדריך מלא עם רשימת בדיקות, טיפים לעבור בפעם הראשונה, ומה עושים אם הרכב נכשל." },
  { path: "/blog/רעשים-חריגים-ברכב-מה-הם-אומרים", title: "רעשים חריגים ברכב: מה הם אומרים ומתי לדאוג | בלוג המוסך של צביקה", description: "שומעים רעש מוזר מהרכב? מדריך מקיף לזיהוי רעשים חריגים ברכב, מה הסיבות האפשריות, ומתי חייבים להגיע למוסך בירושלים." },
  { path: "/blog/נורת-צק-אנגין-מה-לעשות", title: "נורת צ׳ק אנג׳ין – מה לעשות | בלוג המוסך של צביקה", description: "נורת הצ'ק אנג'ין נדלקה ברכב? מדריך מעשי עם הסיבות הנפוצות, מתי זה דחוף ומתי פחות, ומה לעשות צעד אחר צעד." },
  { path: "/blog/החלפת-שמן-מנוע-למה-חשוב-ומתי", title: "החלפת שמן מנוע – למה חשוב ומתי | בלוג המוסך של צביקה", description: "מתי צריך להחליף שמן מנוע? מדריך מעשי על סוגי שמנים, תדירות החלפה, מה קורה אם מזניחים, וכמה זה עולה במוסך בירושלים." },
  { path: "/blog/רכב-מתחמם-סיבות-ופתרונות", title: "רכב מתחמם – סיבות ופתרונות | בלוג המוסך של צביקה", description: "מחוג הטמפרטורה עולה? מדריך מעשי על התחממות יתר של מנוע רכב – למה זה קורה, מה לעשות ברגע שזה קורה, ואיך למנוע את זה." },
  { path: "/blog/למה-הרכב-צורך-יותר-דלק", title: "למה הרכב צורך יותר דלק | בלוג המוסך של צביקה", description: "הרכב שותה יותר דלק מהרגיל? מדריך מעשי על 8 סיבות נפוצות לצריכת דלק גבוהה ברכב, ואיך לחסוך כסף בתדלוק." },
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
  };

  if (path.startsWith("/blog/")) {
    return title.split(" | ")[0];
  }

  return h1Map[path] || "המוסך שאפשר";
}

function patchHtml(html, { path, title, description, robots }) {
  const canonicalUrl = path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;
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
    // Create dist/<route>/index.html
    const dir = join(distDir, route.path.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), patched, "utf-8");
    console.log(`✓ Pre-rendered  ${route.path}`);
  }
}

console.log(`\n✅ Pre-rendering complete — ${routes.length} pages`);
