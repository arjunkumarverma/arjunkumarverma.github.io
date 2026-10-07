import React from 'react';
import { X, Printer, Download, ExternalLink, GraduationCap, Building2, BookOpen } from 'lucide-react';
import { profileData, careerTimeline, educationList, publicationsList, advancedTrainings } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in no-print-overlay">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col border border-slate-300">
        
        {/* Top Action Bar */}
        <div className="no-print p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-serif-display font-bold text-base sm:text-lg">
              Official Curriculum Vitae Dossier
            </span>
            <span className="text-xs bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-mono font-semibold hidden sm:inline">
              Govt. Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href="./documents/Dr_Arjun_Kumar_Verma_CV.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Clean Tab</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 text-slate-400 hover:text-white rounded transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-serif text-slate-900 leading-relaxed text-sm print-page">
          
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-slate-900 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase font-serif-display text-slate-950">
              Dr. Arjun Kumar Verma, Ph.D
            </h1>
            <div className="text-sm font-semibold text-slate-700 mt-1">
              Retired State Director, Nehru Yuva Kendra Sangathan, Haryana & Himachal Pradesh<br />
              (Ministry of Youth Affairs and Sports, Govt. of India)
            </div>
            <div className="text-xs text-slate-600 mt-2 font-sans flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>Official Correspondence: {profileData.contact.email}</span>
              <span>·</span>
              <span>Location: {profileData.contact.location}</span>
            </div>
          </div>

          {/* Education Table */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
              Educational Qualifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-left border-y border-slate-300">
                    <th className="p-2 font-bold">Degree / Examination</th>
                    <th className="p-2 font-bold">Specialization & Notes</th>
                    <th className="p-2 font-bold">University / Institution</th>
                    <th className="p-2 font-bold">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {educationList.map((edu) => (
                    <tr key={edu.id}>
                      <td className="p-2 font-semibold">{edu.degree}</td>
                      <td className="p-2 text-slate-700">
                        {edu.specialization || 'Botany'}
                        {edu.guideOrNotes && (
                          <div className="text-[11px] text-slate-500 mt-0.5">{edu.guideOrNotes}</div>
                        )}
                      </td>
                      <td className="p-2">{edu.institution}</td>
                      <td className="p-2 font-mono font-medium">{edu.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
              Executive & Administrative Experience (33+ Years)
            </h2>
            <div className="space-y-4">
              {careerTimeline.map((item) => (
                <div key={item.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-slate-950 text-sm">
                    <span>{item.role}</span>
                    <span className="font-mono text-xs text-slate-600 font-normal">{item.period}</span>
                  </div>
                  <div className="font-semibold text-slate-700 italic">
                    {item.organization} {item.parentBody && `(${item.parentBody})`} · {item.location}
                  </div>
                  <p className="mt-1 text-slate-700 leading-normal">
                    {item.summary}
                  </p>
                  <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-600 pl-2">
                    {item.responsibilities.slice(0, 3).map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
              Botanical Research & Scientific Publications
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-slate-700 pl-2">
              {publicationsList.map((pub) => (
                <li key={pub.id}>
                  <strong>{pub.title}</strong> — {pub.context}
                </li>
              ))}
              <li>
                <strong>Sacred Groves of Sikkim Himalaya</strong> — Presented at Indian Institute of Science (IISc), Bangalore under Prof. Madhav Gadgil.
              </li>
            </ul>
          </div>

          {/* Professional Certifications & IICA */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
              Professional Certifications & Statutory Accreditations
            </h2>
            <div className="p-3.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800">
              <div className="font-bold text-slate-950 text-sm">
                Executive Certificate in Investor Awareness, Education & Protection (IAEP)
              </div>
              <div className="font-semibold text-amber-800 mt-0.5">
                Indian Institute of Corporate Affairs (IICA), Manesar · Ministry of Corporate Affairs, Govt. of India (November 2019)
              </div>
              <div className="text-slate-700 mt-1 leading-relaxed">
                Joint initiative with the Investor Education and Protection Fund Authority (IEPFA) and Nehru Yuva Kendra Sangathan (NYKS). Advanced executive certification on rural investor rights, capital formation, financial fraud prevention, and nationwide financial literacy.
              </div>
            </div>
          </div>

          {/* Trainings */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
              Specialized Executive Trainings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {advancedTrainings.slice(0, 6).map((trn) => (
                <div key={trn.id} className="border-l-2 border-slate-300 pl-2 py-0.5">
                  <div className="font-semibold">{trn.program}</div>
                  <div className="text-[11px] text-slate-500">{trn.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Societies */}
          <div className="pt-4 border-t border-slate-300 text-xs text-slate-700 flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <strong>Languages Known:</strong> English, Hindi, Bengali, Odia (Oriya), Nepali
            </div>
            <div>
              <strong>Scientific Societies:</strong> Indian Science Congress Association, Indian Botanical Conference, Sikkim Science Society
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
