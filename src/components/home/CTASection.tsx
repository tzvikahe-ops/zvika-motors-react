type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function CTASection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-surface-dark py-16 md:py-20 px-6" dir="rtl" aria-label="יצירת קשר">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 className="text-xl md:text-[28px] font-black text-primary-foreground mb-2 leading-tight">
            צריכים טיפול לרכב?
          </h2>
          <p className="text-primary-foreground/35 text-[13px] leading-relaxed">
            התקשרו, שלחו הודעה בוואטסאפ או פשוט בואו.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground border-none rounded-md px-7 py-3 text-[14px] font-bold hover:bg-brand-red-hover transition-colors duration-200 no-underline"
          >
            02-6514446
          </a>
          <a
            href="https://wa.me/972526514446"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 rounded-md px-7 py-3 text-[14px] font-medium hover:bg-primary-foreground/[0.1] transition-colors duration-200 no-underline"
          >
            וואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
