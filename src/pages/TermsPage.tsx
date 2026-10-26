import React from 'react';
import { NavigationPage } from '../types';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400">
          Effective Date: October 2026 • Last Updated: October 16, 2026
        </p>
      </div>

      {/* Prominent Medical Notice Box */}
      <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-6 space-y-3">
        <div className="flex items-center gap-2 font-semibold text-amber-700">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <h2 className="text-base font-bold font-serif-display">
            2. Healthcare & Medical Advice Disclaimer
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-[#0f2027]">
          Restore Life is a nutritional management and lifestyle planning software application. It is NOT an emergency medical service, hospital, or diagnostic healthcare provider.
        </p>
        <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
          <p>
            The content, calculations (such as BMI, BMR, TDEE, macronutrient splits), meal templates, recipes, and dietary recommendations provided on the Platform are for educational, informational, and nutritional guidance only.
          </p>
          <p>
            Always consult your physician, endocrinologist, or qualified healthcare provider regarding medical conditions, blood work interpretations, or prescription medication adjustments.
          </p>
        </div>
      </div>

      {/* Terms Body */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">1. Acceptance of Terms</h3>
          <p>
            These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User”, “you”) and RestoreLife Technologies Private Limited (“we”, “us”, or “our”), governing your access to and use of our web application, dietary planning systems, client portals, and related services (collectively, the “Platform”).
          </p>
          <p>
            By creating an account, submitting an intake questionnaire, or otherwise using the Platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">3. Account Registration & Security</h3>
          <p>
            Account activation requires clinical onboarding. You agree to provide true, accurate, current, and complete information regarding your health background, dietary preferences, and contact details. You are responsible for maintaining the confidentiality of your account credentials.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">4. Dietitian & Client Interactions</h3>
          <p>
            RestoreLife facilitates communication between clients and certified clinical dietitians. Dietitian recommendations are delivered as medical nutrition therapy and lifestyle habit coaching. Consultations are arranged via secure digital channels.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">5. Intellectual Property</h3>
          <p>
            All custom clinical templates, recipe databases, software interfaces, brand marks, and algorithms are proprietary property of RestoreLife Technologies Private Limited.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-normal text-[#0f2027] font-serif-display">6. Governing Law & Contact</h3>
          <p>
            These Terms are governed by the laws of India. For any inquiries regarding these Terms, contact us at <a href="mailto:support@restorelife.co.in" className="text-[#004b70] underline">support@restorelife.co.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
