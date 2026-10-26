import React, { useState } from 'react';
import { NavigationPage, ConsultationForm } from '../types';
import { HEALTH_GOALS } from '../data/mockData';
import { 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  Video, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  FileText, 
  UserCheck, 
  Sparkles,
  AlertCircle,
  HelpCircle,
  X
} from 'lucide-react';

interface GetStartedPageProps {
  onNavigate: (page: NavigationPage) => void;
  prefilledGoal?: string;
}

export const GetStartedPage: React.FC<GetStartedPageProps> = ({ onNavigate, prefilledGoal }) => {
  const [formData, setFormData] = useState<ConsultationForm>({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    healthGoal: prefilledGoal || 'weight-management',
    preferredMode: 'video',
    activityLevel: 'moderate',
    medicalConditions: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phone = 'Phone number is required';
    } else if (cleanPhone.length < 7 || cleanPhone.length > 15) {
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
    // Simulate API call to consultation_inquiries table
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '+91',
      phone: '',
      healthGoal: 'weight-management',
      preferredMode: 'video',
      activityLevel: 'moderate',
      medicalConditions: '',
      notes: '',
    });
    setErrors({});
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" /> Clinical Nutrition & Lifestyle Medicine
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004b70] tracking-tight font-heading">
          Start Your Clinical Health & Nutrition Journey
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          RestoreLife connects you with licensed clinical dietitians and sports exercise coaches to reverse metabolic conditions, balance blood biomarkers, and build sustainable habits through 1-on-1 personalized medical nutrition therapy.
        </p>
      </div>

      {/* 4-Step Journey Walkthrough (from live website) */}
      <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl font-bold font-heading text-white">How Becoming a Client Works</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Because our nutrition plans are medical-grade and tailored to your specific lab work, we guide every new client through a dedicated 4-step onboarding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm flex items-center justify-center border border-emerald-400/30">
              1
            </span>
            <h3 className="font-bold text-sm text-white">1. Request Onboarding</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Submit your contact details and primary health goals via the intake form below.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm flex items-center justify-center border border-emerald-400/30">
              2
            </span>
            <h3 className="font-bold text-sm text-white">2. Account Creation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our clinical care coordinator contacts you within 24 hours to issue your medical intake questionnaire.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm flex items-center justify-center border border-emerald-400/30">
              3
            </span>
            <h3 className="font-bold text-sm text-white">3. 1-on-1 Consultation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Meet with your assigned certified dietitian to review blood biomarkers, metabolic history, and target parameters.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm flex items-center justify-center border border-emerald-400/30">
              4
            </span>
            <h3 className="font-bold text-sm text-white">4. Active Mobile Care</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sign in to the RestoreLife app to access weekly meal plans, healthy recipes, workout logging, and coach chat.
            </p>
          </div>
        </div>
      </div>

      {/* Main Intake Form Container */}
      <div id="onboarding-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Column */}
        <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#004b70] font-heading">Request Client Onboarding</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fill in your details below. Our clinical care desk will connect with you within 24 hours to arrange your initial consultation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Names row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="e.g. Vikramaditya"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.firstName ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' : 'border-slate-200 focus:border-[#004b70] focus:ring-[#004b70]/10'
                  }`}
                />
                {errors.firstName && <p className="text-xs text-rose-500">{errors.firstName}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="e.g. Sharma"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.lastName ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' : 'border-slate-200 focus:border-[#004b70] focus:ring-[#004b70]/10'
                  }`}
                />
                {errors.lastName && <p className="text-xs text-rose-500">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' : 'border-slate-200 focus:border-[#004b70] focus:ring-[#004b70]/10'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-24 px-2 py-3 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 focus:outline-none"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+61">+61 (AU)</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98765 43210"
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' : 'border-slate-200 focus:border-[#004b70] focus:ring-[#004b70]/10'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-500">{errors.phone}</p>}
              </div>
            </div>

            {/* Primary Health Focus Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Primary Health & Fitness Goal *</span>
                <span className="text-[11px] text-emerald-700 font-semibold">Select your main focus</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {HEALTH_GOALS.map((goal) => {
                  const isChecked = formData.healthGoal === goal.id;
                  return (
                    <div
                      key={goal.id}
                      onClick={() => setFormData({ ...formData, healthGoal: goal.id })}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'border-emerald-500 bg-emerald-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="healthGoal"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 text-emerald-600 focus:ring-emerald-500"
                      />
                      <div className="text-xs">
                        <p className={`font-bold ${isChecked ? 'text-emerald-900' : 'text-slate-800'}`}>
                          {goal.label}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{goal.recommendedPace}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Preferred Contact Mode */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Preferred Consultation Mode</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'video', label: 'Video Call (Google Meet / Zoom)', icon: <Video className="w-4 h-4 text-[#004b70]" /> },
                  { id: 'phone', label: 'Phone Call', icon: <PhoneCall className="w-4 h-4 text-emerald-600" /> },
                  { id: 'whatsapp', label: 'WhatsApp Care Desk', icon: <MessageSquare className="w-4 h-4 text-green-600" /> },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredMode: mode.id as any })}
                    className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold flex items-center gap-2 ${
                      formData.preferredMode === mode.id
                        ? 'border-[#004b70] bg-[#e8f4f8] text-[#004b70] ring-1 ring-[#004b70]'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {mode.icon}
                    <span className="truncate">{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Medical Background & Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Health Background or Known Biomarkers (Optional)</span>
                <span className="text-[11px] text-slate-400">e.g. Recent HbA1c, thyroid, allergies</span>
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any existing conditions (Diabetes, PCOS, high blood pressure, gut sensitivities) or recent blood test findings..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10"
              />
            </div>

            {/* Consent & Submit */}
            <div className="space-y-4 pt-2">
              <p className="text-[11px] text-slate-400">
                By submitting this request, you agree to receive onboarding communications from RestoreLife regarding your clinical consultation. We never share your personal health information.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#004b70] to-emerald-600 hover:from-[#003652] hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-[#004b70]/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting request...</span>
                ) : (
                  <>
                    <span>Submit Onboarding Request</span>
                    <ArrowRight className="w-5 h-5 text-emerald-300" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Info & Trust Guarantees */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Direct Desk Card */}
          <div className="rounded-3xl bg-[#004b70] text-white p-6 sm:p-8 space-y-4 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white">Prefer Direct Assistance?</h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              Our clinical operations team is available Monday through Saturday to answer questions about our clinical programs and dietitian assignments.
            </p>
            <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-200">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:support@restorelife.co.in" className="hover:underline">support@restorelife.co.in</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Mon – Sat, 9 AM – 6 PM IST</span>
              </p>
            </div>
          </div>

          {/* Clinical Guarantee Card */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>What Happens After You Submit:</span>
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Private client profile set up on the secure clinical portal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Comprehensive medical intake form emailed for lab reports.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>1-on-1 video appointment scheduled with your clinical dietitian.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>RestoreLife mobile app credentials issued for custom meal plans.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Confirmation Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Onboarding Request Received!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you, <strong>{formData.firstName}</strong>! Our clinical care desk has received your request and will connect with you via <strong>{formData.preferredMode}</strong> within 24 hours to arrange your 1-on-1 consultation.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 space-y-2 text-xs text-slate-600">
              <p className="font-bold text-slate-800">Next Steps on Your Journey:</p>
              <ul className="space-y-1.5 list-disc pl-4">
                <li>Check your inbox (<strong>{formData.email}</strong>) for your confirmation receipt.</li>
                <li>Have any recent blood test or lipid panels ready for your dietitian.</li>
                <li>Your assigned care coordinator will send your intake assessment link.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onNavigate('calculator');
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
              >
                Explore Health Calculator
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onNavigate('home');
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
