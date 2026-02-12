import './home.css';
import type { ViewType } from '../../App';

type HomeProps = {
  onNavigate: (view: ViewType) => void;
};

const HomeSS: React.FC<HomeProps> = () => {
  return (
    <div className="home-container ss-theme">
      <div className="main-content">
        <h1 className="glow-text">ECLIPSE</h1>
        <p className="sub-text">WITAMY PO CIEMNEJ STRONIE</p>
      </div>
    </div>
  );
};

export default HomeSS;