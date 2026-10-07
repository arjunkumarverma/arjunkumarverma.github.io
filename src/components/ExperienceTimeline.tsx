import React, { useState } from 'react';
import { careerTimeline } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2, ChevronDown, ChevronUp, Building2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'executive' | 'grassroots' | 'academic'>('all');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'shobhit-planning-director': true,
    'state-director-nyks': true,
    'deputy-director-personnel': false,
    'asst-director-hqrs': true,
    'dyc-field': false
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = careerTimeline.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="journey" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Career Trajectory & Chronology
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-950">
              Executive Career Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
              From grassroots block youth development in Sikkim and Odisha to apex state command and national statutory planning.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Roles ({careerTimeline.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('executive')}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                filter === 'executive'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Executive NYKS
            </button>
            <button
              type="button"
              onClick={() => setFilter('grassroots')}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                filter === 'grassroots'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Grassroots Field
            </button>
            <button
              type="button"
              onClick={() => setFilter('academic')}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                filter === 'academic'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              University Planning
            </button>
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 space-y-10">
          {filteredItems.map((item) => {
            const isExpanded = !!expandedItems[item.id];
            return (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Node Bullet */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-amber-500 group-hover:scale-125 transition-transform duration-200 shadow-xs" />

                {/* Role Card */}
                <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-5 sm:p-7 hover:border-amber-300 hover:bg-white transition-all duration-200 shadow-xs">
                  
                  {/* Card Header & Unboxed Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-950">
                        {item.role}
                      </h3>
                      
                      {/* Organization & Parent Body */}
                      <div className="mt-1 text-sm font-bold text-amber-700 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{item.organization}</span>
                        {item.parentBody && (
                          <span className="text-slate-600 font-semibold hidden md:inline">
                            · {item.parentBody}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Unboxed Period & Location */}
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-x-3 gap-y-1 text-xs text-slate-600 font-semibold shrink-0">
                      <span className="flex items-center gap-1 font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  {/* Expand/Collapse Trigger */}
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Key Responsibilities & Highlights' : 'View Key Responsibilities & Highlights'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-xs text-slate-500 font-mono font-medium">
                      {item.responsibilities.length} Core Areas
                    </span>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-4 text-xs sm:text-sm">
                      
                      {/* Responsibilities */}
                      <div>
                        <div className="font-bold text-slate-950 mb-2 uppercase tracking-wider text-xs">
                          Key Administrative & Operational Responsibilities:
                        </div>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-700 font-normal">
                              <span className="text-amber-500 mt-0.5 shrink-0 font-bold">―</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Documented Achievements */}
                      {item.achievements.length > 0 && (
                        <div className="pt-2">
                          <div className="font-bold text-slate-950 mb-2 uppercase tracking-wider text-xs">
                            Documented Highlights & Outcomes:
                          </div>
                          <ul className="space-y-2">
                            {item.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-slate-800 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
