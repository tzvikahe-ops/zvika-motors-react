import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { blogArticles } from "@/data/blog-articles";

const BASE_URL = "https://ortzat.co.il";
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

function getRoutePathname(pathname: string): string {
  let normalized = pathname.replace(/\/index\.html$/, "");
  if (normalized === "") normalized = "/";
  if (normalized !== "/" && !normalized.endsWith("/")) {
    normalized = `${normalized}/`;
  }
  return normalized;
}

function ensureTrailingSlash(pathname: string): string {
  let normalized = pathname.replace(/\/index\.html$/, "");
  if (normalized === "") normalized = "/";
  if (!normalized.startsWith("/")) normalized = `/${normalized}`;
  if (normalized !== "/" && !normalized.endsWith("/")) {
    normalized = `${normalized}/`;
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
      "המוסך של צביקה (אור-צת) בגבעת שאול, ירושלים. מוסך משפחתי מאז 1993. 98% לקוחות חוזרים, דירוג 4.8 בגוגל, מעל 30 שנה של ניסיון. אור-צת שירותי רכב.",
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
  },
  "/image-generator": {
    title: "מחולל תמונות | המוסך של צביקה",
    description: "מחולל תמונות פנימי.",
    robots: "noindex, nofollow",
  },
  "/services/diagnostics": {
    title: "דיאגנוסטיקה ממוחשבת לרכב בירושלים | המוסך של צביקה",
    description:
      "אבחון תקלות מדויק עם ציוד סריקה מתקדם. סריקת מחשב רכב, קודי תקלה, בדיקת חיישנים ומערכות בטיחות. המוסך של צביקה בירושלים.",
    breadcrumbName: "דיאגנוסטיקה ממוחשבת",
  },
  "/services/ac": {
    title: "טיפול במיזוג אוויר לרכב בירושלים | המוסך של צביקה",
    description:
      "מילוי גז מזגן, איתור דליפות, תיקון מדחס ומערכת קירור לרכב. טיפול מקצועי במיזוג אוויר במוסך של צביקה בירושלים.",
    breadcrumbName: "מיזוג אוויר לרכב",
  },
  "/services/test": {
    title: "הכנה לטסט שנתי בירושלים | המוסך של צביקה",
    description:
      "בדיקה מקיפה לפני מבחן רישוי שנתי כולל תיקון ממצאים במקום. מעבר בפעם הראשונה בלי הפתעות. המוסך של צביקה בירושלים.",
    breadcrumbName: "הכנה לטסט שנתי",
  },
  "/services/general": {
    title: "מכונאות רכב כללית בירושלים | המוסך של צביקה",
    description:
      "טיפולים שוטפים, החלפת שמנים ופילטרים, תיקוני מנוע ובלמים לכל סוגי הרכבים. מוסך מקצועי בירושלים עם מעל 30 שנות ניסיון. 02-6514446.",
    breadcrumbName: "מכונאות רכב כללית",
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
  } else if (pathname.startsWith("/services/")) {
    items.push({ "@type": "ListItem", position: 2, name: "שירותים", item: `${BASE_URL}/services/` });
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
  const routePathname = getRoutePathname(pathname);
  const canonicalPathname = ensureTrailingSlash(pathname);

  const seo = routePathname.startsWith("/blog/")
    ? getBlogArticleSeo(routePathname)
    : seoConfig[routePathname] || seoConfig["/"];

  const canonicalUrl = `${BASE_URL}${canonicalPathname}`;
  const ogImage = seo.ogImage || DEFAULT_OG_IMAGE;
  const ogType = seo.ogType || "website";
  const robotsContent = seo.robots || "index, follow";
  const breadcrumb = buildBreadcrumbSchema(routePathname, seo);

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

      {/* FAQPage structured data for AC article */}
      {routePathname === "/blog/מתי-לבדוק-מזגן-ברכב" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "כמה עולה תיקון מזגן רכב?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "נכון ל-2025: החלפת פילטר קבינה 100-200 שקל. איתור דליפה ומילוי גז 400-800 שקל. החלפת מדחס מתחיל מ-1,500 שקל ברכבים רגילים ועד 6,000-8,000 שקל ברכבי יוקרה אירופאיים.",
                },
              },
              {
                "@type": "Question",
                name: "מה עושים כשהמזגן לא מקרר?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "לא למלא גז לפני אבחון. תביאו לבדיקה. הטכנאי יבדוק לחצים, יאתר דליפה אם יש, ויאבחן את הרכיב התקול. מילוי גז ללא אבחון הוא פלסטר על פצע.",
                },
              },
              {
                "@type": "Question",
                name: "כמה זמן לוקח לאתר דליפת גז במזגן רכב?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "בדיקה בסיסית עם גלאי אלקטרוני לוקחת 20-30 דקות. איתור מדויק עם צבע UV כשעה. טיפול בדליפה עצמה תלוי במיקומה.",
                },
              },
              {
                "@type": "Question",
                name: "האם אפשר להסתדר בלי מזגן בקיץ ירושלמי?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "בטמפרטורות מעל 35 מעלות חום פוגע בריכוז ובזמן תגובה. זו בעיה בטיחותית אמיתית, לא עניין של נוחות.",
                },
              },
              {
                "@type": "Question",
                name: "מזגן שעובד בנסיעה אבל לא בעמידה, האם זו תקלה רצינית?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "כן. זה סימן קלאסי למעבה סתום או מאוורר תקול. אם לא מטפלים, המדחס עובד בעומס יתר ועלול להינזק.",
                },
              },
            ],
          })}
        </script>
      )}

      {/* FAQPage structured data for garage guide article */}
      {routePathname === "/blog/musach-mumla-yerushalayim" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "כמה עולה אבחון רכב במוסך בירושלים?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "בדיקה דיאגנוסטית ממוחשבת עולה בדרך כלל 150 עד 350 שקל, תלוי במורכבות. מוסכים רבים מקזזים את עלות האבחון מהתיקון אם מבצעים אותו אצלם.",
                },
              },
              {
                "@type": "Question",
                name: "האם חייב לטפל במוסך מורשה יצרן כדי לשמור על אחריות?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "לא. על פי חוק הגנת הצרכן (תיקון מס' 39, משנת 2005), אין חובה לטפל במוסך היבואן בלבד. אפשר לטפל בכל מוסך מוסמך, כל עוד השתמשו בחלקים תקניים ובוצעו הטיפולים לפי לוח הזמנים של היצרן.",
                },
              },
              {
                "@type": "Question",
                name: "כמה ביקורות גוגל מספיקות כדי לסמוך על מוסך?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "מעל 50 ביקורות עם ממוצע מעל 4.3, עם תוכן ספציפי, זה סימן טוב. ביקורות שנכתבו לאורך שנים אמינות יותר מגל של ביקורות בשבוע אחד.",
                },
              },
              {
                "@type": "Question",
                name: "מה ההבדל בין חלק מקורי לאפטר מרקט?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "חלק מקורי (OEM) מיוצר על ידי היצרן או ספק מורשה שלו. חלק אפטר מרקט מיוצר על ידי חברה עצמאית. גם חלקים סינים באיכות גבוהה עם תקנים אירופאים (ECE, TÜV) עוברים בדיקות קפדניות ובמקרים רבים אין שום בעיה עמם. השאלה הנכונה היא לא מקורי או לא, אלא מה הספק ומה התקן.",
                },
              },
              {
                "@type": "Question",
                name: "מה עושים אם המוסך תיקן ולא פתר את הבעיה?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "חזרו לאותו מוסך ודרשו הסבר. אם יש אחריות, הם מחויבים לתקן שנית ללא תשלום. אם המוסך מסרב, ניתן להגיש תלונה לרשות להגנת הצרכן או לפנות לבית משפט לתביעות קטנות עד 35,000 שקל ללא עורך דין.",
                },
              },
            ],
          })}
        </script>
      )}

      {/* FAQPage structured data for spare parts article */}
      {routePathname === "/blog/מקורי-מול-גנרי-חלקי-חילוף-לרכב" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "האם גנרי איכותי מקצר את חיי הרכב?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "לא בהכרח. חלק גנרי מיצרן מוכר בעל תו תקן מתפקד ברוב המקרים לאורך אותה תקופה כמו המקורי. הסיכון הוא בגנרי אנונימי ללא תקן מוכר.",
                },
              },
              {
                "@type": "Question",
                name: "איך יודעים אם ספק גנרי אמין?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "מותגים כמו Bosch, Brembo, Valeo, Delphi, Mahle, Textar ו-FEBI מייצרים חלקים גם לחברות הרכב וגם לשוק החופשי. אלה ספקים שניתן לסמוך עליהם.",
                },
              },
              {
                "@type": "Question",
                name: "האם שימוש בגנרי מבטל את אחריות הרכב?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "בישראל, לפי חוק הגנת הצרכן, היצרן אינו רשאי לבטל אחריות רק בגלל שימוש בחלק חלופי, אלא אם הוכח שאותו חלק גרם לנזק הספציפי.",
                },
              },
              {
                "@type": "Question",
                name: "מה ההבדל בין OE לבין OEM?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "OEM הוא החלק שמגיע עם לוגו יצרן הרכב דרך יבואן מורשה. OE הוא אותו חלק מאותו מפעל, ללא הלוגו, בדרך כלל ב-20-40% פחות.",
                },
              },
            ],
          })}
        </script>
      )}

      {/* Article + FAQPage + BreadcrumbList structured data for check engine article */}
      {routePathname === "/blog/נורת-צק-אנגין-מה-לעשות" && (() => {
        const articleUrl = `https://ortzat.co.il/blog/${encodeURIComponent("נורת-צק-אנגין-מה-לעשות")}/`;
        return (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  headline: "נורת צ'ק אנג'ין נדלקה? המדריך המלא למה זה קורה ומה לעשות",
                  description: "נורת צ'ק אנג'ין נדלקה? מסביר מה זה אומר, מה ההבדל בין נורה דולקת למהבהבת, 5 הסיבות הנפוצות ביותר, ומה לעשות עכשיו. המוסך של צביקה | אור-צת, גבעת שאול ירושלים.",
                  datePublished: "2025-03-28T00:00:00+02:00",
                  dateModified: "2026-04-06T00:00:00+02:00",
                  inLanguage: "he-IL",
                  author: {
                    "@type": "Person",
                    name: "צביקה",
                    jobTitle: "בעל מוסך",
                    worksFor: {
                      "@type": "AutoRepair",
                      name: "המוסך של צביקה (אור-צת)",
                      url: "https://ortzat.co.il",
                    },
                  },
                  publisher: {
                    "@type": "AutoRepair",
                    name: "המוסך של צביקה (אור-צת)",
                    url: "https://ortzat.co.il",
                    logo: { "@type": "ImageObject", url: "https://ortzat.co.il/logo.png" },
                  },
                  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
                  keywords: ["נורת צ'ק אנג'ין", "check engine", "בדיקה ממוחשבת", "OBD", "מוסך ירושלים", "גבעת שאול", "חיישן חמצן", "ממיר קטליטי", "המוסך של צביקה", "אור-צת"],
                  articleSection: "תקלות ואבחון",
                  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".article-summary", ".faq-answer"] },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    { "@type": "Question", name: "מה זה נורת צ'ק אנג'ין?", acceptedAnswer: { "@type": "Answer", text: "נורת הצ'ק אנג'ין היא חלק ממערכת האבחון הממוחשבת של הרכב (OBD). כשמחשב הרכב מזהה תקלה באחת המערכות, הוא מדליק את הנורה ושומר קוד תקלה בזיכרון. הנורה לא מציינת את סוג התקלה, אלא מסמנת שיש משהו שצריך לבדוק." } },
                    { "@type": "Question", name: "מה ההבדל בין נורת צ'ק אנג'ין דולקת למהבהבת?", acceptedAnswer: { "@type": "Answer", text: "נורה דולקת קבוע מעידה על תקלה שאינה דחופה ברמת שניות, אך כדאי לבדוק בקרוב. נורה מהבהבת היא סימן לתקלה חמורה יותר, לרוב מיספייר (שריפה לא תקינה בגליל). במצב של נורה מהבהבת יש להפחית מהירות, להימנע מלחיצה חזקה על הגז, ולהגיע למוסך בהקדם כדי למנוע נזק לממיר הקטליטי." } },
                    { "@type": "Question", name: "מה הסיבות הנפוצות לנורת צ'ק אנג'ין?", acceptedAnswer: { "@type": "Answer", text: "הסיבות הנפוצות ביותר: חיישן חמצן (O2 Sensor) תקול, פקק מיכל הדלק רופף, בעיה בסלילי הצתה או מצתים, ממיר קטליטי פגום, ובעיה במערכת אידוי דלק (EVAP). בלמעלה מ-40% מהמקרים מדובר בתקלה פשוטה שעולה עד כמה מאות שקלים לתיקון." } },
                    { "@type": "Question", name: "האם אפשר להמשיך לנסוע כשנורת צ'ק אנג'ין דולקת?", acceptedAnswer: { "@type": "Answer", text: "אם הנורה דולקת קבוע ולא מהבהבת, ניתן להמשיך לנסוע בזהירות ולתאם בדיקה בימים הקרובים. אם הנורה מהבהבת, יש להפחית מהירות מיד ולהגיע למוסך בהקדם. נסיעה ממושכת עם נורה מהבהבת עלולה לגרום נזק לממיר הקטליטי, שתיקונו עולה אלפי שקלים." } },
                    { "@type": "Question", name: "כמה עולה בדיקה ממוחשבת לנורת צ'ק אנג'ין?", acceptedAnswer: { "@type": "Answer", text: "בדיקת מחשב (סריקת OBD) היא הצעד הראשון והחשוב ביותר. הסריקה מוציאה את קודי התקלה ומראה מה המערכת מדווחת. לאחר הסריקה מציגים הערכת מחיר לפני שמתחילים לעבוד. ניתן לתאם בדיקה ממוחשבת במוסך של צביקה (אור-צת) בגבעת שאול, ירושלים." } },
                    { "@type": "Question", name: "מה לעשות כשנורת צ'ק אנג'ין נדלקת?", acceptedAnswer: { "@type": "Answer", text: "1. לא להיבהל. 2. לבדוק שפקק הדלק סגור היטב. 3. לשים לב אם הנורה דולקת קבוע או מהבהבת. 4. אם מהבהבת, להפחית מהירות ולהגיע למוסך מיד. 5. אם דולקת קבוע, לתאם בדיקה ממוחשבת בימים הקרובים. לא למחוק את קוד התקלה בלי לטפל בבעיה." } },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "בית", item: "https://ortzat.co.il" },
                    { "@type": "ListItem", position: 2, name: "בלוג", item: "https://ortzat.co.il/blog" },
                    { "@type": "ListItem", position: 3, name: "נורת צ'ק אנג'ין נדלקה?", item: articleUrl },
                  ],
                },
              ],
            })}
          </script>
        );
      })()}

      {/* Article + FAQPage + BreadcrumbList structured data for car warning signs article */}
      {routePathname === "/blog/סימנים-שהרכב-צריך-טיפול" && (() => {
        const articleUrl = "https://ortzat.co.il/blog/car-warning-signs";
        return (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  headline: "8 סימנים שהרכב צריך טיפול מיידי במוסך (ואיך לזהות אותם)",
                  description: "רכב שולח סימנים לפני שמתקלקל. נורת צ'ק אנג'ין, רעשים, דליפות, בלמים רכים - 8 סימנים שחייבים להכיר. המוסך של צביקה | אור-צת, גבעת שאול ירושלים.",
                  datePublished: "2026-03-15T00:00:00+02:00",
                  dateModified: "2026-04-06T00:00:00+02:00",
                  inLanguage: "he-IL",
                  author: {
                    "@type": "Person",
                    name: "צביקה",
                    jobTitle: "בעל מוסך",
                    worksFor: { "@type": "AutoRepair", name: "המוסך של צביקה (אור-צת)", url: "https://ortzat.co.il" },
                  },
                  publisher: {
                    "@type": "AutoRepair",
                    name: "המוסך של צביקה (אור-צת)",
                    url: "https://ortzat.co.il",
                    logo: { "@type": "ImageObject", url: "https://ortzat.co.il/logo.png" },
                  },
                  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
                  keywords: ["סימנים לתקלה ברכב", "טיפול מיידי ברכב", "נורת אזהרה", "בלמים רכים", "דליפת שמן", "מוסך ירושלים", "גבעת שאול", "המוסך של צביקה", "אור-צת"],
                  articleSection: "תקלות ואבחון",
                  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".article-summary", ".faq-answer"] },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    { "@type": "Question", name: "מה הסימנים שהרכב צריך טיפול מיידי?", acceptedAnswer: { "@type": "Answer", text: "8 הסימנים העיקריים: נורת צ'ק אנג'ין שנדלקת, רעשים חריגים מהמנוע או הבלמים, רטט בהגה או בגוף הרכב, בלמים שמגיבים לאט, דליפות מתחת לרכב, צריכת דלק גבוהה מהרגיל, מזגן שלא מקרר, וקושי בהתנעה. כל אחד מהסימנים האלה מצריך בדיקה במוסך." } },
                    { "@type": "Question", name: "מה הסכנה בהתעלמות מסימני אזהרה ברכב?", acceptedAnswer: { "@type": "Answer", text: "נתוני חברות הביטוח בישראל מראים שכ-60% מהתקלות שמביאות רכב לעצירה בצד הדרך היו ניתנות למניעה בטיפול מוקדם. נורת מנוע שמתעלמים ממנה יכולה להפוך תקלה של 300 שקלים לנזק של אלפי שקלים. הבלמים והצמיגים אחראים לכ-45% מתאונות הדרכים הקשורות לתקלה מכנית." } },
                    { "@type": "Question", name: "מה עושים כשנשמע רעש חריג מהרכב?", acceptedAnswer: { "@type": "Answer", text: "רעש שלא היה קודם הוא תמיד סיבה לבדיקה. צרירות בבלימה מעידות על בלמים שחוקים, חריקות מהמנוע יכולות להעיד על בעיה בהיגוי או במנוע, נקישות בסיבוב ההגה עלולות להצביע על בעיה בפרזול. כדאי לתאם בדיקה במוסך בהקדם." } },
                    { "@type": "Question", name: "מה אומר רטט בהגה או בגוף הרכב?", acceptedAnswer: { "@type": "Answer", text: "רטט חריג יכול להעיד על בעיה בגלגלים, בבלמים, או במערכת ההיגוי. רטט בהגה במהירות גבוהה לרוב מצריך איזון גלגלים. רטט שמורגש בבלימה עלול להעיד על דיסקים שחוקים שמצריכים החלפה." } },
                    { "@type": "Question", name: "מה המשמעות של כתם מתחת לרכב?", acceptedAnswer: { "@type": "Answer", text: "כתמים על הקרקע מתחת לרכב יכולים להעיד על דליפת שמן, נוזל קירור, או נוזל בלמים. כתם ירוק הוא בדרך כלל נוזל קירור, כתם כהה הוא שמן מנוע. בכל מקרה של דליפה כדאי להגיע למוסך לבדיקה." } },
                    { "@type": "Question", name: "מדוע הרכב פתאום צורך יותר דלק?", acceptedAnswer: { "@type": "Answer", text: "עלייה פתאומית בצריכת הדלק יכולה להעיד על בעיה במערכת ההזרקה, בחיישני המנוע, או במסנן האוויר. בדיקה ממוחשבת יכולה לאתר את הסיבה המדויקת ולמנוע המשך בזבוז דלק." } },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "בית", item: "https://ortzat.co.il" },
                    { "@type": "ListItem", position: 2, name: "בלוג", item: "https://ortzat.co.il/blog" },
                    { "@type": "ListItem", position: 3, name: "8 סימנים שהרכב צריך טיפול מיידי", item: articleUrl },
                  ],
                },
              ],
            })}
          </script>
        );
      })()}

      {/* Speakable for FAQ page */}
      {routePathname === "/faq" && (
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

      {/* Home page structured data */}
      {routePathname === "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AutoRepair",
                name: "המוסך של צביקה (אור-צת)",
                alternateName: ["אור-צת שירותי רכב", "מוסך אור צת", "אור צת"],
                description: "מוסך משפחתי מקצועי בגבעת שאול, ירושלים. מעל 30 שנה של ניסיון, 98% לקוחות חוזרים, דירוג 4.8 בגוגל. מתמחים בדיאגנוסטיקה ממוחשבת, מכונאות כללית, בלמים, מזגן רכב וטיפולים תקופתיים.",
                url: "https://ortzat.co.il",
                logo: "https://ortzat.co.il/logo.png",
                image: "https://ortzat.co.il/logo.png",
                telephone: "+972-2-6514446",
                foundingDate: "1993",
                numberOfEmployees: { "@type": "QuantitativeValue", value: 4 },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "האופה 4",
                  addressLocality: "ירושלים",
                  addressRegion: "Jerusalem",
                  postalCode: "9546433",
                  addressCountry: "IL",
                },
                geo: { "@type": "GeoCoordinates", latitude: 31.7888, longitude: 35.1878 },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                    opens: "08:00",
                    closes: "16:30",
                  },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "107",
                  bestRating: "5",
                  worstRating: "1",
                },
                priceRange: "₪₪",
                areaServed: ["ירושלים", "גבעת שאול", "מבשרת ציון", "מעלה אדומים", "בית שמש"],
                sameAs: ["https://www.facebook.com/ortzat", "https://g.page/ortzat"],
              },
              {
                "@type": "Person",
                name: "צביקה הרשקוביץ",
                jobTitle: "בעל מוסך ומנהל",
                description: "צביקה הרשקוביץ מנהל את המוסך של צביקה (אור-צת) בגבעת שאול מאז 2011. גדל במוסך של אביו יהושע מ-1993, מתמחה בדיאגנוסטיקה ממוחשבת ואבחון תקלות מורכבות.",
                worksFor: { "@type": "AutoRepair", name: "המוסך של צביקה (אור-צת)" },
                knowsAbout: ["דיאגנוסטיקה ממוחשבת", "מכונאות רכב", "אבחון תקלות", "טיפול תקופתי לרכב"],
              },
              {
                "@type": "WebPage",
                "@id": "https://ortzat.co.il/",
                name: "המוסך של צביקה (אור-צת) | מוסך מקצועי בירושלים",
                description: "המוסך של צביקה (אור-צת) - מוסך מקצועי בירושלים, גבעת שאול. מעל 30 שנות ניסיון במכונאות רכב, דיאגנוסטיקה ממוחשבת, מיזוג אוויר והכנה לטסט.",
                inLanguage: "he-IL",
                url: "https://ortzat.co.il/",
                speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".hero-stats"] },
              },
            ],
          })}
        </script>
      )}

      {/* About page structured data */}
      {routePathname === "/about" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AutoRepair",
                name: "המוסך של צביקה (אור-צת)",
                alternateName: ["אור-צת שירותי רכב", "מוסך אור צת", "אור צת"],
                description: "מוסך משפחתי מקצועי בגבעת שאול, ירושלים. מעל 30 שנה של ניסיון, 98% לקוחות חוזרים, דירוג 4.8 בגוגל. מתמחים בדיאגנוסטיקה ממוחשבת, מכונאות כללית, בלמים, מזגן רכב וטיפולים תקופתיים.",
                url: "https://ortzat.co.il",
                logo: "https://ortzat.co.il/logo.png",
                image: "https://ortzat.co.il/logo.png",
                telephone: "+972-2-6514446",
                foundingDate: "1993",
                numberOfEmployees: { "@type": "QuantitativeValue", value: 4 },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "האופה 4",
                  addressLocality: "ירושלים",
                  addressRegion: "Jerusalem",
                  postalCode: "9546433",
                  addressCountry: "IL",
                },
                geo: { "@type": "GeoCoordinates", latitude: 31.7888, longitude: 35.1878 },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                    opens: "08:00",
                    closes: "16:30",
                  },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "107",
                  bestRating: "5",
                  worstRating: "1",
                },
                priceRange: "₪₪",
                areaServed: ["ירושלים", "גבעת שאול", "מבשרת ציון", "מעלה אדומים", "בית שמש"],
                sameAs: ["https://www.facebook.com/ortzat", "https://g.page/ortzat"],
              },
              {
                "@type": "Person",
                name: "צביקה הרשקוביץ",
                jobTitle: "בעל מוסך ומנהל",
                description: "צביקה הרשקוביץ מנהל את המוסך של צביקה (אור-צת) בגבעת שאול מאז 2011. גדל במוסך של אביו יהושע מ-1993, מתמחה בדיאגנוסטיקה ממוחשבת ואבחון תקלות מורכבות.",
                worksFor: { "@type": "AutoRepair", name: "המוסך של צביקה (אור-צת)" },
                knowsAbout: ["דיאגנוסטיקה ממוחשבת", "מכונאות רכב", "אבחון תקלות", "טיפול תקופתי לרכב"],
              },
              {
                "@type": "WebPage",
                "@id": "https://ortzat.co.il/about",
                name: "אודות המוסך של צביקה (אור-צת) | מוסך משפחתי בירושלים מאז 1993",
                description: "הכירו את המוסך של צביקה (אור-צת) בגבעת שאול, ירושלים. מוסך משפחתי שהוקם ב-1993 על ידי יהושע הרשקוביץ, כיום מנוהל על ידי צביקה. 98% לקוחות חוזרים, 4.8 בגוגל.",
                inLanguage: "he-IL",
                url: "https://ortzat.co.il/about",
                speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".hero-stats", ".about-summary"] },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "בית", item: "https://ortzat.co.il" },
                  { "@type": "ListItem", position: 2, name: "אודות", item: "https://ortzat.co.il/about" },
                ],
              },
            ],
          })}
        </script>
      )}
    </Helmet>
  );
}
