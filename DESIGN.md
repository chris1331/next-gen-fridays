---
name: NextGen Kinetic Dark
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e7bcbd'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ae8788'
  outline-variant: '#5d3f40'
  surface-tint: '#ffb3b5'
  primary: '#ffb3b5'
  on-primary: '#680019'
  primary-container: '#ec0044'
  on-primary-container: '#ffffff'
  inverse-primary: '#be0035'
  secondary: '#ffb4a7'
  on-secondary: '#670500'
  secondary-container: '#931304'
  on-secondary-container: '#ff9f8e'
  tertiary: '#c8c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#777676'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920026'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a7'
  on-secondary-fixed: '#400200'
  on-secondary-fixed-variant: '#8f0f03'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  neon-crimson: '#EC0044'
  kinetic-vermilion: '#EA533C'
  charcoal-elevated: '#343434'
  obsidian-base: '#0C0C0C'
  pure-white: '#FFFFFF'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Montserrat
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Montserrat
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels high-octane energy, youthful technological momentum, and contemporary nightlife culture. Positioned at the intersection of dynamic events, creator communities, and digital culture, the aesthetic is assertive, fast-moving, and unapologetic. 

The target audience comprises forward-thinking digital natives, event-goers, and creators seeking curated, high-energy experiences. The UI must evoke excitement, exclusivity, clarity, and visceral drive.

To embody this, the design style is **High-Contrast Dark Kinetic**:
- Deep, obsidian ground (`#0C0C0C`) provides an immersive, cinematic backdrop.
- Blazing neon scarlet (`#EC0044`) and sunset vermilion (`#EA533C`) serve as primary energetic conduits, deployed in focal points, high-impact typography, and interactive targets.
- Clean structural lines and heavy geometric uppercase type deliver razor-sharp visual cadence without unnecessary skeuomorphic ornamentation.

## Colors

The palette relies on pure, deliberate contrast against an absolute dark canvas:

- **Primary (`#EC0044`)**: Neon Crimson drives immediate action. Reserved for primary calls to action, active navigation indicators, key highlights, and bold headline emphasis.
- **Secondary (`#EA533C`)**: Kinetic Vermilion complements crimson with fiery warmth. Used for gradient accents, secondary tags, alert triggers, and hover state transitions.
- **Tertiary (`#343434`)**: Charcoal Surface is strictly structural. Provides card containers, dividers, muted borders, input surfaces, and chip states against the canvas.
- **Neutral (`#0C0C0C`)**: Obsidian Base grounds the dark mode presentation, preventing high eye-fatigue while maximizing chromatic vibrancy.
- **Pure White (`#FFFFFF`)**: Strictly utilized for high-contrast typography, crisp iconography, and active light states.

### Contrast & Hierarchy Rules
- High-level headings and critical labels must render in `#FFFFFF` against `#0C0C0C` or `#343434` to exceed WCAG AAA accessibility standards.
- Secondary body copy and metadata should sit at 70% to 80% opacity white over `#0C0C0C` to control informational dominance.
- Text placed over `#EC0044` or `#EA533C` must always be `#FFFFFF` in bold weights (`fontWeight: 700`).

## Typography

The typographic signature is rooted entirely in **Montserrat**, emphasizing geometric rhythm, architectural lines, and bold readability across scales.

- **Display & Large Headlines**: Leverage heavy weights (`700` and `800`) paired with tight negative letter-spacing for athletic, high-impact delivery. Key promotional anchors can be formatted in full uppercase with tightened line heights.
- **Body Text**: Relies on `400` weight with ample line height (`1.5` to `1.6`) to maintain effortless legibility against dark backgrounds.
- **Labels & Microcopy**: Designed in uppercase with deliberate tracking (`0.05em` to `0.06em`) using medium and bold weights, echoing technical HUD and festival production vernacular.

## Layout & Spacing

The layout is built upon a responsive **12-column fluid grid** that simplifies to 8 columns on tablet devices and 4 columns on mobile viewports.

### Grid & Breakpoints
- **Desktop (≥ 1024px)**: 12-column structure with `margin: 2rem` and `gutter: 1.5rem`. Max container width capped at 1280px for standard layouts, expanding to 100% fluid bleed for dynamic media sections.
- **Tablet (768px – 1023px)**: 8-column layout with `margin: 1.5rem` and `gutter: 1.25rem`.
- **Mobile (≤ 767px)**: 4-column layout with `margin: 1.25rem` and `gutter: 1rem`.

### Spacing Rhythm
Vertical cadence relies on exponential increments of `0.5rem` (8px base). Sectional transitions utilize generous spacing (`space-xl` or larger multipliers) to build tension and focus, while compact atomic components preserve tight, cohesive footprints.

## Elevation & Depth

Rather than conventional drop shadows—which disappear into pitch-black backgrounds—this design system uses **Tonal Layers and Chromatic Bloom**:

- **Ground (Level 0)**: `#0C0C0C`. Raw backdrop canvas.
- **Surface Elevation (Level 1)**: `#161616` with a crisp 1px border of `#343434`. Used for resting cards, input fields, and panels.
- **Interactive Hover (Level 2)**: Transition surface to `#1E1E1E` or inject a subtle, diffuse radial glow using `#EC0044` at 15% opacity with a 32px blur radius.
- **Floating Overlays & Menus (Level 3)**: `#0C0C0C` rendered at 85% opacity with an intense backdrop blur (`backdrop-filter: blur(16px)`) and a subtle top border highlight of `rgba(255, 255, 255, 0.1)`.

## Shapes

The design system adopts a **Soft (Level 1)** shape language.

- Standard UI components (cards, text fields, panels, chips) utilize a tight corner radius of `0.25rem` (4px).
- Larger containers and dialog modals step up to `0.5rem` (8px).
- This restrained curvature maintains an architectural, precision-engineered presence that mirrors electronic hardware and modern streetwear design. Full pills are reserved solely for live event badges or compact filter pills where contrast against rectilinear card structures is required.

## Components

### Buttons
- **Primary**: Solid background using `#EC0044` or an energetic linear gradient from `#EC0044` to `#EA533C` (45deg). Text rendered in `#FFFFFF`, `fontWeight: 700`, uppercase, with letter-spacing `0.05em`. Padding: `0.75rem 1.75rem`. Border radius: `0.25rem`. Hover state introduces a localized outer glow (`box-shadow: 0 0 20px rgba(236, 0, 68, 0.45)`).
- **Secondary (Ghost)**: Transparent background with a 1.5px border of `#343434`. White text. On hover, the border transitions to `#FFFFFF` and the background shifts to `rgba(255, 255, 255, 0.05)`.
- **Destructive / Accent**: Solid `#EA533C` with immediate visual focus.

### Cards
- Constructed with `#141414` background and a 1px border in `#343434`.
- Padding: `1.5rem`. Corner radius: `0.25rem`.
- Interactive cards elevate on hover with a 1px border transition to `rgba(236, 0, 68, 0.5)` and a vertical translation of `-2px`.

### Chips & Badges
- **Status/Live Badge**: Background `rgba(236, 0, 68, 0.15)`, text `#EC0044`, 1px border `rgba(236, 0, 68, 0.3)`. Text set in `label-md` uppercase.
- **Filter Chips**: Resting state in `#1E1E1E` with `#343434` border and muted white copy. Active state fills with `#EC0044` and pure white text.

### Inputs & Form Fields
- Field container set to `#121212` with a 1px border of `#343434`.
- Height: `48px`. Padding: `0 1rem`. Typography: `body-md` in `#FFFFFF`.
- Placeholder text: `rgba(255, 255, 255, 0.4)`.
- Focus state: Border instantly shifts to `#EC0044` with a crisp `0 0 0 1px #EC0044` ring.

### Checkboxes & Radios
- Square (checkbox) or circular (radio) housing in `#161616` framed by `#343434`.
- Checked state: Filled `#EC0044` displaying a crisp white vector glyph checkmark or inner core.

### Lists & Navigation Rails
- Clean horizontal borders (`#343434`) separating list entries.
- Active navigation items marked with a vertical 3px accent bar in `#EC0044` anchored to the left or bottom edge.
