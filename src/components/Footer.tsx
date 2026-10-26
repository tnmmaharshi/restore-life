import React from 'react';
import { NavigationPage } from '../types';
import logoImg from '../assets/restore-life-logo.png';
import { ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/90 text-slate-600 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Main Footer Row matching Screenshot 3 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Brand Identity */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div 
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer select-none"
            >
              <img 
                src={logoImg} 
                alt="RestoreLife" 
                className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
            <span className="hidden sm:inline-block text-slate-300">•</span>
            <span className="text-xs sm:text-sm font-medium text-slate-500">
              Clinical Nutrition & Lifestyle Coaching
            </span>
          </div>

          {/* Right: Core Legal & Support Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <button
              onClick={() => {
                onNavigate('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#004b70] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                onNavigate('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#004b70] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => {
                onNavigate('support');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#004b70] transition-colors cursor-pointer"
            >
              Support
            </button>
          </div>
        </div>

        {/* Clinical Disclaimer & Copyright Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5 leading-relaxed max-w-2xl">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>
              <strong>Medical Disclaimer:</strong> RestoreLife provides certified nutritional therapy and lifestyle coaching. Our services do not replace acute hospital care or prescription drug management. Always consult your physician.
            </span>
          </p>
          <p className="shrink-0 text-slate-400">
            © {currentYear} RestoreLife. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
