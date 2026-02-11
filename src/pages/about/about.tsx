import type { ViewType } from '../../App';
import '../home/home.css';

interface AboutProps {
  onNavigate: (view: ViewType) => void;
  lastTheme: 'ss' | 'mf';
}

const About = ({ lastTheme }: AboutProps) => {
  return (
    <div className={`home-container ${lastTheme}-theme`}>
      <div className="main-content" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h1 className="glow-text">O NAS</h1>
        <p style={{ color: 'white', opacity: 0.7, lineHeight: '1.6', fontSize: '1.1rem' }}>
          Jesteśmy zespołem pasjonatów, który dba o każdy piksel. 
          Tworzymy rozwiązania łączące mroczny design z najwyższą wydajnością.
        </p>
      </div>
    </div>
  );
};

export default About;