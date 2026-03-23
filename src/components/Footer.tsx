type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-surface-darker text-primary-foreground/50 border-t border-primary-foreground/[0.06]" dir="rtl">
      <div className="max-w-[1100px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-black text-[14px] text-primary-foreground mb-1">המוסך של צביקה</div>
          <p className="text-[11px] text-primary-foreground/25 leading-relaxed">
            אור-צת שירותי רכב<br />
            גבעת שאול, ירושלים · מאז 1993
          </p>
        </div>

        <div className="flex gap-6">
          <div>
            {[
              { label: "בית", page: "home" as Page },
              { label: "שירותים", page: "services" as Page },
              { label: "אודות", page: "about" as Page },
              { label: "גלריה", page: "gallery" as Page },
            ].map(({ label, page }) => (
              <button
                key={label}
                onClick={() => setPage(page)}
                className="block bg-transparent border-none text-primary-foreground/30 text-[11px] cursor-pointer py-1 text-right hover:text-primary-foreground/50 transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            {[
              { label: "צור קשר", action: () => setPage("contact") },
              { label: "מדיניות פרטיות", action: () => setPage("privacy") },
              { label: "הצהרת נגישות", action: () => setPage("accessibility") },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                className="block bg-transparent border-none text-primary-foreground/30 text-[11px] cursor-pointer py-1 text-right hover:text-primary-foreground/50 transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-[11px] text-primary-foreground/20 md:text-left">
          האופה 4, ירושלים<br />
          02-6514446<br />
          א׳–ה׳ 08:00–16:30
        </div>
      </div>

      <div className="border-t border-primary-foreground/[0.04] py-4 px-6 text-[10px] text-primary-foreground/15 text-center">
        © {new Date().getFullYear()} המוסך של צביקה
      </div>
    </footer>
  );
}
