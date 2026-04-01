import { useLayoutEffect, useEffect, lazy, Suspense, Component, type ReactNode, type ErrorInfo } from "react";
import { usePageNavigation } from "@/hooks/use-page-navigation";
import { initScrollTracking, resetScrollTracking, trackWhatsAppClick } from "@/lib/analytics";
import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import LazySection from "@/components/LazySection";
import { WhatsAppIcon } from "@/components/Icons";

// Lazy load non-critical components
const Footer = lazy(() => import("@/components/Footer"));
const CookieConsent = lazy(() => import("@/components/CookieConsent"));

const ServicesPage = lazy(() => import("@/components/ServicesPage"));
const GalleryPage = lazy(() => import("@/components/GalleryPage"));
const ContactPage = lazy(() => import("@/components/ContactPage"));
const AboutPage = lazy(() => import("@/components/AboutPage"));
const PrivacyPolicy = lazy(() => import("@/components/PrivacyPolicy"));
const AccessibilityStatement = lazy(() => import("@/components/AccessibilityStatement"));
const MapSection = lazy(() => import("@/components/MapSection").catch(() => import("@/components/MapSection")));
const ImageGeneratorPage = lazy(() => import("@/components/ImageGeneratorPage"));
const FAQPage = lazy(() => import("@/components/FAQPage"));
const BlogPage = lazy(() => import("@/components/BlogPage"));
const BlogArticlePage = lazy(() => import("@/components/BlogArticlePage"));

/** Prevents a single lazy-load failure from crashing the whole page */
class LazyErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: Error, info: ErrorInfo) { console.error("LazyErrorBoundary:", err, info); }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const Index = () => {
  const { currentPage, articleSlug, setPage } = usePageNavigation();
  

  /* GA4: scroll depth tracking - init once, reset on page change */
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
      <SeoHead />
      {/* Holiday banner - until April 9, 2026 */}
      {new Date() < new Date("2026-04-10T00:00:00+03:00") && (
        <>
          <div
            className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(43,60%,85%)] text-[hsl(30,30%,18%)] text-center py-2.5 md:py-2 px-4 text-[13px] md:text-sm font-bold tracking-wide shadow-sm"
            dir="rtl"
          >
            🍷 חג פסח כשר ושמח! המוסך סגור לחופשת חג עד ה-9.4 🍷
          </div>
          <div className="h-[40px] md:h-[36px]" />
        </>
      )}
      <Navbar currentPage={currentPage} setPage={setPage} />

      <main id="main-content">
        <div className={currentPage === "home" ? "block" : "hidden"} aria-hidden={currentPage !== "home"}>
          <HomePage setPage={setPage} />
        </div>
        <Suspense fallback={null}>
          <LazyErrorBoundary>
            {currentPage === "services" && <ServicesPage />}
            {currentPage === "gallery" && <GalleryPage />}
            {currentPage === "contact" && <ContactPage />}
            {currentPage === "about" && <AboutPage />}
            {currentPage === "privacy" && <PrivacyPolicy />}
            {currentPage === "accessibility" && <AccessibilityStatement />}
            {currentPage === "image-generator" && <ImageGeneratorPage />}
            {currentPage === "faq" && <FAQPage />}
            {currentPage === "blog" && <BlogPage />}
            {currentPage === "blog-article" && <BlogArticlePage slug={articleSlug} />}
            {(currentPage === "home" || currentPage === "contact") && (
              <LazySection rootMargin="300px" minHeight="300px">
                <MapSection />
              </LazySection>
            )}
          </LazyErrorBoundary>
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <Footer setPage={setPage} />
        <CookieConsent setPage={setPage} />
      </Suspense>

      {/* WhatsApp Floating Button - GA4: whatsapp_click / floating */}
      <a
        href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating")}
        className="fixed bottom-24 md:bottom-6 left-5 z-50 w-14 h-14 bg-[#25D366] rounded-lg flex items-center justify-center shadow-[var(--shadow-lg)] hover:scale-105 transition-all duration-200"
        aria-label="שלח הודעה בוואטסאפ"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default Index;
