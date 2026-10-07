import React, { useState } from 'react';
import { majorProjects, ProjectItem } from '../data/portfolioData';
import { ShieldAlert, HeartPulse, Flag, Users, Waves, Sprout, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export const KeyProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'drug-abuse-prevention':
        return <ShieldAlert className="w-6 h-6 text-rose-600" />;
      case 'adolescent-development-unfpa':
        return <HeartPulse className="w-6 h-6 text-sky-600" />;
      case 'freedom-struggle-rally':
        return <Flag className="w-6 h-6 text-amber-600" />;
      case 'swarna-jayanti-sgsy':
        return <Users className="w-6 h-6 text-emerald-600" />;
      case 'namami-gange':
        return <Waves className="w-6 h-6 text-blue-600" />;
      case 'smart-tribal-farming':
        return <Sprout className="w-6 h-6 text-teal-600" />;
      default:
        return <Users className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="initiatives" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
            Nationwide Flagship Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-950">
            Major Strategic Initiatives & Interventions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Pioneered and executed high-impact public health, adolescent welfare, livelihood generation, and ecological rehabilitation schemes across India.
          </p>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {majorProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-xs"
            >
              <div>
                {/* Header Icon + Scale Unboxed Meta */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 text-right">
                    {project.period || 'Flagship'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif-display font-bold text-slate-950 leading-snug">
                  {project.title}
                </h3>

                {/* Sponsoring Ministry */}
                <div className="mt-1 text-xs font-bold text-amber-700">
                  {project.organizationOrMinistry}
                </div>

                {/* Scale Metric Line */}
                <div className="mt-3 text-xs font-bold text-slate-700">
                  Scale: <span className="text-slate-900">{project.scale}</span>
                </div>

                {/* Brief Context */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                  {project.context}
                </p>

                {/* Top Highlight bullet */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{project.impactHighlights[0]}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center justify-between transition-colors group py-1"
                >
                  <span>Read Detailed Impact Briefing</span>
                  <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-900">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div>
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {selectedProject.organizationOrMinistry}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-950 mt-1">
                  {selectedProject.title}
                </h3>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Role: <span className="font-bold text-slate-950">{selectedProject.role}</span> · {selectedProject.scale}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider mb-2">
                  Context & Objectives:
                </h4>
                <p className="leading-relaxed font-normal text-slate-700">
                  {selectedProject.context}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider mb-2">
                  Documented Impact & Quantitative Outcomes:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.impactHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-normal text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider mb-1">
                  Operational Architecture:
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {selectedProject.details}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
              >
                Close Briefing
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
