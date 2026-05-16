import { Code2, Palette, Sparkles } from 'lucide-react';
import { COMPETENZE } from '../data/competenze';

const ICONE = { Code2, Palette, Sparkles };

export default function Competenze({ dark, theme }) {
  return (
    <section
      id="competenze"
      className={`px-6 lg:px-12 py-32 border-t ${theme.border}`}
      style={{ backgroundColor: dark ? '#0c0c0c' : '#f3f3ee' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-4`}>03 — Cosa so fare</p>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-16 max-w-2xl">
          Competenze, strumenti e attitudini.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: dark ? '#1f1f1f' : '#e5e5e0' }}>
          {COMPETENZE.map((c, i) => {
            const Icon = ICONE[c.iconName];
            return (
              <div key={i} className={`p-8 ${dark ? 'bg-neutral-950' : 'bg-[#fafaf7]'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#C5F44E33' }}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-medium">{c.categoria}</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}