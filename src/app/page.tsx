import Link from 'next/link';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="hero-title">
          Hi, I&apos;m <span className="highlight">Alind Dwivedi</span>.
        </h1>
        <p className="hero-subtitle">
          I&apos;m an <span className="highlight-text">AI-Native Developer</span> passionate about building sleek, intelligent, and highly scalable systems.
        </p>

        <div className="hero-actions">
          <Link href="/blog" className="primary-btn">Read my Blog</Link>
          <a href="https://github.com/dwivedialind" target="_blank" rel="noopener noreferrer" className="secondary-btn">GitHub</a>
        </div>
      </section>

      <section className="recent-posts-section">
        <h2 className="section-title">Recent Writing</h2>
        <div className="posts-grid">
          {/* Placeholder for now. We will map over actual posts later */}
          <Link href="/blog/building-premium-markdown-blog" className="post-card">
            <div className="post-date">Sep 28, 2026</div>
            <h3 className="post-title">Building a Premium Markdown Blog</h3>
            <p className="post-excerpt">How to leverage Next.js and github pages to build an SEO optimized, premium developer portfolio.</p>
          </Link>
          <Link href="/blog/building-premium-markdown-blog" className="post-card">
            <div className="post-date">Sep 15, 2026</div>
            <h3 className="post-title">Understanding Vector Databases</h3>
            <p className="post-excerpt">A deep dive into why vector databases are revolutionizing the modern AI landscape.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
