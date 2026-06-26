# Frankston Council Deploy

Static Vercel deploy seed for **Frankston 2035 — Art That Lives**.

## Why this exists

The Vercel deployment was returning `404: NOT_FOUND` because this repository had no deployable site files beyond the starter README. Vercel had no real `index.html`, build output, or fallback route to serve.

## Fix applied

- Added `index.html` launch page.
- Added `styles.css` civic visual styling.
- Added `favicon.svg`.
- Added `404.html` redirect fallback.
- Added `package.json` with a static build script.
- Added `vercel.json` with `dist` output and route rewrite fallback.

## Deploy settings

Vercel should use:

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: default / automatic

If Vercel ignores repo config, set those values manually in the Vercel project settings.

## Positioning rule

Frankston is the hero. This is an independent creative proposal and does not use official council branding.
