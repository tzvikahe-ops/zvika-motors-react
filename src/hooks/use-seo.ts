import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.ortzat.co.il";

interface PageSeo {
  title: string;
  description: string;
}

const pageSeoMap: Record<string, PageSeo> = {
  "/": {
    title: "המוסך של צביקה | מוסך מקצועי בירושלים – אור-צת שירותי רכב",
    description: "המוסך של צביקה – מוסך מקצועי בירושלים, גבעת שאול. מעל 30 שנות ניסיון במכונאות רכב, דיאגנוסטיקה ממוחשבת, מיזוג אוויר והכנה לטסט. שקיפות מלאה, מחיר הוגן ושירות אישי. 02-6514446.",
  },
  "/services": {
    title: "שירותי מוסך מקצועיים בירושלים | המוסך של צביקה",
    description: "שירותי מכונאות רכב מקיפים בירושלים: טיפולים שוטפים, דיאגנוסטיקה ממוחשבת, מיזוג אוויר לרכב, הכנה לטסט שנתי, בדיקת רכב לפני קנייה ועוד. מעל 30 שנות ניסיון. 02-6514446.",
  },
  "/about": {
    title: "אודות המוסך של צביקה | מוסך משפחתי בירושלים מאז 1993",
    description: "הכירו את המוסך של צביקה – מוסך משפחתי בגבעת שאול, ירושלים. מעל 30 שנות ניסיון, שירות אישי ושקיפות מלאה. הסיפור שלנו, הערכים שמנחים אותנו והצוות.",
  },
  "/gallery": {
    title: "גלריית תמונות | המוסך של צביקה – ירושלים",
    description: "צפו בתמונות מהמוסך של צביקה בגבעת שאול, ירושלים. מוסך מקצועי, מצויד ומסודר עם ציוד מתקדם לטיפול ברכב.",
  },
  "/contact": {
    title: "צור קשר | המוסך של צביקה – ירושלים",
    description: "צרו קשר עם המוסך של צביקה בגבעת שאול, ירושלים. טלפון: 02-6514446, וואטסאפ: 052-651-4446. רחוב האופה 4. שעות פעילות: א׳–ה׳ 08:00–16:30.",
  },
  "/faq": {
    title: "שאלות נפוצות | המוסך של צביקה – ירושלים",
    description: "תשובות לשאלות נפוצות על שירותי המוסך של צביקה: עלויות טיפול, הכנה לטסט, זמני טיפול, סוגי רכבים ועוד. מוסך מקצועי בירושלים מאז 1993.",
  },
  "/blog": {
    title: "בלוג | טיפים ומדריכים לטיפול ברכב – המוסך של צביקה",
    description: "מאמרים מקצועיים על טיפול ברכב: איך לבחור מוסך, הכנה לטסט, החלפת שמן, מיזוג אוויר, סימני אזהרה ועוד. טיפים מהמוסך של צביקה בירושלים.",
  },
  "/privacy": {
    title: "מדיניות פרטיות | המוסך של צביקה – אור-צת שירותי רכב",
    description: "מדיניות הפרטיות של המוסך של צביקה – אור-צת שירותי רכב. מידע על איסוף, שימוש והגנה על מידע אישי בהתאם לחוק הגנת הפרטיות.",
  },
  "/accessibility": {
    title: "הצהרת נגישות | המוסך של צביקה – אור-צת שירותי רכב",
    description: "הצהרת הנגישות של אתר המוסך של צביקה. מחויבות להנגשת האתר לאנשים עם מוגבלויות בהתאם לתקנות הנגישות.",
  },
};

function getBlogArticleSeo(pathname: string): PageSeo {
  const slug = decodeURIComponent(pathname.replace("/blog/", ""));
  const titleFromSlug = slug.replace(/-/g, " ");
  return {
    title: `${titleFromSlug} | בלוג המוסך של צביקה`,
    description: `קראו על ${titleFromSlug}. מאמר מקצועי מהבלוג של המוסך של צביקה – מוסך מקצועי בירושלים עם מעל 30 שנות ניסיון.`,
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
    const ogUpdates: Record<string, string> = {
      "og:title": seo.title,
      "og:description": seo.description,
      "og:url": canonicalUrl,
    };
    for (const [property, content] of Object.entries(ogUpdates)) {
      let ogMeta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (ogMeta) {
        ogMeta.content = content;
      }
    }

    // Twitter tags
    const twitterUpdates: Record<string, string> = {
      "twitter:title": seo.title,
      "twitter:description": seo.description,
    };
    for (const [name, content] of Object.entries(twitterUpdates)) {
      let twMeta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (twMeta) {
        twMeta.content = content;
      }
    }
  }, [pathname]);
}
