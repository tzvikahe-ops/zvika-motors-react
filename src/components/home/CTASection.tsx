import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

const WhatsAppSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const PhoneSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" dir="rtl" aria-label="יצירת קשר">
      <div className="bg-brand-red relative">
        <div className="absolute inset-0 pattern-grid opacity-10" />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-16 md:py-20 relative z-10">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-accent-foreground tracking-[-0.02em] leading-[1.15]">
              הרכב צריך טיפול? אנחנו כאן.
            </h2>
            <p className="text-accent-foreground/75 text-[14px] md:text-[15px] leading-[1.8] max-w-[480px]">
              תתקשרו או תשלחו וואטסאפ — ונתאם ביקור מהיר. בלי תורים ארוכים, בלי הפתעות במחיר. אנחנו כאן א׳–ה׳ 08:00–16:30.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2">
              {/* GA4: whatsapp_click / cta */}
              <a
                href="https://wa.me/972526514446"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("cta")}
                className="inline-flex items-center justify-center gap-2 bg-accent-foreground text-foreground px-8 py-3.5 text-[13px] font-bold no-underline hover:bg-accent-foreground/90 transition-all duration-200"
              >
                <WhatsAppSVG />
                שלחו וואטסאפ
              </a>
              {/* GA4: phone_click / cta */}
              <a
                href="tel:02-6514446"
                onClick={() => trackPhoneClick("cta")}
                className="inline-flex items-center justify-center gap-2 border border-accent-foreground/30 text-accent-foreground/90 px-8 py-3.5 text-[13px] font-bold no-underline hover:bg-accent-foreground/10 transition-all duration-200"
              >
                <PhoneSVG />
                התקשרו: 02-6514446
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
