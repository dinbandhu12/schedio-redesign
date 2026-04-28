import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getAllPosts, getPost, formatDate } from '@/lib/blog';
import PostInteractive from './PostInteractive';
import ShareButtons from './ShareButtons';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Schedio`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const next = allPosts[(idx + 1) % allPosts.length];
  const suggested = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

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
          }}
        >
          <div style={{ position: 'relative', height: 'clamp(320px, 55vw, 640px)' }}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', filter: 'brightness(0.5) saturate(0.75)' }}
              priority
            />
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(9,9,8,0.15) 0%, rgba(9,9,8,0.85) 100%)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 'clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)',
              }}
            >
              {/* Breadcrumb */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <Link href="/blog" className="blog-link-dim">
                  Journal
                </Link>
                <span style={{ color: 'var(--text-dim)', fontSize: '0.6rem' }}>→</span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  {post.category}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5.5vw, 5.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  maxWidth: '20ch',
                  marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                }}
              >
                {post.title}
              </h1>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                {[formatDate(post.date), post.readTime, `By ${post.author}`].map((item, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {i > 0 && <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-dim)', display: 'inline-block' }} />}
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                      {item}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <section
          className="grid md:grid-cols-[320px_minmax(0,1fr)_380px]"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {/* Col 1 — left sidebar */}
          <div
            className="hidden md:flex"
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              padding: 'clamp(4rem, 7vw, 6rem) clamp(1rem, 2vw, 1.75rem)',
              borderRight: '1px solid var(--border)',
            }}
          >
            <div style={{ position: 'sticky', top: '7rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* All posts — moved to top */}
              <Link href="/blog" className="blog-back-link " style={{ fontSize: '0.8rem' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M8 5H2M2 5L5 2M2 5L5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All posts
              </Link>

              <div style={{ height: 1, background: 'var(--border)' }} />

              <div>
                <p className="text-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>Category</p>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--accent)' }}>
                  {post.category}
                </p>
              </div>
              <div>
                <p className="text-label" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>Read time</p>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {post.readTime}
                </p>
              </div>
            </div>
          </div>

          {/* Col 2 — article content */}
          <div style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)' }}>
            {/* Pull quote */}
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)',
                lineHeight: 1.45,
                color: 'var(--text)',
                letterSpacing: '-0.015em',
                borderLeft: '2px solid var(--accent)',
                paddingLeft: '1.5rem',
                marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              {post.excerpt}
            </p>

            <div className="prose-schedio">
              <MDXRemote source={post.content} />
            </div>

            {/* Share buttons */}
            <ShareButtons slug={slug} title={post.title} />
          </div>

          {/* Col 3 — suggested posts */}
          <div
            className="hidden md:flex"
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              padding: 'clamp(4rem, 7vw, 6rem) clamp(1rem, 2vw, 1.75rem)',
              borderLeft: '1px solid var(--border)',
            }}
          >
            <div style={{ position: 'sticky', top: '7rem' }}>
              <p className="text-label" style={{ fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                More to read
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {suggested.map((p, i) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                    <div
                      className="suggested-item"
                      style={{
                        padding: '1.1rem 0',
                        borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--text-dim)',
                          marginBottom: '0.45rem',
                        }}
                      >
                        {p.category}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1rem',
                          fontWeight: 400,
                          lineHeight: 1.25,
                          letterSpacing: '-0.01em',
                          color: 'var(--text)',
                        }}
                        className="suggested-title"
                      >
                        {p.title}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.7rem',
                          color: 'var(--text-dim)',
                          marginTop: '0.5rem',
                        }}
                      >
                        {formatDate(p.date)} · {p.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NEXT POST ── client component handles hover ── */}
        <PostInteractive next={next} />

      </main>
      <Footer />

      <style>{`
        .blog-link-dim {
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
          transition: color 0.2s;
        }
        .blog-link-dim:hover { color: var(--accent); }
        .suggested-item { transition: opacity 0.2s; }
        .suggested-item:hover { opacity: 0.7; }
        .suggested-item:hover .suggested-title { color: var(--accent-light); }

        .blog-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-dim);
          transition: color 0.2s;
          margin-top: 0.5rem;
        }
        .blog-back-link:hover { color: var(--accent); }

        .prose-schedio h2 {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1.25rem;
        }
        .prose-schedio h3 {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
          font-weight: 400;
          color: var(--text);
          margin-top: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1rem;
        }
        .prose-schedio p {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          color: var(--text-muted);
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }
        .prose-schedio strong { color: var(--text); font-weight: 500; }
        .prose-schedio em { font-style: italic; color: var(--accent-light); }
        .prose-schedio ul, .prose-schedio ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .prose-schedio li {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          color: var(--text-muted);
          line-height: 1.75;
        }
        .prose-schedio blockquote {
          border-left: 2px solid var(--accent-dim);
          padding-left: 1.5rem;
          margin: clamp(2rem, 4vw, 3rem) 0;
        }
        .prose-schedio blockquote p {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          color: var(--text);
          line-height: 1.55;
        }
        .prose-schedio hr { border: none; border-top: 1px solid var(--border); margin: clamp(2.5rem, 5vw, 4rem) 0; }
        .prose-schedio a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--accent-dim); transition: color 0.2s; }
        .prose-schedio a:hover { color: var(--accent-light); }
        .prose-schedio code { font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.85em; color: var(--accent-light); background: var(--surface-2); padding: 0.15em 0.4em; border-radius: 4px; }
      `}</style>
    </>
  );
}
