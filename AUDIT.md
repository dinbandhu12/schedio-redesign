# Schedio Studio — Pre-Launch Audit Report
> Generated: May 2026 · Review before publishing to schedio.studio

---

## SEO Audit

### Critical Issues
- [ ] **Home page missing custom metadata** — Add `title`, `description`, OG tags to `src/app/page.tsx` (currently using layout defaults only)
- [ ] **About page missing metadata** — Add `export const metadata` with title/description/OG
- [ ] **Services page missing metadata** — Add `export const metadata`
- [ ] **Work page missing metadata** — Add `export const metadata`
- [ ] **Contact page missing metadata** — Add `export const metadata`
- [ ] **No sitemap** — Create `src/app/sitemap.ts` listing all public URLs with `lastModified`
- [ ] **No robots.txt** — Create `src/app/robots.ts` allowing all crawlers, pointing to sitemap
- [ ] **Empty or missing `alt` on hero images** — All floating hero images use `alt=""` or generic alt text; write descriptive alt text for each

### Medium Issues
- [ ] **No JSON-LD structured data** — Add `Organization` + `LocalBusiness` schema to root layout or home page
- [ ] **No `FAQPage` schema** — The FAQ section on homepage should have JSON-LD markup for rich results
- [ ] **No canonical URLs** — Add `<link rel="canonical">` via `alternates.canonical` in each page's metadata
- [ ] **Heading hierarchy gaps** — About and Services pages skip from H1 → H3 with no H2; fix the hierarchy
- [ ] **Blog page has no real content** — Search engines will see a near-empty page; either add teaser posts or add a `noindex` until ready
- [ ] **OG image missing** — No `opengraph-image` asset; create a 1200×630 branded OG image and add to `/public`
- [ ] **Twitter card tags missing** — Add `twitter: { card: 'summary_large_image', ... }` to metadata on key pages

### What's Already Good
- Legal pages (Privacy Policy, Terms, Cookie Policy) have proper `metadata` exports
- 404 page (`not-found.tsx`) exists and is branded
- Fonts loaded via Google Fonts with `display=swap`
- Mobile-responsive layout throughout
- Semantic HTML elements (`<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`)

### Priority Fix Order
1. `sitemap.ts` + `robots.ts` (indexability — do this first)
2. Home page metadata + OG tags (highest traffic page)
3. JSON-LD `Organization` schema on home page
4. Metadata for About / Services / Work / Contact
5. Fix alt text on all images
6. Fix heading hierarchy
7. `FAQPage` JSON-LD on homepage FAQ section
8. OG image asset
9. Twitter card tags
10. Canonical URLs

---

## Content, Spelling & Grammar Audit

### Spelling / Word Choice Fixes
- [ ] **`contact/page.tsx`** — "in detailed" → "in detail" (appears in the discovery process description)
- [ ] **`privacy-policy/page.tsx`** — "organisational" → "organizational" (US English; site uses American spelling elsewhere)
- [ ] **`work/page.tsx` stats** — "10wk" → "10 weeks" (inconsistent with other stats that spell out units)

### Grammar Fixes
- [ ] **Blog page description** — "from great" → "from great design" (sentence is cut off / grammatically incomplete)
- [ ] **Contact page CTA subtext** — Review for subject-verb agreement after any recent edits

### Consistency Fixes
- [ ] **UI/UX spelling** — Standardize to "UI/UX" (no spaces around slash) across all pages; currently mixed "UI / UX" and "UI/UX"
- [ ] **Phone number format** — Footer and Contact page should use the same format: `+91 (960) 776-9564` — verify both match
- [ ] **Em dash vs hyphen** — Some sections use ` - ` (spaced hyphen) where an em dash `—` or en dash `–` is more correct typographically; audit all body copy
- [ ] **Ellipsis** — Use the proper `…` character (or `&hellip;`) instead of three periods `...` where it appears in body text

### Punctuation & Typography
- [ ] **Apostrophes** — Confirm all apostrophes in JSX strings are using curly quotes `'` or escaped properly; straight apostrophes in JSX can cause parse errors (already fixed in Terms + Cookie Policy, double-check the rest)
- [ ] **Quote marks in body copy** — Use `"…"` (curly) not `"..."` (straight) in displayed text where possible

### Content Gaps
- [ ] **About page** — No team section or founder photo; consider adding a brief "Who we are" with a face for trust-building
- [ ] **Work page** — Only 2 active case studies (Lora Hayes, Shree Ganesh); projects 03–06 removed. Add new SaaS project case studies when ready (user has 2 projects to add)
- [ ] **Blog** — No posts yet; either publish 1–2 seed articles before launch or add `noindex` temporarily
- [ ] **Services page** — Process/workflow section could be expanded with actual timelines and deliverables
- [ ] **Contact page** — No physical address shown in the contact form section (it's only in the footer)

### Legal Pages
- [ ] **Privacy Policy** — "Last updated: May 2025" should be updated to reflect actual publish date before going live
- [ ] **Terms of Service** — Same; update "Last updated" date
- [ ] **Cookie Policy** — Same; update "Last updated" date

---

## Pre-Launch Checklist

### Technical
- [ ] Run `next build` with zero errors and zero warnings
- [ ] Test all navigation links (no broken `href="#"` on final pages)
- [ ] Verify all images load (no 404s in Network tab)
- [ ] Test on mobile (iOS Safari + Android Chrome)
- [ ] Test custom 404 page by visiting a random URL
- [ ] Verify smooth scroll (Lenis) works on all pages
- [ ] Confirm custom cursor shows on desktop, hides on touch
- [ ] Check PageLoader animation on first visit

### Performance
- [ ] Run Lighthouse audit — target 90+ on Performance, Accessibility, Best Practices, SEO
- [ ] Verify `next/image` is used for all images (no raw `<img>` tags)
- [ ] Check no unused imports or components shipping to client

### Accessibility
- [ ] All interactive elements have visible focus states (or `cursor: none` equivalent)
- [ ] Colour contrast — gold `#c9a96e` on dark `#090908` passes AA for large text; verify body text contrast
- [ ] All form inputs have labels (newsletter input in Footer has `placeholder` but no `<label>`)
- [ ] Keyboard navigation works through Navbar and all interactive sections

---

## Notes for New Case Studies (Future)
When adding new SaaS projects, provide an MD file with:
- Project name, tagline, year
- Services rendered (Design / Dev / Branding)
- Stats (timeline, screens, etc.)
- Problem statement (2–3 sentences)
- Solution overview (2–3 sentences)
- Process steps (4–5 steps, each with title + description)
- Image file list (drop files into `public/images/casestudy/<project-slug>/`)
- Optional: testimonial quote + author name + role
