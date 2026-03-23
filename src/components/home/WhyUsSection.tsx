import mechanicImage from "@/assets/mechanic-work.jpg";

const reasons = [
  {
    num: "01",
    title: "מעל 30 שנות ניסיון",
    desc: "שלושה עשורים של טיפול מקצועי ברכבים מכל הסוגים. אנחנו מכירים כל בעיה מקרוב.",
  },
  {
    num: "02",
    title: "שקיפות מלאה — בלי הפתעות",
    desc: "כל תיקון מוסבר לפני שמתחילים. תדעו בדיוק מה נעשה ומה זה עולה.",
  },
  {
    num: "03",
    title: "יחס אישי ואחריות מלאה",
    desc: "מענה ישיר מצביקה, יחס צמוד ואחריות מלאה על כל חלק ועבודה.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-surface-dark py-20 md:py-28 px-6" dir="rtl" aria-label="למה לבחור בנו">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text side */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[3px] bg-brand-red rounded-full" />
            <span className="text-brand-red text-[11px] font-bold tracking-wider">למה אנחנו</span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-black text-primary-foreground mb-4 leading-tight">
            למה לקוחות בירושלים<br />בוחרים בנו?
          </h2>
          <p className="text-primary-foreground/45 text-sm mb-10 leading-relaxed max-w-[400px]">
            כי אצלנו הרכב שלכם בידיים בטוחות — מקצועיות, שקיפות ואחריות בכל טיפול.
          </p>

          <div className="space-y-6">
            {reasons.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 items-start">
                <div className="bg-brand-red text-accent-foreground w-10 h-10 rounded-md flex items-center justify-center text-xs font-black shrink-0">
                  {num}
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-primary-foreground mb-1">{title}</h4>
                  <p className="text-primary-foreground/40 leading-relaxed text-[13px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-[var(--shadow-xl)] relative group">
          <img
            src={mechanicImage}
            alt="עבודת מכונאות מקצועית במוסך בירושלים"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
