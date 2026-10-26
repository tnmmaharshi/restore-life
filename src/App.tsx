import React, { useState } from 'react';
import { NavigationPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SupportPage } from './pages/SupportPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell min-h-screen flex flex-col text-[#0a1922] font-sans antialiased selection:bg-[#004b70]/15 selection:text-[#004b70]">
      {/* Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main id="main" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigateSupport={() => handleNavigate('support')} />}
        {currentPage === 'support' && <SupportPage onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
        {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
