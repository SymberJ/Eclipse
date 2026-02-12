import { useState } from 'react';
// Importy Twoich stron
import Landing from './pages/landing/landing';
import Home from './pages/home/home';
import About from './pages/about/about';
import Discord from './pages/discord/discord';
import Recruitment from './pages/recruitment/recruitment';
import Achievements from './pages/achievements/achievements'; // Nowy import
import Navbar from './pages/navbar/navbar';
// Import stylów
import './App.css';

// Definicja typu dla nawigacji - dodano 'achievements'
export type ViewType = 'landing' | 'ss' | 'mf' | 'about' | 'discord' | 'recruitment' | 'achievements';

function App() {
  // Stan przechowujący aktualnie wyświetlany widok
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  
  // Stan przechowujący ostatni wybrany motyw (ss = fioletowy / mf = pomarańczowy)
  const [lastTheme, setLastTheme] = useState<'ss' | 'mf'>('ss');

  // Funkcja zmieniająca widok i aktualizująca motyw
  const handleNavigate = (view: ViewType) => {
    if (view === 'ss' || view === 'mf') {
      setLastTheme(view);
    }
    setCurrentView(view);
  };

  return (
    <div className="app-wrapper">
      {/* Navbar renderowany dla wszystkich widoków poza landing page */}
      {currentView !== 'landing' && (
        <Navbar 
          onNavigate={handleNavigate} 
          activeView={currentView} 
          theme={lastTheme} 
        />
      )}

      <main>
        {/* Widok startowy (wybór projektu) */}
        {currentView === 'landing' && (
          <Landing onNavigate={handleNavigate} />
        )}

        {/* Główne strony projektów (Wspólny komponent Home) */}
        {currentView === 'ss' && (
          <Home variant="ss" onNavigate={handleNavigate} />
        )}
        
        {currentView === 'mf' && (
          <Home variant="mf" onNavigate={handleNavigate} />
        )}

        {/* Podstrona O nas */}
        {currentView === 'about' && (
          <About onNavigate={handleNavigate} lastTheme={lastTheme} />
        )}

        {/* Podstrona Discord */}
        {currentView === 'discord' && (
          <Discord onNavigate={handleNavigate} theme={lastTheme} />
        )}

        {/* Podstrona Rekrutacja */}
        {currentView === 'recruitment' && (
          <Recruitment onNavigate={handleNavigate} theme={lastTheme} />
        )}

        {/* Podstrona Osiągnięcia */}
        {currentView === 'achievements' && (
          <Achievements onNavigate={handleNavigate} theme={lastTheme} />
        )}
      </main>
    </div>
  );
}

export default App;