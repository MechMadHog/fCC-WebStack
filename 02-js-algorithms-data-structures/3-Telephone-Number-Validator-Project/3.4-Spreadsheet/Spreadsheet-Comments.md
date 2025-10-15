# Spreadsheet-Comments.md

## Overview
A spreadsheet that evaluates Excel-style formulas you type into cells. It expands cell/range references, applies built-in functions (sum, average, median, etc.), and respects operator precedence for `*` and `/` before `+` and `-`. The grid is generated in the DOM (A…J × 1…99), and formulas recalculate on change.

## What I built
- A recursive **formula engine** that:
  - Expands ranges like `A1:B3`
  - Resolves cell refs like `C7`
  - Evaluates high-precedence infix ops (`*` and `/`) first, then `+` and `-`
  - Applies whitelisted spreadsheet functions
- A small **function library**:
  - `sum`, `average`, `median`, `even`, `someeven`, `everyeven`, `firsttwo`, `lasttwo`, `has2`, `increment`, `random`, `range`, `nodupes`, and a passthrough
- A dynamic **A–J / 1–99 grid** with inputs and labels

## Key JavaScript skills I practiced
- **Regex-driven parsing** for ranges, cells, infix math, and function calls
- **Recursion** for repeated evaluation until a formula is fully reduced
- **Higher-order functions** and object maps for operator and function dispatch
- **Array methods**: `map`, `reduce`, `filter`, `some`, `every`, `slice`, `includes`
- **Sets** for duplicate removal and simple dedupe logic
- **DOM creation** and event handling without frameworks

## Parsing & evaluation pipeline
1. **Expand ranges** like `A1:C2` into the concrete cell IDs:
   - Range regex: `/([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi`
   - Build letter and number sequences, then cartesian-map to cell IDs.
2. **Expand cell refs** `A10` → the input’s current value:
   - Cell regex: `/[A-J][1-9][0-9]?/gi`
3. **Apply functions** such as `sum(1,2,3)`:
   - Function call regex: `/([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i`
   - Only executes if the name exists in `spreadsheetFunctions` (safe whitelist).
4. **Evaluate infix math**:
   - First pass, high precedence: `/([0-9]+)([*/])([0-9]+)/`
   - Then `+` and `-`: `/([\d.]+)([+-])([\d.]+)/`
   - Operator dispatch via an object map, not `eval`.

The engine keeps re-running these steps until the string stops changing… then returns the final value.

## Core helpers

### Operator dispatch
```js
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};
```

### Higher-precedence loop
```js
const highPrecedence = str => {
  const regex = /([0-9]+)([*/])([0-9]+)/;
  const str2 = infixEval(str, regex);
  return str2 === str ? str : highPrecedence(str2);
};
```

### Function whitelist (excerpt)
```js
const spreadsheetFunctions = {
  sum, average, median,
  even: nums => nums.filter(isEven),
  someeven: nums => nums.some(isEven),
  everyeven: nums => nums.every(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(n => n + 1),
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  range: nums => range(...nums),
  nodupes: nums => [...new Set(nums).values()],
  "": nums => nums
};
```

## Grid & DOM
- Build column labels **A…J** and rows **1…99**.
- Create `<input>` per cell, id is its address (e.g., `D42`), and attach `onchange`.
- On change… strip spaces, prevent self-reference loops, and if the first char is `=`, evaluate the formula and write the result back to the cell.

## Edge cases handled
- **Self reference guard**: if the formula contains the cell’s own ID, skip evaluation to avoid recursion traps.
- **Whitespace** is removed before parsing so users can write `= sum( 1, 2 )`.
- **Unknown function names** are left as-is… only whitelisted names execute.
- **Operator precedence**… `2+3*4` yields `14` not `20`.

## Things to improve next
- Error states… e.g., show `#ERR` for invalid formulas rather than doing nothing.
- Decimal safety… treat both sides of infix ops as floats in the high-precedence phase, not just the low-precedence one.
- More functions… `min`, `max`, `count`, `round`, `if`, `abs`, `pow`, `sqrt`.
- Circular reference detection across cells (not just same-cell checks).
- Recalc on dependency change… dirty-flagging or a simple topological pass.
- Keyboard UX… arrow-key navigation, Enter to move down.

## Takeaways
- Regex + recursion gives a compact evaluation pipeline… no need for a full parser yet.
- Mapping operators and function names to real functions keeps it safe and easy to extend.
- Expanding ranges/cells first makes function application and math straightforward.
- Whitelisting function names is a simple “sandbox” approach for user formulas.
