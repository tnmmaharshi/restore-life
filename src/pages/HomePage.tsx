import React, { useEffect, useState } from 'react';
import { 
  HEALTH_GOALS, 
  PREFERRED_MODES, 
  FAQS, 
  CLIENT_RESULTS,
  CLINICAL_CONDITIONS,
  ClinicalCondition
} from '../data/mockData';
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
  ShieldCheck,
  Sparkles,
  Activity,
  Award,
  Clock,
  Lock,
  Check,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface HomePageProps {
  onNavigateSupport?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateSupport }) => {
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
  const [activeResultCategory, setActiveResultCategory] = useState<string>('all');

  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const scrollToForm = (prefillGoal?: string) => {
    if (prefillGoal) {
      setFormData(prev => ({ ...prev, healthGoal: prefillGoal }));
    }
    const el = document.getElementById('onboarding-form');
    if (el) {
      window.history.replaceState({}, '', '#onboarding-form');
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
    }, 500);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const filteredResults = activeResultCategory === 'all'
    ? CLIENT_RESULTS
    : CLIENT_RESULTS.filter(res => res.category.toLowerCase().includes(activeResultCategory.toLowerCase()));

  return (
    <div className="home-page space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION (Split Visual Layout matching Screenshot 5) */}
      <section className="relative hero-mesh pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Badge matching Screenshot 5 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f4f8] border border-[#004b70]/15 text-[#004b70] text-xs sm:text-sm font-semibold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#004b70]" />
              <span>Clinical Nutrition &amp; Lifestyle Medicine</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
            </div>

            {/* Editorial Title */}
            <h1 className="text-4xl sm:text-6xl md:text-[64px] font-normal text-[#0a1922] font-serif-display tracking-tight leading-[1.12]">
              Start Your Clinical Health &amp; <br className="hidden sm:inline" />
              <span className="italic text-[#004b70]">Nutrition Journey</span>
            </h1>

            {/* Supporting Lead Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              RestoreLife connects you with licensed clinical dietitians to reverse metabolic conditions, balance your biomarkers, and build sustainable eating habits through 1-on-1 personalized medical nutrition therapy.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToForm()}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-base font-semibold shadow-md shadow-[#004b70]/20 hover:shadow-lg hover:shadow-[#004b70]/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>Request Onboarding</span>
                <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold transition-all hover:border-slate-300 w-full sm:w-auto shadow-2xs"
              >
                <span>How It Works (4 Steps)</span>
              </a>
            </div>

            {/* Clinical Trust Metrics Row */}
            <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-sm">
                  <Activity className="w-4 h-4" />
                  <span>94.2%</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Biomarker reversal</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[#004b70] font-bold text-sm">
                  <Stethoscope className="w-4 h-4" />
                  <span>1-on-1</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Certified dietitians</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-sky-700 font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>&lt; 24h</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Care desk reachout</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-amber-700 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100%</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">DISHA / HIPAA safe</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Clinical Snapshot Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Subtle ambient halo */}
              <div 
                aria-hidden="true" 
                className="absolute -top-10 -right-10 w-72 h-72 bg-[#004b70]/10 rounded-full blur-3xl -z-10" 
              />

              {/* Main Card */}
              <div className="luxury-card rounded-3xl p-6 sm:p-7 space-y-5 bg-white">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#004b70]">
                      Verified Patient Outcome
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    16-Week Review
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#0a1922]">Vikramaditya S. (44y)</h3>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      Reversed Pre-Diabetes
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Supervised by Clinical Nutrition Specialist</p>
                </div>

                {/* Primary Metric Transformations */}
                <div className="space-y-3 pt-1">
                  {/* HbA1c */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Glycated Hemoglobin (HbA1c)</span>
                      <span className="text-xs text-slate-400">Target: &lt; 5.7%</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="text-xs text-rose-500 line-through">8.4%</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        <strong className="text-sm font-bold text-emerald-600">5.5%</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700">Normalized (Non-diabetic)</span>
                    </div>
                  </div>

                  {/* Fasting Insulin */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Fasting Insulin</span>
                      <span className="text-xs text-slate-400">HOMA-IR Score: 4.2 ➔ 1.1</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="text-xs text-rose-500 line-through">24.8</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        <strong className="text-sm font-bold text-emerald-600">8.2 uIU</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700">-67% Resistance</span>
                    </div>
                  </div>

                  {/* Weight / Visceral Fat */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Body Composition</span>
                      <span className="text-xs text-slate-400">Visceral Fat Level</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="text-xs text-slate-400 line-through">92.4 kg</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        <strong className="text-sm font-bold text-slate-900">81.2 kg</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700">-11.2 kg (Preserved Muscle)</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[11px] font-medium">Metformin discontinued with MD consent</span>
                  </div>
                  <button 
                    onClick={() => scrollToForm('diabetes-reversal')} 
                    className="text-[11px] font-bold text-[#004b70] hover:underline"
                  >
                    Start Similar Plan →
                  </button>
                </div>
              </div>

              {/* Floating Accents */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-lg flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>1-on-1 WhatsApp Care Desk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL SPECIALTIES & CONDITIONS WE TREAT (New Core Section) */}
      <section id="specialties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Targeted Care Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#0a1922] font-serif-display tracking-tight">
            Specialized Conditions We Treat
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every metabolic condition requires a distinct biological approach. Our dietitians craft protocols around your exact lab biomarkers and hormonal pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINICAL_CONDITIONS.map((cond: ClinicalCondition) => (
            <div 
              key={cond.id} 
              className="luxury-card rounded-3xl p-7 space-y-6 flex flex-col justify-between group cursor-pointer"
              onClick={() => scrollToForm(
                cond.id === 'diabetes' ? 'diabetes-reversal' :
                cond.id === 'pcos' ? 'pcos-pcod' :
                cond.id === 'fatty-liver' ? 'fatty-liver-lipids' :
                cond.id === 'gut-health' ? 'gut-health' :
                cond.id === 'thyroid' ? 'thyroid-autoimmune' : 'athletic-longevity'
              )}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70]">
                    {cond.badge}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#004b70] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-[#0a1922] font-serif-display group-hover:text-[#004b70] transition-colors">
                    {cond.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cond.tagline}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Target Biomarkers
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cond.biomarkers.map((b: string, idx: number) => (
                      <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#004b70]">
                <span>Start Intake for this Goal</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW BECOMING A CLIENT WORKS (Connected Roadmap matching Screenshot 4) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#0a1922] font-serif-display tracking-tight">
            How Becoming a Client Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Because our nutrition plans are medical-grade and tailored to your specific lab work, we guide every new client through a dedicated 4-step onboarding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="luxury-card rounded-3xl p-8 space-y-6 flex flex-col justify-between relative">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 01
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-[#0a1922]">1. Request Onboarding</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Submit your contact details and primary health goals via the form below.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#004b70] font-semibold">
              <span>Quick 2-minute form</span>
              <span className="text-slate-400 font-normal">Free intake</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="luxury-card rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 02
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-[#0a1922]">2. Account Creation</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our clinical care coordinator contacts you within 24 hours to create your account and issue your intake assessment.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#004b70] font-semibold">
              <span>Within 24 Hours</span>
              <span className="text-slate-400 font-normal">Care Desk Lead</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="luxury-card rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 03
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-[#0a1922]">3. 1-on-1 Consultation</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Meet with your certified dietitian to review blood biomarkers, metabolic history, and target health parameters.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#004b70] font-semibold">
              <span>60-Min Deep Dive</span>
              <span className="text-slate-400 font-normal">Clinical Dietitian</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="luxury-card rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#e8f4f8] text-[#004b70] flex items-center justify-center shadow-2xs">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 04
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-[#0a1922]">4. Active Mobile Care</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Sign in to the RestoreLife app to access your customized meal plans, healthy recipes, tracking, and ongoing coaching.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#004b70] font-semibold">
              <span>Continuous Daily Care</span>
              <span className="text-slate-400 font-normal">Mobile Portal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL LAB OUTCOMES & BIOMARKER EVIDENCE */}
      <section id="results" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Evidence-Based Practice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#0a1922] font-serif-display tracking-tight">
              Real Lab Outcomes. Restored Vitality.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Documented biomarker shifts under personalized 1-on-1 medical nutrition therapy.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Outcomes' },
              { id: 'diabetes', label: 'Diabetes & Glucose' },
              { id: 'pcos', label: 'PCOS & Hormones' },
              { id: 'liver', label: 'Liver & Lipids' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveResultCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeResultCategory === cat.id
                    ? 'bg-[#004b70] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResults.map((res, i) => (
            <div key={i} className="luxury-card rounded-3xl p-7 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#004b70]">{res.name} ({res.age}y)</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#e8f4f8] text-[#004b70]">
                    {res.duration}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-800">{res.condition}</p>
                  <p className="text-[11px] text-slate-400">{res.city}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{res.quote}"
                </p>
              </div>

              {/* Lab Biomarker Chips */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Primary Marker</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className="text-slate-400 line-through text-[11px]">{res.hba1c.before}</span>
                    <span className="text-emerald-700 text-xs">{res.hba1c.after}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Shift</span>
                  <strong className="text-slate-900 font-bold text-xs">{res.weight.after}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REQUEST CLIENT ONBOARDING FORM (Matching Screenshot 2) */}
      <section id="onboarding-form" className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="luxury-card rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden bg-white">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f4f8] text-[#004b70] text-xs font-semibold">
              <Lock className="w-3.5 h-3.5" />
              <span>Confidential Intake Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0a1922] font-serif-display">
              Request Client Onboarding
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
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
                      : 'border-slate-200 focus:border-[#004b70] bg-white'
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
                      : 'border-slate-200 focus:border-[#004b70] bg-white'
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
                    : 'border-slate-200 focus:border-[#004b70] bg-white'
                }`}
              />
              {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
            </div>

            {/* Phone Number with Indian Flag Selector matching Screenshot 2 */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 px-3.5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 shrink-0 select-none">
                  <span className="text-base">🇮🇳</span>
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
                      : 'border-slate-200 focus:border-[#004b70] bg-white'
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
                  className={`w-full appearance-none px-4 py-3 rounded-2xl border text-sm bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 pr-10 cursor-pointer ${
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
                  className="w-full appearance-none px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#004b70]/10 pr-10 text-slate-800 cursor-pointer"
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
                Health Background &amp; Specific Goals (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share any existing conditions, current medications, or dietary preferences..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#004b70] focus:ring-2 focus:ring-[#004b70]/10 bg-white"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-sm font-semibold shadow-md shadow-[#004b70]/20 hover:shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Transmitting intake data...' : 'Submit Onboarding Request'}</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> No spam guaranteed
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Confidential Care
                </span>
                <span>•</span>
                <span>Response within 24h</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (Matching Screenshot 3) */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0a1922] font-serif-display">
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
                className="luxury-card rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-medium text-slate-900 text-sm sm:text-base hover:text-[#004b70] transition-colors cursor-pointer select-none"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#004b70] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help prompt */}
        <div className="text-center pt-4">
          <p className="text-xs sm:text-sm text-slate-500">
            Still have questions? Reach out to our dedicated care desk at{' '}
            <a 
              href="mailto:support@restorelife.co.in" 
              className="text-[#004b70] font-semibold underline underline-offset-2 hover:text-[#003854]"
            >
              support@restorelife.co.in
            </a>
            {onNavigateSupport && (
              <>
                {' '}or visit our{' '}
                <button 
                  onClick={onNavigateSupport}
                  className="text-[#004b70] font-semibold underline underline-offset-2 hover:text-[#003854] cursor-pointer"
                >
                  Help &amp; Support Center →
                </button>
              </>
            )}
          </p>
        </div>
      </section>

      {/* SUCCESS CONFIRMATION MODAL */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f4f8] text-[#004b70] shadow-2xs">
                <CheckCircle2 className="h-9 w-9 text-[#004b70]" />
              </div>
              <h3 className="font-serif-display font-normal text-2xl text-[#0a1922]">
                Onboarding Request Received
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed pt-1">
                Thank you{submittedData?.firstName ? `, ${submittedData.firstName}` : ''}! Our clinical care coordinator has received your details and will connect with you via {submittedData?.preferredMode || 'email'} within 24 hours to set up your account and schedule your 1-on-1 consultation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-5 space-y-2.5 text-xs text-slate-600">
              <p className="font-bold text-slate-800">What happens next:</p>
              <ul className="space-y-2 list-disc pl-4 text-slate-500">
                <li>Our clinical coordinator verifies your health goals</li>
                <li>You receive a secure link to upload prior blood reports</li>
                <li>Your dedicated dietitian is assigned for consultation</li>
                <li>RestoreLife mobile app access is provisioned</li>
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full rounded-full bg-[#004b70] hover:bg-[#003854] text-white text-sm font-semibold h-12 shadow-md shadow-[#004b70]/20 transition-all cursor-pointer"
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
