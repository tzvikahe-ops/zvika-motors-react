import { LocationIcon, PhoneIcon, HoursIcon, MapPinIcon, WazeIcon } from "./Icons";
import { getContactEmail } from "@/lib/obfuscate-email";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import ContactForm from "./ContactForm";

const QuickAction = ({
  icon,
  title,
  subtitle,
  href,
  onClick,
  accent = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  onClick?: () => void;
  accent?: boolean;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    onClick={onClick}
    className={`flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 no-underline group ${
      accent
        ? "bg-[#25D366]/[0.07] border-[#25D366]/30 hover:bg-[#25D366]/[0.12] hover:border-[#25D366]/50"
        : "bg-card border-border hover:border-brand-red/30 hover:shadow-[var(--shadow-sm)]"
    }`}
  >
    <div
      className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${
        accent ? "bg-[#25D366]/15" : "bg-brand-red/[0.08]"
      }`}
    >
      {icon}
    </div>
    <div className="min-w-0">
      <div className="font-bold text-[14px] text-foreground leading-tight">{title}</div>
      <div className="text-[12px] text-muted-foreground mt-0.5">{subtitle}</div>
    </div>
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-muted-foreground/40 group-hover:text-brand-red shrink-0 mr-auto transition-colors rotate-180"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </a>
);

export default function ContactPage() {
  return (
    <div dir="rtl" className="pt-[64px] md:pt-[72px] min-h-screen bg-background">
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 pt-0 md:pt-1 pb-16 md:pb-20">
        {/* Hero — tight, action-focused */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-red/[0.08] text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-2 tracking-wider">
            יצירת קשר
          </div>
          <h1 className="text-3xl md:text-[40px] font-black text-foreground mb-2 leading-[1.15]">
            דברו איתנו — נחזור אליכם מהר
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            רוצים לתאם טיפול, לשאול שאלה או לקבל הערכת מחיר? בחרו את הדרך הנוחה לכם.
          </p>
        </div>

        {/* Quick actions — fastest paths first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <QuickAction
            accent
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
            title="שלחו וואטסאפ"
            subtitle="תשובה מהירה · בד״כ תוך שעות"
            href="https://wa.me/972526514446?text=שלום%2C%20ראיתי%20את%20המוסך%20של%20צביקה%20ואשמח%20לתאם%20תור%20ולקבל%20פרטים%20על%20השירותים%20שלכם%20%F0%9F%94%A7"
            onClick={() => trackWhatsAppClick("contact")}
          />
          <QuickAction
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--brand-red))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
            title="02-6514446"
            subtitle="א׳-ה׳ 08:00–16:30"
            href="tel:02-6514446"
            onClick={() => trackPhoneClick("contact")}
          />
        </div>

        {/* Main grid: Form + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactForm />

          <div className="flex flex-col gap-4">
            {/* Contact details */}
            <div className="bg-card rounded-lg p-7 shadow-[var(--shadow-sm)] border border-border">
              <h2 className="font-bold text-[15px] text-foreground mb-5">פרטי המוסך</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <LocationIcon />
                  <div>
                    <div className="font-bold text-[13px] text-foreground">כתובת</div>
                    <div className="text-[13px] text-muted-foreground mt-0.5">
                      רחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HoursIcon />
                  <div>
                    <div className="font-bold text-[13px] text-foreground">שעות פעילות</div>
                    <div className="text-[13px] text-muted-foreground mt-0.5">א׳-ה׳: 08:00–16:30</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-red mt-0.5 shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="22,4 12,13 2,4" />
                  </svg>
                  <div>
                    <div className="font-bold text-[13px] text-foreground">אימייל</div>
                    <a
                      href={`mailto:${getContactEmail()}`}
                      className="text-[13px] text-muted-foreground hover:text-brand-red transition-colors duration-200 mt-0.5 block"
                    >
                      {getContactEmail()}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation / Waze */}
            <div className="bg-card rounded-lg p-5 shadow-[var(--shadow-sm)] border border-border flex flex-col items-center justify-center text-center gap-2">
              <MapPinIcon />
              <h2 className="font-bold text-foreground text-[15px]">גבעת שאול, ירושלים</h2>
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                נגישים בקלות מכל חלק בעיר · חנייה חינם
              </p>
              <a
                href="https://waze.com/ul?q=%D7%A8%D7%97%D7%95%D7%91%20%D7%94%D7%90%D7%95%D7%A4%D7%94%204%20%D7%92%D7%91%D7%A2%D7%AA%20%D7%A9%D7%90%D7%95%D7%9C%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 bg-brand-red text-accent-foreground rounded-md px-5 py-2.5 text-sm font-bold hover:bg-brand-red-hover transition-all duration-200 no-underline"
              >
                <WazeIcon />
                נווט אלינו ב-Waze
              </a>
            </div>

            {/* Trust micro-signals */}
            <div className="flex items-center gap-3 justify-center text-[11px] text-muted-foreground px-2">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-red"><path d="M20 6L9 17l-5-5" /></svg>
                מוסך מורשה
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-red"><path d="M20 6L9 17l-5-5" /></svg>
                פעילים מאז 1993
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-red"><path d="M20 6L9 17l-5-5" /></svg>
                אחריות על כל טיפול
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
