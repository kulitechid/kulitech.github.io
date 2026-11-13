import React from "react";
import { GitBranch, Compass, Code2, Rocket } from "lucide-react";
import { WORKFLOW } from "../data/content";

export default function Workflow() {
  const icons = [Compass, GitBranch, Code2, Rocket];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-[#070a12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Alur Pengerjaan Transparan &amp; Terstruktur
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Setiap proyek dikerjakan secara sistematis. Anda selalu mengetahui progres terkini tanpa ada bagian yang ditutup-tutupi.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW.map((item, index) => {
            const Icon = icons[index] || Code2;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-[#0b0f19] border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-extrabold text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <span>Tahap {index + 1} dari 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
