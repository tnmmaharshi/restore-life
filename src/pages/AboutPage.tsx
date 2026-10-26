import React from 'react';
import { NavigationPage } from '../types';
import { CLINICAL_TEAM } from '../data/mockData';
import { 
  ShieldCheck, 
  HeartPulse, 
  Activity, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  FlaskConical,
  Microscope,
  Stethoscope,
  Dna
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <FlaskConical className="w-3.5 h-3.5" /> Clinical Evidence & Biomarkers
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004b70] tracking-tight font-heading">
          The Science Behind RestoreLife
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          We bridge clinical medical nutrition therapy with exercise biomechanics to address root-cause metabolic dysfunction rather than treating superficial symptoms.
        </p>
      </div>

      {/* 4 Pillars of Physiological Restoration */}
      <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Our Clinical Framework</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            The 4 Biological Pillars of Metabolic Vitality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">1. Insulin Sensitivity & Glycemic Clearance</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We restore pancreatic beta-cell sensitivity through specific nutrient sequencing and muscle GLUT4 transporter upregulation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">2. Gut Mucosal Integrity & Microbiome</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Targeted short-chain fatty acids (SCFAs), polyphenol density, and prebiotic fibers to seal leaky tight junctions and eliminate endotoxemia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Dna className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">3. Systemic Anti-Inflammatory Signaling</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Optimizing omega-3 to omega-6 ratios and micronutrient cofactors to measurably lower high-sensitivity C-reactive protein (hs-CRP).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">4. Lean Muscle & Mitochondrial Health</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              High-protein thermic nutrition paired with progressive resistance training to stimulate muscle protein synthesis and prevent metabolic slowdown.
            </p>
          </div>
        </div>
      </div>

      {/* Biomarker Diagnostic Panels Tracked */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Biomarker Diagnostics
          </span>
          <h2 className="text-3xl font-extrabold text-[#004b70] font-heading">
            Objective Lab Markers We Track
          </h2>
          <p className="text-sm text-slate-600">
            We don't rely solely on the bathroom scale. We examine real biological parameters that determine long-term health and disease risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Glycemic Panel</span>
            <h3 className="text-lg font-bold text-slate-900">HbA1c & Fasting Glucose</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides a 90-day average of blood sugar attachment to hemoglobin. We target an optimal non-diabetic range of 5.0% - 5.5%.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Metabolic Panel</span>
            <h3 className="text-lg font-bold text-slate-900">Fasting Insulin & HOMA-IR</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Detects early insulin resistance up to 10 years before blood glucose rises. A crucial indicator for weight loss resistance and PCOS.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Cardiovascular Panel</span>
            <h3 className="text-lg font-bold text-slate-900">ApoB & Triglyceride / HDL Ratio</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Measures the total atherogenic particle burden circulating in the vascular system, providing far superior risk assessment than total cholesterol alone.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Inflammatory Panel</span>
            <h3 className="text-lg font-bold text-slate-900">High-Sensitivity CRP (hs-CRP)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              An acute-phase protein synthesized by the liver indicating systemic vascular and gut inflammation. Target: &lt; 1.0 mg/L.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Endocrine Panel</span>
            <h3 className="text-lg font-bold text-slate-900">LH/FSH, Free Testosterone & DHEA-S</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Essential for women managing PCOS and irregular cycles to evaluate ovarian and adrenal androgen production.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Hepatic & Metabolic</span>
            <h3 className="text-lg font-bold text-slate-900">Liver Enzymes (SGOT / SGPT)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assesses non-alcoholic fatty liver disease (NAFLD) and hepatic insulin sensitivity, reversable with targeted low-fructose nutrition.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership & Advisory Team */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Meet the Experts
          </span>
          <h2 className="text-3xl font-extrabold text-[#004b70] font-heading">
            Our Clinical & Sports Advisory Board
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINICAL_TEAM.map((m, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-500/30">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900">{m.name}</h4>
                <p className="text-xs font-bold text-emerald-700">{m.role}</p>
                <p className="text-[11px] text-slate-500 mt-1">{m.credentials}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Physician Collaboration Callout */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#e8f4f8] border border-[#004b70]/15 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-xl font-bold text-[#004b70] font-heading flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-emerald-600" />
            <span>We Work Alongside Your Treating Doctor</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Are you currently under the care of an endocrinologist, cardiologist, or family physician? We generate structured quarterly biomarker progress reports so your doctor can safely adjust or taper medications as your metabolic health improves.
          </p>
        </div>
        <button
          onClick={() => onNavigate('get-started')}
          className="px-6 py-3.5 rounded-xl bg-[#004b70] hover:bg-[#003652] text-white font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer"
        >
          Book Initial Consultation
        </button>
      </div>
    </div>
  );
};
