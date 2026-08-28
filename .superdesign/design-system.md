# Domuri Imobiliária — Home de exemplo

## Product context

Static real-estate showcase for Domuri Imobiliária. The new `/` page is a compact homepage that mirrors the official Domuri visual language while intentionally presenting only one available property. The single card must lead to the preserved Residencial Marriot detail page.

Primary audience: buyers in Gravataí, Cachoeirinha, and the surrounding metro area, with a mid-to-premium positioning.

Primary goals:

1. Establish the Domuri brand immediately.
2. Communicate strategic buying and selling expertise.
3. Present one featured property with complete decision-making metadata.
4. Drive users from the card to the existing property detail page.
5. Offer a direct WhatsApp contact path without competing with the property card.

## Page architecture

- Full-width 72px header with official Domuri logo on the left, navigation in the middle, and phone/contact action on the right.
- Cinematic full-bleed hero using architectural/property photography with a left-to-right black scrim.
- Hero headline: “Viva o nível que você merece.”
- Hero supporting copy: “Atuação estratégica na compra e venda de imóveis.”
- Compact search-inspired surface may be reduced to a single “Conheça nosso imóvel em destaque” action because this example has only one listing.
- A single “Imóvel em destaque” section with exactly one wide property card for Residencial Marriot.
- Minimal institutional/contact band.
- Structured footer inspired by the official site.

Do not create extra property cards, fake inventory, fake developments, carousels, or search results.

## Visual source

Faithfully adopt the extracted design DNA from `https://www.domuriimoveis.com.br`:

- Light editorial real-estate directory aesthetic.
- One cinematic hero photograph; all later sections remain flat and near-white.
- System sans typography throughout.
- Bronze accent used sparingly for actions, price, labels, and icons.
- Hairline borders, restrained shadows, clean catalog-like metadata.
- Official Domuri logo must be visible in the header and footer. Never substitute initials, emoji, an invented SVG, or plain text for the supplied Brand Asset.

## Color tokens

```css
:root {
  --domuri-background: #fafafa;
  --domuri-surface: #ffffff;
  --domuri-text: #424242;
  --domuri-text-secondary: #575757;
  --domuri-border: #dddddd;
  --domuri-accent: #6a511b;
  --domuri-soft: #f1f1f1;
  --domuri-hero: #000000;
  --domuri-white: #ffffff;
}
```

Guardrail: bronze `#6a511b` is reserved for CTAs, price, eyebrow labels, and small icon accents. Never use it as a full section background.

## Typography

- Family: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`.
- Hero display: 40–64px, weight 700, compact tracking, balanced line breaks.
- Section title: 24–36px, weight 500–600.
- Card title: 20–24px, weight 500–600.
- Body: 16–19px, weight 400–500, line-height 1.4–1.6.
- Metadata: 13–16px, secondary ink.

Do not introduce serif or decorative display fonts.

## Layout and spacing

- Content max-width: 1356px.
- Desktop gutters: 32px minimum.
- Section padding: 72–88px desktop, 52–64px tablet, 40–52px mobile.
- Base unit: 4px; common gap: 24–25px.
- Hero: approximately 640–720px desktop, with centered or left-weighted text on the scrim.
- The single property card should feel intentional rather than like a broken grid: use a wide editorial composition with image occupying about 58–66% and information occupying the remaining column.
- Mobile card stacks image above content.

## Components

### Header

- Edge-to-edge, approximately 72px.
- Near-white background.
- Official Domuri logo, approximately 150–178px wide.
- Navigation: Comprar, Institucional, Contato.
- Right action: circular phone icon plus “Ver telefones” or a compact contact control.
- Mobile: retain logo, hide text navigation, show accessible menu/contact control.

### Hero

- Full-bleed real property/architecture image.
- Black-to-transparent vignette, strongest behind text.
- White headline and body.
- One bronze action control.
- No abstract gradients, blobs, glass cards, or decorative patterns.

### Single property card

- Exactly one card.
- Full-card link to the preserved Residencial Marriot detail page.
- Real primary image from the existing detail page.
- Content: “Apartamento mobiliado”, “Residencial Marriot”, “Vila Monte Carlo · Cachoeirinha/RS”, 65 m², 3 dormitórios, 1 suíte, 2 vagas, price R$ 410.000, code 55128.
- Use a wide editorial card with a 17px radius and subtle 1px border.
- Bronze price and small eyebrow label.
- Clear arrow affordance and visible hover/focus state.
- Do not add favorite, carousel, pagination, or duplicate CTAs inside the card.

### Contact band

- Near-white or soft-gray surface, simple copy and bronze WhatsApp action.
- Keep secondary to the property-card conversion.

### Footer

- Near-white band with hairline separator.
- Official logo, short navigation columns, contact information, CRECI 73530J, legal line.
- Social icons may be circular light-gray buttons.

## Radius, borders, shadows

- Controls: 6–11px radius.
- Featured property card: 17px radius.
- Pills: 50px radius only for compact CTA/button treatments.
- Borders: 1px solid `#dddddd`.
- Shadows: tight and low contrast; avoid large floating-card shadows.

## Motion and accessibility

- 200–300ms ease transitions for hover, focus, and image scale.
- Property card image may scale no more than 1.02 on hover.
- Preserve visible keyboard focus.
- Semantic header/nav/main/section/footer structure.
- Whole card remains keyboard accessible with a descriptive accessible name.
- Images require meaningful Portuguese alt text.
- Honor `prefers-reduced-motion`.
- Maintain WCAG AA contrast.

## Responsive behavior

- Desktop: horizontal header, hero copy left-weighted, wide two-column property card.
- Tablet: simplified nav, property card remains two-column when space permits.
- Mobile: compact header, hero height reduced, property card stacks, tap targets at least 44px, no horizontal overflow.

## Fidelity constraints

Use only the fonts, colors, spacing, component styles, and motion rules defined here. Do not introduce purple, neon, blue gradients, generic SaaS styling, serif typography, bento dashboards, or invented inventory. The new home must look like a focused Domuri real-estate homepage, not a reinterpretation of another brand.
