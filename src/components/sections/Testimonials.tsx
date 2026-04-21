'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Testimonial {
  num: string;
  quote: string;
  name: string;
  role: string;
  photo: string;
  company?: string;
}

const FEATURED: Testimonial = {
  num: '00',
  quote:
    'Clean. Modern. Visually striking. Schedio redrew what we thought a brand could look like for a small team they nailed the brief twice, because we got greedy on round two.',
  name: 'Hallen Benjamin',
  role: 'Business Owner',
  company: 'Benjamin Studio',
  photo: '/images/testimonials/cc-6.png',
};

const TESTIMONIALS: Testimonial[] = [
  {
    num: '01',
    quote:
      'Responsive, opinionated, and relentless on the details. They felt like an extension of our team, not an agency.',
    name: 'Pratap Vishwas',
    role: 'Founder & CEO',
    company: 'Shree Ganesh Fabrication',
    photo: '/images/testimonials/cc-2.png',
  },
  {
    num: '02',
    quote:
      "They understood the brief before we finished describing it. The work speaks the process was even better.",
    name: 'Chang-Ho',
    role: 'Creative Director',
    company: 'Design Collective',
    photo: '/images/testimonials/cc-3.png',
  },
  {
    num: '03',
    quote:
      'From first call to final handover a rare mix of taste, systems thinking, and follow-through.',
    name: 'Sarah Lee',
    role: 'Project Manager',
    company: 'Startup Accelerator',
    photo: '/images/testimonials/cc-4.png',
  },
  {
    num: '04',
    quote:
      'Working with Schedio reshaped how we think about product design. Growth speaks for itself now.',
    name: 'Lora Hayes',
    role: 'Founder',
    company: 'Hayes & Co.',
    photo: '/images/testimonials/cc-5.png',
  },
  {
    num: '05',
    quote:
      'Innovative solutions, sharp attention to detail. They truly transformed how we operate.',
    name: 'Saurabh Gond',
    role: 'Manager',
    company: 'TCI Express',
    photo: '/images/testimonials/cc-1.png',
  },
  {
    num: '06',
    quote:
      'If you care about how your brand feels, not just looks you want Schedio in the room.',
    name: 'Priya Mehta',
    role: 'Head of Brand',
    company: 'Mehta Ventures',
    photo: '/images/testimonials/cc-1.png',
  },
];

const ROW_A = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, 2)];
const ROW_B = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice(0, 2)];

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <article
      style={{
        flexShrink: 0,
        width: 'clamp(280px, 28vw, 400px)',
        background: 'var(--surface-1)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: 'clamp(1.5rem, 2vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        position: 'relative',
      }}
    >
      {/* Quote glyph */}
      <span
        aria-hidden
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '3.5rem',
          lineHeight: 0.6,
          color: 'var(--accent)',
          letterSpacing: '-0.05em',
        }}
      >
        &ldquo;
      </span>

      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
          lineHeight: 1.55,
          color: 'var(--text)',
          fontWeight: 400,
          letterSpacing: '-0.005em',
        }}
      >
        {t.quote}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
            border: '1px solid var(--border)',
          }}
        >
          <Image
            src={t.photo}
            alt={t.name}
            fill
            sizes="40px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontSize: '0.82rem',
              fontWeight: 500,
              color: 'var(--text)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {t.role}
            {t.company ? ` · ${t.company}` : ''}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          padding:
            'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem) clamp(2.5rem, 5vw, 4rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <ScrollReveal>
            <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
              Testimonials — 04
            </p>
          </ScrollReveal>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <ScrollReveal delay={0.05}>
            <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
              {TESTIMONIALS.length.toString().padStart(2, '0')}+ voices
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 8rem)',
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              color: 'var(--text)',
              maxWidth: '14ch',
            }}
          >
            Kind words.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
              Honest
            </em>{' '}
            reviews.
          </h2>
        </ScrollReveal>
      </div>

      {/* ── Hero pull quote ── */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding:
            'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'end',
          position: 'relative',
        }}
      >
        {/* Giant quote mark decoration */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: 'clamp(1rem, 3vw, 3rem)',
            left: 'clamp(1rem, 4vw, 3rem)',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(8rem, 18vw, 20rem)',
            color: 'var(--surface-2)',
            lineHeight: 0.65,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          &ldquo;
        </span>

        <ScrollReveal style={{ position: 'relative', zIndex: 1 }}>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.75rem, 3.6vw, 3.2rem)',
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: '-0.018em',
              color: 'var(--text)',
              maxWidth: '24ch',
            }}
          >
            {FEATURED.quote}
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.1} style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: 'clamp(80px, 10vw, 120px)',
                height: 'clamp(80px, 10vw, 120px)',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border)',
              }}
            >
              <Image
                src={FEATURED.photo}
                alt={FEATURED.name}
                fill
                sizes="120px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p
                className="text-label"
                style={{ color: 'var(--accent)', marginBottom: '0.65rem' }}
              >
                Featured voice
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                  lineHeight: 1.15,
                  color: 'var(--text)',
                  marginBottom: '0.35rem',
                }}
              >
                {FEATURED.name}
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.02em',
                }}
              >
                {FEATURED.role}
                {FEATURED.company ? ` — ${FEATURED.company}` : ''}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Dual marquee of quote cards ── */}
      <div
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(4rem, 7vw, 6rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {[
          { row: ROW_A, direction: 'ticker-left', duration: '72s' },
          { row: ROW_B, direction: 'ticker-right', duration: '88s' },
        ].map((cfg, rowIdx) => (
          <div
            key={rowIdx}
            style={{
              overflow: 'hidden',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                animation: `${cfg.direction} ${cfg.duration} linear infinite`,
                willChange: 'transform',
                width: 'max-content',
              }}
            >
              {cfg.row.map((t, i) => (
                <QuoteCard key={`${rowIdx}-${i}`} t={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
