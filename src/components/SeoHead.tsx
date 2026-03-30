import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { blogArticles } from "@/data/blog-articles";

const BASE_URL = "https://www.ortzat.co.il";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface PageSeo {
  title: string;
  description: string;
  ogImage?: string;
  breadcrumbName?: string;
  robots?: string;
}

function normalizePathname(pathname: string): string {
  let normalized = pathname.replace(/\/index\.html$/, "");
  if (normalized === "") normalized = "/";
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

/** Central SEO config – one entry per route, Jerusalem-focused keywords */
const seoConfig: Record<string, PageSeo> = {
  "/": {
    title: "המוסך של צביקה | מוסך מקצועי בירושלים – אור-צת שירותי רכב",
    description:
      "המוסך של צביקה – מוסך מקצועי בירושלים, גבעת שאול. מעל 30 שנות ניסיון במכונאות רכב, דיאגנוסטיקה ממוחשבת, מיזוג אוויר והכנה לטסט. שקיפות מלאה, מחיר הוגן ושירות אישי. 02-6514446.",
    ogImage: `${BASE_URL}/og-home.jpg`,
  },
  "/services": {
    title: "שירותי מוסך מקצועיים בירושלים | המוסך של צביקה",
    description:
      "שירותי מכונאות רכב מקיפים בירושלים: טיפולים שוטפים, דיאגנוסטיקה ממוחשבת, מיזוג אוויר לרכב, הכנה לטסט שנתי, בדיקת רכב לפני קנייה ועוד. מעל 30 שנות ניסיון. 02-6514446.",
    breadcrumbName: "שירותים",
  },
  "/about": {
    title: "אודות המוסך של צביקה | מוסך משפחתי בירושלים מאז 1993",
    description:
      "הכירו את המוסך של צביקה – מוסך משפחתי בגבעת שאול, ירושלים. מעל 30 שנות ניסיון, שירות אישי ושקיפות מלאה. הסיפור שלנו, הערכים שמנחים אותנו והצוות.",
    ogImage: `${BASE_URL}/og-about.jpg`,
    breadcrumbName: "אודות",
  },
  "/gallery": {
    title: "גלריית תמונות | המוסך של צביקה – ירושלים",
    description:
      "צפו בתמונות מהמוסך של צביקה בגבעת שאול, ירושלים. מוסך מקצועי, מצויד ומסודר עם ציוד מתקדם לטיפול ברכב.",
    breadcrumbName: "גלריה",
  },
  "/contact": {
    title: "צור קשר | המוסך של צביקה – ירושלים",
    description:
      "צרו קשר עם המוסך של צביקה בגבעת שאול, ירושלים. טלפון: 02-6514446, וואטסאפ: 052-651-4446. רחוב האופה 4. שעות פעילות: א׳–ה׳ 08:00–16:30.",
    breadcrumbName: "צור קשר",
  },
  "/faq": {
    title: "שאלות נפוצות | המוסך של צביקה – ירושלים",
    description:
      "תשובות לשאלות נפוצות על שירותי המוסך של צביקה: עלויות טיפול, הכנה לטסט, זמני טיפול, סוגי רכבים ועוד. מוסך מקצועי בירושלים מאז 1993.",
    breadcrumbName: "שאלות נפוצות",
  },
  "/blog": {
    title: "בלוג | טיפים ומדריכים לטיפול ברכב – המוסך של צביקה",
    description:
      "מאמרים מקצועיים על טיפול ברכב: איך לבחור מוסך, הכנה לטסט, החלפת שמן, מיזוג אוויר, סימני אזהרה ועוד. טיפים מהמוסך של צביקה בירושלים.",
    breadcrumbName: "בלוג",
  },
  "/privacy": {
    title: "מדיניות פרטיות | המוסך של צביקה – אור-צת שירותי רכב",
    description:
      "מדיניות הפרטיות של המוסך של צביקה – אור-צת שירותי רכב. מידע על איסוף, שימוש והגנה על מידע אישי בהתאם לחוק הגנת הפרטיות.",
    breadcrumbName: "מדיניות פרטיות",
    robots: "noindex, follow",
  },
  "/accessibility": {
    title: "הצהרת נגישות | המוסך של צביקה – אור-צת שירותי רכב",
    description:
      "הצהרת הנגישות של אתר המוסך של צביקה. מחויבות להנגשת האתר לאנשים עם מוגבלויות בהתאם לתקנות הנגישות.",
    breadcrumbName: "הצהרת נגישות",
    robots: "noindex, follow",
  },
  "/image-generator": {
    title: "מחולל תמונות | המוסך של צביקה",
    description: "מחולל תמונות פנימי.",
    robots: "noindex, nofollow",
  },
};

function getBlogArticleSeo(pathname: string): PageSeo {
  const slug = decodeURIComponent(pathname.replace("/blog/", ""));
  const article = blogArticles.find((a) => a.slug === slug);
  if (article) {
    return {
      title: `${article.title} | בלוג המוסך של צביקה`,
      description: article.metaDescription,
      breadcrumbName: article.title,
    };
  }
  const titleFromSlug = slug.replace(/-/g, " ");
  return {
    title: `${titleFromSlug} | בלוג המוסך של צביקה`,
    description: `קראו על ${titleFromSlug}. מאמר מקצועי מהבלוג של המוסך של צביקה – מוסך מקצועי בירושלים עם מעל 30 שנות ניסיון.`,
    breadcrumbName: titleFromSlug,
  };
}

function buildBreadcrumbSchema(pathname: string, seo: PageSeo) {
  if (pathname === "/") return null;

  const items: Array<{ "@type": string; position: number; name: string; item?: string }> = [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: `${BASE_URL}/` },
  ];

  if (pathname.startsWith("/blog/")) {
    items.push({ "@type": "ListItem", position: 2, name: "בלוג", item: `${BASE_URL}/blog` });
    items.push({ "@type": "ListItem", position: 3, name: seo.breadcrumbName || seo.title });
  } else {
    items.push({ "@type": "ListItem", position: 2, name: seo.breadcrumbName || seo.title });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export default function SeoHead() {
  const { pathname } = useLocation();
  const normalizedPathname = normalizePathname(pathname);

  const seo = normalizedPathname.startsWith("/blog/")
    ? getBlogArticleSeo(normalizedPathname)
    : seoConfig[normalizedPathname] || seoConfig["/"];

  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const canonicalUrl = canonicalPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${canonicalPath}`;
  const ogImage = seo.ogImage || DEFAULT_OG_IMAGE;
  const robotsContent = seo.robots || "index, follow";
  const breadcrumb = buildBreadcrumbSchema(normalizedPathname, seo);

  return (
    <Helmet>
      {/* Core */}
      <html lang="he" dir="rtl" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="he-IL" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content="המוסך של צביקה" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* BreadcrumbList structured data */}
      {breadcrumb && (
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      )}
    </Helmet>
  );
}
