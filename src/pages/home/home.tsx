import React from 'react';
import './home.css';
import type { ViewType } from '../../App';

// Definiujemy dostępne warianty strony
type HomeVariant = 'ss' | 'mf';

type HomeProps = {
  onNavigate: (view: ViewType) => void;
  variant: HomeVariant; // Nowy prop określający tryb
};

const Home: React.FC<HomeProps> = ({ variant }) => {
  // Mapowanie danych w zależności od wariantu
  const content = {
    ss: {
      className: 'ss-theme',
      title: 'ECLIPSE',
      subtitle: 'WITAMY PO CIEMNEJ STRONIE'
    },
    mf: {
      className: 'mf-theme',
      title: 'AURORA',
      subtitle: 'WITAMY PO JASNEJ STRONIE'
    }
  };

  const current = content[variant];

  return (
    <div className={`home-container ${current.className}`}>
      <div className="main-content">
        <h1 className="glow-text">{current.title}</h1>
        <p className="sub-text">{current.subtitle}</p>
        
        {/* Przykładowy przycisk nawigacji, jeśli chcesz wykorzystać onNavigate */}
        {/* <button onClick={() => onNavigate('some_view')}>Enter</button> */}
      </div>
    </div>
  );
};

export default Home;