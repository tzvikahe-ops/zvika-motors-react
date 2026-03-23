import { useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

type Page = "home" | "gallery" | "contact";

interface NavbarProps {
  currentPage: Page;
  setPage: (p: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links: { label: string; page: Page }[] = [
    { label: "שירותים", page: "home" },
    { label: "אודות", page: "home" },
    { label: "גלריה", page: "gallery" },
    { label: "צור קשר", page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <span
          onClick={() => setPage("home")}
          className="font-serif font-extrabold text-lg tracking-widest text-primary uppercase cursor-pointer"
        >
          MODERN MECHANIST
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => setPage(page)}
              className={`bg-transparent border-none cursor-pointer text-[15px] pb-0.5 transition-colors ${
                currentPage === page
                  ? "text-primary font-bold border-b-2 border-brand-red"
                  : "text-muted-foreground font-normal border-b-2 border-transparent hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPage("contact")}
          className="hidden md:block bg-primary text-primary-foreground border-none rounded px-5 py-2.5 text-sm font-bold cursor-pointer hover:bg-navy-light transition-colors"
        >
          Book Now
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-primary"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background px-6 py-4 flex flex-col gap-4 border-t border-border">
          {links.filter(l => l.label !== "אודות").map(({ label, page }) => (
            <button
              key={label}
              onClick={() => { setPage(page); setMobileOpen(false); }}
              className="bg-transparent border-none cursor-pointer text-base text-primary text-right py-2"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
