import { useState, useEffect } from 'react';

export function useScrollProgress(sezioni = []) {
  const [progress, setProgress] = useState(0);
  const [sezioneAttiva, setSezioneAttiva] = useState(sezioni[0] || '');

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);

      for (const s of sezioni) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setSezioneAttiva(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sezioni]);

  return { progress, sezioneAttiva };
}