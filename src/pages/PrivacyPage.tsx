import React from 'react';
import { NavigationPage } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  UserCheck, 
  ArrowLeft, 
  Clock 
} from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 pb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#004b70] hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" /> Confidentiality & Trust
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#004b70] tracking-tight font-heading">
          Privacy Policy
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Last Updated: October 2026
          </span>
          <span>•</span>
          <span>Strict Protection for Personal Health Information (PHI)</span>
        </div>
      </div>

      {/* Highlights Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <Lock className="w-5 h-5 text-emerald-600" />
          <h3 className="text-sm font-bold text-slate-900">Zero Data Selling</h3>
          <p className="text-xs text-slate-500">We never sell, rent, or monetize your blood work, biometric data, or dietary information.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <Database className="w-5 h-5 text-[#004b70]" />
          <h3 className="text-sm font-bold text-slate-900">Encrypted Storage</h3>
          <p className="text-xs text-slate-500">All intake forms, food logs, and clinical notes are encrypted in transit and at rest.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <UserCheck className="w-5 h-5 text-amber-600" />
          <h3 className="text-sm font-bold text-slate-900">Strict Clinical Access</h3>
          <p className="text-xs text-slate-500">Only your assigned certified dietitian and care team have access to your health profile.</p>
        </div>
      </div>

      {/* Main Privacy Body */}
      <div className="space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">1. Introduction</h2>
          <p>
            RestoreLife Technologies Private Limited (“we”, “our”, or “us”) is dedicated to empowering individuals with clinical nutrition management, personalized dietary planning, appointment scheduling, and progress tracking tools.
          </p>
          <p>
            This Privacy Policy explains how RestoreLife collects, uses, protects, and discloses your personal and health-related information when you access our web application, mobile interfaces, or related services (collectively, the “Platform”). We treat your health data with the utmost confidentiality.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">2. Information We Collect</h2>
          <p>
            To deliver personalized nutritional guidance and support clinical consultations, we collect several categories of information:
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
              <strong className="text-slate-900 block text-sm">Personal Identification Data</strong>
              <p>Full name, email address, phone number, encrypted login credentials, date of birth, age, and preferred consultation channel.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
              <strong className="text-slate-900 block text-sm">Health & Biometric Parameters</strong>
              <p>Height, weight, waist/hip/neck measurements, body fat estimations, BMR, TDEE, food allergies, dietary preferences, and medical conditions submitted in onboarding.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
              <strong className="text-slate-900 block text-sm">Clinical Biomarkers & Lab Panels</strong>
              <p>Recent blood reports you choose to upload (such as HbA1c, fasting insulin, lipid profile, liver enzymes, and thyroid levels) reviewed by your clinical dietitian.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
              <strong className="text-slate-900 block text-sm">Consultation Notes & Activity Logs</strong>
              <p>Appointment schedules, dietitian consultation notes, meal adherence logs, and workout check-ins on the client portal.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">3. Google API Services & Limited Use Disclosure</h2>
          <p>
            RestoreLife’s use and transfer of information received from Google APIs (such as Google Calendar for appointment sync or Google Meet for video sessions) to any other app adheres strictly to the Google API Services User Data Policy, including the Limited Use requirements.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">4. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Formulating customized medical nutrition plans, macro distributions, and recipe prescriptions.</li>
            <li>Tracking longitudinal biomarker improvements and metabolic health trends.</li>
            <li>Facilitating scheduled appointments with registered clinical dietitians and sports coaches.</li>
            <li>Providing operational support, appointment reminders, and billing receipts.</li>
          </ul>
        </section>

        {/* Section 5 & 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">5. Data Retention & Security Controls</h2>
          <p>
            We implement technical, physical, and administrative security measures, including 256-bit encryption in transit (TLS 1.3) and AES encryption at rest, to safeguard your records against unauthorized access. We retain your health logs only for the duration of active service or as required by clinical governance standards.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">6. Your Rights & Choices</h2>
          <p>
            You have the right to request access to your complete health data archive, rectify inaccurate records, or request complete account erasure by writing to our compliance officer.
          </p>
        </section>

        {/* Grievance Officer */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <h3 className="text-base font-bold text-slate-900 font-heading">7. Grievance Officer & Contact</h3>
          <p className="text-xs text-slate-600">
            For inquiries regarding our privacy practices or to exercise your health data rights, please contact our designated Grievance Officer:
          </p>
          <div className="space-y-1 text-xs text-slate-700 font-medium">
            <p><strong>Grievance Officer:</strong> Priya Sharma / Clinical Operations Desk</p>
            <p><strong>Email:</strong> <a href="mailto:support@restorelife.co.in" className="text-[#004b70] underline">support@restorelife.co.in</a> / <a href="mailto:priya@restorelife.co.in" className="text-[#004b70] underline">priya@restorelife.co.in</a></p>
            <p><strong>Address:</strong> RestoreLife Technologies Private Limited, Bengaluru, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};
