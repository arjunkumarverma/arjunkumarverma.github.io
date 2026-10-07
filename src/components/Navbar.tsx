import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ExternalLink, Printer } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Biography', href: '#biography' },
    { label: 'Timeline', href: '#journey' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Research', href: '#research' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['overview', 'biography', 'journey', 'initiatives', 'research', 'credentials', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200/90 text-slate-900 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm border-slate-200/80 text-slate-900 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text wordmark */}
          <a
            href="#overview"
            className="shrink-0 flex items-center gap-2 group transition-opacity hover:opacity-90"
            aria-label="Dr. Arjun Kumar Verma Home"
          >
            <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-slate-950 whitespace-nowrap">
              Dr. Arjun Kumar Verma
            </span>
            <span className="text-amber-700 text-xs font-mono font-bold hidden sm:inline-block px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200">
              Ph.D
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 relative whitespace-nowrap ${
                    isActive
                      ? 'text-amber-700 font-bold'
                      : 'text-slate-700 hover:text-amber-700'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="shrink-0 flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-slate-700 hover:text-amber-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* LinkedIn Link */}
            <a
              href={profileData.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            </a>

            {/* CV Download / Print Trigger */}
            <button
              type="button"
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 text-xs font-bold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 mt-3 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <a
              href={profileData.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-700 flex items-center gap-1.5 py-1"
            >
              LinkedIn Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="text-xs font-bold bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" /> Print CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
