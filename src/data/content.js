export const PRODUCTS = [
  {
    id: "lombok-explorer",
    title: "Lombok Explorer",
    subtitle: "Smart Travel Companion & Panduan Wisata Pulau Lombok",
    category: "Travel & Smart Tourism App",
    badge: "In-House Product",
    status: "Ongoing Development",
    description:
      "Lombok Explorer adalah aplikasi panduan wisata dan perencana perjalanan cerdas (smart travel companion) yang dirancang khusus untuk mengeksplorasi keindahan Pulau Lombok secara komprehensif, mulai dari wisata pantai eksotis, pendakian Gunung Rinjani, budaya tradisi Sasak, hingga kuliner lokal autentik.",
    highlights: [
      "Panduan wisata pantai eksotis & rute pendakian Gunung Rinjani",
      "Eksplorasi tradisi & ragam budaya Sasak yang autentik",
      "Rekomendasi kuliner lokal autentik & hidden gems terkurasi",
      "Smart travel companion & peta interaktif untuk kemudahan liburan",
    ],
    techStack: ["Android (Kotlin)", "Jetpack Compose", "REST API", "Cloud Storage", "Mapbox/Google Maps"],
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/40",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    mockupType: "travel",
  },
  {
    id: "kanguru-siaga",
    title: "Kanguru Siaga",
    subtitle: "Aplikasi Pendamping Digital Perawatan Bayi Prematur & BBLR",
    category: "Maternal & Infant Health Tech",
    badge: "In-House Product",
    status: "Ongoing Development",
    description:
      "Kanguru Siaga adalah aplikasi pendamping digital ramah keluarga yang dirancang khusus untuk mendampingi orang tua dan tenaga kesehatan dalam merawat Bayi Berat Lahir Rendah (BBLR) dan bayi prematur di rumah. Melalui fitur timer kontak kulit Perawatan Metode Kanguru (PMK), grafik pertumbuhan terstandar internasional (Fenton & Buku KIA), alarm pengingat nutrisi/ASI teratur, serta panduan deteksi tanda bahaya, Kanguru Siaga hadir untuk memastikan si kecil tumbuh sehat, hangat, dan optimal dalam dekapan penuh cinta keluarga.",
    highlights: [
      "Timer kontak kulit Perawatan Metode Kanguru (PMK)",
      "Grafik pertumbuhan terstandar internasional (Fenton & Buku KIA)",
      "Alarm pengingat nutrisi & jadwal pemberian ASI teratur",
      "Panduan deteksi dini tanda bahaya bayi prematur & BBLR",
    ],
    techStack: ["Android", "Flutter / Compose", "Firebase Realtime", "Notification Engine", "Health Tracking"],
    accentColor: "from-amber-500/20 via-rose-500/10 to-transparent",
    borderColor: "hover:border-amber-500/40",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    mockupType: "health",
    legalLinks: [
      { label: "Kebijakan Privasi", href: "/kanguru-siaga/privacy-policy" },
      { label: "Ketentuan Penggunaan", href: "/kanguru-siaga/term-of-use" },
    ],
  },
];

export const SERVICES = [
  {
    id: "android-dev",
    title: "Pengembangan Aplikasi Android",
    tagline: "Aplikasi mobile tangguh, mulus, dan siap rilis ke Google Play Store.",
    icon: "Smartphone",
    description:
      "Kami membangun aplikasi Android berbasis Native (Kotlin / Jetpack Compose) maupun Multiplatform (Flutter) dengan arsitektur bersih, performa tinggi, dan konsumsi baterai hemat.",
    features: [
      "Aplikasi Kasir / POS & Operasional UMKM",
      "Aplikasi Layanan Jasa, Booking, & Antrean",
      "Integrasi Payment Gateway (Midtrans, Xendit, QRIS)",
      "Fitur Realtime Chat, Peta/GPS & Push Notification",
      "Bantuan rilis & publikasi ke Google Play Console",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Flutter", "Firebase", "Room DB", "Retrofit"],
  },
  {
    id: "web-dev",
    title: "Pengembangan Website & Web App",
    tagline: "Website berkecepatan tinggi, responsif di semua layar, dan ramah SEO.",
    icon: "Globe",
    description:
      "Mulai dari landing page konversi tinggi untuk branding UMKM, hingga sistem manajemen dashboard bisnis (CMS) yang kompleks dan aman.",
    features: [
      "Landing Page Modern & Company Profile Profesional",
      "Katalog Produk & Toko Online (E-Commerce) UMKM",
      "Dashboard Admin & Sistem Informasi Bisnis Custom",
      "Optimasi SEO & Kecepatan Loading (Lighthouse 95+)",
      "Desain responsif sempurna untuk smartphone & desktop",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Vite"],
  },
  {
    id: "custom-solution",
    title: "Solusi Kustom & Integrasi API",
    tagline: "Hubungkan aplikasi Anda dengan sistem pihak ketiga secara aman.",
    icon: "Cpu",
    description:
      "Punya ide aplikasi unik atau ingin menghubungkan sistem kasir dengan website dan WhatsApp bot otomatis? Kami siap merancang arsitekturnya dari fondasi.",
    features: [
      "Pembuatan REST API & Backend yang scalable",
      "Integrasi WhatsApp Notification / Notifikasi Pesanan Otomatis",
      "Migrasi & modernisasi aplikasi lama (Legacy code refactor)",
      "Audit performa dan perbaikan bug aplikasi",
    ],
    stack: ["Express", "FastAPI", "Docker", "Supabase", "Redis"],
  },
];

export const WORKFLOW = [
  {
    step: "01",
    title: "Diskusi & Analisis Fondasi",
    desc: "Kami membedah kebutuhan bisnis Anda, target pengguna, dan fitur utama untuk menyusun blueprint & estimasi transparan.",
  },
  {
    step: "02",
    title: "Desain UI/UX & Prototipe",
    desc: "Merancang visual antarmuka yang modern, intuitif, dan ramah pengguna sebelum mulai baris kode pertama.",
  },
  {
    step: "03",
    title: "Koding Kokoh & Berkualitas",
    desc: "Mengeksekusi pembuatan aplikasi dengan arsitektur rapi, modular, dan teruji tanpa kompromi performa.",
  },
  {
    step: "04",
    title: "Pengujian & Peluncuran Resmi",
    desc: "Uji coba menyeluruh di berbagai tipe layar hingga aplikasi dan website siap digunakan publik.",
  },
];

export const FAQS = [
  {
    q: "Berapa lama waktu pengerjaan untuk sebuah aplikasi atau website?",
    a: "Durasi bervariasi sesuai kompleksitas: Landing page profil biasanya selesai dalam 3–7 hari kerja. Aplikasi Android atau sistem katalog UMKM standar rata-rata memakan waktu 2–4 minggu. Estimasi pasti akan disepakati di awal sebelum pengerjaan.",
  },
  {
    q: "Apakah KuliTech melayani proyek untuk UMKM dan perorangan / mahasiswa?",
    a: "Tentu saja! KuliTech didirikan untuk membantu semua kalangan—dari pelaku UMKM yang ingin go-digital, founder startup baru, hingga individu yang membutuhkan aplikasi custom dengan biaya yang masuk akal dan transparan.",
  },
  {
    q: "Bagaimana jika aplikasi yang dibuat membutuhkan akun Google Play Store?",
    a: "Kami menyediakan pendampingan penuh untuk proses pendaftaran akun Google Play Console, persiapan materi grafis, penyesuaian privasi, hingga aplikasi Anda resmi lolos review dan bisa diunduh oleh publik.",
  },
  {
    q: "Apakah disediakan pelatihan cara mengoperasikan sistem?",
    a: "Ya! Kami memberikan sesi panduan pengoperasian sistem agar Anda atau tim dapat mengelola fitur aplikasi dan website dengan mandiri dan lancar.",
  },
  {
    q: "Bagaimana cara melakukan pemesanan atau konsultasi proyek?",
    a: "Sangat mudah! Anda dapat mencoba fitur Kalkulator Estimasi di website ini untuk memilih kebutuhan, lalu klik tombol WhatsApp untuk langsung terhubung dengan tim KuliTech secara cuma-cuma.",
  },
];

export const CONTACT_INFO = {
  whatsapp: "083129679506",
  whatsappUrl: "https://wa.me/6283129679506",
  email: "kulitech.id@gmail.com",
  github: "https://github.com/kulitechid",
  location: "Lombok, Indonesia",
};
