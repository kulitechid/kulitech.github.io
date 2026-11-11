import React from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  FileText,
  HeartPulse,
  Mail,
  Printer,
  Scale,
  ShieldCheck,
  Tag,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { KANGURU_SIAGA_META } from "../data/kanguruSiagaLegal";

function renderInlineSegments(segments) {
  return segments.map((seg, idx) => {
    if (typeof seg === "string") {
      return <React.Fragment key={idx}>{seg}</React.Fragment>;
    }
    if (seg.mailto) {
      return (
        <a
          key={idx}
          href={`mailto:${seg.mailto}`}
          className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400/50 transition-colors font-mono text-xs sm:text-sm"
        >
          {seg.mailto}
        </a>
      );
    }
    if (seg.link) {
      return (
        <a
          key={idx}
          href={seg.link.href}
          className="text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-amber-400/50 transition-colors font-medium"
        >
          {seg.link.label}
        </a>
      );
    }
    if (seg.code) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs break-words"
        >
          {seg.code}
        </code>
      );
    }
    if (seg.bold && seg.italic) {
      return (
        <strong key={idx} className="font-semibold italic text-white">
          {seg.bold}
        </strong>
      );
    }
    if (seg.bold) {
      return (
        <strong key={idx} className="font-semibold text-white">
          {seg.bold}
        </strong>
      );
    }
    if (seg.italic) {
      return (
        <em key={idx} className="italic text-slate-200">
          {seg.italic}
        </em>
      );
    }
    return null;
  });
}

function ContactDetailsCard() {
  return (
    <div className="mt-4 rounded-2xl bg-[#070a12] border border-white/10 p-5 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Nama Aplikasi
          </div>
          <div className="mt-1 font-semibold text-white">
            {KANGURU_SIAGA_META.appName}
          </div>
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Pengembang (Akun Google Play Console)
          </div>
          <div className="mt-1 font-semibold text-white">
            {KANGURU_SIAGA_META.developer}
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Email Dukungan &amp; Pelindungan Data
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
            {KANGURU_SIAGA_META.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400/50 transition-colors font-mono text-xs sm:text-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{email}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Tautan Publik Kebijakan Privasi
          </div>
          <a
            href={KANGURU_SIAGA_META.privacyPolicyUrl}
            className="mt-1 inline-block text-xs font-mono text-amber-300 hover:underline break-all"
          >
            https://kulitech.my.id{KANGURU_SIAGA_META.privacyPolicyUrl}
          </a>
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Tautan Publik Ketentuan Penggunaan
          </div>
          <a
            href={KANGURU_SIAGA_META.termsOfUseUrl}
            className="mt-1 inline-block text-xs font-mono text-amber-300 hover:underline break-all"
          >
            https://kulitech.my.id{KANGURU_SIAGA_META.termsOfUseUrl}
          </a>
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Kategori Aplikasi
          </div>
          <div className="mt-1 text-slate-200">{KANGURU_SIAGA_META.category}</div>
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Wilayah Hukum
          </div>
          <div className="mt-1 text-slate-200">
            {KANGURU_SIAGA_META.jurisdiction}
          </div>
        </div>
      </div>
    </div>
  );
}

function NestedList({ list }) {
  const ListTag = list.ordered ? "ol" : "ul";
  return (
    <ListTag
      className={`mt-2.5 space-y-2 pl-5 text-slate-300 ${
        list.ordered
          ? "list-decimal marker:text-amber-400"
          : "list-disc marker:text-slate-400"
      }`}
    >
      {list.items.map((item, idx) => (
        <li key={idx} className="pl-1">
          <div>{renderInlineSegments(item.content)}</div>
          {item.subList && <NestedList list={item.subList} />}
        </li>
      ))}
    </ListTag>
  );
}

function SectionBlock({ block }) {
  if (block.type === "subheading") {
    return (
      <h3 className="pt-2 text-sm sm:text-base font-bold text-amber-200 tracking-tight">
        {block.title}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
        {renderInlineSegments(block.content)}
      </p>
    );
  }

  if (block.type === "warning") {
    return (
      <div className="rounded-2xl bg-rose-500/10 border border-rose-500/35 p-5 sm:p-6 shadow-lg shadow-rose-950/20">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-300 flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-rose-200 tracking-wide leading-snug">
              {block.title}
            </h3>
            {block.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-sm text-rose-100/90 leading-relaxed"
              >
                {renderInlineSegments(p)}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag
        className={`space-y-3 text-sm sm:text-[15px] text-slate-300 leading-relaxed ${
          block.ordered
            ? "list-decimal pl-5 marker:text-amber-400 marker:font-semibold"
            : "list-disc pl-5 marker:text-cyan-400"
        }`}
      >
        {block.items.map((item, idx) => (
          <li key={idx} className="pl-1.5">
            <div>{renderInlineSegments(item.content)}</div>
            {item.subList && <NestedList list={item.subList} />}
            {item.afterText && (
              <p className="mt-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-100 text-sm leading-relaxed">
                {renderInlineSegments(item.afterText)}
              </p>
            )}
          </li>
        ))}
      </ListTag>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#070a12]">
        <table
          className={`w-full text-left border-collapse ${
            block.minWidthClass || "min-w-[580px]"
          }`}
        >
          <thead>
            <tr className="bg-white/[0.04] border-b border-white/10">
              {block.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="py-3.5 px-4 text-xs font-mono font-semibold uppercase tracking-wider text-amber-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.07]">
            {block.rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-white/[0.02] transition-colors align-top"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`py-3.5 px-4 text-xs sm:text-sm leading-relaxed ${
                      cIdx === 0 ? "text-white font-medium" : "text-slate-300"
                    }`}
                  >
                    {renderInlineSegments(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "contactCard") {
    return <ContactDetailsCard />;
  }

  return null;
}

export default function LegalDocumentLayout({ documentData }) {
  const isPrivacy = documentData.id === "privacy-policy";
  const DocIcon = isPrivacy ? ShieldCheck : FileText;

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <div className="print:hidden">
        <Navbar isHome={false} titleText="KANGURU SIAGA" />
      </div>

      <main className="flex-1 relative pt-28 sm:pt-32 pb-20 overflow-hidden print:pt-4 print:pb-8">
        {/* Background Ambient Effects */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none print:hidden" />
        <div className="absolute inset-0 grid-background opacity-30 pointer-events-none print:hidden" />
        <div className="absolute top-24 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none print:hidden" />
        <div className="absolute top-60 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none print:hidden" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumb & Switcher */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 print:hidden">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400"
            >
              <a
                href="/"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>KuliTech</span>
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-slate-300">Kanguru Siaga</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-amber-300 font-medium">
                {isPrivacy ? "Privacy Policy" : "Terms of Use"}
              </span>
            </nav>

            {/* Companion Page Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-[#0c101c] border border-white/10 self-start md:self-auto">
              <a
                href={KANGURU_SIAGA_META.privacyPolicyUrl}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isPrivacy
                    ? "bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Privacy Policy
              </a>
              <a
                href={KANGURU_SIAGA_META.termsOfUseUrl}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  !isPrivacy
                    ? "bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Terms of Use
              </a>
            </div>
          </div>

          {/* Document Header Card */}
          <section className="rounded-3xl bg-[#0b0f19]/95 border border-white/10 overflow-hidden shadow-2xl mb-10">
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-rose-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                    <DocIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-mono text-amber-300 mb-3">
                      <HeartPulse className="w-3.5 h-3.5" />
                      <span>{documentData.badge}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {documentData.title}
                    </h1>
                    <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                      {documentData.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 print:hidden">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:text-white transition-all cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-cyan-400" />
                    <span>Cetak / Simpan PDF</span>
                  </button>
                </div>
              </div>

              {/* Document Metadata Grid */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
                    <span>Aplikasi &amp; Pengembang</span>
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-white">
                    {KANGURU_SIAGA_META.appName} — {KANGURU_SIAGA_META.developer}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tanggal Berlaku</span>
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-white">
                    {KANGURU_SIAGA_META.effectiveDate}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    <Tag className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Versi &amp; Email Resmi</span>
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-white font-mono">
                    v{KANGURU_SIAGA_META.version}
                  </div>
                  <a
                    href={`mailto:${KANGURU_SIAGA_META.emails[0]}`}
                    className="mt-0.5 inline-block text-xs font-mono text-amber-300 hover:underline"
                  >
                    {KANGURU_SIAGA_META.emails[0]}
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    <Scale className="w-3.5 h-3.5 text-rose-400" />
                    <span>Status Kepatuhan</span>
                  </div>
                  <div className="mt-1.5 text-xs font-medium text-slate-200 leading-snug">
                    {KANGURU_SIAGA_META.compliance}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Two-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar: Table of Contents */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 space-y-5 print:hidden">
              <div className="rounded-2xl bg-[#0b0f19]/90 border border-white/10 p-5">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-300 mb-3.5">
                  Daftar Isi
                </div>
                <nav aria-label="Daftar Isi Dokumen">
                  <ul className="space-y-1.5">
                    {documentData.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-xs sm:text-[13px] text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors group"
                        >
                          <span className="font-mono text-[11px] text-amber-400/90 mt-0.5 flex-shrink-0">
                            {section.number.padStart(2, "0")}.
                          </span>
                          <span className="leading-snug group-hover:text-amber-200 transition-colors">
                            {section.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Companion Document Quick Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0d1322] to-[#0b0f19] border border-white/10 p-5">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  Dokumen Terkait
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Ketentuan Penggunaan dan Kebijakan Privasi Kanguru Siaga merupakan satu kesatuan yang saling melengkapi.
                </p>
                <a
                  href={documentData.companionLink.href}
                  className="w-full inline-flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-300 hover:from-amber-300 hover:to-orange-200 transition-all"
                >
                  <span>{documentData.companionLink.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              </div>
            </aside>

            {/* Main Legal Article */}
            <article className="lg:col-span-8 xl:col-span-9 space-y-6">
              {/* Intro Card */}
              <div className="rounded-2xl bg-[#0b0f19]/90 border border-white/10 p-6 sm:p-8 space-y-3">
                {documentData.intro.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-slate-200 leading-relaxed"
                  >
                    {renderInlineSegments(para)}
                  </p>
                ))}
              </div>

              {/* Numbered Sections */}
              {documentData.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-2xl bg-[#0b0f19]/90 border border-white/10 p-6 sm:p-8 space-y-4"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08]">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold flex-shrink-0">
                      {section.number.padStart(2, "0")}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {section.blocks.map((block, bIdx) => (
                      <SectionBlock key={bIdx} block={block} />
                    ))}
                  </div>
                </section>
              ))}

              {/* Closing Notice */}
              <div className="rounded-2xl bg-gradient-to-r from-cyan-950/30 via-[#0b0f19] to-amber-950/30 border border-white/10 p-6 sm:p-7">
                <p className="text-xs sm:text-sm italic text-slate-300 leading-relaxed">
                  {documentData.closing}
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer isHome={false} />
      </div>
    </div>
  );
}
