import type { ViewType } from '../../App';
import './home.css';

// Importy zasobów
import tlo1 from '../../assets/tlo1.png'; 
import tlo2 from '../../assets/tlo2.png'; 
import eclipseImg from '../../assets/zabojca.png'; 
import logo2 from '../../assets/logo2.png'; 

interface HomeProps {
  variant: 'ss' | 'mf';
  onNavigate: (view: ViewType) => void;
}

const Home = ({ variant }: HomeProps) => {
  const isSS = variant === 'ss';
  const backgroundImage = isSS ? tlo1 : tlo2;

  return (
    <div 
      className={`home-page-container ${variant}-theme`} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-content-wrapper">
        
        {/* --- HERO SECTION --- */}
        <header className="home-hero">
          <h1 className="hero-title">
            <span className={`unit-name ${isSS ? 'txt-ss' : 'txt-mf'}`}>
              {isSS ? 'NOCTURNE' : 'AURORA'}
            </span>
            <span className="hero-subtitle">
              {isSS ? 'WITAMY PO CIEMNEJ STRONIE' : 'WITAMY PO JASNEJ STRONIE'}
            </span>
          </h1>
        </header>

        {/* --- GŁÓWNA KARTA OPISOWA --- */}
        <div className="home-main-card">
          <div className="card-glass-content">
            <div className="info-layout">
              <div className="info-text">
                
                {/* DODANY NAPIS DLA OBU STRON */}
                <h2 className="section-label">
                  {isSS ? 'ODDZIAŁ GŁÓWNY' : 'ODDZIAŁ ROZWOJOWY'}
                </h2>
                
                <p className="highlight-text">
                  {isSS 
                    ? 'Serce projektu i miejsce dla graczy celujących w absolutny szczyt.' 
                    : 'Bezpośrednie wsparcie i fundament pod przyszłą dominację.'}
                </p>

                <div className="main-description">
                  {isSS ? (
                    <>
                      <p>
                        <strong>Nocturne</strong> to elitarny oddział stworzony dla osób, które nie uznają kompromisów. 
                        To tutaj bije serce naszej społeczności, łącząc najbardziej doświadczonych liderów 
                        z ambitnymi graczami w monolit gotowy zdominować serwer.
                      </p>
                      <p>
                        Zapewniamy pełne zaplecze technologiczne i strategię, która nie zostawia miejsca na przypadek.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Aurora</strong> to jasna strona projektu – grupa 50 zdeterminowanych graczy, 
                        którzy stanowią bezpośrednie zaplecze i kontynuację idei Nocturne.
                      </p>
                      <p>
                        Tutaj szlifujemy talenty i budujemy siłę, korzystając z tych samych autorskich narzędzi 
                        i wiedzy co oddział główny. To miejsce dla tych, którzy chcą dołączyć do elity.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="info-visual">
                <img 
                  src={isSS ? eclipseImg : logo2} 
                  alt="Unit Visual" 
                  className={isSS ? "hero-character" : "unit-logo"} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- SEKCJA PROGRESU / CELU --- */}
        <div className="second-unit-link">
          <h3 className="sub-unit-title">
            {isSS ? 'WSPARCIE: AURORA' : 'CEL:'}
          </h3>
          <div className="home-main-card mini">
             <div className="card-glass-content">
                <p>
                  {isSS 
                    ? 'Aurora stanowi bezpośrednie zaplecze Nocturne, gdzie nowi gracze przygotowują się do dołączenia do elity projektu.' 
                    : 'Najlepsi gracze oddziału Aurora w ramach progresu zasilają szeregi głównej armii Nocturne.'}
                </p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;