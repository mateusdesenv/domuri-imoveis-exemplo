# Extractable Components

## DomuriHeader

- Source: `index.html`
- Category: layout
- Description: Transparent navigation layered over the hero with Domuri wordmark, section links, and CTA.
- Extractable props: `homeHref`, `propertiesHref`, `contactHref`, `ctaLabel`
- Hardcoded: brand typography, arrow SVG, layout classes, colors, responsive behavior

## DomuriFooter

- Source: `index.html`
- Category: layout
- Description: Dark footer with Domuri brand, CRECI metadata, and navigation links.
- Extractable props: `propertyHref`, `contactHref`
- Hardcoded: brand text, CRECI number, typography, background, spacing

## PropertyCard

- Source: New home target; visual language anchored by the existing hero and price card in `index.html`
- Category: basic
- Description: Single featured-property card with real image, location, title, price, facts, and whole-card navigation.
- Extractable props: `href`, `imageUrl`, `title`, `location`, `price`, `area`, `bedrooms`, `parking`, `propertyCode`
- Hardcoded: card composition, typography, hover treatment, arrow icon
