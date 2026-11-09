import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Services from "./components/Services";
import ProjectEstimator from "./components/ProjectEstimator";
import WhyUs from "./components/WhyUs";
import Workflow from "./components/Workflow";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <Services />
        <ProjectEstimator />
        <WhyUs />
        <Workflow />
        <FAQ />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
