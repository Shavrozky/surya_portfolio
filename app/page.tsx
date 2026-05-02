import Link from "next/link";
import type { CSSProperties } from "react";
import { mlenzOverview } from "@/data/mlenz";


const highlights = [
  "Mendesain workflow AI dari riset, eksperimen, sampai deployment",
  "Menggabungkan machine learning, LLM systems, dan product execution",
  "Menerjemahkan kompleksitas model menjadi produk yang jelas dan usable"
];

const capabilities = [
  {
    title: "AI Camera Analytics",
    description:
      "Mengembangkan sistem analitik kamera berbasis AI untuk memantau operasional dan meningkatkan produktivitas di lingkungan industri."
  },
  {
    title: "Real-Time Risk Management",
    description:
      "Merancang pipeline analisis real-time untuk memberikan peringatan dini dalam membantu perusahaan mengelola risiko dan keselamatan kerja."
  },
  {
    title: "Operational Efficiency Dashboard",
    description:
      "Menyusun antarmuka dan pengalaman pengguna yang mengubah data analitik visual menjadi wawasan untuk meningkatkan efisiensi kerja."
  }
];

const educationItems = [
  {
    period: "2020 - 2024",
    title: "Manajemen",
    institution: "Universitas Cyber Asia",
    description:
      "Mempelajari prinsip-prinsip manajemen dalam perencanaan, pengorganisasian, pengarahan, dan pengendalian sumber daya untuk mencapai tujuan organisasi secara efektif dan efisien"
  },
  {
    period: "2018 - 2020",
    title: "Informatika / Computer Science",
    institution: "LP3I Balikpapan College",
    description:
      "Fokus pada dasar algoritma pemrograman, belajar dasar C++, Visual Basic, Jaringan, serta Web"
  }
];


const experiences = [
  {
    period: "Mei 2025 - Sekarang",
    role: "AI Engineer",
    company: "PT Minergo Visi Maxima",
    summary:
      "Merancang, mengembangkan, dan mengimplementasikan model machine learning dan AI untuk menyelesaikan masalah dunia nyata di berbagai domain."
  },
  {
    period: "Feb 2025 - Mei 2025",
    role: "Technical Writer",
    company: "PT Minergo Visi Maxima",
    summary:
      "Mengembangkan dan memelihara dokumen teknis seperti manual pengguna, panduan instalasi, dokumentasi proyek TI, serta bagian FAQ untuk dokumentasi produk."
  },
  {
    period: "Nov 2020 - Jan 2024",
    role: "Digital Marketing",
    company: "PT Banti Tekno Investama",
    summary:
      "Mengembangkan, mengelola, dan mengoptimalkan strategi pemasaran digital untuk meningkatkan brand awareness, traffic, dan konversi melalui berbagai kanal seperti media sosial, mesin pencari, email marketing, dan periklanan online, serta menganalisis kinerja kampanye untuk mendukung pencapaian tujuan bisnis."
  }
];

const projects = [
  {
    title: "MLenz",
    category: "Mining AI Analytics",
    description:
      "Kamera analitik berbasis AI untuk keselamatan dan produktivitas tambang dengan detection, OCR, violation monitoring, dan event processing.",
    accent: "#00f6ff",
    href: "/projects/mlenz"
  },
  {
    title: "Mzone",
    category: "Safety Call Center",
    description:
      "Platform untuk menghubungkan operasional tambang dengan tim keselamatan dan tim emergency dalam satu aplikasi, dengan fitur untuk melaporkan insiden, mengirim alarm, dan mengelola respon tim secara terstruktur.",
    accent: "#00f6ff",
    href: "/projects/mzone"
  },
  {
    title: "MIA",
    category: "AI Assistant Platform",
    description:
      "Asisten AI untuk membantu workflow internal, knowledge retrieval, dan interaksi berbasis language model yang lebih cepat.",
    accent: "#8b5cf6",
    href: "/projects/mia"
  },
  // {
  //   title: "SignalOps AI",
  //   category: "MLOps Dashboard",
  //   description:
  //     "Dashboard untuk memantau experiment tracking, model drift, evaluasi versi, dan health inference dalam satu tempat.",
  //   accent: "#ff4fd8"
  // },
  // {
  //   title: "Neural Search Hub",
  //   category: "RAG Platform",
  //   description:
  //     "Knowledge retrieval system berbasis embeddings untuk pencarian semantik, tanya jawab internal, dan konteks real-time.",
  //   accent: "#51a7ff"
  // },
  // {
  //   title: "Vision Inspector",
  //   category: "Computer Vision Tool",
  //   description:
  //     "Sistem inspeksi visual untuk klasifikasi anomali yang dipadukan dengan review interface bagi tim operasional.",
  //   accent: "#22c55e"
  // }
];

const stats = [
  { value: "ML", label: "modeling dan evaluasi" },
  { value: "LLM", label: "agent dan retrieval systems" },
  { value: "API", label: "deployment siap integrasi" }
];

const stackGroups = [
  {
    title: "Modeling",
    items: ["PyTorch", "scikit-learn", "Numpy", "Pandas"]
  },
  {
    title: "LLM Stack",
    items: ["OpenAI", "LlamaIndex", "Vector Database", "RAG Pipeline", "Embeddings"]
  },
  {
    title: "Backend & API",
    items: ["FastAPI", "Python"]
  },
  {
    title: "Real-world AI",
    items: ["RTSP / CCTV Stream", "YOLO / Vision Pipeline", "Async Processing"]
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="topbar">
        <div className="brand-mark">
          <span className="brand-dot" />
          <span>Surya || AI Engineer</span>
        </div>

        <nav className="nav-links" aria-label="Section navigation">
          <a href="#about">About</a>
          <a href="#mlenz">MLenz</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </section>

      <section className="hero-grid">
        <div className="hero-copy glass-panel neon-float">
          <p className="eyebrow">MUHAMMAD RIZKY SURYANATA</p>
          <h1>Membangun produk AI yang presisi, adaptif, dan siap dipakai.</h1>
          <p className="hero-text">
            Saya fokus mengembangkan sistem machine learning, aplikasi berbasis
            LLM, dan interface modern untuk membawa model menjadi produk yang
            benar-benar bisa dipakai.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              Explore Projects
            </a>
            <a className="secondary-btn" href="#contact">
              Let&apos;s Collaborate
            </a>
          </div>

          <div className="highlight-list">
            {highlights.map((item) => (
              <div className="highlight-item" key={item}>
                <span className="highlight-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual glass-panel neon-float neon-float-delay" id="about">
          <div className="orbit-ring orbit-ring-a" />
          <div className="orbit-ring orbit-ring-b" />
          <div className="scan-line" />

          <div className="video-shell">
            <div className="video-hud video-hud-top">
              <span className="video-dot" />
              <span className="video-dot" />
              <span className="video-dot" />
            </div>

            <video
              autoPlay
              className="hero-video"
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/videos/current-focus-h264.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="video-shell">
            <div className="video-hud video-hud-top">
              <span className="video-dot" />
              <span className="video-dot" />
              <span className="video-dot" />
            </div>

            <video
              autoPlay
              className="hero-video"
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/videos/hero-demo-h264.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="visual-stack">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* <section className="section-block mlenz-section glass-panel" id="mlenz">
        <div className="mlenz-overview">
          <p className="eyebrow">FEATURED PROJECT</p>
          <h2>MLenz: AI camera analytics untuk keselamatan dan produktivitas tambang.</h2>
          <p className="mlenz-copy">{`${mlenzOverview.description} ${mlenzOverview.summary}`}</p>

          <div className="hero-actions mlenz-actions">
            <Link className="primary-btn" href={mlenzOverview.href}>
              Lihat Detail MLenz
            </Link>
          </div>
        </div>
      </section> */}

      <section className="section-block" id="expertise">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">CORE EXPERTISE</p>
          <h2>Fondasi yang saya bawa untuk membangun produk AI yang siap tumbuh.</h2>
        </div>

        <div className="capabilities-grid stretch-grid">
          {capabilities.map((item) => (
            <article className="capability-card glass-panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block two-column-section" id="education">
        <div className="section-heading compact-heading section-heading-center">
          <p className="eyebrow">EDUCATION</p>
          <h2>Pendidikan dan jalur belajar yang membentuk fondasi engineering saya.</h2>
        </div>

        <div className="education-list experience-list glass-panel">
          {educationItems.map((item) => (
            <article className="education-item experience-item" key={`${item.period}-${item.title}`}>
              <div className="education-meta experience-meta">
                <span>{item.period}</span>
                <strong>{item.institution}</strong>
              </div>
              <div className="education-body experience-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block two-column-section" id="experience">
        <div className="section-heading compact-heading section-heading-center">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Perjalanan membangun AI product dari eksperimen ke implementasi.</h2>
        </div>

        <div className="experience-list glass-panel">
          {experiences.map((item) => (
            <article className="experience-item" key={`${item.period}-${item.role}`}>
              <div className="experience-meta">
                <span>{item.period}</span>
                <strong>{item.company}</strong>
              </div>
              <div className="experience-body">
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">SELECTED WORKS</p>
          <h2>Project yang memadukan Machine Learning dengan kebutuhan operasional.</h2>
        </div>

        <div className="projects-grid stretch-grid">
          {projects.map((project) => (
            <article
              className="project-card glass-panel"
              key={project.title}
              style={{ "--accent": project.accent } as CSSProperties}
            >
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.href ? (
                <Link className="project-link" href={project.href}>
                  View case study
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-block two-column-layout" id="stack-contact">
        <div className="stack-panel glass-panel" id="stack">
          <div className="section-heading compact-heading">
            <p className="eyebrow">TECH STACK</p>
            <h2>Tooling yang saya andalkan untuk shipping sistem AI.</h2>
          </div>

          <div className="stack-groups">
            {stackGroups.map((group) => (
              <article className="stack-group" key={group.title}>
                <h3>{group.title}</h3>
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
        </div>

        <section className="contact-panel glass-panel" id="contact">
          <div className="section-heading compact-heading">
            <p className="eyebrow">CONTACT</p>
            <h2>Punya ide AI product atau machine learning workflow?</h2>
          </div>

          <p className="contact-intro">
            Saya bisa membantu dari eksplorasi use case, perancangan sistem,
            integrasi model, sampai tampilan produk yang siap dipresentasikan ke
            user maupun stakeholder.
          </p>

          <form
            action="mailto:m.rizkysuryanata@gmail.com"
            className="contact-form"
            encType="text/plain"
            method="post"
          >
            <label className="field">
              <span>Nama</span>
              <input type="text" name="name" placeholder="Nama Anda" />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" name="email" placeholder="nama@email.com" />
            </label>

            <label className="field field-full">
              <span>Kebutuhan</span>
              <input
                type="text"
                name="subject"
                placeholder="Contoh: RAG app, dashboard ML, internal AI tool"
              />
            </label>

            <label className="field field-full">
              <span>Pesan</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Ceritakan use case, target user, atau masalah yang ingin diselesaikan"
              />
            </label>

            <div className="form-actions field-full">
              <button className="primary-btn" type="submit">
                Kirim Inquiry
              </button>
              <a className="secondary-btn" href="mailto:m.rizkysuryanata@gmail.com">
                m.rizkysuryanata@gmail.com
              </a>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
