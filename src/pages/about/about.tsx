import type { ViewType } from '../../App';
import './about.css';

// Importy teł zależnych od motywu
import tlo1 from '../../assets/tlo1.png';
import tlo2 from '../../assets/tlo2.png';

import zabojcaImg from '../../assets/zabojca.png';
import paladinImg from '../../assets/paladin.png';
import bardImg from '../../assets/bard.png';

interface AboutProps {
  onNavigate: (view: ViewType) => void;
  lastTheme: 'ss' | 'mf';
}

const About = ({ lastTheme }: AboutProps) => {
  const isSS = lastTheme === 'ss';
  const backgroundImage = isSS ? tlo1 : tlo2;

  return (
    <div 
      className={`about-page-container ${lastTheme}-theme`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="about-scroll-wrapper">
        
        {/* NOWY HERO SECTION */}
        <header className="about-hero">
          <h1 className="hero-title">
            <span className={`unit-name ${isSS ? 'txt-ss' : 'txt-mf'}`}>O PROJEKCIE</span>
            <span className="hero-subtitle">POZNAJ NAS</span>
          </h1>
        </header>
        
        {/* SEKCJA 1: Czym jesteśmy? */}
        <section className="about-section align-left">
          <div className="about-glass-card">
            <div className="card-inner">
              <div className="card-text">
                <h1 className="card-title">Czym jesteśmy?</h1>
                <div className="card-description">
                  <p>
                    Przede wszystkim: <strong>projektem od graczy, dla graczy</strong>. Po latach spędzonych w świecie Shakes & Fidget postanowiliśmy zrobić coś, co naprawdę zostanie zapamiętane — aby największy projekt gildii w historii gry należał właśnie do polskiej społeczności.
                  </p>
                  <p>
                    Nie interesowała nas kolejna “zwykła” gildia. Chcieliśmy stworzyć coś bezprecedensowego — miejsce, którego wcześniej nikt nie doświadczył. Połączyliśmy wieloletnie doświadczenie, wiedzę, umiejętności i sprawdzone narzędzia, żeby zbudować najlepszą przestrzeń dla gracza.
                  </p>
                </div>
              </div>
              <div className="card-image">
                <img src={zabojcaImg} alt="Zabójca" className="fixed-char" />
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 2: Co nas wyróżnia? */}
        <section className="about-section align-right">
          <div className="about-glass-card">
            <div className="card-inner reversed">
              <div className="card-text">
                <h1 className="card-title">Co nas wyróżnia?</h1>
                <div className="card-description">
                  <p>
                    Za tym projektem nie stoi przypadek ani chwilowy zryw. Tworzą go <strong>liderzy i zarządy najlepszych polskich gildii</strong>. Mamy ogromne doświadczenie i konkretną wiedzę, ale przede wszystkim potrafimy ją przekuć w realne wyniki.
                  </p>
                  <p>
                    U nas dostajesz wsparcie od pierwszego dnia: jasne wskazówki, sprawdzone rozwiązania i plan, który pozwala rozwijać postać szybciej i mądrzej. Nad wszystkim czuwają doświadczeni helperzy.
                  </p>
                </div>
              </div>
              <div className="card-image">
                <img src={paladinImg} alt="Paladyn" className="fixed-char" />
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 3: Technologia i progres */}
        <section className="about-section align-left">
          <div className="about-glass-card">
            <div className="card-inner">
              <div className="card-text">
                <h1 className="card-title">Nasze Narzędzia</h1>
                <div className="card-description">
                  <p>
                    Nie zostawiamy progresu przypadkowi. Korzystamy z <strong>autorskiego skryptu na SFTools</strong>, rozbudowanego serwera Discord oraz własnych botów, żeby na bieżąco monitorować rozwój i natychmiast wyłapywać błędy.
                  </p>
                  <p>
                    Dzięki temu dostajesz konkretne wskazówki i wsparcie, a Twoja postać rozwija się szybciej — bez zgadywania i chaosu.
                  </p>
                </div>
              </div>
              <div className="card-image">
                <img src={bardImg} alt="Bard" className="fixed-char" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;