import { Languages } from 'lucide-react';
import { PROFILO } from '../data/profilo';

export default function About({ theme }) {
  return (
    <section id="about" className={`px-6 lg:px-12 py-32 border-t ${theme.border}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-4`}>01 — Chi sono</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
              Studente, designer e<br />
              <em className="not-italic" style={{ color: '#7a9a2a' }}>giocatore di squadra</em>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed mb-8">{PROFILO.bio}</p>
            <div className={`grid grid-cols-2 gap-6 pt-8 border-t ${theme.border}`}>
              <div>
                <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-3 flex items-center gap-2`}>
                  <Languages className="w-3 h-3" />
                  Lingue
                </p>
                <ul className="space-y-1.5 text-sm">
                  {PROFILO.lingue.map((l) => (
                    <li key={l.nome} className="flex justify-between">
                      <span>{l.nome}</span>
                      <span className={theme.textMuted}>{l.livello}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-3`}>Formazione</p>
                <p className="text-sm font-medium">UniTn · ITC</p>
                <p className={`text-sm ${theme.textMuted}`}>Interfacce e Tecnologie della Comunicazione</p>
                <p className="text-sm font-medium mt-3">ITT "Galileo Galilei"</p>
                <p className={`text-sm ${theme.textMuted}`}>Diploma Tecnico Informatico · 2020–2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}