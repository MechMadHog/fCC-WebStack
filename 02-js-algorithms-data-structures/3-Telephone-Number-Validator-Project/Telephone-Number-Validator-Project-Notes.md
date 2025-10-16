# ☎️ Telephone Number Validator — Notes

## Origin
This my 3rd **FreeCodeCamp** DIY Project **“Telephone Number Validator”** from the JavaScript Algorithms & Data Structures certification.

## User Stories Recap
- Input element with ID `user-input`.
- Button elements with IDs `check-btn` and `clear-btn`.
- Output element with ID `results-div`.
- Alert shown when clicking “Check” with no input.
- “Clear” button removes the output text.
- Valid and invalid messages displayed as:
  - `Valid US number: {number}`
  - `Invalid US number: {number}`

## What I Used / Learned
This project built on patterns from my earlier FCC work:
- **Input validation** from *Palindrome Checker* (alert for empty input).
- **DOM updates** from *Decimal to Binary Converter* (writing to an output div).
- **Button handling** from *Roman Numeral Converter* (two clear actions: check vs. reset).
- **Regex testing** from *Spam Filter* — now used for phone number formats.

The regex ensures:
- Optional leading country code `1`
- Required 10-digit US number
- Valid area code: `(555)` or `555`
- Optional spaces or dashes between groups
- Rejects extra digits or misplaced parentheses

```js
const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;
```

## Styling & Design Choices
I reused my **Retro CRT theme** — the glowing green phosphor style that resembles an old terminal monitor:

- Neon green text (`#00e676`) with dim shadow glow  
- Subtle scanlines and vignette overlay  
- Boxy, monochrome layout to evoke a 90s “modem console” aesthetic  

Each result feels like output from a diagnostic terminal — perfect for validating data in a *retro tech* context.

---

## Summary
This project reinforced:

- **Regex mastery** — pattern recognition and validation logic.  
- **Event-driven programming** — multiple buttons and keypress handling.  
- **Clean UI feedback loop** — user action → clear message → reset state.  

It bridges the gap between logic-based projects (like the *Roman Converter*) and more real-world validation tasks, showing how regex and DOM logic combine for practical form validation.
