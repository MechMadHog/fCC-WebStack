# 🎨 CSS Pseudo-Selectors & Accessibility Features – Balance Sheet Project 📊

This document explains the new HTML and CSS concepts introduced while building the **Balance Sheet** project.

---

## 1. 🏷 `caption` Element
- **Purpose:** Describes what the table is about.
- **Usage Rule:** Always the first child of `<table>`, though `caption-side` can move it visually.
- **Example:**
```html
<caption>Assets</caption>
```

---

## 2. 📐 Table Structural Elements
- **`<thead>`**: Groups header rows.
- **`<tbody>`**: Groups main content rows.
- **`<tfoot>`** *(not used here)*: Groups footer rows.
- **`<tr>`**: Defines a table row.
- **`<th>`**: Table header cell (bold & centered by default).
- **`<td>`**: Table data cell (normal weight & left-aligned by default).

---

## 3. ♿ Accessibility – Screen Reader Only Text
- **Class:** `.sr-only` hides text visually but keeps it accessible to screen readers.
- **Selector:**  
```css
span[class~="sr-only"] { ... }
```
  - `[class~="sr-only"]` targets elements with `sr-only` among their classes.
  - `!important` ensures these rules aren’t overridden.
- **Techniques Used:**
  - ✂ `clip` / `clip-path` to hide the visual box.
  - 📏 `height`, `width` set to `1px` with `overflow: hidden`.
  - 📌 `position: absolute` to remove from document flow.
  - ➖ Negative margins to ensure no visual artifact.

---

## 4. 🎯 Attribute Selectors
- **Exact Match:**  
```css
tr[class="total"] { ... }
```
Targets rows whose *only* class is `total`.
- **Contains Match:**  
```css
tr.total { ... }
```
Matches rows that have `total` among multiple classes.

---

## 5. 🧩 Pseudo-Classes & Pseudo-Selectors
- **`:first-of-type`** – Selects the first element of its type within its parent.
```css
h1 .flex span:first-of-type { font-size: 0.7em; }
```
- **`:last-of-type`** – Selects the last element of its type.
```css
h1 .flex span:last-of-type { font-size: 1.2em; }
```
- **`:nth-of-type(n)`** – Selects the nth child of its type.
```css
tr.total td:nth-of-type(3) { padding-right: 0.5rem; }
```
- **`:not(selector)`** – Targets elements that do not match the given selector.
```css
span:not(.sr-only) { font-weight: normal; }
```

---

## 6. 🔍 Advanced Selectors
- **`span[class]`** – Targets any span with a `class` attribute, regardless of value.
- **`tr.data th .description`** – Targets elements with `.description` class inside a `th` within a `.data` row.

---

## 7. 🖼 Layout Techniques
- **Flexbox:**
```css
display: flex;
justify-content: flex-end;
flex-direction: column-reverse;
```
Used for arranging the year labels and heading text.

- **Sticky Positioning:**
```css
position: sticky;
top: 0;
z-index: 999;
```
Keeps the years visible while scrolling and ensures they appear above other content.

- **Responsive Sizing:**
  - `max-width: 40rem` – Limits table container width.
  - `width: 100vw` – Uses the full viewport width.
  - `calc()` – Calculates width based on other values:
```css
width: calc(100% - 12rem);
```

---

## 8. 🖌 Borders & Backgrounds
- **`border-collapse: collapse`** – Merges adjacent table cell borders.
- **`linear-gradient`** – Used to create row banding:
```css
background-image: linear-gradient(to bottom, #dfdfe2 1.845rem, white 1.845rem);
```
- **Double Border for Totals:**
```css
border-bottom: 4px double #0a0a23;
```

---

## 9. ✏ Text Styling
- **Alignment:** `text-align: left/right;` for column positioning.
- **Padding:** Used for consistent spacing in cells.
- **Font Styles:** Italic descriptions, bold totals, normal-weight spans.

---

## 10. 📚 Semantic & Accessible HTML Practices
- Associating headers with data using proper `<th>`/`<td>` placement.
- Providing screen reader context for years and totals without cluttering the visual design.
- Structuring tables for logical reading order.

---

**✅ Outcome:**  
This section combined **HTML semantics**, **CSS pseudo-selectors**, and **accessibility techniques** to produce a clean, responsive, and accessible balance sheet layout.
