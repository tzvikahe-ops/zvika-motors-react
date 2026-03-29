import { lazy, Suspense } from "react";
import HeroSection from "./home/HeroSection";
import ServiceStrip from "./home/ServiceStrip";
import LazySection from "./LazySection";

const WhyUsSection = lazy(() => import("./home/WhyUsSection"));
const ServicesSection = lazy(() => import("./home/ServicesSection"));
const ReviewsSection = lazy(() => import("./home/ReviewsSection"));
const StorySection = lazy(() => import("./home/StorySection"));
const CTASection = lazy(() => import("./home/CTASection"));

import type { Page } from "@/types/page";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  name: "המוסך של צביקה – אור-צת שירותי רכב",
  image: "https://www.ortzat.co.il/og-image.jpg",
  url: "https://www.ortzat.co.il",
  telephone: "02-6514446",
  email: "ortzat1@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "האופה 4",
    addressLocality: "ירושלים",
    addressRegion: "גבעת שאול",
    postalCode: "9546313",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.7857,
    longitude: 35.1924,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  priceRange: "₪₪",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "108",
  },
  sameAs: ["https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"],
  description:
    "מוסך מקצועי בירושלים, גבעת שאול. מעל 30 שנות ניסיון במכונאות רכב, דיאגנוסטיקה ממוחשבת, מיזוג אוויר והכנה לטסט.",
  foundingDate: "1993",
  founder: {
    "@type": "Person",
    name: "יהושע הרשקוביץ",
  },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "כמה עולה טיפול שוטף לרכב?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "המחיר תלוי בסוג הרכב, בשנת הייצור ובסוג הטיפול הנדרש. טיפול שוטף בסיסי (החלפת שמן ופילטרים) עולה בדרך כלל בין 250 ל-500 ש\"ח. אצלנו במוסך בגבעת שאול, ירושלים, תמיד נציג מראש את המחיר המדויק לפני שמתחילים לעבוד.",
      },
    },
    {
      "@type": "Question",
      name: "כל כמה זמן צריך לעשות טיפול לרכב?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ההמלצה הכללית היא טיפול כל 10,000-15,000 ק\"מ או פעם בשנה, לפי המוקדם מביניהם. רכבים ישנים יותר או רכבים שנוסעים בעיקר בעיר (כמו בירושלים) ייתכן שיצטרכו טיפולים תכופים יותר.",
      },
    },
    {
      "@type": "Question",
      name: "אתם מטפלים בכל סוגי הרכבים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן. אנחנו מטפלים ברכבים פרטיים מכל היצרנים: יונדאי, טויוטה, מאזדה, קיה, סקודה, פולקסווגן, ועוד. הציוד הממוחשב שלנו מתאים לכל סוגי הרכבים ומאפשר אבחון מדויק.",
      },
    },
    {
      "@type": "Question",
      name: "מה ההבדל בין מוסך מורשה למוסך עצמאי?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מוסך מורשה עובד עם יבואן ספציפי ומחויב למחירון שלו. מוסך עצמאי כמו שלנו יכול לטפל בכל סוגי הרכבים, להשתמש בחלקים איכותיים, ולהציע מחירים תחרותיים יותר. עם ניסיון של מעל 30 שנה וציוד דיאגנוסטי מתקדם, אנחנו מספקים את אותה רמת מקצועיות.",
      },
    },
    {
      "@type": "Question",
      name: "האם יש אחריות על העבודה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן. אנחנו נותנים אחריות על כל עבודה שאנחנו מבצעים, כולל חלקי חילוף. אם משהו לא תקין אחרי הטיפול, תחזרו אלינו ונטפל בזה ללא עלות נוספת.",
      },
    },
  ],
};

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection setPage={setPage} />
      <ServiceStrip setPage={setPage} />

      {/* Below-fold sections deferred via IntersectionObserver to reduce TBT */}
      <LazySection rootMargin="300px" minHeight="400px">
        <Suspense fallback={null}>
          <WhyUsSection />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px" minHeight="300px">
        <Suspense fallback={null}>
          <ServicesSection setPage={setPage} />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px" minHeight="300px">
        <Suspense fallback={null}>
          <ReviewsSection />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px" minHeight="200px">
        <Suspense fallback={null}>
          <StorySection />
          <CTASection />
        </Suspense>
      </LazySection>
    </div>
  );
}
