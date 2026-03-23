type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  const quickLinks: { label: string; page: Page }[] = [
    { label: "בית", page: "home" },
    { label: "שירותים", page: "services" },
    { label: "אודות", page: "about" },
    { label: "גלריה", page: "gallery" },
  ];

  return (
    <footer className="bg-footer text-muted-foreground" dir="rtl">
      <div className="max-w-[1100px] mx-auto px-6 pt-14 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-sans font-extrabold text-lg text-primary-foreground tracking-wide mb-3">
            המוסך של צביקה
          </div>
          <p className="text-[13px] leading-7 text-primary-foreground/50 max-w-[260px]">
            אור-צת שירותי רכב
            <br />
            מוסך מקצועי בגבעת שאול, ירושלים. אמינות ושירות מאז 1993.
          </p>
        </div>

        <div>
          <h4 className="text-primary-foreground font-bold mb-4 text-sm">ניווט מהיר</h4>
          {quickLinks.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => setPage(page)}
              className="block bg-transparent border-none text-primary-foreground/50 text-[13px] cursor-pointer py-1.5 text-right hover:text-primary-foreground transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        <div>
          <h4 className="text-primary-foreground font-bold mb-4 text-sm">עזרה</h4>
          {[
            { label: "צור קשר", action: () => setPage("contact") },
            { label: "מדיניות פרטיות", action: () => setPage("privacy") },
            { label: "הצהרת נגישות", action: () => setPage("accessibility") },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="block bg-transparent border-none text-primary-foreground/50 text-[13px] cursor-pointer py-1.5 text-right hover:text-primary-foreground transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08] py-5 px-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} המוסך של צביקה. רחוב האופה 4 (בית הדפוס 24), ירושלים.
      </div>
    </footer>
  );
}
