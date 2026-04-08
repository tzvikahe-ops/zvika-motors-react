# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**אתר אור-צת שירותי רכב** — מוסך המוסך של צביקה בירושלים.
Stack: Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui
Deployed: Netlify (via GitHub). Domain: `https://ortzat.co.il`

## Commands

```bash
# Development
npm run dev          # Vite dev server on port 8080

# Build (runs vite build + prerender script)
npm run build        # Production build — always run after SEO/route changes

# Lint
npm run lint         # ESLint

# Tests
npm run test         # Vitest (unit, jsdom)
npm run test:watch   # Watch mode

# Preview production build locally
npm run preview
```

## Architecture — Big Picture

### Routing Pattern (SPA with pre-rendered HTML)

This is a **single-page app that behaves like an MPA for SEO**:

1. **React Router** handles client-side routing (`App.tsx`). All routes render `<Index />` as the shell.
2. `usePageNavigation` hook (in `src/hooks/`) reads `location.pathname` and maps it to a `Page` type — this drives which page component is rendered.
3. At build time, `prerenderPlugin` in `vite.config.ts` generates a static `index.html` per route in `dist/`, each with unique `<title>`, `<meta description>`, canonical, OG tags, and JSON-LD schemas (BreadcrumbList, FAQPage, BlogPosting).
4. At runtime, `SeoHead.tsx` (using `react-helmet-async`) injects the same meta dynamically for client-side navigation.

> **Critical:** The route list in `vite.config.ts` (prerenderPlugin `routes` array) and the SEO config in `SeoHead.tsx` must be kept in sync with each other and with the routes in `App.tsx`.

### Adding a New Page

1. Add a `Page` variant to `src/types/page.ts`
2. Add the path mapping in `use-page-navigation.ts` (`pageToPath` / `pathToPage`)
3. Add the route in `App.tsx`
4. Add a render branch in `Index.tsx`
5. Add SEO config in `SeoHead.tsx`
6. Add a route entry in the `prerenderPlugin` `routes` array in `vite.config.ts`
7. Add a Netlify redirect in `public/_redirects` if needed

### Adding a Blog Article

Blog articles live in `src/data/blog-articles.ts`. Adding an article requires:
1. Adding the article object to `blog-articles.ts`
2. Adding the route to the `prerenderPlugin` `routes` array in `vite.config.ts` (with the same slug and a `date` field)

### Key Files

| File | Role |
|------|------|
| `vite.config.ts` | Build config + `prerenderPlugin` (static HTML per route) + `cssPreloadPlugin` |
| `src/App.tsx` | React Router setup, lazy-loaded page components |
| `src/pages/Index.tsx` | Main shell — renders the correct page component based on `currentPage` |
| `src/hooks/use-page-navigation.ts` | Maps URL → `Page` type, exposes `setPage` |
| `src/components/SeoHead.tsx` | Runtime SEO via react-helmet-async |
| `src/data/blog-articles.ts` | Single source of truth for all blog articles |
| `src/lib/analytics.ts` | GA4 event helpers (`trackWhatsAppClick`, `trackPhoneClick`, etc.) |
| `public/_redirects` | Netlify redirect rules (www canonical, SPA fallback) |
| `public/robots.txt`, `public/sitemap.xml` | Static SEO files — update manually when adding routes |

### Deployment / Netlify

- Canonical domain is **`ortzat.co.il`** — `_redirects` enforces `www → non-www` with 301.
- SPA fallback: all unmatched routes serve `index.html` (200).
- Pre-rendered HTML files in `dist/` give crawlers full meta tags without JS.

### Accessibility

The site targets **IS 5568 (Israeli standard)** and WCAG 2.1 AA. See `ACCESSIBILITY.md` for full details. Key requirements: RTL, skip-link (`#main-content`), ARIA roles on `<header>`, `<main>`, `<footer>`.

### Analytics

GA4 ID: `G-FWD2H06Y7K` (loaded in `index.html`). Custom events: `whatsapp_click`, `phone_click`, `form_submit`, `scroll_50`, `scroll_90`. Always pass `button_location` when tracking clicks.

### MapSection

`MapSection` is rendered **only in `Index.tsx`** (inside `LazySection` for home and contact pages). Do not add it inside individual page components.
