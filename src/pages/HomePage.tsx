import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  HEALTH_GOALS, 
  PROGRAMS, 
  BIOMARKER_TRANSFORMATIONS, 
  CLINICAL_TEAM, 
  FAQS, 
  RECIPES, 
  WORKOUTS 
} from '../data/mockData';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Dumbbell, 
  ShieldCheck, 
  TrendingDown, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Apple, 
  Stethoscope,
  Star
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedGoalId, setSelectedGoalId] = useState(HEALTH_GOALS[0].id);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const activeGoal = HEALTH_GOALS.find(g => g.id === selectedGoalId) || HEALTH_GOALS[0];

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden bg-gradient-to-b from-[#e8f4f8]/70 via-white to-transparent">
        {/* Background decorative health orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-200/40 via-cyan-100/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-500/30 shadow-sm text-xs font-semibold text-[#004b70]">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-bold uppercase tracking-wider text-[11px]">Clinical Nutrition Therapy</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">Precision Fitness Medicine</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#004b70] tracking-tight font-heading leading-[1.12]">
                Where Clinical Science Meets <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-[#004b70] bg-clip-text text-transparent">
                  Peak Physical Vitality.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Reverse pre-diabetes, balance PCOS hormones, repair your gut microbiome, and build lean muscle. 
                Get paired 1-on-1 with certified clinical dietitians and exercise physiologists who personalize your care to your exact blood biomarkers.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('get-started')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#004b70] to-emerald-600 hover:from-[#003652] hover:to-emerald-700 text-white font-bold text-base shadow-xl shadow-[#004b70]/25 transition-all hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  <span>Request Clinical Onboarding</span>
                  <ArrowRight className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('programs')}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span>Explore Clinical Tracks</span>
                </button>
              </div>

              {/* Social Proof Mini Bar */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src={BIOMARKER_TRANSFORMATIONS[0].avatar} alt="Client" />
                    <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src={BIOMARKER_TRANSFORMATIONS[1].avatar} alt="Client" />
                    <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src={BIOMARKER_TRANSFORMATIONS[2].avatar} alt="Client" />
                  </div>
                  <span><strong>1,200+</strong> Active transformations</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-700">4.9/5</span>
                  <span className="text-slate-400">(Clinical Efficacy)</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Certified RDs & Sports Coaches</span>
                </div>
              </div>
            </div>

            {/* Right Live Biomarker & Workout Interactive Preview Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-2xl p-6 space-y-6">
                {/* Header of Card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm border border-emerald-200">
                      VS
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Active Client Case</p>
                      <h4 className="text-sm font-bold text-slate-900">Vikramaditya S. (Age 44)</h4>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Week 12 Outcome
                  </span>
                </div>

                {/* Biomarker Delta Pill */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>HbA1c Level</span>
                      <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-emerald-700">5.4%</span>
                      <span className="text-xs line-through text-slate-400">6.8%</span>
                    </div>
                    <p className="text-[10px] text-emerald-700 font-semibold mt-1">Pre-Diabetes Reversed</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Body Fat %</span>
                      <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-slate-900">18.2%</span>
                      <span className="text-xs line-through text-slate-400">27.5%</span>
                    </div>
                    <p className="text-[10px] text-emerald-700 font-semibold mt-1">-11.2 kg Fat Lost</p>
                  </div>
                </div>

                {/* Today's Prescribed Nutrition & Workout */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Today's Precision Care Protocol</p>
                  
                  {/* Meal Plan Item */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#e8f4f8]/60 border border-[#004b70]/10">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#004b70] shadow-xs">
                      <Apple className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-800 truncate">Mediterranean Salmon & Quinoa Bowl</p>
                      <p className="text-[11px] text-slate-500">42g Protein • 520 kcal • Low Glycemic Index</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 px-2 py-0.5 rounded bg-emerald-100">Adhered</span>
                  </div>

                  {/* Workout Item */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/50">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-amber-600 shadow-xs">
                      <Dumbbell className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-800 truncate">Zone 2 Aerobic Base + Compound Lifts</p>
                      <p className="text-[11px] text-slate-500">45 Mins • 380 kcal • Heart Rate Zone 2-3</p>
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 px-2 py-0.5 rounded bg-amber-100">Completed</span>
                  </div>
                </div>

                {/* Direct Dietitian Interaction Bar */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                      RD
                    </div>
                    <span className="text-slate-600"><strong>Dr. Sen (RD)</strong> updated your macro targets</span>
                  </div>
                  <button 
                    onClick={() => onNavigate('dashboard-preview')}
                    className="text-xs font-bold text-[#004b70] hover:text-emerald-600 hover:underline"
                  >
                    View Portal →
                  </button>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white rounded-2xl border border-slate-200 p-3 shadow-xl items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Physician-Reviewed</p>
                  <p className="text-[11px] text-slate-500">Biomarker lab integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & PROOF BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#003652] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading">94.2%</p>
              <p className="text-sm font-semibold text-slate-200">Biomarker Improvement</p>
              <p className="text-xs text-slate-400">Documented HbA1c, lipid & insulin shifts</p>
            </div>
            <div className="space-y-1 pt-6 lg:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">15,000+ kg</p>
              <p className="text-sm font-semibold text-slate-200">Sustainably Lost</p>
              <p className="text-xs text-slate-400">Zero crash diets, muscle preserved</p>
            </div>
            <div className="space-y-1 pt-6 lg:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading">24 hrs</p>
              <p className="text-sm font-semibold text-slate-200">Care Desk Response</p>
              <p className="text-xs text-slate-400">Rapid intake and consultation booking</p>
            </div>
            <div className="space-y-1 pt-6 lg:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">1-on-1</p>
              <p className="text-sm font-semibold text-slate-200">Certified Dietitian Match</p>
              <p className="text-xs text-slate-400">Dedicated care coordinator & exercise coach</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON: GENERIC FITNESS APPS VS RESTORELIFE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Why Generic Diets Fail
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004b70] font-heading">
            The Difference Between Generic Fitness Apps and Clinical Nutrition Therapy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Weight gain, diabetes, and fatigue are rooted in cellular biochemistry, not simply "willpower." Here is why our clinical model delivers lasting reversal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Generic Fitness */}
          <div className="rounded-3xl border border-rose-200 bg-rose-50/40 p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                ✕
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Standard Fitness App or Generic Diet</h3>
                <p className="text-xs text-slate-500">Cookie-cutter automated approach</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>Automated 1,200 calorie starvation diets that crash metabolic thyroid function.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>Zero consideration of blood markers (fasting insulin, triglycerides, liver enzymes).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>Random high-intensity workouts that trigger cortisol spikes and worsen PCOS.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>Automated chatbots instead of real licensed clinical healthcare professionals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>95% weight regain once you inevitably stop the restrictive starvation diet.</span>
              </li>
            </ul>
          </div>

          {/* RestoreLife Clinical Model */}
          <div className="rounded-3xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50/60 via-white to-[#e8f4f8]/50 p-8 space-y-5 shadow-xl relative">
            <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-md">
              The RestoreLife Standard
            </span>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#004b70]">RestoreLife Medical Nutrition Therapy</h3>
                <p className="text-xs text-emerald-700 font-medium">Physician-backed, biomarker-targeted</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Custom macros calibrated to your metabolic rate, lean body mass, and activity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct analysis of your blood panels (HbA1c, HOMA-IR, ApoB, Thyroid, hs-CRP).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zone 2 cardio and progressive resistance training designed for glycemic clearance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>1-on-1 assigned Certified Clinical Dietitian (RD) with daily WhatsApp & video care.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sustainable lifestyle habits you can keep for decades without deprivation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTERACTIVE HEALTH GOAL SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Interactive Protocol Finder
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              What Is Your Primary Health & Fitness Focus?
            </h2>
            <p className="text-sm text-slate-300">
              Tap any goal to discover our clinical intervention strategy, timeline, and movement pairing.
            </p>
          </div>

          {/* Goal Selector Buttons */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {HEALTH_GOALS.map((goal) => {
              const isSelected = selectedGoalId === goal.id;
              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoalId(goal.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/30 scale-105'
                      : 'bg-white/10 hover:bg-white/15 text-slate-200'
                  }`}
                >
                  {goal.label}
                </button>
              );
            })}
          </div>

          {/* Selected Goal Spotlight Card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {activeGoal.category} track
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Expected Pace: <strong>{activeGoal.recommendedPace}</strong>
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">{activeGoal.label}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activeGoal.description}</p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" /> Customized weekly nutrition plans
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" /> Biomarker blood test review
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" /> Targeted exercise routines
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={() => onNavigate('get-started')}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Start This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('programs')}
                  className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>View Program Curriculum</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CLINICAL & FITNESS PROGRAMS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Care Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004b70] font-heading">
              Evidence-Based Clinical Programs
            </h2>
            <p className="text-sm text-slate-600">
              Designed by registered clinical dietitians and exercise scientists for measurable physiological outcomes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('programs')}
            className="text-sm font-bold text-[#004b70] hover:text-emerald-600 flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>View All Detailed Curriculums</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {program.durationWeeks} Weeks
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {program.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#004b70] group-hover:text-emerald-700 transition-colors font-heading">
                    {program.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{program.subtitle}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {program.description}
                </p>

                {/* Workout intensity & biomarkers */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 font-medium">Movement Intensity:</span>
                    <span className="font-bold text-[#004b70]">{program.workoutIntensity}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 font-medium">Target Markers:</span>
                    <span className="font-semibold text-emerald-700 truncate max-w-[170px]">
                      {program.keyBiomarkers.join(', ')}
                    </span>
                  </div>
                </div>

                {/* Key features bullets */}
                <ul className="space-y-2 text-xs text-slate-600">
                  {program.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('get-started')}
                  className="text-xs font-bold text-[#004b70] hover:text-emerald-600 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Request Enrollment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </button>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-xs text-slate-400 hover:text-slate-700 font-medium"
                >
                  Learn details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BIOMARKER TRANSFORMATIONS (REAL OUTCOMES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Real Lab Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004b70] font-heading">
            Not Just Weight Loss. Biological Health Restored.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See the documented clinical shifts in blood sugar, hormones, arterial lipids, and body composition from clients on our clinical tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BIOMARKER_TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-md hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Client header */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.clientName}
                    className="w-13 h-13 rounded-2xl object-cover border-2 border-emerald-500/20"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{item.clientName}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.age} yrs • {item.city}</p>
                    <span className="inline-block mt-0.5 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {item.primaryCondition}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{m.label}</p>
                      <div className="flex items-baseline gap-1 my-0.5">
                        <span className="text-sm font-extrabold text-slate-900">{m.after}</span>
                        <span className="text-[10px] text-slate-400 line-through">{m.before}</span>
                      </div>
                      <p className="text-[10px] font-bold text-emerald-600">{m.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Care Duration: <strong>{item.durationMonths} Months</strong></span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Lab Data
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE RECIPES & WORKOUTS PREVIEW (HEALTH & FITNESS TOUCH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#e8f4f8] via-white to-emerald-50/50 border border-slate-200/80 p-8 sm:p-12 space-y-12 shadow-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                Active Nutrition & Movement
              </span>
              <h2 className="text-3xl font-extrabold text-[#004b70] font-heading">
                Delicious Clinical Recipes & Precision Workouts
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Nutrition should be delicious and workouts should energize rather than deplete you. Explore our macro-balanced culinary dishes and metabolic exercise protocols.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('recipes')}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-xs"
              >
                Explore All Recipes
              </button>
              <button
                onClick={() => onNavigate('workouts')}
                className="px-4 py-2.5 rounded-xl bg-[#004b70] text-white text-xs font-bold hover:bg-[#003652] transition-colors shadow-xs"
              >
                Movement Routines
              </button>
            </div>
          </div>

          {/* 3 Featured Recipes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Apple className="w-5 h-5 text-emerald-600" />
                <span>Featured Clinical Nutrition Plates</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RECIPES.slice(0, 3).map((r) => (
                <div
                  key={r.id}
                  onClick={() => onNavigate('recipes')}
                  className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={r.image} 
                      alt={r.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                      {r.category}
                    </span>
                    <span className="absolute top-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                      {r.calories} kcal
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {r.title}
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-1.5 rounded-lg bg-slate-50">
                        <span className="block text-[10px] text-slate-400">Protein</span>
                        <strong className="text-emerald-700">{r.protein}g</strong>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50">
                        <span className="block text-[10px] text-slate-400">Carbs</span>
                        <strong className="text-slate-800">{r.carbs}g</strong>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50">
                        <span className="block text-[10px] text-slate-400">Fats</span>
                        <strong className="text-slate-800">{r.fat}g</strong>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2">{r.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Featured Workouts */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-amber-600" />
                <span>Targeted Movement & Glycemic Cardio</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WORKOUTS.slice(0, 2).map((w) => (
                <div
                  key={w.id}
                  onClick={() => onNavigate('workouts')}
                  className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {w.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {w.durationMinutes} mins (~{w.caloriesBurnEstimate} kcal)
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#004b70] group-hover:text-emerald-700 transition-colors">
                      {w.title}
                    </h4>
                    <p className="text-xs text-slate-600">{w.summary}</p>
                    <div className="p-2.5 rounded-xl bg-slate-50 text-[11px] text-slate-600 font-medium">
                      <strong>Target Zone:</strong> {w.heartRateZone}
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004b70]">
                    <span>View {w.exercises.length} prescribed exercises</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL TEAM & ADVISORY BOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Medical & Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004b70] font-heading">
            Guided by Certified Clinical Dietitians & Sports Scientists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No influencers. No pseudoscience. Meet the clinical directors safeguarding your health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINICAL_TEAM.map((member, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border border-slate-200/90 p-5 shadow-xs hover:shadow-lg transition-all text-center space-y-4"
            >
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-3 border-emerald-500/30">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{member.name}</h4>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">{member.role}</p>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{member.credentials}</p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <span className="inline-block text-[10px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg">
                  Specialty: {member.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-[#004b70] font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Everything you need to know about our clinical onboarding, diet plans, and care desk.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = expandedFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-[#004b70] text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM INVITATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#003652] via-[#004b70] to-emerald-800 text-white p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Take the First Step Toward Sustainable Health
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Our clinical operations desk reaches out within 24 hours to schedule your 1-on-1 intake video consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('get-started')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Request Client Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Explore All Programs</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
