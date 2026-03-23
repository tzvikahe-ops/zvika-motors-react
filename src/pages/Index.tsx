import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import GalleryPage from "@/components/GalleryPage";
import ContactPage from "@/components/ContactPage";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import AccessibilityStatement from "@/components/AccessibilityStatement";
import { WhatsAppIcon } from "@/components/Icons";

type Page = "home" | "gallery" | "contact" | "privacy" | "accessibility";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const setPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar currentPage={currentPage} setPage={setPage} />
      {currentPage === "home" && <HomePage setPage={setPage} />}
      {currentPage === "gallery" && <GalleryPage />}
      {currentPage === "contact" && <ContactPage />}
      {currentPage === "privacy" && <PrivacyPolicy />}
      {currentPage === "accessibility" && <AccessibilityStatement />}
      <Footer setPage={setPage} />

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
