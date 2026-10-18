import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.webp';
import { profile } from '../data/portfolio';
import { useTheme } from '../components/useTheme';

const ThemeToggle = ({ theme, onToggle, showLabel }) => (
  <button
    className="theme-toggle"
    onClick={onToggle}
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
  >
    {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
    {showLabel && (theme === 'dark' ? '' : '')}
  </button>
);

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#what-i-do', label: 'What I Do' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');
  const { theme, toggleTheme } = useTheme();

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && setActive(`#${e.target.id}`),
        );
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="side-nav" aria-label="Main navigation">
      <div className="side-nav__bar">
        <a className="side-nav__brand" href="#about">
          <span className="side-nav__brand-text">
            {profile.firstName} {profile.lastName}
          </span>
          <img
            className="side-nav__photo"
            src={profilePhoto}
            alt={`${profile.firstName} ${profile.lastName}`}
            width="160"
            height="160"
          />
        </a>
        <div className="side-nav__actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            className="side-nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <ul className={`side-nav__links${open ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`nav-link${active === link.href ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={profile.cv}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="side-nav__footer">
        <ThemeToggle theme={theme} onToggle={toggleTheme} showLabel />
      </div>
    </nav>
  );
};
