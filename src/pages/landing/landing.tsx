import type { ViewType } from '../../App';
import logo1 from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import './landing.css';

interface LandingProps {
  onNavigate: (view: ViewType) => void;
}

const Landing = ({ onNavigate }: LandingProps) => {
  return (
    <div className="landing-base">
      {/* Sekcja Lewa - Fioletowa */}
      <div className="split-section">
        <div className="glow purple-glow"></div>
        <div className="logo-container" onClick={() => onNavigate('ss')}>
          <img src={logo1} alt="Logo SS" className="main-logo-img logo-left" />
        </div>
      </div>

      {/* Sekcja Prawa - Pomarańczowa */}
      <div className="split-section">
        <div className="glow orange-glow"></div>
        <div className="logo-container" onClick={() => onNavigate('mf')}>
          <img src={logo2} alt="Logo MF" className="main-logo-img logo-right" />
        </div>
      </div>
    </div>
  );
};

export default Landing;