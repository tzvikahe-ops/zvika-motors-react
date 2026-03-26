import { MapPin, Phone, Clock } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-surface-darker py-16 md:py-28 px-5 sm:px-6 relative" dir="rtl" aria-label="מצאו אותנו">
      <div className="absolute inset-0 pattern-dots opacity-40" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-wider">מיקום</p>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.12] mb-3">
            בואו לבקר
          </h2>
          <p className="text-primary-foreground/35 text-[13px] md:text-[14px] leading-[1.75] max-w-[400px]">
            גבעת שאול, ירושלים. חניה נוחה וגישה קלה מכל חלקי העיר.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] overflow-hidden border border-primary-foreground/[0.08]">
          {/* Info side */}
          <div className="bg-surface-dark p-6 sm:p-8 md:p-10 flex flex-col justify-between relative">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-px bg-brand-red/25" />
            <div className="absolute top-0 right-0 w-px h-16 bg-brand-red/25" />

            <div>
              <h3 className="font-black text-[15px] md:text-[16px] text-primary-foreground mb-1">אור-צת שירותי רכב</h3>
              <p className="text-primary-foreground/25 text-[11px] mb-6 md:mb-8 font-medium">המוסך של צביקה · מאז 1993</p>

              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-brand-red/50 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-[13px] text-primary-foreground">האופה 4, ירושלים</p>
                    <p className="text-primary-foreground/30 text-[11px] mt-0.5">גבעת שאול · חניה נוחה</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-brand-red/50 shrink-0" />
                  <a href="tel:02-6514446" className="font-bold text-[13px] text-primary-foreground hover:text-brand-red transition-colors no-underline">02-651-4446</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={15} className="text-brand-red/50 shrink-0" />
                  <p className="text-primary-foreground/40 text-[12px]">א׳–ה׳ 08:00–16:30</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 mt-6 md:mt-8">
              <a
                href="https://waze.com/ul?q=האופה%204%2C%20ירושלים&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center no-underline inline-flex items-center justify-center gap-3 h-[46px] leading-none"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 shrink-0" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="currentColor">
                    <path d="M12 2C7.03 2 3 5.92 3 10.75c0 2.17.81 4.16 2.16 5.69-.24 1.31-.88 2.52-1.82 3.49-.23.24-.06.65.28.65 2.08 0 3.98-.76 5.44-2.03.63.17 1.29.26 1.96.26 4.97 0 9-3.92 9-8.75S16.97 2 12 2zm-3.3 10.6c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm4.8-1.2c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2.54-1.2 1.2-1.2 1.2.54 1.2 1.2zm-5.2 3.5c.62.75 1.55 1.18 2.56 1.18s1.94-.43 2.56-1.18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </span>
                נווטו עם Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=האופה+4,+ירושלים"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark text-center no-underline inline-flex items-center justify-center gap-3 h-[46px] leading-none"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 shrink-0" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </span>
                Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[260px] md:min-h-[420px]">
            <iframe
              title="מיקום המוסך של צביקה – אור-צת שירותי רכב, ירושלים"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.5!2d35.1924!3d31.7857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z15TXkNeV16TXlCA0LCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 260 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
