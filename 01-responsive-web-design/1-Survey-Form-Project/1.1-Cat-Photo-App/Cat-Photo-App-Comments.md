
# 1.1-Cat-Photo-App

---

## 🧱 HTML Structure Overview

- The page is wrapped in a `<main>` element to signify the primary content.

---

## 🐱 Section 1: Cat Photos

```html
<section>
  <h2>Cat Photos</h2>
  <p>See more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a> in our gallery.</p>
  <a href="https://freecatphotoapp.com">
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  </a>
</section>
```

- Used a hyperlink with `target="_blank"` to open the cat gallery in a new tab.
- The image is wrapped in an anchor tag to make it clickable.

---

## 📝 Section 2: Cat Lists

### Unordered List – Things Cats Love
```html
<ul>
  <li>catnip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
```

### Ordered List – Things Cats Hate
```html
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
```

- `<ul>` is used for unordered preferences (likes)
- `<ol>` is used for prioritized dislikes

### `<figure>` and `<figcaption>`
Used to semantically group an image and its caption.

---

## 📋 Section 3: Cat Form

```html
<form action="https://freecatphotoapp.com/submit-cat-photo">
```

### Fieldset 1 – Indoor or Outdoor
```html
<fieldset>
  <legend>Is your cat an indoor or outdoor cat?</legend>
  <label><input type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
</fieldset>
```

- `name="indoor-outdoor"` groups the radio buttons
- `checked` pre-selects the first option

### Fieldset 2 – Personality Checkboxes
```html
<fieldset>
  <legend>What's your cat's personality?</legend>
  <input type="checkbox" name="personality" value="loving" checked>
  <label for="loving">Loving</label>
  ...
</fieldset>
```

- Multiple boxes can be checked at once
- `name="personality"` allows submission as a group

---

## 🌐 Final Form Inputs

```html
<input type="text" name="catphotourl" placeholder="cat photo URL" required>
<button type="submit">Submit</button>
```

- `placeholder` gives a visual hint inside the field
- `required` ensures the input is not empty before submission

---

## 🔻 Footer

```html
<footer>
  <p>No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a></p>
</footer>
```

- A simple footer with attribution
