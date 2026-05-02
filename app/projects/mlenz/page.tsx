import Link from "next/link";
import {
  mlenzFeatureGroups,
  mlenzOverview
} from "@/data/mlenz";

export default function MLenzPage() {
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
        <p className="eyebrow">FEATURED CASE STUDY</p>
        <h1>{mlenzOverview.name}</h1>
        <p className="project-tagline">{mlenzOverview.tagline}</p>
        <p className="project-lead">{mlenzOverview.description}</p>
        <p className="project-lead">{mlenzOverview.summary}</p>

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
            src="/img/dashboard-mlenz.png" 
            alt="MLenz Dashboard Preview" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      </section>

      <section className="section-block" id="capabilities">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>Modul inti MLenz yang mendukung safety intelligence dan operational visibility.</h2>
        </div>

        <div className="stretch-grid mlenz-grid-detail">
          {mlenzFeatureGroups.map((group) => (
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
