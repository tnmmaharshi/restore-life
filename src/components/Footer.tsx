import React from 'react';
import { NavigationPage } from '../types';
import logoImg from '../assets/restore-life-logo.png';
import { ShieldAlert, ArrowUpRight, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleSectionScroll = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 text-slate-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer select-none inline-block"
            >
              <img 
                src={logoImg} 
                alt="RestoreLife" 
                className="h-9 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity" 
              />
            </div>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Personal nutrition care from qualified dietitians. Simple food plans, built around your health and your life.
            </p>

          </div>

          {/* Column 1: Protocols & Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              We Help With
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <button 
                  onClick={() => handleSectionScroll('specialties')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer text-left"
                >
                  Diabetes &amp; Blood Sugar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('specialties')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer text-left"
                >
                  PCOS &amp; Hormones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('specialties')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer text-left"
                >
                  Fatty Liver &amp; Cholesterol
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('specialties')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer text-left"
                >
                  Gut Health
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('specialties')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer text-left"
                >
                  Thyroid Health
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Client Journey */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              RestoreLife
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <button 
                  onClick={() => handleSectionScroll('how-it-works')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('results')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer"
                >
                  Client Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('faq')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('onboarding-form')} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer flex items-center gap-1 text-[#004b70] font-semibold"
                >
                  <span>Book a Free Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Help &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <button 
                  onClick={() => {
                    onNavigate('support');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Help &amp; Support</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('privacy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('terms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-[#004b70] transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>Mon – Sat: 9 AM – 7 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Notice Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-600">Please note:</strong> RestoreLife offers nutrition and lifestyle guidance from qualified dietitians. We are not an emergency service and do not prescribe medicine. Always talk to your doctor before changing any medication.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} RestoreLife Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400">Made with care in India</p>
        </div>
      </div>
    </footer>
  );
};
