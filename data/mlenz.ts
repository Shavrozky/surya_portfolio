export const mlenzOverview = {
  name: "MLenz",
  tagline: "AI-powered analytics camera for mining safety and productivity",
  description:
    "MLenz adalah kamera analitik berbasis kecerdasan buatan untuk lingkungan pertambangan yang membantu perusahaan memantau keselamatan, mengelola risiko, dan meningkatkan produktivitas secara real-time.",
  summary:
    "Saya menonjolkan MLenz sebagai salah satu produk yang sedang saya kerjakan karena solusi ini menggabungkan computer vision, event processing, dan integrasi sistem industri ke dalam satu workflow operasional yang benar-benar dipakai.",
  href: "/projects/mlenz"
};

export const mlenzFeatureGroups = [
  {
    title: "Object Detection & Tracking",
    items: ["Person", "HD", "DT", "Excavator"]
  },
  {
    title: "PPE Detection",
    items: ["Helmet", "Vest", "Boots", "Gloves"]
  },
  {
    title: "Vehicle Violation",
    items: ["Speed", "Safe distance", "Contraflow", "Restricted zone"]
  },
  {
    title: "OCR System",
    items: ["ID rompi person", "Nomor lambung kendaraan"]
  },
  {
    title: "Event Processing",
    items: ["Logging pelanggaran", "Queue system", "Spool system"]
  },
  {
    title: "Integration",
    items: ["MQTT", "REST API", "Object Storage MinIO"]
  }
];

export const mlenzValuePoints = [
  "Analisis real-time untuk meningkatkan keselamatan operasional tambang",
  "Monitoring pelanggaran dan event penting tanpa menunggu review manual",
  "Menghubungkan computer vision dengan workflow integrasi industri"
];

export const mlenzSystemPoints = [
  "Computer vision pipeline untuk detection, tracking, PPE, OCR, dan vehicle monitoring",
  "Rule engine untuk restricted zone, safe distance, contraflow, dan speed violation",
  "Event logging pipeline dengan queue dan spool agar tahan pada kondisi jaringan yang tidak stabil",
  "Integrasi ke sistem eksternal melalui MQTT, REST API, dan object storage"
];
