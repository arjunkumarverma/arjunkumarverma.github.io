import React from 'react';
import { profileData } from '../data/portfolioData';
import { ArrowUp, ExternalLink, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Wordmark & Bio summary */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-serif-display font-bold text-white">
                Dr. Arjun Kumar Verma, Ph.D
              </span>
              <span className="text-amber-400 font-mono text-xs">· Retd. State Director NYKS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Over 33 years of distinguished public service under the Ministry of Youth Affairs & Sports, Government of India. Synthesis of botanical science, public policy execution, and nationwide grassroots institution building.
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs font-semibold text-slate-200">
              <a
                href={profileData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <span>Email</span>
                <Mail className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#overview" className="hover:text-amber-400 transition-colors">Executive Overview</a>
              </li>
              <li>
                <a href="#biography" className="hover:text-amber-400 transition-colors">Biography & Ethos</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber-400 transition-colors">Career Timeline</a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-amber-400 transition-colors">Major Initiatives</a>
              </li>
              <li>
                <a href="#research" className="hover:text-amber-400 transition-colors">Himalayan Botanical Research</a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-amber-400 transition-colors">Education, IICA & Trainings</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Information</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Back to Top & Deployment info */}
          <div className="md:col-span-3 space-y-3 flex flex-col items-start md:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Back to Top</span>
            </button>
            <div className="text-[11px] text-slate-500 md:text-right">
              Static Build · GitHub Pages Ready
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Dr. Arjun Kumar Verma, Ph.D. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Authored from authenticated public records and service documents.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
