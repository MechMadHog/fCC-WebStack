# Pyramid Generator – Syntax & Purpose Notes (Complete)

This rolling notebook captures the **essential syntax and purpose** behind everything used to build the finished Pyramid Generator. It avoids step-by-step narration and focuses on *what each concept is for*.

---

## Variables & Types
```js
let character = '#';   // reassignable
const count = 8;       // constant
let result;            // declared, currently undefined
```
- `let` → block-scoped, can be reassigned.  
- `const` → block-scoped, must be initialized, not reassigned.  
- Uninitialized variables evaluate to `undefined`.

---

## Arrays: Indexing & Mutation
```js
let rows = [1, 2, 3];
rows[2] = 10;                // direct mutation by index
rows[rows.length - 1] = 10;  // last element dynamically
```
- Arrays are **mutable** and **zero‑indexed**.  
- Use `.length - 1` to target the last item without knowing the size.

### Useful methods
```js
rows.push(value);    // add to end → returns new length
rows.pop();          // remove last → returns removed value
rows.unshift(value); // add to start → used for inverted pyramid
```
- `.push`/`.pop` grow/shrink at the **end**; `.unshift` grows at the **start**.

---

## Loops
### Classic `for`
```js
for (let i = 0; i < count; i = i + 1) {
  // iterate i from 0 to count-1
}
```
- The condition (`i < count`) controls when the loop stops.  
- `i = i + 1` increments each iteration (equivalent to `i++`).

### `for...of`
```js
for (const row of rows) {
  // use each value from rows
}
```
- Iterates over iterable values (arrays, strings, etc.).  
- `const` is safe because `row` is re-bound each iteration.

---

## Strings: Concatenation, Newlines, Repetition
```js
result = result + row + "\n";  // concatenate plus newline
"#".repeat(3);                   // "###"
```
- `\n` inserts a newline when rendering text.  
- `.repeat(n)` duplicates a string `n` times.  
- Off‑by‑one fix: use `.repeat(i + 1)` when `i` starts at 0 and you need at least 1 char.

---

## Row Construction for Centered Pyramid
Goal: centered odd widths per row (`1, 3, 5, ...`) with left/right spaces.
```js
function padRow(rowNumber, rowCount, ch) {
  const spaces = rowCount - rowNumber;     // left/right padding
  const width  = 2 * rowNumber - 1;        // odd width for the row
  return " ".repeat(spaces) + ch.repeat(width) + " ".repeat(spaces);
}
```
- Left/right padding centers each row within the overall height.  
- Row width grows by 2 each step to form the pyramid.

---

## Inversion Logic (Top/Bottom Build)
```js
let inverted = false;

for (let i = 1; i <= count; i = i + 1) {
  const row = padRow(i, count, character);
  if (inverted) {
    rows.unshift(row); // build from top
  } else {
    rows.push(row);    // build from bottom
  }
}
```
- Toggle `inverted` to flip the pyramid.  
- `.push` appends rows in natural order; `.unshift` prepends to reverse the build.

---

## Producing the Final Text
```js
// Concatenation
let result = "";
for (const row of rows) {
  result = result + row + "\n";
}

// or, cleaner:
const resultAlt = rows.join("\n") + "\n";
```
- `join("\n")` is concise and avoids string churn inside a loop.

---

## Final Working Program
```js
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber)
       + character.repeat(2 * rowNumber - 1)
       + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i = i + 1) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";
for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
```

### Optional DOM Render (for CodePen)
```html
<pre id="pyramid"></pre>
```
```js
document.getElementById("pyramid").innerText = result;
```
- Swap `console.log` for DOM injection to show the pyramid on the page.  
- Style the `<pre>` with CSS (monospace, centering, glow) for a polished look.

---

## Takeaway
- Variables: `let`/`const`, `undefined`.  
- Arrays: indexing, `.length`, mutation, `.push/.pop/.unshift`.  
- Loops: `for`, `for...of`.  
- Strings: `+`, `\n`, `.repeat`, join with `\n`.  
- Abstraction: `padRow` to encapsulate row formatting.  
- Inversion: choose `.push` or `.unshift` to control build direction.

This notebook stays concise and evolves with the project—add only new syntax/purpose as needed.
