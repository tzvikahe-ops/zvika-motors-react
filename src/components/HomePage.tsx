import HeroSection from "./home/HeroSection";
import InfoStrip from "./home/InfoStrip";
import ServicesSection from "./home/ServicesSection";
import WhyUsSection from "./home/WhyUsSection";
import ReviewsSection from "./home/ReviewsSection";
import CTASection from "./home/CTASection";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <HeroSection setPage={setPage} />
      <InfoStrip />
      <ServicesSection setPage={setPage} />
      <WhyUsSection />
      <ReviewsSection />
      <CTASection setPage={setPage} />
    </div>
  );
}
