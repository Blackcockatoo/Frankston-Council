# Frankston 2035 - Art That Lives Seed Kit

Static Vercel deploy for **Frankston 2035 - Art That Lives**.

This repo now contains the public-facing seed kit rather than a placeholder landing page.

## Pages

- `index.html` - landing page and main civic explanation
- `posters.html` - ten printable A4 poster seeds
- `pilots.html` - five low-cost pilot concepts
- `healthy-technology.html` - Healthy Technology Charter and pilot safety checklist
- `style.css` - shared design system, responsive layout, and print styles
- `assets/frankston-hero.svg` - lightweight civic hero artwork

## Vercel settings

The repo includes `vercel.json` and `package.json`.

Vercel should use:

- Build Command: `npm run build`
- Output Directory: `dist`
- Branch: `main`

The build script copies all HTML pages, CSS, favicon, 404 page, README, and hero asset into `dist`.

## Local run

Open `index.html` directly, or run:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Content rules

1. Frankston is the hero.
2. Blue Snake Studio is the engine, maker, or stamp - not the headline.
3. Start small, think generational.
4. Every big idea needs a low-cost pilot.
5. Art must be useful, not just beautiful.
6. Technology must give attention back to real places and real people.
7. First Nations content is permission-based, respectful, and guided by appropriate Traditional Owner organisations.
8. Sister City content must focus on real exchange, not symbolic decoration.
9. Every page points to practical next steps.
10. The ecosystem is the artwork.

## What not to do

- Do not claim First Nations partnership, language use, stories, symbols, or approvals unless they exist.
- Do not claim a formal Susono program where there is only a proposed exchange.
- Do not invent statistics, studies, endorsements, or council support.
- Do not make Blue Snake Studio the visual headline.
- Do not measure success by keeping children on screens.
- Do not add infinite scroll, dark patterns, gambling mechanics, default child logins, or child data collection.
- Do not turn the pilot pathway into a large rollout before one small test has earned it.
