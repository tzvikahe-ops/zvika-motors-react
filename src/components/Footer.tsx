type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  const quickLinks: { label: string; page: Page }[] = [
    { label: "בית", page: "home" },
    { label: "שירותים", page: "services" },
    { label: "אודות", page: "about" },
    { label: "גלריה", page: "gallery" },
  ];

  return (
    <footer className="bg-surface-darker text-primary-foreground/50" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-brand-red rounded-md flex items-center justify-center">
              <span className="text-accent-foreground font-black text-sm">צ</span>
            </div>
            <div className="font-bold text-[16px] text-primary-foreground">המוסך של צביקה</div>
          </div>
          <p className="text-[12px] leading-7 text-primary-foreground/35 max-w-[260px]">
            אור-צת שירותי רכב
            <br />
            מוסך מקצועי בגבעת שאול, ירושלים. אמינות ושירות מאז 1993.
          </p>
        </div>

        <div>
          <h4 className="text-primary-foreground/80 font-bold mb-4 text-[13px] tracking-wide">ניווט מהיר</h4>
          {quickLinks.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => setPage(page)}
              className="block bg-transparent border-none text-primary-foreground/40 text-[12px] cursor-pointer py-1.5 text-right hover:text-primary-foreground/70 transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        <div>
          <h4 className="text-primary-foreground/80 font-bold mb-4 text-[13px] tracking-wide">עזרה</h4>
          {[
            { label: "צור קשר", action: () => setPage("contact") },
            { label: "מדיניות פרטיות", action: () => setPage("privacy") },
            { label: "הצהרת נגישות", action: () => setPage("accessibility") },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="block bg-transparent border-none text-primary-foreground/40 text-[12px] cursor-pointer py-1.5 text-right hover:text-primary-foreground/70 transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/[0.06] py-5 px-6 text-center text-[11px] text-primary-foreground/25">
        © {new Date().getFullYear()} המוסך של צביקה. רחוב האופה 4 (בית הדפוס 24), ירושלים.
      </div>
    </footer>
  );
}
