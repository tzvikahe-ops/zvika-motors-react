import HeroSection from "./home/HeroSection";
import ServiceStrip from "./home/ServiceStrip";
import WhyUsSection from "./home/WhyUsSection";
import ServicesSection from "./home/ServicesSection";
import ReviewsSection from "./home/ReviewsSection";
import CTASection from "./home/CTASection";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <HeroSection setPage={setPage} />
      <ServiceStrip setPage={setPage} />
      <WhyUsSection />
      <ServicesSection setPage={setPage} />
      <ReviewsSection />
      <CTASection setPage={setPage} />
    </div>
  );
}
