# Actipro — landing page

The landing page for **Actipro**, a lifestyle cooking oil from Madhuri Refiners
Pvt. Ltd., Indore (M.P.) — Refined Sunflower (Advanced Dewaxing Technology),
Refined Corn (High Absorbent Refining) and Refined Rice Bran (Smart Fry
Technology).

React + Vite, with an imperative GSAP animation layer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

> **Read [Outstanding work](#outstanding-work) before shipping.** Several media
> assets still depict the previous brand this codebase was built for, and they
> cannot be fixed in code.

## Where this came from

The page is a port of an existing scroll-choreographed homepage build: every
timeline position, easing, threshold and frame index matches its source, and
`src/styles/styles.css` is that build's stylesheet with two kinds of change —
`@font-face` points at the local Satoshi copy in `public/assets/fonts/`, and
every hardcoded colour was replaced with a semantic token (see **Theming**).
Layout, spacing, typography and animation values are untouched.

All **copy** is Actipro's, written against the brand's website plan. The brand
marks are Actipro's. The **photography, video and canvas frame sequences are
not** — see Outstanding work.

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
    homepage.js              bootstrap
    lenis.js                 smooth scroll, wired to ScrollTrigger + gsap.ticker
    preloader.js             the logo-fill loader
    adaptiveTheme.js         is--on-dark hand-off for the fixed overlays
    homepageAnimations.js    per-section scroll triggers
    flickCards.js            desktop use-case deck (Draggable)
    customSlider.js          the benefits bowl
    accordion.js             desktop process accordion
    globalSwiper.js          portrait carousels
    customVimeoPlayer.js     Vimeo API + the local controls
    cursorFollower.js        the "Drag ⟷" pointer label
    navbar.js, activeLinks.js
  styles/styles.css          ported stylesheet
  styles/theme.css           semantic tokens
public/
  logo.png                   brand mark — navbar, range cards, preloader fill
  logo-outline.png           the logo's keyline layer, used as the preloader's
                             resting state (see Preloader)
  favicon.png                the red "o" and green runner, cropped from the logo
  assets/
    img/                     38 images
    videos/, images/, fonts/
brand/
  actipro-logo-source.png    supplied artwork, 2000×2000; kept out of public/
```

### Page structure

The alternation between `overflow-container` and the sticky wrappers is
structural, not decorative. The range and quality scenes need a tall scroll
range around a `position: sticky` child, which an `overflow: hidden` ancestor
would break — so they sit outside the containers.

| Section | Scroll range | Mechanism                                        |
| ------- | ------------ | ------------------------------------------------ |
| Hero    | 100vh        | pinned, `pinSpacing: false`, auto-advances at 8% |
| Range   | 400vh        | sticky 100vh scene, 201-frame canvas sequence    |
| Quality | 200vh        | sticky 100vh scene, 40-frame canvas sequence     |

### Sections

| Component                | Role                                                   |
| ------------------------ | ------------------------------------------------------ |
| `Hero`                   | Positioning, the three variants, trust strip           |
| `Delivered`              | Batch checking, no argemone oil                        |
| `Goals`                  | The three refining processes, three steps each         |
| `PersonaCards`           | "Find Your Oil" use-case picker                        |
| `BowlSlider`             | "What's actually inside" — benefit tags per variant    |
| `KitchenAction`          | Madhuri Refiners, three decades of manufacturing       |
| `Join`                   | Oil Bot CTA + eight brand-fact cards                   |

The `Join` cards are deliberately **facts, not testimonials** — the brand has no
collected customer quotes, and inventing attributed ones would be fabricating
reviews. Swap them for real testimonials when they exist.

### Hero loop

`actipro-hero-loop.mp4` (landscape) and `-portrait.mp4` are built from the
supplied 8s product animation. Three things were baked into the file rather
than done at runtime:

- **The background was keyed to white.** The source ships a transparency
  checkerboard baked into the pixels (alternating #FDFDFD/#ECECEC), which would
  have read as grey texture on the page. A levels lift to a 0.89 white point
  clips both tones to pure white, including where they showed through the clear
  container, so the product now sits on the page ground with no matte.
- **Motion-interpolated to 120fps first.** The source is 24fps, so a 60fps
  output would either duplicate frames (judder in the slow section) or drop them
  unevenly (judder in the fast ones). `minterpolate=mi_mode=mci:mc_mode=aobmc`
  synthesises intermediate frames, and the final sequence then hits **every
  output frame with a distinct source frame — zero duplicates across the loop.**
- **A speed ramp**, not a flat rate. The remap is built numerically rather than
  as a `setpts` expression, so the slow section has an exact duration: 4× through
  the open and close, easing to 1.5× for a ~2s plateau while the food hangs in
  the air. In dense-frame terms the output advances 8 interpolated frames per
  output frame at the ends and 3 through the middle.
- **Ping-pong**: forward, then the reverse with its duplicate turn frames
  dropped, so plain `loop` runs forward-and-back with no visible seam.

Output is **60fps, 6.4s** per loop.

- **A white gradient over the top of the frame**, baked in. The lid is clipped
  by the *source* file's own top edge — it flies up and out — so wherever the
  product is placed, the lid ends in a razor-straight horizontal line. The
  gradient is opaque to y=450 and clear by y=505 (landscape), which dissolves
  the lid as it rises and feathers the top of the flying food, instead of
  slicing them. The lid stays fully solid while it sits on the container, since
  that is below the gradient.

Content occupies 34%–80% of frame height in landscape and 43%–73% in portrait.

Those numbers are chosen for `object-fit: cover`, which is what makes this
fiddly: the hero video is full-bleed, so **the composition shifts with the
window's aspect ratio.** Below 16:9 the video fits by height and the frame maps
1:1; above it, the video fits by width and the top and bottom are cropped, which
pushes everything *up* the screen. At a 2.2 aspect window the old 89% bottom
landed at 98% — the container was visibly cut off along the bottom edge. The
current placement stays inside the viewport from 1.6 through 2.2, which covers
essentially every real desktop window.

There is **no chroma key any more.** The original hero footage was shot on black
and `heroVideoKey.js` keyed it per frame onto a canvas; this product is on
white on a white page, and a luminance key would have eaten the container's
black lid. The keyer, its canvas and its CSS are gone — recoverable from git if
black-background footage ever comes back.

### Preloader

`.loader-apple` holds two stacked `<image>` layers of the same wordmark:
`logo-outline.png` (the logo's white keyline with the colour drained) as the
resting state, and the full-colour `logo.png` revealed through `#clip-apple`.
`preloader.js` drives that clipPath upward in steps at 20/50/80/100%, so red
and green wash up into the mark as the page loads. Progress used to come from
the partner frame sequence decoding; that sequence is gone, so `autoRun` climbs
to 80% on its own and then waits for `window.load`, with a cap so a slow
third-party asset can never strand the loader on screen.

The `apple` in those names is inherited from the original build's logo shape and
is now just an identifier; the element renders the Actipro wordmark.

### Theming

`src/styles/theme.css` declares ~25 semantic tokens (`--fg`, `--surface`,
`--border`, `--hairline`, …) **twice**: light values on `:root`, and the
original dark values under a scoped selector list. Every rule in `styles.css`
reads the tokens, so it is correct in both scopes without knowing which one it
is in.

Six sections keep the dark scope, because their identity _is_ full-bleed dark
media — the hero showreel, the delivery video, the range frame sequence, the bag
sequence, the flipped showreel, and the loader. There is no light version of
that footage, and dark text cannot sit on it.

Two consequences worth knowing:

- **The navbar and the section markers are fixed overlays** that cross both
  kinds of section, so `animations/adaptiveTheme.js` toggles `is--on-dark` on
  them as each dark section passes under their line. It counts overlapping
  sections rather than tracking a boolean, so the hand-offs can't strand the
  wrong colour.
- **Brand orange is a fill colour, not a text colour, on white.** `#f4783e` is
  2.76:1 against white. `--orange-text` (#cf4a0c, 4.53:1) and `--orange-display`
  (#f36726, 3.10:1, for 130px display type) keep the hue and only darken the
  lightness. Fills, glows and icons still use the untouched `--orange`.

The brand palette from the supplied logo is red `#d9232c` and green `#005932`.
The orange above is the ported design's accent, not an Actipro brand colour —
worth revisiting with the brand owner.

### Responsive

`html { font-size: clamp(...) }` drives a rem-based layout, with separate roots
for mobile portrait (430px reference) and tablet portrait (550px). Portrait is a
different interface, not a squeezed desktop — the process accordion and the
use-case flick deck are replaced by Swiper carousels, section markers and the
drag cursor are hidden, and the bowl's benefit tags move above and below.

### Teardown

`initHomepage()` runs inside a `gsap.context()` and returns a teardown that
kills every instance and then calls `ctx.revert()`. The revert matters: most
entrance animations are `gsap.from()`, which writes the start state to the
element immediately. Killing those tweens alone would leave the page at
`opacity: 0`, and a second init would read that as the _end_ state and animate
0 → 0. Reverting restores the authored DOM, so React StrictMode's double-mount
and HMR both replay cleanly.

## Outstanding work

### Media that still shows the previous brand

Both canvas sequences are gone: the tote-bag scene and the city flythrough were
removed with their sections, which also retired the last third-party logos
(Netflix, UCLA, Equinox) and the last EATnaked-branded object on the page.

What remains is video:

| Asset | Problem |
| --- | --- |
| Vimeo `1129496694` | The previous brand's promo film, on a third party's personal account, with a burned-in watermark and a competing domain on screen. Plays under "Our refinery In Action". **It currently returns 401**, so it does not load at all. Needs replacing with Actipro footage, not just re-pointing. |
| `assets/videos/delivered-*.mp4` | Both orientations render the **previous brand's wordmark**. |

Three abstract backdrops from the original build are still in place and are
brand-neutral: `a005` (a gradient), `a047` (the footer) and `a048` (the page
vignette).

The brand's source libraries are kept out of `public/` under `brand/`, so the
originals stay in the repo without shipping. The web copies are resized and
re-encoded: WebP for anything large, PNG for the three pill icons.

### Content to confirm with the brand owner

- **Additive name.** The page declares `DMPS, INS 900a`, taken from the brand's
  own plan document. INS 900a is **polydimethylsiloxane**, printed on Indian
  packs as "Dimethyl Polysiloxane". "DMPS" is a different substance. Check the
  pack and correct `Join.jsx`.
- **FSSAI licence number** `11424999000132` does not decompose cleanly under the
  FSSAI numbering scheme. Verify against the licence.
- ~~**Vitamin A & D**~~ — resolved. The supplied pack shots carry the FSSAI
  `+F` mark and read "Fortified with Vitamin A & D" on both the Corn and Rice
  Bran pouches, so the claim on that chip is the pack's own.
- **The percentage rings** in the process accordion (`Goals.jsx`) render 25% /
  25% / 78% as baked SVG outlines, inherited from the original build's progress
  indicator. They read as unsourced product claims and have no referent. Either
  remove the `accordion-css__top-loader` element or give the numbers a meaning.
- **Business hours** are stated as Mon–Sat 9am–7pm with the Oil Bot to 11pm.
- **`BowlSlider` covers two of the three variants** — Sunflower has no slide.
  Adding one is markup-only: a title, a `bowl-reference__image`, and one left
  and one right `data-custom-slider-indicator` group.

### Wiring left to do

- **Social links** are `href="#"` in the footer and the overlay menu — real
  accounts needed. The TikTok entry was relabelled YouTube, since TikTok has
  been unavailable in India since 2020; confirm which channels exist.
- **Routes.** Every nav link points at a route this single-page build does not
  serve: `/about-us`, `/products`, `/the-process`, `/find-your-oil`, `/media`,
  `/gifting`, `/faqs`, `/oil-bot`, `/contact-us`, `/terms`, `/privacy-policy`.
  Terms and Privacy Policy being unreachable is the sharpest of these.
- **"Explore on Amazon"** CTAs from the plan are not wired — no listing URLs
  were supplied, so the buttons currently say "Explore Our Range" and point at
  `/products`.
- **`og:image`** needs an absolute URL once a domain exists; `twitter:card` is
  `summary` until then.
- **Accessibility.** The navbar menu toggle and every Vimeo player control is a
  bare `<div>` with a click listener — no role, tab stop or accessible name, so
  neither is operable by keyboard. Inherited from the original build.

## Other notes

- **Satoshi is self-hosted** from `public/assets/fonts/`.
- The original build imported an Adobe Typekit kit belonging to the previous
  brand. Those families were never used by any rule, and the import has been
  removed.
- **Analytics** (GA, Rewardful, Cloudflare beacon) were dropped — add your own.
- **`window.__lenis`** is exposed in dev builds only, as a console handle.
- **`.global-grid`** — a fixed near-black radial vignette — is off in the light
  scope, gated behind `--grid-display`.
- The idle section-marker label inherits the original `opacity: .5`, which lands
  around 2.2:1. It is the weakest text on the page.
