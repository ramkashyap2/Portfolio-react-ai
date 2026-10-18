import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiJquery, SiTailwindcss } from 'react-icons/si';
import { skillGroups } from '../data/portfolio';

const devIcons = [
  { icon: FaHtml5, label: 'HTML5' },
  { icon: FaCss3Alt, label: 'CSS3' },
  { icon: FaBootstrap, label: 'Bootstrap' },
  { icon: FaJs, label: 'JavaScript' },
  { icon: SiJquery, label: 'jQuery' },
  { icon: FaReact, label: 'React' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: FaPhp, label: 'PHP' },
  { icon: FaGitAlt, label: 'Git' },
  { icon: FaGithub, label: 'GitHub' },
];

export const Skills = () => {
  return (
    <section className="rs" id="skills" aria-labelledby="skills-title">
      <div className="rsc">
        <h2 className="sec-h rv" id="skills-title">Skills</h2>
        <ul className="dev-icons rv">
          {devIcons.map(({ icon: Icon, label }) => (
            <li key={label} title={label}>
              <Icon role="img" aria-label={label} />
            </li>
          ))}
        </ul>
        <div className="ai-wrap rv">
          <div className="ai-wrap-head">
            <span className="ai-dot" /> skill-map.analysis
          </div>
          <div className="ai-wrap-body">
            {skillGroups.map((group) => (
              <div className="skill-section" key={group.label}>
                <p>{group.label}</p>
                <div className="skill-row">
                  {group.items.map(([name, highlight]) => (
                    <div key={name} className={`sc${highlight ? ' hl' : ''}`}>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
