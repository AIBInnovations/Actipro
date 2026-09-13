# EATnaked — React rebuild

A React + Vite rebuild of the EATnaked homepage, reproducing the reference
site's markup and scroll choreography, rethemed from the reference's black
background to a **white** one.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## How this was built

The brief supplied `index.html` + `styles.css` and noted that the behaviour layer
(`/js/pages/homepage.js`) was missing from the archive. It turned out to still be
served by the reference site, so the animation layer here is a **port of the
original source** rather than a reconstruction from the recording — every
timeline position, easing, threshold and frame index matches. The same applies to
the media: the canvas frame sequences, videos and portrait background images were
retrieved from their referenced paths and are checked in under `public/assets/`.

`src/styles/styles.css` is the reference stylesheet. Two kinds of change were
made to it: the Satoshi `@font-face` now points at the local copy in
`public/assets/fonts/`, and every hardcoded colour was replaced with a semantic
token (see **Theming** below). Layout, spacing, typography and animation values
are untouched.

## Architecture

Sections are plain React components whose markup mirrors the reference DOM, so
the stylesheet applies with no changes. **Nothing re-renders on scroll** — one
mount effect in `App.jsx` boots the imperative layer, and GSAP writes to the DOM
directly from there.

```
src/
  App.jsx                    page composition + the single mount effect
  components/                markup only, one file per section
  animations/
    gsapSetup.js             plugin registration, the two CustomEases
    homepage.js              bootstrap (port of /js/pages/homepage.js)
    lenis.js                 smooth scroll, wired to ScrollTrigger + gsap.ticker
    preloader.js             the apple-fill loader
    homepageAnimations.js    per-section scroll triggers
    imageSequenceLoader.js   batched frame decode with per-orientation caches
    sequenceScrollHandler.js canvas + frame cursor + the scrubbed timeline
    sequenceAnimations.js    partner / bag choreography on those timelines
    flickCards.js            desktop persona deck (Draggable)
    customSlider.js          ingredient bowl
    accordion.js             desktop goals accordion
    globalSwiper.js          portrait carousels
    customVimeoPlayer.js     Vimeo API + the local controls
    cursorFollower.js        the "Drag ⟷" pointer label
    navbar.js, activeLinks.js
  styles/styles.css          reference stylesheet
public/assets/
  img/                       48 images extracted from the archive's data URIs
  secuence-partners/         201 frames × landscape + portrait  (AVIF)
  secuence-bag/              40 frames × landscape + portrait   (WebP)
  videos/, images/, fonts/
```

### Page structure

The alternation between `overflow-container` and the sticky wrappers is
structural, not decorative. Partners and Quality need a tall scroll range around
a `position: sticky` child, which an `overflow: hidden` ancestor would break — so
they sit outside the containers.

| Section  | Scroll range | Mechanism                                        |
| -------- | ------------ | ------------------------------------------------ |
| Hero     | 100vh        | pinned, `pinSpacing: false`, auto-advances at 8% |
| Partners | 400vh        | sticky 100vh scene, 201-frame canvas sequence    |
| Quality  | 200vh        | sticky 100vh scene, 40-frame canvas sequence     |

### Theming

`src/styles/theme.css` declares ~25 semantic tokens (`--fg`, `--surface`,
`--border`, `--hairline`, …) **twice**: light values on `:root`, and the
reference's original dark values under a scoped selector list. Every rule in
`styles.css` reads the tokens, so it is correct in both scopes without knowing
which one it is in — and flipping the whole site back to the original dark theme
is a matter of putting that class on the root element.

Six sections keep the dark scope, because their identity _is_ full-bleed dark
media — the hero showreel, the delivery city video, the partners frame sequence,
the bag sequence, the flipped showreel, and the loader. There is no light
version of that footage, and dark text cannot sit on it. Text over a photo or
over the orange fill is scoped the same way (persona cards, the active goals
card, the Vimeo chrome).

Two consequences worth knowing:

- **The navbar and the section markers are fixed overlays** that cross both
  kinds of section, so `animations/adaptiveTheme.js` toggles `is--on-dark` on
  them as each dark section passes under their line. It counts overlapping
  sections rather than tracking a boolean, so the hand-offs can't strand the
  wrong colour. `markersAnimation` reads its colours from the custom properties
  at tween time instead of hardcoding them.
- **Brand orange is a fill colour, not a text colour, on white.** `#f4783e` is
  2.76:1 against white — fine on black, a readability failure on white, and the
  reference uses it as text in five places. `--orange-text` (#cf4a0c, 4.53:1)
  and `--orange-display` (#f36726, 3.10:1, for 130px display type) keep the
  exact brand hue and saturation and only darken the lightness. Fills, glows and
  icons still use the untouched `--orange`.

Inline SVG follows the same system: interface glyphs use `currentColor` so they
inherit `--fg`, while artwork keeps its literal colours. Three categories were
deliberately left as literals — mask and clipPath contents (those are alpha
channels, not paint), partner logos, and glyphs that sit on an orange fill,
where `currentColor` would resolve to near-black.

Measured on the light scope: `--fg` 18.2:1, `--fg-muted` 7.3:1, `--fg-subtle`
5.8:1, and the four surface levels form an evenly spaced ladder rather than
collapsing into each other.

### Canvas sequences

`SequenceScrollHandler` owns a canvas and a frame cursor. `setTimeline()` builds
one scrubbed 10-unit timeline per sequence; `updateFrame(index, duration)`
returns tween vars that walk the cursor, and section choreography is added to the
same timeline at matching positions — which is why the partner cards swap on
exact frames. Frames composite to an offscreen buffer at `devicePixelRatio`
(capped at 2) with cover geometry, then blit, so no repaint shows a partial
frame. Landscape and portrait have separate frame sets and separate caches.

### Responsive

The reference's fluid scale is preserved: `html { font-size: clamp(...) }` drives
a rem-based layout, with separate roots for mobile portrait (430px reference) and
tablet portrait (550px). Portrait is a different interface, not a squeezed
desktop — the Goals accordion and the persona flick deck are replaced by Swiper
carousels, section markers and the drag cursor are hidden, and the bowl's
ingredient tags move above and below the dish. Verified free of horizontal
overflow at 430×932, 390×844, 768×1024, 1024×768, 1440×900, 1920×1080 and
2560×1440.

### Teardown

`initHomepage()` runs inside a `gsap.context()` and returns a teardown that kills
every instance and then calls `ctx.revert()`. The revert matters: most entrance
animations are `gsap.from()`, which writes the start state to the element
immediately. Killing those tweens alone would leave the page at `opacity: 0`, and
a second init would read that as the _end_ state and animate 0 → 0. Reverting
restores the authored DOM, so React StrictMode's double-mount and HMR both replay
cleanly.

## Deviations from the reference

- **Satoshi is self-hosted** rather than hot-linked (see above).
- **Typekit** (`proxima-nova-condensed`, `ff-market-web`) is still imported by the
  stylesheet but the kit is domain-locked, so it 401s off the reference domain and
  those families fall back. Satoshi carries the homepage; swap in your own kit ID
  at the top of `styles.css` if you need them.
- **The footer email** was `href="connect@eatnaked.co"` with no scheme, so the
  link did nothing. Changed to `mailto:`.
- **The copyright year** came from `document.write(new Date().getFullYear())`;
  it is now rendered in JSX.
- **Analytics** (GA, Rewardful, Cloudflare beacon) were dropped — add your own.
- **`window.__lenis`** is exposed in dev builds only, as a console handle.
- **`.global-grid`** — a fixed near-black radial vignette — is off in the light
  scope, gated behind `--grid-display`. It reads as depth on `#0b0b0b` and as a
  grey smudge on `#ffffff`, and the assets contain no light equivalent.
- **TextPlugin and SplitText** were registered by the reference's GSAP config but
  are unused on this page, so they are not bundled.

## Third-party notes

- The Vimeo showreel is the reference's video id (`1129496694`) and loads from
  Vimeo at runtime.
- The idle section-marker label inherits the reference's own `opacity: .5`,
  which lands around 2.2:1 in either theme. That is pre-existing rather than
  caused by the conversion, but it is the weakest text on the page.
- Links point at the reference site's routes (`/our-menu`, `/bowl-builder/meals`,
  …). This project is the homepage only, so they 404 until those routes exist.
