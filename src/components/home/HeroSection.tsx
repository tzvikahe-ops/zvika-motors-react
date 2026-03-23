import heroImage from "@/assets/hero-garage.jpg";
const logoImage = "/logo-full-transparent.png";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col" dir="rtl">
      {/* ── Background layer ── */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[70%_center] md:object-center"
          aria-hidden="true"
        />
        {/* Directional overlay: heavy on the right (RTL text side), transparent on left (image breathes) */}
        <div className="absolute inset-0 bg-gradient-to-l from-surface-darker via-surface-darker/85 to-surface-darker/20 md:to-transparent" />
        {/* Bottom fade for trust strip */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-darker to-transparent" />
      </div>

      {/* ── Vertical red accent bar ── */}
      <div className="hidden md:block absolute top-[68px] bottom-0 right-[calc(50%+280px)] w-[3px] bg-gradient-to-b from-transparent via-brand-red/60 to-brand-red/10 z-10" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-[68px]">
        <div className="max-w-[1100px] mx-auto px-6 w-full py-16 md:py-0">
          <div className="max-w-[560px]">
            {/* Logo – compact, badge-like */}
            <div className="mb-6 w-[160px] md:w-[240px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <img
                src={logoImage}
                alt="המוסך של צביקה – מוסך מקצועי בירושלים"
                width={945}
                height={540}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain drop-shadow-[0_2px_20px_hsl(0_0%_0%/0.5)]"
              />
            </div>

            {/* Headline with typographic contrast */}
            <h1 className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="block text-primary-foreground/40 text-[13px] md:text-[15px] font-bold tracking-wider mb-2">
                מוסך מקצועי בגבעת שאול, ירושלים
              </span>
              <span className="block text-[32px] md:text-[52px] lg:text-[64px] font-black text-primary-foreground leading-[1.05]">
                הרכב שלכם
              </span>
              <span className="block text-[32px] md:text-[52px] lg:text-[64px] font-black leading-[1.05]">
                <span className="text-brand-red">בידיים בטוחות</span>
                <span className="text-primary-foreground">.</span>
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-primary-foreground/50 text-[13px] md:text-[15px] max-w-[420px] leading-[1.8] mt-5 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              מעל 30 שנה של מקצועיות, שקיפות מלאה ושירות אישי.
              טיפולים, תיקונים, דיאגנוסטיקה והכנה לטסט — הכל במקום אחד.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <button
                onClick={() => setPage("contact")}
                className="bg-brand-red text-accent-foreground border-none rounded-md px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_24px_-4px_hsl(var(--brand-red)/0.5)]"
              >
                קבעו תור עכשיו
              </button>
              <a
                href="tel:02-6514446"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/12 rounded-md px-7 py-3.5 text-[15px] font-bold hover:bg-primary-foreground/15 transition-all duration-200 no-underline backdrop-blur-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                02-6514446
              </a>
            </div>
          </div>

          {/* ── Floating stat badge (desktop) ── */}
          <div className="hidden lg:flex absolute left-12 bottom-32 flex-col items-center bg-surface-darker/80 backdrop-blur-md border border-primary-foreground/[0.08] rounded-lg px-6 py-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <span className="text-[44px] font-black text-brand-red leading-none">30+</span>
            <span className="text-[11px] text-primary-foreground/50 font-medium mt-1">שנות ניסיון</span>
          </div>
        </div>
      </div>

      {/* ── Bottom trust strip ── */}
      <div className="relative z-10 bg-surface-darker/90 backdrop-blur-sm border-t border-primary-foreground/[0.06]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-3.5 text-[11px] text-primary-foreground/35 font-medium overflow-x-auto gap-6">
          <span className="whitespace-nowrap">✦ פעילים מאז 1993</span>
          <span className="w-px h-3 bg-primary-foreground/10 shrink-0" />
          <span className="whitespace-nowrap">✦ האופה 4, גבעת שאול</span>
          <span className="w-px h-3 bg-primary-foreground/10 shrink-0" />
          <span className="whitespace-nowrap">✦ א׳–ה׳ 08:00–16:30</span>
          <span className="w-px h-3 bg-primary-foreground/10 shrink-0" />
          <span className="whitespace-nowrap">✦ אחריות מלאה</span>
        </div>
      </div>
    </section>
  );
}
