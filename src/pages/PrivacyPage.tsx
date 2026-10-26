import React from 'react';
import { NavigationPage } from '../types';
import { ArrowLeft, ShieldCheck, Lock, Database } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 pb-20">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#004b70] hover:text-[#003652] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-normal text-[#0f2027] font-serif-display tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">
          Effective Date: October 2026 • Last Updated: October 16, 2026
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
          <Lock className="w-5 h-5 text-[#004b70]" />
          <h3 className="text-xs font-bold text-[#0f2027]">Confidentiality First</h3>
          <p className="text-[11px] text-slate-500">We treat personal health data with strict confidentiality and never sell records.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
          <Database className="w-5 h-5 text-[#004b70]" />
          <h3 className="text-xs font-bold text-[#0f2027]">Encrypted Infrastructure</h3>
          <p className="text-[11px] text-slate-500">All intake questionnaires and lab reports are encrypted in transit and at rest.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
          <ShieldCheck className="w-5 h-5 text-[#004b70]" />
          <h3 className="text-xs font-bold text-[#0f2027]">Clinical Governance</h3>
          <p className="text-[11px] text-slate-500">Access is restricted solely to your assigned clinical dietitian and care team.</p>
        </div>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">1. Introduction</h3>
          <p>
            RestoreLife Technologies Private Limited (“we”, “our”, or “us”) is dedicated to empowering individuals with clinical nutrition management, personalized dietary planning, appointment scheduling, and progress tracking tools.
          </p>
          <p>
            This Privacy Policy explains how RestoreLife collects, uses, protects, and discloses your personal and health-related information when you access our web application, mobile interfaces, or related services (collectively, the “Platform”).
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">2. Information We Collect</h3>
          <p>
            To deliver personalized nutritional guidance and support clinical consultations, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Identification Details:</strong> Full name, email address, phone number, and age.</li>
            <li><strong>Health Parameters:</strong> Anthropometric measurements, body weight, dietary preferences, food allergies, and metabolic goals submitted via onboarding.</li>
            <li><strong>Consultation Data:</strong> Appointment logs, video consultation notes, and meal plan records.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">3. Contact & Grievance Officer</h3>
          <p>
            For privacy inquiries or data access requests, please reach out to our Grievance Desk at <a href="mailto:support@restorelife.co.in" className="text-[#004b70] underline">support@restorelife.co.in</a> or <a href="mailto:priya@restorelife.co.in" className="text-[#004b70] underline">priya@restorelife.co.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
