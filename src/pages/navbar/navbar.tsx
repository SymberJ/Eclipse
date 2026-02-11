import logo3 from '../../assets/logo3.png';
import type { ViewType } from '../../App';
import './navbar.css';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
  activeView: ViewType;
  theme: 'ss' | 'mf';
}

const Navbar = ({ onNavigate, activeView, theme }: NavbarProps) => {
  const isHomeActive = activeView === 'ss' || activeView === 'mf';
  const isAboutActive = activeView === 'about';
  const isDiscordActive = activeView === 'discord';

  return (
    <div className={`mini-nav ${theme}-nav`}>
      <div className="nav-logos">
        <img 
          src={logo3} 
          className={`mini-logo ${activeView !== 'landing' ? 'active-home' : ''}`} 
          onClick={() => onNavigate('landing')} 
          alt="Landing Page" 
        />
      </div>

      <div className="nav-pill">
        <span 
          className={`nav-item ${isHomeActive ? 'active' : ''}`}
          onClick={() => onNavigate(theme)}
        >
          STRONA GŁÓWNA
        </span>
        
        <span 
          className={`nav-item ${isAboutActive ? 'active' : ''}`}
          onClick={() => onNavigate('about')}
        >
          O NAS
        </span>

        <span 
          className={`nav-item ${isDiscordActive ? 'active' : ''}`}
          onClick={() => onNavigate('discord')}
        >
          DISCORD
        </span>
      </div>
    </div>
  );
};

export default Navbar;