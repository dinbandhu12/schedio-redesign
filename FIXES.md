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

- [x] `contact/page.tsx` — "in detailed" → "in detail"
- [x] `privacy-policy/page.tsx` — "organisational" → "organizational"
- [x] `work/page.tsx` stats — "10wk" → "10 weeks"
- [x] Blog page description — "from great" → "from great design"

---

## 4. Content — Consistency

- [x] Standardize "UI/UX" (no spaces) across all pages — search for "UI / UX"
- [x] Match phone number format to `+91 (960) 776-9564` in both Footer and Contact page
- [x] Replace spaced hyphens ` - ` with em dash `—` in body copy where appropriate — none found in display text
- [x] Update "Last updated: May 2025" on all three legal pages to actual publish date

---

## 5. Accessibility & Polish

- [x] Add `<label>` to newsletter email input in Footer (sr-only label + id added)
- [x] Verify colour contrast on body text passes WCAG AA — `--text` ~18:1, `--text-muted` ~4.78:1 both pass; `--text-dim` ~2.47:1 used only for placeholder/decorative text (exempt)
- [x] Add global `focus-visible` ring (gold accent, 2px) to globals.css for keyboard navigation

---

## 6. Pre-Launch Checks

- [x] Run `next build` — zero errors, zero warnings (18 pages, all static)
- [x] Test all nav links — fixed Navbar overlay social links (Instagram, Behance, Dribbble) which used `href="#"`; all nav links now real
- [x] Verify all images load — all image paths audited; fixed broken favicon path `/images/logo/transparent-logo.png` → `/images/logo/logo-main.png`
- [ ] Test on mobile — iOS Safari + Android Chrome (manual test required)
- [ ] Test custom 404 by visiting a random URL (manual test required)
- [ ] Run Lighthouse — target 90+ on all four categories (manual test required)

---

## 7. Future — Content to Add

- [ ] Publish 1–2 blog posts before launch (or keep `noindex` on Blog)
- [ ] Add 2 new SaaS project case studies (provide MD file + images per the template in `AUDIT.md`)
- [x] About page — added "Behind the studio" founder section with photo (`founder.png`), name DBS, role Founder Schedio, and bio copy; inserted between Our Story and What We Do
