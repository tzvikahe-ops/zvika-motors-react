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
                className="btn-primary text-center no-underline flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M20.54 6.63c.69 2.24.5 4.65-.58 6.81-1.07 2.18-2.94 3.84-5.15 4.58-.6.2-1.22.34-1.85.41.17.5.44.97.81 1.37.53.57 1.24.96 2.02 1.12.26.05.42.31.37.57a.47.47 0 0 1-.46.38c-.04 0-.07 0-.11-.01a4.72 4.72 0 0 1-2.72-1.5 4.64 4.64 0 0 1-.87-1.56c-.28.01-.57 0-.85-.03a8.84 8.84 0 0 1-6.04-3.27 8.87 8.87 0 0 1-1.76-6.56A8.84 8.84 0 0 1 7.47 2.9a8.83 8.83 0 0 1 6.56-1.76c2.4.29 4.56 1.47 6.04 3.27a8.7 8.7 0 0 1 .47.6v1.62zM9.2 9.45a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16zm5.23 0a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16zm-5.83 4.08c-.04.17.03.34.16.45a4.49 4.49 0 0 0 2.91 1.05c1.14 0 2.17-.42 2.92-1.05a.46.46 0 0 0-.44-.78 3.58 3.58 0 0 1-2.48.92c-.96 0-1.82-.36-2.48-.92a.46.46 0 0 0-.59.33z"/>
                </svg>
                נווטו עם Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=האופה+4,+ירושלים"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark text-center no-underline"
              >
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
