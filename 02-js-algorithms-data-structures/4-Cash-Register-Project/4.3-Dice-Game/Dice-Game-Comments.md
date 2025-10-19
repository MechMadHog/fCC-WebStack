# Algorithmic Thinking by Building a 🎲 Dice Game

This build implements a six-round dice game using only JavaScript and DOM APIs. It rolls five dice, enables score categories based on the current roll, tracks total score and history, caps rolls per round, and resets automatically after the game ends.

---

### State & Elements
- **DOM refs:** `.die`, `#score-options input`, `#score-options span`, `#current-round`, `#current-round-rolls`, `#total-score`, `#score-history`, `#roll-dice-btn`, `#keep-score-btn`, `.rules-container`, `#rules-btn`
- **State:** `diceValuesArr`, `isModalShowing`, `score`, `round`, `rolls`

### Core Functions
- `rollDice()`  
  Generates five random integers 1–6, stores them in `diceValuesArr`, and writes each value into the corresponding `.die` element.

- `updateStats()`  
  Syncs the UI counters for `rolls` and `round`.

- `updateRadioOption(index, score)`  
  Enables a scoring radio input at `index`, sets its `value`, and writes `, score = X` into the corresponding span.

- `updateScore(selectedValue, achieved)`  
  Adds `selectedValue` to `score`, updates `#total-score`, and appends a `<li>` to `#score-history` with the category `id` and value.

- `getHighestDuplicates(arr)`  
  Builds a frequency map to find **three-of-a-kind** and **four-of-a-kind**.  
  - If 4+: enables **index 1** with `sumOfAllDice`.  
  - If 3+: enables **index 0** with `sumOfAllDice`.

- `detectFullHouse(arr)`  
  Uses a frequency map to check for one value ×3 and another ×2.  
  - If found: enables **index 2** with **25**.

- `checkForStraights(arr)`  
  Sorts and de-duplicates `arr`, joins to a string, and pattern-matches:
  - Small straight (any of `"1234"`, `"2345"`, `"3456"`): enables **index 3** with **30**.  
  - Large straight (exactly `"12345"` or `"23456"`): enables **index 4** with **40**.

- `resetRadioOptions()`  
  Disables and unchecks all radio inputs and clears all associated span texts.

- `resetGame()`  
  Resets the game state and UI:
  - `diceValuesArr = [0,0,0,0,0]`, `score = 0`, `round = 1`, `rolls = 0`
  - Writes the zeros to all `.die` elements
  - Updates `#total-score` to `0`, clears `#score-history`
  - Updates `#current-round-rolls` and `#current-round`
  - Calls `resetRadioOptions()`

### Event Listeners
- **Roll button (`#roll-dice-btn`)**
  - If `rolls === 3`: alert and block further rolls
  - Else: `rolls++`, `resetRadioOptions()`, `rollDice()`, `updateStats()`
  - Run scoring checks in order:
    1) `getHighestDuplicates(diceValuesArr)`  
    2) `detectFullHouse(diceValuesArr)`  
    3) `checkForStraights(diceValuesArr)`  
  - Finally, enable **“None of the Above”** once via `updateRadioOption(5, 0)`

- **Rules button (`#rules-btn`)**
  - Toggles `isModalShowing` and shows/hides `.rules-container`
  - Updates button text between **Show rules** / **Hide rules**

- **Keep Score button (`#keep-score-btn`)**
  - Reads the checked radio input’s `value` and `id`
  - If a selection exists:
    - Resets `rolls = 0`, increments `round`, `updateStats()`, `resetRadioOptions()`
    - Calls `updateScore(selectedValue, achieved)`
    - If `round > 6`: after a short timeout, alerts **Game Over** with the final total, then calls `resetGame()`
  - Else: alerts to select an option or roll

---

## 🧮 Categories & Index Mapping

| Index | Category              | Score Logic                              |
|------:|-----------------------|------------------------------------------|
| 0     | Three of a Kind       | `sumOfAllDice` when ≥3 of same value     |
| 1     | Four of a Kind        | `sumOfAllDice` when ≥4 of same value     |
| 2     | Full House            | `25` when 3-of-a-kind + a pair           |
| 3     | Small Straight        | `30` when any `"1234"`, `"2345"`, `"3456"` present |
| 4     | Large Straight        | `40` when `"12345"` or `"23456"`         |
| 5     | None of the Above     | `0` — enabled once per roll after checks |

---

## ✅ Key Behaviors (as implemented)

- Up to **three rolls per round**, enforced with an alert if exceeded.  
- After each roll, radios are cleared, dice are re-rendered, stats update, **then** scoring options are enabled.  
- The **“None of the Above”** option is enabled **once** per roll (refactored in the Roll handler).  
- **Six rounds** total. On completion: alert final score → `resetGame()` restores initial state.  
- Rules panel toggles with accurate button labeling.

---

## 📗 Takeaways

- Frequency maps (plain objects) are a clean way to derive combination counts.  
- Sequence detection can be simplified by **sort → unique → string → pattern match**.  
- Centralizing repeated UI updates (like “None of the Above”) removes duplication and test fragility.  
- A dedicated `resetGame()` guarantees a known clean state for replays and testing.
