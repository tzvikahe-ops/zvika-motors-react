import { useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

interface NavbarProps {
  currentPage: Page;
  setPage: (p: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links: { label: string; page: Page }[] = [
    { label: "בית", page: "home" },
    { label: "שירותים", page: "services" },
    { label: "אודות", page: "about" },
    { label: "גלריה", page: "gallery" },
    { label: "צור קשר", page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <div
          onClick={() => setPage("home")}
          className="cursor-pointer flex items-baseline gap-2"
        >
          <span className="font-bold text-white text-xl">המוסך של צביקה</span>
          <span className="text-white/70 text-xs font-medium">(אור צת שירותי רכב)</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => setPage(page)}
              className={`bg-transparent border-none cursor-pointer text-[15px] pb-0.5 transition-colors ${
                currentPage === page
                  ? "text-white font-bold border-b-2 border-brand-red"
                  : "text-white/70 font-normal border-b-2 border-transparent hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

      <button
          onClick={() => setPage("contact")}
          className="hidden md:block bg-brand-red text-accent-foreground border-none rounded-lg px-5 py-2.5 text-sm font-bold cursor-pointer hover:bg-brand-red-hover transition-all hover:scale-[1.03]"
        >
          קבע תור
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-white"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          {links.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => { setPage(page); setMobileOpen(false); }}
              className="bg-transparent border-none cursor-pointer text-base text-white text-right py-2"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
