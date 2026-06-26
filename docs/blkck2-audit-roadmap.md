# BLKCK2 Audit and Roadmap

Date: 2026-06-25

## Executive Audit

BLKCK2 is already more than a portfolio. It is a static creative platform with 32 HTML pages, a PWA shell, 118 PNG assets, 43 JPG/JPEG/WEBP assets, 5 MP4s, 3 PDFs, 3 ZIP packs, gallery data, studio-section data, printable pages, games, store pages, school pages, and music-world links.

The core opportunity is to turn the existing density into a guided product system: one front door, clear audience paths, fast previews, trustworthy headers, measurable conversion points, and repeatable page templates for art, music, learning, print, games, and community.

## Impact Ranked Findings

1. Front-door clarity: the site has many strong doors, but first-time visitors need an even faster route by audience: schools, art buyers, music listeners, collaborators, teachers, and curious explorers.
2. Asset weight: the archive is visually rich, with several individual files above 3 MB and ZIP packs above 20 MB. The platform needs derivative thumbnails, WebP/AVIF variants, and explicit download expectations.
3. SEO coverage: the primary pages have titles and descriptions, but some app, document, and printable pages were missing descriptions.
4. Offline/PWA coverage: the service worker existed, but some current priority pages and completed pack pages were absent from the app shell.
5. Broken media paths: gallery video entries pointed to a non-existent `10_video/` folder while the MP4s live at the site root.
6. Accessibility outline: two interactive game pages had no H1. They now get screen-reader-only H1s without changing the visual UI.
7. Word cube control layering: browser QA showed the 3D cube could overlap the footer controls, making visible buttons miss clicks. The visual cube now lets pointer events pass through and the control bar sits above the scene.
8. Security headers: baseline headers existed. The next trust step is CSP, HSTS, and deployment-hardening checks.
9. Documentation: the repo needed a current strategy artifact that connects technical work to product, revenue, community, and brand decisions.

## Priority Roadmap

1. Build the "choose your path" system into the main homepage experience.
2. Create image derivatives: thumb, preview, full, and print/source for every artwork.
3. Add a data-driven page template for collection pages, pack pages, and product/store pages.
4. Add privacy-first analytics events for route views, pack opens, print actions, store enquiries, game starts, and outbound project clicks.
5. Add a "BLKCK2 Studio OS" content model: projects, assets, packs, events, offers, audiences, and proof items.

## Quick Wins Under 1 Day

- Add missing meta descriptions to app, document, and printable pages.
- Keep PWA cache current with store, packs, and completed one-sheets.
- Fix gallery video paths.
- Add H1s to compact interactive pages.
- Fix word-cube pointer layering so visible controls are actually clickable.
- Add live status feedback to the word cube for keyboard and screen-reader users.
- Add CSP/HSTS security headers.
- Add `decoding="async"` to generated gallery images.
- Add a visible audit and roadmap file in `docs/`.

## Medium Wins Under 1 Week

- Generate optimized thumbnails for all gallery/store images.
- Add a static build script that validates links, image paths, meta descriptions, H1 count, sitemap coverage, and service worker shell coverage.
- Create a reusable page shell for packs/downloads so SEO and navigation stay consistent.
- Add a "daily relic" or "today's portal" feature on the homepage for retention.
- Add a share-card builder for posters, songs, games, and printable packs.

## Major Upgrades Under 1 Month

- Convert hand-authored static pages into a small static-site generator while preserving the current aesthetic.
- Add a searchable archive for artworks, music, printables, games, and education resources.
- Add teacher/school pilot pages with evidence, privacy, scope, downloadable trials, and inquiry forms.
- Add a revenue stack: digital downloads, commissioned prints, school workshops, packs, memberships, and licensing.
- Add a community loop: challenges, featured remixes, classroom gallery submissions, and monthly drops.

## Technical Refactors

- Centralize metadata, navigation, social cards, footer links, and audience paths.
- Split large inline pages into page data plus shared CSS components.
- Create asset manifests with dimensions, size, alt text, license/use notes, and derived files.
- Add automated smoke tests for critical pages and assets.
- Keep videos network-only and use poster frames instead of loading MP4s for previews.

## UX Improvements

- Give every major page one memorable interaction: cube, oracle, print ritual, gallery room reveal, QR portal preview, or sound-backed music moment.
- Make the homepage answer "who are you?" and "what should I do?" within five seconds.
- Add "for schools", "for music", "for art buyers", "for collaborators", and "just explore" paths.
- Turn proof items into a timeline or constellation rather than a flat archive.

## SEO Improvements

- Add canonical, description, OG image, and Twitter card to every indexable page.
- Add `CollectionPage`, `CreativeWork`, `Product`, `EducationalResource`, and `MusicAlbum` schema where relevant.
- Add internal links from each pack to its parent project and from each project to the pack/store/proof path.
- Create landing pages around search intent: "free printable classroom tools", "Frankston artist", "Black Wing Crew", "Meta-Pet learning companion", and "Auralia art prints".

## Accessibility Improvements

- Ensure exactly one H1 per page.
- Keep keyboard navigation and focus traps tested on games and modals.
- Respect reduced motion on all animated pages.
- Add text alternatives for generated imagery and QR destinations.
- Test contrast after each visual-language revision.

## Performance Improvements

- Generate thumbnails and responsive image `srcset`s.
- Convert large PNG previews to WebP/AVIF where appropriate.
- Keep full-res print files behind explicit download clicks.
- Preload only the true hero image/video for the current page.
- Add link and asset validation before deployment.

## Security Improvements

- Maintain CSP and HSTS headers.
- Avoid third-party scripts unless they are essential and documented.
- Keep analytics privacy-first and cookieless.
- Do not store student data on BLKCK2.
- Add a secrets/deployment checklist if forms, payments, or memberships are introduced.

## Revenue Opportunities

- Digital wallpaper and print downloads.
- A3 physical print requests.
- School printable packs and workshops.
- Teacher resource bundles.
- Music/visual licensing.
- Commissioned symbols, posters, and creative identity packs.
- Supporter membership with monthly artefacts.

## Community Growth Strategy

- Monthly printable drop.
- Weekly "scan the omen" QR poster.
- Teacher challenge: one classroom pattern exercise.
- YouTube short linked to a matching poster and landing page.
- Public gallery of safe community remixes or coloured pages.

## Experimental Feature Ideas

- Moss 60 daily glyph.
- Auralia oracle card generator.
- QR poster lab.
- Classroom-safe Meta-Pet creator.
- Black Wing Crew remix board.
- Print pack builder.
- "The archive speaks" guided tour with sound and motion.

## Risk Assessment

- Asset weight can make wonder feel slow.
- Too many doors can make the platform feel confusing to new visitors.
- Cultural/language research branches need careful consent and clear "research in progress" framing.
- Inline-heavy static pages make CSP and reuse harder.
- Revenue features must not compromise child-safety or trust.

## Final Implementation Checklist

- Validate all links and referenced assets.
- Keep all core pages in sitemap and service worker where appropriate.
- Add missing metadata before publishing new pages.
- Optimize previews before adding large images to galleries.
- Run site-health after deploy.
- Record meaningful commit messages for each scope:
  - `fix: repair gallery video asset paths`
  - `feat: improve PWA shell coverage for current BLKCK2 pages`
  - `chore: add BLKCK2 audit and product roadmap`
  - `sec: tighten Netlify security headers`
  - `a11y: add headings to interactive cube apps`
