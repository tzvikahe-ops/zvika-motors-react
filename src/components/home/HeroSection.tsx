import heroImage from "@/assets/hero-garage.jpg";
const logoImage = "/logo-full-transparent.png";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-[100svh] flex items-end pt-[68px]" dir="rtl">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay gradient - heavier at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/70 to-surface-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1100px] mx-auto px-6 pb-16 md:pb-24">
          {/* Logo */}
          <div className="mb-8 w-[200px] md:w-[320px] aspect-[945/540] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img
              src={logoImage}
              alt="המוסך של צביקה – מוסך מקצועי בירושלים"
              width={945}
              height={540}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-contain drop-shadow-[0_2px_16px_hsl(0_0%_0%/0.4)]"
            />
          </div>

          <h1 className="text-[28px] md:text-[48px] lg:text-[56px] font-black text-primary-foreground leading-[1.1] mb-4 max-w-[700px] opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            המוסך שלכם<br />
            <span className="text-brand-red">בירושלים</span>
          </h1>

          <p className="text-primary-foreground/60 text-sm md:text-base max-w-[480px] leading-relaxed mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            מעל 30 שנות מקצועיות, שקיפות ושירות אישי.<br className="hidden md:block" />
            טיפולים, תיקונים ודיאגנוסטיקה — הכל תחת קורת גג אחת בגבעת שאול.
          </p>

          <div className="flex gap-3 flex-wrap opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <button
              onClick={() => setPage("contact")}
              className="bg-brand-red text-accent-foreground border-none rounded-md px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_24px_-4px_hsl(var(--brand-red)/0.5)]"
            >
              קבעו תור עכשיו
            </button>
            <a
              href="tel:02-6514446"
              className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/15 rounded-md px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-primary-foreground/15 transition-all duration-200 no-underline backdrop-blur-sm"
            >
              02-6514446
            </a>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="bg-surface-darker/90 backdrop-blur-sm border-t border-primary-foreground/[0.06]">
          <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-3 text-[11px] text-primary-foreground/35 font-medium overflow-x-auto gap-6">
            <span className="whitespace-nowrap">✦ פעילים מאז 1993</span>
            <span className="w-px h-3 bg-primary-foreground/10 shrink-0" />
            <span className="whitespace-nowrap">✦ האופה 4, גבעת שאול</span>
            <span className="w-px h-3 bg-primary-foreground/10 shrink-0" />
            <span className="whitespace-nowrap">✦ א׳–ה׳ 08:00–16:30</span>
            <span className="w-px h-3 bg-primary-foreground/10 shrink-0" />
            <span className="whitespace-nowrap">✦ אחריות מלאה</span>
          </div>
        </div>
      </div>
    </section>
  );
}
