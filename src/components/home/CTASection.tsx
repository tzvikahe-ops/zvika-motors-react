type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function CTASection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative bg-surface-dark py-16 md:py-24 px-6 overflow-hidden" dir="rtl" aria-label="יצירת קשר">
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/3 h-[3px] bg-gradient-to-l from-brand-red to-transparent" />
      
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-[520px]">
          <h2 className="text-2xl md:text-[34px] font-black text-primary-foreground mb-3 leading-tight">
            צריכים טיפול לרכב?<br />
            <span className="text-brand-red">אנחנו כאן.</span>
          </h2>
          <p className="text-primary-foreground/40 text-sm leading-relaxed">
            התקשרו, שלחו הודעה בוואטסאפ או פשוט בואו.<br />
            מעל 30 שנות ניסיון · שקיפות מלאה · אחריות על כל טיפול.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap md:flex-col md:items-end">
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground border-none rounded-md px-8 py-3.5 text-[15px] font-bold hover:bg-brand-red-hover transition-all duration-200 shadow-[0_4px_24px_-4px_hsl(var(--brand-red)/0.5)] no-underline"
          >
            התקשרו – 02-6514446
          </a>
          <a
            href="https://wa.me/972526514446"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 rounded-md px-8 py-3.5 text-[15px] font-medium hover:bg-primary-foreground/[0.1] transition-all duration-200 no-underline text-center"
          >
            שלחו הודעה בוואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
