import React, { useState } from "react";
import { 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Zap,
  Code2
} from "lucide-react";
import { CONTACT_INFO } from "../data/content";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("android");

  const terminalTabs = {
    android: {
      title: "Android Architecture",
      icon: Smartphone,
      code: `// KuliTech Android Engine (Modern & Resilient)
class KuliTechApp : CleanArchitecture() {
    val ui = JetpackCompose(dynamicTheme = true)
    val state = StateFlow(offlineFirst = true)
    val performance = Optimized(fps = 60, batteryFriendly = true)
    
    fun buildReliableProduct() {
        deployTo(GooglePlayStore.PRODUCTION)
    }
}`,
      accent: "text-cyan-400",
      tag: "Kotlin + Compose",
    },
    web: {
      title: "Web Architecture",
      icon: Globe,
      code: `// KuliTech Web Engine (High Conversion & Ultra Fast)
const webProject = {
  stack: ["React 19", "Tailwind CSS", "Vite"],
  metrics: {
    lighthouseScore: 98,
    loadTime: "< 0.8s",
    seoOptimized: true,
  },
  delivery: "Zero headache deployment to Cloud/Pages"
};`,
      accent: "text-blue-400",
      tag: "React + Tailwind",
    },
    craft: {
      title: "Philosophy",
      icon: Code2,
      code: `/* Filosofi KuliTech */
"Kami kuli kodenya. Anda pemilik aset digitalnya."
✓ Kode bersih tanpa keterikatan rahasia (No Vendor Lock-in)
✓ Arsitektur kokoh tahan banting dari fondasi
✓ Pendampingan transparan dari konsep hingga rilis`,
      accent: "text-amber-400",
      tag: "Craftsmanship",
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background radial spotlight and grid pattern */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none"></div>
      <div className="absolute inset-0 grid-background opacity-40 pointer-events-none"></div>

      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Call To Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-cyan-300 mb-6 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-medium">Software Studio & App Builder</span>
              <span className="text-white/30">•</span>
              <span className="text-slate-300">Android & Web Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Bangun Aplikasi &amp; Website{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Tangguh dari Nol.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-white font-semibold">KuliTech</strong> membantu UMKM, founder startup, dan individu mewujudkan produk digital berkualitas tinggi—dari aplikasi Android siap rilis Play Store hingga website modern yang cepat dan mendongkrak penjualan.
            </p>

            {/* Quick Benefit Tags */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Tanpa Vendor Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Ramah UMKM &amp; Individu</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Hitung Estimasi Proyek</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:text-white transition-all hover:border-white/20"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Jelajahi Produk Kami</span>
              </a>
            </div>

            {/* Contact quick helper */}
            <p className="mt-4 text-xs text-slate-400 text-center lg:text-left">
              Ingin langsung mengobrol? Hubungi WhatsApp tim kami di{" "}
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Halo KuliTech! Saya ingin konsultasi proyek.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-mono"
              >
                {CONTACT_INFO.whatsapp}
              </a>
            </p>
          </div>

          {/* Right Column: Interactive Code Terminal / Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle background glow behind the card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* The Terminal Container */}
              <div className="relative rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#080b12] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      kulitech-core v1.0
                    </span>
                  </div>

                  {/* Interactive Status Indicator */}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
                    {terminalTabs[activeTab].tag}
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center border-b border-white/[0.06] bg-[#0d121f]/60 px-2 py-1.5 gap-1">
                  {Object.entries(terminalTabs).map(([key, data]) => {
                    const Icon = data.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activeTab === key
                            ? "bg-white/10 text-white shadow-sm border border-white/10"
                            : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{data.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Code Window Content */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-[#07090f]/90 overflow-x-auto min-h-[220px]">
                  <pre className="whitespace-pre">
                    <code>{terminalTabs[activeTab].code}</code>
                  </pre>
                </div>

                {/* Window Bottom Bar (Live Stats) */}
                <div className="px-4 py-2.5 bg-[#0a0e18] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Performa Tinggi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Siap Produksi</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
