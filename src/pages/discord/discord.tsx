import './discord.css';
import '../home/home.css'; 
import type { ViewType } from '../../App';

interface DiscordProps {
  theme: 'ss' | 'mf';
  onNavigate: (view: ViewType) => void;
}

const Discord = ({ theme, onNavigate }: DiscordProps) => {
  return (
    <div className={`home-container ${theme}-theme`}>
      <div className="main-content">
        <h1 className="glow-text">DISCORD</h1>
        <p className="sub-text">DOŁĄCZ DO NASZEJ SPOŁECZNOŚCI</p>
        
        <div className="discord-card">
          <p className="discord-info">Najlepsze miejsce do rozmów o projekcie {theme === 'ss' ? 'SS' : 'MF'}.</p>
          <button className="discord-button">DOŁĄCZ TERAZ</button>
        </div>
      </div>
    </div>
  );
};

export default Discord;