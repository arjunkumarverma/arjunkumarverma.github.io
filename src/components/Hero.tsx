import React, { useState } from 'react';
import { Download, ExternalLink, ArrowDown, ShieldCheck, Mail, MapPin, Award } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const [imgError, setImgError] = useState(false);

  // Directly references the photo URL configured in src/data/portfolioData.ts
  const photoSource = profileData.photoUrl;

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-amber-50/50 via-slate-50 to-white text-slate-900 border-b border-slate-200/80">
      {/* Background Subtle Ambient Youthful Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typographic Positioning & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Eyebrow */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700">
              <span>Nehru Yuva Kendra Sangathan</span>
              <span aria-hidden="true" className="text-amber-500 font-bold">·</span>
              <span>Ministry of Youth Affairs & Sports</span>
              <span aria-hidden="true" className="text-amber-500 font-bold">·</span>
              <span>Govt. of India</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-display tracking-tight text-slate-950 leading-tight">
                {profileData.name}
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl font-serif-display font-medium text-emerald-800 leading-snug">
                Ph.D. in Botany (Flora &amp; Vegetation of South District of Sikkim Himalaya)
              </div>
            </div>

            {/* Sub points below the name */}
            <div className="pt-1">
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2.5 text-slate-800">
                  <span className="text-amber-500 font-bold mt-1 text-base leading-none">•</span>
                  <span className="font-semibold text-slate-950">
                    IICA Certified Independent Director <span className="font-normal text-slate-600">(Ministry of Corporate Affairs, GOI)</span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-800">
                  <span className="text-amber-500 font-bold mt-1 text-base leading-none">•</span>
                  <span className="font-semibold text-slate-950">
                    Member IUCN-CEC
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-800">
                  <span className="text-amber-500 font-bold mt-1 text-base leading-none">•</span>
                  <span className="font-semibold text-slate-950">
                    Director of Planning <span className="font-normal text-slate-600">(Shobhit University)</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Authoritative Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              {profileData.positioningStatement}
            </p>

            {/* Key Unboxed Trust Markers */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs hover:border-amber-300 transition-all">
                <span className="block text-slate-950 font-bold text-base sm:text-lg tabular-nums">33+ Years</span>
                <span className="text-slate-600 font-medium">MY Bharat (NYKS)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs hover:border-amber-300 transition-all">
                <span className="block text-slate-950 font-bold text-base sm:text-lg tabular-nums">4 Years</span>
                <span className="text-slate-600 font-medium">Shobhit University</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs hover:border-amber-300 transition-all">
                <span className="block text-slate-950 font-bold text-base sm:text-lg tabular-nums">1.17 Cr+</span>
                <span className="text-slate-600 font-medium">Citizens Reached</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs hover:border-amber-300 transition-all">
                <span className="block text-amber-700 font-bold text-base sm:text-lg">IICA Certified</span>
                <span className="text-slate-600 font-medium">Min. of Corp. Affairs</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#journey"
                className="px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors flex items-center gap-2 shadow-xs whitespace-nowrap"
              >
                <span>Explore Career Journey</span>
                <ArrowDown className="w-4 h-4 text-amber-600" />
              </a>

              <button
                type="button"
                onClick={onOpenCVModal}
                className="px-5 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 rounded-lg transition-colors flex items-center gap-2 shadow-xs whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV</span>
              </button>

              <a
                href={profileData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 bg-white border border-blue-200 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              </a>

              <a
                href="#contact"
                className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 bg-white border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>Contact</span>
              </a>
            </div>

          </div>

          {/* Right Column: Executive Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-200 shadow-xl">
              
              {/* Image Frame */}
              <div className="relative aspect-4/5 sm:aspect-square overflow-hidden rounded-xl bg-slate-100 border border-slate-200 group">
                <img
                  src={photoSource}
                  alt="Dr. Arjun Kumar Verma, Ph.D"
                  onError={() => setImgError(true)}
                  className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                    imgError ? 'hidden' : 'block'
                  }`}
                />

                {/* Dignified Executive Fallback (No File Input) */}
                {imgError && (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-amber-50/70 via-slate-50 to-emerald-50/70">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-amber-800 text-3xl sm:text-4xl font-serif-display font-bold mb-3 shadow-sm">
                      AV
                    </div>
                    <div className="font-serif-display text-xl sm:text-2xl font-bold text-slate-950 tracking-wide">
                      Dr. Arjun Kumar Verma
                    </div>
                    <div className="text-xs sm:text-sm text-emerald-800 font-bold mt-1">
                      Doctor of Philosophy (Botany)
                    </div>
                    <div className="text-xs text-slate-700 mt-2 font-normal max-w-xs leading-relaxed space-y-1">
                      <div>• IICA Certified Independent Director (MCA, GOI)</div>
                      <div>• Member IUCN-CEC</div>
                      <div>• Director of Planning (Shobhit University)</div>
                    </div>
                  </div>
                )}

                {/* Executive Credential Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent p-4 pt-10 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-300 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      Doctoral Scholar & Executive
                    </span>
                    <span className="text-slate-200 font-medium">Govt. of India</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1 truncate font-medium">
                    Guide: Dr. M.P. Nayar (Former Dir., Botanical Survey of India)
                  </div>
                </div>
              </div>

              {/* Photo Caption & Location */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>New Delhi / Ghaziabad, India</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-950 font-bold">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ph.D (2005) · IICA</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
