type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function CTASection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-surface-dark py-16 md:py-20 px-6" dir="rtl" aria-label="יצירת קשר">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-[22px] md:text-[28px] font-black text-primary-foreground tracking-[-0.02em] mb-2">
              צריכים טיפול לרכב?
            </h2>
            <p className="text-primary-foreground/35 text-[13px] leading-[1.7] max-w-[380px]">
              התקשרו, שלחו וואטסאפ, או בואו ישירות למוסך.
              אנחנו כאן א׳–ה׳ 08:00–16:30.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:02-6514446"
              className="bg-brand-red text-accent-foreground border-none px-8 py-3.5 text-[13px] font-bold no-underline hover:bg-brand-red-hover transition-colors duration-200 inline-block"
            >
              02-6514446
            </a>
            <a
              href="https://wa.me/972526514446"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 text-[13px] font-medium hover:text-primary-foreground/60 transition-colors duration-200 no-underline"
            >
              וואטסאפ ←
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
