import heroImage from "@/assets/hero-garage.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative bg-surface-darker overflow-hidden" dir="rtl">
      {/* Full-bleed image */}
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
        <div className="absolute inset-0 bg-gradient-to-l from-surface-darker via-surface-darker/90 to-surface-darker/40 md:to-transparent" />
        <div className="absolute inset-0 bg-surface-darker/30" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24 min-h-[80svh] flex flex-col justify-center">
        <div className="max-w-[520px]">
          <p className="text-primary-foreground/35 text-[11px] font-medium tracking-wide mb-5 uppercase">
            אור-צת שירותי רכב · גבעת שאול, ירושלים
          </p>

          <h1 className="mb-6">
            <span className="block text-[34px] md:text-[48px] lg:text-[58px] font-black text-primary-foreground leading-[1.02] tracking-[-0.03em]">
              הרכב שלכם
            </span>
            <span className="block text-[34px] md:text-[48px] lg:text-[58px] font-black leading-[1.02] tracking-[-0.03em] text-brand-red">
              בידיים בטוחות.
            </span>
          </h1>

          <p className="text-primary-foreground/50 text-[15px] leading-[1.8] mb-9 max-w-[420px]">
            מעל 30 שנה של מקצועיות ושקיפות מלאה.
            טיפולים, תיקונים, דיאגנוסטיקה והכנה לטסט.
          </p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setPage("contact")}
              className="bg-brand-red text-accent-foreground border-none px-8 py-3.5 text-[13px] font-bold cursor-pointer hover:bg-brand-red-hover transition-colors duration-200"
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
    </section>
  );
}
