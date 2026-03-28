import { useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";
import BrandLockup from "./BrandLockup";

import type { Page } from "@/types/page";

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
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface-darker/95 backdrop-blur-md border-b border-primary-foreground/[0.06] overflow-x-hidden"
      dir="rtl"
    >
        <div dir="rtl" className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-row-reverse md:flex-row items-center justify-between h-[78px] md:h-[72px]">
        <button
          onClick={() => setPage("home")}
          className="bg-transparent border-none cursor-pointer flex items-center overflow-hidden min-w-0 mr-auto md:mr-0 md:ml-0"
          aria-label="דף הבית — המוסך של צביקה"
        >
          <BrandLockup size="navbar" />
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 relative z-20 shrink-0 text-brand-red"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

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
          <div className="w-px h-4 bg-primary-foreground/10" />
          <a
            href="tel:02-6514446"
            className="text-brand-red text-[13px] font-bold no-underline hover:text-brand-red-hover transition-colors duration-200 inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            02-6514446
          </a>
        </div>
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
              className="btn-primary flex-1 no-underline text-[14px] inline-flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
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
