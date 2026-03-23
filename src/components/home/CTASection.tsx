type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function CTASection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-surface-dark py-12 md:py-16 px-6" dir="rtl" aria-label="יצירת קשר">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <p className="text-primary-foreground/45 text-[14px] leading-[1.7]">
          צריכים טיפול לרכב? התקשרו או שלחו הודעה.
        </p>
        <div className="flex items-center gap-5">
          <a href="tel:02-6514446" className="text-brand-red text-[15px] font-bold no-underline hover:text-brand-red-hover transition-colors duration-200">
            02-6514446
          </a>
          <a
            href="https://wa.me/972526514446"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/35 text-[13px] font-medium hover:text-primary-foreground/60 transition-colors duration-200 no-underline"
          >
            וואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
