# Pyramid Generator – Syntax & Purpose Notes

This file tracks the **essential concepts** learned while preparing for the Pyramid Generator project.  
Focus: syntax and purpose. No unnecessary repetition.

---

## Variables
```js
let character = 'Hello';
```
- `let` declares block-scoped variables.  
- Uninitialized variables default to `undefined`.  

```js
let profession = "teacher";
let age;
```
- Strings in quotes.  
- Variables can be declared without initialization → `undefined`.  

---

## Arrays
```js
let rows = [1, 2, 3];
```
- Arrays are **mutable**.  
- Zero-indexed: first element = index `0`, last element = `length - 1`.  

```js
rows[2] = 10;                // update by index
rows[rows.length - 1] = 10;  // update last element dynamically
```

```js
let cities = ["London", "New York", "Mumbai"];
cities[cities.length - 1] = "Mexico City";
```
- Example of mutating last element in a string array.  

---

## Array Methods
```js
rows.push("freeCodeCamp"); // adds to end, returns new length
rows.pop();                // removes last element, returns removed value
```
Purpose:  
- `.push()` → grow the array.  
- `.pop()` → shrink the array and capture removed value.  

---

## Loops

### For loop
```js
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}
```
- Iterates from `0` to `count - 1`.  
- `i = i + 1` increments each loop.  
- `.push(i)` grows the array with each iteration.  

### For...of loop
```js
for (const row of rows) {
  result = result + row + "\n";
}
```
- Iterates through each value in `rows`.  
- Concatenates values to `result`, adding newline with `\n`.  

### .repeat()
```js
rows.push(character.repeat(i + 1));
```
- Repeats a string `i + 1` times to build pyramid rows.  
- `+1` fixes off-by-one error (avoids empty row).  

---

## Functions

### Declaring a function
```js
function padRow() {

}
```
- Declares reusable block of code in camelCase.  
- Function body will hold logic later.  

### Calling a function
```js
const call = padRow();
```
- Functions return a value (`undefined` if no `return`).  
- Assigning captures the result of a function call.  

---

## Takeaway
So far the essentials are:
- Declaring variables with `let` and `const`.  
- Arrays: mutability, zero-indexing, `.length`.  
- Array methods: `.push()` and `.pop()`.  
- Loops: `for`, `for...of`.  
- String methods: `.repeat()`.  
- Functions: declaration, calling, return values.  

---

📌 Next: Use `padRow` to handle pyramid formatting logic.

