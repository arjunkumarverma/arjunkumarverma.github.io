import React from 'react';
import { publicationsList } from '../data/portfolioData';
import { Leaf, Trees, Award, Microscope } from 'lucide-react';

export const ResearchAndBotany: React.FC = () => {
  return (
    <section id="research" className="py-16 sm:py-24 bg-emerald-50/25 border-b border-emerald-100/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
            Doctoral Scholarship & Ecological Science
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-950">
            Botanical Research & Himalayan Floristics
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
            A 5-year dedicated scientific research tenure under the University Grants Commission (UGC) and Botanical Survey of India (BSI), exploring high-altitude biodiversity and environmental pollution.
          </p>
        </div>

        {/* Highlight Doctoral Dissertation Feature Box */}
        <div className="mb-12 p-6 sm:p-8 bg-white rounded-2xl border border-emerald-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <Microscope className="w-4 h-4 text-emerald-600" />
                <span>Doctoral Dissertation (Ph.D. in Botany, 2005)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-slate-950">
                “Flora and Vegetation of South Sikkim Himalaya”
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Conducted under the direct mentorship and academic guidance of <span className="font-bold text-slate-950">Dr. M. P. Nayar</span>, former Director, Botanical Survey of India (Ministry of Environment & Forests, Govt. of India), Kolkata. Conferred by B. R. Ambedkar Bihar University.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-semibold text-slate-700 pt-3 border-t border-slate-200">
                <span>Fieldwork: High-Altitude South Sikkim</span>
                <span aria-hidden="true" className="text-emerald-600">·</span>
                <span>Taxonomic Classification</span>
                <span aria-hidden="true" className="text-emerald-600">·</span>
                <span>Ecological Stratification</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-emerald-50/70 p-5 rounded-xl border border-emerald-200/80 shadow-xs space-y-3">
              <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Scientific Memberships</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-800 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-950">Member, IUCN-CEC (Education & Communication)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>Indian Science Congress Association</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>Indian Botanical Conference</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>Sikkim Science Society</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Publications Grid */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Documented Scientific Publications & Communications
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {publicationsList.map((pub, idx) => (
              <div
                key={pub.id}
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors flex items-start gap-4 shadow-xs"
              >
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg shrink-0 mt-0.5 border border-emerald-100">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-emerald-800">
                    0{idx + 1} · {pub.type}
                  </div>
                  <h4 className="text-base font-serif-display font-bold text-slate-950 leading-snug">
                    {pub.title}
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-600">
                    {pub.context}
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Domain: {pub.domain}
                  </div>
                </div>
              </div>
            ))}

            {/* Sacred Groves Symposium Feature */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors flex items-start gap-4 shadow-xs">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg shrink-0 mt-0.5 border border-emerald-100">
                <Trees className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-emerald-800">
                  Special Symposium Presentation
                </div>
                <h4 className="text-base font-serif-display font-bold text-slate-950 leading-snug">
                  Sacred Groves of Sikkim Himalaya
                </h4>
                <div className="text-xs sm:text-sm text-slate-600">
                  Presented under <span className="font-semibold text-slate-950">Prof. Madhav Gadgil</span>, Director, Centre for Ecological Sciences, Indian Institute of Science (IISc), Bangalore.
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  Domain: Traditional Ethnobotany & High-Altitude Ecology
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
