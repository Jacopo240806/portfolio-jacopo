import { Mail, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { PROFILO } from '../data/profilo';

export default function Contatti({ theme }) {
  return (
    <section id="contatti" className={`px-6 lg:px-12 py-32 border-t ${theme.border}`}>
      <div className="max-w-6xl mx-auto">
        <p className={`uppercase tracking-widest text-xs ${theme.textMuted} mb-4`}>04 — Mettiamoci in contatto</p>
        <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] mb-12 max-w-4xl">
          Hai un progetto in mente?<br />
          <em className="not-italic" style={{ color: '#7a9a2a' }}>Scrivimi</em>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a href={`mailto:${PROFILO.email}`} className={`group p-6 rounded-2xl border ${theme.border} ${theme.cardBg} block transition-all hover:border-accent`}>
            <Mail className="w-5 h-5 mb-4" />
            <p className={`text-xs uppercase tracking-widest ${theme.textMuted} mb-2`}>Email</p>
            <p className="font-medium break-all text-sm md:text-base">{PROFILO.email}</p>
          </a>
          <a href={PROFILO.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`group p-6 rounded-2xl border ${theme.border} ${theme.cardBg} block transition-all hover:border-accent`}>
            <Linkedin className="w-5 h-5 mb-4" />
            <p className={`text-xs uppercase tracking-widest ${theme.textMuted} mb-2`}>LinkedIn</p>
            <p className="font-medium">{PROFILO.linkedinLabel}</p>
          </a>
          <a href={`tel:${PROFILO.telefono.replace(/\s/g, '')}`} className={`group p-6 rounded-2xl border ${theme.border} ${theme.cardBg} block transition-all hover:border-accent`}>
            <Phone className="w-5 h-5 mb-4" />
            <p className={`text-xs uppercase tracking-widest ${theme.textMuted} mb-2`}>Telefono</p>
            <p className="font-medium">{PROFILO.telefono}</p>
          </a>
        </div>

        <a
          href={`mailto:${PROFILO.email}?subject=Progetto%20da%20discutere`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all hover:scale-[1.02] bg-accent text-neutral-900"
        >
          Scrivimi una mail
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}