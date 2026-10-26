import React from 'react';
import { NavigationPage } from '../types';
import { 
  FileText, 
  ArrowLeft, 
  Clock, 
  AlertTriangle
} from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
          <FileText className="w-3.5 h-3.5" /> Legal Agreement
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#004b70] tracking-tight font-heading">
          Terms of Service
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Last Updated: October 2026
          </span>
          <span>•</span>
          <span>Effective for all RestoreLife Clients & Dietitians</span>
        </div>
      </div>

      {/* Prominent Medical Notice & Limitations Alert (from live restorelife.co.in) */}
      <div className="rounded-3xl border-2 border-amber-500/40 bg-amber-500/5 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3 text-amber-700">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          <h2 className="text-lg font-bold font-heading">
            2. Healthcare & Medical Advice Disclaimer
          </h2>
        </div>
        <p className="text-sm font-semibold text-slate-900">
          Important Notice: RestoreLife is a nutritional management, biomarker tracking, and lifestyle planning software application. It is NOT an emergency medical service, hospital, or emergency healthcare provider.
        </p>
        <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            The content, calculations (including BMI, BMR, TDEE, body fat estimations, and macronutrient targets), meal templates, recipes, and dietary recommendations provided on the Platform are for educational, informational, and lifestyle nutrition guidance only.
          </p>
          <p>
            They are not intended to diagnose, cure, or directly treat any acute medical illness. Always consult your primary care physician, cardiologist, endocrinologist, or qualified medical doctor before altering prescribed medication dosages or embarking on new exercise routines.
          </p>
        </div>
      </div>

      {/* Structured Terms Sections */}
      <div className="space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">1. Acceptance of Terms</h2>
          <p>
            These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User”, “Client”, or “you”) and RestoreLife Technologies Private Limited (“RestoreLife”, “we”, “us”, or “our”), governing your access to and use of our web applications, dietary planning systems, client portals, mobile applications, and related clinical wellness services (collectively, the “Platform”).
          </p>
          <p>
            By submitting an onboarding inquiry, creating an account, accessing dietary plans, or otherwise interacting with the Platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">3. Account Registration & Security</h2>
          <p>
            To access personalized clinical nutrition plans and mobile app features, you must undergo our clinical onboarding verification. You agree to provide true, accurate, current, and complete information regarding your health background, existing medical conditions, and contact details.
          </p>
          <p>
            You are solely responsible for maintaining the confidentiality of your login credentials and for all activities occurring under your account. You must notify us immediately of any unauthorized breach of security.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">4. Dietitian & Client Interactions</h2>
          <p>
            RestoreLife facilitates 1-on-1 consultations and digital chat between clients and certified clinical dietitians (RDs) and fitness coaches. Communications through the platform are intended for lifestyle coaching, meal planning adjustments, and habit tracking.
          </p>
          <p>
            Consultations are conducted via secure third-party video conferencing (e.g. Google Meet). Clients agree to conduct themselves respectfully during all clinical interactions.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">5. Third-Party Integrations & Google Services</h2>
          <p>
            The Platform may integrate with third-party tools (such as Google Calendar for appointment scheduling, Google Meet for telehealth consultations, and lab diagnostic partners). RestoreLife’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">6. Intellectual Property Rights</h2>
          <p>
            All proprietary content, brand logos, software code, proprietary nutrition algorithms, custom recipe formulations, workout curriculums, and database structures remain the exclusive property of RestoreLife Technologies Private Limited.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">7. Acceptable Use Policy</h2>
          <p>
            You agree not to reverse engineer, scrape, copy, redistribute, or commercially exploit any custom meal plans, recipes, or workout templates generated for you. Meal plans are tailored exclusively to your personal physiology and must not be shared or redistributed to third parties.
          </p>
        </section>

        {/* Section 8 & 9 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#004b70] font-heading">8. Limitation of Liability & Account Termination</h2>
          <p>
            To the maximum extent permitted by applicable law, RestoreLife and its directors, clinical dietitians, and employees shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform or reliance on lifestyle nutrition information.
          </p>
          <p>
            We reserve the right to suspend or terminate accounts that violate our code of conduct, provide fraudulent identity details, or abuse platform resources.
          </p>
        </section>

        {/* Contact Info */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
          <p className="font-bold text-slate-800">Legal & Compliance Inquiries:</p>
          <p>RestoreLife Technologies Private Limited</p>
          <p>Email: <a href="mailto:support@restorelife.co.in" className="text-[#004b70] font-semibold underline">support@restorelife.co.in</a></p>
          <p>Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </div>
  );
};
