import { highlights } from '../data/portfolio';
import { trackMouse } from '../components/useReveal';

export const WhatIDo = () => {
  return (
    <section className="rs" id="what-i-do" aria-labelledby="what-i-do-title">
      <div className="rsc">
        <h2 className="sec-h rv" id="what-i-do-title">
          What I Do
        </h2>
        <p className="lead rv">
          I turn designs into fast, accessible, responsive websites — with code
          that's a pleasure for the next developer to work on.
        </p>
        <div className="card-grid card-grid--compact">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`ccard ccard--static rv rv-d${i + 1}`}
              onMouseMove={trackMouse}
            >
              <div className="ci" style={{ color: '#bd5d38' }}>
                {item.icon}
              </div>
              <h3 className="ct">{item.title}</h3>
              <div className="cd">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
