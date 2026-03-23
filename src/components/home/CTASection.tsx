type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function CTASection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-surface-dark py-12 md:py-16 px-6" dir="rtl" aria-label="יצירת קשר">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-[20px] md:text-[26px] font-black text-primary-foreground mb-1.5 leading-tight">
            צריכים טיפול לרכב?
          </h2>
          <p className="text-primary-foreground/30 text-[12.5px]">
            התקשרו, שלחו הודעה בוואטסאפ או פשוט בואו.
          </p>
        </div>

        <div className="flex gap-2.5 flex-wrap">
          <a
            href="tel:02-6514446"
            className="bg-brand-red text-accent-foreground rounded-md px-6 py-2.5 text-[13px] font-bold hover:bg-brand-red-hover transition-colors duration-200 no-underline"
          >
            02-6514446
          </a>
          <a
            href="https://wa.me/972526514446"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 rounded-md px-6 py-2.5 text-[13px] font-medium hover:bg-primary-foreground/[0.1] transition-colors duration-200 no-underline"
          >
            וואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
