import './home.css';
import type { ViewType } from '../../App';

type HomeProps = {
  onNavigate: (view: ViewType) => void;
};

const HomeMF: React.FC<HomeProps> = () => {
  return (
    <div className="home-container mf-theme">
      <div className="main-content">
        <h1 className="glow-text">AURORA</h1>
        <p className="sub-text">WITAMY PO JASNEJ STRONIE</p>
      </div>
    </div>
  );
};

export default HomeMF;