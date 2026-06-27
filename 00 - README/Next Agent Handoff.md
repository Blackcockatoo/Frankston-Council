# Next Agent Handoff
## Frankston 2035 - Art That Lives

---

## Public-readiness audit — 2026-06-27 (Claude, branch `claude/frankston-public-ready-bpyq1k`)

### Repo map

Two deployable projects share this repo:

| Location | Site | Deploy |
|---|---|---|
| Root (`/`) | Frankston 2035 — Art That Lives | Vercel (`vercel.json` + `npm run build`) |
| `blkck2.0/blkck-main/` | Blue Snake Studio (blkck2.com) | Netlify (`blkck2.0/blkck-main/netlify.toml`) |
| `blkck2.0/` | Frankston 2035 v2 (expanded, not yet deployed) | Not yet wired |

### What was broken and is now fixed (root site)

1. **Nav dead-ends** — `index.html`, `pilots.html`, `healthy-technology.html` were all missing "Print Pack" in the navigation. A visitor who landed on any of those pages had no path to the print materials. Fixed: Print Pack is now in all 5 page navs.
2. **OG image wrong** — All pages pointed social sharing at the 2.5 MB hero PNG. The repo has a purpose-built 40 KB OG card (`frankston-2035-og-card-dark.png`). All pages now use it. `print-pack.html` had no OG image at all — added.
3. **Language attribute wrong** — All 5 main pages had `lang="en"`. This is an Australian site. Updated to `lang="en-AU"` across all 6 deployed files (5 main + 404).
4. **404 page was silent** — The 404 just did a `<meta http-equiv="refresh">` to `/` with no content. Replaced with a proper "page not found" layout using site styles, nav, and two CTAs.

### What is confirmed working (root site)

- Build: `npm run build` completes clean, outputs to `dist/`
- All image paths resolve — 14 images, all present under `assets/images/`
- All poster seed SVGs 01-06, 08-10 present under `assets/print-pack/poster-seeds/`
- All inter-page nav links resolve
- Print styles in `style.css` are correct — poster cards break to A4, header/footer hidden on print
- `favicon.svg` present and correctly linked
- `dist/` is in `.gitignore`
- Accessibility basics: skip links on all pages, `aria-current` on active nav items, alt text on all images, table headers in healthy-technology.html

### Documented blockers (root site — do not fake)

| Blocker | Exactly what is needed |
|---|---|
| Poster seed 07 SVG missing | Generate `poster-seed-07-every-child-adds-a-mark.svg` at 2480×3508 px matching the style of seeds 01-06. Then update `print-pack.html` seed-07 card: remove the `<div class="poster-placeholder">` and the `pending` class, add `<img src="assets/print-pack/poster-seeds/poster-seed-07-every-child-adds-a-mark.svg" alt="...">` and a `<div class="pack-actions"><a href="...">Open SVG</a></div>`. |
| Image performance | All hero/gallery PNGs are 2-3 MB each. Production deploy should compress to ≤300 KB WebP. No compression tooling is wired in. Add sharp/squoosh to build script, or replace files manually. Not fixable without tooling or replacement files. |
| `frankston-hero.svg` unused | Exists at `assets/frankston-hero.svg` but never referenced in any HTML. README claims it's the "lightweight civic hero artwork." Either wire it into `index.html` as a hero replacement or delete it from the assets list. Currently deployed but unused. |
| Social meta incomplete | No `<meta property="og:type">` or `<meta property="twitter:card">` on any page. Worth adding before any social campaign push. |

### blkck2.0 site status

No broken asset paths. All placeholder SVGs exist. All inter-page links resolve. `blkck2.0/TODO.md` correctly documents what's blocked (photography rights, QR codes, protocol gates). Not yet wired to a Vercel deploy.

### Safe to delete

- `styles.css` (root) — dark theme CSS for an earlier BSS iteration. No deployed Frankston 2035 page references it. Not in build script.
- `Frankston 2035 - Art That Lives - Seed Kit/Static Website + Poster Seed Pack/` — original prototype superseded by root site.

---

## Current state (existing handoff below)

This project is a civic creativity framework and seed kit. Frankston is the hero. Blue Snake Studio is the delivery engine, proof source, and maker stamp, not the headline.

The current phase is **Compression + Council Pitch Build**: make the project understandable in 90 seconds, credible in 5 minutes, and pilot-worthy in 15 minutes.

## What is complete

- Chunk 00 operating layer is complete enough for continuation: README, Contents, Roadmap, Risk Register, Asset Register, Proof Register, Design Production Queue, and handoff structure exist.
- Master folder index has been updated with current statuses and next actions.
- Static website seed kit exists locally and in Drive, including `index.html`, `posters.html`, `pilots.html`, `healthy-technology.html`, `style.css`, `README.md`, and assets.
- First two design production sheets exist: Screen as Doorway diagram and Pilot Menu one-pager.
- Compression artifacts now exist locally and are ready for Drive upload: Hero Diagram, Pilot Decision Sheet, 12-slide Council Deck Scaffold, and Proof Register.

## What is drafted

- `01 - Executive Summary` is drafted.
- `03 - Presentation Pack` has a 12-slide Council Deck Scaffold.
- `04 - Blue Snake Studio` is drafted as capability proof, but needs links/screenshots.
- `07 - Healthy Technology` is drafted and now needs implementation proof and a checklist.
- `08 - Pilot Projects` is drafted with five low-cost pilot concepts.
- `10 - Graphics` contains draft HTML production sheets.
- Public-facing static site/poster seed pack is drafted.

## What is risky or blocked

- `06 - First Nations` has only a protocol seed. It is not approval, not cultural content, and not a finished engagement pathway.
- `05 - Frankston x Susono` remains blocked. Do not start until sister-city relationship custodians guide the next step.
- Public release remains risky until review gates are completed.
- Healthy Technology claims need implementation proof before any public pilot.
- B$S capability claims need proof links, screenshots, ownership notes, and safety notes.
- The Library Creative Pack is recommended as the safest first pilot candidate, but Tom has not confirmed it.

## What not to touch yet

- Do not start `05 - Frankston x Susono`.
- Do not write speeches yet.
- Do not create First Nations cultural content, language, symbols, stories, names, or claims.
- Do not imply council approval, Traditional Owner approval, Susono approval, funding, or partnership.
- Do not generate final QR codes until URLs, privacy notes, and pilot scope are stable.
- Do not expand the philosophy documents. Compress, prove, design, and decide.

## Exact next recommended task

1. Tom decides whether **Library Creative Pack** is the Stage One pilot candidate.
2. Fill `Proof Register.md` with live B$S project links, screenshots, and public/private status.
3. Convert `12-Slide Council Deck Scaffold.md` into a visual deck using the Hero Diagram and Pilot Decision Sheet.
4. Build the First Nations full 9-part protocol-only treatment, with no cultural content.

## Key local paths

- `drive-output/00-readme/Contents.md`
- `drive-output/00-readme/Roadmap.md`
- `drive-output/00-readme/Risk Register.md`
- `drive-output/00-readme/Asset Register.md`
- `drive-output/00-readme/Proof Register.md`
- `drive-output/00-readme/Design Production Queue.md`
- `drive-output/00-readme/Next Agent Handoff.md`
- `drive-output/03-presentation-pack/12-Slide Council Deck Scaffold.md`
- `drive-output/10-graphics/03-hero-system-map.html`
- `drive-output/10-graphics/04-pilot-decision-sheet.html`
- `drive-output/07-healthy-technology/07 - Healthy Technology - Main Document Draft.md`
- `drive-output/08-pilot-projects/08 - Pilot Projects - Main Document Draft.md`
- `index.html`
- `healthy-technology.html`
- `pilots.html`
- `posters.html`
- `style.css`

## Key Drive links

- Contents: https://drive.google.com/file/d/1HgVj2AmOwTJs0GolwX9CCSrIG5dwoCOj/view?usp=drivesdk
- Roadmap: https://drive.google.com/file/d/1N1mfgi0toVQQuE8vKiyIvg3JsiCL2ghg/view?usp=drivesdk
- Risk Register: https://drive.google.com/file/d/1FM5K98nF_NZ-f82RpkUCrYD4WVhLClhg/view?usp=drivesdk
- Asset Register: https://drive.google.com/file/d/1qwnDVF77nGP7aYyIC4FoFMqlM4NjOhhm/view?usp=drivesdk
- Design Production Queue: https://drive.google.com/file/d/1jQRgOtz_HUnbdS7A41iowk_9tcvUmFwq/view?usp=drivesdk
- 07 Healthy Technology folder: https://drive.google.com/drive/folders/1PD2r0aJjogKgK1MLsWnKF3r4IbHXihb2
- 08 Pilot Projects folder: https://drive.google.com/drive/folders/1McKW3ksCV6oEXJnno5e1hhkPiYTUWzuR
- 10 Graphics folder: https://drive.google.com/drive/folders/1rmNQ1w4MFuxrTRQWUbQFIxlqe7NWDfEG
- 03 Presentation Pack folder: https://drive.google.com/drive/folders/1vMKPuhHtIJZduKTxYr95TXMLcfHZL6nn
- Static Website + Poster Seed Pack folder: https://drive.google.com/drive/folders/1J0FI-Lvc1NZb2ee95v8jUHqmeTB2wDKP
- Proof Register: https://drive.google.com/file/d/1u-CAKknte-0gVdWJIUgXb2T2ByfcrzVy/view?usp=drivesdk
- Hero Diagram: https://drive.google.com/file/d/1LX3gN-zecEU4f7LrIBwAW44Y7ZetfOs2/view?usp=drivesdk
- Pilot Decision Sheet: https://drive.google.com/file/d/1AQ2CzHSN2iebNIwO6SbJngzV4UkxI02y/view?usp=drivesdk
- 12-Slide Council Deck Scaffold: https://drive.google.com/file/d/1-EqmM00nfp5W_aOOyZjZrfsYSjvp0XZ_/view?usp=drivesdk

## Warning

Do not generate First Nations cultural content. Build protocol only. Use status language: "protocol pathway only - no permission implied."
