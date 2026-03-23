

## Plan: Updates to Modern Mechanist Website

### Summary of all changes:

1. **WhatsApp floating button** - Fixed button linking to `https://wa.me/972526514446`
2. **Privacy policy page** (חוק הגנת הפרטיות) - Per Israeli privacy law
3. **Accessibility statement page** (הצהרת נגישות) - Per Israeli accessibility law
4. **Translate all English to Hebrew** - "Book Now" → "קבע תור", footer text, etc.
5. **Remove dash** from hero title: "המוסך של צביקה המקצוענים שלך בירושלים"
6. **Fix "הכנה לטסט" card colors** - Match light style of other service cards instead of dark navy
7. **Google Reviews** - Link reviews section to `https://g.page/r/CWH4eCfd2MAOEBM/review`
8. **Waze navigation button** - Direct link to the garage location via Waze

### Files to modify:

- **`src/components/Icons.tsx`** - Add WhatsApp and Waze icons
- **`src/components/HomePage.tsx`** - Remove dash from title, fix הכנה לטסט card colors, add Google Reviews link, translate English strings
- **`src/components/Navbar.tsx`** - "Book Now" → "קבע תור"
- **`src/components/Footer.tsx`** - Translate copyright text to Hebrew, add privacy/accessibility links
- **`src/components/ContactPage.tsx`** - Add Waze navigation button
- **`src/pages/Index.tsx`** - Add WhatsApp floating button, add privacy/accessibility page routing
- **`src/components/PrivacyPolicy.tsx`** (new) - Israeli privacy policy page in Hebrew
- **`src/components/AccessibilityStatement.tsx`** (new) - Israeli accessibility statement page in Hebrew

### Technical details:

- WhatsApp button: fixed `bottom-6 left-6` green circle with WhatsApp icon, opens `https://wa.me/972526514446`
- Waze link: `https://waze.com/ul?q=רחוב האופה 4 גבעת שאול ירושלים` in contact page
- Google Reviews: "כתבו לנו ביקורת" link/button pointing to the provided URL, added below the reviews section
- הכנה לטסט card: change from `bg-primary` (dark navy) to `bg-gray-bg-light` with dark text, matching other cards
- Privacy & accessibility pages: new Page type values, simple content pages with legal text per Israeli law requirements

