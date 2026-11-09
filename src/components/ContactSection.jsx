import React, { useState } from "react";
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

function GithubIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    needs: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo KuliTech!
Saya ${formData.name || "Klien"}.
Kebutuhan: ${formData.needs || "Konsultasi Pembuatan Aplikasi/Web"}
Catatan: ${formData.message || "-"}`;

    window.open(`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090d16] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mulai Diskusi Proyek Anda Hari Ini
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Punya ide aplikasi Android baru atau ingin memperbarui website bisnis Anda? Konsultasikan gratis langsung dengan tim KuliTech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Cards: Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* WhatsApp Card */}
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Halo KuliTech! Saya ingin konsultasi pembuatan aplikasi / website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#0c111e] border border-cyan-500/30 hover:border-cyan-400/70 transition-all flex items-center justify-between group shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400">Respon Cepat (WhatsApp)</div>
                  <div className="text-lg font-bold text-white group-hover:text-cyan-300 font-mono">
                    {CONTACT_INFO.whatsapp}
                  </div>
                  <div className="text-xs text-slate-400">Chat langsung dengan tim kami</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="p-6 rounded-2xl bg-[#0c111e] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400">Email Resmi</div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300">
                    {CONTACT_INFO.email}
                  </div>
                  <div className="text-xs text-slate-400">Kirim proposal &amp; brief kerja sama</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#0c111e] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400">GitHub Organization</div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300">
                    github.com/kulitechid
                  </div>
                  <div className="text-xs text-slate-400">Open source &amp; repositori kode</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

          </div>

          {/* Right: Quick Direct Consultation Form */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Kirim Pesan Langsung</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Isi form singkat ini untuk langsung terhubung dengan tim KuliTech via WhatsApp dengan pesan yang rapi.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Nama Anda / Nama Usaha
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Pak Budi / Toko Maju Jaya"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Kategori Kebutuhan
                  </label>
                  <select
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1424] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  >
                    <option value="Aplikasi Android Baru">Pembuatan Aplikasi Android Baru</option>
                    <option value="Website Profil / Landing Page">Pembuatan Website Profil / Landing Page</option>
                    <option value="Toko Online / Kasir UMKM">Aplikasi Kasir / Toko Online UMKM</option>
                    <option value="Aplikasi Custom / Sistem Bisnis">Sistem Bisnis / Aplikasi Kustom</option>
                    <option value="Konsultasi Lainnya">Konsultasi / Tanya-tanya Dulu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Ceritakan Singkat Rencana Anda
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Contoh: Saya butuh aplikasi kasir dan pencatatan stok yang bisa dijalankan di tablet Android..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all text-sm shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim &amp; Hubungkan ke WhatsApp</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Privasi dan ide proyek Anda terjamin aman bersama kami.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
