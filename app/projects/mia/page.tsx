import Link from "next/link";
import {
  miaFeatureGroups,
  miaOverview,
  miaSystemPoints,
  miaValuePoints
} from "@/data/products";

export default function MIAPage() {
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
          <a href="#architecture">Architecture</a>
          <a href="#integration">Integration</a>
        </nav>
      </section>

      <section className="project-hero glass-panel">
        <p className="eyebrow">PRODUCT DETAIL</p>
        <h1>{miaOverview.name}</h1>
        <p className="project-tagline">{miaOverview.tagline}</p>
        <p className="project-lead">{miaOverview.description}</p>
        <p className="project-lead">{miaOverview.summary}</p>

        <div className="hero-actions">
          <a className="primary-btn" href="#capabilities">
            Explore Capabilities
          </a>
          <Link className="secondary-btn" href="/">
            Kembali ke Homepage
          </Link>
        </div>
      </section>

      <section className="section-block project-detail-grid" id="capabilities">
        <div className="project-detail-panel glass-panel">
          <div className="section-heading compact-heading">
            <p className="eyebrow">OVERVIEW</p>
            <h2>Dummy value proposition untuk AI assistant product dan workflow support.</h2>
          </div>

          <div className="mlenz-points">
            {miaValuePoints.map((point) => (
              <div className="mlenz-point" key={point}>
                <span className="highlight-dot" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-detail-panel glass-panel" id="architecture">
          <div className="section-heading compact-heading">
            <p className="eyebrow">SYSTEM FLOW</p>
            <h2>Dummy arsitektur conversational workflow, retrieval, dan integration layer.</h2>
          </div>

          <div className="project-flow-list">
            {miaSystemPoints.map((point) => (
              <div className="project-flow-item" key={point}>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" id="integration">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>Modul dummy untuk MIA yang nanti bisa diganti sesuai product direction final.</h2>
        </div>

        <div className="mlenz-grid mlenz-grid-detail">
          {miaFeatureGroups.map((group) => (
            <article className="mlenz-card glass-panel" key={group.title}>
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
