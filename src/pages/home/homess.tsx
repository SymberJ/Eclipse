import './home.css';
import type { ViewType } from '../../App';

type HomeProps = {
  onNavigate: (view: ViewType) => void;
};

const HomeSS: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="home-container ss-theme">
      <div className="main-content">
        <h1 className="glow-text">ECLIPSE</h1>
        <p className="sub-text">PROJEKT FIOLETOWY</p>
      </div>
    </div>
  );
};

export default HomeSS;