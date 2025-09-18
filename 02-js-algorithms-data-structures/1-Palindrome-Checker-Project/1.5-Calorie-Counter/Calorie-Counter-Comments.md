# Calorie Counter — Comments & Notes

A simple calorie budget tool that takes multiple inputs per meal/snacks/exercise, validates them, does the math, and shows a running surplus or deficit. This doc captures what I learned while building it... with a short introduction to the regex I used.

## New things I learned

### Regex 101 for this project
- **Character classes**: `[ ... ]` lets me target sets of characters in one go.  
  Example I used to *clean* input: `/(?:[+\-\s])/g` removes `+`, `-`, and whitespace.
- **Flags**: `g` means *global* (find all matches), `i` means *case-insensitive*.
- **Escaping the hyphen**: `-` can mean a range inside `[...]`, so I escaped it as `\-` or placed it first/last.
- **Simple detection**: `/\d+e\d+/i` is a quick way to spot scientific notation like `1e6`... which I chose to **reject** for clarity.
- **Validate narrow, parse generous** is the mindset... but I deliberately kept validation simple for now and focused on cleaning obvious junk.

### Input handling and DOM patterns
- **Static vs dynamic values**: reading `entryDropdown.value` at load only gives the initial option. To react to user changes, I need a `change` listener... otherwise it will always think the selection is the first one.  
- **Selecting target containers from a dropdown**: I used the dropdown value (`breakfast`, `lunch`, etc.) to target a matching `fieldset` by id, then tunneled to its `.input-container`. This keeps the add-entry flow simple and readable.
- **Building UI on the fly**: `insertAdjacentHTML("beforeend", html)` is handy for adding labeled inputs without rebuilding the whole form. I used predictable ids like `breakfast-1-calories` so labels stay tied to inputs.
- **NodeList of inputs**: Grabbing just the number fields with `#section input[type='number']` made the summing function straightforward. Looping needs to read `item.value`... not `textContent`.
- **Form submit vs default navigation**: `preventDefault()` lets me compute and show results without reloading the page.

### Data cleaning, validation, and math
- **Cleaning**: I strip `+`, `-`, and spaces before parsing. This means `  250 ` becomes `250`, and `+200` becomes `200`. Negative calories are not allowed in this version... exercise is recorded as positive and handled in the math.
- **Rejecting scientific notation**: Users sometimes type `1e6`. I block that with a quick regex so I don’t accidentally parse huge numbers by mistake.
- **Parsing**: `Number(cleaned)` gives me a number or `NaN`. I only add to the total when it’s a real number.
- **Early exit on error**: I track a simple flag and bail out of the calculation if I detect something invalid... keeps the UI from showing misleading totals.
- **Final math**: Consumed = breakfast + lunch + dinner + snacks. Remaining = budget - consumed + exercise. I show a **Deficit** when remaining is positive and a **Surplus** when it’s negative... then I display `Math.abs(remaining)` to avoid a negative sign in the UI.

### Output and reset UX
- **Status text**: I render the totals and switch visibility by toggling a `.hide` class.
- **Clear flow**: Wiping each `.input-container`, clearing the budget field, and re‑hiding the output snaps the app back to a clean state.

## Regex quick reference for future me
- **Digits only**: `/^\d+$/`
- **Int or decimal**: `/^\d+(?:\.\d+)?$/`
- **Trim and collapse spaces (use JS string ops too)**: `s.trim().replace(/\s+/g, " ")`
- **Block scientific notation**: `/\d+e\d+/i`
- **Clean obvious junk**: `/[+\-\s]/g`  → remove `+`, `-`, spaces

> I kept it minimal on purpose. When I want stricter validation later, I can swap the cleaner for a validator that only accepts `^\d+(?:\.\d+)?$` and shows a friendly message.

## Edge cases I considered
- Empty fields should count as zero... not as errors.
- Commas like `1,200` are not supported yet... could add a `replace(/,/g, "")` later.
- Negative inputs are blocked by `min="0"` on number fields, plus the cleaner stripping `-`.
- Scientific notation is blocked to avoid accidental huge values.
- Exercise is entered as a positive number... I add it back in during the final math instead of letting users type negatives.

## Future improvements
- Better validation messages instead of `alert`, and a small error list under the form.
- Accept thousands separators and regional decimal commas if I need them.
- Keyboard support polish... focus the newly added input automatically when I click “Add Entry”.
- Persist entries in `localStorage` so a refresh doesn’t lose the day’s log.
- Optional macro inputs... auto-calc calories from protein/carbs/fat if I want that later.

## Why this matters to me
I’ve used regex mostly for WordPress search/replace before. This project showed me how even tiny patterns can make input handling safer and simpler in a real app. Clean the string, reject weird formats, keep the math honest... then show a clear result. Small wins add up.
