---
version: "superdesign-alpha"
name: "Bronze Estate Editorial"
description: "Light, gallery-neutral real-estate directory system on a near-white field, with a single full-bleed dusk-photography hero and a rationed bronze-gold accent for CTAs, prices, and pins."
colors:
  background: "#FAFAFA"
  surface: "#FFFFFF"
  surface-hero: "#000000"
  text-primary: "#424242"
  text-secondary: "#575757"
  border: "#DDDDDD"
  accent: "#6A511B"
typography:
  display-lg:
    fontFamily: "-apple-system"
    fontSize: "40px"
    fontWeight: 700
  headline-md:
    fontFamily: "-apple-system"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: "0.9"
  body-md:
    fontFamily: "-apple-system"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: "1.4"
  label-md:
    fontFamily: "-apple-system"
    fontSize: "16px"
    fontWeight: 400
  icon-accent:
    fontFamily: "Font Awesome 6 Pro"
    fontWeight: 400
spacing:
  base: "4px"
  gap: "25px"
  section-padding: "80px"
  section-gap: "40px"
rounded:
  control: "6px"
  card: "17px"
  pill: "50px"
  circle: "50%"
components:
  button-hero-search:
    background: "#6A511B"
    text-color: "#FFFFFF"
    radius: "11px"
    height: "64px"
    padding: "0px 19.2px"
    hover: "boxShadow rgb(106, 81, 27) 0px 0px 0px 1px, opacity 0.8"
  button-consent-primary:
    background: "#6A511B"
    text-color: "#FFFFFF"
    radius: "30px"
    height: "40px"
    padding: "0px 19.2px"
    hover: "opacity 0.8"
  button-nav-link:
    background: "transparent"
    text-color: "#424242"
    radius: "0px"
    height: "40px"
    padding: "0px"
  button-icon-round:
    background: "#F1F1F1"
    text-color: "#575757"
    radius: "50%"
    height: "48px"
    padding: "0px"
    resting-shadow: "rgb(250, 250, 250) 0px 0px 0px 2px"
  card-featured-development:
    background: "transparent"
    radius: "17px"
    padding: "24px"
    anatomy: "media-top-bleed + overlay caption + body-text"
  card-listing:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    anatomy: "media-top-bleed + contains-2-tiles (price/CTA row)"
  card-map-pin:
    background: "#FFFFFF"
    radius: "17px"
    shadow: "rgb(221, 221, 221) 0px 0px 1px 1px"
---
# Bronze Estate Editorial
Source: https://www.domuriimoveis.com.br

## Overview
This is a light-mode-default, editorial real-estate directory system: a near-white (`#FAFAFA`) canvas of card grids and structured listing rows, interrupted by exactly one full-bleed cinematic photograph at the top. The aesthetic sits between Swiss-grid restraint (thin hairline borders, left-aligned labels, dense tabular metadata) and boutique-hospitality warmth, carried by a single bronze-gold accent (`#6A511B`) applied only to CTAs, price labels, and the map pin — never to backgrounds or body text. Structure, not color, does the work here.

## Composition
The first screen is dominated by a full-bleed dusk photograph of a glass-walled terrace overlooking a city skyline, darkened toward the left by a black-to-transparent vignette that hosts a white display headline and a floating light-gray search card. Below the fold the page snaps to a flat, framed rhythm: an eyebrow-labeled heading introduces an asymmetric 4-up development grid, then a labeled listing section with a uniform 4-up property grid and a "view all" outline control, then a full-bleed gray map band with a floating white pin card, then a flat institutional footer. The deliberate choice is a single hero photograph carrying all imagery drama while every subsequent section stays flat and card-driven — rejecting a repeating-gradient or bento-tile marketing style in favor of a catalog/directory density that reads as inventory, not brand spectacle.

## Colors
`#FAFAFA` (~51% declared area, matching the dominant light pixel field) is the page background/surface — every non-hero section sits on it uninterrupted. `#000000` (~40% declared, ~10% rendered) is confined to the hero photograph's dark vignette and card-caption scrims; it never spreads to page chrome. `#424242` and `#575757` are the two text inks — primary body/heading copy and secondary metadata respectively. `#DDDDDD` is the sole border/hairline color, used at 1px around outline buttons and card seams. `#6A511B` (bronze-gold) is the entire accent budget: it fires on the hero search button, the cookie-consent CTA, section eyebrow labels, price figures, and the map pin icon — never on large fills or backgrounds. White (`#FFFFFF`) is reserved for text-on-dark (hero headline, card captions) and for elevated surfaces (search bar, map-pin card, footer icon buttons).

## Typography
A single system sans (-apple-system) runs the entire hierarchy with weight and size doing the differentiation, not family switching. Display headline: 40px/700, used once in the hero. A secondary headline register at 24px/500 with a tight 0.9 line-height handles section titles. Body copy sits at 19px/500 for hero subheads and 16px/400 for listing labels and metadata, all in `#424242` with secondary values (addresses, counts) stepping down to `#575757`. Font Awesome 6 Pro/Brands supply every glyph accent — phone, search, heart, location-pin, and social icons — acting as the system's only non-text visual accent family.

## Layout
Content is capped at a 1356px max-width, centered, with 80px section padding and 40px inter-section gaps. Card grids run on a 25px gap. The featured-development grid is a 3-column, 4-item asymmetric composition with rows measuring roughly [32/66 | 32/32] as a share of container width — i.e., one narrow card beside one wide card in the top row, then two even cards below: a deliberate bento-style unevenness rather than uniform tiling. The listings grid beneath it is strictly uniform: 4 equal columns, 4 items per row at even 24/24/24/24 widths, repeating as a card grid/list-layout hybrid (image + tabular spec row + price row + code/favorite row). Cards themselves carry 17px radii in the featured grid and 0px radii (flush, dividing-hairline style) in the listings grid — two distinct corner treatments in the same page, both intentional.

## Components
- **Navbar**: edge-to-edge, full-viewport-width bar, `#FAFAFA`-toned, fixed height ~72px, 4 text nav items (transparent fill, `#424242`, 0px radius, 40px height) plus one circular icon-only utility button (`#F1F1F1` fill, 48px, 50% radius, resting shadow `rgb(250, 250, 250) 0px 0px 0px 2px`) at the far right carrying a phone glyph. Logo is a bronze-and-black monogram crest with a serif wordmark beneath, left-aligned.
- **Hero primary button**: the filled search-trigger sits inside the floating search card, `#6A511B` fill, white text/icon, 11.3px radius (slightly-rounded), 64px height, `0px 19.2px` padding; hover adds a 1px bronze ring plus 0.8 opacity. This search-submit icon button is the single most emphasized control on the first screen.
- **Cookie-consent CTA**: a second bronze-filled button, 30px radius (rounded, near-pill), 40px height, same padding and hover-opacity behavior, anchored inside the bottom-sheet consent bar.
- **Hero search bar**: one wide light-gray glass-toned bar (~semi-opaque white/gray) holding three labeled fields (Pretensão, Tipo de imóvel, Localização) separated by hairline dividers, terminating in the bronze icon button; sits centered over the hero photo, backed by light blur.
- **Featured-development cards** (×4, in the 3-col asymmetric grid): transparent frame, 17px radius, 24px padding, full-bleed photo filling most of the card with a dark-scrim caption block at the bottom edge carrying a bold price line, a bold title, and a thin metadata row (rooms/bathrooms/parking) in white.
- **Listing cards** (×4 per row, repeating): flush 0px-radius frame, top image carousel (dot pagination visible) covering the top ~55% of the card, then a stacked text body: small category label, secondary address line, tabular icon row (area/rooms/bathrooms/parking), a bold bronze price line, and a bottom divider row pairing a muted property-code label with a circular heart/favorite icon button.
- **Map band**: full-bleed static map graphic filling a mid-page section, with one floating white pin-card (17px radius, shadow `rgb(221, 221, 221) 0px 0px 1px 1px`) centered on top, containing a bronze circular pin icon, bold location title, address body text, a hairline divider, and a WhatsApp-icon phone line.
- **Footer**: flush `#FAFAFA` band, logo crest top-left, two circular social icon buttons top-right, then a 3-column link list (14 links total) under thin section headers, a hairline divider, then a legal/copyright line and a partner wordmark bottom-right.

## Graphics & Effects
The only large image treatment is the hero photograph itself — a dusk architectural interior/skyline shot spanning the full first viewport, darkened on its left half by a black gradient vignette for text legibility (a scrim, not a page-wide color gradient). Card captions on the featured-development tiles use a smaller bottom-edge scrim (`rgba(0,0,0,.2)`-family) for the same legibility purpose, covering roughly the bottom third of each tile only. Elevation is expressed through soft, tight shadows rather than heavy drop shadows: `rgb(221, 221, 221) 0px 0px 1px 1px` outlines the map-pin card, `rgb(250, 250, 250) 0px 0px 0px 2px` rings the circular icon buttons, and `rgba(0, 0, 0, 0.2) 0px -20px 10px 20px` lifts carousel edges. Two blur strengths (`blur(6px)`, `blur(2px)`) soften glass-like surfaces such as the floating search bar. No noise, grain, or decorative pattern layer is present — the system stays photographic-plus-flat.

## Motion
Transitions are short and utilitarian: `all 0.2s ease-out` and `all 0.2s ease-in-out` drive hover/opacity state changes on buttons and cards; `all 0.3s ease-out` and `all 0.3s ease` cover slightly larger UI shifts like dropdowns or carousel transforms. Named keyframes (`fadeIn`, `fadeInFromTop`, `popUpAnimation`, `selectFadeIn`) govern entrance behavior for dropdown panels, selects, and consent/modal surfaces — content fades and drops in from a slight upward offset rather than sliding laterally or scaling dramatically. Motion is functional and quick, never decorative or scroll-linked.

## Guardrails
- Never spread the hero's black vignette or any dark tone across full sections below the fold — the page body stays on `#FAFAFA`.
- Keep the bronze `#6A511B` restricted to CTAs, prices, icons, and labels; never use it as a card or section background fill.
- Preserve the two distinct card radii — 17px for featured/development cards, 0px flush for listing cards — do not unify them.
- Do not turn the edge-to-edge navbar into an inset or centered capsule; it spans full viewport width at ~72px height.
- Keep listing-grid rows strictly uniform (4 equal columns); keep the featured-development grid asymmetric per its measured row map, not evened out.
- Do not replace the single full-bleed photographic hero with an abstract gradient or mesh background.