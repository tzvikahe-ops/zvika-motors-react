import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import GalleryPage from "@/components/GalleryPage";
import ContactPage from "@/components/ContactPage";

type Page = "home" | "gallery" | "contact";

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
      <Footer setPage={setPage} />
    </div>
  );
};

export default Index;
