import React from 'react';
import './recruitment.css';
import type { ViewType } from '../../App';

type RecruitmentProps = {
  theme: 'ss' | 'mf';
  onNavigate: (view: ViewType) => void;
};

const Recruitment: React.FC<RecruitmentProps> = ({ theme }) => {
  const isSS = theme === 'ss';

  return (
    <div className={`recruitment-container ${theme}-theme`}>
      <div className="recruitment-content">
        <h2 className="recruitment-title">
          DOŁĄCZ DO {isSS ? 'ECLIPSE' : 'AURORA'}
        </h2>
        <p className="recruitment-desc">
          Szukamy najsilniejszych wojowników, którzy nie boją się wyzwań. 
          Zostań częścią legendy po {isSS ? 'mrocznej' : 'świetlistej'} stronie.
        </p>

        <div className="roles-grid">
          <div className="role-card">
            <h3>TANK</h3>
            <p>Tarcza naszej gildii</p>
          </div>
          <div className="role-card">
            <h3>DPS</h3>
            <p>Potęga uderzenia</p>
          </div>
          <div className="role-card">
            <h3>HEALER</h3>
            <p>Wsparcie w boju</p>
          </div>
        </div>

        <div className="cta-section">
          <a href="TWÓJ_LINK_DO_FORMULARZA" className="apply-button">
            ZŁÓŻ PODANIE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;