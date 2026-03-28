export default function StorySection() {
  return (
    <section className="bg-surface-warm py-16 md:py-24 px-5 sm:px-6 relative" dir="rtl" aria-label="הסיפור שלנו">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-[2px] bg-brand-red/50" />
          <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">הסיפור שלנו</p>
        </div>

        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12] mb-6">
          שלושה דורות של מכונאות
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-14 items-start">
          <div className="space-y-5">
            <p className="text-foreground/60 text-[14px] md:text-[15px] leading-[2]">
              המוסך נוסד בשנת <strong className="text-foreground">1993</strong> על ידי <strong className="text-foreground">יהושע הרשקוביץ</strong>, מכונאי מנוסה עם חזון פשוט: לתת שירות מקצועי, ישר ואנושי. לא שיטות של רשתות גדולות — אלא יחס אישי ועבודה שאפשר לסמוך עליה.
            </p>
            <p className="text-foreground/60 text-[14px] md:text-[15px] leading-[2]">
              היום, בנו <strong className="text-foreground">צביקה</strong> ממשיך את המסורת. עם צוות מכונאים מקצועי, ציוד מתקדם, ואותם ערכים שליוו את המוסך מהיום הראשון — שקיפות, הגינות ומקצועיות ללא פשרות.
            </p>
            <p className="text-foreground/60 text-[14px] md:text-[15px] leading-[2]">
              לאורך <strong className="text-foreground">יותר מ-30 שנה</strong> טיפלנו באלפי רכבים ובנינו קשרים ארוכי טווח עם לקוחות שהפכו למשפחה. אצלנו, כל לקוח מקבל תשומת לב מלאה — כי ככה צריך לעבוד.
            </p>
          </div>

          {/* Trust badges column */}
          <div className="flex md:flex-col gap-4 md:gap-5 md:pt-1">
            <div className="bg-card border border-border p-4 md:p-5 text-center min-w-[110px]">
              <div className="text-[24px] font-black text-brand-red leading-none mb-1">30+</div>
              <p className="text-muted-foreground text-[11px] font-medium">שנות ניסיון</p>
            </div>
            <div className="bg-card border border-border p-4 md:p-5 text-center min-w-[110px]">
              <div className="text-[24px] font-black text-brand-red leading-none mb-1">🏠</div>
              <p className="text-muted-foreground text-[11px] font-medium">עסק ירושלמי מקומי</p>
            </div>
            <div className="bg-card border border-border p-4 md:p-5 text-center min-w-[110px]">
              <div className="text-[24px] font-black text-brand-red leading-none mb-1">👨‍🔧</div>
              <p className="text-muted-foreground text-[11px] font-medium">צוות מקצועי</p>
            </div>
          </div>
        </div>

        {/* Team image placeholder */}
        <div className="mt-10 md:mt-14 bg-muted border border-border h-[200px] md:h-[280px] flex items-center justify-center">
          <p className="text-muted-foreground/40 text-[13px] font-medium">מקום לתמונת הצוות</p>
        </div>
      </div>
    </section>
  );
}
