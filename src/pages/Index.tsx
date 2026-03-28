import { useLayoutEffect, useEffect, lazy, Suspense } from "react";
import { usePageNavigation } from "@/hooks/use-page-navigation";
import { initScrollTracking, resetScrollTracking, trackWhatsAppClick } from "@/lib/analytics";
import { useSeo } from "@/hooks/use-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { WhatsAppIcon } from "@/components/Icons";

const ServicesPage = lazy(() => import("@/components/ServicesPage"));
const GalleryPage = lazy(() => import("@/components/GalleryPage"));
const ContactPage = lazy(() => import("@/components/ContactPage"));
const AboutPage = lazy(() => import("@/components/AboutPage"));
const PrivacyPolicy = lazy(() => import("@/components/PrivacyPolicy"));
const AccessibilityStatement = lazy(() => import("@/components/AccessibilityStatement"));
const MapSection = lazy(() => import("@/components/MapSection"));
const ImageGeneratorPage = lazy(() => import("@/components/ImageGeneratorPage"));
const FAQPage = lazy(() => import("@/components/FAQPage"));
const BlogPage = lazy(() => import("@/components/BlogPage"));
const BlogArticlePage = lazy(() => import("@/components/BlogArticlePage"));

const Index = () => {
  const { currentPage, articleSlug, setPage } = usePageNavigation();
  useSeo();

  /* GA4: scroll depth tracking – init once, reset on page change */
  useEffect(() => { initScrollTracking(); }, []);
  useEffect(() => { resetScrollTracking(); }, [currentPage, articleSlug]);

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
      <Suspense fallback={null}>
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
      </Suspense>
      <Footer setPage={setPage} />

      <CookieConsent setPage={setPage} />
      <AccessibilityWidget setPage={setPage} />

      {/* WhatsApp Floating Button – GA4: whatsapp_click / floating */}
      <a
        href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating")}
        className="fixed bottom-24 md:bottom-6 left-5 z-50 w-11 h-11 bg-[#25D366] rounded-md flex items-center justify-center shadow-[var(--shadow-lg)] hover:scale-105 transition-all duration-200"
        aria-label="שלח הודעה בוואטסאפ"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default Index;
