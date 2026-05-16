import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ProgettoModale({ progetto, onClose, theme, dark }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm fade-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl ${theme.cardBg} p-8 md:p-12`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full border ${theme.border} hover:scale-105 transition-transform`}
          aria-label="Chiudi"
        >
          <X className="w-4 h-4" />
        </button>

        <p className={`text-xs uppercase tracking-widest ${theme.textMuted} mb-4`}>{progetto.tag}</p>
        <h3 id="modal-title" className="font-display text-3xl md:text-5xl font-medium leading-tight mb-3">
          {progetto.titolo}
        </h3>
        <p className={`text-lg ${theme.textMuted} mb-8`}>{progetto.sottotitolo}</p>

        {progetto.immagine ? (
          <img
            src={progetto.immagine}
            alt={`Mockup di ${progetto.titolo}`}
            className={`mb-8 w-full aspect-video object-cover rounded-xl border ${theme.border}`}
            loading="lazy"
          />
        ) : (
          <div
            className={`mb-8 aspect-video rounded-xl border ${theme.border} flex items-center justify-center`}
            style={{ backgroundColor: dark ? '#0c0c0c' : '#f3f3ee' }}
            role="img"
            aria-label={`Mockup placeholder per ${progetto.titolo}`}
          >
            <p className={`text-sm ${theme.textMuted}`}>[Mockup in arrivo — da aggiungere]</p>
          </div>
        )}

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 pb-8 border-b ${theme.border} text-sm`}>
          <div>
            <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-1`}>Anno</p>
            <p className="font-medium">{progetto.anno}</p>
          </div>
          <div>
            <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-1`}>Ruolo</p>
            <p className="font-medium">{progetto.ruolo}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-1`}>Contesto</p>
            <p className="font-medium">{progetto.contesto}</p>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-8">{progetto.descrizione}</p>

        {progetto.soluzioni?.length > 0 && (
          <div className="mb-8">
            <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-4`}>Cosa abbiamo costruito</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {progetto.soluzioni.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-accent" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-8">
          <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-3`}>Strumenti</p>
          <div className="flex flex-wrap gap-2">
            {progetto.strumenti.map((s) => (
              <span key={s} className={`px-3 py-1 rounded-full text-xs border ${theme.border}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {progetto.team && (
          <div>
            <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-2`}>Team</p>
            <p className="text-sm">{progetto.team}</p>
          </div>
        )}
      </div>
    </div>
  );
}