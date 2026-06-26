# CLEANUP REPORT — blkck2.0 Integration into Frankston 2035
**Date:** 2026-06-26  
**Branch:** `claude/blkck2-cleanup-integration-e31uu8`

---

## What Was Found in `blkck2.0/`

The `blkck2.0/` folder contained two separate things mixed together:

### `blkck2.0/blkck-main/` — The BLKCK2 Creative Portal (separate site, not integrated)
This is the Blue $nake Studio creative portal (`blkck2.com`), a separate deployment.
It was NOT integrated into this repo. It belongs in its own repo/deploy.

### `blkck2.0/` root level — Extended Frankston 2035 Pages (integrated)
Older/extended version of the Frankston 2035 site containing useful pages not yet in root:
- `vision.html` — full vision and strategy page
- `image-library.html` — visual library with image categories
- `public-art-pilots.html` — detailed public art pilot proposals
- `schools.html` — teacher and library pathway
- `sister-city.html` — Frankston-Susono exchange pathway
- `print-pack.html` — printable posters, flyer, QR templates, lesson sheets
- `media-contact.html` — press summary and contact details

### `blkck2.0/downloads/` — Frankston Download Templates (integrated)
- `frankston-2035-flyer.html` — event flyer template
- `lesson-pack-starter.html` — classroom starter sheet
- `qr-card-template.html` — printable QR card (QR pending)
- `student-artwork-pathway.html` — student participation pathway

### `blkck2.0/drive-output/` — Docs Mirror (archived/deleted)
Markdown files duplicating content already in the numbered root folders. Not deployed.

---

## What Was Integrated

All Frankston-specific pages from `blkck2.0/` moved to repo root alongside existing pages:

| File | Source | Status |
|---|---|---|
| `vision.html` | `blkck2.0/vision.html` | Added to root |
| `image-library.html` | `blkck2.0/image-library.html` | Added to root |
| `public-art-pilots.html` | `blkck2.0/public-art-pilots.html` | Added to root |
| `schools.html` | `blkck2.0/schools.html` | Added to root |
| `sister-city.html` | `blkck2.0/sister-city.html` | Added to root |
| `print-pack.html` | `blkck2.0/print-pack.html` | Added to root |
| `media-contact.html` | `blkck2.0/media-contact.html` | Added to root |
| `downloads/*.html` | `blkck2.0/downloads/` | Added to `downloads/` |

Navigation updated in `index.html` to include all new pages.

---

## What Was Deleted / Archived

- `blkck2.0/blkck-main/` — BLKCK2 creative portal (separate site, deleted from this repo)
- `blkck2.0/drive-output/` — docs mirror (deleted)
- `blkck2.0/assets/frankston-hero.png` — duplicate of `assets/images/frankston-hero.png`
- `blkck2.0/` root Frankston duplicates — outdated versions of pages already at root

---

## What Remains Broken or Needs Attention

1. **`image-library.html`** — placeholder image boxes for most categories. Approved photography needed before public promotion.
2. **QR codes in `downloads/qr-card-template.html`** — marked `QR PENDING`. Final codes needed after URLs/hosting stabilise.
3. **`downloads/qr-card-template.html` CSS path** — references `../style.css`, correct for its location in `downloads/`.
4. **`pilots.html` vs `public-art-pilots.html`** — both exist. `pilots.html` is a simpler overview; `public-art-pilots.html` is the full detailed version. Nav now points to the detailed version. `pilots.html` can be kept as a lighter entry point or eventually retired.
5. **First Nations content** — protocol-only. No content without guidance from appropriate Traditional Owner organisations.
6. **Susono exchange** — proposed only. No formal approval exists yet.

---

## Next Best Tasks

1. **Add approved photography** to `image-library.html` categories (Beach, Pier, Station, Schools, Nostalgia, Public Art, Sister City, Community). Confirm rights/permissions before publishing.
2. **Finalise QR codes** in `downloads/qr-card-template.html` once hosting URL is confirmed.
3. **Confirm pilot candidate** — which pilot is the actual Stage One test? Update `public-art-pilots.html` to highlight it clearly.
4. **Add image credits** to all images now in `assets/images/` — source, rights, photographer, public-use status.
5. **Update nav on all subpages** — `healthy-technology.html`, `posters.html`, `pilots.html` have the older 4-item nav. Update to the full extended nav now that more pages exist.
