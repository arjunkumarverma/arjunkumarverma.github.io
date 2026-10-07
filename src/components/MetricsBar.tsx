import React from 'react';
import { keyMetrics } from '../data/portfolioData';
import { FileCheck2 } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
            Quantifiable Public Service & Nationwide Reach
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-slate-950">
            Documented Career Milestones & Social Impact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
            Metrics rigorously authenticated from official service records across 33+ years under the Government of India.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {keyMetrics.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/90 hover:border-amber-300 hover:bg-white transition-all duration-200 shadow-xs group"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-serif-display tracking-tight text-amber-600 tabular-nums">
                  {item.value}
                </span>
                <span className="text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-1 font-semibold">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </span>
              </div>

              <div className="mt-2 text-base font-bold text-slate-950">
                {item.label}
              </div>

              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-normal">
                {item.context}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 font-mono font-medium">
                Record: {item.sourceDoc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
