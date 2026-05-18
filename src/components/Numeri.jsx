import { PROFILO } from '../data/profilo';

export default function Numeri({ dark, theme }) {
  return (
    <section
      className={`px-6 lg:px-12 py-20 border-t ${theme.border}`}
      style={{ backgroundColor: dark ? '#0c0c0c' : '#f3f3ee' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {PROFILO.numeriChiave.map((n, i) => (
          <div key={i} className="text-center md:text-left">
            {/^\d+/.test(n.valore) ? (
              <p className="font-display text-5xl md:text-6xl font-medium leading-none mb-2">
                <CountUp end={parseInt(n.valore)} suffix={n.valore.replace(/^\d+/, '')} />
              </p>
            ) : (
              <p className="font-display text-5xl md:text-6xl font-medium leading-none mb-2">{n.valore}</p>
            )}
            <p className={`text-sm ${theme.textMuted}`}>{n.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}