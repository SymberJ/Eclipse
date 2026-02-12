import React from 'react';
import './achievements.css';
import type { ViewType } from '../../App';

type Achievement = {
  title: string;
  date: string;
  description: string;
};

type AchievementsProps = {
  theme: 'ss' | 'mf';
  onNavigate: (view: ViewType) => void;
};

const Achievements: React.FC<AchievementsProps> = ({ theme }) => {
  const isSS = theme === 'ss';

  const data: Achievement[] = [
    { title: "FIRST KILL", date: "12.02.2026", description: "Pokonanie głównego bossa serwera jako pierwsi." },
    { title: "DOMINACJA", date: "Styczeń 2026", description: "Utrzymanie zamku przez cały miesiąc bez porażki." },
    { title: "ELITA", date: "2025", description: "Zdobycie rangi diamentowej w rankingu gildyjnym." }
  ];

  return (
    <div className={`achievements-container ${theme}-theme`}>
      <div className="achievements-content">
        <h2 className="achievements-title">
          OSIĄGNIĘCIA {isSS ? 'ECLIPSE' : 'AURORA'}
        </h2>
        
        <div className="achievements-timeline">
          {data.map((item, index) => (
            <div className="achievement-card" key={index} style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
              <span className="achievement-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;