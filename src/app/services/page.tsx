'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: '01',
    title: 'Brand Identity',
    tags: ['Logo Design', 'Visual Systems', 'Guidelines'],
    desc: 'Your brand is more than a logo — it\'s the feeling people carry after the interaction is over. We build visual identities from first principles: mark, color, type, and motion.',
    deliverables: ['Brand mark & logo suite', 'Color & typography system', 'Brand guidelines document', 'Asset library & templates'],
    img: '/images/showcase/img-05.png',
    bg: '#0e0d0c',
  },
  {
    num: '02',
    title: 'Web Design',
    tags: ['UI/UX', 'Prototyping', 'Design Systems'],
    desc: 'Interfaces that communicate before a word is read. Every layout choice, spacing decision, and interaction state is deliberate — not templated. Purpose-built for your context and audience.',
    deliverables: ['Wireframes & user flows', 'High-fidelity UI design', 'Interactive Figma prototype', 'Design system & component library'],
    img: '/images/showcase/img-07.png',
    bg: '#0f0e0c',
  },
  {
    num: '03',
    title: 'Development',
    tags: ['Next.js', 'React', 'Performance'],
    desc: 'Clean, performant code that makes your design breathe. We build with Next.js, handle CMS integrations, craft smooth animations, and ensure every page loads fast on every device.',
    deliverables: ['Next.js / React build', 'CMS integration & content structure', 'Motion & animation layer', 'Performance & SEO optimization'],
    img: '/images/showcase/img-09.png',
    bg: '#0d0d0b',
  },
  {
    num: '04',
    title: 'Motion & Interaction',
    tags: ['Animation', 'Micro-interactions', 'GSAP'],
    desc: 'The difference between a website and an experience is motion. Purposeful animation — scroll-driven reveals, page transitions, micro-interactions — that makes your product feel alive.',
    deliverables: ['Interaction design specs', 'GSAP / Framer Motion implementation', 'Page transition system', 'Scroll-driven experiences'],
    img: '/images/showcase/img-18.png',
    bg: '#100f0d',
  },
];

const PROCESS = [
  { num: '01', title: 'Discovery', body: 'We start by listening. Goals, audience, competitive landscape, and what success actually looks like for you.' },
  { num: '02', title: 'Strategy',  body: 'Scope defined. Approach locked. A clear map so both sides know exactly where we\'re headed before a single pixel moves.' },
  { num: '03', title: 'Design',    body: 'Iteration with intent. Regular check-ins, clear feedback loops, and no surprises — just steady progress toward something great.' },
  { num: '04', title: 'Build',     body: 'Code meets design. Staging previews throughout so you can see and test the product as it takes shape.' },
  { num: '05', title: 'Launch',    body: 'Deployment, handoff, and documentation. We stick around after go-live to make sure everything holds.' },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Navbar isLoaded={true} />

      <main style={{ background: 'var(--bg)' }}>

        {/* ══════════════════════════════ HERO ══════════════════════════════ */}
        <section
          className="hero-full"
          style={{
            padding: 'clamp(6rem, 10vw, 9rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4.5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              position: 'absolute',
              top: 'clamp(5.5rem, 9vw, 7.5rem)',
              left: 'clamp(1.25rem, 4vw, 3rem)',
              right: 'clamp(1.25rem, 4vw, 3rem)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p className="text-label">Services — 02</p>
            <p className="text-label" style={{ color: 'var(--text-dim)' }}>04 disciplines</p>
          </motion.div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, delay: 0.2, ease }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.4rem, 11vw, 12rem)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: 'var(--text)',
                  maxWidth: '15ch',
                  paddingBottom: '0.08em',
                }}
              >
                Craft that
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>moves</em> people.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '2rem',
                marginTop: 'clamp(2.5rem, 5vw, 4rem)',
                paddingTop: 'clamp(2rem, 4vw, 3rem)',
                borderTop: '1px solid var(--border)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '46ch' }}>
                From brand identity to fully engineered digital products we cover every discipline needed to take your idea from concept to launch.
              </p>
              <Link
                href="/work"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--accent)', flexShrink: 0, transition: 'gap 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '1.1rem')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '0.65rem')}
              >
                See our work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════ WHAT WE DO — LIST + PANEL ══════════════════ */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>

          {/* Label row */}
          <div
            style={{
              padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <ScrollReveal><p className="text-label">What we do — 01</p></ScrollReveal>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            <ScrollReveal delay={0.05}><p className="text-label" style={{ color: 'var(--text-dim)' }}>{String(SERVICES.length).padStart(2, '0')} disciplines</p></ScrollReveal>
          </div>

          {/* ── Mobile tab pills ── */}
          <div
            className="flex md:hidden"
            style={{
              gap: '0.5rem',
              padding: '1.25rem clamp(1.25rem, 4vw, 3rem)',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {SERVICES.map((svc, i) => (
              <button
                key={svc.num}
                onClick={() => setActive(i)}
                style={{
                  flexShrink: 0,
                  padding: '0.5rem 1.25rem',
                  borderRadius: 100,
                  border: `1px solid ${active === i ? 'var(--accent)' : 'var(--border)'}`,
                  background: active === i ? 'rgba(201,169,110,0.08)' : 'transparent',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: active === i ? 'var(--accent)' : 'var(--text-muted)',
                  cursor: 'none',
                  transition: 'all 0.25s',
                }}
              >
                {svc.title}
              </button>
            ))}
          </div>

          {/* ── Main two-column layout ── */}
          <div
            className="md:grid hero-full"
            style={{
              gridTemplateColumns: '1fr 1.2fr',
              gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            } as React.CSSProperties}
          >
            {/* ── Left: service list (desktop only) ── */}
            <div
              className="hidden md:flex"
              style={{
                flexDirection: 'column',
                border: '1px solid var(--border)',
                borderRadius: 'clamp(12px, 1.5vw, 18px)',
                overflow: 'hidden',
              }}
            >
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.num}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 'clamp(2rem, 3.5vw, 3rem) clamp(1.75rem, 3vw, 2.75rem)',
                    borderBottom: i < SERVICES.length - 1 ? '1px solid var(--border)' : 'none',
                    cursor: 'none',
                    position: 'relative',
                    transition: 'background 0.35s',
                    background: active === i ? 'var(--surface-1)' : 'transparent',
                    overflow: 'hidden',
                  }}
                >
                  {/* Accent left border */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 2,
                      background: 'var(--accent)',
                      transform: active === i ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: 'bottom',
                      transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  />

                  {/* Number + title row */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.55rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: active === i ? 'var(--accent)' : 'var(--text-dim)',
                        transition: 'color 0.3s',
                        flexShrink: 0,
                      }}
                    >
                      {svc.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 2.6vw, 2.8rem)',
                        fontWeight: 400,
                        lineHeight: 1.05,
                        letterSpacing: '-0.025em',
                        color: active === i ? 'var(--text)' : 'var(--text-muted)',
                        transition: 'color 0.3s',
                      }}
                    >
                      {svc.title}
                    </h3>
                  </div>

                  {/* Tags — slide in when active */}
                  <motion.div
                    animate={{
                      height: active === i ? 'auto' : 0,
                      opacity: active === i ? 1 : 0,
                      marginTop: active === i ? '0.85rem' : 0,
                    }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.58rem',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--text-dim)',
                            border: '1px solid var(--border)',
                            padding: '0.22rem 0.7rem',
                            borderRadius: 100,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* ── Right: sticky full-image panel ── */}
            <div
              className="md:sticky md:top-0"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'clamp(12px, 1.5vw, 18px)',
                height: 'calc(100svh - clamp(1.5rem, 3vw, 2.5rem))',
                alignSelf: 'start',
              }}
            >
              {/* ── Full bleed image (crossfades on service change) ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${active}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:block"
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Image
                    src={SERVICES[active].img}
                    alt={SERVICES[active].title}
                    fill
                    sizes="60vw"
                    style={{ objectFit: 'cover', filter: 'brightness(0.55) saturate(0.75)' }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient vignette — strengthens toward bottom */}
              <div
                aria-hidden
                className="hidden md:block"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(160deg, rgba(9,9,8,0.1) 0%, rgba(9,9,8,0.15) 40%, rgba(9,9,8,0.65) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Ghost number — top right */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`num-${active}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    top: 'clamp(1.25rem, 2vw, 2rem)',
                    right: 'clamp(1.25rem, 2vw, 2rem)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(4rem, 7vw, 9rem)',
                    fontWeight: 700,
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(237,232,223,0.14)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    letterSpacing: '-0.05em',
                  }}
                >
                  {SERVICES[active].num}
                </motion.span>
              </AnimatePresence>

              {/* ── Glassmorphism content card ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`card-${active}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    bottom: 'clamp(1.25rem, 2vw, 1.75rem)',
                    left: 'clamp(1.25rem, 2vw, 1.75rem)',
                    right: 'clamp(1.25rem, 2vw, 1.75rem)',
                    backdropFilter: 'blur(28px) saturate(1.5)',
                    WebkitBackdropFilter: 'blur(28px) saturate(1.5)',
                    background: 'rgba(9, 9, 8, 0.52)',
                    border: '1px solid rgba(237, 232, 223, 0.09)',
                    borderRadius: 'clamp(10px, 1.2vw, 14px)',
                    padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  }}
                >
                  {/* Title row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: 'clamp(0.85rem, 1.5vw, 1.25rem)',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 'clamp(1.6rem, 3vw, 3rem)',
                        fontWeight: 400,
                        lineHeight: 1.0,
                        letterSpacing: '-0.03em',
                        color: 'var(--text)',
                      }}
                    >
                      {SERVICES[active].title}
                    </h2>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.55rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        flexShrink: 0,
                        paddingBottom: '0.3em',
                      }}
                    >
                      {SERVICES[active].num} / {String(SERVICES.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: 1,
                      background: 'rgba(237,232,223,0.08)',
                      marginBottom: 'clamp(0.85rem, 1.5vw, 1.25rem)',
                    }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.82rem, 1vw, 0.92rem)',
                      lineHeight: 1.82,
                      color: 'rgba(237,232,223,0.65)',
                      marginBottom: 'clamp(1rem, 1.8vw, 1.5rem)',
                    }}
                  >
                    {SERVICES[active].desc}
                  </p>

                  {/* Deliverables 2-col grid */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.45rem 1.5rem',
                      marginBottom: 'clamp(1.25rem, 2vw, 1.75rem)',
                    }}
                  >
                    {SERVICES[active].deliverables.map((d) => (
                      <li
                        key={d}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          color: 'rgba(237,232,223,0.8)',
                        }}
                      >
                        <span
                          style={{
                            width: 3,
                            height: 3,
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            flexShrink: 0,
                          }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(0.88rem, 1.1vw, 1rem)',
                      color: 'var(--accent)',
                      transition: 'gap 0.25s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '1rem')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '0.6rem')}
                  >
                    Start this project
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 11L11 2M11 2H4M11 2V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* ── Mobile: static card layout ── */}
              <div className="flex md:hidden flex-col">
                <div style={{ position: 'relative', height: 260 }}>
                  <Image
                    src={SERVICES[active].img}
                    alt={SERVICES[active].title}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover', filter: 'brightness(0.6) saturate(0.8)' }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, var(--bg) 100%)',
                    }}
                  />
                </div>
                <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', fontWeight: 400, letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '0.75rem' }}>
                    {SERVICES[active].title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    {SERVICES[active].desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {SERVICES[active].deliverables.map((d) => (
                      <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text)' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--accent)' }}>
                    Start this project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ PROCESS ══════════════════════════════ */}
        <section style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gap: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'clamp(3.5rem, 7vw, 6rem)' }} className="lg:grid-cols-[1fr_1.8fr]">
            <div>
              <ScrollReveal><p className="text-label" style={{ marginBottom: '1.25rem' }}>Our approach — 02</p></ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 5rem)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '-0.035em', color: 'var(--text)' }}>
                  How we<br /><em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>actually</em> work.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.92rem, 1.3vw, 1.05rem)', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '52ch', alignSelf: 'end' }}>
                No black boxes. No scope creep surprises. A tight, transparent process that keeps you in the loop at every stage.
              </p>
            </ScrollReveal>
          </div>

          <div style={{ display: 'grid', gap: 0 }} className="sm:grid-cols-5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.09 }}
                style={{ borderTop: '1px solid var(--border)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(1.5rem, 2.5vw, 2.25rem) clamp(1rem, 2vw, 1.75rem)' }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4vw, 4.5rem)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--border)', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  {step.num}
                </p>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginBottom: '0.85rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', fontWeight: 400, color: 'var(--text)', letterSpacing: '-0.015em', marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════ DIFFERENTIATORS ══════════════════════ */}
        <section style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)', borderBottom: '1px solid var(--border)' }}>
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>Why Schedio — 03</p>
          </ScrollReveal>
          {[
            { label: 'No middlemen.', body: 'You speak directly with the people doing the work — no account managers passing notes between floors.' },
            { label: 'Detail as discipline.', body: 'We obsess over the micro-interactions, kerning, and half-pixels most agencies never touch. That\'s where the difference lives.' },
            { label: 'Built to last.', body: 'We don\'t design for the portfolio screenshot. We design for the product that\'s still running and converting two years from now.' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease, delay: i * 0.08 }}
              style={{ display: 'grid', borderTop: '1px solid var(--border)', padding: 'clamp(1.75rem, 3.5vw, 2.75rem) 0', alignItems: 'baseline', gap: 'clamp(1rem, 3vw, 3rem)' }}
              className="lg:grid-cols-[1fr_1.8fr]"
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.8vw, 2.8rem)', fontWeight: 400, letterSpacing: '-0.025em', color: 'var(--text)', lineHeight: 1.05 }}>
                {item.label}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '52ch' }}>
                {item.body}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </section>

        {/* ══════════════════════════ CTA ══════════════════════════════════ */}
        <section style={{ padding: 'clamp(6rem, 14vw, 13rem) clamp(1.25rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <ScrollReveal><p className="text-label">Let&rsquo;s talk — 04</p></ScrollReveal>
          <ScrollReveal delay={0.07}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 10vw, 11rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.04em', color: 'var(--text)', maxWidth: '14ch' }}>
              Ready to start<br /><em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>your project?</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.13}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '40ch' }}>
              Tell us what you&rsquo;re building. We&rsquo;ll tell you how we can make it exceptional.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.95rem 2.25rem', background: 'var(--accent)', borderRadius: 100, fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bg)', transition: 'background 0.3s, gap 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.gap = '1.1rem'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.gap = '0.75rem'; }}
              >
                Start a project
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H4M11 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link
                href="mailto:info@schedio.studio"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '0.95rem 2.25rem', borderRadius: 100, border: '1px solid var(--border)', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', transition: 'border-color 0.3s, color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                info@schedio.studio
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </>
  );
}
