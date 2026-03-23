import { MapPin, Phone, Clock } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-surface-darker py-20 md:py-28 px-6 relative" dir="rtl" aria-label="מצאו אותנו">
      <div className="absolute inset-0 pattern-dots opacity-40" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-wider">מיקום</p>
          </div>
          <h2 className="text-[26px] md:text-[34px] font-black text-primary-foreground tracking-[-0.03em] leading-[1.12] mb-3">
            בואו לבקר
          </h2>
          <p className="text-primary-foreground/35 text-[14px] leading-[1.7] max-w-[400px]">
            גבעת שאול, ירושלים. חניה נוחה וגישה קלה מכל חלקי העיר.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] overflow-hidden border border-primary-foreground/[0.08]">
          {/* Info side */}
          <div className="bg-surface-dark p-8 md:p-10 flex flex-col justify-between relative">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-px bg-brand-red/25" />
            <div className="absolute top-0 right-0 w-px h-16 bg-brand-red/25" />

            <div>
              <h3 className="font-black text-[16px] text-primary-foreground mb-1">אור-צת שירותי רכב</h3>
              <p className="text-primary-foreground/25 text-[11px] mb-8 font-medium">המוסך של צביקה · מאז 1993</p>

              <div className="space-y-5">
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

            <div className="flex flex-col gap-2.5 mt-8">
              <a
                href="https://waze.com/ul?q=האופה%204%2C%20ירושלים&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-brand-red text-accent-foreground px-5 py-3 text-[13px] font-bold hover:bg-brand-red-hover transition-all duration-200 no-underline shadow-[0_4px_24px_-6px_hsl(var(--brand-red)/0.3)]"
              >
                נווטו עם Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=האופה+4,+ירושלים"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-primary-foreground/[0.1] text-primary-foreground/50 px-5 py-3 text-[13px] font-medium hover:text-primary-foreground/70 hover:border-primary-foreground/[0.15] transition-all duration-200 no-underline"
              >
                Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[300px] md:min-h-[420px]">
            <iframe
              title="מיקום המוסך של צביקה – אור-צת שירותי רכב, ירושלים"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.5!2d35.1924!3d31.7857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z15TXkNeV16TXlCA0LCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
