import React from 'react';
import { NavigationPage } from '../types';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Shield, 
  FileText, 
  Globe, 
  Printer, 
  LogIn,
  CheckCircle2
} from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 pb-24">
      {/* Sub-header navigation row matching Screenshot 1 */}
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

      {/* Main Document Card */}
      <div className="luxury-card rounded-3xl p-8 sm:p-12 space-y-8 bg-white">
        
        {/* Document Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Official Document</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal text-[#0a1922] font-serif-display tracking-tight">
            Terms &amp; Conditions
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Welcome to RestoreLife. Please read these Terms &amp; Conditions ("Terms") carefully before using our mobile application. By using our application, you agree to be bound by these Terms.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-2 border-b border-slate-100 pb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-700 font-semibold">Effective Date: October 2026</span>
            <span>•</span>
            <span>Last Updated: August 11, 2026</span>
            <span>•</span>
            <span>Version: 1.0.0</span>
          </div>
        </div>

        {/* Section 2: Prominent Medical Disclaimer Banner */}
        <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-6 sm:p-7 space-y-3">
          <div className="flex items-center gap-2 font-semibold text-amber-800">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
            <h2 className="text-base sm:text-lg font-bold font-serif-display">
              2. Medical Disclaimer
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#0a1922]">
            RestoreLife provides health, fitness, and nutrition coaching services. We are not a medical organization, and our staff cannot give you medical advice or diagnosis. Nothing contained in this application should be construed as medical advice or diagnosis.
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            Always consult your physician or professional healthcare provider before starting any dietary or fitness program, especially if you have pre-existing medical conditions.
          </p>
        </div>

        {/* Structured Terms Body matching user text */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
          
          {/* Section 1 */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-[#0a1922] font-serif-display">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing or using the RestoreLife mobile application and services, you agree to comply with and be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the application.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-[#0a1922] font-serif-display">
              3. User Accounts &amp; Registration
            </h3>
            <p>
              To access certain features of the application, you must create an account. You agree to provide accurate, current, and complete information and maintain the security of your password. You are responsible for all activities that occur under your account.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-[#0a1922] font-serif-display">
              4. Subscriptions &amp; Billing
            </h3>
            <p>
              Certain services are offered on a subscription basis. Subscriptions are billed in advance on a recurring schedule. You can manage and cancel your subscriptions through your app store account settings.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-[#0a1922] font-serif-display">
              5. Content &amp; Intellectual Property
            </h3>
            <p>
              All content within the application, including text, graphics, logos, images, and software, is the property of RestoreLife and is protected by copyright and intellectual property laws.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-[#0a1922] font-serif-display">
              6. Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by law, RestoreLife shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the service.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-2 pt-2 border-t border-slate-100">
            <h3 className="text-lg font-bold text-[#0a1922] font-serif-display">
              7. Changes to Terms
            </h3>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms within the application. Your continued use of the application following the posting of changes constitutes acceptance of those changes.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
