import React, { useState } from 'react';
import { NavigationPage } from '../types';
import logoImg from '../assets/restore-life-logo.png';
import { ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

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
    <header className="sticky top-0 z-50 glass-header transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Identity matching screenshots */}
        <div 
          onClick={() => {
            setMobileMenuOpen(false);
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 cursor-pointer select-none group"
        >
          <img 
            src={logoImg} 
            alt="RestoreLife Clinical Nutrition" 
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
          />
          <div className="hidden lg:block border-l border-slate-200 pl-3">
            <span className="text-[10px] font-bold tracking-widest text-[#004b70] uppercase block">
              Precision Medicine
            </span>
            <span className="text-[11px] text-slate-500 font-medium block">
              Clinical Nutrition Therapy
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleSectionScroll('specialties')}
            className="hover:text-[#004b70] transition-colors cursor-pointer"
          >
            Specialties
          </button>
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
            Biomarker Results
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
            Help &amp; Support
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Care Desk Online</span>
          </div>

          <button
            onClick={handleGetStartedClick}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#004b70] hover:bg-[#003854] text-white font-semibold text-sm shadow-md shadow-[#004b70]/15 hover:shadow-lg hover:shadow-[#004b70]/25 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Request Onboarding</span>
            <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={handleGetStartedClick}
            className="px-4 py-2 rounded-full bg-[#004b70] text-white text-xs font-semibold shadow-xs"
          >
            Onboarding
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-5 py-6 space-y-4 shadow-xl animate-in fade-in duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-xs font-semibold text-emerald-800 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting New Clients • 24h Response</span>
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-700 pt-2">
            <button
              onClick={() => handleSectionScroll('specialties')}
              className="text-left py-2 px-3 rounded-xl hover:bg-slate-50 hover:text-[#004b70] transition-colors"
            >
              Specialties &amp; Conditions
            </button>
            <button
              onClick={() => handleSectionScroll('how-it-works')}
              className="text-left py-2 px-3 rounded-xl hover:bg-slate-50 hover:text-[#004b70] transition-colors"
            >
              How Becoming a Client Works
            </button>
            <button
              onClick={() => handleSectionScroll('results')}
              className="text-left py-2 px-3 rounded-xl hover:bg-slate-50 hover:text-[#004b70] transition-colors"
            >
              Biomarker Case Outcomes
            </button>
            <button
              onClick={() => handleSectionScroll('faq')}
              className="text-left py-2 px-3 rounded-xl hover:bg-slate-50 hover:text-[#004b70] transition-colors"
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('support');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left py-2 px-3 rounded-xl transition-colors ${
                isSupport ? 'bg-[#e8f4f8] text-[#004b70] font-bold' : 'hover:bg-slate-50 hover:text-[#004b70]'
              }`}
            >
              Help &amp; Support Center
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={handleGetStartedClick}
              className="w-full py-3.5 rounded-full bg-[#004b70] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-[#004b70]/20"
            >
              <span>Request Client Onboarding</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Strict Patient Confidentiality</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
