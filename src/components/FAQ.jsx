import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data/content";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden bg-[#07090e] border-t border-white/5"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Hal-hal mendasar yang biasa ditanyakan calon mitra sebelum memulai kerja sama dengan KuliTech.
          </p>
        </div>

        {/* Semantic Accordion List using native <details name="faq-item"> and <summary> */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              name="faq-item"
              className="faq-item group rounded-2xl bg-[#0b0f19] border border-white/10 overflow-hidden transition-all duration-200 open:border-cyan-500/30 open:bg-[#0c111e]"
              open={idx === 0}
            >
              <summary className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] cursor-pointer select-none">
                <span className="text-sm sm:text-base font-semibold text-white group-open:text-cyan-300 transition-colors">
                  {faq.q}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-200 text-slate-400 group-open:rotate-180 group-open:bg-cyan-500/20 group-open:text-cyan-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </summary>

              <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-[#080b12]/60">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
