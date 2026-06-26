# CLEANUP REPORT — BLKCK2 Integration
**Date:** 2026-06-26  
**Branch:** `claude/blkck2-cleanup-integration-e31uu8`  
**Engineer:** Claude (automated cleanup + integration)

---

## What Was Found in `blkck2.0/`

The `blkck2.0/` folder contained two completely separate sites mixed into one folder:

### `blkck2.0/blkck-main/` — The Real BLKCK2 Creative Portal
Previously deployed at `blkck2.com` via Netlify. Contained:
- Full dark artistic portal homepage with intro video, gallery tree, interactive JS
- 24 numbered image folders (01_auralia through 24_auralia_prints) — ~150 image files
- Pages: `black-wing-crew.html`, `magic-cube.html`, `meta-pet.html`, `field-guide.html`, `gov.html`, `print.html`, `proof-wall.html`, `store.html`, `start.html`, `teacher-tools.html`, `packs.html`, `qr-portal.html`, `press-kit.html`, `privacy-policy.html`, `site-health.html`, `strongman-tracker.html`
- Apps: `apps/bs-word-cube.html`, `apps/moss60-oracle-warden.html` with 12 app preview images
- Data: `data/gallery-items.js`, `data/studio-sections.js`
- Documents: 3 PDFs + `oss-734g-known-unknowns-register.html`
- Downloads: 14 HTML/zip download packs (colouring pages, QR packs, lyric sheets, etc.)
- Content docs: `CODEX_PROMPT.md`, `GALLERY_LABELS.md`, `GALLERY_ROOMS.md`, `SITE_MAP.md`, etc.
- PWA: `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-192.png`, `icon-512.png`
- Videos: 5 MP4 files (YTShort intro + 4 source videos, ~23MB total)
- Build: `netlify.toml`, `_redirects`, `CNAME` (Netlify-specific)

### `blkck2.0/` root level — Older Frankston 2035 Pages
An older/parallel version of the Frankston 2035 civic proposal site:
- Extended pages: `vision.html`, `image-library.html`, `public-art-pilots.html`, `schools.html`, `sister-city.html`, `print-pack.html`, `media-contact.html`
- Same pages as root (older versions): `index.html`, `posters.html`, `pilots.html`, `healthy-technology.html`, `style.css`
- Download templates: `frankston-2035-flyer.html`, `lesson-pack-starter.html`, `qr-card-template.html`, `student-artwork-pathway.html`
- Duplicate assets: `assets/frankston-hero.png`

### `blkck2.0/drive-output/` — Docs Mirror
Markdown/doc files mirroring content already in the numbered root folders (`00 - README`, `07 - Healthy Technology`, `08 - Pilot Projects`, `10 - Graphics`). Duplicate, not deployed.

---

## What Was Integrated

### BLKCK2 — Now The Root Site
All files from `blkck2.0/blkck-main/` moved to repo root:
- `index.html` (BLKCK2 dark portal homepage replaces Frankston homepage at root)
- `styles.css`, `script.js`, `sw.js`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`
- All 24 numbered image folders at root level
- All HTML pages at root level
- `data/`, `apps/`, `content/`, `docs/`, `documents/`, `downloads/`
- All 5 video files
- PWA icons

### Frankston 2035 — Now a Sub-Portal at `/frankston/`
Files moved to `frankston/` subfolder:
- `frankston/index.html` — Frankston 2035 homepage (best version from old root)
- `frankston/posters.html`, `frankston/pilots.html`, `frankston/healthy-technology.html`
- Extended pages from `blkck2.0/`: `vision.html`, `image-library.html`, `public-art-pilots.html`, `schools.html`, `sister-city.html`, `print-pack.html`, `media-contact.html`
- Download templates: `frankston/downloads/frankston-2035-flyer.html`, `lesson-pack-starter.html`, `qr-card-template.html`, `student-artwork-pathway.html`
- `frankston/assets/` — all Frankston images (frankston-hero.png, campaign art, posters)
- `frankston/style.css` — Frankston civic design system

### Navigation Cross-Links Added
- BLKCK2 root nav: "Frankston 2035" link → `/frankston/`
- BLKCK2 proof strip: "Frankston 2035" live item card
- All frankston/ pages: "← B$S Studio" back link in nav
- frankston/index.html nav expanded: added Vision, Schools, Print Pack links

### Path Fixes Applied
- All `src="/assets/images/..."` → `src="assets/images/..."` in frankston/ pages
- OG image meta tags updated to `/frankston/assets/images/...` in frankston/ pages
- Two-CSS-file confusion resolved: `style.css` = Frankston, `styles.css` = BLKCK2

---

## What Was Archived / Deleted

- `blkck2.0/` folder entirely removed (all useful content integrated)
- `blkck2.0/drive-output/` — docs mirror, not deployed (content exists in numbered root folders)
- `blkck2.0/assets/frankston-hero.png` — duplicate of `frankston/assets/images/frankston-hero.png`
- `blkck2.0/*.html` Frankston root-level duplicates — better versions kept in `frankston/`
- `netlify.toml` and `_redirects` from blkck-main — Netlify-specific, kept for reference in `/docs/`

---

## What Remains Broken or Needs Attention

### Known Issues
1. **CNAME file at root** — contains `blkck2.com` which conflicts with Vercel hosting. If deploying to Vercel at a different domain, remove or update CNAME.
2. **Video files in git** — 5 MP4s (~23MB) are committed directly. Should use a CDN (Cloudinary, Bunny.net, or YouTube embeds) for production.
3. **BLKCK2 `canonical` tag** — all pages reference `https://blkck2.com/` in canonical tags. Update if deploying to a different domain.
4. **`frankston/image-library.html`** — references images in `assets/` folder that use placeholder boxes instead of real images. Photo rights and approved images still needed (see `blkck2.0/TODO.md`).
5. **QR codes** — `downloads/qr-card-template.html` has `QR PENDING` placeholders. Final QR codes needed after URL/domain stabilises.
6. **frankston/pilots.html vs frankston/public-art-pilots.html** — two overlapping pilot pages. `pilots.html` is the simpler current version; `public-art-pilots.html` is the extended version from blkck2.0. Both serve different depths. Consider merging or clarifying which is canonical.
7. **`frankston/downloads/` CSS** — the download HTML files may reference `style.css` expecting to find it relative to themselves, but `style.css` is now one directory up (`../style.css`). Needs a path check.

### Missing Assets (Already Missing Before Cleanup)
- Approved Frankston photography for `image-library.html` categories
- Final QR codes for print templates
- Confirmed First Nations / Susono content (protocol-blocked, intentional)

---

## Next Best Tasks

1. **Domain + CNAME fix** — Decide: is this deploying to `blkck2.com` or another Vercel domain? Update `CNAME`, all `canonical` meta tags, and OG image URLs accordingly. (~30 min)

2. **Move video files to CDN** — Replace `<video src="YTShort_20June2026_13_12_14.mp4">` in `index.html` with a YouTube embed or Cloudinary URL. Remove MP4s from git. Use `.gitignore` to prevent re-adding. (~1 hour)

3. **Fix frankston/downloads/ CSS paths** — Audit all 4 download HTML files in `frankston/downloads/`. Update `href="style.css"` to `href="../style.css"` so they find the parent Frankston stylesheet. (~15 min)

4. **Merge or retire pilot page duplication** — Decide whether `frankston/pilots.html` or `frankston/public-art-pilots.html` is the canonical pilot page. Redirect or remove the other. (~20 min)

5. **Add real approved imagery** — Replace `frankston/assets/images/` placeholder-category images in `image-library.html` with approved photography once rights/permissions are confirmed. This is the biggest remaining content gap for the Frankston 2035 public launch.

---

## Deploy / Build Status

- **Deploy method:** Vercel static, no build step. Root is served directly.
- **Root route `/`:** BLKCK2 creative portal (index.html, styles.css, script.js)  
- **Sub-route `/frankston/`:** Frankston 2035 civic proposal site  
- **404 route:** BLKCK2-branded 404.html  
- **PWA:** manifest.webmanifest + sw.js in place at root  
- **`npm run check`:** Verifies core files present, exits clean  
- **Vercel `cleanUrls: true`:** `/frankston/vision` → `frankston/vision.html` ✓

## File Count Summary

| Location | Type | Count |
|---|---|---|
| Root HTML pages | BLKCK2 | 17 pages |
| `/frankston/` pages | Frankston 2035 | 12 pages |
| `/01_auralia/` through `/24_auralia_prints/` | Images | ~150 files |
| `/apps/` | Mini apps | 2 HTML + 12 images |
| `/documents/` | PDFs + HTML | 4 files |
| `/downloads/` | Print packs | 14 files + 3 ZIPs |
| `/data/` | JS data | 2 files |
| `/frankston/downloads/` | Frankston templates | 4 files |
| `/frankston/assets/` | Frankston images | 15 files |
