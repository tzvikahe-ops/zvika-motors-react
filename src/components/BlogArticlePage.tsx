import type { Page } from "@/types/page";
import { getArticleBySlug, blogArticles } from "@/data/blog-articles";
import type { ArticleSection } from "@/data/blog-articles";
import InternalLink, { pageToHref } from "./InternalLink";

const WhatsAppSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

function renderSection(section: ArticleSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="text-[18px] md:text-[22px] font-bold text-foreground tracking-[-0.02em] leading-[1.3] mt-8 mb-3">
          {section.text}
        </h2>
      );
    case "p":
      return (
        <p key={index} className="text-foreground/65 text-[14px] md:text-[15px] leading-[2] mb-4">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="list-disc list-inside text-foreground/65 text-[14px] md:text-[15px] leading-[2.2] mb-4 space-y-1 pr-2">
          {section.items?.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "cta":
      if (section.ctaPage) {
        return (
          <div key={index} className="mt-10 mb-4 p-6 md:p-8 bg-surface-warm border border-border text-center">
            <p className="text-foreground font-bold text-[16px] md:text-[18px] mb-4">{section.ctaText}</p>
            <InternalLink
              page={section.ctaPage}
              className="btn-primary inline-flex items-center justify-center gap-2 text-[14px] no-underline"
            >
              {section.linkText || "לעמוד השירות"}
            </InternalLink>
          </div>
        );
      }
      return (
        <div key={index} className="mt-10 mb-4 p-6 md:p-8 bg-surface-warm border border-border text-center">
          <p className="text-foreground font-bold text-[16px] md:text-[18px] mb-4">{section.ctaText}</p>
          <a
            href={section.ctaHref || "https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary no-underline inline-flex items-center justify-center gap-2 text-[14px]"
          >
            <WhatsAppSVG />
            דברו איתנו בוואטסאפ
          </a>
        </div>
      );
    case "quote":
      return (
        <blockquote key={index} className="border-r-4 border-brand-red/50 pr-5 my-6 bg-surface-warm p-5">
          <p className="text-foreground/80 text-[14px] md:text-[15px] leading-[2] italic mb-3">{section.text}</p>
          <cite className="text-foreground/40 text-[12px] font-bold not-italic"><cite className="text-foreground/40 text-[12px] font-bold not-italic">צביקה, בעל המוסך של צביקה (אור-צת), ירושלים</cite> של צביקה (אור-צת), ירושלים</cite>
        </blockquote>
      );
    case "internal-link":
      return (
        <p key={index} className="text-foreground/65 text-[14px] md:text-[15px] leading-[2] mb-4">
          {section.text}{" "}
          {section.linkPage && (
            <InternalLink
              page={section.linkPage}
              slug={section.linkSlug}
              className="text-brand-red font-bold hover:underline text-[14px] md:text-[15px] no-underline"
            >
              {section.linkText} →
            </InternalLink>
          )}
        </p>
      );
    default:
      return null;
  }
}

interface BlogArticlePageProps {
  slug: string;
}

export default function BlogArticlePage({ slug }: BlogArticlePageProps) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="bg-background pt-32 pb-20 px-5 text-center" dir="rtl">
        <h1 className="text-[24px] font-bold text-foreground mb-4">המאמר לא נמצא</h1>
        <InternalLink page="blog" className="text-brand-red font-bold text-[14px] no-underline">
          חזרו לבלוג
        </InternalLink>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter((a) => a.topic === article.topic && a.slug !== article.slug)
    .slice(0, 2);

  const articleUrl = `https://www.ortzat.co.il/blog/${encodeURIComponent(article.slug)}`;

  return (
    <div className="bg-background" dir="rtl">

      {/* Header */}
      <section className="pt-28 pb-8 md:pt-32 md:pb-12 px-5 sm:px-6 bg-surface-darker relative">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="max-w-[750px] mx-auto relative z-10">
          <InternalLink
            page="blog"
            className="inline-flex items-center gap-1.5 text-primary-foreground/40 text-[12px] font-bold mb-5 hover:text-primary-foreground/70 transition-colors no-underline"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            חזרה לבלוג
          </InternalLink>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold text-brand-red/80 bg-brand-red/10 px-2 py-0.5 border border-brand-red/15">
              {article.topic}
            </span>
            <span className="text-primary-foreground/30 text-[12px] font-medium">
              {article.readTime} · {new Date(article.date).toLocaleDateString("he-IL")}
            </span>
          </div>
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.15]">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-10 md:py-16 px-5 sm:px-6">
        <div className="max-w-[750px] mx-auto">
          {article.content.map((section, i) => renderSection(section, i))}

          {/* Contextual next steps */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-foreground/40 text-[11px] font-bold tracking-wider mb-4">הצעד הבא</p>
            <div className="flex flex-wrap gap-3">
              {article.relatedService && (
                <InternalLink
                  page="services"
                  hash={article.relatedServiceAnchor}
                  className="border border-brand-red/20 text-brand-red text-[12px] font-bold px-4 py-2 hover:bg-brand-red/5 transition-colors duration-200 no-underline"
                >
                  {article.relatedService} →
                </InternalLink>
              )}
              <InternalLink
                page="contact"
                className="border border-border text-foreground/60 text-[12px] font-medium px-4 py-2 hover:border-brand-red/30 hover:text-brand-red transition-colors duration-200 no-underline"
              >
                צור קשר
              </InternalLink>
              <InternalLink
                page="faq"
                className="border border-border text-foreground/60 text-[12px] font-medium px-4 py-2 hover:border-brand-red/30 hover:text-brand-red transition-colors duration-200 no-underline"
              >
                שאלות נפוצות
              </InternalLink>
            </div>
          </div>

          {/* Related articles from same topic */}
          {relatedArticles.length > 0 && (
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-foreground/40 text-[11px] font-bold tracking-wider mb-4">מאמרים נוספים בנושא {article.topic}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((related) => (
                  <InternalLink
                    key={related.slug}
                    page="blog-article"
                    slug={related.slug}
                    className="bg-card border border-border p-5 text-right hover:border-brand-red/20 transition-colors duration-200 group no-underline block"
                  >
                    <h3 className="text-[14px] font-bold text-foreground leading-[1.4] mb-2 group-hover:text-brand-red transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-foreground/40 text-[12px] leading-[1.6]">
                      {related.excerpt}
                    </p>
                  </InternalLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
