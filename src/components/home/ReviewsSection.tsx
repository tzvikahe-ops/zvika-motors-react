import { StarIcon } from "../Icons";

const reviews = [
  {
    text: "הגעתי עם תקלה שמוסכים אחרים לא הצליחו לפתור. צביקה אבחן את הבעיה תוך דקות ותיקן במחיר הוגן. מוסך שסומכים עליו.",
    author: "יוסי כהן",
    location: "ירושלים",
  },
  {
    text: "מוסך נקי, מסודר ואמין. תמיד מסבירים מה הבעיה לפני שמתחילים. לקוח קבוע כבר שנים ולא מחליף.",
    author: "רונית לוי",
    location: "מבשרת ציון",
  },
  {
    text: "הכנה לטסט מהירה ומקצועית. הרגשתי בידיים טובות מהרגע הראשון. ממליץ לכל מי שמחפש מוסך אמין.",
    author: "דוד מזרחי",
    location: "ירושלים",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-background py-20 md:py-28 px-6" dir="rtl" aria-label="המלצות לקוחות">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center gap-2 justify-center mb-3">
            <div className="w-8 h-[3px] bg-brand-red rounded-full" />
            <span className="text-brand-red text-[11px] font-bold tracking-wider">המלצות</span>
            <div className="w-8 h-[3px] bg-brand-red rounded-full" />
          </div>
          <h2 className="text-3xl md:text-[36px] font-black text-foreground mb-3">הלקוחות שלנו ממליצים</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            לקוחות שמגיעים אלינו חוזרים שנה אחרי שנה — וגם מביאים את החברים
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map(({ text, author, location }) => (
            <div
              key={author}
              className="bg-card rounded-lg p-7 border border-border flex flex-col gap-4 hover:shadow-[var(--shadow-md)] transition-all duration-300 relative group"
            >
              {/* Quote mark */}
              <div className="text-brand-red/10 text-[72px] font-black leading-none absolute top-3 left-5 select-none" aria-hidden="true">
                ״
              </div>

              <div className="flex gap-0.5 justify-end relative z-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-foreground/70 leading-7 text-[13px] text-right flex-1 relative z-10">
                {text}
              </p>
              <div className="text-right mt-auto pt-4 border-t border-border relative z-10">
                <p className="font-bold text-foreground text-[13px]">{author}</p>
                <p className="text-muted-foreground text-[11px] mt-0.5">{location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12">
          <a
            href="https://reviewthis.biz/dry-bird-8259"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-surface-dark text-primary-foreground rounded-md px-7 py-3 text-[13px] font-bold cursor-pointer hover:bg-surface-darker transition-all duration-200 no-underline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            כתבו לנו ביקורת בגוגל
          </a>
        </div>
      </div>
    </section>
  );
}
