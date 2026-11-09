import React, { useState } from "react";
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  ShieldAlert, 
  BellRing, 
  Activity, 
  ExternalLink, 
  MessageCircle, 
  CheckCircle,
  Smartphone,
  ChevronRight
} from "lucide-react";
import { PRODUCTS, CONTACT_INFO } from "../data/content";

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0].id);

  return (
    <section id="products" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Background subtle light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORIGINAL IN-HOUSE CREATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Produk Unggulan KuliTech
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Selain melayani pembuatan aplikasi kustom untuk klien, kami juga aktif membangun dan merilis produk perangkat lunak kami sendiri.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => {
            const isLombok = product.id === "lombok-explorer";
            return (
              <div
                key={product.id}
                className="group relative rounded-3xl bg-[#0c101c]/90 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Glow accent header inside the card */}
                <div className={`h-2 w-full bg-gradient-to-r ${isLombok ? "from-cyan-400 via-blue-500 to-indigo-500" : "from-amber-400 via-orange-500 to-rose-500"}`} />

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        {product.status}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3.5 rounded-2xl ${isLombok ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}>
                        {isLombok ? <Compass className="w-7 h-7" /> : <ShieldAlert className="w-7 h-7" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Interactive Mockup / Metric Highlight Box */}
                    <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/5">
                      <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                        <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Key Metrics &amp; Performance</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(product.metrics).map(([key, val]) => (
                          <div key={key} className="bg-white/[0.03] p-2 rounded-xl border border-white/5">
                            <div className="text-xs sm:text-sm font-bold text-white">{val}</div>
                            <div className="text-[10px] text-slate-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights list */}
                    <div className="mt-6 space-y-2.5">
                      <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Fitur Inti:
                      </div>
                      {product.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isLombok ? "text-cyan-400" : "text-amber-400"}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-slate-400">
                      Tertarik membuat produk serupa?
                    </span>
                    <a
                      href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                        `Halo KuliTech! Saya tertarik dengan arsitektur produk "${product.title}" dan ingin berkonsultasi mengenai pembuatan aplikasi dengan konsep serupa.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-cyan-400" />
                      <span>Diskusi Ide Ini</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* In-House Product Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Punya Ide Aplikasi Sendiri Tapi Bingung Mulai dari Mana?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Kami siap membantu mulai dari perancangan arsitektur, koding, hingga rilis ke publik.
              </p>
            </div>
          </div>
          <a
            href="#estimator"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            Konsultasikan Idenya
          </a>
        </div>

      </div>
    </section>
  );
}
