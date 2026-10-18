import { FaRobot } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { trackMouse } from '../components/useReveal';

const domainOf = (url) => new URL(url).hostname.replace(/^www\./, '');

export const Projects = ({ onAsk }) => {
  return (
    <section className="rs" id="projects" aria-labelledby="projects-title">
      <div className="rsc">
        <h2 className="sec-h rv" id="projects-title">
          Projects
        </h2>
        <div className="rv">
          <span className="ai-tag">
            <span className="tag-dot" /> Click any project — AI narrates the
            details
          </span>
        </div>
        {/* <p className="lead rv">
          Live websites I've designed and developed — from education platforms
          to professional services. Click <strong>Ask AI</strong> on any project
          for the full story.
        </p> */}
        <div className="project-grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="pcard rv"
              onMouseMove={trackMouse}
            >
              <a
                className="pmock"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${project.title} website (new tab)`}
              >
                <div className="pmock__bar" aria-hidden="true">
                  <span className="pmock__dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="pmock__url">{domainOf(project.link)}</span>
                </div>
                <div className="pmock__shot">
                  <img
                    src={project.image}
                    alt={`Screenshot of the ${project.title} website`}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="585"
                  />
                  <span className="pmock__visit" aria-hidden="true">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>

              <div className="pcard__body">
                <div className="pcard__meta">
                  <span className="pcard__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="ctg">{project.tagline}</span>
                </div>
                <h3 className="ct">{project.title}</h3>
                <p className="cd">{project.summary}</p>
                <div className="ctech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="pcard__actions">
                  <a
                    className="pbtn pbtn--solid"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                  <button
                    className="pbtn"
                    onClick={() =>
                      onAsk({ title: project.title, ai: project.ai })
                    }
                  >
                    <FaRobot size={12} /> Ask AI
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
