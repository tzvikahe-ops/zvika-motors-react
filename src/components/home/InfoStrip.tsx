import { MapPin, Phone, Clock } from "lucide-react";

export default function InfoStrip() {
  return (
    <div className="bg-surface-dark border-b border-primary-foreground/[0.06]" dir="rtl">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-6 text-[12px]">
          <span className="flex items-center gap-1.5 text-primary-foreground/50">
            <MapPin size={13} className="text-brand-red/70" />
            האופה 4, גבעת שאול
          </span>
          <span className="flex items-center gap-1.5 text-primary-foreground/50">
            <Clock size={13} className="text-brand-red/70" />
            א׳–ה׳ 08:00–16:30
          </span>
        </div>
        <a
          href="tel:02-6514446"
          className="flex items-center gap-1.5 text-primary-foreground/60 text-[12px] font-bold hover:text-primary-foreground transition-colors no-underline"
        >
          <Phone size={13} className="text-brand-red/70" />
          02-6514446
        </a>
      </div>
    </div>
  );
}
