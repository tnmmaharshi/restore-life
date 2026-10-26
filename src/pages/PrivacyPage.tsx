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
  LogIn,
  Activity,
  CheckCircle2,
  Mail
} from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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

      {/* Main Document Card */}
      <div className="luxury-card rounded-3xl p-8 sm:p-12 space-y-8 bg-white">
        
        {/* Document Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Document</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal text-[#0a1922] font-serif-display tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            At RestoreLife, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
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

        {/* Highlight Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-[#0a1922]">No Selling of Health Data</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              We never sell or rent your personal health data to third parties for advertising or marketing.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-[#0a1922]">OS Health App Integration</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Apple Health &amp; Health Connect access is restricted strictly to the explicit permission scope you grant.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004b70] shadow-2xs">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-[#0a1922]">Secure Cloud Architecture</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Cloud services (such as Supabase, Firebase) host data under rigorous data-protection agreements.
            </p>
          </div>
        </div>

        {/* Policy Sections matching user text exactly */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a1922] font-serif-display">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us when registering an account, creating your health profile, and communicating with our team.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2.5">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#004b70] shrink-0 mt-0.5" />
                <p>
                  <strong>Personal Information:</strong> Name, email address, phone number, date of birth, gender.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#004b70] shrink-0 mt-0.5" />
                <p>
                  <strong>Health &amp; Fitness Data:</strong> Weight, height, health goals, meal logs, physical activity, and sync metrics (such as steps, calories burned, and sleep duration) from Apple Health or Health Connect when authorized.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a1922] font-serif-display">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information for various purposes to support your health journey:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>To personalize your coaching, meal planning, and nutrition guidelines.</li>
              <li>To monitor progress and offer health insights.</li>
              <li>To communicate app updates, reminders, and feedback.</li>
              <li>To improve the application functionality and user experience.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a1922] font-serif-display">
              3. Data Sharing &amp; Disclosure
            </h2>
            <p>
              We do not sell or rent your personal health data to third parties. We may share information with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Our Coaching Staff:</strong> Certified nutrition coaches who review your logs to provide guidance.
              </li>
              <li>
                <strong>Service Providers:</strong> Secure third-party cloud infrastructure (such as Supabase, Firebase) that hosts our services under strict data-protection contracts.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a1922] font-serif-display">
              4. Data Security
            </h2>
            <p>
              We implement robust administrative, technical, and physical security measures to protect your health and personal data. While we take maximum precautions, no online transmission or data storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a1922] font-serif-display">
              5. Health App Integration (Apple Health / Health Connect)
            </h2>
            <p>
              If you enable synchronization with OS health integrations, our access to your health metrics will be strictly restricted to the permission scope you choose. We only use this information to calculate your progress and do not utilize it for marketing or advertising purposes.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a1922] font-serif-display">
              6. Your Rights &amp; Choices
            </h2>
            <p>
              You can access, correct, or delete your account information at any time. You can also manage permissions for device settings, health sync, and notifications directly from your device's operating system settings.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-2 border-t border-slate-100">
            <h2 className="text-lg font-bold text-[#0a1922] font-serif-display">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or feedback about this Privacy Policy, please contact our support team at:
            </p>
            <div className="p-4 rounded-2xl bg-[#e8f4f8] border border-[#004b70]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#004b70]" />
                <a 
                  href="mailto:support@restorelife.co.in" 
                  className="font-bold text-[#004b70] hover:underline text-sm"
                >
                  support@restorelife.co.in
                </a>
              </div>
              <button
                onClick={() => onNavigate('support')}
                className="text-xs font-semibold text-[#004b70] hover:underline cursor-pointer"
              >
                Visit Support Desk →
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
