import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

interface NavbarProps {
  currentPage: Page;
  setPage: (p: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { label: string; page: Page }[] = [
    { label: "בית", page: "home" },
    { label: "שירותים", page: "services" },
    { label: "אודות", page: "about" },
    { label: "גלריה", page: "gallery" },
    { label: "צור קשר", page: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-surface-darker/95 backdrop-blur-md border-b border-primary-foreground/[0.06]"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 flex items-center justify-between h-14 md:h-16">
        {/* Brand */}
        <div onClick={() => setPage("home")} className="cursor-pointer">
          <span className="font-black text-primary-foreground text-[14px] md:text-[15px]">המוסך של צביקה</span>
          <span className="text-primary-foreground/25 text-[10px] md:text-[11px] font-medium mr-2">מאז 1993</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => setPage(page)}
              className={`bg-transparent border-none cursor-pointer text-[13px] transition-colors duration-200 ${
                currentPage === page
                  ? "text-primary-foreground font-bold"
                  : "text-primary-foreground/40 font-medium hover:text-primary-foreground/70"
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:02-6514446"
            className="text-brand-red text-[13px] font-bold no-underline hover:text-brand-red-hover transition-colors duration-200"
          >
            02-6514446
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-primary-foreground p-1"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-darker px-5 py-4 flex flex-col gap-1 border-t border-primary-foreground/[0.06]">
          {links.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => { setPage(page); setMobileOpen(false); }}
              className={`bg-transparent border-none cursor-pointer text-[15px] text-right py-3 transition-colors duration-200 ${
                currentPage === page
                  ? "text-primary-foreground font-bold"
                  : "text-primary-foreground/50 font-medium"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="mt-3 pt-3 border-t border-primary-foreground/[0.06] flex gap-3">
            <a
              href="tel:02-6514446"
              className="btn-primary flex-1 text-center no-underline text-[14px]"
            >
              התקשרו עכשיו
            </a>
            <a
              href="https://wa.me/972526514446"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark flex-1 text-center no-underline text-[14px]"
            >
              וואטסאפ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
