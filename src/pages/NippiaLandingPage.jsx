import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CloudDownload,
  Flame,
  Gamepad2,
  GraduationCap,
  Heart,
  Layers,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Trophy,
  WifiOff,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NIPPIA_META } from "../data/nippiaLegal";

const SKD_PILLARS = [
  {
    code: "TWK",
    title: "Tes Wawasan Kebangsaan",
    passingGrade: "Passing Grade ≥ 65",
    scoring: "Benar +5 • Salah/Kosong 0",
    accent: "from-blue-600/25 to-cyan-500/10 border-blue-500/30",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    topics: [
      "Nasionalisme & Integritas",
      "Bela Negara",
      "Pilar Negara (Pancasila, UUD 1945, Bhinneka Tunggal Ika, NKRI)",
      "Bahasa Negara",
    ],
  },
  {
    code: "TIU",
    title: "Tes Intelegensia Umum",
    passingGrade: "Passing Grade ≥ 80",
    scoring: "Benar +5 • Salah/Kosong 0",
    accent: "from-emerald-600/25 to-teal-500/10 border-emerald-500/30",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    topics: [
      "Verbal: Analogi, Silogisme, & Penalaran Analitis",
      "Numerik: Deret Angka, Hitung Cepat, Perbandingan Kuantitatif, Soal Cerita",
      "Figural: Analogi, Ketidaksamaan, & Serial (Tap-to-Zoom HD)",
    ],
  },
  {
    code: "TKP",
    title: "Tes Karakteristik Pribadi",
    passingGrade: "Passing Grade ≥ 166",
    scoring: "Skala Opsi 1 – 5 • Kosong 0",
    accent: "from-amber-500/25 to-orange-500/10 border-amber-500/30",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    topics: [
      "Pelayanan Publik & Jejaring Kerja",
      "Sosial Budaya & Teknologi Informasi Komunikasi (TIK)",
      "Profesionalisme & Anti Radikalisme",
    ],
  },
];

const CORE_FEATURES = [
  {
    icon: Gamepad2,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
    title: "Sesi Mikro 3–5 Menit & Peta S-Curve",
    desc: "Setiap unit berisi 5–7 soal dengan tombol taktil 3D dan Buku Panduan ringkas. Pembukaan unit berlangsung dinamis (Unit[n] selesai → Unit[n+1] terbuka).",
  },
  {
    icon: Zap,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/25",
    title: "Pembahasan 0 ms & Mistake Review",
    desc: "Feedback Bottom Sheet muncul instan setelah Cek Jawaban beserta Trik Cepat. Soal yang dijawab keliru otomatis masuk ke antrean Mistake Bank.",
  },
  {
    icon: Timer,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/25",
    title: "Simulasi Mini CAT & Full Tryout 110 Soal",
    desc: "Latihan Mini CAT (30 soal / 30 menit) hingga Full Tryout CAT standar BKN (30 TWK, 35 TIU, 45 TKP dalam 100 menit) dengan validasi timer server.",
  },
  {
    icon: Radar,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
    title: "Radar Kelemahan (Smart Review)",
    desc: "Visualisasi performa per sub-topik dan pembuat kuis otomatis dari 3 sub-topik dengan tingkat akurasi terendah Anda.",
  },
  {
    icon: Trophy,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/25",
    title: "Hearts, Daily Streak & Weekly Leaderboard",
    desc: "Jaga konsistensi belajar harian dengan Daily Streak, Streak Freeze (hingga 2 slot), sistem 5 Hearts, serta kompetisi liga mingguan dari Perunggu hingga Berlian.",
  },
  {
    icon: WifiOff,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
    title: "Offline-First & Over-The-Air Delta Sync",
    desc: "Tetap bisa mengerjakan unit tanpa koneksi internet dan mendapatkan pembaruan bank soal secara inkremental tanpa perlu menunggu rilis ulang aplikasi.",
  },
];

const PRO_PLANS = [
  {
    name: "Paket 1 Bulan",
    price: "Rp 35.000",
    period: "/ bulan",
    note: "Opsi fleksibel bulanan untuk pemanasan materi SKD.",
    highlight: false,
  },
  {
    name: "Fokus SKD (3 Bulan)",
    price: "Rp 79.000",
    period: "/ 3 bulan",
    note: "Best Value — menyesuaikan siklus pendaftaran hingga pelaksanaan tes SKD.",
    highlight: true,
    badge: "BEST VALUE",
  },
  {
    name: "Paket 6 Bulan",
    price: "Rp 129.000",
    period: "/ 6 bulan",
    note: "Persiapan jangka panjang seleksi CPNS & Sekolah Kedinasan.",
    highlight: false,
  },
];

export default function NippiaLandingPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar isHome={false} titleText="NIPPIA • CPNS & CAT" />

      <main className="flex-1 relative pt-28 sm:pt-32 pb-16 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-72 left-0 w-[26rem] h-[26rem] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumb & Quick Legal Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400"
            >
              <a
                href="/"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>KuliTech</span>
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-emerald-300 font-medium">
                Nippia – Latihan Soal CPNS &amp; CAT
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="/nippia/privacy-policy"
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-slate-200 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/nippia/terms"
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-slate-200 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-20 border-b border-white/10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300">
                <Smartphone className="w-3.5 h-3.5" />
                <span>ANDROID APP • {NIPPIA_META.packageName}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]">
                Taklukkan SKD CPNS dengan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300">
                  Latihan Mikro 5 Menit
                </span>{" "}
                Setiap Hari
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                <strong className="text-white">Nippia – Latihan Soal CPNS &amp; CAT</strong>{" "}
                menggabungkan gamifikasi mikro (daily streak, sistem nyawa, liga
                mingguan, dan animasi interaktif Rive) dengan simulasi CAT
                berstandar pembobotan TWK, TIU, dan TKP serta pembaruan soal{" "}
                <em className="text-slate-200">Over-The-Air Content Sync</em>.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#fitur"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <span>Jelajahi Fitur Nippia</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#nippia-pro"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lihat Paket Nippia Pro</span>
                </a>
              </div>

              {/* Key Stats Bar */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 max-w-xl">
                <div className="p-3.5 rounded-2xl bg-[#0b0f19]/90 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">
                    3–5 mnt
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    Sesi Mikro Harian
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0b0f19]/90 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-amber-300 font-mono">
                    110 Soal
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    Full Tryout CAT
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0b0f19]/90 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-cyan-300 font-mono">
                    Offline
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    Room DB + Delta Sync
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive App HUD Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#0b0f19] border border-white/15 p-5 sm:p-6 shadow-2xl">
                <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#1E3A8A] via-emerald-400 to-amber-400 mb-5" />

                {/* Top Sticky HUD Preview */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#1E3A8A]/60 border border-blue-400/30 text-xs font-bold text-blue-200">
                      TIU • Numerik
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="inline-flex items-center gap-1 text-amber-300">
                      <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
                      14
                    </span>
                    <span className="inline-flex items-center gap-1 text-rose-400">
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      5
                    </span>
                  </div>
                </div>

                {/* Sample Quiz Card */}
                <div className="mt-5 space-y-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                    Unit 03 • Deret Angka Cepat
                  </div>
                  <div className="p-4 rounded-2xl bg-[#070a12] border border-white/10">
                    <p className="text-sm text-slate-200 leading-relaxed">
                      Tentukan angka selanjutnya pada pola deret berikut:
                    </p>
                    <p className="mt-2 font-mono text-base font-bold text-white tracking-wider">
                      3, 6, 12, 24, 48, ...
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-2">
                    <div className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 flex items-center justify-between">
                      <span>A. 72</span>
                    </div>
                    <div className="px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/50 text-xs sm:text-sm text-emerald-200 font-semibold flex items-center justify-between">
                      <span>B. 96</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Tactile 3D Button Preview */}
                  <div className="pt-1">
                    <div className="w-full py-3 rounded-xl bg-emerald-500 border-b-4 border-emerald-700 text-center text-xs sm:text-sm font-extrabold text-slate-950 tracking-wide">
                      CEK JAWABAN • +15 XP
                    </div>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                  <span>Kotlin + Jetpack Compose</span>
                  <span>Rive State Machine</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3 SKD Pillars */}
          <section className="py-16 border-b border-white/10">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-300 mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>STRUKTUR MATERI SKD</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                3 Jalur Pembelajaran Terstruktur Sesuai Kisi-Kisi SKD
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Setiap jalur dilengkapi peta unit berkelok, Buku Panduan rumus
                ringkas, serta evaluasi ambang batas (<em>Passing Grade</em>).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SKD_PILLARS.map((pillar) => (
                <div
                  key={pillar.code}
                  className={`rounded-3xl bg-gradient-to-br ${pillar.accent} border p-6 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${pillar.badge}`}
                      >
                        {pillar.code}
                      </span>
                      <span className="text-[11px] font-mono text-slate-300">
                        {pillar.passingGrade}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {pillar.title}
                    </h3>
                    <div className="mt-1 text-xs font-mono text-slate-400">
                      {pillar.scoring}
                    </div>
                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-200">
                      {pillar.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Features Grid */}
          <section id="fitur" className="py-16 border-b border-white/10">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300 mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>FITUR UNGGULAN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Dirancang untuk Konsistensi Belajar &amp; Ketepatan Simulasi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_FEATURES.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="rounded-2xl bg-[#0b0f19]/90 border border-white/10 p-6 hover:border-white/20 transition-colors"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${feat.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Nippia Pro & Monetization */}
          <section id="nippia-pro" className="py-16 border-b border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-300 mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>MODEL AKSES &amp; NIPPIA PRO</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Gratis untuk Semua, Upgrade ke Nippia Pro Kapan Saja
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300">
                  Pengguna gratis tetap dapat berlatih harian dengan dukungan
                  iklan Google AdMob (termasuk opsi Rewarded Ads untuk isi ulang
                  Heart). Upgrade ke{" "}
                  <strong className="text-amber-300">Nippia Pro</strong> melalui
                  Google Play Billing untuk pengalaman bebas iklan,{" "}
                  <em>Unlimited Hearts</em>, Tryout Akbar CAT, Smart Review tanpa
                  batas, dan Mode Offline Penuh.
                </p>
              </div>
              <div className="text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-2 rounded-xl self-start">
                Free Trial 3 Hari saat mencapai 7-Day Streak
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRO_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl p-6 border flex flex-col justify-between ${
                    plan.highlight
                      ? "bg-gradient-to-b from-amber-500/15 to-[#0b0f19] border-amber-400/50 shadow-xl shadow-amber-500/10"
                      : "bg-[#0b0f19]/90 border-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-base font-bold text-white">
                        {plan.name}
                      </h3>
                      {plan.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400 text-slate-950">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {plan.period}
                      </span>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {plan.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mandatory Landing Page Footer Disclaimer & SDK Disclosure */}
          <section
            aria-label="Disclaimer dan Pengungkapan SDK Nippia"
            className="pt-14"
          >
            <div className="rounded-3xl bg-[#0b0f19] border border-white/15 p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0 mt-0.5">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Disclaimer Resmi &amp; Transparansi Layanan Nippia
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white">Nippia</strong> adalah
                    platform edukasi independen yang dikembangkan oleh{" "}
                    <strong className="text-white">Kulitech</strong>,{" "}
                    <strong className="text-amber-300">
                      tidak berafiliasi dengan Badan Kepegawaian Negara (BKN)
                      maupun instansi pemerintah mana pun
                    </strong>
                    , dan seluruh soal disusun berdasarkan{" "}
                    <strong className="text-white">
                      kisi-kisi peraturan publik yang berlaku
                    </strong>
                    .
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white">
                      Pengungkapan Penggunaan SDK:
                    </strong>{" "}
                    Aplikasi Android Nippia (
                    <code className="px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs">
                      {NIPPIA_META.packageName}
                    </code>
                    ) menggunakan SDK{" "}
                    <strong className="text-white">Google AdMob</strong>{" "}
                    (penayangan iklan Rewarded, Interstitial, dan Banner/Native
                    di luar layar kuis/CAT),{" "}
                    <strong className="text-white">Google Play Billing</strong>{" "}
                    (pemrosesan langganan Nippia Pro), dan{" "}
                    <strong className="text-white">Firebase</strong> (Crashlytics,
                    Analytics, dan Firebase Cloud Messaging).
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/nippia/privacy-policy"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 transition-colors font-medium"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Kebijakan Privasi (Privacy Policy)</span>
                  </a>
                  <a
                    href="/nippia/terms"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 hover:bg-amber-500/20 transition-colors font-medium"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Syarat &amp; Ketentuan (Terms)</span>
                  </a>
                  <a
                    href="/app-ads.txt"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white transition-colors font-mono"
                  >
                    <CloudDownload className="w-4 h-4" />
                    <span>app-ads.txt</span>
                  </a>
                </div>
                <div className="text-slate-400 font-mono">
                  Kontak:{" "}
                  <a
                    href="mailto:support@kulitech.my.id"
                    className="text-cyan-300 hover:underline"
                  >
                    support@kulitech.my.id
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer isHome={false} />
    </div>
  );
}
