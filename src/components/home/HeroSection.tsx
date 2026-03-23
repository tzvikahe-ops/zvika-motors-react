import heroImage from "@/assets/hero-garage.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-surface-darker" dir="rtl">
      <div className="flex-1 flex flex-col md:flex-row pt-16">

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-0 order-2 md:order-1">
          <div className="max-w-[480px]">

            <p className="text-primary-foreground/30 text-[11px] font-medium tracking-wide mb-5">
              אור-צת שירותי רכב · גבעת שאול, ירושלים
            </p>

            <h1 className="mb-5">
              <span className="block text-[32px] md:text-[42px] lg:text-[52px] font-black text-primary-foreground leading-[1.05] tracking-[-0.03em]">
                הרכב שלכם
              </span>
              <span className="block text-[32px] md:text-[42px] lg:text-[52px] font-black leading-[1.05] tracking-[-0.03em] text-brand-red">
                בידיים בטוחות.
              </span>
            </h1>

            <p className="text-primary-foreground/40 text-[14px] leading-[1.8] mb-8 max-w-[380px]">
              מעל 30 שנה של מקצועיות ושקיפות מלאה.
              טיפולים, תיקונים, דיאגנוסטיקה והכנה לטסט.
            </p>

            <div className="flex items-center gap-5 mb-12">
              <button
                onClick={() => setPage("contact")}
                className="bg-brand-red text-accent-foreground border-none px-7 py-3 text-[13px] font-bold cursor-pointer hover:bg-brand-red-hover transition-colors duration-200"
              >
                קבעו תור
              </button>
              <a
                href="tel:02-6514446"
                className="text-primary-foreground/50 text-[14px] font-bold hover:text-primary-foreground transition-colors duration-200 no-underline"
              >
                02-6514446
              </a>
            </div>

            <div className="text-[11px] text-primary-foreground/18 font-medium tracking-wide">
              30+ שנות ניסיון · שקיפות מלאה · אחריות על כל עבודה
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative md:w-[52%] lg:w-[56%] min-h-[240px] md:min-h-0 order-1 md:order-2 overflow-hidden">
          <img
            src={heroImage}
            alt="מוסך של צביקה, גבעת שאול ירושלים"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[55%_center]"
          />
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-darker to-transparent" />
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface-darker to-transparent" />
        </div>
      </div>
    </section>
  );
}
