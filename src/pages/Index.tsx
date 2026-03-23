import { useState, useLayoutEffect } from "react";
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
import { WhatsAppIcon } from "@/components/Icons";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentPage]);

  const setPage = (page: Page) => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar currentPage={currentPage} setPage={setPage} />
      {currentPage === "home" && <HomePage setPage={setPage} />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "gallery" && <GalleryPage />}
      {currentPage === "contact" && <ContactPage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "privacy" && <PrivacyPolicy />}
      {currentPage === "accessibility" && <AccessibilityStatement />}
      <Footer setPage={setPage} />

      <CookieConsent setPage={setPage} />
      <AccessibilityWidget setPage={setPage} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972526514446"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="שלח הודעה בוואטסאפ"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default Index;
