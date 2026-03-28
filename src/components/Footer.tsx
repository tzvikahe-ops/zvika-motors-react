import BrandLockup from "./BrandLockup";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

import type { Page } from "@/types/page";

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-surface-darker relative" dir="rtl">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/[0.06] to-transparent" />

      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_0.8fr] gap-8 md:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="mb-0">
              <BrandLockup size="footer" />
            </div>
            <p className="text-primary-foreground/60 text-[13px] leading-[1.85] max-w-[300px] mb-5">
              אמינות ומקצועיות בשירות הרכב שלך בירושלים.
            </p>
            <div className="flex items-center gap-5">
              {/* GA4: phone_click / footer */}
              <a href="tel:02-6514446" onClick={() => trackPhoneClick("footer")} className="text-primary-foreground/70 text-[12px] font-bold hover:text-primary-foreground transition-colors no-underline inline-flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                02-6514446
              </a>
              {/* GA4: whatsapp_click / footer */}
              <a
                href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("footer")}
                className="text-primary-foreground/50 text-[12px] font-medium hover:text-primary-foreground/70 transition-colors no-underline inline-flex items-center gap-1.5"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                וואטסאפ
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-1">
              <p className="text-primary-foreground/40 text-[10px] font-bold tracking-wider mb-3">ניווט</p>
              {[
                { label: "בית", page: "home" as Page },
                { label: "שירותים", page: "services" as Page },
                { label: "אודות", page: "about" as Page },
                { label: "גלריה", page: "gallery" as Page },
                { label: "שאלות נפוצות", page: "faq" as Page },
                { label: "בלוג", page: "blog" as Page },
                { label: "צור קשר", page: "contact" as Page },
              ].map(({ label, page }) => (
                <button
                  key={label}
                  onClick={() => setPage(page)}
                   className="block bg-transparent border-none text-primary-foreground/55 text-[12px] cursor-pointer py-1.5 text-right hover:text-primary-foreground/80 transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-primary-foreground/40 text-[10px] font-bold tracking-wider mb-3">משפטי</p>
              {[
                { label: "מדיניות פרטיות", page: "privacy" as Page },
                { label: "הצהרת נגישות", page: "accessibility" as Page },
              ].map(({ label, page }) => (
                <button
                  key={label}
                  onClick={() => setPage(page)}
                  className="block bg-transparent border-none text-primary-foreground/55 text-[12px] cursor-pointer py-1.5 text-right hover:text-primary-foreground/80 transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
             <p className="text-primary-foreground/40 text-[10px] font-bold tracking-wider mb-3">פרטים</p>
             <div className="space-y-3 text-primary-foreground/55 text-[12px] leading-[1.75]">
              <p>האופה 4, גבעת שאול<br />ירושלים</p>
              <p>א׳–ה׳ 08:00–16:30</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/[0.04] py-4 md:py-5 px-5 sm:px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <p className="text-primary-foreground/65 text-[14px] sm:text-[16px] font-semibold leading-[1.55]">
            © {new Date().getFullYear()} המוסך של צביקה {" "}
            <span className="block sm:inline text-primary-foreground/85 font-bold">
              (אור-צת שירותי רכב)
            </span>
          </p>
          <p className="text-primary-foreground/20 text-[12px] sm:text-[13px]">
            מאז 1993
          </p>
        </div>
      </div>
    </footer>
  );
}
