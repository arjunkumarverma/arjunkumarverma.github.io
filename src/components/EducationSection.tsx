import React, { useState } from 'react';
import { educationList, advancedTrainings, skillGroups, certificationsList } from '../data/portfolioData';
import { GraduationCap, Award, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'trainings' | 'skills'>('education');

  return (
    <section id="credentials" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Academic Foundation & Professional Accreditations
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-950">
              Education, IICA Certification & Pedagogy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
              Doctoral botany credentials, statutory certifications from IICA (Ministry of Corporate Affairs), and executive training from premier national institutions.
            </p>
          </div>

          {/* Tab Switcher (Buttons) */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold self-start md:self-auto flex-wrap gap-1 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                activeTab === 'education'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Academic Degrees
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('certifications')}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'certifications'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>IICA Certification</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('trainings')}
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                activeTab === 'trainings'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Executive Trainings
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('skills')}
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                activeTab === 'skills'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Core Competencies
            </button>
          </div>
        </div>

        {/* Tab 1: Academic Degrees */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 hover:border-amber-300 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-3 bg-amber-50 text-amber-700 rounded-xl border border-amber-200/60">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-sm font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-xl font-serif-display font-bold text-slate-950">
                  {edu.degree}
                </h3>

                <div className="mt-1 text-sm font-bold text-slate-700">
                  {edu.institution}
                </div>

                {edu.specialization && (
                  <div className="mt-3 text-xs sm:text-sm text-amber-700 font-bold">
                    Specialization: {edu.specialization}
                  </div>
                )}

                {edu.honors && (
                  <div className="mt-1 text-xs sm:text-sm text-emerald-700 font-bold">
                    {edu.honors}
                  </div>
                )}

                {edu.guideOrNotes && (
                  <p className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {edu.guideOrNotes}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: IICA & Certifications (LinkedIn Verified) */}
        {activeTab === 'certifications' && (
          <div className="space-y-6">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 rounded-2xl border-2 border-amber-300 p-6 sm:p-8 shadow-sm relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left Column: Cert Info */}
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                      <ShieldCheck className="w-4 h-4 text-amber-600" />
                      <span>{cert.issuingAuthority}</span>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span>{cert.ministryOrBody}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-slate-950 leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {cert.description}
                    </p>

                    {/* Focus / Core Curriculum */}
                    <div className="pt-3 border-t border-slate-200">
                      <div className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-2">
                        Institutional Domains Covered:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                        {cert.topics.map((tpc, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{tpc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Credential Badge Card */}
                  <div className="bg-white p-5 rounded-xl border border-amber-200 shrink-0 space-y-3 lg:w-72 shadow-xs">
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Credential Details
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Issuing Body</div>
                      <div className="text-sm font-bold text-slate-950">IICA, Manesar</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Ministry</div>
                      <div className="text-xs font-semibold text-slate-800">
                        Ministry of Corporate Affairs (Govt. of India)
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Collaborator</div>
                      <div className="text-xs font-semibold text-slate-800">
                        IEPFA & Nehru Yuva Kendra Sangathan
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Completion</span>
                      <span className="font-bold text-amber-700 font-mono">{cert.year}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Executive Trainings */}
        {activeTab === 'trainings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advancedTrainings.map((trn) => (
              <div
                key={trn.id}
                className="bg-slate-50/80 rounded-xl border border-slate-200 p-5 hover:border-amber-300 hover:bg-white transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider mb-1">
                    {trn.domain}
                  </div>
                  <h4 className="text-base font-serif-display font-bold text-slate-950 leading-snug">
                    {trn.program}
                  </h4>
                  <div className="mt-2 text-xs sm:text-sm font-bold text-slate-700">
                    {trn.institution}
                  </div>
                </div>

                {trn.durationOrDetails && (
                  <p className="mt-3 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {trn.durationOrDetails}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Core Competencies */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((grp, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-serif-display font-bold text-slate-950">
                    {grp.category}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 font-normal">
                  {grp.description}
                </p>

                {/* Unboxed Skill Items with Typographic Dividers */}
                <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm">
                  {grp.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 font-semibold text-slate-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
