import { useLayoutEffect } from "react";
import { usePageNavigation } from "@/hooks/use-page-navigation";
import { useSeo } from "@/hooks/use-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import ServicesPage from "@/components/ServicesPage";
import GalleryPage from "@/components/GalleryPage";
import ContactPage from "@/components/ContactPage";
import AboutPage from "@/components/AboutPage";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import AccessibilityStatement from "@/components/AccessibilityStatement";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import MapSection from "@/components/MapSection";
import ImageGeneratorPage from "@/components/ImageGeneratorPage";
import FAQPage from "@/components/FAQPage";
import BlogPage from "@/components/BlogPage";
import BlogArticlePage from "@/components/BlogArticlePage";
import { WhatsAppIcon } from "@/components/Icons";

const Index = () => {
  const { currentPage, articleSlug, setPage } = usePageNavigation();
  useSeo();

  useLayoutEffect(() => {
    let timeoutId: number | undefined;
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (currentPage === "services") {
      requestAnimationFrame(() => {
        const el = document.getElementById("services-content");
        if (el) {
          const navHeight = 68;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, left: 0, behavior: "auto" });
        }
      });
    } else {
      resetScroll();
      requestAnimationFrame(resetScroll);
      timeoutId = window.setTimeout(resetScroll, 60);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [currentPage, articleSlug]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar currentPage={currentPage} setPage={setPage} />

      <div className={currentPage === "home" ? "block" : "hidden"} aria-hidden={currentPage !== "home"}>
        <HomePage setPage={setPage} />
      </div>
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "gallery" && <GalleryPage />}
      {currentPage === "contact" && <ContactPage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "privacy" && <PrivacyPolicy />}
      {currentPage === "accessibility" && <AccessibilityStatement />}
      {currentPage === "image-generator" && <ImageGeneratorPage />}
      {currentPage === "faq" && <FAQPage setPage={setPage} />}
      {currentPage === "blog" && <BlogPage setPage={setPage} />}
      {currentPage === "blog-article" && <BlogArticlePage slug={articleSlug} setPage={setPage} />}
      {(currentPage === "home" || currentPage === "contact") && <MapSection />}
      <Footer setPage={setPage} />

      <CookieConsent setPage={setPage} />
      <AccessibilityWidget setPage={setPage} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972526514446"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-6 left-5 z-50 w-11 h-11 bg-[#25D366] rounded-md flex items-center justify-center shadow-[var(--shadow-lg)] hover:scale-105 transition-all duration-200"
        aria-label="שלח הודעה בוואטסאפ"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default Index;
