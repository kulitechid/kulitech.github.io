import React from "react";
import { Hammer, ShieldCheck, Zap, HeartHandshake, Code, Award } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      icon: Hammer,
      title: "Mentalitas Kuli: Pekerja Keras & Tuntas",
      desc: "Kami tidak sekadar menulis kode—kami membangun bangunan digital dari fondasi arsitektur yang solid sampai atap finishing dengan teliti.",
    },
    {
      icon: ShieldCheck,
      title: "100% Milik Anda (No Vendor Lock-in)",
      desc: "Seluruh hak cipta source code, akun database, dan aset proyek diserahkan sepenuhnya ke Anda tanpa ikatan lisensi tersembunyi.",
    },
    {
      icon: Zap,
      title: "Cepat, Ringan & Tanpa Bloatware",
      desc: "Aplikasi dibuat dengan teknologi modern yang dioptimasi untuk konsumsi RAM kecil, loading cepat, dan hemat baterai pengguna.",
    },
    {
      icon: HeartHandshake,
      title: "Pendampingan Penuh Hingga Sukses Rilis",
      desc: "Mulai dari pendaftaran akun developer Google Play, konfigurasi domain/hosting, sampai pengujian pengguna di lapangan.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0d16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>NILAI &amp; KOMITMEN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Kenapa Memilih <span className="text-cyan-400">KuliTech</span>?
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Banyak jasa pembuatan aplikasi menjanjikan harga murah namun menyisakan kode berantakan (spaghetti code) yang sulit dikembangkan lagi. Di KuliTech, setiap baris kode dirancang seperti struktur bangunan kokoh: rapi, teruji, dan siap menopang pertumbuhan bisnis Anda.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-cyan-950/20 border border-cyan-800/30">
              <blockquote className="text-sm italic text-slate-300">
                &ldquo;Bagi kami, coding adalah pertukangan modern. Ketelitian dan integritas fondasi adalah segalanya.&rdquo;
              </blockquote>
              <div className="mt-3 text-xs font-mono text-cyan-400 font-semibold">
                — Tim Rekayasa KuliTech
              </div>
            </div>
          </div>

          {/* Right Grid of Points */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0e1320] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
