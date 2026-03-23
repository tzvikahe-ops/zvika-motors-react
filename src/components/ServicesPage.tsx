const ServicesPage = () => {
  const serviceTemplates = [
    {
      title: "טיפולים תקופתיים",
      description: "בדיקות שגרתיות, שמנים ופילטרים לפי הוראות יצרן — עמוד תוכן מלא יעלה בקרוב.",
    },
    {
      title: "דיאגנוסטיקה מתקדמת",
      description: "איתור תקלות ממוחשב ומדויק עם דוחות ברורים — פירוט השירותים יתווסף בקרוב.",
    },
    {
      title: "מיזוג אוויר לרכב",
      description: "בדיקה, מילוי ותיקון מערכת קירור — טבלת מחירים ותהליכי עבודה יתווספו בקרוב.",
    },
  ];

  return (
    <main dir="rtl" className="bg-background">
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">שירותים</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            עמוד השירותים החדש בבנייה. בינתיים ריכזנו כאן טמפלט מסודר עד שנעלה את כל התוכן המלא.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceTemplates.map((service) => (
              <article
                key={service.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <h2 className="text-xl font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">רוצים לתאם טיפול?</h2>
          <p className="text-muted-foreground mb-8">צרו קשר ונשמח להתאים לכם פתרון מהיר ומדויק.</p>
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
          >
            התקשרו עכשיו — 02-6514446
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
