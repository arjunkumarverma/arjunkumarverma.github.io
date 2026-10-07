import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { Mail, MapPin, ExternalLink, Send, Check, Copy, MessageSquare, Briefcase } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profileData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
            Professional Inquiries & Networking
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-950">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Available for board directorships, public policy consultations, academic lectures, and youth governance advisory.
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Professional Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 flex items-start justify-between gap-4 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-amber-50 text-amber-700 rounded-lg border border-amber-200/60">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                    Official Email
                  </div>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-sm font-bold text-slate-950 hover:text-amber-700 break-all transition-colors"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(profileData.contact.email)}
                aria-label="Copy email"
                className="p-2 text-slate-400 hover:text-slate-900 rounded transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200/60">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                    LinkedIn Network
                  </div>
                  <div className="text-sm font-bold text-slate-950">
                    Dr. Arjun Kumar Verma
                  </div>
                </div>
              </div>
              <a
                href={profileData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-600 rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Professional Engagement & Regional Base */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-950 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Regional Base & Availability</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-700 space-y-2 font-normal">
                <div>
                  <span className="font-bold text-slate-950 block">Headquarters / Location:</span>
                  <span className="text-slate-600">{profileData.contact.location}</span>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="font-bold text-slate-950 block mb-1">Advisory & Institutional Scope:</span>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Briefcase className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Independent Directorships (MCA/IICA), University Planning, Environmental Conservation (IUCN-CEC), and Youth Empowerment.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>Send a Direct Correspondence</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-950 mb-6">
              Write Directly to Dr. Verma
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.org"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Independent Directorship / Public Policy Advisory / Guest Lecture"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state the purpose of your communication..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Send via Email Client</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
