# css-variables-city-skyline-comments

This document captures everything **earned/learned** from completing the freeCodeCamp *City Skyline* project.

---

## 🌆 Project Overview

The project walks step-by-step through **118 instructions**, teaching CSS fundamentals by building a responsive,
CSS-only skyline with background and foreground buildings.

Key areas covered:

- CSS Variables
- Flexbox layouts
- Responsive units (%, vh, vw)
- Positioning (relative, absolute)
- Gradients (linear, radial, repeating)
- Borders for shapes (triangles, trapezoids)
- Media queries for responsiveness
- Code organization with comments and reusable utility classes

---

## 🎨 CSS Variables

Defined in the `:root` scope for reusability:

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: #bb99ff;
  --window-color2: #8cd9b3;
  --window-color3: #d98cb3;
  --window-color4: #8cb3d9;
}
```

Lessons:
- Variables are declared with `--name: value;`.
- Access with `var(--name, fallback)`.
- Keep theme colors centralized for easy updates.

---

## 📐 Layout Techniques

- `body` set to `height: 100vh; margin: 0; overflow: hidden;` to fill the viewport cleanly.
- `.background-buildings, .foreground-buildings` share:
  ```css
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  ```
- Empty `<div>`s were used to space out flex items (manual spacers).
- `.building-wrap` utility class: vertically stacks building sections and centers them with flexbox.
- `.window-wrap` utility class: evenly distributes repeating window elements.

---

## 🌈 Gradients

Examples of gradients learned:

- **Linear gradient** for windows and walls:
  ```css
  background: linear-gradient(var(--building-color1), var(--window-color1));
  ```

- **Repeating linear gradient** for stripes/windows:
  ```css
  background: repeating-linear-gradient(
    90deg,
    var(--building-color3),
    var(--building-color3),
    var(--window-color3) 15%
  );
  ```

- **Multiple layered gradients** separated by commas:
  ```css
  background:
    repeating-linear-gradient(...),
    repeating-linear-gradient(...);
  ```

- **Radial gradient** for sky with sun and color blend:
  ```css
  .sky {
    background: radial-gradient(
      circle closest-corner at 15% 15%,
      #ffcf33,
      #ffcf33 20%,
      #ffff66 21%,
      #bbeeff 100%
    );
  }
  ```

---

## 🏗️ Border Tricks

Used borders to create roof shapes and triangles:

```css
.fb1a {
  border-bottom: 7vh solid var(--building-color4);
  border-left: 2vw solid transparent;
  border-right: 2vw solid transparent;
}
```

Lesson: wide transparent side borders + a colored top/bottom border = triangle/trapezoid.

---

## 🏢 Background vs Foreground

- **Background buildings (`bb`)**: Taller, muted structures in the distance.
- **Foreground buildings (`fb`)**: More colorful, detailed, appear closer.

Comments added in the CSS help separate concerns:

```css
/* BACKGROUND BUILDINGS - "bb" stands for "background building" */
/* FOREGROUND BUILDINGS - "fb" stands for "foreground building" */
```

---

## 📱 Responsive Design

At the end, a **media query** darkens colors for smaller screens:

```css
@media (max-width: 1000px) {
  :root {
    --building-color1: #000;
    --building-color2: #000;
    --building-color3: #000;
    --building-color4: #000;
    --window-color1: #777;
    --window-color2: #777;
    --window-color3: #777;
    --window-color4: #777;
  }

  .sky {
    background: radial-gradient(
      circle closest-corner at 15% 15%,
      #ccc,
      #ccc 20%,
      #445 21%,
      #223 100%
    );
  }
}
```

---

## ✅ Takeaways

- **CSS variables** make large projects manageable.  
- **Flexbox** is ideal for distributing uneven building widths.  
- **Gradients** can create texture, depth, and lighting effects without images.  
- **Borders** are surprisingly powerful for shapes.  
- **Media queries** ensure responsiveness.  
- Commenting and utility classes (`building-wrap`, `window-wrap`) keep code DRY and readable.

---

This project shows how far you can push **pure CSS** for design, and is a foundation for more advanced work (like parallax backgrounds or game scenery).  
