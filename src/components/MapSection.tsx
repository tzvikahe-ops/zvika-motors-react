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
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" aria-hidden="true">
                    <path d="M12 2.5c-4.9 0-8.9 3.8-8.9 8.5 0 2.1.8 4 2.1 5.5-.2 1.2-.8 2.3-1.6 3.2-.2.2 0 .6.3.6 1.9 0 3.7-.7 5.1-1.9.6.2 1.2.3 1.9.3 4.9 0 8.9-3.8 8.9-8.5S16.9 2.5 12 2.5Z" fill="currentColor"/>
                    <circle cx="8.7" cy="10.6" r="1.05" fill="hsl(var(--background))"/>
                    <circle cx="13.4" cy="10.6" r="1.05" fill="hsl(var(--background))"/>
                    <path d="M8.5 14c.6.7 1.4 1.1 2.3 1.1s1.7-.4 2.3-1.1" fill="none" stroke="hsl(var(--background))" strokeWidth="1.2" strokeLinecap="round"/>
                    <circle cx="7.5" cy="17.6" r="1.25" fill="currentColor"/>
                    <circle cx="12.5" cy="17.6" r="1.25" fill="currentColor"/>
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
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" aria-hidden="true">
                    <path d="M12 2.2c-3.3 0-5.9 2.7-5.9 6 0 1.3.3 2.7.9 4.1h9.8c.6-1.4.9-2.8.9-4.1 0-3.3-2.6-6-5.9-6Z" fill="hsl(4 90% 58%)"/>
                    <path d="M7 12.3c1 2.4 2.7 4.8 3.9 6.4l1.1 1.4v-7.8H7Z" fill="hsl(145 63% 42%)"/>
                    <path d="M12 12.3v7.8l1.1-1.4c1.2-1.6 2.9-4 3.9-6.4H12Z" fill="hsl(45 96% 52%)"/>
                    <circle cx="12" cy="8.2" r="2.35" fill="hsl(217 100% 58%)"/>
                    <circle cx="12" cy="8.2" r="1.05" fill="hsl(var(--primary-foreground))"/>
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
