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
      {/* Warstwy dla dynamicznych reflektorów */}
      <div className="light-layer light-purple"></div>
      <div className="light-layer light-gold"></div>
      
      <h1 className="main-title">WYBIERZ SWOJĄ ŚCIEŻKĘ</h1>

      <div className="logos-wrapper">
        
        {/* Logo 1 - Eclipse */}
        <div className="split-section">
          <div className="logo-container" onClick={() => onNavigate('ss')}>
            <img src={logo1} alt="Logo SS" className="main-logo-img logo-left" />
            <span className="logo-text text-ss">Eclipse</span>
          </div>
        </div>

        {/* Logo 2 - Aurora */}
        <div className="split-section">
          <div className="logo-container" onClick={() => onNavigate('mf')}>
            <img src={logo2} alt="Logo MF" className="main-logo-img logo-right" />
            <span className="logo-text text-mf">Aurora</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;