import { useState, useEffect } from "react";

type Page = "home" | "services" | "gallery" | "contact" | "about" | "privacy" | "accessibility";

export default function CookieConsent({ setPage }: { setPage: (p: Page) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 pb-[calc(1rem+4.5rem)] md:pb-4 flex justify-center" dir="rtl">
      <div className="bg-card border border-border rounded-lg shadow-[var(--shadow-lg)] max-w-[640px] w-full p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bold text-foreground text-sm">שימוש בעוגיות (Cookies)</h3>
          <button onClick={accept} className="text-muted-foreground hover:text-foreground text-lg leading-none bg-transparent border-none cursor-pointer" aria-label="סגור">×</button>
        </div>
        <p className="text-[13px] text-muted-foreground leading-6">
          האתר עושה שימוש בקובצי Cookies לצורך תפעול תקין ושיפור חוויית המשתמש. הגלישה באתר מהווה הסכמה לשימוש בעוגיות, כמפורט ב
          <button onClick={() => { accept(); setPage("privacy"); }} className="bg-transparent border-none text-brand-red font-bold underline cursor-pointer p-0 inline">מדיניות הפרטיות</button>.
        </p>
        <div className="flex justify-start">
          <button onClick={accept} className="bg-brand-red text-accent-foreground border-none rounded-md px-6 py-2.5 text-[13px] font-bold cursor-pointer hover:bg-brand-red-hover transition-all duration-200">הבנתי</button>
        </div>
      </div>
    </div>
  );
}
