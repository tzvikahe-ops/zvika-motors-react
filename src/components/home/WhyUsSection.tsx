import mechanicImage from "@/assets/mechanic-work.jpg";

const points = [
  { title: "ניסיון של מעל 30 שנה", desc: "שלושה עשורים של טיפול מקצועי ברכבים מכל הסוגים." },
  { title: "שקיפות מלאה", desc: "כל תיקון מוסבר לפני שמתחילים. המחיר ידוע מראש." },
  { title: "אחריות על כל עבודה", desc: "מענה ישיר מצביקה. אחריות מלאה על כל חלק ועבודה." },
];

export default function WhyUsSection() {
  return (
    <section className="bg-surface-darker py-16 md:py-24 px-6" dir="rtl" aria-label="למה לבחור בנו">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image first visually on desktop (order swap for RTL) */}
          <div className="overflow-hidden aspect-[4/3] order-2 md:order-1">
            <img
              src={mechanicImage}
              alt="עבודת מכונאות מקצועית"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-[22px] md:text-[28px] font-black text-primary-foreground tracking-[-0.02em] mb-3">
              למה בוחרים בנו
            </h2>
            <p className="text-primary-foreground/35 text-[13px] leading-[1.7] mb-8 max-w-[380px]">
              אנחנו לא רק מתקנים רכבים. אנחנו בונים אמון עם כל לקוח, כבר שלושה עשורים.
            </p>

            <div className="space-y-6">
              {points.map(({ title, desc }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-px bg-brand-red/30 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[14px] text-primary-foreground tracking-[-0.01em]">{title}</h4>
                    <p className="text-primary-foreground/35 text-[13px] mt-1 leading-[1.7] max-w-[320px]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
