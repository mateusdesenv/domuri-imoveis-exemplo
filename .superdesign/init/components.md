# Shared UI Components

The project is a single static HTML document and has no component module directory or framework-level shared primitives. Buttons, labels, facts, gallery items, form fields, and cards are inline patterns in `index.html`.

## Button pattern

- Source: `index.html`
- Description: Rectangular bordered CTA with light and dark variants.
- Key classes: `.btn`, `.btn-dark`, `.btn-light`

```html
<a class="btn btn-light" href="#galeria">Conhecer o imóvel</a>
<a class="btn btn-dark" href="https://wa.me/5551980448075" target="_blank" rel="noopener">Falar no WhatsApp</a>
```

```css
.btn { min-height: 54px; display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 0 24px; border: 1px solid var(--ink); background: transparent; color: var(--ink); cursor: pointer; font-size: 13px; font-weight: 600; letter-spacing: .04em; transition: .25s ease; }
.btn:hover { background: var(--ink); color: var(--cream); transform: translateY(-2px); }
.btn-dark { background: var(--ink); color: var(--cream); }
.btn-dark:hover { background: var(--clay); border-color: var(--clay); }
.btn-light { border-color: var(--cream); color: var(--cream); }
.btn-light:hover { background: var(--cream); color: var(--ink); }
```

## Eyebrow pattern

- Source: `index.html`
- Description: Uppercase section label with a short horizontal rule.

```html
<p class="eyebrow">Residencial Marriot · Cachoeirinha</p>
```

```css
.eyebrow { display: flex; align-items: center; gap: 10px; margin: 0 0 22px; font-size: 11px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; }
.eyebrow::before { content: ""; width: 28px; height: 1px; background: currentColor; }
```

## Property fact item

- Source: `index.html`
- Description: Icon, large value, and uppercase label used in the property facts strip.

```html
<div class="fact">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20V4h16v16M8 8h8M8 12h8M8 16h4"/></svg>
  <div><strong>65 m²</strong><span>Área privativa</span></div>
</div>
```

## Form field pattern

- Source: `index.html`
- Description: Minimal underline-only input used by the lead form.

```html
<label class="sr-only" for="name">Seu nome</label>
<input class="field" id="name" type="text" name="name" placeholder="Seu nome" autocomplete="name" required>
```

```css
.field { width: 100%; margin-bottom: 12px; padding: 15px 0; border: 0; border-bottom: 1px solid var(--line); border-radius: 0; outline: 0; background: transparent; color: var(--ink); }
.field:focus { border-color: var(--clay); }
```
