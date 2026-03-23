type Page = "home" | "gallery" | "contact";

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-footer text-muted-foreground" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif font-extrabold text-lg text-primary-foreground tracking-wider mb-4">
            MODERN MECHANIST
          </div>
          <p className="text-sm leading-7 text-muted-foreground max-w-[280px]">
            המוסך של צביקה (אור-צת שירותי רכב) – מציגות, אמינות ומקצועיות בשירות הרכב שלך בירושלים.
          </p>
        </div>

        <div>
          <h4 className="text-primary-foreground font-bold mb-4 text-[15px]">ניווט מהיר</h4>
          {["שירותים", "אודות", "גלריה"].map((item) => (
            <button
              key={item}
              onClick={() => setPage(item === "גלריה" ? "gallery" : "home")}
              className="block bg-transparent border-none text-muted-foreground text-sm cursor-pointer py-1 text-right hover:text-primary-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div>
          <h4 className="text-primary-foreground font-bold mb-4 text-[15px]">עזרה</h4>
          {[
            { label: "צור קשר", action: () => setPage("contact") },
            { label: "Google Maps", action: () => {} },
            { label: "Emergency Call", action: () => {} },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="block bg-transparent border-none text-muted-foreground text-sm cursor-pointer py-1 text-right hover:text-primary-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-navy-light py-5 px-6 text-center text-[13px] text-muted-foreground">
        © 2024 MODERN MECHANIST. Rehov HaOfe 4, Jerusalem.
      </div>
    </footer>
  );
}
