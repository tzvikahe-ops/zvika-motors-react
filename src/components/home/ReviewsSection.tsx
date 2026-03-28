import { useEffect, useRef } from "react";

export default function ReviewsSection() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/v2/carousel_default.min.js";
    script.defer = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="bg-background py-16 md:py-28 px-5 sm:px-6 relative" dir="rtl" aria-label="ביקורות גוגל">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-wider">המלצות</p>
            <div className="w-8 h-px bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12] mb-3">
            לקוחות מספרים
          </h2>
          <p className="text-muted-foreground text-[13px] md:text-[14px] max-w-[400px] mx-auto">
            ביקורות אמיתיות מגוגל מלקוחות המוסך שלנו.
          </p>
        </div>

        {/* Featurable Google Reviews Widget */}
        <div
          id="featurable-02d896b2-2c43-46ae-bbe6-9783d9fc0c61"
          data-featurable-async
        />
      </div>
    </section>
  );
}
