import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  HeartPulse, 
  Menu, 
  X, 
  Sparkles, 
  Calculator, 
  BookOpen, 
  Dumbbell, 
  UtensilsCrossed, 
  LayoutDashboard, 
  ShieldCheck,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: NavigationPage; label: string; icon: React.ReactNode; badge?: string }[] = [
    { page: 'home', label: 'Overview', icon: <HeartPulse className="w-4 h-4" /> },
    { page: 'programs', label: 'Programs', icon: <BookOpen className="w-4 h-4" /> },
    { page: 'calculator', label: 'Health Calculator', icon: <Calculator className="w-4 h-4" />, badge: 'Free Tool' },
    { page: 'recipes', label: 'Nutrition & Recipes', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { page: 'workouts', label: 'Movement & Fitness', icon: <Dumbbell className="w-4 h-4" /> },
    { page: 'about', label: 'Science & Team', icon: <ShieldCheck className="w-4 h-4" /> },
    { page: 'dashboard-preview', label: 'Client App', icon: <LayoutDashboard className="w-4 h-4" />, badge: 'Live Mockup' },
  ];

  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#003652] text-xs text-white/90 py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-[11px] border border-emerald-400/30">
              <Sparkles className="w-3 h-3 text-emerald-400" /> Evidence-Based Protocol
            </span>
            <span>Clinical Medical Nutrition Therapy & Precision Fitness Coaching</span>
          </div>
          <div className="flex items-center gap-6 text-white/80 text-[11px]">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('calculator')}>
              <Calculator className="w-3 h-3 text-emerald-400" /> Instant Biomarker & Macro Calculator
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <PhoneCall className="w-3 h-3" /> Clinical Desk: Mon–Sat 9AM–7PM IST
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#004b70] to-emerald-600 flex items-center justify-center text-white shadow-md shadow-[#004b70]/20 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#004b70] font-heading">
                  Restore<span className="text-emerald-600">Life</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Clinical + Fitness
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Clinical Nutrition & Precision Health Coaching
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#004b70] bg-[#e8f4f8]'
                      : 'text-slate-600 hover:text-[#004b70] hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNav('calculator')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#004b70] bg-slate-100 hover:bg-slate-200/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
              <span>Assess Health</span>
            </button>

            <button
              onClick={() => handleNav('get-started')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 ${
                currentPage === 'get-started'
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30 ring-2 ring-emerald-400'
                  : 'bg-gradient-to-r from-[#004b70] to-[#0b6897] hover:from-[#003652] hover:to-[#004b70] text-white shadow-[#004b70]/20 hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => handleNav('get-started')}
              className="px-3.5 py-2 rounded-xl bg-[#004b70] text-white text-xs font-bold sm:hidden"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#004b70] hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm pt-20" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="bg-white border-b border-slate-200 shadow-2xl p-6 space-y-3 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pb-3 border-b border-slate-100">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation Pages</p>
            </div>
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === item.page
                    ? 'bg-[#004b70] text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${currentPage === item.page ? 'bg-white/10 text-white' : 'bg-slate-100 text-[#004b70]'}`}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => handleNav('get-started')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#004b70] to-emerald-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Clinical Onboarding</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('calculator')}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Calculate Your BMI, TDEE & Macros</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
