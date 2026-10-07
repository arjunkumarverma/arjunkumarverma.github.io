import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { KeyProjects } from './components/KeyProjects';
import { ResearchAndBotany } from './components/ResearchAndBotany';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      } catch {
        return false;
      }
    }
    return false;
  });

  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch {
      // Safe fallback if localStorage is blocked
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans-body selection:bg-amber-300 selection:text-slate-950">
      {/* Primary Sticky Top Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCVModal={() => setCvModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* Executive Hero */}
        <Hero onOpenCVModal={() => setCvModalOpen(true)} />

        {/* Quantified Impact Bar */}
        <MetricsBar />

        {/* Executive Narrative & Philosophy */}
        <AboutSection />

        {/* Career Journey Timeline */}
        <ExperienceTimeline />

        {/* Flagship Projects & Interventions */}
        <KeyProjects />

        {/* Scientific Scholarship & Himalayan Botany */}
        <ResearchAndBotany />

        {/* Academic Credentials, Trainings & Skills */}
        <EducationSection />

        {/* Professional Contact & Communication */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive & Printable CV Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
