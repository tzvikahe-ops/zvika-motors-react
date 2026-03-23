import { useState, useEffect } from "react";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function CookieConsent({ setPage }: { setPage: (p: Page) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 flex justify-center" dir="rtl">
      <div className="bg-background border border-border rounded-xl shadow-2xl max-w-[700px] w-full p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bold text-primary text-base">שימוש בעוגיות (Cookies)</h3>
          <button
            onClick={accept}
            className="text-muted-foreground hover:text-foreground text-xl leading-none bg-transparent border-none cursor-pointer"
            aria-label="סגור"
          >
            ×
          </button>
        </div>
        <p className="text-sm text-muted-foreground leading-6">
          האתר עושה שימוש בקובצי Cookies ובטכנולוגיות דומות לצורך תפעול תקין, אבטחת מידע, שיפור חוויית המשתמש וניתוח סטטיסטי של השימוש באתר. הגלישה באתר או לחיצה על כפתור "הבנתי" מהווים הסכמה לשימוש בעוגיות, כמפורט ב
          <button
            onClick={() => { accept(); setPage("privacy"); }}
            className="bg-transparent border-none text-primary font-bold underline cursor-pointer p-0 inline"
          >
            מדיניות הפרטיות
          </button>.
        </p>
        <div className="flex justify-start">
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground border-none rounded-lg px-6 py-2.5 text-sm font-bold cursor-pointer hover:bg-primary/90 transition-colors"
          >
            הבנתי
          </button>
        </div>
      </div>
    </div>
  );
}
