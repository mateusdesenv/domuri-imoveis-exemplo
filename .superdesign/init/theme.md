# Theme

## Compact token summary

- Palette: ink `#1f2420`, paper `#f3efe7`, cream `#faf8f3`, sage `#7f897b`, clay `#b65f3d`, white `#fff`, line `rgba(31,36,32,.16)`.
- Typography: `DM Sans` for interface/body; `Instrument Serif` for display headlines and brand wordmark.
- Display headings: weight 400, tracking `-.035em`, line-height `.93`, fluid sizes roughly 52–108px.
- Body: 12–16px, relaxed 1.55–1.75 line-height; eyebrow labels are 9–11px uppercase with wide tracking.
- Layout: maximum width `1380px`; horizontal gutters 48px desktop, 32px tablet, 24px mobile.
- Spacing: large editorial sections use 90–140px vertical rhythm.
- Corners: predominantly square; circular only for pins/checks/modal close.
- Shadows: restrained; used for location pin and fixed mobile CTA.
- Breakpoints: 1000px and 700px.
- Motion: 200–800ms ease/cubic-bezier transitions; reduced-motion fallback disables animation.

## Raw source — theme and global CSS from `index.html`

```css
:root {
  --ink: #1f2420;
  --paper: #f3efe7;
  --cream: #faf8f3;
  --sage: #7f897b;
  --clay: #b65f3d;
  --line: rgba(31, 36, 32, .16);
  --white: #fff;
  --max: 1380px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: var(--ink); background: var(--paper); font-family: "DM Sans", sans-serif; -webkit-font-smoothing: antialiased; }
body.modal-open { overflow: hidden; }
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
button, input, textarea { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
:focus-visible { outline: 2px solid var(--clay); outline-offset: 4px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.wrap { width: min(calc(100% - 48px), var(--max)); margin-inline: auto; }
.eyebrow { display: flex; align-items: center; gap: 10px; margin: 0 0 22px; font-size: 11px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; }
.eyebrow::before { content: ""; width: 28px; height: 1px; background: currentColor; }
.display { margin: 0; font-family: "Instrument Serif", serif; font-weight: 400; letter-spacing: -.035em; line-height: .93; }
.btn { min-height: 54px; display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 0 24px; border: 1px solid var(--ink); background: transparent; color: var(--ink); cursor: pointer; font-size: 13px; font-weight: 600; letter-spacing: .04em; transition: .25s ease; }
.btn:hover { background: var(--ink); color: var(--cream); transform: translateY(-2px); }
.btn-dark { background: var(--ink); color: var(--cream); }
.btn-dark:hover { background: var(--clay); border-color: var(--clay); }
.btn-light { border-color: var(--cream); color: var(--cream); }
.btn-light:hover { background: var(--cream); color: var(--ink); }
.icon { width: 18px; height: 18px; flex: none; }
.announcement { padding: 9px 20px; background: var(--ink); color: var(--cream); text-align: center; font-size: 10px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; }
.nav { position: absolute; inset: 34px 0 auto; z-index: 20; color: var(--white); }
.nav-inner { height: 84px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; border-bottom: 1px solid rgba(255,255,255,.35); }
.brand { font-family: "Instrument Serif", serif; font-size: 31px; letter-spacing: -.02em; }
.brand span { font-family: "DM Sans", sans-serif; font-size: 8px; font-weight: 600; letter-spacing: .21em; text-transform: uppercase; vertical-align: super; margin-left: 4px; }
.nav-links { display: flex; gap: 34px; font-size: 12px; font-weight: 500; }
.nav-action { justify-self: end; display: flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 600; }
.hero { min-height: 820px; position: relative; display: flex; align-items: end; overflow: hidden; background: #43483f; color: var(--white); }
.hero-media { position: absolute; inset: 0; }
.hero-media::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(16,20,16,.82) 0%, rgba(16,20,16,.5) 43%, rgba(16,20,16,.07) 76%), linear-gradient(0deg, rgba(16,20,16,.62) 0%, transparent 50%); }
.hero-media img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.hero-content { position: relative; z-index: 2; padding-bottom: 74px; display: grid; grid-template-columns: 1fr 360px; gap: 80px; align-items: end; }
.hero h1 { max-width: 760px; font-size: clamp(64px, 7vw, 108px); }
.hero h1 em { font-weight: 400; color: #d5b29e; }
.hero-lead { max-width: 520px; margin: 28px 0 34px; color: rgba(255,255,255,.82); font-size: 16px; line-height: 1.65; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
.price-card { padding: 28px 30px; border: 1px solid rgba(255,255,255,.35); backdrop-filter: blur(12px); background: rgba(255,255,255,.08); }
.price { font-family: "Instrument Serif", serif; font-size: 42px; line-height: 1; }
.facts { background: var(--cream); border-bottom: 1px solid var(--line); }
.facts-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
.fact { min-height: 136px; padding: 30px; display: flex; align-items: center; gap: 18px; border-right: 1px solid var(--line); }
.intro { padding: 140px 0 120px; }
.intro-grid { display: grid; grid-template-columns: 4fr 7fr; gap: 12%; align-items: start; }
.gallery { padding-bottom: 140px; }
.gallery-grid { height: 740px; display: grid; grid-template-columns: 1.55fr 1fr; grid-template-rows: 1fr 1fr; gap: 12px; }
.details { padding: 140px 0; background: var(--ink); color: var(--cream); }
.details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10%; align-items: start; }
.editorial { display: grid; grid-template-columns: 1fr 1fr; min-height: 720px; background: var(--cream); }
.location { padding: 140px 0; }
.location-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 7%; align-items: center; }
.contact { position: relative; min-height: 720px; display: flex; align-items: center; overflow: hidden; color: var(--white); }
.contact-grid { position: relative; z-index: 2; padding: 100px 0; display: grid; grid-template-columns: 1fr 440px; gap: 12%; align-items: center; }
footer { padding: 58px 0 95px; background: var(--ink); color: var(--cream); border-top: 1px solid rgba(255,255,255,.12); }
.footer-grid { display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: end; }
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .75s ease, transform .75s cubic-bezier(.16,1,.3,1); }
.reveal.visible { opacity: 1; transform: none; }
@media (max-width: 1000px) {
  .wrap { width: min(calc(100% - 32px), var(--max)); }
  .nav-links { display: none; }
  .hero-content, .intro-grid, .details-grid, .location-grid, .contact-grid { grid-template-columns: 1fr; }
}
@media (max-width: 700px) {
  .wrap { width: min(calc(100% - 24px), var(--max)); }
  .hero { min-height: 790px; }
  .hero h1 { font-size: 58px; }
  .facts-grid { grid-template-columns: 1fr 1fr; }
  .gallery-grid { height: auto; grid-template-columns: 1fr 1fr; grid-template-rows: 420px 210px; }
  .editorial { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  .reveal { opacity: 1; transform: none; }
}
```

## Raw source — font imports

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```
