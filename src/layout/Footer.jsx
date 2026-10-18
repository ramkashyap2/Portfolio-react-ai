import { profile } from '../data/portfolio';

export const Footer = () => (
  <footer className="site-footer">
    <span>
      © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.
    </span>
    <span>
      Designed &amp; built with React + Vite · <a href={`mailto:${profile.email}`}>Say hello</a>
    </span>
  </footer>
);
