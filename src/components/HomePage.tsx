import HeroSection from "./home/HeroSection";
import StatsStrip from "./home/StatsStrip";
import ServicesSection from "./home/ServicesSection";
import WhyUsSection from "./home/WhyUsSection";
import ReviewsSection from "./home/ReviewsSection";
import CTASection from "./home/CTASection";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <HeroSection setPage={setPage} />
      <StatsStrip />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-section-border to-transparent" />

      <ServicesSection setPage={setPage} />

      <WhyUsSection />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-section-border to-transparent" />

      <ReviewsSection />
      <CTASection setPage={setPage} />
    </div>
  );
}
