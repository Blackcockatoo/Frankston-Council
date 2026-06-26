# Blue $nake Studio — BLKCK2 Creative Portal

Static site deploy for the **Blue $nake Studio / BLKCK2** creative portal, with the **Frankston 2035 - Art That Lives** civic project as a sub-portal.

## Site Structure

```
/                       → BLKCK2 creative portal (Blue $nake Studio)
/frankston/             → Frankston 2035 civic proposal site
/01_auralia/ ... /24/   → BLKCK2 image library (numbered category folders)
/apps/                  → BLKCK2 mini-apps (Magic Cube, Moss60 Oracle)
/documents/             → PDFs and documents (Pulse of Krishna, OSS-734G, etc.)
/downloads/             → Print packs, QR drops, colouring pages, lyric sheets
/data/                  → JS data files (gallery-items.js, studio-sections.js)
```

## Root Site — BLKCK2

The main portal. Dark, artistic, interactive.

- `index.html` — BLKCK2 homepage (intro video, gallery tree, three doors)
- `styles.css` — BLKCK2 dark design system
- `script.js` — gallery tree + interactive experience
- `black-wing-crew.html`, `magic-cube.html`, `meta-pet.html`, `proof-wall.html`, `print.html`, `store.html`, `teacher-tools.html`, `field-guide.html`, `gov.html`, `qr-portal.html`, `start.html`, `press-kit.html`, `privacy-policy.html`, `packs.html`, `site-health.html`, `strongman-tracker.html`

## Frankston 2035 Sub-Portal

Civic creativity proposal for Frankston City Council.

- `frankston/index.html` — Frankston 2035 homepage
- `frankston/vision.html`, `frankston/public-art-pilots.html`, `frankston/schools.html`
- `frankston/sister-city.html`, `frankston/print-pack.html`, `frankston/media-contact.html`
- `frankston/posters.html`, `frankston/pilots.html`, `frankston/healthy-technology.html`, `frankston/image-library.html`
- `frankston/style.css` — Frankston civic design system
- `frankston/assets/` — Frankston images and artwork

## Deploy

**Vercel static deploy. No build step.**

Root is served directly. `vercel.json` handles clean URLs and security headers.

```bash
# Local dev
python -m http.server 8080
# Then open http://localhost:8080
```

## Key Identity Rules

### BLKCK2 / Blue $nake Studio
- Dark, strange, artistic, musical, memetic, useful, alive.
- B$S / Black Wing Crew / Neon Venom / Auralia energy.
- Strong homepage navigation first.

### Frankston 2035
- Frankston is the hero. Blue Snake Studio is the engine, not the headline.
- Every page must have a practical next step.
- First Nations content is protocol-only — no content without guidance from appropriate Traditional Owner organisations.
- Sister City content is real exchange, not decorative symbolism.
- Technology must give attention back to real places and real people.

## Cleanup Report

See `CLEANUP_REPORT.md` for full audit of what was integrated, archived, and what remains.
