import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { PROGRAMS } from '../data/mockData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Dumbbell, 
  ShieldCheck, 
  HeartPulse 
} from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectProgram?: (programId: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate, onSelectProgram }) => {
  const [selectedProgramId, setSelectedProgramId] = useState(PROGRAMS[0].id);

  const selectedProgram = PROGRAMS.find(p => p.id === selectedProgramId) || PROGRAMS[0];

  const handleEnroll = (id: string) => {
    if (onSelectProgram) onSelectProgram(id);
    onNavigate('get-started');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <HeartPulse className="w-3.5 h-3.5" /> Specialized Clinical Tracks
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004b70] tracking-tight font-heading">
          Precision Clinical & Fitness Programs
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Every program combines medical nutrition therapy, biomarker monitoring, and individualized physical conditioning. Discover the clinical track engineered for your unique physiology.
        </p>
      </div>

      {/* Program Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {PROGRAMS.map((program) => {
          const isSelected = selectedProgramId === program.id;
          return (
            <button
              key={program.id}
              onClick={() => setSelectedProgramId(program.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? 'bg-[#004b70] text-white shadow-md font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {program.title.split('&')[0]}
            </button>
          );
        })}
      </div>

      {/* Featured Detailed Program Card */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                {selectedProgram.badge}
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Duration: {selectedProgram.durationWeeks} Weeks
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <Dumbbell className="w-3.5 h-3.5" /> {selectedProgram.workoutIntensity}
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004b70] font-heading">
                {selectedProgram.title}
              </h2>
              <p className="text-sm text-emerald-700 font-semibold mt-1">{selectedProgram.subtitle}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedProgram.description}
            </p>

            {/* Target Physiological Focus & Biomarkers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#e8f4f8]/80 border border-[#004b70]/10 space-y-1">
                <span className="text-[11px] font-bold text-[#004b70] uppercase tracking-wider">Clinical Nutrition Strategy</span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{selectedProgram.dietFocus}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 space-y-1">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Tracked Blood Biomarkers</span>
                <p className="text-xs text-emerald-950 font-bold">{selectedProgram.keyBiomarkers.join(' • ')}</p>
              </div>
            </div>

            {/* What is Included */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">What Is Included in this Program:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {selectedProgram.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-50 border border-slate-200/90 p-6 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Enrollment Step</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Ready for Personalized Care?</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Meet with our clinical nutrition team to examine your lab work and begin this protocol.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleEnroll(selectedProgram.id)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#004b70] to-emerald-600 text-white font-bold text-sm shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Enrollment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('recipes')}
                className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Explore Clinical Recipes
              </button>
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-2 text-[11px] text-slate-500">
              <p className="flex items-center gap-1.5 text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 1-on-1 Certified Dietitian Support
              </p>
              <p>Weekly dietary adjustments based on weigh-ins and symptom tracking.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Programs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#004b70] font-heading">All 6 Signature Curriculums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProgramId(p.id)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedProgramId === p.id
                  ? 'border-emerald-500 bg-emerald-50/40 shadow-lg ring-2 ring-emerald-400/50'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-400">{p.durationWeeks} Weeks</span>
                  <span className="font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">{p.badge}</span>
                </div>
                <h3 className="font-bold text-base text-[#004b70]">{p.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2">{p.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>{selectedProgramId === p.id ? 'Currently Selected' : 'View Full Details'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
