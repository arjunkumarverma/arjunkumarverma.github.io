import React from 'react';
import { profileData, professionalPhilosophy } from '../data/portfolioData';
import { BookOpen, Compass, Languages, Shield, Trees } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="biography" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
            Executive Biography & Leadership Ethos
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-950">
            Uniting Botanical Inquiry with Grassroots Nation Building
          </h2>
          <div className="mt-3 w-16 h-1 bg-amber-500 rounded-full" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6 text-slate-800 leading-relaxed text-base sm:text-lg font-normal">
            {profileData.bioParagraphs.map((para, index) => (
              <p key={index} className="text-justify leading-relaxed">
                {para}
              </p>
            ))}

            {/* Multilingual Facility Line */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-950 mb-2">
                <Languages className="w-4 h-4 text-amber-600" />
                <span>Multilingual Operational Proficiency</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Fluent across administrative regions spanning North, East, and North-East India:
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-slate-900">
                {profileData.languages.map((lang, idx) => (
                  <React.Fragment key={lang}>
                    <span>{lang}</span>
                    {idx < profileData.languages.length - 1 && (
                      <span aria-hidden="true" className="text-amber-500 font-bold">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Academic Pedigree Seal */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs">
              <div className="p-3 bg-amber-50 text-amber-700 rounded-xl shrink-0 border border-amber-200/60">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-950">
                  Ph.D. in Botany & Flora of South Sikkim Himalaya
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Researched under the guidance of <span className="font-semibold text-slate-900">Dr. M. P. Nayar</span>, former Director, Botanical Survey of India (Ministry of Environment & Forests). Combining scientific taxonomy with high-altitude Himalayan conservation.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Philosophy & Principles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Philosophy Box */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-amber-200/90 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
                <Compass className="w-4 h-4" />
                <span>Guiding Leadership Philosophy</span>
              </div>

              <blockquote className="font-serif-display text-lg sm:text-xl text-slate-950 italic leading-snug border-l-4 border-amber-500 pl-4 py-1 font-semibold">
                "{professionalPhilosophy.quote}"
              </blockquote>

              <div className="mt-6 space-y-4">
                {professionalPhilosophy.principles.map((principle, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                      <span className="text-amber-600 font-mono text-xs font-bold">
                        0{idx + 1}.
                      </span>
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5 font-normal">
                      {principle.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Quick Pillars Overview */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <Shield className="w-5 h-5 text-sky-600 mb-2" />
                <span className="font-bold text-slate-950 block text-sm">SOP Governance</span>
                <span className="text-slate-600 leading-normal mt-0.5 block">National action plans across 500 kendras</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <Trees className="w-5 h-5 text-emerald-600 mb-2" />
                <span className="font-bold text-slate-950 block text-sm">Environmental Botany</span>
                <span className="text-slate-600 leading-normal mt-0.5 block">Sacred groves & Himalayan conservation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
