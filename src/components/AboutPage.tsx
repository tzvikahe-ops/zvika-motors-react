import { Shield, Users, Wrench, Clock, Star, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <main dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            אודות צביקה מוטורס
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            מעל 30 שנות ניסיון בתחום הרכב — שירות אישי, מקצועי ואמין בירושלים.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            למה לבחור בנו?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "מעל 30 שנה",
                description: "ניסיון עשיר בטיפול במגוון רחב של כלי רכב, מכל הסוגים והדגמים.",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "שירות אישי",
                description: "כל לקוח מקבל יחס אישי וצמוד, עם הסבר מלא על כל טיפול.",
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "שקיפות מלאה",
                description: "אנחנו מאמינים בשקיפות — תמיד תדעו מה מתוקן ומה העלות.",
              },
              {
                icon: <Wrench className="w-8 h-8 text-primary" />,
                title: "ציוד מתקדם",
                description: "המוסך מצויד בכלים וטכנולוגיות מתקדמות לאבחון וטיפול מדויק.",
              },
              {
                icon: <Star className="w-8 h-8 text-primary" />,
                title: "מוניטין מוכח",
                description: "לקוחות חוזרים שנה אחרי שנה — העדות הטובה ביותר לאיכות השירות.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "אחריות על העבודה",
                description: "אנחנו עומדים מאחורי כל טיפול עם אחריות מלאה על העבודה.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            רוצים לשמוע עוד?
          </h2>
          <p className="text-muted-foreground mb-8">
            צרו איתנו קשר ונשמח לענות על כל שאלה.
          </p>
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

export default AboutPage;
