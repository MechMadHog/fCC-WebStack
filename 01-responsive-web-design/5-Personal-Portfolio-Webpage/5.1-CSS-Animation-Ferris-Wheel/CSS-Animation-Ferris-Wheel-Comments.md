# CSS-Animation-Ferris-Wheel-Comments

This document captures everything **earned/learned** from completing the freeCodeCamp *Ferris Wheel* project.

---

## 🎡 Project Overview

The project walks step-by-step through creating a **CSS-only Ferris wheel**.  
It teaches **animation fundamentals** with `@keyframes`, transform rotations, and positioning to simulate a working amusement ride.

Key areas covered:

- Positioning and transforms (`rotate`, `transform-origin`)
- `nth-of-type()` for targeting multiple repeated elements
- `@keyframes` animations
- Animation properties (`name`, `duration`, `iteration-count`, `timing-function`)
- Combining multiple animations (`wheel` for the structure, `cabins` for cabins)
- Responsive sizing with `%` and `vw`

---

## 🔧 Structure (HTML)

The Ferris wheel consists of:

- `.wheel` → circular border that rotates
- `.line` (6 spokes) → rotated with `transform: rotate(...)`
- `.cabin` (6 cabins) → positioned around the edge, animated separately

```html
<div class="wheel">
  <span class="line"></span>
  ...
  <div class="cabin"></div>
</div>
```

Lessons:
- Simple `<span>` and `<div>` elements can be transformed into complex visual components with CSS only.
- Repetition is handled with `nth-of-type`.

---

## 🎨 Styling and Layout

### Wheel
```css
.wheel {
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  width: 55vw;
  height: 55vw;
  max-width: 500px;
  max-height: 500px;
}
```
- `border-radius: 50%` creates a circle.
- Size defined with `vw` keeps it responsive.

### Spokes
```css
.line {
  background-color: black;
  width: 50%;
  height: 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 0% 0%;
}
```
- Each `.line` rotates by multiples of 60° using `nth-of-type`.
- `transform-origin` determines the pivot point.

---

## 🛠️ Positioning Cabins

Cabins are placed around the circle with absolute positioning:  

```css
.cabin:nth-of-type(1) {
  right: -8.5%;
  top: 50%;
}
```

- Each cabin gets its own position (top/right/left %) to align with a spoke.
- Negative offsets (`-8.5%`) push cabins just outside the wheel.

---

## ⏯️ Animation

### Keyframes
Two separate animations were created:

```css
@keyframes wheel {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes cabins {
  0%   { transform: rotate(0deg); }
  25%  { background-color: yellow; }
  50%  { background-color: purple; }
  75%  { background-color: yellow; }
  100% { transform: rotate(-360deg); }
}
```

Lessons:
- The **wheel spins clockwise**.
- Cabins **spin counter-clockwise** (`-360deg`) to simulate staying upright.
- Cabins also change color at intervals.

### Animation Properties

```css
.wheel {
  animation-name: wheel;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.cabin {
  animation: cabins 10s ease-in-out infinite;
}
```

- `animation-name` links an element to its `@keyframes`.
- `animation-duration: 10s` → one full rotation in 10 seconds.
- `animation-iteration-count: infinite` → spins forever.
- `animation-timing-function: linear` → constant speed.
- Cabins use a shorthand with `animation: ...`.

---

## ✅ Takeaways

- **`nth-of-type()`** is powerful for repeating symmetrical designs.  
- **`transform-origin`** determines the rotation pivot — crucial for spokes and cabins.  
- **Animations can layer** (`wheel` + `cabins`) to create realistic effects.  
- Using **opposite rotations** gives the illusion of physics (cabins staying upright).  
- CSS alone can simulate complex mechanical systems without JavaScript.  

---

This project demonstrated the **core mechanics of CSS animation** and how multiple elements can move independently yet stay visually synchronized.  
