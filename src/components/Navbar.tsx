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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-darker/95 backdrop-blur-md shadow-[var(--shadow-lg)]"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[68px]">
        <div onClick={() => setPage("home")} className="cursor-pointer flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-red rounded-md flex items-center justify-center shadow-[0_2px_8px_hsl(var(--brand-red)/0.3)]">
            <span className="text-accent-foreground font-black text-sm">צ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary-foreground text-[15px] leading-tight">המוסך של צביקה</span>
            <span className="text-primary-foreground/35 text-[10px] font-medium leading-tight">אור-צת שירותי רכב · מאז 1993</span>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => setPage(page)}
              className={`bg-transparent border-none cursor-pointer text-[13px] px-3.5 py-2 rounded-md transition-all duration-200 ${
                currentPage === page
                  ? "text-brand-red font-bold"
                  : "text-primary-foreground/55 font-medium hover:text-primary-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href="tel:02-6514446"
          className="hidden md:flex items-center gap-2 bg-brand-red text-accent-foreground border-none rounded-md px-5 py-2 text-[13px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 no-underline shadow-[0_2px_12px_-2px_hsl(var(--brand-red)/0.4)]"
        >
          02-6514446
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-primary-foreground p-1"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-darker/98 backdrop-blur-md px-4 py-3 flex flex-col gap-0.5 border-t border-primary-foreground/[0.06]">
          {links.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => { setPage(page); setMobileOpen(false); }}
              className={`bg-transparent border-none cursor-pointer text-[15px] text-right py-3 rounded-md px-4 transition-all duration-200 ${
                currentPage === page
                  ? "text-brand-red font-bold"
                  : "text-primary-foreground/70 font-medium hover:bg-primary-foreground/[0.04]"
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:02-6514446"
            className="mt-2 text-center bg-brand-red text-accent-foreground rounded-md py-3 text-[15px] font-bold no-underline"
          >
            התקשרו עכשיו – 02-6514446
          </a>
        </div>
      )}
    </nav>
  );
}
