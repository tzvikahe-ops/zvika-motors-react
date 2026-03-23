import { StarIcon } from "../Icons";

const reviews = [
  { text: "הגעתי עם תקלה שמוסכים אחרים לא הצליחו לפתור. צביקה אבחן את הבעיה תוך דקות ותיקן במחיר הוגן.", author: "יוסי כ.", initials: "יכ" },
  { text: "מוסך נקי, מסודר ואמין. תמיד מסבירים מה הבעיה לפני שמתחילים. לקוח קבוע כבר שנים.", author: "רונית ל.", initials: "רל" },
  { text: "הכנה לטסט מהירה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון. ממליצה בחום.", author: "דוד מ.", initials: "דמ" },
];

export default function ReviewsSection() {
  return (
    <section className="bg-background py-20 md:py-28 px-6 relative" dir="rtl" aria-label="המלצות לקוחות">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-wider">המלצות</p>
          </div>
          <h2 className="text-[26px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12]">לקוחות ממליצים</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map(({ text, author, initials }) => (
            <div key={author} className="relative bg-card border border-border p-7 md:p-8 shadow-[var(--shadow-card)]">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-12 h-px bg-brand-red/30" />
              <div className="absolute top-0 right-0 w-px h-12 bg-brand-red/30" />

              <div className="flex gap-0.5 mb-5">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="text-foreground/60 leading-[1.85] text-[13.5px] mb-6">
                &ldquo;{text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-dark flex items-center justify-center text-[10px] font-bold text-foreground/40">
                  {initials}
                </div>
                <cite className="not-italic text-foreground text-[13px] font-bold">{author}</cite>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border flex items-center justify-between">
          <a
            href="https://reviewthis.biz/dry-bird-8259"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-muted-foreground text-[12px] font-medium hover:text-foreground transition-colors duration-200 no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            כל הביקורות בגוגל ←
          </a>
          <p className="text-muted-foreground/40 text-[11px]">ממוצע 4.8 מתוך 5</p>
        </div>
      </div>
    </section>
  );
}
