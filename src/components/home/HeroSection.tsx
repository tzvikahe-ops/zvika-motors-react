import heroImage from "@/assets/hero-garage.jpg";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-surface-darker" dir="rtl">
      <div className="flex-1 flex flex-col md:flex-row pt-16">

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10 md:py-0 order-2 md:order-1">
          <div className="max-w-[440px]">

            <p className="text-primary-foreground/25 text-[11px] font-medium mb-4">
              אור-צת שירותי רכב · גבעת שאול, ירושלים
            </p>

            <h1 className="mb-4">
              <span className="block text-[28px] md:text-[38px] lg:text-[46px] font-black text-primary-foreground leading-[1.1]">
                הרכב שלכם
              </span>
              <span className="block text-[28px] md:text-[38px] lg:text-[46px] font-black leading-[1.1] text-brand-red">
                בידיים בטוחות.
              </span>
            </h1>

            <p className="text-primary-foreground/35 text-[13px] leading-[1.7] mb-7 max-w-[360px]">
              מעל 30 שנה של מקצועיות ושקיפות מלאה.
              טיפולים, תיקונים, דיאגנוסטיקה והכנה לטסט.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <button
                onClick={() => setPage("contact")}
                className="bg-brand-red text-accent-foreground border-none px-6 py-2.5 text-[13px] font-bold cursor-pointer hover:bg-brand-red-hover transition-colors duration-200"
              >
                קבעו תור
              </button>
              <a
                href="tel:02-6514446"
                className="text-primary-foreground/60 text-[13px] font-bold hover:text-primary-foreground transition-colors duration-200 no-underline"
              >
                02-6514446
              </a>
            </div>

            {/* Inline facts — not centered blocks */}
            <div className="text-[11px] text-primary-foreground/20 font-medium leading-relaxed">
              30+ שנות ניסיון · שקיפות מלאה · אחריות על כל עבודה
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative md:w-[52%] lg:w-[56%] min-h-[220px] md:min-h-0 order-1 md:order-2 overflow-hidden">
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
          <div className="hidden md:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface-darker to-transparent" />
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface-darker to-transparent" />
        </div>
      </div>
    </section>
  );
}
