import HeroSection from "./home/HeroSection";
import ServiceStrip from "./home/ServiceStrip";
import WhyUsSection from "./home/WhyUsSection";
import ServicesSection from "./home/ServicesSection";
import ReviewsSection from "./home/ReviewsSection";
import StorySection from "./home/StorySection";
import CTASection from "./home/CTASection";

import type { Page } from "@/types/page";

export default function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
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
