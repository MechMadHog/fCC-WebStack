# Role-Playing-Game-Comments.md

## Project Overview  
This project is a simple browser-based role-playing game called **Dragon Repeller**. The goal is to explore, fight monsters, and eventually defeat the dragon. The player starts in the town square with **50 gold**, **100 health**, and **0 XP**.

I built it using **HTML, CSS, and JavaScript**, and learned how these three layers work together to create interactive browser games.

---

## What I Learned

### HTML  
- How to structure the game interface with:
  - A **stats panel** (`XP`, `Health`, `Gold`).  
  - **Control buttons** (`Go to store`, `Go to cave`, `Fight dragon`).  
  - **Monster stats** section that only appears during battles.  
  - A **main text area** for narration and instructions.  
- How to link an external stylesheet and script.  
- How to organize different UI elements inside `div` containers.  

### CSS  
- How to **style game sections** to look like distinct panels:
  - `#stats` and `#controls` with borders and padding.  
  - `#monsterStats` with a red background to indicate danger.  
- Used **colors and gradients** for buttons to make them stand out.  
- Controlled **visibility** with `display: none;` so monster stats only show in combat.  
- Limited **width and height** for the game window to make it look like a fixed-size screen.

### JavaScript  
This is where most of the logic happens.  

#### Variables and State  
- Declared variables for **xp, health, gold, inventory, weapons, and monsters**.  
- Learned how to keep **game state** updated dynamically with DOM manipulation.  
- Stored **inventory items** in an array and pushed/popped weapons as the player upgraded or sold them.  

#### Query Selectors & DOM Updates  
- Used `document.querySelector` to grab HTML elements by ID.  
- Updated stats dynamically:  
  ```js
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  ```
- Changed button text and functionality depending on location.

#### Objects and Arrays  
- Defined **weapons** and **monsters** as arrays of objects.  
- Created a **locations array** with button text, functions, and narration all grouped together.  
  - Example: `town square`, `store`, `cave`, `fight`, `win/lose screens`, `easter egg`.  
- This taught me how to keep related data and actions together.

#### Functions & Game Flow  
- Functions to move between locations: `goTown()`, `goStore()`, `goCave()`.  
- Functions for combat: `fightSlime()`, `fightBeast()`, `fightDragon()`.  
- `attack()` function:
  - Subtracts health based on monster level.  
  - Reduces monster health if the attack hits.  
  - Checks for win/lose conditions.  
  - Includes random chance for weapons to break.  
- Created helper functions:
  - `getMonsterAttackValue(level)` (uses ternary operator).  
  - `isMonsterHit()` (uses random chance and current health).  

#### Conditions & Loops  
- Used `if/else` statements to handle win/loss logic, buying/selling items, and checking inventory.  
- Used a **while loop** and `Math.random()` in the easter egg mini-game to generate 10 random numbers.  

#### Extra Features  
- **Buying and selling system**: player can buy health, upgrade weapons, or sell items.  
- **Replay system**: after winning or losing, buttons reload the game.  
- **Easter egg mini-game**: a number guessing game hidden after defeating monsters.  

---

## Key Takeaways  
- I now understand how to connect **HTML structure, CSS design, and JavaScript logic** into a working game.  
- Learned how to **update the DOM dynamically** with JavaScript.  
- Practiced using **arrays, objects, functions, loops, and conditionals**.  
- Learned how to manage **state and game flow** (health, xp, gold, inventory, locations).  
- Built a foundation for creating more advanced games or interactive web apps.  
