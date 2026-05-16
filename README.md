# Portfolio — Jacopo Tagliazucca

Portfolio personale costruito con Vite + React + Tailwind CSS.

## Setup locale

Servono **Node.js 18+** e **npm**. Verifica con:
````bash
node --version
npm --version
````

Installa le dipendenze e avvia il dev server:

````bash
npm install
npm run dev
````

Apri http://localhost:5173 nel browser.

## Build di produzione

````bash
npm run build
npm run preview
````

I file pronti per il deploy finiscono nella cartella `dist/`.

## Aggiungere un nuovo progetto

Apri `src/data/progetti.js` e aggiungi un oggetto al fondo dell'array `PROGETTI`. Campi richiesti: `id`, `categoria`, `tag`, `titolo`, `sottotitolo`, `anno`, `ruolo`, `descrizione`, `strumenti`. Per aggiungere un'immagine, mettila in `public/progetti/` e referenziala in `immagine: '/progetti/nome.png'`.

## Stack

- Vite 6
- React 18
- Tailwind CSS 3
- lucide-react (icone)

## Licenza

Contenuti © 2026 Jacopo Tagliazucca. Codice rilasciato sotto licenza MIT.# portfolio-jacopo
