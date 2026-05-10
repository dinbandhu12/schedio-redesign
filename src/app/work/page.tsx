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
  csReady?: boolean;
  cs: CaseStudy;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    num: '01',
    client: 'Lora Hayes',
    title: 'Personal Portfolio',
    category: 'UI/UX',
    tags: ['UI Design', 'Web', 'Branding'],
    year: '2024',
    img: '/images/showcase/c7-2.jpg',
    ratio: '4/5',
    offset: 0,
    csReady: true,
    cs: {
      role: 'UI Design · Branding · Frontend',
      duration: '6 weeks',
      tools: ['Figma', 'Next.js', 'Framer Motion'],
      brief: 'Lora Hayes is a versatile professional with expertise in design, digital marketing, and content creation. She needed a personal portfolio and a logo mark that authentically embodied her unique identity — not a template someone filled in, but a digital home built around her.',
      problem: {
        heading: 'Identity without a home',
        body: 'Lora had the skills, the client work, and the reputation — but no visual home base to show for it. Her challenge was two-fold: a personal website that matched her own creative standard, and a logo that felt genuinely hers rather than borrowed. Most portfolio builders offer layouts. She needed an identity. Every generic template she\'d tried felt like wearing someone else\'s clothes.',
      },
      process: {
        heading: 'Logo first, site second',
        body: 'We started with the mark — exploring five distinct logo directions before landing on one that balanced her design sensibility with professional clarity. From there, the website followed naturally: typography, layout rhythm, and interaction pacing all derived from the identity rather than imposed on top of it. The result is a site where every detail — the kerning, the transitions, the spacing — feels deliberate and unmistakably hers.',
        image: '/images/casestudy/lora-hayes/website-home.png',
      },
      typography: {
        primary: { name: 'Playfair Display', weights: '400, 500 Italic', usage: 'Headlines, project titles, pull quotes' },
        secondary: { name: 'Inter', weights: '300, 400', usage: 'Body text, metadata, labels' },
      },
      palette: [
        { name: 'Ink',        hex: '#0D0C0B', role: 'Page background' },
        { name: 'Parchment',  hex: '#EDE8DF', role: 'Primary text' },
        { name: 'Dust',       hex: '#7A746C', role: 'Secondary / body text' },
        { name: 'Warm White', hex: '#F7F4EF', role: 'Surface & highlights' },
      ],
      gallery: [
        '/images/casestudy/lora-hayes/mockup-1.png',
        '/images/casestudy/lora-hayes/mockup-2.png',
        '/images/casestudy/lora-hayes/mockup-3.png',
        '/images/casestudy/lora-hayes/blog-img.png',
      ],
      stats: [
        { num: '3×',  label: 'Avg. session time vs. previous site' },
        { num: '3',   label: 'New client enquiries in first week' },
        { num: '98',  label: 'Lighthouse performance score' },
      ],
      testimonial: {
        quote: 'Working with this team has been a game-changer. Their strategic insights and technical expertise helped us create something I\'m genuinely proud to put my name on.',
        author: 'Lora Hayes',
        title: 'Creator & Business Owner',
      },
    },
  },
  {
    num: '02',
    client: 'Shree Ganesh',
    title: 'Brand & Website',
    category: 'Branding',
    tags: ['Logo', 'Brand System', 'Web'],
    year: '2024',
    img: '/images/showcase/c2.png',
    ratio: '3/4',
    offset: 60,
    csReady: true,
    cs: {
      role: 'Brand Identity · Web Development',
      duration: '10 weeks',
      tools: ['Figma', 'Illustrator', 'Next.js'],
      brief: 'A precision metal fabrication company with the craft to back it up but no digital presence to show for it. They needed a brand and website that could open doors their work alone couldn\'t.',
      problem: {
        heading: 'Craft without a platform',
        body: 'Shree Ganesh had the technical skill and a growing reputation but no digital presence to back it up. Potential clients couldn\'t find them online, and when they did, there was nothing to show. The objective was clear: create a comprehensive digital presence that effectively communicates their fabrication expertise, attracts new clients, and establishes them as a trusted industry leader through modern design and a user-friendly interface.',
      },
      process: {
        heading: 'Industrial design meets digital clarity',
        body: 'We developed a modern, responsive website with an industrial-inspired design that highlights their work through high-quality imagery and intuitive navigation. The solution included a custom logo design, comprehensive branding guidelines, and a user-friendly interface that makes it easy for potential clients to explore services and request quotes. The brand system mark, colour, and type was designed to feel authoritative in a tender document as much as on a site.',
        image: '/images/casestudy/shree-ganesh/img-1.png',
      },
      typography: {
        primary: { name: 'Söhne', weights: '400, 600', usage: 'Wordmark, headings, product labels' },
        secondary: { name: 'Garamond Premier', weights: '400 Italic', usage: 'Tagline, formal documents' },
      },
      palette: [
        { name: 'Forge',     hex: '#1A1F2E', role: 'Primary — authority, depth' },
        { name: 'Burnished', hex: '#C9A96E', role: 'Accent — precision, value' },
        { name: 'Iron',      hex: '#8C8C8C', role: 'Supporting neutral' },
        { name: 'Smoke',     hex: '#F2F0EC', role: 'Background, print' },
      ],
      gallery: [
        '/images/casestudy/shree-ganesh/img-4.jpg',
        '/images/casestudy/shree-ganesh/img-2.png',
        '/images/casestudy/shree-ganesh/img-5.png',
        '/images/casestudy/shree-ganesh/img-3.jpeg',
      ],
      stats: [
        { num: '1st',  label: 'Professional digital presence for the brand' },
        { num: '10wk', label: 'Brand + site delivered end-to-end' },
        { num: '100%', label: 'Custom — no templates used' },
      ],
      testimonial: {
        quote: 'We finally have something we can send to clients before a meeting. The brand feels serious. It matches the quality of work we actually do.',
        author: 'Shree Ganesh Fabrication',
        title: 'Metal Fabrication, Mumbai',
      },
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
      style={{ marginTop: p.offset, cursor: 'none', opacity: p.csReady ? 1 : 0.5 }}
      onClick={() => p.csReady && onSelect(p)}
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
      <div onClick={() => p.csReady && onSelect(p)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ cursor: 'none', opacity: p.csReady ? 1 : 0.5 }}>
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
          {/* Floating image — desktop right */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.3, ease }}
            style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '75%', overflow: 'hidden' }}
            className="hidden lg:block"
          >
            <Image src="/images/showcase/img-04.png" alt="Schedio selected client work — branding, web design, development" fill priority style={{ objectFit: 'cover', filter: 'brightness(0.45) saturate(0.7)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 35%, var(--bg) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, transparent 35%)' }} />
            <div style={{ position: 'absolute', bottom: '2.5rem', right: '2rem', textAlign: 'right' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.3rem' }}>Selected work</p>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-muted)' }}>Est. 2021</p>
            </div>
          </motion.div>
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
