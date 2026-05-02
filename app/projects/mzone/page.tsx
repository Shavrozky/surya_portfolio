import Link from "next/link";
import {
  mzoneFeatureGroups,
  mzoneOverview
} from "@/data/products";

export default function MzonePage() {
  return (
    <main className="page-shell project-detail-shell">
      <section className="topbar">
        <div className="brand-mark">
          <span className="brand-dot" />
          <span>Surya || AI Engineer</span>
        </div>

        <nav className="nav-links" aria-label="Project navigation">
          <Link href="/">Home</Link>
          <a href="#capabilities">Capabilities</a>
        </nav>
      </section>

      <section className="project-hero glass-panel">
        <p className="eyebrow">PRODUCT DETAIL</p>
        <h1>{mzoneOverview.name}</h1>
        <p className="project-tagline">{mzoneOverview.tagline}</p>
        <p className="project-lead">{mzoneOverview.description}</p>
        <p className="project-lead">{mzoneOverview.summary}</p>

        <div className="hero-actions">
          <a className="primary-btn" href="#capabilities">
            Explore Capabilities
          </a>
          <Link className="secondary-btn" href="/">
            Kembali ke Homepage
          </Link>
        </div>

        <div style={{ marginTop: '40px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          <img 
            src="/img/dashboard-mzone.png" 
            alt="Mzone Dashboard Preview" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      </section>

      <section className="section-block" id="capabilities">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>Modul dummy untuk Mzone yang nanti bisa Anda ganti dengan spesifikasi final.</h2>
        </div>

        <div className="stretch-grid mlenz-grid-detail">
          {mzoneFeatureGroups.map((group) => (
            <article className="capability-card glass-panel" key={group.title}>
              <span className="project-category">{group.title}</span>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="tech-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
