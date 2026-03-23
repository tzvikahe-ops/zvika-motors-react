import { LocationIcon, PhoneIcon, HoursIcon, MapPinIcon, WazeIcon } from "./Icons";

export default function ContactPage() {
  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-black text-primary mb-3">צרו קשר עם המוסך</h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            נשמח לענות על כל שאלה ולתאם טיפול לרכב שלכם. פנו אלינו בטלפון, וואטסאפ או מייל – ונחזור אליכם במהירות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="bg-background rounded-xl p-10 shadow-sm">
            <h2 className="font-extrabold text-xl text-primary mb-6">פרטי התקשרות</h2>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <LocationIcon />
                <div>
                  <div className="font-bold text-sm text-primary">כתובת המוסך</div>
                  <div className="text-sm text-muted-foreground">רחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon />
                <div>
                  <div className="font-bold text-sm text-primary">טלפון</div>
                  <a href="tel:02-6514446" className="text-sm text-muted-foreground hover:text-brand-red transition-colors">02-6514446</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-brand-red mt-0.5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="#25D366" strokeWidth="1.5" fill="none"/>
                </svg>
                <div>
                  <div className="font-bold text-sm text-primary">וואטסאפ</div>
                  <a href="https://wa.me/972526514446" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-brand-red transition-colors">שלחו הודעה בוואטסאפ</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-red mt-0.5 shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,4 12,13 2,4" />
                </svg>
                <div>
                  <div className="font-bold text-sm text-primary">אימייל</div>
                  <a href="mailto:ortzat1@gmail.com" className="text-sm text-muted-foreground hover:text-brand-red transition-colors">ortzat1@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HoursIcon />
                <div>
                  <div className="font-bold text-sm text-primary">שעות פעילות</div>
                  <div className="text-sm text-muted-foreground">א׳–ה׳: 08:00–16:30</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Card */}
          <div className="bg-background rounded-xl p-10 shadow-sm flex flex-col items-center justify-center text-center gap-3">
            <MapPinIcon />
            <h2 className="font-bold text-primary text-base">המוסך ממוקם בגבעת שאול, ירושלים</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              נגישים בקלות מכל חלק בעיר, עם חניה נוחה ליד המוסך
            </p>
            <a
              href="https://waze.com/ul?q=%D7%A8%D7%97%D7%95%D7%91%20%D7%94%D7%90%D7%95%D7%A4%D7%94%204%20%D7%92%D7%91%D7%A2%D7%AA%20%D7%A9%D7%90%D7%95%D7%9C%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 bg-brand-red text-accent-foreground border-none rounded-lg px-5 py-2.5 text-sm font-bold hover:bg-brand-red-hover transition-colors"
            >
              <WazeIcon />
              נווט אלינו ב-Waze
            </a>
          </div>
        </div>

        {/* Trust microcopy */}
        <p className="text-center text-muted-foreground text-xs mt-8 leading-relaxed">
          המוסך של צביקה (אור-צת שירותי רכב) – מוסך מורשה בגבעת שאול, ירושלים. פועלים מאז 1993 עם אחריות מלאה על כל טיפול.
        </p>
      </div>
    </div>
  );
}
