import { useEffect, useRef, useState } from 'react';
import { MapPin, Code2, Lightbulb, Rocket, User } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile, stats } from '../data/portfolio';

const socialIcons = { github: FaGithub, linkedin: FaLinkedinIn };

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Types each role out, pauses, deletes it, then moves to the next.
const RoleTyper = ({ roles }) => {
  const [text, setText] = useState(prefersReducedMotion() ? roles[0] : '');

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let i = 0;
    let len = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const word = roles[i];
      len += deleting ? -1 : 1;
      setText(word.slice(0, len));
      let delay = deleting ? 35 : 70;
      if (!deleting && len === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && len === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <span className="role-typer" aria-label={roles.join(', ')}>
      <span aria-hidden="true">{text}</span>
      <span className="cur" aria-hidden="true" />
    </span>
  );
};

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const step = Math.ceil(value / 50);
        timer = setInterval(() => {
          setN((c) => {
            const next = Math.min(c + step, value);
            if (next === value) clearInterval(timer);
            return next;
          });
        }, 30);
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [value]);

  return (
    <div className="stat-num" ref={ref}>
      {n}
      {suffix}
    </div>
  );
};

export const About = () => {
  return (
    <section className="rs" id="about">
      <div className="rsc">
        <div className="status-badge rv">
          <span className="pulse-dot" /> {profile.status}
        </div>
        <h1 className="hero-name rv rv-d1">
          {profile.firstName}{' '}
          <span className="text-primary">{profile.lastName}</span>
        </h1>
        <div className="subheading rv rv-d2">
          <p>{profile.roles}</p>
        </div>
        <p className="contact-line rv rv-d2">
          <MapPin size={14} /> {profile.location} ·
          <a href={profile.phoneHref}>{profile.phone}</a> ·
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="lead rv rv-d3">{profile.summary}</p>

        <div className="stats-row rv rv-d3">
          {stats.map((s) => (
            <div className="stat-box" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="hero-actions rv rv-d4">
          {Object.entries(profile.socials)
            .filter(([, url]) => url)
            .map(([name, url]) => {
              const Icon = socialIcons[name];
              return (
                <a
                  className="social-icon"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  key={name}
                >
                  <Icon />
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};
