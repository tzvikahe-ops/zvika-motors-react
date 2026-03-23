import heroImage from "@/assets/hero-garage.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-surface-darker" dir="rtl">
      <div className="flex-1 flex flex-col md:flex-row pt-[68px]">

        {/* ═══ צד ימין — תוכן ═══ */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-20 order-2 md:order-1">
          <div className="max-w-[500px] mx-auto md:mx-0 md:mr-auto">

            {/* Eyebrow */}
            <p className="text-primary-foreground/30 text-[12px] font-medium mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              המוסך של צביקה · אור-צת שירותי רכב · מאז 1993
            </p>

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
              טיפולים, תיקונים, דיאגנוסטיקה והכנה לטסט.
              מעל 30 שנה של מקצועיות ושקיפות מלאה, הכל במקום אחד בגבעת שאול, ירושלים.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <button
                onClick={() => setPage("contact")}
                className="bg-brand-red text-accent-foreground border-none rounded-md px-8 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-colors duration-200"
              >
                קבעו תור
              </button>
              <a
                href="tel:02-6514446"
                className="inline-flex items-center gap-2 bg-primary-foreground/[0.07] text-primary-foreground border border-primary-foreground/10 rounded-md px-7 py-3.5 text-[15px] font-bold hover:bg-primary-foreground/[0.12] transition-colors duration-200 no-underline"
              >
                02-6514446
              </a>
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
          <div className="hidden md:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-surface-darker to-transparent" />
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-darker to-transparent" />
        </div>
      </div>

      {/* Bottom strip */}
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
