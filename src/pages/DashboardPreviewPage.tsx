import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Video, 
  Calendar, 
  CheckCircle2, 
  Droplet, 
  Apple
} from 'lucide-react';

interface DashboardPreviewPageProps {
  onNavigate?: (page: NavigationPage) => void;
}

export const DashboardPreviewPage: React.FC<DashboardPreviewPageProps> = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'practitioner'>('client');
  const [waterCups, setWaterCups] = useState(6); // 6 x 250ml = 1.5L
  const [mealChecked, setMealChecked] = useState<Record<string, boolean>>({
    breakfast: true,
    lunch: true,
    snack: false,
    dinner: false,
  });

  const toggleMeal = (k: string) => {
    setMealChecked(prev => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Banner explaining the preview */}
      <div className="p-6 rounded-3xl bg-[#004b70] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1.5 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <span>Live System Mockup</span>
          </div>
          <h1 className="text-2xl font-bold font-heading text-white">RestoreLife App & Clinical Portal Preview</h1>
          <p className="text-xs text-slate-200">
            This interactive preview demonstrates what enrolled clients and assigned clinical dietitians experience inside the private RestoreLife ecosystem.
          </p>
        </div>
        <div className="flex gap-2 bg-white/10 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab('client')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'client' ? 'bg-white text-[#004b70] shadow-sm' : 'text-white/80 hover:text-white'
            }`}
          >
            Client App View
          </button>
          <button
            onClick={() => setActiveTab('practitioner')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'practitioner' ? 'bg-white text-[#004b70] shadow-sm' : 'text-white/80 hover:text-white'
            }`}
          >
            Dietitian Console
          </button>
        </div>
      </div>

      {activeTab === 'client' ? (
        /* CLIENT APP EXPERIENCE */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Today's Protocol */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Greeting */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Client Portal</p>
                <h2 className="text-2xl font-bold text-slate-900 font-heading">Welcome Back, Vikramaditya</h2>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Week 6 of 12 (Metabolic Reset)
              </span>
            </div>

            {/* Quick Macro & Calorie Ring Bar */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 font-bold block uppercase tracking-wider">Today's Calorie Target</span>
                  <p className="text-2xl font-extrabold text-[#004b70] font-heading mt-0.5">
                    1,420 <span className="text-xs text-slate-400 font-normal">/ 1,850 kcal consumed</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-700 font-bold block">430 kcal remaining</span>
                  <span className="text-[11px] text-slate-400">On Track for Fat Loss</span>
                </div>
              </div>

              {/* Progress bars */}
              <div className="grid grid-cols-3 gap-3 text-xs pt-1">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-semibold text-slate-600">Protein</span>
                    <span className="font-bold text-emerald-700">115 / 145g</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '79%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-semibold text-slate-600">Carbs</span>
                    <span className="font-bold text-amber-700">130 / 165g</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-semibold text-slate-600">Fats</span>
                    <span className="font-bold text-cyan-700">42 / 50g</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Prescribed Meals List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Apple className="w-5 h-5 text-emerald-600" />
                  <span>Today's Prescribed Clinical Meals</span>
                </h3>
                <span className="text-xs text-slate-500">Tap to log adherence</span>
              </div>

              <div className="space-y-3">
                {[
                  { key: 'breakfast', time: '8:30 AM', title: 'Avocado, Poached Egg & Sprouted Sourdough', macros: '20g P • 390 kcal', tags: 'Insulin Stabilizing' },
                  { key: 'lunch', time: '1:15 PM', title: 'Mediterranean Salmon, Quinoa & Greens', macros: '42g P • 520 kcal', tags: 'High Omega-3' },
                  { key: 'snack', time: '4:45 PM', title: 'Turmeric Golden Protein Smoothie', macros: '30g P • 310 kcal', tags: 'Post-Workout DOMS' },
                  { key: 'dinner', time: '8:00 PM', title: 'Herb Grilled Chicken with Roasted Sweet Potato', macros: '48g P • 540 kcal', tags: 'Glycemic Buffer' },
                ].map((meal) => {
                  const isDone = mealChecked[meal.key];
                  return (
                    <div
                      key={meal.key}
                      onClick={() => toggleMeal(meal.key)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isDone ? 'border-emerald-300 bg-emerald-50/40' : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                          isDone ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'
                        }`}>
                          {isDone && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400">{meal.time}</span>
                            <span className="text-xs font-bold text-slate-900 truncate">{meal.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-500">{meal.macros} • <span className="text-emerald-700 font-semibold">{meal.tags}</span></p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                        {isDone ? 'Logged' : 'Pending'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Daily Water Tracker */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-cyan-600" />
                    <span>Hydration Progress ({waterCups * 250} ml / 2,800 ml)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Hydration maintains glomerular filtration and electrolyte balance.</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setWaterCups(Math.max(0, waterCups - 1))}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setWaterCups(waterCups + 1)}
                    className="w-7 h-7 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Water Cups Graphic */}
              <div className="flex gap-2">
                {[...Array(11)].map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setWaterCups(i + 1)}
                    className={`flex-1 h-7 rounded-md cursor-pointer transition-colors ${
                      i < waterCups ? 'bg-cyan-500' : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                    title={`Glass ${i + 1} (250 ml)`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Appointments & Care Team */}
          <div className="lg:col-span-4 space-y-6">
            {/* Upcoming Video Consultation Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#003652] to-[#004b70] text-white shadow-lg space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">
                  Confirmed Session
                </span>
                <span className="text-slate-300">Bi-Weekly Review</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white font-heading">1-on-1 Clinical Video Review</h4>
                <p className="text-xs text-slate-200">With Dr. Ananya Sen, PhD, RD</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 space-y-2 text-xs">
                <p className="flex items-center gap-2 text-slate-200">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Thursday, Oct 29 • 5:30 PM IST</span>
                </p>
                <p className="flex items-center gap-2 text-slate-200">
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span>Google Meet Video Link Active</span>
                </p>
              </div>

              <a
                href="https://meet.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Video className="w-4 h-4" />
                <span>Join Video Consultation</span>
              </a>
            </div>

            {/* Recent Lab Markers Overview */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">Your Biomarker Trajectory</h4>
                <span className="text-[10px] text-emerald-700 font-bold px-2 py-0.5 rounded bg-emerald-50">
                  Improving
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <strong className="text-slate-800">HbA1c</strong>
                    <p className="text-[10px] text-slate-400">Target &lt; 5.6%</p>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-emerald-700 text-sm">5.4%</span>
                    <span className="block text-[10px] text-slate-400 line-through">was 6.8%</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <strong className="text-slate-800">Fasting Insulin</strong>
                    <p className="text-[10px] text-slate-400">Target &lt; 10 µIU/mL</p>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-emerald-700 text-sm">7.8 µIU</span>
                    <span className="block text-[10px] text-slate-400 line-through">was 24 µIU</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <strong className="text-slate-800">Triglycerides</strong>
                    <p className="text-[10px] text-slate-400">Target &lt; 150 mg/dL</p>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-emerald-700 text-sm">118 mg/dL</span>
                    <span className="block text-[10px] text-slate-400 line-through">was 210 mg/dL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* PRACTITIONER / DIETITIAN DASHBOARD VIEW (from restorelife.co.in /) */
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">All Active Clients</span>
              <p className="text-2xl font-bold text-slate-900">142</p>
              <p className="text-[11px] text-slate-500">Total in clinical roster</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Follow Ups Due</span>
              <p className="text-2xl font-bold text-emerald-700">12</p>
              <p className="text-[11px] text-slate-500">Pending this week</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Today's Appointments</span>
              <p className="text-2xl font-bold text-[#004b70]">5</p>
              <p className="text-[11px] text-slate-500">Video consultations</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Metabolic Adherence</span>
              <p className="text-2xl font-bold text-emerald-700">92%</p>
              <p className="text-[11px] text-slate-500">Weekly meal logs completed</p>
            </div>
          </div>

          {/* Today's Client Roster */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">Today's Scheduled Consultations</h3>
            <div className="divide-y divide-slate-100 text-xs">
              {[
                { name: 'Vikramaditya Sharma', time: '10:00 AM', track: 'Pre-Diabetes & HbA1c', status: 'Attended' },
                { name: 'Priya Narayanan', time: '11:30 AM', track: 'PCOS Hormonal Balance', status: 'Confirmed' },
                { name: 'Dr. Rohan Mehra', time: '2:15 PM', track: 'Lipid & ApoB Optimization', status: 'Confirmed' },
                { name: 'Sunita Krishnan', time: '4:00 PM', track: 'Gut Health & IBS Protocol', status: 'Pending' },
                { name: 'Arjun Das', time: '5:30 PM', track: 'Athletic Hypertrophy Fuel', status: 'Pending' },
              ].map((c, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e8f4f8] text-[#004b70] font-bold flex items-center justify-center text-[10px]">
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{c.name}</p>
                      <p className="text-slate-500">{c.track}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-600">{c.time}</span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                      c.status === 'Attended' ? 'bg-slate-100 text-slate-700' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      {c.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
