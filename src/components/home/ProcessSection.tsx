import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const steps = [
  {
    num: "1",
    title: "יוצרים קשר",
    desc: "שולחים וואטסאפ או מתקשרים. צביקה עונה אישית ומתאם איתכם מועד נוח.",
  },
  {
    num: "2",
    title: "אבחון ומחיר מראש",
    desc: "בודקים את הרכב, מזהים את הבעיה, ומציגים לכם את המחיר המדויק לפני שמתחילים.",
  },
  {
    num: "3",
    title: "טיפול ויציאה לדרך",
    desc: "מבצעים את העבודה במקצועיות, מסבירים מה נעשה, ואתם יוצאים לדרך בראש שקט.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-5 sm:px-6 relative" dir="rtl" aria-label="איך זה עובד">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red/50" />
            <p className="text-brand-red text-[11px] font-bold tracking-wider">תהליך העבודה</p>
            <div className="w-8 h-px bg-brand-red/50" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-black text-foreground tracking-[-0.03em] leading-[1.12] mb-3">
            פשוט להגיע, פשוט לסמוך
          </h2>
          <p className="text-muted-foreground text-[13px] md:text-[14px] max-w-[400px] mx-auto">
            שלושה שלבים בלבד מרגע הפנייה ועד שהרכב מוכן.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map(({ num, title, desc }, i) => (
            <div key={i} className="relative text-center md:text-right">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-0 w-full h-px border-t border-dashed border-brand-red/20 -translate-x-1/2" />
              )}
              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/10 text-brand-red font-black text-[18px] mb-4 mx-auto md:mx-0">
                {num}
              </div>
              <h3 className="font-bold text-[15px] md:text-[16px] text-foreground tracking-[-0.01em] mb-2">{title}</h3>
              <p className="text-muted-foreground text-[13px] leading-[1.8] max-w-[280px] mx-auto md:mx-0">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <a
            href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("process")}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-7 py-3.5 text-[13px] font-bold no-underline transition-all duration-200 shadow-[0_4px_24px_-6px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_28px_-4px_rgba(37,211,102,0.45)] hover:-translate-y-px"
          >
            <WhatsAppSVG />
            <span>בואו נתחיל</span>
          </a>
        </div>
      </div>
    </section>
  );
}
