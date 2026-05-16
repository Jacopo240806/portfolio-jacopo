import { useState, useEffect } from 'react';
import { ArrowRight, Download, ChevronDown, MapPin } from 'lucide-react';
import { PROFILO } from '../data/profilo';

export default function Hero({ scrollA, reducedMotion, theme }) {
  const [ruoloIndex, setRuoloIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setInterval(() => {
      setRuoloIndex((i) => (i + 1) % PROFILO.ruoliRotanti.length);
    }, 2200);
    return () => clearInterval(t);
  }, [reducedMotion]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 lg:px-12 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-9">
            <div className={`flex items-center gap-2 text-sm ${theme.textMuted} mb-8 fade-up`}>
              <MapPin className="w-3.5 h-3.5" />
              <span>{PROFILO.citta} — disponibile per progetti</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full ml-1 bg-accent" aria-hidden="true" />
            </div>

            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.92] font-medium fade-up" style={{ animationDelay: '80ms' }}>
              Jacopo
              <br />
              Tagliazucca<span className="text-accent">.</span>
            </h1>

            <div className={`mt-8 text-xl md:text-2xl ${theme.textMuted} max-w-2xl fade-up`} style={{ animationDelay: '180ms' }}>
              <span>Sono uno </span>
              <span
                key={ruoloIndex}
                className={`inline-block font-medium ${theme.text}`}
                style={{ borderBottom: '2px solid #C5F44E' }}
                aria-live="polite"
              >
                {PROFILO.ruoliRotanti[ruoloIndex]}
              </span>
              <span>.</span>
              <br />
              <span>{PROFILO.headline}</span>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 fade-up" style={{ animationDelay: '280ms' }}>
              <button
                onClick={() => scrollA('progetti')}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all hover:scale-[1.02] bg-accent text-neutral-900"
              >
                Vedi i progetti
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={PROFILO.cvPdf}
                download
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${theme.border} font-medium text-sm hover:scale-[1.02] transition-all`}
              >
                <Download className="w-4 h-4" />
                Scarica CV
              </a>
            </div>
          </div>

          <div className={`hidden lg:block col-span-3 ${theme.textMuted} text-sm fade-up`} style={{ animationDelay: '360ms' }}>
            <div className="border-l-2 pl-4 border-accent">
              <p className="uppercase tracking-widest text-xs mb-2">Università</p>
              <p className={`${theme.text} font-medium`}>UniTn</p>
              <p>Interfacce e Tecnologie<br />della Comunicazione</p>
              <p className="mt-4 uppercase tracking-widest text-xs mb-2">Anno</p>
              <p className={`${theme.text} font-medium`}>2025 → in corso</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollA('about')}
          className={`mt-20 flex items-center gap-2 text-sm ${theme.textMuted} hover:${theme.text} transition-colors`}
          aria-label="Scorri verso il basso"
        >
          <span>Scorri</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}