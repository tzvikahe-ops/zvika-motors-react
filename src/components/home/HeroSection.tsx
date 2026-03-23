import heroImage from "@/assets/hero-garage.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-surface-darker" dir="rtl">
      <div className="flex-1 flex flex-col md:flex-row pt-[68px]">

        {/* ═══ צד ימין — תוכן ═══ */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-20 order-2 md:order-1">
          <div className="max-w-[500px] mx-auto md:mx-0 md:mr-auto">

            {/* Eyebrow — replaces big logo */}
            <div className="flex items-center gap-2.5 mb-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-[3px] h-10 bg-brand-red rounded-full" />
              <div>
                <span className="block text-primary-foreground/70 text-[13px] font-bold leading-tight">המוסך של צביקה</span>
                <span className="block text-primary-foreground/30 text-[11px] font-medium leading-tight">אור-צת שירותי רכב · מאז 1993</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="block text-[30px] md:text-[44px] lg:text-[52px] font-black text-primary-foreground leading-[1.05]">
                הרכב שלכם
              </span>
              <span className="block text-[30px] md:text-[44px] lg:text-[52px] font-black leading-[1.05] text-brand-red">
                בידיים בטוחות.
              </span>
            </h1>

            <p className="text-primary-foreground/40 text-[13px] md:text-[14px] leading-[1.8] mt-5 mb-8 max-w-[380px] opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              טיפולים, תיקונים, דיאגנוסטיקה והכנה לטסט — מעל 30 שנה של מקצועיות ושקיפות מלאה, הכל במקום אחד בגבעת שאול.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <button
                onClick={() => setPage("contact")}
                className="bg-brand-red text-accent-foreground border-none rounded-md px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_24px_-4px_hsl(var(--brand-red)/0.5)]"
              >
                קבעו תור
              </button>
              <a
                href="tel:02-6514446"
                className="inline-flex items-center gap-2 bg-primary-foreground/[0.07] text-primary-foreground border border-primary-foreground/10 rounded-md px-7 py-3.5 text-[15px] font-bold hover:bg-primary-foreground/[0.12] transition-all duration-200 no-underline"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 opacity-60">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                02-6514446
              </a>
            </div>

            {/* Trust row — compact, inline */}
            <div className="flex items-center gap-4 mt-10 text-[11px] text-primary-foreground/25 font-medium opacity-0 animate-fade-up" style={{ animationDelay: "0.65s" }}>
              <span>30+ שנות ניסיון</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/15" />
              <span>שקיפות מלאה</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/15" />
              <span>אחריות על כל טיפול</span>
            </div>
          </div>
        </div>

        {/* ═══ צד שמאל — תמונה ═══ */}
        <div className="relative md:w-[48%] lg:w-[52%] min-h-[280px] md:min-h-0 order-1 md:order-2 overflow-hidden">
          <img
            src={heroImage}
            alt="עבודת מכונאות מקצועית במוסך של צביקה בירושלים"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
          />
          {/* Edge fade into content */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-surface-darker to-transparent" />
          {/* Mobile bottom fade */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-darker to-transparent" />
          {/* Red accent edge */}
          <div className="hidden md:block absolute top-[15%] bottom-[15%] right-0 w-[3px] bg-brand-red/30" />
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="relative z-10 border-t border-primary-foreground/[0.05]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-3 text-[10px] text-primary-foreground/25 font-medium overflow-x-auto gap-6">
          <span className="whitespace-nowrap">האופה 4, גבעת שאול</span>
          <span className="w-px h-3 bg-primary-foreground/[0.06] shrink-0" />
          <span className="whitespace-nowrap">א׳–ה׳ 08:00–16:30</span>
          <span className="w-px h-3 bg-primary-foreground/[0.06] shrink-0" />
          <span className="whitespace-nowrap">02-6514446</span>
        </div>
      </div>
    </section>
  );
}
