# Shared Layouts

The current project has no separate layout files. The shared shell is embedded directly in `index.html`.

## Top navigation

- Source: `index.html`
- Description: Absolute three-column navigation over the hero, collapsing to logo + action on mobile.

```html
<nav class="nav" aria-label="Navegação principal">
  <div class="wrap nav-inner">
    <a class="brand" href="#inicio" aria-label="Domuri Imóveis">Domuri<span>Imóveis</span></a>
    <div class="nav-links">
      <a href="#imovel">O imóvel</a>
      <a href="#galeria">Galeria</a>
      <a href="#localizacao">Localização</a>
    </div>
    <a class="nav-action" href="#contato">
      <span>Agendar visita</span>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  </div>
</nav>
```

## Footer

- Source: `index.html`
- Description: Dark two-column footer with property metadata and anchor links.

```html
<footer>
  <div class="wrap footer-grid">
    <div>
      <div class="footer-brand">Domuri Imóveis</div>
      <div class="footer-meta">CRECI 73530J · Imóvel cód. 55128 · Cachoeirinha/RS</div>
    </div>
    <div class="footer-links">
      <a href="#imovel">O imóvel</a>
      <a href="#galeria">Galeria</a>
      <a href="#localizacao">Localização</a>
      <a href="https://www.domuriimoveis.com.br" target="_blank" rel="noopener">Site oficial</a>
    </div>
  </div>
</footer>
```

## Global content wrapper

```css
.wrap { width: min(calc(100% - 48px), var(--max)); margin-inline: auto; }
@media (max-width: 1000px) { .wrap { width: min(calc(100% - 32px), var(--max)); } }
@media (max-width: 700px) { .wrap { width: min(calc(100% - 24px), var(--max)); } }
```
