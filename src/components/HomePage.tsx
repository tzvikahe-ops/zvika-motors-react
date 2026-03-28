import { lazy, Suspense } from "react";
import HeroSection from "./home/HeroSection";
import ServiceStrip from "./home/ServiceStrip";

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

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection setPage={setPage} />
      <ServiceStrip setPage={setPage} />
      <WhyUsSection />
      <ServicesSection setPage={setPage} />
      <ReviewsSection />
      <StorySection />
      <CTASection />
    </div>
  );
}
