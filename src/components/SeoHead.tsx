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
  ogType?: string;
  datePublished?: string;
}

function normalizePathname(pathname: string): string {
  let normalized = pathname.replace(/\/index\.html$/, "");
  if (normalized === "") normalized = "/";
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

/** Central SEO config - one entry per route, Jerusalem-focused keywords */
const seoConfig: Record<string, PageSeo> = {
  "/": {
    title: "המוסך של צביקה (אור-צת) | מוסך מקצועי בירושלים",
    description:
      "המוסך של צביקה (אור-צת) - מוסך מקצועי בירושלים, גבעת שאול. מעל 30 שנות ניסיון במכונאות רכב, דיאגנוסטיקה ממוחשבת, מיזוג אוויר והכנה לטסט. שקיפות מלאה, מחיר הוגן ושירות אישי. 02-6514446.",
    ogImage: `${BASE_URL}/og-home.jpg`,
  },
  "/services": {
    title: "שירותי מוסך בירושלים | רשימת השירותים המלאה - המוסך של צביקה",
    description:
      "כל שירותי המוסך של צביקה בגבעת שאול, ירושלים: טיפולים שוטפים, דיאגנוסטיקה ממוחשבת, מיזוג אוויר, הכנה לטסט, בדיקת רכב לפני קנייה, טיפול בבעיות חשמל ומנוע. 02-6514446.",
    breadcrumbName: "שירותים",
  },
  "/about": {
    title: "אודות המוסך של צביקה (אור-צת) | מוסך בירושלים מאז 1993",
    description:
      "מוסך אור-צת בירושלים, המוסך של צביקה בגבעת שאול. מוסך משפחתי מאז 1993, מעל 30 שנות ניסיון, 98% לקוחות חוזרים. השם אור צת שירותי רכב ידוע בירושלים כסמל של אמינות ומקצועיות.",
    ogImage: `${BASE_URL}/og-about.jpg`,
    breadcrumbName: "אודות",
  },
  "/gallery": {
    title: "הצצה למוסך | המוסך של צביקה בגבעת שאול, ירושלים",
    description:
      "כרגע מוצגת בעמוד תמונה אמיתית אחת של חזית המוסך של צביקה ברחוב האופה 4, גבעת שאול. תמונות נוספות מתוך המוסך והעבודה השוטפת יתווספו בהמשך.",
    breadcrumbName: "גלריה",
  },
  "/contact": {
    title: "צור קשר | טלפון, וואטסאפ והגעה למוסך של צביקה בירושלים",
    description:
      "צרו קשר עם המוסך של צביקה בגבעת שאול, ירושלים. טלפון: 02-6514446, וואטסאפ: 052-651-4446, כתובת: רחוב האופה 4. ניווט ב-Waze, שעות פעילות ואפשרות להשאיר פרטים.",
    breadcrumbName: "צור קשר",
  },
  "/faq": {
    title: "שאלות נפוצות | המוסך של צביקה - ירושלים",
    description:
      "תשובות לשאלות נפוצות על שירותי המוסך של צביקה: עלויות טיפול, הכנה לטסט, זמני טיפול, סוגי רכבים ועוד. מוסך מקצועי בירושלים מאז 1993.",
    breadcrumbName: "שאלות נפוצות",
  },
  "/blog": {
    title: "טיפים, תקלות ותחזוקת רכב | בלוג המוסך של צביקה - ירושלים",
    description:
      "מדריכים מעשיים על תחזוקת רכב, זיהוי תקלות, הכנה לטסט, החלפת שמן, מיזוג אוויר, רעשים חריגים ועוד. טיפים מקצועיים מהמוסך של צביקה בירושלים.",
    breadcrumbName: "בלוג",
  },
  "/privacy": {
    title: "מדיניות פרטיות | המוסך של צביקה (אור-צת)",
    description:
      "מדיניות הפרטיות של המוסך של צביקה (אור-צת). מידע על איסוף, שימוש והגנה על מידע אישי בהתאם לחוק הגנת הפרטיות.",
    breadcrumbName: "מדיניות פרטיות",
    robots: "noindex, follow",
  },
  "/accessibility": {
    title: "הצהרת נגישות | המוסך של צביקה (אור-צת)",
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
      ogType: "article",
      datePublished: article.date,
    };
  }
  const titleFromSlug = slug.replace(/-/g, " ");
  return {
    title: `${titleFromSlug} | בלוג המוסך של צביקה`,
    description: `קראו על ${titleFromSlug}. מאמר מקצועי מהבלוג של המוסך של צביקה - מוסך מקצועי בירושלים עם מעל 30 שנות ניסיון.`,
    breadcrumbName: titleFromSlug,
    ogType: "article",
  };
}

function buildBreadcrumbSchema(pathname: string, seo: PageSeo) {
  if (pathname === "/") return null;

  const items: Array<{ "@type": string; position: number; name: string; item?: string }> = [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: `${BASE_URL}/` },
  ];

  if (pathname.startsWith("/blog/")) {
    items.push({ "@type": "ListItem", position: 2, name: "בלוג", item: `${BASE_URL}/blog/` });
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

  const canonicalUrl = normalizedPathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${normalizedPathname}/`;
  const ogImage = seo.ogImage || DEFAULT_OG_IMAGE;
  const ogType = seo.ogType || "website";
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
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content="המוסך של צביקה" />

      {/* Article-specific OG tags */}
      {seo.datePublished && (
        <meta property="article:published_time" content={seo.datePublished} />
      )}
      {seo.datePublished && (
        <meta property="article:author" content="המוסך של צביקה (אור-צת)" />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* BreadcrumbList structured data */}
      {breadcrumb && (
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      )}

      {/* Article structured data for blog posts */}
      {seo.ogType === "article" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: seo.title.split(" | ")[0],
            description: seo.description,
            datePublished: seo.datePublished,
            dateModified: seo.datePublished,
            url: canonicalUrl,
            inLanguage: "he",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["article h1", "article h2", "article p"],
            },
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
          })}
        </script>
      )}

      {/* Speakable for FAQ page */}
      {normalizedPathname === "/faq" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: seo.title,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["[data-faq-question]", "[data-faq-answer]"],
            },
            url: canonicalUrl,
          })}
        </script>
      )}
    </Helmet>
  );
}
