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
  },
  {
    path: "/accessibility",
    title: "הצהרת נגישות | המוסך של צביקה – אור-צת שירותי רכב",
    description:
      "הצהרת הנגישות של אתר המוסך של צביקה. מחויבות להנגשת האתר לאנשים עם מוגבלויות בהתאם לתקנות הנגישות.",
  },
];

function escapeForAttr(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function patchHtml(html, { path, title, description }) {
  const canonicalUrl = path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;
  const safeTitle = escapeForAttr(title);
  const safeDesc = escapeForAttr(description);
  const safeUrl = escapeForAttr(canonicalUrl);

  return html
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
    );
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
