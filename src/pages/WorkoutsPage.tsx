import React, { useState } from 'react';
import { NavigationPage, Workout } from '../types';
import { WORKOUTS } from '../data/mockData';
import { 
  Dumbbell, 
  Flame, 
  Clock, 
  HeartPulse, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  ArrowRight,
  Activity,
  Zap
} from 'lucide-react';

interface WorkoutsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const WorkoutsPage: React.FC<WorkoutsPageProps> = ({ onNavigate }) => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout>(WORKOUTS[0]);
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});

  const toggleExercise = (name: string) => {
    setCompletedExercises(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <Dumbbell className="w-3.5 h-3.5" /> Precision Exercise Physiology
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004b70] tracking-tight font-heading">
          Targeted Movement & Metabolic Conditioning
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Exercise tailored for clinical metabolic health. Stimulate GLUT4 glucose clearance, enhance mitochondrial density, and build functional muscle mass without nervous system exhaustion.
        </p>
      </div>

      {/* Heart Rate Zones Reference Pill */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-emerald-400" />
            <span>Clinical Heart Rate Zones in Our Programs</span>
          </h2>
          <span className="text-xs text-slate-400">Cardio-Metabolic Optimization</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-emerald-400 font-bold block text-sm">Zone 2 (60-70% MHR)</span>
            <p className="text-slate-300">"Conversational Pace". Mobilizes mitochondrial fat oxidation and clears circulating postprandial glucose.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-amber-400 font-bold block text-sm">Zone 3-4 (70-85% MHR)</span>
            <p className="text-slate-300">Cardio-strength hybrid. Elevates excess post-exercise oxygen consumption (EPOC) and builds cardiovascular output.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-rose-400 font-bold block text-sm">Zone 5 Intervals (85-95% MHR)</span>
            <p className="text-slate-300">Short interval bursts. Upregulates VO2 max and insulin sensitivity when paired with high recovery nutrition.</p>
          </div>
        </div>
      </div>

      {/* Main Interactive Workout Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left selector */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Select Movement Session</h3>
          <div className="space-y-3">
            {WORKOUTS.map((w) => {
              const isSelected = selectedWorkout.id === w.id;
              return (
                <div
                  key={w.id}
                  onClick={() => setSelectedWorkout(w)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'border-emerald-500 bg-white shadow-md ring-2 ring-emerald-400/50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px]">
                      {w.level}
                    </span>
                    <span className="text-slate-400 font-semibold">{w.durationMinutes} mins • ~{w.caloriesBurnEstimate} kcal</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{w.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{w.targetArea}</p>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-3xl bg-[#e8f4f8] border border-[#004b70]/10 space-y-3">
            <h4 className="text-xs font-bold text-[#004b70] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Exercise Safety Protocol</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every client's workout plan is calibrated based on joint mobility, heart rate variability, and clinical lab biomarkers. We never recommend exercise that strains adrenal cortisol in PCOS or unmonitored cardiovascular risks.
            </p>
          </div>
        </div>

        {/* Right Workout Detail & Exercises Tracker */}
        <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">{selectedWorkout.targetArea}</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{selectedWorkout.title}</h2>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="font-semibold text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {selectedWorkout.durationMinutes} mins
              </span>
              <span className="font-semibold text-amber-600 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> {selectedWorkout.caloriesBurnEstimate} kcal
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {selectedWorkout.summary}
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 block font-semibold">Equipment Needed</span>
              <strong className="text-slate-800">{selectedWorkout.equipment}</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 block font-semibold">Prescribed Heart Rate</span>
              <strong className="text-emerald-700">{selectedWorkout.heartRateZone}</strong>
            </div>
          </div>

          {/* Exercise list */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Prescribed Exercise Circuit ({selectedWorkout.exercises.length} Movements)
            </h4>

            <div className="space-y-3">
              {selectedWorkout.exercises.map((ex, i) => {
                const isDone = !!completedExercises[ex.name];
                return (
                  <div
                    key={i}
                    onClick={() => toggleExercise(ex.name)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isDone
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-slate-200/80 hover:border-slate-300 bg-slate-50/40'
                    }`}
                  >
                    <div className="mt-0.5">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                        isDone ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'
                      }`}>
                        {isDone && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <h5 className={`font-bold text-sm ${isDone ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                          {i + 1}. {ex.name}
                        </h5>
                        <span className="text-xs font-bold text-[#004b70] bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                          {ex.sets} Sets × {ex.reps}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        <strong>Form Cue:</strong> {ex.cue}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Rest between sets: {ex.restSeconds} seconds
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">
              Want our exercise physiologist to build your weekly training split?
            </span>
            <button
              onClick={() => onNavigate('get-started')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#004b70] to-emerald-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Get Matched With a Coach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
