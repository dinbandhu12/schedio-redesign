'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const PROJECT_TYPES = ['Branding', 'UI / UX', 'Web', 'Product', 'Full scope'] as const;
const BUDGETS = ['Under ₹50k', '₹50k – ₹1L', '₹1L – ₹5L', '₹5L+', 'Let\'s discuss'] as const;

const SOCIALS = [
  { label: 'Facebook', handle: '@schedio_agency', href: 'https://facebook.com/schedio_agency' },
  { label: 'Instagram', handle: '@schedio_agency', href: 'https://instagram.com/schedio_agency' },
  { label: 'Behance', handle: 'schedio', href: 'https://behance.net/schedio' },
  { label: 'Twitter / X', handle: '@Schedio_studio', href: 'https://twitter.com/Schedio_studio' },
  { label: 'Dribbble', handle: 'schedio', href: 'https://dribbble.com/schedio' },
  { label: 'LinkedIn', handle: 'schedio', href: 'https://linkedin.com/company/schedio' },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

function InputField({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.62rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: focused ? 'var(--accent)' : 'var(--text-muted)',
          transition: 'color 0.25s',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--accent)', marginLeft: '0.2em' }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        required={required}
        style={{
          background: focused ? 'var(--surface-2)' : 'var(--surface-1)',
          border: `1px solid ${focused ? 'var(--accent-dim)' : 'var(--border)'}`,
          borderRadius: 10,
          padding: '0.95rem 1.1rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--text)',
          outline: 'none',
          width: '100%',
          transition: 'background 0.25s, border-color 0.25s',
          cursor: 'none',
        }}
      />
    </div>
  );
}

function TextareaField({
  label,
  id,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.62rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: focused ? 'var(--accent)' : 'var(--text-muted)',
          transition: 'color 0.25s',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--accent)', marginLeft: '0.2em' }}>*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        required={required}
        rows={5}
        style={{
          background: focused ? 'var(--surface-2)' : 'var(--surface-1)',
          border: `1px solid ${focused ? 'var(--accent-dim)' : 'var(--border)'}`,
          borderRadius: 10,
          padding: '0.95rem 1.1rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--text)',
          outline: 'none',
          width: '100%',
          resize: 'vertical',
          minHeight: 140,
          transition: 'background 0.25s, border-color 0.25s',
          cursor: 'none',
        }}
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', type: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormState) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
  };

  return (
    <>
      <Navbar isLoaded={true} />
      <main style={{ background: 'var(--bg)' }}>

        {/* ── HERO ── */}
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border)',
            padding: 'clamp(7rem, 10vw, 12rem) clamp(1.25rem, 4vw, 3rem) clamp(4rem, 7vw, 6rem)',
          }}
        >
          {/* Watermark */}
          {/* <span
            aria-hidden
            style={{
              position: 'absolute',
              bottom: '-0.12em',
              right: '-0.04em',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(12rem, 35vw, 44rem)',
              fontWeight: 700,
              color: 'transparent',
              WebkitTextStroke: '1px var(--border)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-0.06em',
              opacity: 0.45,
            }}
          >
            04
          </span> */}

          {/* Meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <p className="text-label">Contact — 04</p>
            {/* Availability dot */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'inline-block',
                  animation: 'pulse-dot 2.2s ease-in-out infinite',
                }}
              />
              <p className="text-label" style={{ color: 'var(--accent)' }}>Available for new projects</p>
            </div>
          </motion.div>

          {/* Headline */}
          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden', paddingBottom: '10px' }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.15, ease }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.4rem, 10vw, 11rem)',
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                maxWidth: '14ch',
              }}
            >
              Let&rsquo;s build{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>something</em>
              <br />
              worth signing.
            </motion.h1>
          </div>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            style={{
              marginTop: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              maxWidth: '48ch',
              position: 'relative',
              zIndex: 1,
            }}
          >
            We take on a small number of projects each quarter so when we work together,
            you get our full attention. Tell us what you&rsquo;re building.
          </motion.p>
        </section>

        {/* ── MAIN: two-column ── */}
        <section
          style={{
            padding: 'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            className="grid md:grid-cols-[5fr_7fr]"
            style={{ gap: 'clamp(4rem, 8vw, 9rem)', alignItems: 'stretch' }}
          >

            {/* ── LEFT: info panel ── */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <ScrollReveal>
                <div style={{ width: 36, height: 2, background: 'var(--accent)', marginBottom: '2rem' }} />
                <p className="text-label" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                  // Get in touch
                </p>
              </ScrollReveal>

              {/* Direct contact */}
              <ScrollReveal delay={0.06}>
                <div style={{ marginBottom: 'clamp(2.5rem, 3vw, 4rem)' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.62rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      marginBottom: '1rem',
                    }}
                  >
                    Direct
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <ContactLink href="mailto:info@schedio.studio" label="Email">
                      info@schedio.studio
                    </ContactLink>
                    <ContactLink href="tel:+919607769564" label="Phone">
                      +91 (960) 776-9564
                    </ContactLink>
                  </div>
                </div>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal delay={0.1}>
                <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.62rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      marginBottom: '1rem',
                    }}
                  >
                    Location
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                      color: 'var(--text)',
                      lineHeight: 1.4,
                    }}
                  >
                    Mumbai, Maharashtra
                    <br />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85em' }}>India · GMT+5:30</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Socials */}
              <ScrollReveal delay={0.14}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.62rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      marginBottom: '1rem',
                    }}
                  >
                    Follow
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {SOCIALS.map((s, i) => (
                      <SocialRow key={s.label} {...s} delay={i * 0.04} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT: form ── */}
            <div>
              <AnimatePresence mode="wait">
                {sent ? (
                  <SuccessState key="success" />
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                  >
                    {/* Full name */}
                    <ScrollReveal>
                      <InputField label="Full name" id="name" value={form.name} onChange={set('name')} placeholder="Aditi Sharma" required />
                    </ScrollReveal>

                    {/* Contact number */}
                    <ScrollReveal delay={0.04}>
                      <InputField label="Contact number" id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
                    </ScrollReveal>

                    {/* Email */}
                    <ScrollReveal delay={0.05}>
                      <InputField label="Email address" id="email" type="email" value={form.email} onChange={set('email')} placeholder="aditi@company.com" required />
                    </ScrollReveal>

                    {/* Project type pills */}
                    <ScrollReveal delay={0.06}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.62rem',
                            fontWeight: 500,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                          }}
                        >
                          Project type
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {PROJECT_TYPES.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => set('type')(t)}
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                letterSpacing: '0.08em',
                                padding: '0.5rem 1rem',
                                borderRadius: 100,
                                border: `1px solid ${form.type === t ? 'var(--accent)' : 'var(--border)'}`,
                                background: form.type === t ? 'rgba(201,169,110,0.12)' : 'var(--surface-1)',
                                color: form.type === t ? 'var(--accent)' : 'var(--text-muted)',
                                cursor: 'none',
                                transition: 'all 0.2s',
                              }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Budget pills */}
                    <ScrollReveal delay={0.08}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.62rem',
                            fontWeight: 500,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                          }}
                        >
                          Budget range
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {BUDGETS.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => set('budget')(b)}
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                letterSpacing: '0.08em',
                                padding: '0.5rem 1rem',
                                borderRadius: 100,
                                border: `1px solid ${form.budget === b ? 'var(--accent)' : 'var(--border)'}`,
                                background: form.budget === b ? 'rgba(201,169,110,0.12)' : 'var(--surface-1)',
                                color: form.budget === b ? 'var(--accent)' : 'var(--text-muted)',
                                cursor: 'none',
                                transition: 'all 0.2s',
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Message */}
                    <ScrollReveal delay={0.1}>
                      <TextareaField
                        label="Tell us about your project"
                        id="message"
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Please explain your project in detailed..."
                        required
                      />
                    </ScrollReveal>

                    {/* Submit */}
                    <ScrollReveal delay={0.12}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.72rem',
                            color: 'var(--text-dim)',
                            lineHeight: 1.6,
                            maxWidth: '32ch',
                          }}
                        >
                          We typically respond within 24 hours on weekdays.
                        </p>
                        <SubmitButton submitting={submitting} />
                      </div>
                    </ScrollReveal>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── BOTTOM MARQUEE STRIP ── */}
        <div
          aria-hidden
          style={{
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
            padding: 'clamp(1.5rem, 2.5vw, 2rem) 0',
            background: 'var(--surface-1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 'clamp(3rem, 6vw, 6rem)',
              animation: 'ticker-left 30s linear infinite',
              width: 'max-content',
            }}
          >
            {[...Array(3)].flatMap((_, rep) =>
              ['info@schedio.studio', '+91 960 776 9564', 'Mumbai, India', 'Available for projects', 'info@schedio.studio', '+91 960 776 9564', 'Mumbai, India', 'Available for projects'].map((item, i) => (
                <span
                  key={`${rep}-${i}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                    color: 'var(--text-dim)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                  <span style={{ marginLeft: 'clamp(3rem, 6vw, 6rem)', color: 'var(--accent)', fontSize: '0.5em', verticalAlign: 'middle' }}>◆</span>
                </span>
              ))
            )}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

// ─── Sub-components ─────────────────────────────────────────────────────────────

function ContactLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>
        {label}
      </p>
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
          color: hovered ? 'var(--accent)' : 'var(--text)',
          transition: 'color 0.25s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
        }}
      >
        {children}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.25s', transform: 'rotate(45deg)' }}
        >
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function SocialRow({ label, handle, href, delay }: { label: string; handle: string; href: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <ScrollReveal delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 0',
          borderBottom: '1px solid var(--border)',
          transition: 'border-color 0.25s',
          borderColor: hovered ? 'var(--accent-dim)' : 'var(--border)',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 500,
            color: hovered ? 'var(--text)' : 'var(--text-muted)',
            transition: 'color 0.25s',
            letterSpacing: '0.02em',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '0.82rem',
            color: hovered ? 'var(--accent)' : 'var(--text-dim)',
            transition: 'color 0.25s',
          }}
        >
          {handle}
        </span>
      </a>
    </ScrollReveal>
  );
}

function SubmitButton({ submitting }: { submitting: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={submitting}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        padding: '0.9rem 1.75rem',
        borderRadius: 100,
        border: `1.5px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        background: hovered ? 'rgba(201,169,110,0.1)' : 'transparent',
        color: hovered ? 'var(--accent)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.8rem',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        cursor: submitting ? 'not-allowed' : 'none',
        transition: 'all 0.25s',
        opacity: submitting ? 0.6 : 1,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {submitting ? (
        <>
          <Spinner />
          Sending…
        </>
      ) : (
        <>
          Send message
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: hovered ? 'translate(2px, -2px)' : 'none', transition: 'transform 0.25s' }}>
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </>
      )}
    </button>
  );
}

function Spinner() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="22" strokeDashoffset="8" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: 420,
        gap: '1.75rem',
      }}
    >
      {/* Check circle */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: '1.5px solid var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(201,169,110,0.08)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10.5L8.5 15L16 6" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}
        >
          Message received.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            maxWidth: '42ch',
          }}
        >
          Thank you for reaching out. We review every message personally and
          will get back to you within 24 hours. Talk soon.
        </p>
      </div>

      <div
        style={{
          width: '100%',
          height: 1,
          background: 'var(--border)',
          maxWidth: '48ch',
        }}
      />

      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
          color: 'var(--text-dim)',
        }}
      >
        — The Schedio team
      </p>
    </motion.div>
  );
}
