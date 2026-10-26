import React, { useState } from 'react';
import { HEALTH_GOALS, PREFERRED_MODES, FAQS } from '../data/mockData';
import { ConsultationForm } from '../types';
import { 
  FileText, 
  UserCheck, 
  Stethoscope, 
  Smartphone, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  X 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationForm>({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    healthGoal: '',
    preferredMode: 'email',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationForm | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToForm = () => {
    const el = document.getElementById('onboarding-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!digitsOnly) {
      errs.phone = 'Phone number is required';
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (!formData.healthGoal) {
      errs.healthGoal = 'Please select your primary health focus';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setIsSuccessModalOpen(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        healthGoal: '',
        preferredMode: 'email',
        notes: '',
      });
      setErrors({});
    }, 600);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="pt-16 sm:pt-24 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 text-xs font-medium text-slate-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#004b70]" />
            <span>Clinical Nutrition & Lifestyle Medicine</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0f2027] font-serif-display tracking-tight leading-[1.15]">
            Start Your Clinical Health & <br className="hidden sm:inline" />
            Nutrition Journey
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            RestoreLife connects you with licensed clinical dietitians to reverse metabolic conditions, balance your biomarkers, and build sustainable eating habits through 1-on-1 personalized medical nutrition therapy.
          </p>

          {/* Hero CTA Button */}
          <div className="pt-2">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#004b70] hover:bg-[#003956] text-white text-sm font-semibold shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <span>Request Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. HOW BECOMING A CLIENT WORKS (4 CARDS) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0f2027] font-serif-display">
            How Becoming a Client Works
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Because our nutrition plans are medical-grade and tailored to your specific lab work, we guide every new client through a dedicated 4-step onboarding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/70 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-[#0f2027]">1. Request Onboarding</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Submit your contact details and primary health goals via the form below.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/70 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-[#0f2027]">2. Account Creation</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our clinical care coordinator contacts you within 24 hours to create your account and issue your intake assessment.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/70 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-[#0f2027]">3. 1-on-1 Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Meet with your certified dietitian to review blood biomarkers, metabolic history, and target health parameters.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/70 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-[#0f2027]">4. Active Mobile Care</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Sign in to the RestoreLife app to access your customized meal plans, healthy recipes, tracking, and ongoing coaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REQUEST CLIENT ONBOARDING FORM */}
      <section id="onboarding-form" className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-normal text-[#0f2027] font-serif-display">
              Request Client Onboarding
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Fill in your details below. Our clinical care desk will connect with you to complete your enrollment and arrange your initial consultation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  First Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="e.g. Priya"
                  className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none ${
                    errors.firstName 
                      ? 'border-rose-400 bg-rose-50/20' 
                      : 'border-slate-200 focus:border-[#004b70]'
                  }`}
                />
                {errors.firstName && <p className="text-xs text-rose-500">{errors.firstName}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Last Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="e.g. Sharma"
                  className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none ${
                    errors.lastName 
                      ? 'border-rose-400 bg-rose-50/20' 
                      : 'border-slate-200 focus:border-[#004b70]'
                  }`}
                />
                {errors.lastName && <p className="text-xs text-rose-500">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="priya@example.com"
                className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none ${
                  errors.email 
                    ? 'border-rose-400 bg-rose-50/20' 
                    : 'border-slate-200 focus:border-[#004b70]'
                }`}
              />
              {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
            </div>

            {/* Phone Number with Country Code */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 px-3 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 shrink-0">
                  <span>🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="98765 43210"
                  className={`flex-1 px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none ${
                    errors.phone 
                      ? 'border-rose-400 bg-rose-50/20' 
                      : 'border-slate-200 focus:border-[#004b70]'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-rose-500">{errors.phone}</p>}
            </div>

            {/* Primary Health Focus Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Primary Health Focus <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.healthGoal}
                  onChange={(e) => setFormData({ ...formData, healthGoal: e.target.value })}
                  className={`w-full appearance-none px-4 py-3 rounded-2xl border text-sm bg-white transition-all focus:outline-none pr-10 ${
                    errors.healthGoal 
                      ? 'border-rose-400 bg-rose-50/20' 
                      : 'border-slate-200 focus:border-[#004b70]'
                  } ${!formData.healthGoal ? 'text-slate-400' : 'text-slate-800'}`}
                >
                  <option value="" disabled>Select your primary health goal</option>
                  {HEALTH_GOALS.map((goal) => (
                    <option key={goal.value} value={goal.value} className="text-slate-800">
                      {goal.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              {errors.healthGoal && <p className="text-xs text-rose-500">{errors.healthGoal}</p>}
            </div>

            {/* Preferred Contact Channel */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Preferred Contact Channel
              </label>
              <div className="relative">
                <select
                  value={formData.preferredMode}
                  onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value as any })}
                  className="w-full appearance-none px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white transition-all focus:outline-none pr-10 text-slate-800"
                >
                  {PREFERRED_MODES.map((mode) => (
                    <option key={mode.value} value={mode.value}>
                      {mode.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Optional Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Health Goals & Background (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share any specific dietary preferences, current medications, or health background..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#004b70] hover:bg-[#003956] text-white text-sm font-semibold shadow-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Submitting request...' : 'Submit Onboarding Request'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                By submitting, you agree to receive communications from RestoreLife regarding your care enrollment.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0f2027] font-serif-display">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500">
            Learn more about how RestoreLife works and how to join our care programs.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-medium text-slate-900 text-sm sm:text-base hover:text-[#004b70] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SUCCESS CONFIRMATION MODAL */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4f8] text-[#004b70]">
                <CheckCircle2 className="h-8 w-8 text-[#004b70]" />
              </div>
              <h3 className="font-serif-display font-normal text-2xl text-[#0f2027]">
                Onboarding Request Received
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed pt-1">
                Thank you{submittedData?.firstName ? `, ${submittedData.firstName}` : ''}! Our clinical care coordinator has received your details and will connect with you via {submittedData?.preferredMode || 'email'} within 24 hours to set up your account and schedule your 1-on-1 consultation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 space-y-2 text-xs text-slate-600">
              <p className="font-medium text-slate-800">What happens next:</p>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-500">
                <li>Our team sets up your private client profile</li>
                <li>You receive your intake assessment link via email</li>
                <li>Your initial video consultation is scheduled</li>
                <li>Your mobile app access is activated</li>
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full rounded-2xl bg-[#004b70] hover:bg-[#003956] text-white text-sm font-semibold h-12 shadow-sm transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
