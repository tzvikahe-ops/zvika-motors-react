import heroImage from "@/assets/hero-garage.jpg";
import logoMark from "@/assets/logo-mark.png";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative bg-surface-darker overflow-hidden" dir="rtl">
      {/* Split layout: content right, image left (RTL) */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90svh] md:min-h-[85svh]">
        {/* Content panel */}
        <div className="relative z-10 bg-surface-darker flex flex-col justify-center order-2 md:order-1">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          {/* Red accent stripe on the edge */}
          <div className="hidden md:block absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-brand-red/40 to-transparent" />

          <div className="relative px-6 sm:px-10 md:px-12 lg:px-16 py-20 md:py-0">
            {/* Eyebrow with logo mark */}
            <div className="flex items-center gap-3 mb-6">
              <img src={logoMark} alt="" width={32} height={32} className="h-7 w-auto object-contain opacity-60" loading="eager" />
              <div className="w-6 h-[2px] bg-brand-red/40" />
              <p className="text-primary-foreground/35 text-[11px] font-bold tracking-[0.15em] uppercase">
                מאז 1993 · גבעת שאול
              </p>
            </div>

            <h1 className="mb-6 md:mb-7">
              <span className="block text-[32px] sm:text-[38px] md:text-[44px] lg:text-[54px] font-black text-primary-foreground leading-[1.02] tracking-[-0.035em]">
                הרכב שלכם
              </span>
              <span className="block text-[32px] sm:text-[38px] md:text-[44px] lg:text-[54px] font-black leading-[1.02] tracking-[-0.035em] text-brand-red mt-1">
                בידיים הכי בטוחות.
              </span>
            </h1>

            <p className="text-primary-foreground/45 text-[14px] md:text-[15px] leading-[1.9] mb-8 md:mb-10 max-w-[380px]">
              מוסך משפחתי בירושלים. מעל 30 שנה של טיפול מקצועי, מחירים הוגנים, ובעל מקצוע שאפשר לדבר איתו ישירות.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => setPage("contact")}
                className="btn-primary group"
              >
                <span>תאמו ביקור במוסך</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:-translate-x-1"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <a
                href="tel:02-6514446"
                className="btn-outline-dark text-center no-underline"
              >
                02-6514446
              </a>
            </div>

            {/* Compact trust badges */}
            <div className="flex items-center gap-6 mt-10 md:mt-12 pt-8 border-t border-primary-foreground/[0.06]">
              <div>
                <div className="text-[22px] font-black text-primary-foreground leading-none">30+</div>
                <p className="text-primary-foreground/20 text-[10px] font-medium mt-1">שנות ניסיון</p>
              </div>
              <div className="w-px h-8 bg-primary-foreground/[0.06]" />
              <div>
                <div className="text-[22px] font-black text-primary-foreground leading-none">4.8</div>
                <p className="text-primary-foreground/20 text-[10px] font-medium mt-1">דירוג בגוגל</p>
              </div>
              <div className="w-px h-8 bg-primary-foreground/[0.06]" />
              <div>
                <div className="text-[22px] font-black text-primary-foreground leading-none">98%</div>
                <p className="text-primary-foreground/20 text-[10px] font-medium mt-1">לקוחות חוזרים</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image panel — full bleed */}
        <div className="relative order-1 md:order-2 min-h-[280px] md:min-h-0">
          <img
            src={heroImage}
            alt="מוסך של צביקה, גבעת שאול ירושלים"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-surface-darker/10" />
          {/* Gradient blend into content panel on desktop */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-darker to-transparent" />
          {/* Bottom gradient on mobile */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-darker to-transparent" />
        </div>
      </div>
    </section>
  );
}
