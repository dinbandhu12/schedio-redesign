'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const CATEGORIES = ['All', 'Branding', 'UI/UX', 'Web', 'Product'] as const;

// ─── Types ─────────────────────────────────────────────────────────────────────

interface Swatch { name: string; hex: string; role: string; }
interface TypeSpec { name: string; weights: string; usage: string; }

interface CaseStudy {
  role: string;
  duration: string;
  tools: string[];
  brief: string;
  problem: { heading: string; body: string };
  process: { heading: string; body: string; image?: string };
  typography?: { primary: TypeSpec; secondary?: TypeSpec };
  palette?: Swatch[];
  gallery: string[];
  stats: { num: string; label: string }[];
  testimonial?: { quote: string; author: string; title: string };
}

interface Project {
  num: string;
  client: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  img: string;
  ratio: string;
  offset: number;
  cs: CaseStudy;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    num: '01',
    client: 'Lora Hayes',
    title: 'Personal Portfolio',
    category: 'UI/UX',
    tags: ['UI Design', 'Web'],
    year: '2024',
    img: '/images/showcase/c7-2.jpg',
    ratio: '4/5',
    offset: 0,
    cs: {
      role: 'UI Design · Frontend',
      duration: '6 weeks',
      tools: ['Figma', 'Next.js', 'Framer Motion'],
      brief: 'Lora needed a portfolio that matched her own creative standard — considered, quiet, and entirely her own. Not a template. A space that earns attention rather than demands it.',
      problem: {
        heading: 'The noise problem',
        body: 'Creative portfolios are saturated. Most compete on visual loudness — the loudest grid, the most transitions, the most saturated colours. Lora\'s work is the opposite: restrained, editorial, precise. The site needed to reflect that. Anything that didn\'t serve the work had to go.',
      },
      process: {
        heading: 'Designing for restraint',
        body: 'We started by removing — stripping back to what every portfolio actually needs: work, context, contact. Navigation was hidden until needed. The type palette was reduced to two weights of a single serif. Transitions were slowed down deliberately to feel considered rather than performative. Every scroll-driven reveal was designed to give work more room, not to show off.',
        image: '/images/showcase/img-07.png',
      },
      typography: {
        primary: { name: 'Playfair Display', weights: '400, 500 Italic', usage: 'Headlines, project titles, pull quotes' },
        secondary: { name: 'Inter', weights: '300, 400', usage: 'Body text, metadata, labels' },
      },
      palette: [
        { name: 'Ink', hex: '#0D0C0B', role: 'Page background' },
        { name: 'Parchment', hex: '#EDE8DF', role: 'Primary text' },
        { name: 'Dust', hex: '#7A746C', role: 'Secondary text' },
        { name: 'Warm White', hex: '#F7F4EF', role: 'Surface highlights' },
      ],
      gallery: ['/images/showcase/img-08.png', '/images/showcase/mockup-1.png'],
      stats: [
        { num: '3×', label: 'Avg. session time vs. previous site' },
        { num: '3', label: 'Client enquiries in first week' },
        { num: '98', label: 'Lighthouse performance score' },
      ],
      testimonial: {
        quote: 'Schedio understood immediately what I couldn\'t articulate. The site feels like mine — not like a template someone filled in.',
        author: 'Lora Hayes',
        title: 'Creative Director, NYC',
      },
    },
  },
  {
    num: '02',
    client: 'Shree Ganesh',
    title: 'Industrial Identity',
    category: 'Branding',
    tags: ['Logo', 'Brand System'],
    year: '2024',
    img: '/images/showcase/c2.png',
    ratio: '3/4',
    offset: 60,
    cs: {
      role: 'Brand Identity · Guidelines',
      duration: '10 weeks',
      tools: ['Figma', 'Illustrator', 'InDesign'],
      brief: 'Shree Ganesh had 30 years of operational trust and zero brand recognition beyond existing clients. Entering new enterprise markets required a visual identity that could carry that heritage into boardrooms.',
      problem: {
        heading: 'Heritage without stagnation',
        body: 'Legacy industrial brands often default to two failing archetypes: the dusty heritage mark that signals tradition but not competence, or the hollow "we modernised" rebrand that strips all equity. The challenge was to find the third path — a mark rooted in the company\'s actual story, refined enough for the markets they wanted to reach.',
      },
      process: {
        heading: 'From factory floor to brand mark',
        body: 'Research started on-site — understanding the manufacturing process, the precision it required, the pride the team took in tolerances most clients never see. The mark emerged from geometric forms referencing both sacred geometry (rooted in the company name) and the precision engineering grids used on the factory floor. A secondary typographic system introduced clarity and structure the brand had previously lacked.',
        image: '/images/showcase/img-05.png',
      },
      typography: {
        primary: { name: 'Söhne', weights: '400, 600', usage: 'Wordmark, headings, product labels' },
        secondary: { name: 'Garamond Premier', weights: '400 Italic', usage: 'Tagline, formal documents' },
      },
      palette: [
        { name: 'Forge', hex: '#1A1F2E', role: 'Primary — authority, depth' },
        { name: 'Burnished', hex: '#C9A96E', role: 'Accent — precision, value' },
        { name: 'Iron', hex: '#8C8C8C', role: 'Supporting neutral' },
        { name: 'Smoke', hex: '#F2F0EC', role: 'Background, print' },
      ],
      gallery: ['/images/showcase/img-06.png', '/images/showcase/branding.png'],
      stats: [
        { num: '4', label: 'Enterprise RFPs won in Q1 post-launch' },
        { num: '12', label: 'Brand touchpoints unified' },
        { num: '30+', label: 'Years of heritage preserved' },
      ],
    },
  },
  {
    num: '03',
    client: 'Dream Destination',
    title: 'Travel Platform',
    category: 'Web',
    tags: ['UX', 'Product Design'],
    year: '2024',
    img: '/images/showcase/c3.png',
    ratio: '5/6',
    offset: 0,
    cs: {
      role: 'UX Strategy · UI Design · Prototype',
      duration: '14 weeks',
      tools: ['Figma', 'Maze', 'Next.js'],
      brief: 'Dream Destination wanted to compete in the luxury travel space without acting like an aggregator. The goal: feel like a concierge service, work like a modern product.',
      problem: {
        heading: 'The aggregator trap',
        body: 'Every major travel platform optimises for search. Filters, grids, sorting by price — the entire paradigm assumes the user knows exactly where they want to go. Luxury travellers are different. They want to be moved, surprised, guided. No existing platform served that intent. The UX problem was: how do you replace search-first with discovery-first without confusing users or slowing them down?',
      },
      process: {
        heading: 'Magazine logic, product speed',
        body: 'We mapped the discovery journey of how a well-travelled person actually chooses a destination — conversations, editorial features, a friend\'s recommendation. Then we built that logic into the product. The home experience leads with curated editorial sections. Destinations are presented with context — best season, who it\'s for, what it feels like — before any pricing appears. Filtering is available, but it\'s never the first thing you see.',
        image: '/images/showcase/img-09.png',
      },
      gallery: ['/images/showcase/img-10.png', '/images/showcase/img-11.png'],
      stats: [
        { num: '3×', label: 'Session duration vs. industry benchmark' },
        { num: '+28%', label: 'Conversion in A/B testing' },
        { num: '4.8', label: 'Beta user satisfaction score / 5' },
      ],
      testimonial: {
        quote: 'The team fundamentally rethought how a travel product should feel. The result isn\'t a booking engine — it\'s a destination in itself.',
        author: 'Priya Nair',
        title: 'CPO, Dream Destination',
      },
    },
  },
  {
    num: '04',
    client: 'Innovative Designs',
    title: 'Identity Refresh',
    category: 'Branding',
    tags: ['Brand', 'Guidelines'],
    year: '2023',
    img: '/images/showcase/c4.png',
    ratio: '3/4',
    offset: 60,
    cs: {
      role: 'Brand Strategy · Visual Identity · Guidelines',
      duration: '8 weeks',
      tools: ['Figma', 'Illustrator', 'Notion'],
      brief: 'Innovative Designs had built a strong creative reputation on the strength of their work. Their brand identity had never kept pace. Enterprise clients were walking in the door and seeing a brand that told a different story.',
      problem: {
        heading: 'The credibility gap',
        body: 'There\'s a specific problem that hits mid-sized creative studios: the work outgrows the brand. Innovative Designs was winning projects on reputation and referral, but losing enterprise pitches at the credentials stage. The brand signalled "boutique" when the work delivered "agency". The gap was costing them revenue.',
      },
      process: {
        heading: 'Refinement, not reinvention',
        body: 'The instinct is to rebuild from scratch. We pushed back. Equity had been built in the existing mark — recognition, muscle memory, associations. Instead, we refined: tightened the geometry of the mark, removed redundant elements, introduced a rigorous typographic system, and built a proper guidelines document the internal team could own and operate without us.',
        image: '/images/showcase/design.png',
      },
      typography: {
        primary: { name: 'Neue Haas Grotesk', weights: '400, 500, 700', usage: 'All UI, headings, brand communications' },
        secondary: { name: 'Cormorant Garamond', weights: '400, 600 Italic', usage: 'Pull quotes, editorial contexts' },
      },
      palette: [
        { name: 'Obsidian', hex: '#111111', role: 'Primary — credibility, focus' },
        { name: 'Signal', hex: '#E8410A', role: 'Accent — energy, distinctiveness' },
        { name: 'Stone', hex: '#ABABAB', role: 'Supporting neutral' },
        { name: 'Paper', hex: '#F9F7F4', role: 'Background' },
      ],
      gallery: ['/images/showcase/img-12.png', '/images/showcase/mockup-1.png'],
      stats: [
        { num: '2', label: 'Enterprise retainers secured in 90 days' },
        { num: '40%', label: 'Increase in average project value' },
        { num: '1', label: 'Guidelines doc the team actually uses' },
      ],
    },
  },
  {
    num: '05',
    client: 'Horizon',
    title: 'SaaS Interface',
    category: 'Product',
    tags: ['UI', 'Design System'],
    year: '2023',
    img: '/images/showcase/c5.png',
    ratio: '4/5',
    offset: 0,
    cs: {
      role: 'Product Design · Design System',
      duration: '16 weeks',
      tools: ['Figma', 'Storybook', 'React'],
      brief: 'Horizon had scaled from 3 to 40 engineers in 18 months. The design hadn\'t scaled with them. The UI was inconsistent across modules, the component library didn\'t exist in a usable form, and new features were taking 3× longer to design than they should.',
      problem: {
        heading: 'Design debt at scale',
        body: 'Without a design system, every new feature is built from scratch. Buttons look slightly different in every module. Spacing is inconsistent. Engineers make design decisions they shouldn\'t have to make. The cost isn\'t visible until it suddenly is — in QA cycles, in onboarding friction, in users who can\'t find what they\'re looking for because every section was designed by a different person.',
      },
      process: {
        heading: 'Audit, define, build',
        body: 'We started with a full UI audit — cataloguing every unique component across 14 product modules. From 340 distinct elements, we derived a core set of 48 reusable components. Then we built the system: design tokens for colour, spacing, and type; a Figma component library; a Storybook implementation guide; and documentation the team could maintain without us. The goal wasn\'t to design new screens — it was to create the infrastructure for the team to design good screens themselves.',
        image: '/images/showcase/dashboard.png',
      },
      typography: {
        primary: { name: 'Inter', weights: '400, 500, 600', usage: 'All UI text, data tables, labels' },
        secondary: { name: 'JetBrains Mono', weights: '400', usage: 'Code snippets, data values, IDs' },
      },
      palette: [
        { name: 'Void', hex: '#0F1117', role: 'App background' },
        { name: 'Surface', hex: '#1C1E26', role: 'Cards, panels' },
        { name: 'Iris', hex: '#5C6BC0', role: 'Primary actions' },
        { name: 'Mint', hex: '#26A69A', role: 'Success states' },
        { name: 'Ember', hex: '#EF5350', role: 'Error/warning states' },
      ],
      gallery: ['/images/showcase/img-07.png', '/images/showcase/c5.png'],
      stats: [
        { num: '−40%', label: 'Feature design time after system launch' },
        { num: '48', label: 'Core components in the system' },
        { num: '340→48', label: 'Unique elements rationalised' },
      ],
      testimonial: {
        quote: 'The design system changed how our engineering team thinks about UI. It\'s the most leveraged thing we\'ve ever invested in.',
        author: 'James Park',
        title: 'CTO, Horizon',
      },
    },
  },
  {
    num: '06',
    client: 'Motif Collective',
    title: 'Editorial Site',
    category: 'Web',
    tags: ['Web', 'CMS'],
    year: '2023',
    img: '/images/showcase/c6.png',
    ratio: '3/4',
    offset: 60,
    cs: {
      role: 'Web Design · Development · CMS',
      duration: '12 weeks',
      tools: ['Figma', 'Next.js', 'Sanity CMS'],
      brief: 'Motif Collective publishes long-form writing on contemporary art and design. Their old site — a generic WordPress theme — actively undermined the quality of the writing. They needed a publishing platform as considered as the work it housed.',
      problem: {
        heading: 'When the container contradicts the content',
        body: 'Long-form editorial depends on trust — readers must believe the publication takes the work seriously. A generic theme signals the opposite. Beyond aesthetics, the old CMS made publishing complex articles painful: images couldn\'t be placed inline, typography was inconsistent, and the editorial team spent more time fighting the CMS than writing. Two problems, one solution.',
      },
      process: {
        heading: 'Editorial-first architecture',
        body: 'We designed the reading experience first — the optimal conditions for a 3,000-word essay on type design or a photo essay on a sculptor\'s practice. Then we built backwards from that: a custom Sanity schema that gave editors real control over layout (variable columns, full-bleed images, pull quotes, inline captions) without requiring developer involvement. The result is a CMS the editorial team actually enjoys using.',
        image: '/images/showcase/img-04.png',
      },
      typography: {
        primary: { name: 'Freight Display', weights: '400, 400 Italic', usage: 'Article headlines, section titles' },
        secondary: { name: 'Freight Text', weights: '400, 400 Italic', usage: 'Body text, reading content' },
        // tertiary for meta
      },
      palette: [
        { name: 'Warm Black', hex: '#141210', role: 'Primary background' },
        { name: 'Linen', hex: '#F0EBE3', role: 'Reading surface' },
        { name: 'Sepia', hex: '#8C7355', role: 'Accent — links, highlights' },
        { name: 'Graphite', hex: '#5A5550', role: 'Body text on light' },
      ],
      gallery: ['/images/showcase/img-06.png', '/images/showcase/img-08.png'],
      stats: [
        { num: '−87%', label: 'Time-to-publish per article' },
        { num: '+60%', label: 'Readership growth in Q1' },
        { num: '4.2min', label: 'Average reading time (up from 1.8min)' },
      ],
    },
  },
];

// ─── Case study overlay ────────────────────────────────────────────────────────

function CaseStudyOverlay({
  project,
  onClose,
  projects,
}: {
  project: Project;
  onClose: () => void;
  projects: Project[];
}) {
  const { cs } = project;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const idx = projects.findIndex((p) => p.num === project.num);
  const next = projects[(idx + 1) % projects.length];

  return (
    <motion.div
      layoutId={`card-${project.num}`}
      style={{
        position: 'fixed',
        top: '3vh',
        left: '3vw',
        right: '3vw',
        bottom: '3vh',
        zIndex: 9999,
        borderRadius: 20,
        overflow: 'hidden',
        background: 'var(--surface-1)',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
      }}
      transition={{ layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Close */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 10,
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(9,9,8,0.65)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(237,232,223,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'none', color: 'var(--text)', transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,169,110,0.25)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(9,9,8,0.65)')}
        aria-label="Close"
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M1 1L10 10M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.button>

      {/* ── Scrollable body — data-lenis-prevent stops Lenis intercepting scroll ── */}
      <div
        data-lenis-prevent
        style={{ flex: 1, overflowY: 'scroll', scrollbarWidth: 'thin', scrollbarColor: 'var(--border) transparent' }}
      >

        {/* ── 1. HERO IMAGE ── */}
        <motion.div
          className="h-[56vh] md:h-[80vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          style={{ position: 'relative', flexShrink: 0 }}
        >
          <Image
            src={project.img}
            alt={project.client}
            fill
            sizes="95vw"
            style={{ objectFit: 'cover', filter: 'brightness(0.6) saturate(0.8)' }}
            priority
          />
          <div
            aria-hidden
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(9,9,8,0.1) 0%, rgba(9,9,8,0) 30%, rgba(17,17,16,0.95) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.55, ease }}
            style={{
              position: 'absolute',
              bottom: 'clamp(1.75rem, 3vw, 3rem)',
              left: 'clamp(1.75rem, 3vw, 3rem)',
              right: 'clamp(4rem, 8vw, 7rem)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Case {project.num}
              </span>
              <span style={{ width: 24, height: 1, background: 'var(--accent)', display: 'inline-block', opacity: 0.5 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237,232,223,0.4)' }}>
                {project.category}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)', fontWeight: 400, lineHeight: 0.96, letterSpacing: '-0.035em', color: 'var(--text)' }}>
              {project.client}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(237,232,223,0.45)', marginTop: '0.5rem' }}>
              {project.title}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >

          {/* ── 2. PROJECT META BAR ── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {[
              { label: 'Client', value: project.client },
              { label: 'Year', value: project.year },
              { label: 'Role', value: cs.role },
              { label: 'Duration', value: cs.duration },
              { label: 'Tools', value: cs.tools.join(' · ') },
            ].map((m, i, arr) => (
              <div
                key={m.label}
                style={{
                  padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 2.5vw, 2rem)',
                  borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                  minWidth: 0,
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                  {m.label}
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(0.82rem, 1.1vw, 1rem)', color: 'var(--text)', letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* ── 3. THE BRIEF ── */}
          <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1.75rem, 4vw, 3.5rem)', borderBottom: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
              // The brief
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2.8vw, 2.6rem)', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.025em', color: 'var(--text)', maxWidth: '32ch' }}>
              &ldquo;{cs.brief}&rdquo;
            </p>
          </div>

          {/* ── 4. THE PROBLEM ── */}
          <div
            style={{
              padding: 'clamp(3rem, 5vw, 5rem) clamp(1.75rem, 4vw, 3.5rem)',
              borderBottom: '1px solid var(--border)',
            }}
            className="md:grid md:grid-cols-[1fr_1.5fr]"
          >
            <div style={{ paddingRight: 'clamp(1.5rem, 4vw, 4rem)', marginBottom: 'clamp(1.5rem, 0px, 0px)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>
                // The problem
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                {cs.problem.heading}
              </h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.85, color: 'var(--text-muted)' }}>
                {cs.problem.body}
              </p>
            </div>
          </div>

          {/* ── 5. PROCESS ── */}
          <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1.75rem, 4vw, 3.5rem)', borderBottom: '1px solid var(--border)' }}>
            <div
              style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
              className="md:grid md:grid-cols-[1fr_1.5fr]"
            >
              <div style={{ paddingRight: 'clamp(1.5rem, 4vw, 4rem)', marginBottom: 'clamp(1.5rem, 0px, 0px)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>
                  // The process
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                  {cs.process.heading}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.85, color: 'var(--text-muted)' }}>
                  {cs.process.body}
                </p>
              </div>
            </div>
            {cs.process.image && (
              <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '12/8' }}>
                <Image
                  src={cs.process.image}
                  alt="Process"
                  fill
                  sizes="90vw"
                  style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
                />
              </div>
            )}
          </div>

          {/* ── 6. DESIGN SYSTEM: TYPOGRAPHY + PALETTE ── */}
          {(cs.typography || cs.palette) && (
            <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1.75rem, 4vw, 3.5rem)', borderBottom: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                // Design system
              </p>

              <div className="md:grid md:grid-cols-2" style={{ gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>

                {/* Typography */}
                {cs.typography && (
                  <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ padding: 'clamp(1rem, 2vw, 1.5rem)', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>
                        Typography
                      </p>
                    </div>
                    {[cs.typography.primary, cs.typography.secondary].filter(Boolean).map((t) => t && (
                      <div key={t.name} style={{ padding: 'clamp(1rem, 2vw, 1.5rem)', borderBottom: '1px solid var(--border)' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1 }}>
                          {t.name}
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>
                          {t.weights}
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.01em' }}>
                          {t.usage}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Colour palette */}
                {cs.palette && (
                  <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ padding: 'clamp(1rem, 2vw, 1.5rem)', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>
                        Colour palette
                      </p>
                    </div>
                    {cs.palette.map((swatch) => (
                      <div
                        key={swatch.hex}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: 'clamp(0.75rem, 1.5vw, 1.1rem) clamp(1rem, 2vw, 1.5rem)', borderBottom: '1px solid var(--border)' }}
                      >
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: swatch.hex, flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)' }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text)', marginBottom: '0.2rem' }}>{swatch.name}</p>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-dim)' }}>{swatch.role}</p>
                        </div>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.08em', flexShrink: 0 }}>
                          {swatch.hex}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── 7. FINAL WORK GALLERY ── */}
          <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1.75rem, 4vw, 3.5rem)', borderBottom: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              // Final work
            </p>
            <div className="grid md:grid-cols-2" style={{ gap: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>
              {cs.gallery.map((src, i) => (
                <div
                  key={src}
                  style={{
                    position: 'relative',
                    aspectRatio: i === 0 ? '3/2' : '4/3',
                    borderRadius: 12, overflow: 'hidden',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-2)',
                  }}
                >
                  <Image src={src} alt="" fill sizes="45vw" style={{ objectFit: 'cover', filter: 'saturate(0.9)' }} />
                </div>
              ))}
            </div>
          </div>

          {/* ── 8. RESULTS ── */}
          <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1.75rem, 4vw, 3.5rem)', borderBottom: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              // Results
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cs.stats.length}, 1fr)`, gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {cs.stats.map((s, i) => (
                <div key={i} style={{ paddingTop: 'clamp(1.25rem, 2.5vw, 2rem)', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 4rem)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--accent)', marginBottom: '0.6rem' }}>
                    {s.num}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.72rem, 0.95vw, 0.85rem)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 9. TESTIMONIAL (optional) ── */}
          {cs.testimonial && (
            <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1.75rem, 4vw, 3.5rem)', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" style={{ marginBottom: '1.5rem', opacity: 0.25 }}>
                <path d="M0 22V13.4C0 9.4 1.13333 6.13333 3.4 3.6C5.66667 1.06667 8.8 0 12.8 0V3.8C10.8 3.8 9.26667 4.4 8.2 5.6C7.13333 6.8 6.6 8.26667 6.6 10V11.2H13.6V22H0ZM18.4 22V13.4C18.4 9.4 19.5333 6.13333 21.8 3.6C24.0667 1.06667 27.2 0 31.2 0V3.8C29.2 3.8 27.6667 4.4 26.6 5.6C25.5333 6.8 25 8.26667 25 10V11.2H32V22H18.4Z" fill="var(--text)" />
              </svg>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.2vw, 1.9rem)', fontWeight: 400, lineHeight: 1.45, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '42ch' }}>
                {cs.testimonial.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 1, height: 28, background: 'var(--accent)' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>{cs.testimonial.author}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{cs.testimonial.title}</p>
                </div>
              </div>
            </div>
          )}

          {/* ── 10. NEXT PROJECT ── */}
          <div
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.75rem, 4vw, 3.5rem)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '1rem',
            }}
          >
            <div>
              <p className="text-label" style={{ color: 'var(--text-dim)', marginBottom: '0.4rem' }}>Next project</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>{next.category} · {next.year}</p>
            </div>
            <button
              onClick={onClose}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
                color: 'var(--text-muted)', background: 'none', border: 'none',
                cursor: 'none', transition: 'color 0.25s, gap 0.25s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.gap = '1.15rem'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.gap = '0.75rem'; }}
            >
              {next.client} — {next.title}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({
  p,
  index,
  isSelected,
  onSelect,
}: {
  p: Project;
  index: number;
  isSelected: boolean;
  onSelect: (p: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${p.num}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isSelected ? 0 : 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        opacity: { duration: isSelected ? 0.1 : 0.55 },
        y: { duration: 0.65, ease, delay: index * 0.06 },
        layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ marginTop: p.offset, cursor: 'none' }}
      onClick={() => onSelect(p)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.85rem', padding: '0 0.2rem' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: hovered ? 'var(--accent)' : 'var(--text-dim)', transition: 'color 0.3s' }}>
          Case {p.num}
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--text-dim)' }}>
          &rsquo;{p.year.slice(2)}
        </span>
      </div>

      <div
        style={{ position: 'relative', aspectRatio: p.ratio, borderRadius: 'clamp(10px, 1.2vw, 14px)', overflow: 'hidden', background: 'var(--surface-2)' }}
      >
        <div style={{ position: 'absolute', inset: 0, transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.85s cubic-bezier(0.16,1,0.3,1)' }}>
          <Image src={p.img} alt={p.client} fill sizes="(min-width:768px) 45vw, 92vw" style={{ objectFit: 'cover' }} priority={parseInt(p.num) <= 2} />
        </div>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,9,8,0) 45%, rgba(9,9,8,0.6) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: 40, height: 40, borderRadius: '50%', background: 'rgba(9,9,8,0.55)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1) rotate(0deg)' : 'scale(0.6) rotate(-20deg)', transition: 'opacity 0.3s, transform 0.45s cubic-bezier(0.16,1,0.3,1)' }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H4M11 2V9" stroke="var(--text)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {p.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-light)', background: 'rgba(9,9,8,0.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(201,169,110,0.2)', padding: '0.25rem 0.6rem', borderRadius: 100, whiteSpace: 'nowrap' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '1.1rem', padding: '0 0.2rem' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.25rem, 1.9vw, 1.75rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em', color: hovered ? 'var(--accent-light)' : 'var(--text)', transition: 'color 0.3s', marginBottom: '0.3rem' }}>
          {p.client}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.title}</p>
      </div>
    </motion.div>
  );
}

// ─── Archive row ───────────────────────────────────────────────────────────────

function ArchiveRow({ p, i, onSelect }: { p: Project; i: number; onSelect: (p: Project) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <ScrollReveal delay={i * 0.04}>
      <div onClick={() => onSelect(p)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ cursor: 'none' }}>
        <div className="hidden md:grid" style={{ gridTemplateColumns: '4rem 1fr 1fr auto auto', gap: '1.5rem', alignItems: 'center', padding: 'clamp(1.5rem, 2.5vw, 2.25rem) clamp(0.75rem, 1.5vw, 1.25rem)', borderBottom: '1px solid var(--border)', background: hovered ? 'var(--surface-1)' : 'transparent', transition: 'background 0.25s', borderRadius: hovered ? 10 : 0 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.2em', color: hovered ? 'var(--accent)' : 'var(--text-dim)', transition: 'color 0.25s' }}>{p.num}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.4vw, 2.2rem)', fontWeight: 400, letterSpacing: '-0.02em', color: hovered ? 'var(--text)' : 'var(--text-muted)', transition: 'color 0.25s' }}>{p.client}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', color: 'var(--text-dim)' }}>{p.title}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>{p.category}</span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-dim)' }}>{p.year}</span>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.25s, transform 0.35s cubic-bezier(0.16,1,0.3,1)', transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke={hovered ? 'var(--accent)' : 'var(--text-dim)'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>
        </div>
        <div className="flex md:hidden" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border)', gap: '1rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: '0.2rem' }}>{p.client}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.category} · {p.year}</p>
          </div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}><path d="M2 12L12 2M12 2H4M12 2V10" stroke="var(--text-dim)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (selected) {
      const sbWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${sbWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    };
  }, [selected]);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <Navbar isLoaded={true} />
      <main style={{ background: 'var(--bg)' }}>

        {/* HERO */}
        <section className="hero-full" style={{ padding: 'clamp(6rem, 10vw, 9rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }} style={{ position: 'absolute', top: 'clamp(5.5rem, 9vw, 7.5rem)', left: 'clamp(1.25rem, 4vw, 3rem)', right: 'clamp(1.25rem, 4vw, 3rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="text-label">Work — 03</p>
            <p className="text-label" style={{ color: 'var(--text-dim)' }}>{String(PROJECTS.length).padStart(2, '0')} projects</p>
          </motion.div>
          <span aria-hidden style={{ position: 'absolute', bottom: '-0.1em', right: '-0.04em', fontFamily: 'var(--font-display)', fontSize: 'clamp(12rem, 35vw, 42rem)', fontWeight: 700, color: 'transparent', WebkitTextStroke: '1px var(--border)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.06em', opacity: 0.5 }}>03</span>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.h1 initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.05, delay: 0.2, ease }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.4rem, 11vw, 12rem)', fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--text)', maxWidth: '14ch', paddingBottom: '0.06em' }}>
                Work we&rsquo;re <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>proud</em><br />to sign.
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease }} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginTop: 'clamp(2.5rem, 5vw, 4rem)', paddingTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '44ch' }}>A selection of projects across brand identity, interface design, and digital products — each built with the same attention to detail.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--accent)', flexShrink: 0, transition: 'gap 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.gap = '1.1rem')} onMouseLeave={(e) => (e.currentTarget.style.gap = '0.65rem')}>
                Start your project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FILTER + GRID */}
        <section style={{ padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'clamp(3rem, 6vw, 5rem)', flexWrap: 'wrap' }}>
            <span className="text-label" style={{ marginRight: '0.75rem', whiteSpace: 'nowrap' }}>Filter by</span>
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)} style={{ padding: '0.5rem 1.25rem', borderRadius: 100, border: `1px solid ${activeFilter === cat ? 'var(--accent)' : 'var(--border)'}`, background: activeFilter === cat ? 'rgba(201,169,110,0.1)' : 'transparent', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: activeFilter === cat ? 'var(--accent)' : 'var(--text-muted)', cursor: 'none', transition: 'all 0.25s', whiteSpace: 'nowrap' }}>
                {cat}{cat !== 'All' && <span style={{ marginLeft: '0.4rem', opacity: 0.5 }}>({PROJECTS.filter((p) => p.category === cat).length})</span>}
              </button>
            ))}
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>{String(filtered.length).padStart(2, '0')} shown</span>
          </div>
          <div className="grid md:grid-cols-2" style={{ gap: 'clamp(1rem, 2.5vw, 2rem)', alignItems: 'start' }}>
            <AnimatePresence mode="sync">
              {filtered.map((p, i) => (
                <ProjectCard key={p.num} p={p} index={i} isSelected={selected?.num === p.num} onSelect={setSelected} />
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '6rem 0' }}>
              <p className="text-label">No projects in this category yet</p>
            </motion.div>
          )}
        </section>

        {/* ARCHIVE */}
        <section style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <ScrollReveal><p className="text-label">Full index</p></ScrollReveal>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            <ScrollReveal delay={0.05}><p className="text-label" style={{ color: 'var(--text-dim)' }}>{String(PROJECTS.length).padStart(2, '0')} total</p></ScrollReveal>
          </div>
          <div className="hidden md:grid" style={{ gridTemplateColumns: '4rem 1fr 1fr auto auto', gap: '1.5rem', padding: `0 clamp(0.75rem, 1.5vw, 1.25rem) clamp(0.75rem, 1.5vw, 1rem)`, borderBottom: '1px solid var(--border)' }}>
            {['No.', 'Client', 'Project', 'Type', 'Year'].map((h) => (
              <span key={h} className="text-label" style={{ color: 'var(--text-dim)', fontSize: '0.62rem' }}>{h}</span>
            ))}
          </div>
          {PROJECTS.map((p, i) => <ArchiveRow key={p.num} p={p} i={i} onSelect={setSelected} />)}
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(6rem, 14vw, 13rem) clamp(1.25rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <ScrollReveal><p className="text-label">Let&rsquo;s talk — 04</p></ScrollReveal>
          <ScrollReveal delay={0.07}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 10vw, 11rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.04em', color: 'var(--text)', maxWidth: '14ch' }}>
              Your project<br /><em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>could be next.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.13}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '40ch' }}>We take on a limited number of projects each quarter to make sure every client gets the attention they deserve.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.95rem 2.25rem', background: 'var(--accent)', borderRadius: 100, fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bg)', transition: 'background 0.3s, gap 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.gap = '1.1rem'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.gap = '0.75rem'; }}>
                Start a project
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H4M11 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="mailto:info@schedio.studio" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.95rem 2.25rem', borderRadius: 100, border: '1px solid var(--border)', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', transition: 'border-color 0.3s, color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
                info@schedio.studio
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />

      {/* OVERLAY */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} onClick={handleClose} style={{ position: 'fixed', inset: 0, background: 'rgba(9,9,8,0.88)', backdropFilter: 'blur(6px)', zIndex: 9998 }} />
            <CaseStudyOverlay key={selected.num} project={selected} onClose={handleClose} projects={PROJECTS} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
