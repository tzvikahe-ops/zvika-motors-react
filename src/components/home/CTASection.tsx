import type { Page } from "@/types/page";

export default function CTASection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative overflow-hidden" dir="rtl" aria-label="יצירת קשר">
      {/* Full-width red band */}
      <div className="bg-brand-red relative">
        <div className="absolute inset-0 pattern-grid opacity-10" />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-14 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-black text-accent-foreground tracking-[-0.02em] mb-2 leading-[1.15]">
                רוצים לתאם ביקור?
              </h2>
              <p className="text-accent-foreground/70 text-[13px] md:text-[14px] leading-[1.7] max-w-[380px]">
                תתקשרו או תשלחו וואטסאפ ונתאם. אפשר גם פשוט להגיע, אנחנו כאן א׳–ה׳ 08:00–16:30.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="tel:02-6514446"
                className="inline-flex items-center justify-center gap-2 bg-accent-foreground text-foreground px-8 py-3.5 text-[13px] font-bold no-underline hover:bg-accent-foreground/90 transition-all duration-200"
              >
                התקשרו: 02-6514446
              </a>
              <a
                href="https://wa.me/972526514446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-accent-foreground/30 text-accent-foreground/90 px-8 py-3.5 text-[13px] font-bold no-underline hover:bg-accent-foreground/10 transition-all duration-200"
              >
                שלחו וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
