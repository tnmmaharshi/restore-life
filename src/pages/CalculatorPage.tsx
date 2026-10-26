import React, { useState, useMemo } from 'react';
import { NavigationPage, CalculatorState } from '../types';
import { computeHealthMetrics } from '../utils/calculator';
import { 
  Calculator, 
  Flame, 
  Dumbbell, 
  Droplet, 
  PieChart, 
  Scale, 
  ArrowRight, 
  Sparkles, 
  Info,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface CalculatorPageProps {
  onNavigate: (page: NavigationPage) => void;
  onApplyGoalToOnboarding?: (goalId: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate, onApplyGoalToOnboarding }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    age: 32,
    gender: 'male',
    heightCm: 175,
    weightKg: 78,
    waistCm: 88,
    neckCm: 39,
    hipCm: 98,
    activityLevel: 'moderate',
    goal: 'lose',
  });

  const results = useMemo(() => computeHealthMetrics(calcState), [calcState]);

  const handleStartConsultationWithMetrics = () => {
    let goalKey = 'weight-management';
    if (calcState.goal === 'gain') goalKey = 'athletic-performance';
    if (onApplyGoalToOnboarding) onApplyGoalToOnboarding(goalKey);
    onNavigate('get-started');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" /> Clinical Health Assessment Engine
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#004b70] tracking-tight font-heading">
          Clinical Biomarker, TDEE & Macro Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Compute your personalized Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), body fat percentage, and scientific macronutrient splits calibrated to your metabolic goal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Inputs Card */}
        <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <span>Your Physical Parameters</span>
            </h2>
            <button
              onClick={() => setCalcState({
                age: 30,
                gender: 'female',
                heightCm: 165,
                weightKg: 65,
                waistCm: 76,
                neckCm: 34,
                hipCm: 96,
                activityLevel: 'moderate',
                goal: 'lose',
              })}
              className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset
            </button>
          </div>

          <div className="space-y-5">
            {/* Gender Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Biological Sex</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCalcState({ ...calcState, gender: 'male' })}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    calcState.gender === 'male'
                      ? 'bg-[#004b70] text-white border-[#004b70] shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setCalcState({ ...calcState, gender: 'female' })}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    calcState.gender === 'female'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age & Height */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Age (years)</label>
                <input
                  type="number"
                  min="16"
                  max="95"
                  value={calcState.age}
                  onChange={(e) => setCalcState({ ...calcState, age: Number(e.target.value) || 0 })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Height (cm)</label>
                <input
                  type="number"
                  min="120"
                  max="230"
                  value={calcState.heightCm}
                  onChange={(e) => setCalcState({ ...calcState, heightCm: Number(e.target.value) || 0 })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            {/* Weight */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-700">Current Body Weight (kg)</label>
                <span className="font-extrabold text-emerald-700 text-sm">{calcState.weightKg} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                step="0.5"
                value={calcState.weightKg}
                onChange={(e) => setCalcState({ ...calcState, weightKg: Number(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Circumferences for US Navy Body Fat % */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <p className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Body Composition Tape Measures (Optional)</span>
                <span className="text-[10px] text-slate-400">For Body Fat %</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-500 font-medium">Waist (cm)</label>
                  <input
                    type="number"
                    value={calcState.waistCm}
                    onChange={(e) => setCalcState({ ...calcState, waistCm: Number(e.target.value) || 0 })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-500 font-medium">Neck (cm)</label>
                  <input
                    type="number"
                    value={calcState.neckCm}
                    onChange={(e) => setCalcState({ ...calcState, neckCm: Number(e.target.value) || 0 })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none"
                  />
                </div>
                {calcState.gender === 'female' && (
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-500 font-medium">Hips (cm)</label>
                    <input
                      type="number"
                      value={calcState.hipCm}
                      onChange={(e) => setCalcState({ ...calcState, hipCm: Number(e.target.value) || 0 })}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Activity Level */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Weekly Activity & Training</label>
              <select
                value={calcState.activityLevel}
                onChange={(e) => setCalcState({ ...calcState, activityLevel: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white focus:outline-none focus:border-emerald-600"
              >
                <option value="sedentary">Sedentary (Desk Job, little to no exercise)</option>
                <option value="light">Lightly Active (1 to 3 days/week walks or workouts)</option>
                <option value="moderate">Moderately Active (3 to 5 days/week resistance training/cardio)</option>
                <option value="very">Very Active (6 to 7 days/week intense exercise)</option>
                <option value="athlete">Athlete / Extreme (Twice a day intense physical training)</option>
              </select>
            </div>

            {/* Health & Physique Goal */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Primary Goal</label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'lose', label: 'Fat Loss (-500 kcal)', icon: <Flame className="w-3.5 h-3.5 text-amber-500" /> },
                  { id: 'maintain', label: 'Maintain & Tone', icon: <Scale className="w-3.5 h-3.5 text-emerald-600" /> },
                  { id: 'gain', label: 'Lean Bulk (+350 kcal)', icon: <Dumbbell className="w-3.5 h-3.5 text-[#004b70]" /> },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setCalcState({ ...calcState, goal: g.id as any })}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      calcState.goal === g.id
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-500'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {g.icon}
                    <span>{g.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Calorie & Macro Target Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#003652] via-[#004b70] to-emerald-900 text-white p-7 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Target Prescribed Intake</p>
                <h3 className="text-3xl font-extrabold text-white font-heading mt-0.5">
                  {results.dailyCalories.toLocaleString()} <span className="text-lg font-medium text-slate-300">kcal / day</span>
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 capitalize">
                {calcState.goal === 'lose' ? 'Caloric Deficit' : calcState.goal === 'gain' ? 'Caloric Surplus' : 'Maintenance'}
              </span>
            </div>

            {/* 3 Macro Pillars */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10 text-center space-y-1">
                <span className="text-[11px] font-bold text-emerald-300 uppercase">Protein</span>
                <p className="text-2xl font-extrabold text-white font-heading">{results.proteinGrams}g</p>
                <span className="text-[10px] text-slate-300">Muscle & Satiety</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10 text-center space-y-1">
                <span className="text-[11px] font-bold text-amber-300 uppercase">Carbohydrates</span>
                <p className="text-2xl font-extrabold text-white font-heading">{results.carbsGrams}g</p>
                <span className="text-[10px] text-slate-300">Glycogen Energy</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10 text-center space-y-1">
                <span className="text-[11px] font-bold text-cyan-300 uppercase">Healthy Fats</span>
                <p className="text-2xl font-extrabold text-white font-heading">{results.fatGrams}g</p>
                <span className="text-[10px] text-slate-300">Hormone Balance</span>
              </div>
            </div>

            {/* Quick Macro Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-300 font-semibold">
                <span>Protein ({Math.round((results.proteinGrams * 4 / results.dailyCalories) * 100)}%)</span>
                <span>Carbs ({Math.round((results.carbsGrams * 4 / results.dailyCalories) * 100)}%)</span>
                <span>Fats (25%)</span>
              </div>
              <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden flex">
                <div style={{ width: `${(results.proteinGrams * 4 / results.dailyCalories) * 100}%` }} className="bg-emerald-400 h-full" />
                <div style={{ width: `${(results.carbsGrams * 4 / results.dailyCalories) * 100}%` }} className="bg-amber-400 h-full" />
                <div style={{ width: `25%` }} className="bg-cyan-400 h-full" />
              </div>
            </div>
          </div>

          {/* Secondary Biomarker Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* BMI Card */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-wider">Body Mass Index</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                  {results.bmiCategory}
                </span>
              </div>
              <p className="text-3xl font-extrabold text-[#004b70] font-heading">{results.bmi}</p>
              <p className="text-[11px] text-slate-500">Target Clinical Range: 18.5 – 24.9</p>
            </div>

            {/* BMR Card */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-wider">Basal Metabolic Rate</span>
                <span className="text-[10px] text-slate-400">At Rest</span>
              </div>
              <p className="text-3xl font-extrabold text-slate-900 font-heading">{results.bmr} <span className="text-sm font-medium text-slate-400">kcal</span></p>
              <p className="text-[11px] text-slate-500">Mifflin-St Jeor formula</p>
            </div>

            {/* TDEE Card */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-wider">Maintenance TDEE</span>
                <Flame className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-3xl font-extrabold text-slate-900 font-heading">{results.tdee} <span className="text-sm font-medium text-slate-400">kcal</span></p>
              <p className="text-[11px] text-slate-500">Includes activity burn factor</p>
            </div>

            {/* Hydration Card */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-wider">Hydration Target</span>
                <Droplet className="w-4 h-4 text-cyan-600" />
              </div>
              <p className="text-3xl font-extrabold text-cyan-700 font-heading">{results.waterTargetLiters} <span className="text-sm font-medium text-slate-400">Liters</span></p>
              <p className="text-[11px] text-slate-500">35 ml per kg body weight</p>
            </div>
          </div>

          {/* Body Fat Estimation (if computed) */}
          {results.bodyFatPercent !== null && (
            <div className="p-5 rounded-3xl bg-emerald-50/70 border border-emerald-200/70 flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider">Estimated Body Fat % (US Navy)</p>
                <p className="text-2xl font-extrabold text-emerald-800 font-heading">
                  {results.bodyFatPercent}% <span className="text-xs font-normal text-emerald-700">({results.leanBodyMassKg} kg Lean Body Mass)</span>
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                Estimated Composition
              </span>
            </div>
          )}

          {/* Action Button: Book Consultation with these metrics */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Want a Certified Dietitian to Turn This into a Medical Meal Plan?</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Calculators only give estimates. Our clinical nutritionists review your specific blood lab panels to build customized recipes and adjustments.
              </p>
            </div>
            <button
              onClick={handleStartConsultationWithMetrics}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#004b70] to-emerald-600 hover:from-[#003652] hover:to-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Transfer Results to Consultation Intake</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
