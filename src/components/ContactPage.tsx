import { useState } from "react";
import { LocationIcon, PhoneIcon, HoursIcon, MapPinIcon, WazeIcon } from "./Icons";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `שם: ${form.name}\nטלפון: ${form.phone}\nהודעה: ${form.message}`;
    const url = `https://wa.me/972526514446?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div dir="rtl" className="pt-[72px] min-h-screen bg-gray-bg-light">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-black text-primary mb-3">צור קשר</h1>
          <p className="text-muted-foreground text-base">נשמח לשמוע ממך ולקבוע תור</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-background rounded-xl p-10 shadow-sm">
            <h3 className="font-extrabold text-xl text-primary mb-6">שלח לנו הודעה</h3>
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 text-sm">
                ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">שם מלא</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-red"
                  placeholder="הכנס את שמך"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">טלפון</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-red"
                  placeholder="050-0000000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">הודעה</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-red resize-none"
                  placeholder="ספר לנו על הרכב שלך..."
                />
              </div>
              <button
                type="submit"
                className="bg-brand-red text-accent-foreground border-none rounded-lg px-6 py-3.5 text-[15px] font-bold cursor-pointer hover:bg-brand-red-hover transition-colors"
              >
                שלח הודעה
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
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
                    <div className="text-sm text-muted-foreground">א׳-ה׳: 08:00-18:00 | ו׳: 08:00-13:00</div>
                  </div>
                </div>
              </div>
            </div>

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
    </div>
  );
}
