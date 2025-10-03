# ⚽ Football Team Cards – JS Comments & Notes

**Origin:** FCC JavaScript Course – *Objects, Arrays, and DOM Manipulation by Building a Team Cards App*  

---

## What I Covered in JavaScript

- **Team Object**
  - Built `myFavoriteFootballTeam` with nested data:
    - `team`, `sport`, `year`, `isWorldCupWinner`.
    - `headCoach` object → `coachName` and `matches`.
    - `players` array of objects → each with `name`, `position`, `number`, `isCaptain`, `nickname`.
  - Froze the object with `Object.freeze()` to prevent changes.

- **Destructuring**
  - Pulled out `sport`, `team`, `year`, `players` directly.
  - Accessed nested data (`coachName`) from `headCoach`.

- **DOM Updates**
  - Inserted `sport`, `team`, `year`, `headCoach` into the page via `.textContent`.  
  - Built `setPlayerCards(arr)` function:
    - Used `.map()` to return a template literal of player cards.
    - Conditional logic inside the template:
      - `isCaptain ? "(Captain)" : ""`
      - `nickname ? nickname : "N/A"`
    - Joined with `.join("")` to flatten the array of strings into valid HTML.
    - Appended to `playerCards` container.

- **Filtering Players**
  - Dropdown menu triggers `change` event listener.
  - Clears player cards with `innerHTML = ""`.
  - Switch statement filters players by:
    - `"nickname"` → only players with nicknames.
    - `"forward"`, `"midfielder"`, `"defender"`, `"goalkeeper"`.
    - Default → shows full team.
  - `.filter()` returns the matching subset, then passed into `setPlayerCards()`.

---

## Key Learnings

- How to **model real-world data** in nested objects/arrays.  
- Importance of **immutability** with `Object.freeze()`.  
- Practice with **destructuring** to simplify property access.  
- Rendering arrays of objects into DOM elements with `.map().join("")`.  
- Filtering logic with `.filter()` tied to dropdown selections.  
- Conditional rendering inside template literals.  

---

## Next Steps / Ideas

- Add player images to each card.  
- Highlight the captain’s card differently (style or badge).  
- Allow multi-filtering (e.g., nicknames + defenders).  
- Replace static data with a fetched JSON dataset.  
