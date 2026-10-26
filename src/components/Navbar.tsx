import React from 'react';
import { NavigationPage } from '../types';
import { HeartPulse, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const isSupport = currentPage === 'support';

  const handleGetStartedClick = () => {
    if (currentPage === 'home') {
      const el = document.getElementById('onboarding-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById('onboarding-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#004b70] to-[#0b6897] text-white flex items-center justify-center shadow-md shadow-[#004b70]/20 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-5 h-5 text-emerald-300" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0f2027] font-serif-display">
                Restore<span className="text-[#004b70]">Life</span>
              </span>
            </div>
            <span className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              {isSupport ? 'Help & Support Desk' : 'Clinical Nutrition & Care'}
            </span>
          </div>
        </div>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigate('support')}
            className={`text-xs sm:text-sm font-semibold transition-all px-3 py-1.5 rounded-full ${
              isSupport 
                ? 'text-[#004b70] bg-[#e8f4f8] font-bold' 
                : 'text-slate-600 hover:text-[#004b70] hover:bg-slate-100/70'
            }`}
          >
            Help & Support
          </button>

          <button
            onClick={handleGetStartedClick}
            className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#004b70] hover:bg-[#003854] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#004b70]/20 hover:shadow-lg hover:shadow-[#004b70]/30 active:scale-95 transition-all"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
