import { useState } from "react";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function AccessibilityWidget({ setPage }: { setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating accessibility button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 md:bottom-6 right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[var(--shadow-md)] hover:scale-105 transition-all duration-200 border-none cursor-pointer"
        aria-label="תפריט נגישות"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v5" />
          <path d="M8 21l2.5-7h3L16 21" />
          <path d="M6 12h12" />
        </svg>
      </button>

      {/* Popup menu */}
      {open && (
        <div
          className="fixed bottom-40 md:bottom-20 right-6 z-50 bg-background border border-border/60 rounded-xl shadow-[var(--shadow-lg)] w-[260px] p-5 flex flex-col gap-2.5"
          dir="rtl"
        >
          <h3 className="font-bold text-primary text-sm mb-1">אפשרויות נגישות</h3>

          <button
            onClick={() => { document.documentElement.style.fontSize = "120%"; }}
            className="text-right bg-secondary text-secondary-foreground border-none rounded-lg px-4 py-2.5 text-[13px] cursor-pointer hover:bg-secondary/80 transition-colors duration-200"
          >
            הגדל טקסט
          </button>

          <button
            onClick={() => { document.documentElement.style.fontSize = ""; }}
            className="text-right bg-secondary text-secondary-foreground border-none rounded-lg px-4 py-2.5 text-[13px] cursor-pointer hover:bg-secondary/80 transition-colors duration-200"
          >
            איפוס גודל טקסט
          </button>

          <button
            onClick={() => { document.body.classList.toggle("high-contrast"); }}
            className="text-right bg-secondary text-secondary-foreground border-none rounded-lg px-4 py-2.5 text-[13px] cursor-pointer hover:bg-secondary/80 transition-colors duration-200"
          >
            ניגודיות גבוהה
          </button>

          <button
            onClick={() => { setOpen(false); setPage("accessibility"); }}
            className="text-right bg-transparent border border-border/60 text-primary rounded-lg px-4 py-2.5 text-[13px] cursor-pointer hover:bg-secondary/50 transition-colors duration-200 font-bold"
          >
            הצהרת נגישות מלאה
          </button>
        </div>
      )}
    </>
  );
}
