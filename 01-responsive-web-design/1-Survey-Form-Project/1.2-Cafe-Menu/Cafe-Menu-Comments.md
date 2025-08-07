
# 1.2-Cafe-Menu

---

## 🧱 Basic HTML Structure

- Used `<article>` to group each coffee and price pair.
- Nested two `<p>` elements inside each `<article>`:
  - First `<p>` = coffee name
  - Second `<p>` = price

---

## 💡 Semantic Elements

- `<section>` used to group similar menu categories (e.g., Coffee, Desserts).
- `<article>` used for individual menu items to reflect standalone content blocks.

---

## 🧾 Footer Link

```html
<footer>
  <p>
    <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
  </p>
</footer>
```

- `target="_blank"` opens the link in a new tab.

---

## 🪄 Spacing and Layout

### Class `.bottom-line`
```css
.bottom-line {
  margin-top: 25px;
}
```

- Adds space above the second `<hr>` element for visual balance.

---

### Class `.address`
```css
.address {
  margin-bottom: 5px;
}
```

- Reduces bottom space under the address to align with the top spacing of the header.

---

## 🎨 Colors and States

### Visited & Active Link Colors
```css
a:visited {
  color: black;
}

a:active {
  color: brown;
}
```

- `:visited` styles links that have been clicked
- `:active` styles links during the click

---

## 🖼️ Centering the Image

```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -25px;
}
```

- `display: block` lets margin work for centering
- `auto` margins center the image horizontally
- Negative top margin reduces vertical space from heading

---

## 📝 Text Alignment

```css
h1, h2, p {
  text-align: center;
}
```

- Centers headings and paragraph text consistently.

---

## 🫘 Background Image

```css
body {
  background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
}
```

- Adds a coffee bean image to the page background.

---

## 📐 Container Styling

```css
.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
```

- Centers the menu on the page
- `burlywood` background gives it a warm, parchment-like feel

---

## 🧠 CSS Selectors Recap

- `h1, h2, p` → type selector
- `.menu`, `.bottom-line`, `.address` → class selectors
- `#id-name` → id selectors (used for individual unique elements)
