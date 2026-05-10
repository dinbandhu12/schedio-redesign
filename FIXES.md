# Schedio Studio — Fix Tracker
> Work through these in order. Check off as done.

---

## 1. SEO — Critical (do first)

- [x] Create `src/app/sitemap.ts` — list all public URLs with `lastModified`
- [x] Create `src/app/robots.ts` — allow all crawlers, point to sitemap
- [x] Add `export const metadata` to `src/app/page.tsx` (Home) — covered by root layout default
- [x] Add `export const metadata` to `src/app/about/layout.tsx`
- [x] Add `export const metadata` to `src/app/services/layout.tsx`
- [x] Add `export const metadata` to `src/app/work/layout.tsx`
- [x] Add `export const metadata` to `src/app/contact/layout.tsx`
- [x] Fix empty `alt=""` on all floating hero images — descriptive alt added to About, Services, Work, Blog, Contact

---

## 2. SEO — Medium

- [x] Add JSON-LD `Organization` + `LocalBusiness` schema to root layout
- [x] Add `FAQPage` JSON-LD schema to root layout (applies to homepage)
- [x] Add `alternates.canonical` to all page metadata (root layout + all per-route layouts + blog)
- [x] Fix heading hierarchy on About page — "Who/What/Why" H3 labels → p; TiltCard titles → p; "What We Do" section label → h2
- [x] Fix heading hierarchy on Services page — "What we do" section label promoted to h2
- [x] Create a 1200×630 branded OG image — saved as `/public/og-image.png`, referenced in root layout (temporary; replace when final design is ready)
- [x] Add `twitter: { card: 'summary_large_image' }` — already present in root layout, inherited by all pages
- [x] Add `noindex` to Blog page until real posts are published

---

## 3. Content — Spelling & Grammar

- [ ] `contact/page.tsx` — "in detailed" → "in detail"
- [ ] `privacy-policy/page.tsx` — "organisational" → "organizational"
- [ ] `work/page.tsx` stats — "10wk" → "10 weeks"
- [ ] Blog page description — "from great" → "from great design"

---

## 4. Content — Consistency

- [ ] Standardize "UI/UX" (no spaces) across all pages — search for "UI / UX"
- [ ] Match phone number format to `+91 (960) 776-9564` in both Footer and Contact page
- [ ] Replace spaced hyphens ` - ` with em dash `—` in body copy where appropriate
- [ ] Update "Last updated: May 2025" on all three legal pages to actual publish date

---

## 5. Accessibility & Polish

- [ ] Add `<label>` to newsletter email input in Footer (currently only has `placeholder`)
- [ ] Verify colour contrast on body text passes WCAG AA
- [ ] Test keyboard navigation through Navbar and all interactive sections

---

## 6. Pre-Launch Checks

- [ ] Run `next build` — zero errors, zero warnings
- [ ] Test all nav links — no broken `href="#"` remaining
- [ ] Verify all images load (check Network tab for 404s)
- [ ] Test on mobile — iOS Safari + Android Chrome
- [ ] Test custom 404 by visiting a random URL
- [ ] Run Lighthouse — target 90+ on all four categories

---

## 7. Future — Content to Add

- [ ] Publish 1–2 blog posts before launch (or keep `noindex` on Blog)
- [ ] Add 2 new SaaS project case studies (provide MD file + images per the template in `AUDIT.md`)
- [ ] About page — consider adding a founder photo / "Who we are" section for trust
