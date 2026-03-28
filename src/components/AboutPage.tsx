import { Shield, Users, Wrench, Clock, Star, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="relative pt-[68px] py-20 md:py-28 bg-surface-dark">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--primary-foreground)) 0px, transparent 1px, transparent 60px)" }} />
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red text-[11px] font-bold px-3 py-1 rounded-full mb-5 tracking-wider">אודות</div>
          <h1 className="text-3xl md:text-[42px] font-black text-primary-foreground mb-5 leading-tight">המוסך של צביקה</h1>
          <p className="text-base md:text-lg text-primary-foreground/50 leading-relaxed max-w-xl mx-auto">
            מעל 30 שנות ניסיון בתחום הרכב. שירות אישי, מקצועי ואמין בגבעת שאול, ירושלים.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-14">למה לבחור בנו?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "מעל 30 שנה", description: "ניסיון עשיר בטיפול במגוון רחב של כלי רכב, מכל הסוגים והדגמים." },
              { icon: <Users className="w-6 h-6" />, title: "שירות אישי", description: "כל לקוח מקבל יחס אישי וצמוד, עם הסבר מלא על כל טיפול." },
              { icon: <Shield className="w-6 h-6" />, title: "שקיפות מלאה", description: "אנחנו מאמינים בשקיפות. תמיד תדעו מה מתוקן ומה העלות." },
              { icon: <Wrench className="w-6 h-6" />, title: "ציוד מתקדם", description: "המוסך מצויד בכלים וטכנולוגיות מתקדמות לאבחון וטיפול מדויק." },
              { icon: <Star className="w-6 h-6" />, title: "מוניטין מוכח", description: "לקוחות חוזרים שנה אחרי שנה — העדות הטובה ביותר לאיכות השירות." },
              { icon: <CheckCircle className="w-6 h-6" />, title: "אחריות על העבודה", description: "אנחנו עומדים מאחורי כל טיפול עם אחריות מלאה." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-[var(--shadow-md)] transition-all duration-200">
                <div className="flex justify-center mb-4 text-brand-red/70">{item.icon}</div>
                <h3 className="text-[15px] font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-steel">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">רוצים לשמוע עוד?</h2>
          <p className="text-muted-foreground mb-8 text-sm">צרו איתנו קשר ונשמח לענות על כל שאלה.</p>
          <a
            href="tel:02-6514446"
            className="inline-flex items-center gap-2 bg-brand-red text-accent-foreground px-8 py-3.5 rounded-md font-bold text-[15px] hover:bg-brand-red-hover transition-all duration-200 no-underline shadow-[0_4px_20px_-4px_hsl(var(--brand-red)/0.5)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.9 6.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            התקשרו עכשיו – 02-6514446
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
