import logoPrimary from "@/assets/logo-primary.png";

import type { Page } from "@/types/page";

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-surface-darker relative" dir="rtl">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/[0.06] to-transparent" />

      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_0.8fr] gap-8 md:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src={logoPrimary}
                alt="המוסך של צביקה"
                width={180}
                height={50}
                className="h-[72px] md:h-[82px] w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-primary-foreground/25 text-[12px] leading-[1.85] max-w-[280px] mb-5">
              אמינות ומקצועיות בשירות הרכב שלך בירושלים.
            </p>
            <div className="flex items-center gap-5">
              <a href="tel:02-6514446" className="text-primary-foreground/40 text-[12px] font-bold hover:text-primary-foreground transition-colors no-underline">
                02-6514446
              </a>
              <a
                href="https://wa.me/972526514446"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/25 text-[12px] font-medium hover:text-primary-foreground/50 transition-colors no-underline"
              >
                וואטסאפ
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-1">
              <p className="text-primary-foreground/15 text-[10px] font-bold tracking-wider mb-3">ניווט</p>
              {[
                { label: "בית", page: "home" as Page },
                { label: "שירותים", page: "services" as Page },
                { label: "אודות", page: "about" as Page },
                { label: "גלריה", page: "gallery" as Page },
                { label: "צור קשר", page: "contact" as Page },
              ].map(({ label, page }) => (
                <button
                  key={label}
                  onClick={() => setPage(page)}
                  className="block bg-transparent border-none text-primary-foreground/30 text-[12px] cursor-pointer py-1.5 text-right hover:text-primary-foreground/55 transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-primary-foreground/15 text-[10px] font-bold tracking-wider mb-3">משפטי</p>
              {[
                { label: "מדיניות פרטיות", page: "privacy" as Page },
                { label: "הצהרת נגישות", page: "accessibility" as Page },
              ].map(({ label, page }) => (
                <button
                  key={label}
                  onClick={() => setPage(page)}
                  className="block bg-transparent border-none text-primary-foreground/30 text-[12px] cursor-pointer py-1.5 text-right hover:text-primary-foreground/55 transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-primary-foreground/15 text-[10px] font-bold tracking-wider mb-3">פרטים</p>
            <div className="space-y-3 text-primary-foreground/30 text-[12px] leading-[1.75]">
              <p>האופה 4, גבעת שאול<br />ירושלים</p>
              <p>א׳–ה׳ 08:00–16:30</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/[0.04] py-4 md:py-5 px-5 sm:px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <p className="text-primary-foreground/15 text-[13px] sm:text-[14px]">
            © {new Date().getFullYear()} המוסך של צביקה (אור-צת שירותי רכב)
          </p>
          <p className="text-primary-foreground/10 text-[12px] sm:text-[13px]">
            מאז 1993
          </p>
        </div>
      </div>
    </footer>
  );
}
