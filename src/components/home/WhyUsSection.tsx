import mechanicImage from "@/assets/mechanic-work.jpg";

export default function WhyUsSection() {
  return (
    <section className="bg-surface-dark py-16 md:py-24 px-6" dir="rtl" aria-label="למה לבחור בנו">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
        <div className="md:pt-2">
          <h2 className="text-[22px] md:text-[28px] font-black text-primary-foreground tracking-[-0.02em] mb-8">
            למה בוחרים בנו
          </h2>

          <div className="space-y-6">
            {[
              { title: "ניסיון של מעל 30 שנה", desc: "שלושה עשורים של טיפול מקצועי ברכבים מכל הסוגים." },
              { title: "שקיפות מלאה", desc: "כל תיקון מוסבר לפני שמתחילים. המחיר ידוע מראש." },
              { title: "אחריות על כל עבודה", desc: "מענה ישיר מצביקה. אחריות מלאה על כל חלק ועבודה." },
            ].map(({ title, desc }, i) => (
              <div key={i}>
                <h4 className="font-bold text-[14px] text-primary-foreground tracking-[-0.01em]">{title}</h4>
                <p className="text-primary-foreground/35 text-[13px] mt-1 leading-[1.7] max-w-[340px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden aspect-[3/2]">
          <img
            src={mechanicImage}
            alt="עבודת מכונאות מקצועית"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
