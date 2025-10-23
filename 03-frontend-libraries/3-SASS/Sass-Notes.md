# Sass — Notes

## 🧩 What is Sass
**Sass (SCSS syntax)** is a stylesheet language that compiles to CSS. It adds variables, nesting, mixins, functions, control flow, partials, and more to keep styles modular and maintainable.

This was not one single project. I separated **HTML** and **SCSS**, and kept every step in a single `styles.scss` file divided by comments.

---

## 📁 Files and layout
- **`/sass/styles.scss`** - the main SCSS file. Steps are split up by clear comment blocks, so I can see the full progression.
- **`index.html`** - contains commented “Step” blocks that match the steps in `styles.scss`.

> I’m not a fan of this format, but it was necessary for this module since I kept all steps together. Separating HTML from SCSS made it possible.

---

## 🧠 Key Sass features I practiced

### 1) Nesting + variables (Step 1–2)
Keep related rules together and avoid repeating selectors. Use variables for quick theme control.

```scss
// Step 1–2: variables + nesting
$brand: #333;
$accent: #0aa;

.header { color: $accent; }

.blog-post {
  border: 1px solid $brand;
  padding: 1rem;

  h2 { margin: 0 0 .5rem; }
  p  { line-height: 1.6; }
}
```

### 2) Mixins (Step 3)
Reusable blocks with parameters.

```scss
// Step 3: mixin for generic shapes
@mixin shape($w, $h, $bg-color) {
  width: $w;
  height: $h;
  background-color: $bg-color;
}

#square  { @include shape(50px, 50px, red); }
#rect-a  { @include shape(100px, 50px, blue); }
#rect-b  { @include shape(50px, 100px, orange); }
```

### 3) Conditional logic in mixins (Step 4)
Use `@if`, `@else if`, `@else` to branch styles.

```scss
// Step 4: border weight controller
@mixin border-stroke($val) {
  @if $val == light  { border: 1px solid black; }
  @else if $val == medium { border: 3px solid black; }
  @else if $val == heavy  { border: 6px solid black; }
  @else { border: none; }
}

#box {
  width: 150px;
  height: 150px;
  background: red;
  @include border-stroke(medium);
}
```

### 4) Loops — `@for`, `@each`, `@while` (Steps 5–7)
Generate utility classes without copy‑pasting.

```scss
// Step 5: @for → .text-1 ... .text-5 → 15px increments
@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

// Step 6: @each → background helpers for a set of colors
@each $color in blue, black, red {
  .#{$color}-bg { background-color: $color; }
}

// Step 7: @while → same font-size series using a counter
$i: 1;
@while $i <= 5 {
  .text-#{$i} { font-size: 15px * $i; }
  $i: $i + 1;
}
```

### 5) Partials and `@import` (Step 8)
Split SCSS into small files. Partials start with `_` and do not compile on their own.

```scss
// _variables.scss
$brand: #222;
$accent: #0aa;
$radius: 8px;

// main file
@import 'variables';

.button {
  color: #fff;
  background: $accent;
  border-radius: $radius;
}
```

> Note: in modern Sass, `@use` and `@forward` replace `@import`. FCC uses `@import` here, so I matched that.

### 6) Inheritance with `@extend` (Step 9)
Share rule sets without duplicating. The extended selector takes the base selector’s declarations.

```scss
// Step 9: extend base card styles
.info {
  width: 200px;
  margin: 0 auto;
  border: 1px solid black;
}

.info-important {
  @extend .info;
  background-color: magenta;
}
```

---

## 🧪 Notes and gotchas
- **Nesting** is handy, but keep depth shallow to avoid heavy selectors.
- **Mixins vs extend**:  
  - Mixins copy declarations - great when you need parameters.  
  - Extend merges selectors - great for shared, static rule sets.
- **Loops** are perfect for utility classes and scale lines (spacing, fonts, z‑index ladders).
- **Partials** keep things tidy. Name them by role: `_variables.scss`, `_mixins.scss`, `_typography.scss`, `_layout.scss`, etc.
- **Compilation**: the browser does not read SCSS directly. In a real project I would compile SCSS to CSS via a build step. In online editors the preprocessor handles it for me.

---

## 🔧 Alternatives
- **Less** - similar feature set with slightly different syntax.
- **PostCSS** - plugin ecosystem that can replicate many Sass patterns.
- **CSS custom properties** - runtime variables in pure CSS. Combine with logical properties and layers for a modern approach.

---

## ✅ What I accomplished
- Practiced **variables, nesting, mixins**.
- Used **control flow** with `@if/@else` and **loops** with `@for`, `@each`, `@while`.
- Organized code with **partials** and imports.
- Applied **inheritance** with `@extend`.
- Kept all steps in one `styles.scss` file, divided by comments to track learning while keeping the HTML clean.

---

## 💡 Reflection
Sass makes repetition disappear and turns style rules into small, reusable building blocks. Even in this “all steps in one file” format, it stayed readable thanks to partials and clear sections. The same patterns scale to a full project, mixins for components, loops for utilities, partials for structure, and variables for theme control.
