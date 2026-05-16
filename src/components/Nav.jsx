import { Moon, Sun } from 'lucide-react';

const VOCI = [
  { id: 'about', label: 'Su di me' },
  { id: 'progetti', label: 'Progetti' },
  { id: 'competenze', label: 'Competenze' },
  { id: 'contatti', label: 'Contatti' },
];

export default function Nav({ dark, setDark, sezioneAttiva, scrollA, theme }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 ${dark ? 'bg-neutral-950/80' : 'bg-[#fafaf7]/80'} backdrop-blur-md border-b ${theme.border}`}
      aria-label="Navigazione principale"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollA('hero')}
          className="font-display text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
          aria-label="Vai all'inizio"
        >
          JT<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1 text-sm">
          {VOCI.map((v) => {
            const attivo = sezioneAttiva === v.id;
            return (
              <button
                key={v.id}
                onClick={() => scrollA(v.id)}
                className={`px-3 py-2 rounded-full transition-all ${attivo ? 'font-medium' : theme.textMuted}`}
                style={attivo ? { backgroundColor: '#C5F44E', color: '#0a0a0a' } : {}}
              >
                {v.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setDark((d) => !d)}
          className={`p-2 rounded-full border ${theme.border} hover:scale-105 transition-transform`}
          aria-label={dark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
        >
          {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
}