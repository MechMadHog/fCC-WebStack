# 🎹 What I Learned from Building the Piano

Working through the *Learn Responsive Web Design by Building a Piano* project taught me a lot of practical front-end concepts. Here’s a breakdown:

## 🧩 HTML Concepts
- **Multiple classes**:  
  An element can have more than one class (e.g., `class="key black--key"`) to apply combined styles.
- **Accessible images**:  
  Using `alt` text for images (e.g., the freeCodeCamp logo) improves accessibility and SEO.

## 🎨 CSS Concepts
- **Pseudo-elements**:  
  - `::before` and `::after` let you insert cosmetic content without adding extra HTML.  
  - Learned that you must set `content: ""` to render them.  
  - Useful for creating shapes (like black keys) on top of existing elements.
- **Box-sizing**:  
  Setting `*, *::before, *::after { box-sizing: inherit; }` ensures predictable sizing by inheriting from the root (`html { box-sizing: border-box; }`).
- **Positioning**:  
  - `position: relative;` on the parent (e.g., `#piano`) provides a reference point.  
  - `position: absolute;` on child elements or pseudo-elements positions them relative to the parent.  
  - Using offsets like `left: -18px;` to nudge elements into place.
- **Styling pseudo-elements**:  
  Applying `background-color`, `width`, `height`, and offsets to create the illusion of piano keys.

## 📱 Responsive Design
- **@media queries**:  
  - Learned how to write conditional CSS rules with `@media (max-width: …)`.  
  - Example: resizing the piano when the viewport is below 768px.  
  - Helps make layouts adapt to different screen sizes.

## ✅ Key Takeaways
- CSS can create complex visuals with simple shapes and pseudo-elements.  
- Positioning (`relative` vs `absolute`) is essential for controlling layout.  
- Media queries are a powerful tool for responsiveness.  
- Small details like `box-sizing` and proper `alt` text make a big difference.

---
