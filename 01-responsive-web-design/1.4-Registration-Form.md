
# 1.4-Registration-Form

---

## 📐 Viewport Units

### `vh` – Viewport Height
- `vh` stands for **viewport height**
- `1vh` = 1% of the total height of the viewport (browser window)
- Useful for full-page layouts or vertically centering content

Example:
```css
min-height: 100vh;
```

---

## ✅ The `required` Attribute (General Use)

- Makes a form input mandatory before the form can be submitted.
- Works on most types: `text`, `email`, `password`, `checkbox`, etc.
- Browser prevents submission and shows a default message if left blank.

```html
<input type="text" required>
<input type="email" required>
```

📝 **Note:** For radio buttons, use a `<legend>` for clarity and use `checked` to ensure a value is present.

---

## ⌨️ Input Types & Validation

### Input Types:
- `text`: Accepts plain text.
- `email`: Requires `@` and a `.`.
- `password`: Obscures text and warns on insecure sites.
- `number`: Accepts numeric input.
- `file`: Allows file upload from device.

### Custom Validation:
- `minlength`: Enforce minimum character count.
- `pattern`: Enforce regex pattern.

```html
<input type="password" pattern="[a-z0-5]{8,}" required>
```

---

## 🔘 Radio Buttons

```html
<label>
  <input type="radio" name="account-type" value="personal" checked>
  Personal
</label>
```

- Use the same `name` for grouped radio buttons.
- Use `checked` to preselect one value.
- Avoid `required` on both — use a `<legend>` to signal the requirement.

---

## ☑️ Checkbox for Terms

```html
<label for="terms-and-conditions">
  <input type="checkbox" id="terms-and-conditions" name="terms" required>
  I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/" target="_blank">terms and conditions</a>
</label>
```

- `required` ensures checkbox must be checked.
- Accessible with `id` and `for`.

---

## 🖼️ File Uploads

```html
<label for="profile-picture">
  Upload a profile picture:
</label>
<input type="file" id="profile-picture" name="profile-picture">
```

---

## 🧾 Name Attributes for Submission

Each submittable input needs a `name` so its data is included in form submission.

```html
<input type="email" name="user-email">
```

---

## 🏷️ Associating Labels with Inputs

Use `id` on input and `for` on label for accessibility and usability.

```html
<label for="bio">Provide a bio:</label>
<textarea id="bio" name="bio"></textarea>
```

---

## 📏 Styling Form Layout

```css
input,
textarea,
select {
  display: block;
  width: 100%;
  margin: 10px 0 0 0;
  min-height: 2em;
}
```

- Makes inputs fill the width and stack below labels.
- `min-height` ensures visual consistency across all input types.

```css
select {
  background-color: white;
}
```

---

## 🎯 Centering the Submit Button

```css
input[type="submit"] {
  display: block;
  width: 60%;
  margin: 0 auto;
}
```

- Centers the submit button.
- `margin: 0 auto` horizontally centers any block element.

---

## 🎨 Matching Padding for File Input

Browsers often give `input[type="file"]` a different default style.

To match it visually:

```css
input[type="file"] {
  padding: 0.5em;
}
```
