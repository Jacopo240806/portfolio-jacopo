export default function Footer({ theme }) {
  return (
    <footer className={`px-6 lg:px-12 py-12 border-t ${theme.border}`}>
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${theme.textMuted}`}>
        <p>© 2026 Jacopo Tagliazucca · Tutti i diritti riservati</p>
        <p>Progettato e sviluppato con cura — Bolzano, IT</p>
      </div>
    </footer>
  );
}