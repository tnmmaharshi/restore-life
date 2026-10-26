import React, { useState } from 'react';
import { NavigationPage } from '../types';
import logoImg from '../assets/restore-life-logo.png';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isSupport = currentPage === 'support';

  const handleSectionScroll = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStartedClick = () => {
    handleSectionScroll('onboarding-form');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo matching live website */}
        <div 
          onClick={() => {
            setMobileMenuOpen(false);
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <img 
            src={logoImg} 
            alt="RestoreLife Clinical Nutrition" 
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.01]" 
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleSectionScroll('how-it-works')}
            className="hover:text-[#004b70] transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => handleSectionScroll('results')}
            className="hover:text-[#004b70] transition-colors cursor-pointer"
          >
            Clinical Results
          </button>
          <button
            onClick={() => handleSectionScroll('faq')}
            className="hover:text-[#004b70] transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => {
              onNavigate('support');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors cursor-pointer px-3 py-1.5 rounded-full ${
              isSupport 
                ? 'text-[#004b70] bg-[#e8f4f8] font-bold' 
                : 'hover:text-[#004b70]'
            }`}
          >
            Help & Support
          </button>
        </nav>

        {/* Desktop CTA Button matching screenshot */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleGetStartedClick}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#004b70] hover:bg-[#003854] text-white font-semibold text-sm shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={handleGetStartedClick}
            className="px-4 py-2 rounded-full bg-[#004b70] text-white text-xs font-semibold shadow-xs"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-5 space-y-4 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleSectionScroll('how-it-works')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#004b70]"
            >
              How It Works
            </button>
            <button
              onClick={() => handleSectionScroll('results')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#004b70]"
            >
              Clinical Results
            </button>
            <button
              onClick={() => handleSectionScroll('faq')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-[#004b70]"
            >
              FAQ
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('support');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left py-2 px-3 rounded-lg ${
                isSupport ? 'bg-[#e8f4f8] text-[#004b70] font-bold' : 'hover:bg-slate-50 hover:text-[#004b70]'
              }`}
            >
              Help & Support
            </button>
          </div>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={handleGetStartedClick}
              className="w-full py-3 rounded-full bg-[#004b70] text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
