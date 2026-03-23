import mechanicImage from "@/assets/mechanic-work.jpg";

const points = [
  { num: "01", title: "ניסיון של מעל 30 שנה", desc: "התחלנו ב-1993 ומאז טיפלנו באלפי רכבים. אנחנו יודעים לזהות בעיות במהירות ולחסוך לכם זמן וכסף." },
  { num: "02", title: "מדברים בגובה העיניים", desc: "לפני כל תיקון, מסבירים מה הבעיה ומה העלות. בלי הפתעות בחשבונית, בלי עבודות מיותרות." },
  { num: "03", title: "צביקה עומד מאחורי כל עבודה", desc: "לא מנהל מרחוק. צביקה נמצא במוסך, מכיר את הלקוחות בשם, ולוקח אחריות אישית על כל טיפול." },
];

export default function WhyUsSection() {
  return (
    <section className="bg-background py-16 md:py-28 px-5 sm:px-6 relative" dir="rtl" aria-label="למה לבחור בנו">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[1100px] mx-auto">
        {/* Editorial header */}
        <div className="max-w-[620px] mb-10 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-wider">למה אנחנו</p>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12] mb-4">
            המוסך שלקוחות חוזרים אליו<br className="hidden md:block" /> שנה אחרי שנה
          </h2>
          <p className="text-muted-foreground text-[13px] md:text-[14px] leading-[1.85] max-w-[460px]">
            אנחנו לא רק מתקנים רכבים. אנחנו בונים יחסי אמון ארוכי טווח, עם שירות אנושי, מקצועיות ללא פשרות ומחויבות אישית לכל לקוח.
          </p>
        </div>

        {/* Image with frame + stacked points */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-start">
          <div className="relative">
            <div className="image-frame overflow-hidden aspect-[4/3]">
              <img
                src={mechanicImage}
                alt="עבודת מכונאות מקצועית במוסך של צביקה"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          <div className="md:pt-2">
            {points.map(({ num, title, desc }, i) => (
              <div
                key={i}
                className={`relative py-6 md:py-7 pr-6 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className="absolute right-0 top-6 md:top-7 text-[11px] font-black text-brand-red/30">{num}</span>
                <h4 className="font-bold text-[14px] md:text-[15px] text-foreground tracking-[-0.01em] mb-2">{title}</h4>
                <p className="text-muted-foreground text-[12.5px] md:text-[13px] leading-[1.85] max-w-[340px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
