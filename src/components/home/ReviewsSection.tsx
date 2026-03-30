import type { Page } from "@/types/page";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import InternalLink from "../InternalLink";

export default function ReviewsSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-background py-16 md:py-28 px-5 sm:px-6 relative" dir="rtl" aria-label="ביקורות גוגל">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[1100px] mx-auto">
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

        <GoogleReviewsCarousel />

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <InternalLink page="contact" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">גם אתם רוצים שירות כזה? צרו קשר ←</InternalLink>
          <InternalLink page="services" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">ראו את כל השירותים שלנו ←</InternalLink>
        </div>
      </div>
    </section>
  );
}
