import heroImage from "@/assets/hero-garage.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative bg-surface-darker overflow-hidden" dir="rtl">
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="מוסך של צביקה, גבעת שאול ירושלים"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-surface-darker via-surface-darker/85 to-surface-darker/30" />
        <div className="absolute inset-0 bg-surface-darker/20" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-40" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6 pt-24 pb-14 md:pt-36 md:pb-24 min-h-[85svh] md:min-h-[82svh] flex flex-col justify-center">
        <div className="max-w-[520px]">
          {/* Accent line + eyebrow */}
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <div className="w-8 h-px bg-brand-red/60" />
            <p className="text-primary-foreground/40 text-[11px] font-medium tracking-wider">
              גבעת שאול, ירושלים · מאז 1993
            </p>
          </div>

          <h1 className="mb-5 md:mb-6">
            <span className="block text-[30px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-black text-primary-foreground leading-[1.05] tracking-[-0.03em]">
              הרכב שלכם
            </span>
            <span className="block text-[30px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-black leading-[1.05] tracking-[-0.03em] text-brand-red">
              בידיים הכי בטוחות.
            </span>
          </h1>

          <p className="text-primary-foreground/50 text-[14px] md:text-[15px] leading-[1.85] mb-8 md:mb-9 max-w-[400px]">
            כבר למעלה מ-30 שנה, אנחנו מטפלים ברכבים באותה המקצועיות והשקיפות שהפכו אותנו למוסך שלקוחות סומכים עליו.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => setPage("contact")}
              className="btn-primary group"
            >
              <span>קבעו תור עכשיו</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:-translate-x-1"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <a
              href="tel:02-6514446"
              className="btn-outline text-center"
            >
              02-6514446
            </a>
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
    </section>
  );
}
