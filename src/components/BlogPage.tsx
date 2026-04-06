import { useState } from "react";
import type { Page } from "@/types/page";
import { blogArticles, getAllTopics } from "@/data/blog-articles";
import type { BlogTopic } from "@/data/blog-articles";
import InternalLink from "./InternalLink";

const WhatsAppSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const PhoneSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

export default function BlogPage() {
  const [activeTopic, setActiveTopic] = useState<BlogTopic | "הכל">("הכל");

  // Fixed order for consistent UX
  const topics: BlogTopic[] = [
    "תקלות ואבחון",
    "טיפול שוטף",
    "בלמים ובטיחות",
    "מזגן וקירור",
    "הכנה לטסט",
    "בדיקה לפני קנייה",
    "חשמל ומצבר",
    "עלויות ומחירים",
    "רכב בירושלים",
  ];

  const filteredArticles = activeTopic === "הכל"
    ? blogArticles
    : blogArticles.filter((a) => a.topic === activeTopic);

  return (
    <div className="bg-background" dir="rtl">
      {/* Hero - knowledge center positioning */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-5 sm:px-6 bg-surface-darker relative">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-red/50" />
            <p className="text-brand-red text-[12px] font-bold tracking-[0.15em] uppercase">מרכז הידע של המוסך</p>
          </div>
          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.1] mb-4">
            מדריכים מעשיים לבעלי רכב
          </h1>
          <p className="text-primary-foreground/50 text-[14px] md:text-[15px] leading-[1.8] max-w-[600px]">
            רעש מוזר, נורית שנדלקה, או שאלה על עלויות טיפול? כאן תמצאו תשובות מקצועיות לשאלות שאנחנו שומעים כל יום. בשפה פשוטה וללא סיבוכים.
          </p>

          {/* Quick topic jump - visual hint of depth */}
          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((topic) => {
              const count = blogArticles.filter((a) => a.topic === topic).length;
              return (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className="text-[11px] text-primary-foreground/35 hover:text-primary-foreground/70 bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 px-3 py-1.5 transition-colors duration-200 cursor-pointer"
                >
                  {topic}
                  <span className="mr-1 text-primary-foreground/20">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky filter bar */}
      <section className="py-4 px-5 sm:px-6 border-b border-border bg-background sticky top-[60px] z-20">
        <div className="max-w-[900px] mx-auto flex items-center gap-3">
          <span className="text-[12px] text-muted-foreground font-medium shrink-0 hidden sm:block">סינון:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTopic("הכל")}
              className={`text-[12px] font-bold px-4 py-2 border transition-colors duration-200 cursor-pointer ${
                activeTopic === "הכל"
                  ? "bg-brand-red text-white border-brand-red"
                  : "bg-transparent text-foreground/60 border-border hover:border-brand-red/30 hover:text-brand-red"
              }`}
            >
              הכל ({blogArticles.length})
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`text-[12px] font-bold px-4 py-2 border transition-colors duration-200 cursor-pointer ${
                  activeTopic === topic
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-transparent text-foreground/60 border-border hover:border-brand-red/30 hover:text-brand-red"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-20 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          {activeTopic !== "הכל" && (
            <p className="text-muted-foreground text-[13px] mb-6">
              {filteredArticles.length} מאמרים בנושא <span className="font-bold text-foreground">{activeTopic}</span>
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <InternalLink
                key={article.slug}
                page="blog-article"
                slug={article.slug}
                className="bg-card border border-border p-6 md:p-7 text-right hover:border-brand-red/20 transition-colors duration-200 group flex flex-col no-underline"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-brand-red/70 bg-brand-red/5 px-2 py-0.5 border border-brand-red/10">
                    {article.topic}
                  </span>
                  <span className="text-muted-foreground text-[11px] font-medium">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-[16px] md:text-[18px] font-bold text-foreground tracking-[-0.02em] leading-[1.35] mb-3 group-hover:text-brand-red transition-colors duration-200">
                  {article.title}
                </h2>
                <p className="text-foreground/50 text-[13px] leading-[1.8] flex-1 mb-4">
                  {article.excerpt}
                </p>
                <span className="text-brand-red text-[12px] font-bold inline-flex items-center gap-1">
                  קראו עוד
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-1"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </span>
              </InternalLink>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="text-center text-muted-foreground text-[14px] py-12">
              אין מאמרים בנושא הזה עדיין.
            </p>
          )}
        </div>
      </section>

      {/* Trust bridge - not salesy, just helpful */}
      <section className="py-12 md:py-16 px-5 sm:px-6 bg-surface-warm">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-muted-foreground text-[12px] font-bold tracking-wider mb-3 uppercase">לא מצאתם תשובה?</p>
          <h2 className="text-[22px] md:text-[28px] font-black text-foreground tracking-[-0.02em] mb-3">
            שלחו לנו שאלה, נחזור אליכם עם תשובה
          </h2>
          <p className="text-foreground/50 text-[13px] md:text-[14px] leading-[1.8] mb-6">
            אם קראתם ועדיין לא בטוחים מה קורה עם הרכב, אפשר לשלוח הודעה קצרה ולקבל כיוון ראשוני. בלי התחייבות.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/972526514446?text=שלום%2C%20קראתי%20מאמר%20באתר%20ויש%20לי%20שאלה%20נוספת%20%F0%9F%94%A7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#0e7a6d] text-white px-6 py-3 text-[13px] font-bold no-underline transition-all duration-200 shadow-[0_4px_24px_-6px_rgba(18,140,126,0.35)]"
            >
              <WhatsAppSVG />
              שלחו שאלה בוואטסאפ
              <span className="sr-only">(נפתח בחלון חדש)</span>
            </a>
            <a
              href="tel:02-6514446"
              className="btn-primary text-center no-underline inline-flex items-center justify-center gap-2"
            >
              <PhoneSVG />
              02-6514446
            </a>
          </div>
        </div>
      </section>

      {/* Internal links for SEO + navigation */}
      <section className="py-10 px-5 sm:px-6 border-t border-border">
        <div className="max-w-[900px] mx-auto">
          <p className="text-muted-foreground text-[12px] font-bold tracking-wider mb-4">עמודים שימושיים</p>
          <div className="flex flex-wrap gap-3">
            <InternalLink page="services" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">
              שירותי המוסך שלנו
            </InternalLink>
            <InternalLink page="faq" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">
              שאלות ותשובות נפוצות
            </InternalLink>
            <InternalLink page="contact" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">
              צור קשר ותיאום תור
            </InternalLink>
            <InternalLink page="about" className="text-[12px] text-foreground/50 hover:text-brand-red border border-border hover:border-brand-red/20 px-4 py-2 transition-colors duration-200 no-underline">
              הסיפור שלנו
            </InternalLink>
          </div>
        </div>
      </section>
    </div>
  );
}
