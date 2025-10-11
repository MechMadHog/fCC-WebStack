# Statistics-Calculator-Comments.md

## Overview
Small browser app that takes a comma-separated list of numbers, cleans the input, then computes mean, median, mode, range, variance, and standard deviation. I focused on clean, reusable functions and modern JavaScript patterns.

## What I built
- Pure utility functions:
  - `getMean`, `getMedian`, `getMode`, `getRange`, `getVariance`, `getStandardDeviation`
- A `calculate()` controller that parses input, calls the utilities, and renders results to the DOM.

## Key JavaScript skills I practiced
- **Arrow functions** and expression bodies for compact helpers.
- **Array methods**: `map`, `filter`, `reduce`, `sort`, spread `...` and `toSorted()` for non-mutating sorting.
- **Ternary operators** for single-line assignments.
- **Objects as frequency maps** plus `Set` for quick uniqueness checks.
- **DOM work** with `querySelector` and `textContent`.
- **Immutability mindset** by using `toSorted()` rather than mutating arrays in place.

## Input parsing & sanitation
- Split on commas and optional spaces using a small regex:  
  `value.split(/,\s*/g)`
- Cast to numbers: `map(Number)`
- Drop invalid entries: `filter(el => !isNaN(el))`  
  Result is a clean numeric array for every calculation.

## Core algorithms I implemented

### Mean
```js
const getMean = arr => arr.reduce((acc, n) => acc + n, 0) / arr.length;
```
Learned to use `reduce` for accumulation and to always divide by `arr.length` at the end.

### Median
```js
const getMedian = arr => {
  const s = arr.toSorted((a, b) => a - b);
  const n = s.length;
  return n % 2 === 0 ? getMean([s[n/2 - 1], s[n/2]]) : s[Math.floor(n/2)];
};
```
Key lesson: always compute indices from the **sorted** array length… not the original array.

### Mode
- Built a **frequency map** using an expression body + ternary:
```js
const counts = {};
arr.forEach(el => (counts[el] = counts[el] ? counts[el] + 1 : 1));
```
- Handled “no mode” by checking if all frequencies are equal:
```js
if (new Set(Object.values(counts)).size === 1) return null;
```
- Supported **multi-modal** results by filtering all values that match the highest frequency and joining them for display.

### Range
```js
const getRange = arr => Math.max(...arr) - Math.min(...arr);
```
Refreshed use of spread with `Math.max` / `Math.min`.

### Variance & Standard Deviation
```js
const getVariance = arr => {
  const mean = getMean(arr);
  return arr.reduce((acc, n) => acc + (n - mean) ** 2, 0) / arr.length;
};
const getStandardDeviation = arr => Math.sqrt(getVariance(arr));
```
Good practice in chaining helpers and keeping functions single-purpose.

## Refactoring wins
- Converted imperative `if…else` updates to a **ternary assignment** inside `forEach`.
- Switched to `toSorted()` to avoid mutating the input. This made helpers safer and easier to test.
- Centralized shared work… e.g., `getStandardDeviation` reuses `getVariance`, and median for even length reuses `getMean`.

## Edge cases I accounted for
- **Non-numbers** are ignored during parsing.
- **No mode** condition returns `null` rather than a misleading number.
- **Multiple modes** are joined as a comma-separated string.
- Sorting is numeric, not lexicographic.
- Potential improvements for later: handle empty input with friendly messages, allow whitespace-only input, and show precision with `toFixed`.

## DOM integration
- Pulled input with `#numbers`
- Rendered results into `#mean`, `#median`, `#mode`, `#range`, `#standardDeviation`
- Kept calculation logic completely separate from rendering logic… easier to port this to another UI later.

## What I’d improve next
- Add input validation messages and error states.
- Let users choose **population vs sample** variance/standard deviation (divide by `n` vs `n - 1`).
- Add rounding controls… e.g., a select for decimal places.
- Unit tests for each helper with a small test harness.
- Accessibility touches: labels, live region for results.

## Takeaways
- Clean data first… everything else gets easier.
- Prefer pure, composable functions and avoid side effects.
- Immutability plus small helpers = simple reasoning and safer refactors.
- Modern JS tools like `toSorted`, `Set`, and arrow functions make these classic statistics tasks concise and readable.
