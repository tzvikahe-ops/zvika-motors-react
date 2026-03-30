import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { blogArticles } from "@/data/blog-articles";

const BASE_URL = "https://www.ortzat.co.il";

interface PageSeo {
  title: string;
  description: string;
  ogImage?: string;
  breadcrumbName?: string;
  robots?: string;
}

const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const pageSeoMap: Record<string, PageSeo> = {
  "/": {
    title: "המוסך של צביקה | מוסך מקצועי בירושלים - אור-צת שירותי רכב",
    description: "המוסך של צביקה - מוסך מקצועי בירושלים, גבעת שאול. מעל 30 שנות ניסיון במכונאות רכב, דיאגנוסטיקה ממוחשבת, מיזוג אוויר והכנה לטסט. שקיפות מלאה ומחירים הוגנים. 02-6514446.",
    ogImage: `${BASE_URL}/og-home.jpg`,
  },
  "/services": {
    title: "שירותי מוסך מקצועיים בירושלים | המוסך של צביקה",
    description: "שירותי מכונאות רכב מקיפים בירושלים: טיפולים שוטפים, דיאגנוסטיקה ממוחשבת, מיזוג אוויר לרכב, הכנה לטסט שנתי, בדיקת רכב לפני קנייה ועוד. מעל 30 שנות ניסיון. 02-6514446.",
    breadcrumbName: "שירותים",
  },
  "/about": {
    title: "אודות המוסך של צביקה | מי אנחנו ולמה לבחור בנו",
    description: "הכירו את הצוות מאחורי המוסך של צביקה בגבעת שאול, ירושלים. מוסך משפחתי מאז 1993, מעל 30 שנות ניסיון, שקיפות מלאה ומקצועיות ללא פשרות. למה אלפי לקוחות סומכים עלינו.",
    ogImage: `${BASE_URL}/og-about.jpg`,
    breadcrumbName: "אודות",
  },
  "/gallery": {
    title: "גלריית תמונות | המוסך של צביקה - ירושלים",
    description: "צפו בתמונות מהמוסך של צביקה בגבעת שאול, ירושלים. מוסך מקצועי, מצויד ומסודר עם ציוד מתקדם לטיפול ברכב.",
    breadcrumbName: "גלריה",
  },
  "/contact": {
    title: "צור קשר | המוסך של צביקה - ירושלים",
    description: "צרו קשר עם המוסך של צביקה בגבעת שאול, ירושלים. טלפון: 02-6514446, וואטסאפ: 052-651-4446. רחוב האופה 4. שעות פעילות: א׳-ה׳ 08:00-16:30.",
    breadcrumbName: "צור קשר",
  },
  "/faq": {
    title: "שאלות נפוצות | המוסך של צביקה - ירושלים",
    description: "תשובות לשאלות נפוצות על שירותי המוסך של צביקה: עלויות טיפול, הכנה לטסט, זמני טיפול, סוגי רכבים ועוד. מוסך מקצועי בירושלים מאז 1993.",
    breadcrumbName: "שאלות נפוצות",
  },
  "/blog": {
    title: "בלוג | טיפים ומדריכים לטיפול ברכב - המוסך של צביקה",
    description: "מאמרים מקצועיים על טיפול ברכב: איך לבחור מוסך, הכנה לטסט, החלפת שמן, מיזוג אוויר, סימני אזהרה ועוד. טיפים מהמוסך של צביקה בירושלים.",
    breadcrumbName: "בלוג",
  },
  "/privacy": {
    title: "מדיניות פרטיות | המוסך של צביקה - אור-צת שירותי רכב",
    description: "מדיניות הפרטיות של המוסך של צביקה - אור-צת שירותי רכב. מידע על איסוף, שימוש והגנה על מידע אישי בהתאם לחוק הגנת הפרטיות.",
    breadcrumbName: "מדיניות פרטיות",
    robots: "noindex, follow",
  },
  "/accessibility": {
    title: "הצהרת נגישות | המוסך של צביקה - אור-צת שירותי רכב",
    description: "הצהרת הנגישות של אתר המוסך של צביקה. מחויבות להנגשת האתר לאנשים עם מוגבלויות בהתאם לתקנות הנגישות.",
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
    description: `קראו על ${titleFromSlug}. מאמר מקצועי מהבלוג של המוסך של צביקה - מוסך מקצועי בירושלים עם מעל 30 שנות ניסיון.`,
    breadcrumbName: titleFromSlug,
  };
}

export function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Canonical
    const canonicalUrl = pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.href = canonicalUrl;
    } else {
      link = document.createElement("link");
      link.rel = "canonical";
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // Get SEO data
    const seo = pathname.startsWith("/blog/")
      ? getBlogArticleSeo(pathname)
      : pageSeoMap[pathname] || pageSeoMap["/"];

    // Title
    document.title = seo.title;

    // Robots
    const robotsContent = seo.robots || "index, follow";
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.content = robotsContent;
    } else {
      robotsMeta = document.createElement("meta");
      robotsMeta.name = "robots";
      robotsMeta.content = robotsContent;
      document.head.appendChild(robotsMeta);
    }

    // Meta description
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content = seo.description;
    } else {
      meta = document.createElement("meta");
      meta.name = "description";
      meta.content = seo.description;
      document.head.appendChild(meta);
    }

    // OG tags
    const ogImage = seo.ogImage || DEFAULT_OG_IMAGE;
    const ogUpdates: Record<string, string> = {
      "og:title": seo.title,
      "og:description": seo.description,
      "og:url": canonicalUrl,
      "og:image": ogImage,
      "og:type": "website",
      "og:locale": "he_IL",
      "og:site_name": "המוסך של צביקה",
    };
    for (const [property, content] of Object.entries(ogUpdates)) {
      let ogMeta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (ogMeta) {
        ogMeta.content = content;
      } else {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute("property", property);
        ogMeta.content = content;
        document.head.appendChild(ogMeta);
      }
    }

    // Twitter tags
    const twitterUpdates: Record<string, string> = {
      "twitter:title": seo.title,
      "twitter:description": seo.description,
      "twitter:image": ogImage,
    };
    for (const [name, content] of Object.entries(twitterUpdates)) {
      let twMeta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (twMeta) {
        twMeta.content = content;
      } else {
        twMeta = document.createElement("meta");
        twMeta.name = name;
        twMeta.content = content;
        document.head.appendChild(twMeta);
      }
    }

    // BreadcrumbList structured data (skip for homepage)
    const BREADCRUMB_SCRIPT_ID = "seo-breadcrumb";
    const existingBreadcrumb = document.getElementById(BREADCRUMB_SCRIPT_ID);
    if (pathname !== "/") {
      const breadcrumbItems: Array<{ "@type": string; position: number; name: string; item?: string }> = [
        { "@type": "ListItem", position: 1, name: "דף הבית", item: `${BASE_URL}/` },
      ];

      if (pathname.startsWith("/blog/")) {
        breadcrumbItems.push({ "@type": "ListItem", position: 2, name: "בלוג", item: `${BASE_URL}/blog` });
        breadcrumbItems.push({ "@type": "ListItem", position: 3, name: seo.breadcrumbName || seo.title });
      } else {
        breadcrumbItems.push({ "@type": "ListItem", position: 2, name: seo.breadcrumbName || seo.title });
      }

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems,
      };

      if (existingBreadcrumb) {
        existingBreadcrumb.textContent = JSON.stringify(breadcrumbSchema);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = BREADCRUMB_SCRIPT_ID;
        script.textContent = JSON.stringify(breadcrumbSchema);
        document.head.appendChild(script);
      }
    } else if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }
  }, [pathname]);
}
