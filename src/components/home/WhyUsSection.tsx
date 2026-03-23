import mechanicImage from "@/assets/mechanic-work.jpg";

const reasons = [
  {
    title: "מעל 30 שנות ניסיון",
    desc: "שלושה עשורים של טיפול מקצועי ברכבים מכל הסוגים. אנחנו מכירים כל בעיה מקרוב.",
  },
  {
    title: "שקיפות מלאה, בלי הפתעות",
    desc: "כל תיקון מוסבר לפני שמתחילים. תדעו בדיוק מה נעשה ומה זה עולה.",
  },
  {
    title: "יחס אישי ואחריות מלאה",
    desc: "מענה ישיר מצביקה, יחס צמוד ואחריות מלאה על כל חלק ועבודה.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-surface-dark py-20 md:py-28 px-6" dir="rtl" aria-label="למה לבחור בנו">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="text-2xl md:text-[34px] font-black text-primary-foreground mb-4 leading-tight">
            למה לקוחות בירושלים בוחרים בנו
          </h2>
          <p className="text-primary-foreground/40 text-[13px] mb-10 leading-relaxed max-w-[400px]">
            כי אצלנו הרכב שלכם בידיים בטוחות. מקצועיות, שקיפות ואחריות בכל טיפול.
          </p>

          <div className="space-y-7">
            {reasons.map(({ title, desc }, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-5 h-px bg-brand-red mt-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-[14px] text-primary-foreground mb-1">{title}</h4>
                  <p className="text-primary-foreground/35 leading-relaxed text-[13px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
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
