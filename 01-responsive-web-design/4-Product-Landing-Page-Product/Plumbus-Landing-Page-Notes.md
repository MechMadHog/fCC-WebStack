# Plumbus — Product Landing Page

FCC Responsive Web Design — **Main Project 4: Product Landing Page**  
Theme: **Rick and Morty parody product (Plumbus)**

---

## What this is
A parody **product landing page** for the Plumbus — the mysterious household item from *Rick and Morty*.  
I’ve been watching the show since it first aired, so this project was a fun way to meet all the FCC user stories while giving it a surreal, sci-fi twist.  

The page includes:
- Sticky nav with logo + 3 nav links  
- Hero section with copy, signup form, and Plumbus image  
- Features section with 3 styled cards  
- “How it’s Made” section with embedded video  
- Pricing grid with 3 tiers  
- Footer with back-to-top link  

---

## Features (HTML / CSS)

- **Semantic structure** for FCC tests:
  - `header#header` with `img#header-img` (logo) and `nav#nav-bar` containing ≥3 `.nav-link`s.
  - Hero copy + **form#form** with:
    - `input#email` (type="email", placeholder, HTML5 validation)
    - `input#submit` (submits to mock FCC URL)
  - `iframe#video` with a `src` attribute (YouTube embed: *How Plumbus is Made*).
  - Sections: `#features`, `#how-it-works`, `#pricing`.
- **Layout / responsiveness**:
  - Flexbox for header, hero, and footer layouts.  
  - Grid for features and pricing tiers.  
  - At least one **media query** to adapt layout on smaller screens.
- **Theme**:
  - Dark sci-fi background with playful pink/blue accents.  
  - Fonts: **Bebas Neue** (logo/headers) + **Inter** (body text).  
  - Icons8 PNG used for hero image.  
- **Accessibility**:
  - Descriptive alt text, labeled form field, responsive iframe.  

---

## Design Notes

- Hero art (`https://img.icons8.com/...`).  
- Video section updated with `id="video"` and valid `src`.  
- Color palette: playful neon pink (`#ff5e84`) and cyan (`#8df0ff`) accents against dark neutral backgrounds.  
- Rounded cards, soft shadows, blurred sticky nav.   

---

## User Stories (FCC) — How this meets them

1. `header#header` exists. ✔️  
2. `img#header-img` exists inside header. ✔️  
3. `nav#nav-bar` exists inside header. ✔️  
4. At least three clickable elements with class `.nav-link`. ✔️  
5. Clicking nav links jumps to corresponding sections. ✔️  
6. `iframe#video` is present. ✔️  
7. `#video` has a `src` attribute. ✔️  
8. `form#form` exists. ✔️  
9. `input#email` with placeholder + HTML5 email validation. ✔️  
10. `input#submit` exists and submits to `https://www.freecodecamp.com/email-submit`. ✔️  
11. Navbar always visible at top (`position: sticky`). ✔️  
12. At least one media query for responsiveness. ✔️  
13. Flexbox used at least once (header, hero, footer). ✔️  

---

## File Structure

```
Plumbus-Landing-Page/
│── index.html                # Page markup
│── styles.css                # Styles, layout, media queries
│── Plumbus-Landing-Page-Notes.md   # This documentation file
```

---

## Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
```

- **Bebas Neue** → logo/brand + section headers  
- **Inter** → body copy and UI elements  

---

## Quick CSS Highlights

```css
/* Sticky header */
#header {
  position: sticky;
  top: 0;
  background: rgba(15,15,19,.75);
  backdrop-filter: blur(8px);
}

/* Flex hero layout */
.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

/* Responsive video */
.video-wrap {
  position: relative;
  aspect-ratio: 16/9;
}
#video {
  width: 100%;
  height: 100%;
  display: block;
}

/* Media query */
@media (max-width: 900px) {
  .hero-inner { flex-direction: column; text-align: center; }
}
```

---

## Live Demo
CodePen:  
`https://codepen.io/Mike-MacDonagh/pen/xbwayEj`

---

## Notes to Self

- Keep Rick & Morty references playful, not overdone.  
- Maybe add small hover effects on pricing tiers.  
- Could expand with testimonials (“Everyone’s got a Plumbus”).   
