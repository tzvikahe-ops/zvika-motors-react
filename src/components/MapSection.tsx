import { MapPin, Phone, Clock } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-surface-steel py-20 md:py-24 px-6" dir="rtl" aria-label="מצאו אותנו על המפה">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[3px] bg-brand-red rounded-full" />
              <span className="text-brand-red text-[11px] font-bold tracking-wider">מיקום</span>
            </div>
            <h2 className="text-3xl md:text-[34px] font-black text-foreground leading-tight">
              המוסך שלכם בירושלים
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              גבעת שאול · חניה נוחה · גישה קלה מכל חלקי העיר
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Map embed */}
          <div className="rounded-lg overflow-hidden shadow-[var(--shadow-md)] border border-border min-h-[300px] md:min-h-[360px] order-2 md:order-1">
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

          {/* Info card */}
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-[var(--shadow-md)] border border-border flex flex-col justify-between gap-6 order-1 md:order-2 relative overflow-hidden">
            {/* Red accent */}
            <div className="absolute top-0 right-0 left-0 h-[3px] bg-brand-red" />
            
            <div>
              <h3 className="font-black text-xl text-foreground mb-1">אור-צת שירותי רכב</h3>
              <p className="text-muted-foreground text-[11px] mb-6 font-medium">המוסך של צביקה · פועלים מאז 1993</p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-red mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-foreground">האופה 4, ירושלים</p>
                    <p className="text-muted-foreground text-[11px] mt-0.5">גבעת שאול · חניה נוחה ליד המוסך</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-red shrink-0" />
                  <a href="tel:02-6514446" className="font-bold text-sm text-foreground hover:text-brand-red transition-colors no-underline">02-651-4446</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-brand-red shrink-0" />
                  <p className="text-muted-foreground text-[13px]">א׳–ה׳ 08:00–16:30</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://waze.com/ul?q=האופה%204%2C%20ירושלים&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-brand-red text-accent-foreground rounded-md px-6 py-3.5 text-[14px] font-bold hover:bg-brand-red-hover transition-all duration-200 no-underline shadow-[0_4px_20px_-4px_hsl(var(--brand-red)/0.5)]"
              >
                נווטו אלינו עם Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=האופה+4,+ירושלים"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-foreground/[0.04] text-foreground border border-border rounded-md px-6 py-3.5 text-[14px] font-medium hover:bg-foreground/[0.08] transition-all duration-200 no-underline"
              >
                פתחו ב-Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
