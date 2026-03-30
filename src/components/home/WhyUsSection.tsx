import type { Page } from "@/types/page";
import mechanicImage from "@/assets/mechanic-work.webp";

const points = [
  { num: "01", title: "ניסיון של מעל 30 שנה", desc: "התחלנו ב-1993 ומאז טיפלנו באלפי רכבים. אנחנו יודעים לזהות בעיות במהירות ולחסוך לכם זמן וכסף." },
  { num: "02", title: "מדברים בגובה העיניים", desc: "לפני כל תיקון, מסבירים מה הבעיה ומה העלות. בלי הפתעות בחשבונית, בלי עבודות מיותרות." },
  { num: "03", title: "צביקה עומד מאחורי כל עבודה", desc: "לא מנהל מרחוק. צביקה נמצא במוסך, מכיר את הלקוחות בשם, ולוקח אחריות אישית על כל טיפול." },
  { num: "04", title: "מחירים הוגנים ושקופים", desc: "תמיד תדעו מראש כמה עולה הטיפול. אנחנו לא מוסיפים עבודות שלא צריך ולא מנפחים חשבוניות." },
  { num: "05", title: "ציוד מתקדם ומקצועי", desc: "דיאגנוסטיקה ממוחשבת, כלים מקצועיים ועדכונים שוטפים. כך אנחנו מזהים תקלות שאחרים מפספסים." },
];

export default function WhyUsSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-background relative overflow-hidden" dir="rtl" aria-label="למה לבחור בנו">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image - edge to edge */}
        <div className="relative min-h-[300px] md:min-h-[620px]">
          <img
            src={mechanicImage}
            alt="עבודת מכונאות מקצועית במוסך של צביקה"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="hidden md:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute bottom-6 right-6 bg-surface-darker/90 backdrop-blur-sm px-4 py-2.5">
            <span className="text-brand-red text-[20px] font-black leading-none">1993</span>
            <span className="text-primary-foreground/55 text-[10px] font-bold block mt-0.5">שנת הקמה</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-[0.15em] uppercase">למה אנחנו</p>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-black text-foreground tracking-[-0.03em] leading-[1.1] mb-4">
            לקוחות שמגיעים אלינו<br /> לא ממהרים לחפש מוסך אחר
          </h2>
          <p className="text-muted-foreground text-[13px] md:text-[14px] leading-[1.85] max-w-[440px] mb-8">
            יש סיבה שרוב הלקוחות שלנו מגיעים דרך המלצה. כשעובדים ביושר ובמקצועיות, אנשים חוזרים.
          </p>

          <div>
            {points.map(({ num, title, desc }, i) => (
              <div
                key={i}
                className={`relative py-5 md:py-6 pr-7 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className="absolute right-0 top-5 md:top-6 text-[11px] font-black text-brand-red/60">{num}</span>
                <h3 className="font-bold text-[14px] md:text-[15px] text-foreground tracking-[-0.01em] mb-1.5">{title}</h3>
                <p className="text-muted-foreground text-[12.5px] md:text-[13px] leading-[1.85] max-w-[380px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
