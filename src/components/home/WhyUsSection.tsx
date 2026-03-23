import mechanicImage from "@/assets/mechanic-work.jpg";

const reasons = [
  {
    title: "מעל 30 שנות ניסיון",
    desc: "שלושה עשורים של טיפול מקצועי ברכבים מכל הסוגים.",
  },
  {
    title: "שקיפות מלאה, בלי הפתעות",
    desc: "כל תיקון מוסבר לפני שמתחילים. תדעו בדיוק מה נעשה ומה זה עולה.",
  },
  {
    title: "יחס אישי ואחריות מלאה",
    desc: "מענה ישיר מצביקה, יחס צמוד ואחריות על כל חלק ועבודה.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-surface-dark py-16 md:py-24 px-6" dir="rtl" aria-label="למה לבחור בנו">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-[22px] md:text-[30px] font-black text-primary-foreground mb-3 leading-tight">
            למה לקוחות בירושלים בוחרים בנו
          </h2>
          <p className="text-primary-foreground/35 text-[12.5px] mb-8 leading-relaxed">
            מקצועיות, שקיפות ואחריות בכל טיפול.
          </p>

          <div className="space-y-5">
            {reasons.map(({ title, desc }, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-4 h-px bg-brand-red/60 mt-[9px] shrink-0" />
                <div>
                  <h4 className="font-bold text-[13px] text-primary-foreground mb-0.5">{title}</h4>
                  <p className="text-primary-foreground/30 leading-relaxed text-[12.5px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden aspect-[4/3]">
          <img
            src={mechanicImage}
            alt="עבודת מכונאות מקצועית במוסך בירושלים"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
