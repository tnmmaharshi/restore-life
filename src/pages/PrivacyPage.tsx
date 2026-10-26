import React from 'react';
import { NavigationPage } from '../types';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Database, 
  Shield, 
  FileText, 
  Globe, 
  Printer, 
  LogIn 
} from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 pb-24">
      {/* Sub-header navigation row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5 text-xs font-medium text-slate-500">
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1.5 text-slate-600 hover:text-[#004b70] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              onNavigate('privacy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#004b70]/30 bg-white text-[#004b70] font-bold shadow-2xs cursor-default"
          >
            <Shield className="w-3.5 h-3.5 text-[#004b70]" />
            <span>Privacy</span>
          </button>

          <button
            onClick={() => {
              onNavigate('terms');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms</span>
          </button>

          <button
            onClick={() => {
              onNavigate('support');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Support</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('onboarding-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#004b70] text-white font-semibold hover:bg-[#003854] transition-all shadow-xs cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        </div>
      </div>

      <div className="luxury-card rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Patient Data Protection
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-[#0f2027] font-serif-display tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 • Last Updated: October 16, 2026 • Version: 1.0.0
          </p>
        </div>

        {/* 3 Trust Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0f2027]">Confidentiality First</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We treat personal health data with clinical confidentiality. We never sell, rent, or monetize your records.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0f2027]">Encrypted Infrastructure</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              All intake forms, questionnaires, and lab biomarkers are encrypted in transit (TLS 1.3) and at rest (AES-256).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0f2027]">Clinical Governance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Access is strictly restricted to your assigned clinical dietitian and care coordinator under NDA.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              1. Introduction
            </h3>
            <p>
              RestoreLife Technologies Private Limited (“RestoreLife”, “we”, “our”, or “us”) operates this website and the RestoreLife clinical nutrition management platform.
            </p>
            <p>
              This Privacy Policy explains how we collect, store, safeguard, and use your personal information and health metrics when you submit an onboarding request, engage with our dietitians, or use our digital coaching tools.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              2. Information We Collect
            </h3>
            <p>To provide tailored clinical nutrition plans, we collect:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact Information:</strong> First and last name, email address, phone number, and city/country.</li>
              <li><strong>Health &amp; Dietary Metrics:</strong> Self-reported primary health focus, dietary preferences (vegetarian, vegan, non-vegetarian), existing health conditions, and optional notes.</li>
              <li><strong>Biomarker &amp; Consultation Records:</strong> Voluntary blood biomarker results (HbA1c, lipid profile, fasting glucose) uploaded for dietitian review and progress tracking.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              3. How We Use Your Data
            </h3>
            <p>
              Your data is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Coordinating clinical onboarding and assigning an accredited dietitian</li>
              <li>Formulating evidence-based personalized nutrition recommendations</li>
              <li>Providing appointment reminders and mobile app authentication</li>
              <li>Continuous quality assurance and clinical oversight</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              4. Data Retention &amp; Your Rights
            </h3>
            <p>
              You maintain the right to review, update, or request the deletion of your personal records at any time. We retain client records in compliance with applicable Indian digital healthcare standards (DISHA and DPDP Act).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              5. Grievance Desk
            </h3>
            <p>
              For privacy inquiries, data access requests, or regulatory questions, contact our Data Protection Officer at:
            </p>
            <p className="font-semibold text-slate-800">
              Email: <a href="mailto:support@restorelife.co.in" className="text-[#004b70] underline">support@restorelife.co.in</a> or <a href="mailto:priya@restorelife.co.in" className="text-[#004b70] underline">priya@restorelife.co.in</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
