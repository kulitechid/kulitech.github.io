import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../data/content";

export default function Navbar({ isHome = true, titleText = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionPrefix = isHome ? "" : "/";

  const navLinks = [
    { name: "Produk", href: `${sectionPrefix}#products` },
    { name: "Layanan", href: `${sectionPrefix}#services` },
    { name: "Estimator Biaya", href: `${sectionPrefix}#estimator` },
    { name: "Cara Kerja", href: `${sectionPrefix}#workflow` },
    { name: "FAQ", href: `${sectionPrefix}#faq` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Status */}
          <a href={isHome ? "#" : "/"} className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0d111b] rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                <img src="/logo.png" alt="KuliTech Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 font-sans">
                Kuli<span className="text-cyan-400">Tech</span>
              </span>
              <span className="text-[10px] text-slate-400 -mt-1 font-mono hidden sm:inline-block">
                Software & Craftsmanship
              </span>
            </div>
          </a>

          {titleText ? (
            <div className="flex items-center">
              <span className="font-extrabold text-sm sm:text-lg md:text-xl tracking-[0.16em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 whitespace-nowrap">
                {titleText}
              </span>
            </div>
          ) : (
            <>
              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-full px-5 py-1.5 backdrop-blur-md">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs lg:text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/[0.06]"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Right Action */}
              <div className="hidden sm:flex items-center gap-3">
                {/* Live Availability Badge */}
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open for Projects
                </div>

                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Halo KuliTech! Saya ingin konsultasi pembuatan aplikasi / website.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Konsultasi WA</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
                </a>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-cyan-400" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {!titleText && mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e18]/95 border-b border-white/10 px-4 pt-3 pb-6 mt-3 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-cyan-400 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Tersedia untuk proyek baru
              </div>
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Halo KuliTech! Saya ingin konsultasi pembuatan aplikasi / website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi WhatsApp Langsung
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
