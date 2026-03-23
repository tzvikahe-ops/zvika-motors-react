import { useState } from "react";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function AccessibilityWidget({ setPage }: { setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating accessibility button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 md:bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-none cursor-pointer"
        aria-label="תפריט נגישות"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v5" />
          <path d="M8 21l2.5-7h3L16 21" />
          <path d="M6 12h12" />
        </svg>
      </button>

      {/* Popup menu */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 bg-background border border-border rounded-xl shadow-2xl w-[280px] p-5 flex flex-col gap-3"
          dir="rtl"
        >
          <h3 className="font-bold text-primary text-base mb-1">אפשרויות נגישות</h3>

          <button
            onClick={() => {
              document.documentElement.style.fontSize = "120%";
            }}
            className="text-right bg-secondary text-secondary-foreground border-none rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-secondary/80 transition-colors"
          >
            הגדל טקסט
          </button>

          <button
            onClick={() => {
              document.documentElement.style.fontSize = "";
            }}
            className="text-right bg-secondary text-secondary-foreground border-none rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-secondary/80 transition-colors"
          >
            איפוס גודל טקסט
          </button>

          <button
            onClick={() => {
              document.body.classList.toggle("high-contrast");
            }}
            className="text-right bg-secondary text-secondary-foreground border-none rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-secondary/80 transition-colors"
          >
            ניגודיות גבוהה
          </button>

          <button
            onClick={() => { setOpen(false); setPage("accessibility"); }}
            className="text-right bg-transparent border border-border text-primary rounded-lg px-4 py-2.5 text-sm cursor-pointer hover:bg-secondary/50 transition-colors font-bold"
          >
            הצהרת נגישות מלאה
          </button>
        </div>
      )}
    </>
  );
}
