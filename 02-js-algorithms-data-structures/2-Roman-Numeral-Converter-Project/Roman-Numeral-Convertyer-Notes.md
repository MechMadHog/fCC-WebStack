# 🏛 Roman Numeral Converter — Notes

## Origin
Based on the **FreeCodeCamp "Roman Numeral Converter"** project from the JavaScript Algorithms & Data Structures certification.

## User Stories Recap
- Input element with ID `number`.  
- Button element with ID `convert-btn`.  
- Output element with ID `output`.  
- When no input → show “Please enter a valid number”.  
- When number < 1 → show “Please enter a number greater than or equal to 1”.  
- When number ≥ 4000 → show “Please enter a number less than or equal to 3999”.  
- When valid input → display the correct Roman numeral (e.g. 9 → IX, 16 → XVI, 649 → DCXLIX, etc).

## What I Used / Learned
I reused logic from my earlier JS projects:
- **Validation flow** from *Palindrome Checker* (checking empty and invalid input).  
- **Conditional outputs** from *Decimal to Binary Converter* (different responses depending on user input).  
- **Clean function structure** from *Date Formatter* and *To-Do App* (separating core logic from DOM handling).  
- **Loop logic** similar to *Music Player* (iterating over arrays cleanly).

The main challenge was mapping numbers to Roman numeral symbols while keeping it readable.  
I used an array of `{ value, numeral }` pairs, then looped through to build the final string.

```js
const map = [
  { v: 1000, r: "M" }, { v: 900, r: "CM" }, { v: 500, r: "D" },
  { v: 400, r: "CD" }, { v: 100, r: "C" },  { v: 90, r: "XC" },
  { v: 50, r: "L" },   { v: 40, r: "XL" },  { v: 10, r: "X" },
  { v: 9, r: "IX" },   { v: 5, r: "V" },    { v: 4, r: "IV" },
  { v: 1, r: "I" }
];
```

Then I subtracted each value while adding its symbol to the output until the number reached zero.  
This made it easy to follow, efficient, and met every test condition exactly.

## Styling & Design Choices
I reused the **PhiloDuel — Ancient Greece** aesthetic but tuned it to fit **Ancient Rome**:
- Swapped marble-white and papyrus tones for a **bronze and dark red** palette (`#a37a3f` and `#7a1f1f`).  
- Replaced the Greek text pattern with an **SPQR** repeating header background.  
- Kept the same **Cinzel** font for that carved stone look.  
- Maintained the minimalist card layout, rounded borders, and subtle paper gradient.  

The look is now warmer, heavier, and more imperial — fitting the Roman theme perfectly.

## Summary
This project connected:
- **JS fundamentals**: arrays, loops, validation, string building.  
- **DOM interaction**: reading inputs, handling events, output styling.  
- **Design cohesion**: evolving my earlier Greek aesthetic into a Roman variant.  

It feels like a natural continuation of the FCC JavaScript series — each project layering skills from the last while refining both code and style.
