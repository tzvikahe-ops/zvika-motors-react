import { useState, useEffect } from "react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";
import { MenuIcon, CloseIcon } from "./Icons";
import BrandLockup from "./BrandLockup";

import type { Page } from "@/types/page";

interface NavbarProps {
  currentPage: Page;
  setPage: (p: Page) => void;
}

const pageToPath: Record<string, string> = {
  home: "/",
  services: "/services",
  about: "/about",
  gallery: "/gallery",
  faq: "/faq",
  blog: "/blog",
  contact: "/contact",
};

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { label: string; page: Page }[] = [
    { label: "בית", page: "home" },
    { label: "שירותים", page: "services" },
    { label: "אודות", page: "about" },
    { label: "גלריה", page: "gallery" },
    { label: "שאלות נפוצות", page: "faq" },
    { label: "בלוג", page: "blog" },
    { label: "צור קשר", page: "contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="ניווט ראשי"
      className={`fixed left-0 right-0 z-50 top-0 border-b transition-all duration-300 ${
        scrolled
          ? "bg-surface-darker/[0.97] backdrop-blur-xl border-primary-foreground/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-surface-darker/95 backdrop-blur-md border-primary-foreground/[0.06]"
      }`}
      dir="rtl"
    >
      <div className="max-w-[1100px] mx-auto px-2 sm:px-6 flex items-center justify-start lg:justify-between gap-0 lg:gap-0 h-[60px] lg:h-[90px]">
        {/* מובייל: המבורגר */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 relative z-20 shrink-0 text-brand-red min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* לוגו */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); setPage("home"); }}
          className="bg-transparent border-none cursor-pointer flex items-center no-underline min-w-0 flex-1 lg:flex-none"
          aria-label="דף הבית - המוסך של צביקה"
        >
          <BrandLockup size="navbar" />
        </a>

        {/* דסקטופ: קישורים + CTA */}
        <div className="hidden lg:flex items-center gap-1 whitespace-nowrap">
          {links.map(({ label, page }) => (
            <a
              key={label}
              href={pageToPath[page]}
              onClick={(e) => { e.preventDefault(); setPage(page); }}
              className={`relative text-[13px] transition-colors duration-200 py-2 px-3 min-h-[44px] inline-flex items-center justify-center no-underline rounded-lg ${
                currentPage === page
                  ? "text-primary-foreground font-bold bg-brand-red/[0.12]"
                  : "text-primary-foreground/60 font-medium hover:text-primary-foreground/90 hover:bg-primary-foreground/[0.06]"
              }`}
            >
              {label}
              {currentPage === page && (
                <span className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-5 h-[2px] bg-brand-red rounded-full" />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* תפריט מובייל */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-darker px-5 py-4 flex flex-col gap-1 border-t border-primary-foreground/[0.06]">
          {links.map(({ label, page }) => (
            <a
              key={label}
              href={pageToPath[page]}
              onClick={(e) => { e.preventDefault(); setPage(page); setMobileOpen(false); }}
              className={`relative text-[15px] text-right py-3 px-3 rounded-lg transition-colors duration-200 no-underline block ${
                currentPage === page
                  ? "text-primary-foreground font-bold bg-brand-red/[0.1]"
                  : "text-primary-foreground/70 font-medium"
              }`}
            >
              {label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-primary-foreground/[0.06] flex gap-3">
            <a
              href="tel:02-6514446"
              onClick={() => trackPhoneClick("navbar-mobile")}
              className="btn-primary flex-1 no-underline text-[14px] inline-flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              התקשרו עכשיו
            </a>
            <a
              href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("navbar-mobile")}
              className="flex-1 no-underline text-[14px] inline-flex items-center justify-center gap-2 bg-white border border-[#0E7A6D] text-[#075E54] py-3.5 px-4 font-bold rounded-sm hover:bg-[#f0faf8] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              וואטסאפ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
