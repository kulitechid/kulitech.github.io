import React from "react";
import { ArrowUp, Mail, MessageCircle, Heart } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070c] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px]">
                <div className="w-full h-full bg-[#0d111b] rounded-[10px] flex items-center justify-center">
                  <img src="./logo.svg" alt="KuliTech" className="w-5 h-5 object-contain" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Kuli<span className="text-cyan-400">Tech</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Studio software &amp; digital builder yang berdedikasi membangun fondasi aplikasi Android dan website tangguh, rapi, dan siap bersaing untuk UMKM dan inovator.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
              Navigasi Halaman
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Produk In-House
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Layanan Pembuatan Aplikasi
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-cyan-400 transition-colors">
                  Kalkulator Estimasi Proyek
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-cyan-400 transition-colors">
                  Alur &amp; Metodologi Kerja
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* In-House Products Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
              Produk Kami
            </div>
            <ul className="space-y-3 text-sm">
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-white">Lombok Explorer</div>
                <div className="text-xs text-slate-400">Smart Travel Companion &amp; Panduan Wisata Lombok</div>
              </li>
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-white">Kanguru Siaga</div>
                <div className="text-xs text-slate-400">Pendamping Perawatan Bayi Prematur &amp; BBLR</div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} KuliTech. Crafted with passion &amp; solid foundations.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
