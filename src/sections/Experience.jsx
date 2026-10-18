import { FaRobot } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { trackMouse } from '../components/useReveal';

export const Experience = ({ onAsk }) => {
  return (
    <section className="rs" id="experience" aria-labelledby="experience-title">
      <div className="rsc">
        <h2 className="sec-h rv" id="experience-title">
          Experience
        </h2>
        <div className="rv">
          <span className="ai-tag">
            <span className="tag-dot" /> Click any role — AI explains the
            details
          </span>
        </div>
        <div className="card-grid">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              role="button"
              tabIndex={0}
              className="ccard rv"
              onMouseMove={trackMouse}
              onClick={() => onAsk({ title: exp.role, ai: exp.ai })}
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === ' ') &&
                onAsk({ title: exp.role, ai: exp.ai })
              }
            >
              {/* <div className="ci">{exp.icon}</div> */}
              <div className="exp-date">{exp.period}</div>
              <h3 className="ct">{exp.role}</h3>
              <div className="ctg">{exp.company}</div>
              <div className="cd">{exp.summary}</div>
              <div className="ctech">
                {exp.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="ccta">
                <FaRobot size={11} /> Ask AI for details{' '}
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
