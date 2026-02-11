import { useState } from 'react';
// Importy Twoich stron
import Landing from './pages/landing/landing';
import HomeSS from './pages/home/homess';
import HomeMF from './pages/home/homemf';
import About from './pages/about/about';
import Discord from './pages/discord/discord';
import Navbar from './pages/navbar/navbar';
// Import stylów
import './App.css';

// Definicja typu dla nawigacji, używana w całej aplikacji
export type ViewType = 'landing' | 'ss' | 'mf' | 'about' | 'discord';

function App() {
  // Stan przechowujący aktualnie wyświetlany widok
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  
  // Stan przechowujący ostatni wybrany motyw (fioletowy/pomarańczowy)
  // Dzięki temu podstrony "O nas" i "Discord" wiedzą, jaki kolor przyjąć
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
      {/* NAVBAR renderowany centralnie. 
        Dzięki temu nie "miga" przy przechodzeniu między podstronami,
        bo React nie musi go montować od nowa.
      */}
      {currentView !== 'landing' && (
        <Navbar 
          onNavigate={handleNavigate} 
          activeView={currentView} 
          theme={lastTheme} 
        />
      )}

      {/* LOGIKA RENDEROWANIA WIDOKÓW */}
      <main>
        {/* Widok startowy (wybór projektu) */}
        {currentView === 'landing' && (
          <Landing onNavigate={handleNavigate} />
        )}

        {/* Główne strony projektów */}
        {currentView === 'ss' && (
          <HomeSS onNavigate={handleNavigate} />
        )}
        
        {currentView === 'mf' && (
          <HomeMF onNavigate={handleNavigate} />
        )}

        {/* Podstrona O nas - przyjmuje wybrany motyw kolorystyczny */}
        {currentView === 'about' && (
          <About onNavigate={handleNavigate} lastTheme={lastTheme} />
        )}

        {/* Podstrona Discord - teraz już poprawnie podpięta */}
        {currentView === 'discord' && (
          <Discord onNavigate={handleNavigate} theme={lastTheme} />
        )}
      </main>
    </div>
  );
}

export default App;