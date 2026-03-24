import { useState } from "react";

import type { Page } from "@/types/page";

export default function AccessibilityWidget({ setPage }: { setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 md:bottom-6 right-6 z-50 w-11 h-11 bg-surface-dark text-primary-foreground rounded-md flex items-center justify-center shadow-[var(--shadow-md)] hover:scale-105 transition-all duration-200 border border-primary-foreground/10 cursor-pointer"
        aria-label="תפריט נגישות"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v5" />
          <path d="M8 21l2.5-7h3L16 21" />
          <path d="M6 12h12" />
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-40 md:bottom-20 right-6 z-50 bg-card border border-border rounded-lg shadow-[var(--shadow-lg)] w-[260px] p-5 flex flex-col gap-2" dir="rtl">
          <h3 className="font-bold text-foreground text-sm mb-1">אפשרויות נגישות</h3>
          {[
            { label: "הגדל טקסט", action: () => { document.documentElement.style.fontSize = "120%"; } },
            { label: "איפוס גודל טקסט", action: () => { document.documentElement.style.fontSize = ""; } },
            { label: "ניגודיות גבוהה", action: () => { document.body.classList.toggle("high-contrast"); } },
          ].map(({ label, action }) => (
            <button key={label} onClick={action} className="text-right bg-secondary text-secondary-foreground border-none rounded-md px-4 py-2.5 text-[13px] cursor-pointer hover:bg-secondary/80 transition-colors duration-200">{label}</button>
          ))}
          <button onClick={() => { setOpen(false); setPage("accessibility"); }} className="text-right bg-transparent border border-border text-foreground rounded-md px-4 py-2.5 text-[13px] cursor-pointer hover:bg-secondary/50 transition-colors duration-200 font-bold">הצהרת נגישות מלאה</button>
        </div>
      )}
    </>
  );
}
