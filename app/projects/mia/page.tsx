import Link from "next/link";
import {
  miaFeatureGroups,
  miaOverview
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

      <section className="section-block" id="capabilities">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>Modul dummy untuk MIA yang nanti bisa diganti sesuai product direction final.</h2>
        </div>

        <div className="stretch-grid mlenz-grid-detail">
          {miaFeatureGroups.map((group) => (
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
