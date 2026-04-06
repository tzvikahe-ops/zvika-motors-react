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

      {/* FAQPage structured data for AC article */}
      {normalizedPathname === "/blog/מתי-לבדוק-מזגן-ברכב" && (
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
      {normalizedPathname === "/blog/musach-mumla-yerushalayim" && (
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
      {normalizedPathname === "/blog/מקורי-מול-גנרי-חלקי-חילוף-לרכב" && (
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
