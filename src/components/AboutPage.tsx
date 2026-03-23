import { Shield, Users, Wrench, Clock, Star, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <main dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-[72px] py-20 md:py-28 bg-gradient-to-b from-primary/[0.06] to-background">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-[42px] font-black text-foreground mb-5 leading-tight">
            המוסך של צביקה
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            מעל 30 שנות ניסיון בתחום הרכב. שירות אישי, מקצועי ואמין בגבעת שאול, ירושלים.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-14">
            למה לבחור בנו?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Clock className="w-7 h-7 text-primary/70" />,
                title: "מעל 30 שנה",
                description: "ניסיון עשיר בטיפול במגוון רחב של כלי רכב, מכל הסוגים והדגמים.",
              },
              {
                icon: <Users className="w-7 h-7 text-primary/70" />,
                title: "שירות אישי",
                description: "כל לקוח מקבל יחס אישי וצמוד, עם הסבר מלא על כל טיפול.",
              },
              {
                icon: <Shield className="w-7 h-7 text-primary/70" />,
                title: "שקיפות מלאה",
                description: "אנחנו מאמינים בשקיפות, תמיד תדעו מה מתוקן ומה העלות.",
              },
              {
                icon: <Wrench className="w-7 h-7 text-primary/70" />,
                title: "ציוד מתקדם",
                description: "המוסך מצויד בכלים וטכנולוגיות מתקדמות לאבחון וטיפול מדויק.",
              },
              {
                icon: <Star className="w-7 h-7 text-primary/70" />,
                title: "מוניטין מוכח",
                description: "לקוחות חוזרים שנה אחרי שנה — העדות הטובה ביותר לאיכות השירות.",
              },
              {
                icon: <CheckCircle className="w-7 h-7 text-primary/70" />,
                title: "אחריות על העבודה",
                description: "אנחנו עומדים מאחורי כל טיפול עם אחריות מלאה על העבודה.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 text-center border border-border/60 hover:shadow-[var(--shadow-md)] transition-all duration-200"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/[0.04]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
            רוצים לשמוע עוד?
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            צרו איתנו קשר ונשמח לענות על כל שאלה.
          </p>
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-[10px] font-bold text-lg hover:opacity-90 transition-all duration-200 no-underline"
          >
            התקשרו עכשיו – 02-6514446
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
