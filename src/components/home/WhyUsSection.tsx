import mechanicImage from "@/assets/mechanic-work.jpg";

export default function WhyUsSection() {
  return (
    <section className="bg-surface-dark py-14 md:py-20 px-6" dir="rtl" aria-label="למה לבחור בנו">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-start">
        <div className="md:pt-2">
          <h2 className="text-[20px] md:text-[26px] font-black text-primary-foreground mb-6">
            למה בוחרים בנו
          </h2>

          <div className="space-y-5">
            {[
              { title: "ניסיון של מעל 30 שנה", desc: "שלושה עשורים של טיפול מקצועי ברכבים מכל הסוגים." },
              { title: "שקיפות מלאה", desc: "כל תיקון מוסבר לפני שמתחילים. המחיר ידוע מראש." },
              { title: "אחריות על כל עבודה", desc: "מענה ישיר מצביקה. אחריות מלאה על כל חלק ועבודה." },
            ].map(({ title, desc }, i) => (
              <div key={i}>
                <h4 className="font-bold text-[13px] text-primary-foreground">{title}</h4>
                <p className="text-primary-foreground/30 text-[12px] mt-0.5 leading-relaxed">{desc}</p>
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
