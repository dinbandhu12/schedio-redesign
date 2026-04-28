'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Visual systems that communicate before a word is read. Every pixel placed with purpose.',
    img: '/images/showcase/img-07.png',
  },
  {
    num: '02',
    title: 'Branding',
    desc: 'Identities built to outlast trends — rooted in strategy, refined by craft.',
    img: '/images/showcase/img-05.png',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Clean, performant code. Fast sites, smooth interactions, built to scale with you.',
    img: '/images/showcase/img-09.png',
  },
  {
    num: '04',
    title: 'Strategy',
    desc: 'We map the path before we move. Every decision is deliberate, every step intentional.',
    img: '/images/showcase/img-18.png',
  },
];

const BELIEFS = [
  {
    num: '01',
    title: 'Craft first',
    body: 'We obsess over the details most people never notice — the micro-interaction, the kerning, the half-pixel. Because everything adds up.',
    img: '/images/showcase/c1.png',
  },
  {
    num: '02',
    title: 'Clarity always',
    body: 'Strip away everything that does not serve the story. Complexity is easy. Simplicity takes work.',
    img: '/images/showcase/c2.png',
  },
  {
    num: '03',
    title: 'True collaboration',
    body: 'Your vision, our craft. We embed ourselves in your goals so the final product feels like yours — because it is.',
    img: '/images/showcase/c3.png',
  },
];

const SCROLL_IMGS = [
  '/images/showcase/img-04.png',
  '/images/showcase/img-06.png',
  '/images/showcase/img-08.png',
  '/images/showcase/img-10.png',
  '/images/showcase/img-11.png',
  '/images/showcase/img-12.png',
];

const STATS = [
  { num: '2021', label: 'Founded' },
  { num: '60+',  label: 'Projects' },
  { num: '3',    label: 'Countries' },
  { num: '100%', label: 'Retention' },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ─── Tilt Card ───────────────────────────────────────────────────────────────

interface ServiceDef {
  num: string;
  title: string;
  desc: string;
  img: string;
}

function TiltCard({ svc, tall = false }: { svc: ServiceDef; tall?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hov, setHov] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
    setHov(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        aspectRatio: tall ? '3/4' : '4/5',
        cursor: 'none',
        transition: 'transform 0.12s ease-out',
        transformStyle: 'preserve-3d',
        border: '1px solid var(--border)',
        width: '100%',
      }}
    >
      {/* Image with zoom */}
      <div style={{
        position: 'absolute', inset: 0,
        transform: hov ? 'scale(1.07)' : 'scale(1)',
        transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <Image
          src={svc.img}
          alt={svc.title}
          fill
          style={{ objectFit: 'cover', filter: 'brightness(0.55) saturate(0.8)' }}
        />
      </div>

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(9,9,8,0.92) 0%, rgba(9,9,8,0.25) 55%, transparent 100%)',
      }} />

      {/* Warm tint on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(201,169,110,0.06)',
        opacity: hov ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Top row */}
      <div style={{
        position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
        }}>
          {svc.num}
        </span>
        {/* Arrow circle */}
        <div style={{
          width: 38, height: 38, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.18)',
          background: 'rgba(9,9,8,0.4)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hov ? 1 : 0,
          transform: hov ? 'scale(1) rotate(0deg)' : 'scale(0.65) rotate(-20deg)',
          transition: 'opacity 0.3s, transform 0.45s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.35" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: '1.75rem', left: '1.75rem', right: '1.75rem' }}>
        {/* Category tag */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '0.55rem',
          opacity: hov ? 1 : 0,
          transform: hov ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.3s 0.04s, transform 0.4s 0.04s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Schedio · {svc.num}
        </p>
        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.6rem, 2.8vw, 2.75rem)',
          fontWeight: 400,
          letterSpacing: '-0.025em',
          color: 'var(--text)',
          lineHeight: 1.05,
          marginBottom: '0.65rem',
          transform: hov ? 'translateY(0)' : 'translateY(6px)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}>
          {svc.title}
        </h3>
        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.87rem',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          maxWidth: '38ch',
          opacity: hov ? 1 : 0,
          transform: hov ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.35s 0.08s, transform 0.45s 0.08s cubic-bezier(0.16,1,0.3,1)',
        }}>
          {svc.desc}
        </p>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Navbar isLoaded={true} />

      <main style={{ background: 'var(--bg)' }}>

        {/* ══════════════════════════════ HERO ══════════════════════════════ */}
        <section
          className="hero-full"
          style={{
            padding: 'clamp(5.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4.5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Floating image — desktop right */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.3, ease }}
            style={{
              position: 'absolute',
              top: 0, right: 0,
              width: '50%',
              height: '75%',
              overflow: 'hidden',
            }}
            className="hidden lg:block"
          >
            <Image
              src="/images/showcase/img-07.png"
              alt=""
              fill
              priority
              style={{ objectFit: 'cover', filter: 'brightness(0.5) saturate(0.75)' }}
            />
            {/* Bleed edges into bg */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 35%, var(--bg) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,  var(--bg) 0%, transparent 35%)' }} />

            {/* Floating label on image */}
            <div style={{ position: 'absolute', bottom: '2.5rem', right: '2rem', textAlign: 'right' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.3rem' }}>
                Mumbai, India
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-muted)' }}>
                Est. 2021
              </p>
            </div>
          </motion.div>

          {/* Ghost watermark */}
          {/* <span aria-hidden style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '-0.5rem',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(8rem, 24vw, 26rem)',
            fontWeight: 700,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px var(--border)',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.04em',
            zIndex: 0,
          }}>
            About
          </span> */}

          {/* Text content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Label bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              <p className="text-label">About — 00</p>
              <div style={{ width: 'clamp(1.5rem, 4vw, 4rem)', height: 1, background: 'var(--border)' }} />
              <p className="text-label" style={{ color: 'var(--text-dim)' }}>Est. 2021 · Mumbai</p>
            </motion.div>

            {/* Headline with clip reveal */}
            <div style={{ overflow: 'hidden', marginBottom: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
              <motion.h1
                initial={{ y: '102%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.25, ease }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.2rem, 10vw, 11rem)',
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: 'var(--text)',
                  maxWidth: '16ch',
                  paddingBottom: '1rem'
                }}
              >
                Where strategy
                <br />
                meets{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>craft.</em>
              </motion.h1>
            </div>

            {/* Footer bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 1.4vw, 1.08rem)',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                maxWidth: 'clamp(40ch, 50vw, 44ch',
              }}>
                A tight-knit studio of designers and developers. We build digital presences that are precise, lasting, and unmistakably intentional.
              </p>
              <Link
                href="/work"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--accent)', flexShrink: 0, transition: 'gap 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.gap = '1rem')}
                onMouseLeave={e => (e.currentTarget.style.gap = '0.65rem')}
              >
                See our work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════ MARQUEE TICKER ═══════════════════════ */}
        <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-1)', overflow: 'hidden', padding: '1.1rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', animation: 'ticker-left 32s linear infinite', whiteSpace: 'nowrap', willChange: 'transform' }}>
              {['Web Design', 'Branding', 'Development', 'Strategy', 'UI/UX', 'Schedio Studio', 'Mumbai', 'Est. 2021', 'Web Design', 'Branding', 'Development', 'Strategy', 'UI/UX', 'Schedio Studio', 'Mumbai', 'Est. 2021'].map((item, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(0.95rem, 1.8vw, 1.4rem)', color: 'var(--text-muted)', letterSpacing: '-0.01em' }}>
                    {item}
                  </span>
                  <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--accent-dim)', margin: '0 2rem', flexShrink: 0 }} />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════ STUDIO STORY ═════════════════════════ */}
        <section
          style={{
            padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)',
            borderBottom: '1px solid var(--border)',
            display: 'grid',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
          }}
          className="lg:grid-cols-[1fr_2fr]"
        >
          <ScrollReveal>
            <p className="text-label">Our Story — 01</p>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={0.06}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.55rem, 3.2vw, 2.9rem)',
                fontWeight: 400,
                lineHeight: 1.22,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
              }}>
                "Schedio" — from the Greek for{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>immediate creation</em>.
                A reminder that every great product starts with a sketch and an honest conversation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 1.2vw, 1.02rem)',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                maxWidth: '60ch',
              }}>
                We are a small team of designers and developers who refuse to separate beauty from function. We work with founders, startups, and growing brands to build things that matter — websites, identities, and digital experiences built to last.
              </p>
            </ScrollReveal>

            {/* Three pillars */}
            <div style={{ display: 'grid', gap: 'clamp(1rem, 2.5vw, 1.75rem)', marginTop: 'clamp(2rem, 4vw, 3.5rem)' }} className="sm:grid-cols-3">
              {[
                { h: 'Who',  t: 'A tight-knit team of designers and developers based in Mumbai, India.' },
                { h: 'What', t: 'Websites, brand identities, and digital products built from the ground up.' },
                { h: 'Why',  t: 'Because the internet deserves more thoughtful design and fewer templates.' },
              ].map((col) => (
                <ScrollReveal key={col.h} delay={0.08}>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.65rem' }}>
                      {col.h}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                      {col.t}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════ SERVICE CARDS ════════════════════════ */}
        <section
          style={{
            padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <ScrollReveal><p className="text-label">What We Do — 02</p></ScrollReveal>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            <ScrollReveal delay={0.05}><p className="text-label" style={{ color: 'var(--text-dim)' }}>04 services</p></ScrollReveal>
          </div>

          {/* 2×2 asymmetric card grid */}
          <div style={{ display: 'grid', gap: 'clamp(1rem, 2vw, 1.5rem)' }} className="lg:grid-cols-2">

            {/* Card 1 — tall left */}
            <ScrollReveal y={24} delay={0}>
              <TiltCard svc={SERVICES[0]} tall />
            </ScrollReveal>

            {/* Card 2 — offset down */}
            <ScrollReveal y={24} delay={0.1} className="lg:mt-20">
              <TiltCard svc={SERVICES[1]} />
            </ScrollReveal>

            {/* Card 3 — offset up */}
            <ScrollReveal y={24} delay={0.05} className="lg:-mt-10">
              <TiltCard svc={SERVICES[2]} />
            </ScrollReveal>

            {/* Card 4 — tall right */}
            <ScrollReveal y={24} delay={0.15} className="lg:mt-12">
              <TiltCard svc={SERVICES[3]} tall />
            </ScrollReveal>
          </div>
        </section>

        {/* ══════════════════════════ BELIEFS ══════════════════════════════ */}
        <section
          style={{
            padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <div>
              <ScrollReveal><p className="text-label" style={{ marginBottom: '1rem' }}>Beliefs — 03</p></ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 4vw, 3.75rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                }}>
                  Three things<br />we live{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>by.</em>
                </h2>
              </ScrollReveal>
            </div>
          </div>

          {/* Image cards — staggered entrance */}
          <div style={{ display: 'grid', gap: 'clamp(0.75rem, 1.5vw, 1.25rem)' }} className="sm:grid-cols-3">
            {BELIEFS.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.95, delay: i * 0.13, ease }}
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  borderRadius: 18,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  cursor: 'none',
                }}
              >
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  style={{ objectFit: 'cover', filter: 'brightness(0.48) saturate(0.75)', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.6s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.07)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.55) saturate(0.85)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.48) saturate(0.75)'; }}
                />
                {/* Gradient vignette */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,9,8,0.93) 0%, rgba(9,9,8,0.22) 55%, transparent 100%)', pointerEvents: 'none' }} />

                {/* Number badge */}
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                    {b.num}
                  </span>
                </div>

                {/* Bottom content */}
                <div style={{ position: 'absolute', bottom: '1.75rem', left: '1.75rem', right: '1.75rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.025em',
                    color: 'var(--text)',
                    lineHeight: 1.05,
                    marginBottom: '0.65rem',
                  }}>
                    {b.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {b.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════ SCROLLING IMAGE STRIP ════════════════════ */}
        <section style={{ borderBottom: '1px solid var(--border)', overflow: 'hidden', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              animation: 'ticker-left 35s linear infinite',
              width: 'max-content',
              willChange: 'transform',
            }}
          >
            {[...SCROLL_IMGS, ...SCROLL_IMGS].map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: 'clamp(200px, 26vw, 360px)',
                  aspectRatio: '5.5/4',
                  borderRadius: 14,
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--border)',
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  style={{ objectFit: 'cover', filter: 'brightness(0.72) saturate(0.8)' }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════ STATS ════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid' }} className="grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div style={{
                  borderTop: '1px solid var(--border)',
                  borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
                  padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 3vw, 2.5rem)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 7vw, 7.5rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.04em',
                    color: 'var(--text)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {s.num}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════ CTA ══════════════════════════════════ */}
        <section
          style={{
            padding: 'clamp(6rem, 14vw, 13rem) clamp(1.25rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ghost text */}
          <span aria-hidden style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(9rem, 25vw, 28rem)',
            fontWeight: 700,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px var(--border)',
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            letterSpacing: '-0.04em',
          }}>
            Hello
          </span>

          <ScrollReveal>
            <p className="text-label" style={{ position: 'relative', zIndex: 1 }}>Let's talk — 04</p>
          </ScrollReveal>

          <ScrollReveal delay={0.07}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 10vw, 11rem)',
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              maxWidth: '16ch',
              position: 'relative',
              zIndex: 1,
            }}>
              Let&rsquo;s build something{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>remarkable.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <Link
              href="/contact"
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.9rem 2.25rem',
                background: 'var(--accent)',
                borderRadius: 100,
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                transition: 'background 0.3s, gap 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.gap = '1.1rem'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.gap = '0.75rem'; }}
            >
              Start a project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </>
  );
}
