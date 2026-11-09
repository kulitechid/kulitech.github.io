import React from "react";
import { Smartphone, Globe, Cpu, Check, ArrowRight } from "lucide-react";
import { SERVICES, CONTACT_INFO } from "../data/content";

export default function Services() {
  const iconMap = {
    Smartphone: Smartphone,
    Globe: Globe,
    Cpu: Cpu,
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070a12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>CORE SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Pembuatan Aplikasi &amp; Web
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Dari kebutuhan digitalisasi UMKM sederhana hingga platform custom dengan logika bisnis kompleks—semua dirancang dengan standar kode industri yang kokoh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            const isFeatured = index === 0; // Highlight Android Dev

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#0d1322] border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/10"
                    : "bg-[#0a0e19] border border-white/10 hover:border-white/20"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider">
                    Paling Banyak Diminati
                  </div>
                )}

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono mb-4">{service.tagline}</p>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Deliverables / Features Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Cakupan Pekerjaan:
                    </div>
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Stack Badges */}
                  <div className="pt-4 border-t border-white/10 mb-6">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <a
                    href="#estimator"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:text-white"
                  >
                    <span>Pilih Layanan Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
