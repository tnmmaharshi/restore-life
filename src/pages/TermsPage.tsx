import React from 'react';
import { NavigationPage } from '../types';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Shield, 
  FileText, 
  Globe, 
  Printer, 
  LogIn 
} from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#004b70] transition-colors cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy</span>
          </button>

          <button
            onClick={() => {
              onNavigate('terms');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#004b70]/30 bg-white text-[#004b70] font-bold shadow-2xs cursor-default"
          >
            <FileText className="w-3.5 h-3.5 text-[#004b70]" />
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
            <FileText className="w-3.5 h-3.5" /> Legal Governance
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-[#0f2027] font-serif-display tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 • Last Updated: October 16, 2026 • Version: 1.0.0
          </p>
        </div>

        {/* Prominent Medical Notice Box */}
        <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-6 sm:p-7 space-y-3">
          <div className="flex items-center gap-2 font-semibold text-amber-800">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
            <h2 className="text-base sm:text-lg font-bold font-serif-display">
              Healthcare &amp; Medical Advice Disclaimer
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#0f2027]">
            Restore Life is a clinical nutrition management and lifestyle coaching software service. It is NOT an emergency medical responder, hospital, or diagnostic healthcare facility.
          </p>
          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <p>
              The personalized meal guidance, nutritional parameters, recipes, and biomarker tracking tools provided on the Platform are designed for medical nutrition therapy and lifestyle habit modification.
            </p>
            <p>
              Always consult your primary physician, endocrinologist, or qualified medical specialist regarding acute illnesses, prescription drug titration, or laboratory diagnostics.
            </p>
          </div>
        </div>

        {/* Legal Body Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              1. Acceptance of Terms
            </h3>
            <p>
              These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User”, “Client”, or “you”) and RestoreLife Technologies Private Limited (“we”, “us”, or “our”), governing your access to and use of our web portal, client dashboard, dietary tools, and communication services.
            </p>
            <p>
              By submitting an onboarding intake form, activating an account, or interacting with a RestoreLife practitioner, you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              2. Account Activation &amp; Clinical Onboarding
            </h3>
            <p>
              Because our nutrition care plans are individualized, access to the client portal and mobile app requires verified clinical onboarding. You agree to provide true, accurate, and up-to-date health metrics and contact details. You are responsible for preserving the confidentiality of your authentication credentials.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              3. Dietitian Consultations &amp; Protocol Delivery
            </h3>
            <p>
              RestoreLife connects clients with certified clinical dietitians. Consultations occur over secure digital communication channels. Dietary suggestions and lifestyle protocols are formulated using your self-reported dietary preferences and lab biomarker values.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              4. Intellectual Property
            </h3>
            <p>
              All proprietary algorithms, clinical templates, meal composition frameworks, software interfaces, and logos are the intellectual property of RestoreLife Technologies Private Limited.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">
              5. Governing Law &amp; Dispute Resolution
            </h3>
            <p>
              These Terms are governed by and construed under the laws of India. For any inquiries or legal notices, contact our compliance team at{' '}
              <a href="mailto:support@restorelife.co.in" className="text-[#004b70] font-semibold underline">
                support@restorelife.co.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
