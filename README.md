# stomatologia-opole.pl

FILAR LOKALNY OGÓLNY — serwis o stomatologii w Opolu, pod frazy „dentysta Opole" / „stomatolog Opole".
Część ekosystemu SEO dr Marcina Nowosielskiego, konwersja → klinika Mikrostomart Opole.

- **Stack:** Astro 6 (SSG) + sitemap + RSS, deploy na Vercel
- **Domena:** https://stomatologia-opole.pl
- **Autor treści:** lek. dent. Marcin Nowosielski, M.Sc. RWTH Aachen (kanon @id: nowosielski.pl/#person)

## Struktura

- `src/pages/*.astro` — pillar pages (dentysta-opole, stomatolog-opole, gabinet-stomatologiczny-opole, cennik-stomatologa-opole)
- `src/content/blog/*.md` — artykuły cluster (próchnica, higienizacja, estetyka, protetyka, dzieci, cito)
- `src/data/site.ts` — centralna konfiguracja brandu i NAP
- `src/components/SchemaBase.astro` — schema.org Physician + WebSite + Dentist

## Komendy

| Komenda | Akcja |
| :--- | :--- |
| `npm install` | Instalacja zależności |
| `npm run dev` | Dev server localhost:4321 |
| `npm run build` | Build produkcyjny → `./dist/` |
| `npm run preview` | Podgląd buildu lokalnie |
