

## שינוי סגנון כפתורי WhatsApp — רקע לבן + ירוק כהה רשמי

### הגדרה
החלפת כל כפתורי WhatsApp מרקע ירוק (#128C7E) עם טקסט שחור → **רקע לבן, טקסט ואייקון ב-#075E54, גבול #0E7A6D**. יחס ניגודיות: 7.67:1.

### סגנון חדש (לכל הכפתורים)
```text
bg-white border border-[#0E7A6D] text-[#075E54]
hover:bg-[#f0faf8]
shadow קל
SVG fill="#075E54"
```

### כפתור צף (Index.tsx)
כפתור icon-only — אותו עיקרון: רקע לבן, אייקון #075E54, גבול #0E7A6D.

### קבצים מושפעים (12 קבצים)
| קובץ | מה משתנה |
|---|---|
| `src/pages/Index.tsx` | כפתור צף |
| `src/components/Navbar.tsx` | כפתור WhatsApp במובייל |
| `src/components/Footer.tsx` | כפתור WhatsApp בפוטר |
| `src/components/home/HeroSection.tsx` | CTA ראשי |
| `src/components/home/CTASection.tsx` | CTA תחתון |
| `src/components/home/ProcessSection.tsx` | CTA תהליך |
| `src/components/home/ServicesSection.tsx` | CTA שירותים |
| `src/components/ContactPage.tsx` | CTA צור קשר |
| `src/components/FAQPage.tsx` | CTA שאלות נפוצות |
| `src/components/GalleryPage.tsx` | 2 כפתורים |
| `src/components/BlogPage.tsx` | CTA בלוג |
| `src/components/AboutPage.tsx` | CTA אודות (אם קיים) |

בכל קובץ: החלפת `bg-[#128C7E] hover:bg-[#0e7a6d] text-black` → `bg-white border border-[#0E7A6D] text-[#075E54] hover:bg-[#f0faf8]` והחלפת `fill="black"` / `fill="#000000"` → `fill="#075E54"` ב-SVG.

