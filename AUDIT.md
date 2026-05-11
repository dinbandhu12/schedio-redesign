# Schedio Studio — Project Audit
> Last updated: May 2026 · Post-launch state

---

## Lighthouse Scores (Production — schedio-redesign.vercel.app)

| Category        | Mobile | Desktop |
|-----------------|--------|---------|
| Performance     | 85     | 96      |
| Accessibility   | 96     | 96      |
| Best Practices  | 100    | 100     |
| SEO             | 100    | 100     |

**Mobile key metrics:** FCP 1.5s · LCP 3.9s · TBT 20ms · Speed Index 5.3s · CLS 0  
**Desktop key metrics:** FCP 0.4s · LCP 0.6s · TBT 10ms · Speed Index 2.0s

---

## SEO

| Item | Status |
|------|--------|
| Sitemap (`src/app/sitemap.ts`) | ✅ Done |
| Robots.txt (`src/app/robots.ts`) | ✅ Done |
| Root layout metadata (title, description, OG, Twitter) | ✅ Done |
| Per-page metadata — About layout | ✅ Done |
| Per-page metadata — Services layout | ✅ Done |
| Per-page metadata — Work layout | ✅ Done |
| Per-page metadata — Contact layout | ✅ Done |
| Per-page metadata — Blog page | ✅ Done |
| Per-page metadata — Legal pages | ✅ Done |
| JSON-LD `Organization` + `LocalBusiness` schema | ✅ Done (root layout) |
| JSON-LD `FAQPage` schema | ✅ Done (root layout) |
| Canonical URLs | ✅ Done (all layouts + blog) |
| OG image (1200×630) | ✅ Done (`/public/og-image.png`) |
| Twitter card tags | ✅ Done (root layout, inherited) |
| Heading hierarchy — About page | ✅ Fixed |
| Heading hierarchy — Services page | ✅ Fixed |
| Blog page `noindex` (until posts ready) | ✅ Done — 4 posts now published; remove `noindex` when ready to index |
| Descriptive alt text on all images | ✅ Done |

---

## Content & Copy

| Item | Status |
|------|--------|
| "in detailed" → "in detail" (Contact page) | ✅ Fixed |
| "organisational" → "organizational" (Privacy Policy) | ✅ Fixed |
| "10wk" → "10 weeks" (Work page stats) | ✅ Fixed |
| Blog description grammar fixed | ✅ Fixed |
| UI/UX spacing standardized across all pages | ✅ Fixed |
| Phone number format matched (Footer + Contact) | ✅ Fixed |
| Em dashes vs hyphens in body copy | ✅ Fixed |
| Legal pages "Last updated" dates → May 2026 | ✅ Fixed |
| Founder section on About page (DBS, bio, photo) | ✅ Added |
| Blog posts published | ✅ 4 posts live |

---

## Accessibility

| Item | Status |
|------|--------|
| `focus-visible` ring (2px gold, 3px offset) in globals.css | ✅ Done |
| `.sr-only` utility in globals.css | ✅ Done |
| Newsletter email input — sr-only `<label>` added | ✅ Done |
| `--text-muted` contrast on dark bg | ✅ Fixed — `#817b73` = 4.76:1 (passes WCAG AA) |
| `--text` contrast on dark bg | ✅ ~18:1 (passes) |
| Decorative dim text — `aria-hidden` added | ✅ Done (FAQ numbers, Work preview, PageLoader counter) |
| Redundant image alts fixed | ✅ Done (Navbar logo, testimonial photos) |
| Navbar social links — real URLs | ✅ Fixed (Instagram, Behance, Dribbble, X) |
| Keyboard navigation focus states | ✅ Covered by focus-visible ring |

---

## Performance

| Item | Status |
|------|--------|
| Fonts — self-hosted via `next/font/google` | ✅ Done (Bricolage Grotesque, Inter, Lora) |
| No render-blocking Google Fonts stylesheet | ✅ Done |
| PageLoader animation duration shortened | ✅ Done |
| PageLoader counter "100" linger fixed | ✅ Fixed |
| Dynamic imports for below-fold sections | ✅ Done (Stats, Clients, Testimonials, FAQ, CTABanner) |
| All images via `next/image` (no raw `<img>`) | ✅ Done |
| Static export — all 18 pages prerendered | ✅ Done |

---

## Technical Health

| Item | Status |
|------|--------|
| `next build` — zero errors | ✅ 18 static pages |
| Favicon path fixed | ✅ Fixed (`/images/logo/logo-main.png`) |
| All nav links working (no `href="#"`) | ✅ Fixed — except LinkedIn in Footer (see below) |
| Broken link — Navbar overlay | ✅ Fixed |
| TypeScript strict — no `any` types | ✅ Passing |
| Custom 404 page | ✅ Exists and branded |

---

## Remaining Items

### Minor — Fix Before Going Live
- [ ] **Footer LinkedIn link** — still uses `href="#"` placeholder. Add the real LinkedIn URL when available.
- [ ] **Blog `noindex`** — 4 posts are live. Remove the `noindex` from `src/app/blog/page.tsx` when ready to appear in search results.
- [ ] **OG image** — current `/public/og-image.png` is a placeholder. Replace with a proper branded 1200×630 design before launch.

### Manual Tests (Do Before Launch)
- [ ] Test on iOS Safari — scroll, animations, cursor, loader
- [ ] Test on Android Chrome — same
- [ ] Visit a random URL (e.g. `/xyz`) and confirm 404 page appears
- [ ] Submit sitemap to Google Search Console after domain goes live

### Future Content
- [ ] Add 2 new SaaS project case studies (when ready — see template below)
- [ ] Publish additional blog posts and remove `noindex`
- [ ] Update display font — currently Bricolage Grotesque (temporary choice; swap via one line in `globals.css` + `layout.tsx`)

---

## Display Font Note

Currently using **Bricolage Grotesque** (loaded via `next/font/google`).  
To swap: change `--font-display` in `src/app/globals.css` and update the font import in `src/app/layout.tsx`. Two lines, no rebuild needed in dev.

---

## Adding New Case Studies

When ready, provide an MD file with:
- Project name, tagline, year
- Services rendered (Design / Dev / Branding)
- Stats (timeline, screens, etc.)
- Problem statement (2–3 sentences)
- Solution overview (2–3 sentences)
- Process steps (4–5 steps with title + description)
- Image files → drop into `public/images/casestudy/<project-slug>/`
- Optional: testimonial quote, author name, role
