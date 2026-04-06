import type { Page } from "@/types/page";

export default function StorySection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-surface-warm py-16 md:py-24 px-5 sm:px-6 relative" dir="rtl" aria-label="הסיפור שלנו">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-brand-red/50" />
              <p className="text-brand-red text-[12px] font-bold tracking-[0.15em] uppercase">הסיפור שלנו</p>
            </div>

            <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12] mb-5">
              מוסך משפחתי מ-1993
            </h2>

            <p className="text-foreground/60 text-[14px] md:text-[15px] leading-[2] mb-4">
              יהושע הרשקוביץ הקים את המוסך לפני למעלה מ-30 שנה עם עיקרון פשוט: שירות ישר, הוגן ומקצועי. היום בנו צביקה ממשיך את המסורת עם אותם ערכים ועם ציוד מתקדם.
            </p>
            <p className="text-foreground/60 text-[14px] md:text-[15px] leading-[2] mb-6">
              אצלנו אין מוקד שירות. כשאתם מתקשרים - אתם מדברים עם צביקה. כשאתם מגיעים - צביקה בודק לכם את הרכב.
            </p>

            <button
              onClick={() => setPage("about")}
              className="btn-text text-brand-red hover:text-brand-red-hover text-[13px] font-bold"
            >
              הסיפור המלא שלנו ←
            </button>
          </div>

          {/* Compact trust badges */}
          <div className="flex md:flex-col gap-4 md:gap-5">
            <div className="bg-card border border-border p-4 md:p-5 text-center min-w-[110px]">
              <div className="text-[24px] font-black text-brand-red leading-none mb-1">30+</div>
              <p className="text-muted-foreground text-[12px] font-medium">שנות ניסיון</p>
            </div>
            <div className="bg-card border border-border p-4 md:p-5 text-center min-w-[110px]">
              <div className="text-[24px] font-black text-brand-red leading-none mb-1">🏠</div>
              <p className="text-muted-foreground text-[11px] font-medium">עסק משפחתי</p>
            </div>
            <div className="bg-card border border-border p-4 md:p-5 text-center min-w-[110px]">
              <div className="text-[24px] font-black text-brand-red leading-none mb-1">98%</div>
              <p className="text-muted-foreground text-[11px] font-medium">לקוחות חוזרים</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
