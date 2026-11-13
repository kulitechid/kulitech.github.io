import React, { useState } from "react";
import { 
  Calculator, 
  Smartphone, 
  Globe, 
  Layers, 
  Check, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck,
  Clock,
  Send
} from "lucide-react";
import { CONTACT_INFO } from "../data/content";

export default function ProjectEstimator() {
  const [platform, setPlatform] = useState("android"); // 'android' | 'web' | 'both'
  const [scale, setScale] = useState("umkm"); // 'simple' | 'umkm' | 'custom'
  const [selectedFeatures, setSelectedFeatures] = useState([
    "auth",
    "dashboard",
  ]);

  const platformOptions = [
    {
      id: "android",
      label: "Aplikasi Android",
      desc: "Native / Flutter untuk smartphone",
      icon: Smartphone,
    },
    {
      id: "web",
      label: "Website Modern",
      desc: "Responsif di HP & Desktop",
      icon: Globe,
    },
    {
      id: "both",
      label: "Keduanya (Android + Web)",
      desc: "Ekosistem terpadu satu database",
      icon: Layers,
    },
  ];

  const scaleOptions = [
    {
      id: "simple",
      label: "Profil / Landing Page",
      desc: "Cocok untuk personal branding atau perkenalan produk",
      timeline: "3 - 7 Hari",
      tier: "Starter Friendly",
    },
    {
      id: "umkm",
      label: "Katalog / Kasir / Toko UMKM",
      desc: "Untuk operasional bisnis, transaksi, & pencatatan pesanan",
      timeline: "2 - 3 Minggu",
      tier: "Paling Populer",
    },
    {
      id: "custom",
      label: "Aplikasi Bisnis Kustom",
      desc: "Sistem khusus dengan fitur dan alur kerja sesuai permintaan",
      timeline: "3 - 5 Minggu",
      tier: "Skala Penuh",
    },
  ];

  const featureOptions = [
    { id: "auth", label: "Otentikasi User (Login/Daftar)" },
    { id: "payment", label: "Pembayaran Otomatis / QRIS" },
    { id: "dashboard", label: "Dashboard Admin & Laporan" },
    { id: "notif", label: "Notifikasi WhatsApp / Push Alert" },
    { id: "maps", label: "Integrasi Peta / GPS / Lokasi" },
    { id: "playstore", label: "Bantuan Publikasi ke Google Play" },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Determine current timeline
  const currentScaleObj = scaleOptions.find((s) => s.id === scale);
  const currentPlatformObj = platformOptions.find((p) => p.id === platform);

  // Generate WhatsApp Message
  const getWhatsAppMessage = () => {
    const platformLabel = currentPlatformObj?.label || platform;
    const scaleLabel = currentScaleObj?.label || scale;
    const featureLabels = selectedFeatures
      .map((fid) => featureOptions.find((f) => f.id === fid)?.label)
      .filter(Boolean)
      .join(", ");

    return `Halo KuliTech! Saya ingin konsultasi pembuatan proyek baru:

• Platform: ${platformLabel}
• Kategori: ${scaleLabel}
• Estimasi Waktu Rata-rata: ${currentScaleObj?.timeline}
• Fitur Tambahan yang Diinginkan:
  ${featureLabels || "Belum ada fitur tambahan spesifik"}

Apakah bisa kita diskusikan rincian dan penawaran biayanya? Terima kasih!`;
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator Kebutuhan Proyek
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Pilih spesifikasi yang Anda butuhkan di bawah ini untuk melihat perkiraan cakupan pengerjaan dan langsung konsultasikan dengan kami via WhatsApp.
          </p>
        </div>

        {/* Main Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-8 bg-[#0b0f1a] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            
            {/* Step 1: Pilih Platform */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono font-bold">1</span>
                Pilih Platform yang Diinginkan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {platformOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = platform === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPlatform(opt.id)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "bg-cyan-950/40 border-cyan-400 text-white shadow-md shadow-cyan-500/10"
                          : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                      <div className="text-sm font-bold">{opt.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Pilih Skala Proyek */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono font-bold">2</span>
                Pilih Tipe &amp; Skala Kebutuhan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scaleOptions.map((opt) => {
                  const isSelected = scale === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScale(opt.id)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "bg-cyan-950/40 border-cyan-400 text-white shadow-md shadow-cyan-500/10"
                          : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300 mb-2 inline-block">
                        {opt.tier}
                      </span>
                      <div className="text-sm font-bold">{opt.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Fitur Tambahan */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono font-bold">3</span>
                Pilih Fitur Kunci yang Dibutuhkan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl text-left border flex items-center justify-between text-xs sm:text-sm transition-all ${
                        isChecked
                          ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-200"
                          : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <span>{feat.label}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isChecked
                            ? "bg-cyan-400 border-cyan-400 text-slate-950"
                            : "border-white/20 bg-black/20"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result / Quotation Summary Card (Right) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-gradient-to-b from-[#111726] to-[#0d121f] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Top Sparkle Banner */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Rangkuman Estimasi
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Spesifikasi Pilihan</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Scope details */}
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Target Platform</span>
                  <span className="font-semibold text-white">{currentPlatformObj?.label}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Skala Proyek</span>
                  <span className="font-semibold text-white">{currentScaleObj?.label}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Estimasi Pengerjaan
                  </span>
                  <span className="font-mono font-bold text-amber-300">{currentScaleObj?.timeline}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-2 text-xs uppercase tracking-wider">
                    Fitur Aktif ({selectedFeatures.length}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFeatures.length > 0 ? (
                      selectedFeatures.map((fid) => {
                        const label = featureOptions.find((f) => f.id === fid)?.label;
                        return (
                          <span
                            key={fid}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300"
                          >
                            {label}
                          </span>
                        );
                      })
                    ) : (
                      <span className="text-xs text-slate-400 italic">Belum ada fitur tambahan dipilih</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Source code 100% milik Anda tanpa biaya tersembunyi</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pendampingan pengoperasian sistem hingga siap digunakan</span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-sm sm:text-base hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Konsultasikan via WhatsApp</span>
                <Send className="w-4 h-4 text-slate-950" />
              </a>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                Konsultasi awal 100% gratis tanpa komitmen. Pesan WA sudah otomatis terformat!
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
