# Frankston 2035 - Art That Lives

Version 1.0 static launch site for a civic creativity platform where Frankston is the artwork and Blue Snake Studio is the delivery engine.

The site is built to help councillors, schools, libraries, artists, families, local media, and funders understand the idea quickly and find a practical first step.

## File Structure

- `index.html` - public home page and core call to action
- `vision.html` - what the project is and why it matters
- `image-library.html` - category-ready visual library with rights-safe placeholders
- `public-art-pilots.html` - public art pilot menu and recommended first test
- `schools.html` - teacher-friendly pathway, lesson downloads, safe tech framing
- `sister-city.html` - Frankston-Susono proposed exchange pathway
- `print-pack.html` - posters, flyer, QR template, lesson sheets, print links
- `media-contact.html` - short press summary, contact, socials, credits
- `posters.html` - printable poster seed gallery
- `healthy-technology.html` - support charter for safe child-facing technology
- `pilots.html` - compatibility page pointing to `public-art-pilots.html`
- `style.css` - shared design system and responsive layout
- `assets/images/placeholders/` - safe abstract placeholder visuals for unapproved image categories
- `downloads/` - printable starter sheets and templates
- `TODO.md` - blocked items only

## Local Run Instructions

Open `index.html` directly in a browser, or run a simple local server:

```bash
python -m http.server 8891
```

Then visit:

```text
http://127.0.0.1:8891/index.html
```

## How To Update Images

1. Add approved image files to `assets/`.
2. Use lowercase names with hyphens, for example `frankston-pier-sunset.jpg`.
3. Update the relevant card in `image-library.html`.
4. Add meaningful `alt` text if using an actual `<img>`.
5. Record rights, owner, source, permission status, and caption before public use.
6. Do not publish student faces, community images, public artwork photos, First Nations material, or sister-city assets without the right permissions.

## How To Update Content

- Keep Frankston as the hero.
- Keep Blue Snake Studio as the maker/engine/stamp, not the headline.
- Use plain English.
- Every page should answer: "What is the next obvious step?"
- Do not imply council approval, funding, school participation, Susono participation, or cultural approval unless confirmed.
- Keep First Nations content protocol-only unless guided by appropriate Traditional Owner organisations.
- Keep technology short-session, no-login by default, and no-child-data by default.

## Current Public Path

1. Home
2. Vision
3. Image Library
4. Public Art Pilots
5. Schools
6. Healthy Technology
7. Sister City
8. Print Pack
9. Media / Contact

The Image Library, Sister City, and Healthy Technology pages are launch-ready as proposal pages. They should not be treated as final proof of image rights, partner approval, or implementation safety.

## V1 Hardening Notes

- All required routes are present as static HTML.
- Missing assets are handled with intentional placeholder sections.
- Print Pack buttons open existing local files.
- Final QR assets are deliberately marked pending.
- Healthy Technology is visible in the primary navigation.
- `pilots.html` remains as a compatibility route and points to `public-art-pilots.html`.

## Deployment / Check

- Upload the full folder to static hosting.
- Keep relative paths intact.
- Start at `index.html`.
- Check every page on mobile and desktop.
- Confirm all internal links resolve.
- Open browser dev tools and confirm there are no console errors.
- Confirm placeholder SVGs load from `assets/images/placeholders/`, then replace category-by-category only after rights, consent, captions, and approvals are recorded.
- Confirm `/downloads/` files are included in deployment.
- Confirm `/drive-output/10-graphics/` is included if the Pilot Menu / Decision Sheet links should remain live.
- Replace draft/placeholder assets before public promotion.

## Content Rules

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
