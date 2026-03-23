import { LocationIcon, PhoneIcon, HoursIcon, MapPinIcon, WazeIcon } from "./Icons";

export default function ContactPage() {
  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-black text-primary mb-3">צור קשר</h1>
          <p className="text-muted-foreground text-base">נשמח לשמוע ממך ולקבוע תור</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="bg-background rounded-xl p-10 shadow-sm">
            <h3 className="font-extrabold text-xl text-primary mb-6">פרטי התקשרות</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <LocationIcon />
                <div>
                  <div className="font-bold text-sm text-primary">כתובת</div>
                  <div className="text-sm text-muted-foreground">רחוב האופה 4 (בית הדפוס 24), גבעת שאול, ירושלים</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon />
                <div>
                  <div className="font-bold text-sm text-primary">טלפון</div>
                  <div className="text-sm text-muted-foreground">02-6514446</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HoursIcon />
                <div>
                  <div className="font-bold text-sm text-primary">שעות פעילות</div>
                  <div className="text-sm text-muted-foreground">א׳-ה׳: 08:00-16:30</div>
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
            </div>
          </div>

          {/* Navigation Card */}
          <div className="bg-background rounded-xl p-10 shadow-sm flex flex-col items-center justify-center text-center gap-3">
            <MapPinIcon />
            <h4 className="font-bold text-primary text-base">גבעת שאול, ירושלים</h4>
            <p className="text-sm text-muted-foreground">נגישים בקלות מכל חלק בעיר</p>
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
      </div>
    </div>
  );
}
