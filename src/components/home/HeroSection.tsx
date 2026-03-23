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

      {/* Subtle grid pattern over image */}
      <div className="absolute inset-0 pattern-grid opacity-40" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24 min-h-[82svh] flex flex-col justify-center">
        <div className="max-w-[520px]">
          {/* Accent line + eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-red/60" />
            <p className="text-primary-foreground/40 text-[11px] font-medium tracking-wider">
              גבעת שאול, ירושלים · מאז 1993
            </p>
          </div>

          <h1 className="mb-6">
            <span className="block text-[34px] md:text-[48px] lg:text-[58px] font-black text-primary-foreground leading-[1.02] tracking-[-0.03em]">
              הרכב שלכם
            </span>
            <span className="block text-[34px] md:text-[48px] lg:text-[58px] font-black leading-[1.02] tracking-[-0.03em] text-brand-red">
              בידיים בטוחות.
            </span>
          </h1>

          <p className="text-primary-foreground/45 text-[15px] leading-[1.8] mb-9 max-w-[420px]">
            מעל 30 שנה של מקצועיות ושקיפות מלאה.
            טיפולים, תיקונים, דיאגנוסטיקה והכנה לטסט.
          </p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setPage("contact")}
              className="bg-brand-red text-accent-foreground border-none px-8 py-3.5 text-[13px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_24px_-6px_hsl(var(--brand-red)/0.4)]"
            >
              קבעו תור
            </button>
            <a
              href="tel:02-6514446"
              className="text-primary-foreground/55 text-[15px] font-bold hover:text-primary-foreground transition-colors duration-200 no-underline"
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
