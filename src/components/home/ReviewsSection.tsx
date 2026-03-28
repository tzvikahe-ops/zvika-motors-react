import { StarIcon } from "../Icons";

const reviews = [
  { text: "הגעתי עם רעש מוזר במנוע שמוסכים אחרים לא מצאו. צביקה אבחן את זה תוך דקות, תיקן באותו יום, והמחיר היה הוגן. מאז אני רק אצלו.", author: "יוסי כ.", initials: "יכ" },
  { text: "אני מביאה את הרכב לפה כבר 8 שנים. תמיד מסבירים מה צריך ומה לא. פעם אמרו לי שלא צריך להחליף משהו שמוסך אחר דרש. זה אומר הכל.", author: "רונית ל.", initials: "רל" },
  { text: "הכנתי טסט אצל צביקה. הוא עבר על הכל, תיקן מה שצריך, והרכב עבר בפעם הראשונה. מקצועי, ישיר, בלי סיפורים.", author: "דוד מ.", initials: "דמ" },
];

const WhatsAppSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

export default function ReviewsSection() {
  return (
    <section className="bg-background py-16 md:py-28 px-5 sm:px-6 relative" dir="rtl" aria-label="לקוחות מספרים">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-wider">המלצות</p>
            <div className="w-8 h-px bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12] mb-3">
            לקוחות מספרים
          </h2>
          <p className="text-muted-foreground text-[13px] md:text-[14px] max-w-[400px] mx-auto">
            אלפי לקוחות מרוצים לאורך השנים. הנה מה שחלקם אומרים.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {reviews.map(({ text, author, initials }) => (
            <div key={author} className="relative bg-card border border-border p-6 sm:p-7 md:p-8 shadow-[var(--shadow-card)]">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-12 h-px bg-brand-red/30" />
              <div className="absolute top-0 right-0 w-px h-12 bg-brand-red/30" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4 md:mb-5">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="text-foreground/55 leading-[1.85] text-[13px] mb-5 md:mb-6">
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

        {/* CTA under reviews */}
        <div className="mt-10 md:mt-14 flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/972526514446"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary no-underline inline-flex items-center justify-center gap-2"
            >
              <WhatsAppSVG />
              רוצים טיפול כזה? שלחו וואטסאפ
            </a>
          </div>
          <div className="flex items-center gap-4">
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
            <span className="text-muted-foreground/40 text-[11px]">ממוצע 4.8 מתוך 5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
