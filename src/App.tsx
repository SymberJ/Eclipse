import { useState } from 'react';
// Importy Twoich stron
import Landing from './pages/landing/landing';
import Home from './pages/home/home'; // Zmieniony import na wspólny plik
import About from './pages/about/about';
import Discord from './pages/discord/discord';
import Navbar from './pages/navbar/navbar';
// Import stylów
import './App.css';

// Definicja typu dla nawigacji
export type ViewType = 'landing' | 'ss' | 'mf' | 'about' | 'discord';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [lastTheme, setLastTheme] = useState<'ss' | 'mf'>('ss');

  const handleNavigate = (view: ViewType) => {
    if (view === 'ss' || view === 'mf') {
      setLastTheme(view);
    }
    setCurrentView(view);
  };

  return (
    <div className="app-wrapper">
      {currentView !== 'landing' && (
        <Navbar 
          onNavigate={handleNavigate} 
          activeView={currentView} 
          theme={lastTheme} 
        />
      )}

      <main>
        {currentView === 'landing' && (
          <Landing onNavigate={handleNavigate} />
        )}

        {/* Renderowanie wspólnego komponentu Home z przekazaniem wariantu */}
        {currentView === 'ss' && (
          <Home variant="ss" onNavigate={handleNavigate} />
        )}
        
        {currentView === 'mf' && (
          <Home variant="mf" onNavigate={handleNavigate} />
        )}

        {currentView === 'about' && (
          <About onNavigate={handleNavigate} lastTheme={lastTheme} />
        )}

        {currentView === 'discord' && (
          <Discord onNavigate={handleNavigate} theme={lastTheme} />
        )}
      </main>
    </div>
  );
}

export default App;