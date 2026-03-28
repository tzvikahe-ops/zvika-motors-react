import HeroSection from "./home/HeroSection";
import ServiceStrip from "./home/ServiceStrip";
import WhyUsSection from "./home/WhyUsSection";
import ServicesSection from "./home/ServicesSection";
import ReviewsSection from "./home/ReviewsSection";
import StorySection from "./home/StorySection";
import CTASection from "./home/CTASection";

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
  sameAs: ["https://wa.me/972526514446"],
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
