import mechanicImage from "@/assets/mechanic-work.jpg";

const points = [
  { title: "ניסיון של מעל 30 שנה", desc: "שלושה עשורים של טיפול מקצועי ברכבים מכל הסוגים. הידע הזה בא לידי ביטוי בכל אבחון ותיקון." },
  { title: "שקיפות מלאה", desc: "כל תיקון מוסבר לפני שמתחילים. המחיר ידוע מראש, בלי הפתעות." },
  { title: "אחריות על כל עבודה", desc: "מענה ישיר מצביקה. אחריות מלאה על כל חלק ועבודה שבוצעה." },
];

export default function WhyUsSection() {
  return (
    <section className="bg-background py-20 md:py-28 px-6" dir="rtl" aria-label="למה לבחור בנו">
      <div className="max-w-[1100px] mx-auto">
        {/* Editorial header */}
        <div className="max-w-[620px] mb-14 md:mb-18">
          <p className="text-brand-red text-[11px] font-bold tracking-wider mb-3">למה אנחנו</p>
          <h2 className="text-[26px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12] mb-4">
            המוסך שלקוחות חוזרים אליו שנה אחרי שנה
          </h2>
          <p className="text-muted-foreground text-[14px] leading-[1.8] max-w-[480px]">
            אנחנו לא רק מתקנים רכבים. אנחנו בונים אמון — עם שקיפות, מקצועיות, ומחויבות אישית לכל לקוח.
          </p>
        </div>

        {/* Image + stacked points */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src={mechanicImage}
              alt="עבודת מכונאות מקצועית"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          <div className="md:pt-2">
            {points.map(({ title, desc }, i) => (
              <div
                key={i}
                className={`py-6 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <h4 className="font-bold text-[15px] text-foreground tracking-[-0.01em] mb-2">{title}</h4>
                <p className="text-muted-foreground text-[13px] leading-[1.8] max-w-[340px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
