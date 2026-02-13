import type { ViewType } from '../../App';
import './discord.css';

// Importy tła i grafik (możesz podmienić postać na inną, np. maga)
import tlo1 from '../../assets/tlo1.png';
import tlo2 from '../../assets/tlo2.png';
import discordIcon from '../../assets/discord.png'; 

interface DiscordProps {
  theme: 'ss' | 'mf';
  onNavigate: (view: ViewType) => void;
}

const Discord = ({ theme }: DiscordProps) => {
  const isSS = theme === 'ss';
  const backgroundImage = isSS ? tlo1 : tlo2;

  return (
    <div 
      className={`discord-page-container ${theme}-theme`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="discord-content-wrapper">
        
        {/* NAGŁÓWEK SEKCYJNY */}
        <header className="discord-hero">
          <h1 className="hero-title">
            <span className={`unit-name ${isSS ? 'txt-ss' : 'txt-mf'}`}>DISCORD</span>
            <span className="hero-subtitle">CENTRUM DOWODZENIA PROJEKTEM</span>
          </h1>
        </header>

        {/* GŁÓWNA KARTA DISCORDA */}
        <div className="discord-main-card">
          <div className="card-glass-content">
            <div className="info-layout">
              <div className="info-text">
                <h2 className="section-label">SPOŁECZNOŚĆ I WIEDZA</h2>
                <p className="highlight-text">
                  Nasze centrum operacyjne to coś więcej niż zwykły serwer — to zaawansowana baza wiedzy.
                </p>
                <div className="main-description">
                  <p>
                    Dołączając do nas, zyskujesz dostęp do <strong>dziesiątek wyspecjalizowanych kanałów</strong>, 
                    gdzie życie tętni 24/7. Od ogólnych czatów po dedykowane sekcje strategiczne dla {isSS ? 'Eclipse' : 'Aurory'}.
                  </p>
                  <ul className="discord-features-list">
                    <li><strong>Ekskluzywne Poradniki:</strong> Kompletne zestawienia optymalizacji postaci.</li>
                    <li><strong>Wsparcie 24/7:</strong> Kanały pomocy, gdzie helperzy odpowiedzą na każde pytanie.</li>
                    <li><strong>Integracja SFTools:</strong> Automatyczne powiadomienia i statystyki prosto z gry.</li>
                    <li><strong>Strefa Integracji:</strong> Miejsce na luźne rozmowy i budowanie relacji na lata.</li>
                  </ul>
                  <p className="discord-cta-text">
                    Nie pozwól, aby ominęły Cię kluczowe informacje. Kliknij poniżej i wejdź do gry na najwyższym poziomie.
                  </p>
                </div>
                
                <a 
                  href="https://discord.gg/wtPs5XvYuV" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="discord-main-button"
                >
                  DOŁĄCZ DO SERWERA
                </a>
              </div>

              <div className="info-visual">
                <img src={discordIcon} alt="Discord App" className="discord-floating-img" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Discord;