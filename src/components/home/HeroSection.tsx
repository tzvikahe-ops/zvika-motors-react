import heroImage from "@/assets/hero-garage.jpg";
const logoImage = "/logo-full-transparent.png";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-surface-darker" dir="rtl">
      {/* ── SPLIT LAYOUT ── */}
      <div className="flex-1 flex flex-col md:flex-row pt-[68px]">

        {/* ═══ RIGHT SIDE — Content (RTL = visually right) ═══ */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-20 order-2 md:order-1">
          <div className="max-w-[520px] mx-auto md:mx-0 md:mr-auto">

            {/* Logo */}
            <div className="mb-7 w-[160px] md:w-[220px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <img
                src={logoImage}
                alt="המוסך של צביקה – מוסך מקצועי בירושלים"
                width={945}
                height={540}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain drop-shadow-[0_2px_16px_hsl(0_0%_0%/0.4)]"
              />
            </div>

            {/* Headline */}
            <h1 className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="block text-primary-foreground/35 text-[12px] md:text-[13px] font-bold tracking-wider mb-3 uppercase">
                מוסך מקצועי · גבעת שאול, ירושלים
              </span>
              <span className="block text-[30px] md:text-[44px] lg:text-[54px] font-black text-primary-foreground leading-[1.05]">
                הרכב שלכם
              </span>
              <span className="block text-[30px] md:text-[44px] lg:text-[54px] font-black leading-[1.05]">
                <span className="text-brand-red">בידיים בטוחות</span>
                <span className="text-primary-foreground/20">.</span>
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-primary-foreground/45 text-[13px] md:text-[14px] leading-[1.8] mt-5 mb-8 max-w-[400px] opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
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
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/10 rounded-md px-7 py-3.5 text-[15px] font-bold hover:bg-primary-foreground/15 transition-all duration-200 no-underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                02-6514446
              </a>
            </div>

            {/* Trust badges row */}
            <div className="flex items-center gap-5 mt-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.65s" }}>
              {[
                { value: "30+", label: "שנות ניסיון" },
                { value: "100%", label: "שקיפות" },
                { value: "אחריות", label: "על כל טיפול" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-3">
                  {i > 0 && <span className="w-px h-8 bg-primary-foreground/10" />}
                  <div className={`text-center ${i > 0 ? "pr-3" : ""}`}>
                    <div className="text-brand-red font-black text-[18px] md:text-[22px] leading-none">{value}</div>
                    <div className="text-primary-foreground/30 text-[10px] font-medium mt-1">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ LEFT SIDE — Image (RTL = visually left) ═══ */}
        <div className="relative md:w-[48%] lg:w-[52%] min-h-[300px] md:min-h-0 order-1 md:order-2 overflow-hidden">
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
          {/* Fade into content side */}
          <div className="absolute inset-0 bg-gradient-to-l from-surface-darker/60 via-transparent to-transparent md:from-transparent" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-darker to-transparent" />
          {/* Bottom fade for mobile */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface-darker to-transparent" />

          {/* Red accent strip on the edge */}
          <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[3px] bg-brand-red/40" />
        </div>
      </div>

      {/* ── Bottom info strip ── */}
      <div className="relative z-10 bg-surface-darker border-t border-primary-foreground/[0.06]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-3.5 text-[11px] text-primary-foreground/30 font-medium overflow-x-auto gap-6">
          <span className="whitespace-nowrap">✦ פעילים מאז 1993</span>
          <span className="w-px h-3 bg-primary-foreground/[0.08] shrink-0" />
          <span className="whitespace-nowrap">✦ האופה 4, גבעת שאול</span>
          <span className="w-px h-3 bg-primary-foreground/[0.08] shrink-0" />
          <span className="whitespace-nowrap">✦ א׳–ה׳ 08:00–16:30</span>
          <span className="w-px h-3 bg-primary-foreground/[0.08] shrink-0" />
          <span className="whitespace-nowrap">✦ אחריות מלאה על כל עבודה</span>
        </div>
      </div>
    </section>
  );
}
