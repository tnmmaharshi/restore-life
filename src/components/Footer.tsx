import React from 'react';
import { NavigationPage } from '../types';
import { 
  HeartPulse, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00283d] text-slate-300 border-t border-slate-800">
      {/* Top Banner / Fast Consultation CTA */}
      <div className="bg-gradient-to-r from-[#003652] via-[#004b70] to-emerald-900/60 py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" /> Start Your Clinical Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ready to restore your metabolic health & peak fitness?
            </h2>
            <p className="text-sm text-slate-300">
              Join hundreds of clients who reversed pre-diabetes, stabilized PCOS hormones, and built lean muscle under 1-on-1 registered clinical dietitians.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleNav('programs')}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all hover:scale-105"
            >
              Explore Programs
            </button>
            <button
              onClick={() => handleNav('get-started')}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Request Onboarding</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => handleNav('home')} 
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-[#004b70] flex items-center justify-center text-white shadow-md">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white font-heading">
                Restore<span className="text-emerald-400">Life</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Clinical Medical Nutrition Therapy & Precision Fitness Coaching. We connect you with certified dietitians and exercise physiologists to optimize blood biomarkers, reverse chronic metabolic conditions, and build sustainable vitality.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:support@restorelife.co.in" className="hover:text-emerald-300 transition-colors">
                  support@restorelife.co.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sat, 9:00 AM – 6:00 PM IST</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>HIPAA & Indian Digital Health Data Compliant</span>
              </div>
            </div>
          </div>

          {/* Col 1: Clinical Programs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Programs & Care</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-emerald-300 transition-colors text-left">
                  Metabolic Reset
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-emerald-300 transition-colors text-left">
                  HbA1c Diabetes Reversal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-emerald-300 transition-colors text-left">
                  Athletic Conditioning
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-emerald-300 transition-colors text-left">
                  PCOS & Hormonal Health
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-emerald-300 transition-colors text-left">
                  Gut Repair & IBS
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-emerald-300 transition-colors text-left">
                  Cardio-Vascular Longevity
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Interactive Health Tools */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Tools & Hub</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('recipes')} className="hover:text-emerald-300 transition-colors text-left">
                  Clinical Recipe Library
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('workouts')} className="hover:text-emerald-300 transition-colors text-left">
                  Movement & Cardio Hub
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-emerald-300 transition-colors text-left">
                  Biomarker Methodology
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dashboard-preview')} className="hover:text-emerald-300 transition-colors text-left flex items-center gap-1.5">
                  <span>Mobile App Preview</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Help & Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('get-started')} className="hover:text-emerald-300 transition-colors text-left">
                  Get Started Flow
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-emerald-300 transition-colors text-left font-medium text-emerald-400">
                  Customer Support
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-emerald-300 transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-emerald-300 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-emerald-300 transition-colors text-left">
                  Grievance Officer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical disclaimer as seen in restorelife.co.in */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-xs text-slate-400 leading-relaxed space-y-2">
            <p className="font-semibold text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Medical Disclaimer & Practice Notice:
            </p>
            <p>
              Restore Life is a clinical medical nutrition therapy and health-fitness coaching platform. Content, macro/calorie calculations (BMI, BMR, TDEE), meal plans, recipes, and fitness routines are for nutritional and lifestyle guidance and do not replace emergency medical interventions, clinical diagnosis, or hospital medical treatment. Always consult your primary care physician before beginning new vigorous exercise or modifying prescribed medications.
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RestoreLife Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-slate-300 transition-colors">Privacy</button>
            <button onClick={() => handleNav('terms')} className="hover:text-slate-300 transition-colors">Terms</button>
            <button onClick={() => handleNav('support')} className="hover:text-slate-300 transition-colors">Support</button>
            <button onClick={() => handleNav('get-started')} className="hover:text-emerald-400 text-emerald-500 font-semibold transition-colors">Onboarding</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
