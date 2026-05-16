import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Numeri from './components/Numeri';
import Progetti from './components/Progetti';
import Competenze from './components/Competenze';
import Contatti from './components/Contatti';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useReducedMotion } from './hooks/useReducedMotion';

export default function App() {
  const [dark, setDark] = useState(false);
  const { progress, sezioneAttiva } = useScrollProgress(['hero', 'about', 'progetti', 'competenze', 'contatti']);
  const reducedMotion = useReducedMotion();

  const theme = {
    text: dark ? 'text-neutral-100' : 'text-neutral-900',
    textMuted: dark ? 'text-neutral-400' : 'text-neutral-500',
    border: dark ? 'border-neutral-800' : 'border-neutral-200',
    cardBg: dark ? 'bg-neutral-900' : 'bg-white',
    dark,
  };

  const scrollA = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div
      className={`${dark ? 'bg-neutral-950' : 'bg-[#fafaf7]'} ${theme.text} min-h-screen transition-colors duration-300 font-body`}
    >
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent" aria-hidden="true">
        <div className="h-full bg-accent transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <Nav dark={dark} setDark={setDark} sezioneAttiva={sezioneAttiva} scrollA={scrollA} theme={theme} />
      <Hero scrollA={scrollA} reducedMotion={reducedMotion} theme={theme} />
      <About theme={theme} />
      <Numeri dark={dark} theme={theme} />
      <Progetti theme={theme} reducedMotion={reducedMotion} />
      <Competenze dark={dark} theme={theme} />
      <Contatti theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}