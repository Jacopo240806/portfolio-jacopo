import { useState } from 'react';
import { ArrowUpRight, Palette, Code2, Megaphone, Video, Trophy, Heart } from 'lucide-react';
import { PROGETTI, CATEGORIE } from '../data/progetti';
import ProgettoModale from './ProgettoModale';

const ICONE = { design: Palette, sviluppo: Code2, social: Megaphone, video: Video, premi: Trophy, volontariato: Heart };

export default function Progetti({ theme, reducedMotion }) {
  const [filtro, setFiltro] = useState('all');
  const [aperto, setAperto] = useState(null);

  const lista = filtro === 'all' ? PROGETTI : PROGETTI.filter((p) => p.categoria === filtro);

  return (
    <>
      <section id="progetti" className={`px-6 lg:px-12 py-32 border-t ${theme.border}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-4`}>02 — Lavori selezionati</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
                Progetti<span className="text-accent">.</span>
              </h2>
            </div>
            <p className={`${theme.textMuted} max-w-md text-sm`}>
              Una selezione di progetti universitari, esperienze professionali, riconoscimenti e volontariato. Clicca una card per i dettagli.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filtra progetti per categoria">
            {CATEGORIE.map((cat) => {
              const attivo = filtro === cat.id;
              const Icon = ICONE[cat.id];
              return (
                <button
                  key={cat.id}
                  onClick={() => setFiltro(cat.id)}
                  role="tab"
                  aria-selected={attivo}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border transition-all ${
                    attivo ? 'border-transparent font-medium' : `${theme.border} ${theme.textMuted}`
                  }`}
                  style={attivo ? { backgroundColor: '#C5F44E', color: '#0a0a0a' } : {}}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lista.map((p) => (
              <button
                key={p.id}
                onClick={() => setAperto(p)}
                className={`group text-left p-8 rounded-2xl border ${theme.border} ${theme.cardBg} transition-all duration-300 hover:border-accent`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className={`text-xs uppercase tracking-widest ${theme.textMuted}`}>{p.tag}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight mb-2">{p.titolo}</h3>
                <p className={`text-sm ${theme.textMuted} mb-6`}>{p.sottotitolo}</p>
                <div className={`flex items-center justify-between pt-6 border-t ${theme.border} text-xs ${theme.textMuted}`}>
                  <span>{p.anno}</span>
                  <span>{p.ruolo}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {aperto && <ProgettoModale progetto={aperto} onClose={() => setAperto(null)} theme={theme} dark={theme.dark} />}
    </>
  );
}