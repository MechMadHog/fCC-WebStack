# Yolked / Bear‑Mode — Technical Docs

FCC Responsive Web Design — **Main Project 3: Technical Documentation Page**  
Topic: **Strength Training** (Yolked / Bear‑Mode focus)

---

## What this is
A simple, no‑nonsense technical docs page covering the training focus I actually care about:  
**Back, Neck, Shoulders, Upper Chest, Core, Glutes, Tricep (long head), Forearms** — built around **sandbag, pull‑up bar, dip station, spin‑bike, ab wheel, and bodyweight**. Style: **weighted stretching + time under tension + mobility**.  
Nutrition is **Phase 2** (same as Phase 1, now with **spuds, rice, rice noodles**).  
> Note: I’m **allergic to eggs** — nothing here recommends them.

---

## Features (HTML / CSS)

- **Semantic structure** for FCC tests:
  - `nav#navbar` (fixed left on desktop), with a `header` and **one link per section** (`.nav-link`).
  - `main#main-doc` containing **six** `.main-section`s:
    1. Introduction  
    2. Muscles  
    3. Equipment  
    4. Training Focus  
    5. Programming and Recovery  
    6. Nutrition (Phase 2)
  - Each section starts with a `<header>` and has an **id matching the header text** (spaces → underscores).
- **Content minimums exceeded**:
  - 10+ `<p>` total  
  - 5+ `<code>` total (tempo/TUT examples, splits, intervals, etc.)  
  - 5+ `<li>` total (lists under muscles, equipment, programming, nutrition)
- **Layout / responsiveness**:
  - Fixed left sidebar (`position: fixed`) on regular screens; collapses/flows on mobile via **media query**.
  - Comfortable reading width for `#main-doc`.
- **Typography** (Google Fonts):
  - Headings: **Oswald** (gym vibe)  
  - Body: **Inter** (clean, readable)
- **Theme: Iron & Chalk** (old‑school strength):
  - Background `#f4f4f4` (chalk), text `#1b1b1b` (slate), sidebar `#2a2a2a` (iron), accent **crimson** `#b02e0c`.
  - Code blocks = **chalkboard** (dark with light text).
- **No JavaScript** — pure HTML & CSS.

---

## Design Notes

- **Reading comfort first**: generous line‑height, restrained line‑length.
- **Contrast**: crimson accents for headers and active nav, otherwise neutral.
- **Docs tone**: short paragraphs, bullet points, and inline code for quick scanning.
- **Accessibility**: readable fonts, strong contrast, nav first in DOM, reduced‑motion media query provided.

---

## User Stories (FCC) — How this meets them

1. **`main#main-doc`** contains the documentation content. ✔️  
2. **Multiple `section.main-section`** elements inside `#main-doc` (≥5). ✔️  
3. **Each `.main-section` starts with a `header`** describing the topic. ✔️  
4. **Each `.main-section` has an `id`** that corresponds to its header text (spaces → underscores). ✔️  
5. **Content minimums**: ≥10 `<p>`, ≥5 `<code>`, ≥5 `<li>` across sections. ✔️  
6. **`nav#navbar`** exists with a **`header` first**, followed by **`.nav-link`** anchors (one per section). ✔️  
7. **Nav link text matches section headers**; clicking navigates to the correct section. ✔️  
8. **On regular devices**, `#navbar` is on the **left** and **always visible** (fixed). ✔️  
9. **At least one media query** to adapt layout on smaller screens. ✔️  
10. **Linked stylesheet** via `<link rel="stylesheet" href="styles.css">`. ✔️

---

## File Structure

```
Yolked-Technical-Docs/
│── index.html          # Navbar + Main docs (sections with headers/ids)
│── styles.css          # Iron & Chalk theme, layout, media queries, fonts
│── Yolked-Technical-Docs-Notes.md  # This documentation file
```

---

## Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

- **Oswald** → section headers + sidebar title  
- **Inter** → body copy and lists

---

## Quick CSS Highlights

```css
/* Fixed left nav (desktop) */
#navbar {
  position: fixed; inset: 0 auto 0 0; width: 260px;
  background: #2a2a2a; border-right: 2px solid #444;
}

/* Main content offset */
#main-doc { margin-left: 260px; max-width: 900px; padding: 2rem; }

/* Iron & Chalk palette */
body { background: #f4f4f4; color: #1b1b1b; }
.main-section > header { color: #b02e0c; font-family: 'Oswald', sans-serif; }

/* Code as “chalkboard” */
code {
  display: block; background: #2a2a2a; color: #f4f4f4;
  border: 1px solid #444; border-radius: 6px; padding: .6rem .75rem;
}

/* Media query: stack nav on mobile */
@media (max-width: 860px) {
  #navbar { position: relative; width: 100%; border-right: 0; }
  #main-doc { margin-left: 0; padding: 1.25rem; }
}
```

---

## Live Demo
Add when published:  
`https://codepen.io/Mike-MacDonagh/pen/EaVRjgM`

---

## Notes to Self

- Keep paragraphs short and actionable.  
- Track any future adds: plate‑style header, chalk smudge texture, tiny progress tables.  
- **No eggs** in examples or suggestions (allergy).  
