'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'How does the design process work?',
    a: 'We start with discovery, then move through concept, iteration, and handover with feedback loops built into every phase.',
    category: 'Process',
  },
  {
    q: 'What is the typical project timeline?',
    a: 'Most engagements run 4–10 weeks. We agree on a schedule upfront and stay transparent about progress throughout.',
    category: 'Timeline',
  },
  {
    q: 'How do we collaborate during a project?',
    a: 'Async updates in Notion or Linear, weekly live reviews on Google Meet, and a shared Figma board for everything visual.',
    category: 'Collaboration',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing is tied to scope we send a fixed quote after a short discovery call, no hidden line items.',
    category: 'Pricing',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes. Every engagement includes defined revision rounds at each stage until the work lands.',
    category: 'Scope',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Often we reserve a few slots each quarter for pre-seed and seed teams who care deeply about craft.',
    category: 'Engagement',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

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
            'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)',
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
              FAQ — 05
            </p>
          </ScrollReveal>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <ScrollReveal delay={0.05}>
            <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
              {String(FAQS.length).padStart(2, '0')} answered
            </p>
          </ScrollReveal>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <ScrollReveal delay={0.08}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 7vw, 7.6rem)',
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                color: 'var(--text)',
                maxWidth: '13ch',
              }}
            >
              Fair questions.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                Straight answers.
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: 'var(--text-muted)',
                transition: 'color 0.25s, gap 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.gap = '1rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.gap = '0.65rem';
              }}
            >
              Ask your own
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* ── FAQ list: number + italic question, full-width rows ── */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={faq.q}
              style={{
                borderBottom: '1px solid var(--border)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding:
                    'clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 4vw, 3rem)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: 'clamp(1rem, 3vw, 2.5rem)',
                  alignItems: 'center',
                  cursor: 'none',
                  textAlign: 'left',
                  color: 'inherit',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--surface-1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {/* Index number */}
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.22em',
                    color: isOpen ? 'var(--accent)' : 'var(--text-dim)',
                    minWidth: '2.5rem',
                    transition: 'color 0.3s',
                  }}
                >
                  (0{i + 1})
                </span>

                {/* Question */}
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.35rem, 3vw, 2.8rem)',
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    color: isOpen ? 'var(--text)' : 'var(--text-muted)',
                    transition: 'color 0.35s',
                  }}
                >
                  {faq.q}
                </span>

                {/* Expand icon */}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    color: isOpen ? 'var(--accent)' : 'var(--text-muted)',
                    background: isOpen ? 'var(--surface-2)' : 'transparent',
                    transition: 'color 0.3s, background 0.3s',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1V13M1 7H13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        padding:
                          '1rem clamp(1.25rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: 'clamp(1rem, 3vw, 2.5rem)',
                        alignItems: 'start',
                      }}
                    >
                      <span
                        aria-hidden
                        style={{ minWidth: '2.5rem', fontSize: '0.7rem' }}
                      />
                      <p
                        style={{
                          color: 'var(--text)',
                          fontSize: 'clamp(0.98rem, 1.35vw, 1.15rem)',
                          lineHeight: 1.7,
                          maxWidth: '58ch',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {faq.a}
                      </p>
                      <span
                        style={{
                          border: '1px solid var(--border)',
                          padding: '0.4rem 0.85rem',
                          borderRadius: 999,
                          fontSize: '0.65rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-light)',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        {faq.category}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ── Footer nudge ── */}
      <div
        style={{
          padding:
            'clamp(3rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem) clamp(4rem, 7vw, 6rem)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
            color: 'var(--text-muted)',
            maxWidth: '36ch',
            lineHeight: 1.5,
          }}
        >
          Can&rsquo;t find the answer? Drop us a line, we reply within a day.
        </p>

        <Link
          href="mailto:info@schedio.studio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.7rem',
            padding: '0.85rem 1.5rem',
            border: '1px solid var(--border)',
            borderRadius: 999,
            background: 'var(--surface-1)',
            fontSize: '0.85rem',
            color: 'var(--text)',
            transition: 'background 0.25s, border-color 0.25s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-dim)';
            e.currentTarget.style.background = 'var(--surface-2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.background = 'var(--surface-1)';
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 0 3px rgba(201,169,110,0.18)',
              animation: 'pulse-dot 2.4s ease-in-out infinite',
            }}
          />
          info@schedio.studio
        </Link>
      </div>
    </section>
  );
}
