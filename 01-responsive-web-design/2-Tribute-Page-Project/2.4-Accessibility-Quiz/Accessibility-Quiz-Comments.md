
# Accessibility Quiz - Comments & Key Concepts

This project implements a fully accessible HTML/CSS quiz form, following best practices for semantics, accessibility, and responsive design.

## HTML Structure & Semantics

### 1. Header Structure
- **`<header>`** contains:
  - A **logo image** with `alt` text for screen readers.
  - A **page title** inside `<h1>`.
  - A **navigation menu** using `<nav>` with an unordered list of links.

### 2. Navigation & Linking
- Navigation links use `href="#id"` to jump to sections.
- **Smooth scrolling** is applied via CSS (with `prefers-reduced-motion` check).

### 3. Main Content
- **`<main>`** contains a `<form>` with three `<section>` elements:
  - **Student Info**
  - **HTML Questions**
  - **CSS Questions**
- Each `<section>` has:
  - `role="region"` — indicates a landmark region for assistive technologies.
  - `aria-labelledby="id"` — points to a heading describing the section.

### 4. Forms & Accessibility
- **Labels linked to inputs** via `for` and matching `id` attributes.
- **`name` attributes** ensure data is sent during form submission.
- **Placeholder text** in the name input for user guidance.
- Radio buttons grouped by `name` so only one per group is selectable.
- **`fieldset`** groups related form controls, with `<legend>` describing the question.
- **Screen reader only text** (`.sr-only`) provides context invisible to sighted users.

### 5. Additional Form Elements
- `<select>` dropdown with `required` ensures a choice is made.
- `<textarea>` for open-ended answers, linked to label for accessibility.

### 6. Footer
- `<footer>` contains an `<address>` element with organization contact details.

---

## CSS Concepts & Features

### 1. Responsive Design & Sizing
- **`max()` function**: Ensures logo width is the larger of `10rem` or `18vw`.
- **`aspect-ratio`**: Keeps the logo proportional (35:4).
- **`min()` function**: Scales the heading font size responsively.
- **`max-width`** for sections: Prevents overly wide text.

### 2. Layout
- **Flexbox** for navigation (`nav > ul`) evenly spaces items.
- **Inline-block** alignment for labels & inputs inside `.info`.
- Sections centered with `margin: 0 auto`.

### 3. Accessibility & Visibility
- `.sr-only` hides text visually but keeps it for screen readers.
- High-contrast link colors for accessibility.

### 4. Forms Styling
- `.answers-list` removes bullets and padding for radio lists.
- `.question` removes default `<fieldset>` borders.
- Inputs have increased font size for readability.
- `.formrow` spacing for multi-column layout.

### 5. Buttons & Interactivity
- Styled `<button>` matches freeCodeCamp aesthetic.
- `:hover` styles on nav items for interactivity feedback.

### 6. Reduced Motion Preference
```css
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
```
- Enables smooth scrolling only for users who have not requested reduced motion.

---

## Key Takeaways
- Semantic HTML and ARIA attributes greatly improve accessibility.
- Flexbox, modern CSS functions, and responsive units make layouts adaptable.
- Linking labels to inputs improves usability for all users, not just screen readers.
- Media queries can respect user preferences for motion sensitivity.
