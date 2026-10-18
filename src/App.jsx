import { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { About } from './sections/About';
import { WhatIDo } from './sections/WhatIDo';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
// import { Contact } from './sections/Contact';
import { ParticleCanvas } from './components/ParticleCanvas';
import { AIModal } from './components/AIModal';
import { useReveal } from './components/useReveal';
import { Education } from './sections/Education';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#about"
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={18} />
    </a>
  );
};

function App() {
  const [aiItem, setAiItem] = useState(null);
  const closeAI = useCallback(() => setAiItem(null), []);
  useReveal();

  useEffect(() => {
    document.body.style.overflow = aiItem ? 'hidden' : '';
  }, [aiItem]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ParticleCanvas />
      <div inert={aiItem ? true : undefined}>
        <Navbar />
      </div>
      <main id="main" inert={aiItem ? true : undefined}>
        <About />
        <hr className="divider" />
        <WhatIDo />
        <hr className="divider" />
        <Experience onAsk={setAiItem} />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Projects onAsk={setAiItem} />
        <hr className="divider" />
        <Education />
        <hr className="divider" />
        {/* <Contact /> */}
      </main>
      <Footer />
      <BackToTop />
      <AIModal item={aiItem} onClose={closeAI} />
    </>
  );
}

export default App;
