import React from 'react';
import { NavigationPage } from '../types';
import { HeartPulse } from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const isSupport = currentPage === 'support';

  return (
    <header className="sticky top-0 z-50 bg-[#f4f8fa]/90 backdrop-blur-md border-b border-slate-200/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#004b70] text-white flex items-center justify-center shadow-xs group-hover:bg-[#003652] transition-colors">
            <HeartPulse className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-[#0f2027] font-serif-display">
              RestoreLife
            </span>
            <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase -mt-0.5">
              {isSupport ? 'Help & Support' : 'Clinical Nutrition'}
            </span>
          </div>
        </div>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigate('support')}
            className={`text-xs sm:text-sm font-medium transition-colors ${
              isSupport 
                ? 'text-[#004b70] font-bold' 
                : 'text-slate-600 hover:text-[#004b70]'
            }`}
          >
            Help & Support
          </button>

          <button
            onClick={() => {
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
            }}
            className="px-5 py-2.5 rounded-full bg-[#004b70] hover:bg-[#003652] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all hover:shadow"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};
