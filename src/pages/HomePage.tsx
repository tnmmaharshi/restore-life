import React, { useState } from 'react';
import { HEALTH_GOALS, PREFERRED_MODES, FAQS, CLIENT_RESULTS } from '../data/mockData';
import { ConsultationForm } from '../types';
import { 
  FileText, 
  UserCheck, 
  Stethoscope, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  X,
  ShieldCheck
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
      errs.phone = 'Please enter a valid phone number (7-15 digits)';
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
    <div className="space-y-24 sm:space-y-36 pb-24 overflow-hidden">
      {/* 1. HERO SECTION WITH AMBIENT LIGHTING */}
      <section className="relative pt-14 sm:pt-22 pb-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        {/* Soft Ambient Glow Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#004b70]/10 via-emerald-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="space-y-6 sm:space-y-8">
          {/* Badge with live beacon */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#004b70] font-bold">Clinical Nutrition</span>
            <span className="text-slate-300">•</span>
            <span>Lifestyle Medicine Protocol</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0f2027] font-serif-display tracking-tight leading-[1.12]">
            Start Your Clinical Health & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#004b70] via-[#0b6897] to-emerald-700 bg-clip-text text-transparent">
              Nutrition Journey
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            RestoreLife connects you with licensed clinical dietitians to reverse metabolic conditions, balance your biomarkers, and build sustainable eating habits through 1-on-1 personalized medical nutrition therapy.
          </p>

          {/* Hero CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-sm font-semibold shadow-lg shadow-[#004b70]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Request Onboarding</span>
              <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Metrics Row */}
          <div className="pt-6 border-t border-slate-200/60 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="space-y-0.5">
              <p className="text-xl sm:text-2xl font-extrabold text-[#004b70] font-serif-display">94.2%</p>
              <p className="text-xs text-slate-500 font-medium">Biomarker Improvement</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl sm:text-2xl font-extrabold text-[#004b70] font-serif-display">1-on-1</p>
              <p className="text-xs text-slate-500 font-medium">Certified Dietitian Care</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl sm:text-2xl font-extrabold text-[#004b70] font-serif-display">&lt; 24h</p>
              <p className="text-xs text-slate-500 font-medium">Care Desk Response</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl sm:text-2xl font-extrabold text-emerald-700 font-serif-display">100%</p>
              <p className="text-xs text-slate-500 font-medium">Evidence-Based</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW BECOMING A CLIENT WORKS (4 CARDS) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004b70]">
            The Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0f2027] font-serif-display">
            How Becoming a Client Works
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Because our nutrition plans are medical-grade and tailored to your specific lab work, we guide every new client through a dedicated 4-step onboarding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="group p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#004b70]/30 hover:-translate-y-1 transition-all duration-300 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs group-hover:bg-[#004b70] group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Step 01</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[#0f2027]">1. Request Onboarding</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Submit your contact details and primary health goals via the form below.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#004b70]/30 hover:-translate-y-1 transition-all duration-300 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs group-hover:bg-[#004b70] group-hover:text-white transition-colors">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Step 02</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[#0f2027]">2. Account Creation</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our clinical care coordinator contacts you within 24 hours to create your account and issue your intake assessment.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#004b70]/30 hover:-translate-y-1 transition-all duration-300 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs group-hover:bg-[#004b70] group-hover:text-white transition-colors">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Step 03</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[#0f2027]">3. 1-on-1 Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Meet with your certified dietitian to review blood biomarkers, metabolic history, and target health parameters.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#004b70]/30 hover:-translate-y-1 transition-all duration-300 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs group-hover:bg-[#004b70] group-hover:text-white transition-colors">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Step 04</span>
            </div>
            <div className="space-y-2">
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
        <div className="relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/50 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Confidential Intake
            </div>
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
                  className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 ${
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
                  className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 ${
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
                className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 ${
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
                  className={`flex-1 px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 ${
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
                  className={`w-full appearance-none px-4 py-3 rounded-2xl border text-sm bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 pr-10 ${
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
                  className="w-full appearance-none px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 pr-10 text-slate-800"
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
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-sm font-semibold shadow-md shadow-[#004b70]/20 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Submitting request...' : 'Submit Onboarding Request'}</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                By submitting, you agree to receive communications from RestoreLife regarding your care enrollment.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 4. REAL DOCUMENTED BIOMARKER OUTCOMES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004b70]">
            Clinical Efficacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0f2027] font-serif-display">
            Real Lab Outcomes. Restored Vitality.
          </h2>
          <p className="text-sm text-slate-500">
            Documented biomarker shifts under personalized 1-on-1 medical nutrition therapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_RESULTS.map((res, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#004b70]">{res.name} ({res.age}y)</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e8f4f8] text-[#004b70]">
                    {res.duration}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500">{res.condition}</p>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{res.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-xl bg-slate-50">
                  <span className="text-[10px] text-slate-400 block">Biomarker</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <strong className="text-emerald-700 font-bold">{res.hba1c.after}</strong>
                    <span className="text-[10px] text-slate-400 line-through">{res.hba1c.before}</span>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50">
                  <span className="text-[10px] text-slate-400 block">Metric Shift</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <strong className="text-slate-900 font-bold">{res.weight.after}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
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
                    <ChevronUp className="w-4 h-4 text-[#004b70] shrink-0" />
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
