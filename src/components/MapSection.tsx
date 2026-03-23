import { MapPin, Phone, Clock } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-surface-steel py-16 md:py-24 px-6" dir="rtl" aria-label="מצאו אותנו על המפה">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-10">
          <h2 className="text-[22px] md:text-[30px] font-black text-foreground leading-tight">
            המוסך שלכם בירושלים
          </h2>
          <p className="text-muted-foreground text-[12.5px] mt-2">
            גבעת שאול · חניה נוחה · גישה קלה מכל חלקי העיר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-4 items-stretch">
          {/* Info card */}
          <div className="bg-card rounded-lg p-7 border border-border flex flex-col justify-between gap-5 order-1">
            <div>
              <h3 className="font-black text-[17px] text-foreground mb-0.5">אור-צת שירותי רכב</h3>
              <p className="text-muted-foreground text-[11px] mb-5 font-medium">המוסך של צביקה · מאז 1993</p>

              <div className="space-y-4">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-[13px] text-foreground">האופה 4, ירושלים</p>
                    <p className="text-muted-foreground text-[11px] mt-0.5">גבעת שאול · חניה נוחה</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-brand-red shrink-0" />
                  <a href="tel:02-6514446" className="font-bold text-[13px] text-foreground hover:text-brand-red transition-colors no-underline">02-651-4446</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={16} className="text-brand-red shrink-0" />
                  <p className="text-muted-foreground text-[12.5px]">א׳–ה׳ 08:00–16:30</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href="https://waze.com/ul?q=האופה%204%2C%20ירושלים&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-brand-red text-accent-foreground rounded-md px-5 py-2.5 text-[13px] font-bold hover:bg-brand-red-hover transition-colors duration-200 no-underline"
              >
                נווטו עם Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=האופה+4,+ירושלים"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-foreground/[0.04] text-foreground border border-border rounded-md px-5 py-2.5 text-[13px] font-medium hover:bg-foreground/[0.08] transition-colors duration-200 no-underline"
              >
                Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-border min-h-[280px] md:min-h-[340px] order-2">
            <iframe
              title="מיקום המוסך של צביקה – אור-צת שירותי רכב, ירושלים"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.5!2d35.1924!3d31.7857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z15TXkNeV16TXlCA0LCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
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
