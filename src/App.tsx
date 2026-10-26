import React, { useState } from 'react';
import { NavigationPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { GetStartedPage } from './pages/GetStartedPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { RecipesPage } from './pages/RecipesPage';
import { WorkoutsPage } from './pages/WorkoutsPage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { DashboardPreviewPage } from './pages/DashboardPreviewPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedGoal, setSelectedGoal] = useState<string>('weight-management');

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGoal = (goalId: string) => {
    setSelectedGoal(goalId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'get-started' && (
          <GetStartedPage onNavigate={handleNavigate} prefilledGoal={selectedGoal} />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage 
            onNavigate={handleNavigate} 
            onSelectProgram={handleSelectGoal} 
          />
        )}
        {currentPage === 'recipes' && <RecipesPage onNavigate={handleNavigate} />}
        {currentPage === 'workouts' && <WorkoutsPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'support' && <SupportPage onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
        {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
        {currentPage === 'dashboard-preview' && (
          <DashboardPreviewPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Quick Direct Page Navigation Ribbon */}
      <aside aria-label="Quick site pages" className="bg-slate-100/90 border-t border-slate-200 py-3 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Explore All Pages:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'get-started', label: 'Get Started' },
              { id: 'programs', label: 'Programs' },
              { id: 'recipes', label: 'Recipes' },
              { id: 'workouts', label: 'Workouts' },
              { id: 'about', label: 'About & Science' },
              { id: 'support', label: 'Support' },
              { id: 'terms', label: 'Terms' },
              { id: 'privacy', label: 'Privacy' },
              { id: 'dashboard-preview', label: 'Portal App' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => handleNavigate(p.id as NavigationPage)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  currentPage === p.id
                    ? 'bg-[#004b70] text-white font-bold'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
