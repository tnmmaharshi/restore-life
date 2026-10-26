import React from 'react';
import { NavigationPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-200/70 bg-transparent py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-serif-display font-medium text-sm text-[#0f2027]">
            RestoreLife
          </span>
          <span>•</span>
          <span>Clinical Nutrition & Lifestyle Coaching</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('privacy')}
            className="hover:text-[#004b70] transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onNavigate('terms')}
            className="hover:text-[#004b70] transition-colors"
          >
            Terms of Service
          </button>
          <button
            onClick={() => onNavigate('support')}
            className="hover:text-[#004b70] transition-colors"
          >
            Support
          </button>
        </div>
      </div>
    </footer>
  );
};
