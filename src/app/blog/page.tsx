import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getAllPosts, formatDate, type PostMeta } from '@/lib/blog';

export const metadata = {
  title: 'Blog — Schedio',
  description: 'Thoughts on branding, interface design, and the craft of building for screen.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <Navbar isLoaded={true} />
      <main style={{ background: 'var(--bg)' }}>

        {/* ── HERO ── */}
        <section
          className="hero-full"
          style={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderBottom: '1px solid var(--border)',
            padding: 'clamp(7rem, 10vw, 10rem) clamp(1.25rem, 4vw, 3rem) clamp(4rem, 6vw, 5rem)',
          }}
        >
          {/* <span
            aria-hidden
            style={{
              position: 'absolute',
              bottom: '-0.1em',
              right: '-0.03em',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(10rem, 30vw, 38rem)',
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
            05
          </span> */}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <p className="text-label">Journal — 05</p>
            <p className="text-label" style={{ color: 'var(--text-dim)' }}>
              {String(posts.length).padStart(2, '0')} articles
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.2rem, 9vw, 10rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                maxWidth: '16ch',
              }}
            >
              Ideas worth{' '}
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>writing </em>
              about.
            </h1>
          </div>

          <p
            style={{
              marginTop: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              maxWidth: '50ch',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Thoughts on branding, interface craft, and the considered
            decisions that separate good design from great.
          </p>
        </section>

        {/* ── FEATURED POST ── */}
        <section style={{ borderBottom: '1px solid var(--border)', paddingBottom: 'clamp(0.5rem, 3vw, 2.5rem)' }}>
          <Link href={`/blog/${featured.slug}`} className="featured-link" style={{ display: 'block' }}>
            <FeaturedCard post={featured} />
          </Link>
        </section>

        {/* ── REMAINING POSTS GRID ── */}
        <section
          style={{
            padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginBottom: 'clamp(3rem, 5vw, 4rem)',
            }}
          >
            <p className="text-label">// More articles</p>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block' }}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .featured-link:hover .featured-img { transform: scale(1.04); }
        .post-card { transition: background 0.3s; }
        .post-card:hover { background: #2a2a2a !important; }
        .post-card:hover .post-img { transform: scale(1.05); }
      `}</style>
    </>
  );
}

// ─── Featured card ──────────────────────────────────────────────────────────────

function FeaturedCard({ post }: { post: PostMeta }) {
  return (
    <article
      className="grid md:grid-cols-[1fr_1fr]"
      style={{
        minHeight: 'clamp(420px, 55vw, 680px)',
        background: '#222222',
        borderRadius: 16,
        overflow: 'hidden',
        margin: 'clamp(0.5rem, 3vw, 2.5rem)',
        padding: '0.75rem',
        gap: '0.75rem',
      }}
    >
      {/* Image — inset with its own rounded corners */}
      <div
        style={{
          position: 'relative',
          borderRadius: 10,
          overflow: 'hidden',
          minHeight: 320,
        }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="featured-img"
          style={{ objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
          priority
        />
        <span
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            background: 'rgba(9,9,8,0.65)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(201,169,110,0.25)',
            padding: '0.35rem 0.8rem',
            borderRadius: 100,
          }}
        >
          Featured · {post.category}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          borderRadius: 10,
          background: 'var(--surface-1)',
        }}
      >
        <div>
          <p className="text-label" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {formatDate(post.date)} · {post.readTime}
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.2vw, 3.2rem)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
            }}
          >
            {post.title}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.88rem, 1.1vw, 0.95rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: '44ch',
            }}
          >
            {post.excerpt}
          </p>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
            color: 'var(--accent)',
          }}
        >
          Read article
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </article>
  );
}

// ─── Post card ──────────────────────────────────────────────────────────────────

function PostCard({ post }: { post: PostMeta }) {
  return (
    <article
      className="post-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 16,
        background: '#222222',
        padding: '0.75rem',
      }}
    >
      {/* Image — inset with its own rounded corners */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          borderRadius: 10,
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 33vw, 92vw"
          className="post-img"
          style={{ objectFit: 'cover', transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1)' }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '1.5rem 0.5rem 0.5rem',
          gap: '0.75rem',
        }}
      >
        {/* Category + Read time */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {post.readTime}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.15rem, 1.7vw, 1.5rem)',
            maxWidth: "92%",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.72,
            maxWidth: "92%",
            flex: 1,
          }}
        >
          {post.excerpt}
        </p>

        {/* Single divider — only above date/read row */}
        <div style={{ height: 1, background: '#3a3a3ac4', marginTop: 'auto' }} />

        {/* Date + Read */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            {formatDate(post.date)}
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--accent)',
            }}
          >
            Read
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
