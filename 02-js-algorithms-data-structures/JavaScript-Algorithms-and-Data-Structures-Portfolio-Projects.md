# JavaScript Algorithms and Data Structures — Portfolio Projects

**FreeCodeCamp Certificate 02: JavaScript Algorithms and Data Structures (In Progress)**  
[View Certificate](#)  

🧩 This is my second FreeCodeCamp certificate.  
Here the focus shifts from *design and layout* to **pure programming**: solving problems, building algorithms, and implementing data structures with JavaScript.  

Many of these projects will start small and practical — validators, converters, and calculators — but the goal, as with my first certificate, is to **expand and customize** each one into something that feels like a true portfolio piece.  

## 📚 Sub-Projects
Alongside the main certificate projects, I’ll be creating smaller apps and experiments with JavaScript:  

---

## 1. 🔁 Palindrome Checker
**Origin:** FCC Palindrome Checker  
**Project:** [Palindrome Checker](https://codepen.io/Mike-MacDonagh/pen/qEbZBaR)  
**What I learned:**
- Translate user stories into exact elements and behaviors: `#text-input`, `#check-btn`, `#result`, alert on empty input
- Clean input with a simple regex to ignore punctuation, spaces, case... reuse skills from Calorie Counter
- Compare normalized text by reversing a string with basic array methods
- Keep output wording exact so tests pass... `${original} is a palindrome.` or `${original} is not a palindrome.`
- Wire events the simple way: `addEventListener('click')` and handle `submit` for keyboard users
- Accessibility first: labeled inputs, `aria-live` result, high contrast focus styles
- Light “Alice in Wonderland” theme while keeping readability and contrast strong


- **1.1 Pyramid Generator →** *Retro CRT Pyramid Console*  
  [Pyramid Generator](https://codepen.io/Mike-MacDonagh/pen/qEOvBap)  
  *Learned: JS basics (loops, strings), DOM buttons to run code, `<pre>` to preserve spacing, height slider & character input, plus an inverted toggle—all wrapped in an 80s/90s CRT theme.*
  
- **1.2 Gradebook App →** *Handwritten Copybook Gradebook*  
  [Gradebook App](https://codepen.io/Mike-MacDonagh/pen/wBKZGym)  
  *Learned: parsing text input into scores, mapping results through conditional grading logic, and wiring it into the DOM with HTML/CSS. Styled to look like a school copybook to match the gradebook theme.*

- **1.3 Role-Playing Game →** *Echoes Beyond the Rift*  
  [RPG](https://codepen.io/Mike-MacDonagh/pen/jEbgZmy)  
  *Learned: reskinning a JS game without adding complexity, managing state for themed stats, swapping locations through a locations array, 4-button grid UI, random event hooks for the Easter egg, and a simple modal for story and instructions.*
 
- **1.4 Random Background Color Changer →** *Lightbulb Switch*  
  [Lightbulb](https://codepen.io/Mike-MacDonagh/pen/XJXrMGp)  
  *Learned: debugging basic JS errors (array commas, Math case, querySelector syntax), connecting a button to trigger style changes, practicing switch logic by toggling classes, and applying the idea to an SVG lightbulb for a visual on/off effect.*  

- **1.5 Calorie Counter →** *Health App Tracker*  
  [Calorie Counter](https://codepen.io/Mike-MacDonagh/pen/RNrwKgP)  
  *Learned: regex input cleaning; NodeList loops with `item.value`; live meal totals and hydration; exercise add back; 24 hour fast toggle; auto TDEE targets.*

- **1.6 Rock Paper Scissors Game →** *Best of 5 Click Duel*  
  [Rock Paper Scissors](https://codepen.io/Mike-MacDonagh/pen/bNENBBZ)  
  *Learned: simple JS loop (click → compute → update); small helper functions (`getRandomComputerResult`, `hasPlayerWonTheRound`); DOM updates with `innerText`; score state with first to 3 win check; end message and reset button.*

- **1.7 Music Player** → *JJ & Derek Mixtape Player*  
  [Music Player](https://codepen.io/Mike-MacDonagh/pen/dPGGjRZ)  
  *Learned: adapting FCC starter into my own style; swapping demo tracks for 5 originals from my jsDelivr CDN; fixing display update bug; preloading durations from metadata; styling with CRT-inspired neon theme and custom album art from Westmeath.* 

---

## 2. 🔢 Roman Numeral Converter  
**Origin:** FCC Roman Numeral Converter  
**Project:** [RomaNumeral Converter](https://codepen.io/Mike-MacDonagh/pen/ZYQeZBm)  
**What I learned:**  
- Followed all FCC user stories exactly — handling invalid, low, and high numbers with clear messages  
- Built a clean conversion loop using a value/symbol map instead of nested conditionals  
- Reused validation and DOM logic from previous projects (Palindrome Checker, Binary Converter)  
- Learned how small helper functions keep logic readable and test-safe  
- Re-skinned my Greek “PhiloDuel” theme into a Roman variant — bronze, marble, deep red, and Cinzel type for an imperial look  


- **2.1 Date Formatter** → *Retro Date Utility*  
  [Date Formatter](https://codepen.io/Mike-MacDonagh/pen/RNraPar)  
  *Learned: FCC JS 2nd section project; rebuilt into a CRT-themed utility with boot-up typewriter effect, green phosphor glow, scanlines, and flicker; added extra formats (ISO 8601, UNIX timestamp, weekday, locale long); made live formats auto-update like a terminal command.*  

- **2.2 Football Team Cards** → *HABS Roster Cards*  
  [Montreal Canadiens Cards](https://codepen.io/Mike-MacDonagh/pen/RNrRjvQ)  
  *Learned: took the FCC Football Team Cards project and re-skinned it for the Montreal Canadiens… swapped football positions for hockey roles… added a top-centered Habs logo… pulled player headshots from my jsDelivr CDN with a fallback image and versioned cache-busting… added a captain badge, nickname filter, and position filters… styled everything in Habs red/blue/white to match the brand.*  

- **2.3 To-Do App** → *Mixtape Playlist Maker*  
  [Playlist Maker](https://codepen.io/Mike-MacDonagh/pen/pvgNprM)  
  *Learned: took FCC’s basic To-Do app logic (add, edit, delete, localStorage) and flipped it into something I’d actually use — a playlist builder; swapped “tasks” for tracks (title, artist, notes/links); styled it like a Spotify clone but in my brand (purple + dark grey); added search bar to filter tracks; future plans include album art, audio previews from jsDelivr CDN, and drag-and-drop reordering.*  

- **2.4 Decimal to Binary Converter** → *Futuristic Number Translator*  
  [Decimal → Binary Converter](https://codepen.io/Mike-MacDonagh/pen/LEGWaPr)  
  *Learned: rebuilt FCC’s recursive converter into a clean, robotic-themed UI with neon cyan accents; added full input sanitization so you can’t enter minus numbers, decimals, or scientific notation — only whole numbers 0 and up; added a call-stack animation when input is 5 to show how recursion unwinds; refined layout into a flat futuristic card design for clarity and style.*  

---

## 3. ☎️ Telephone Number Validator
**Origin:** FCC Telephone Validator.  
**Project:** [CodePen](https://codepen.io/Mike-MacDonagh/pen/zxrPrEE)  
**What I learned:**  
- Followed all FCC user stories exactly — including alerts, clear/reset functionality, and accurate valid/invalid feedback  
- Built a reliable regex to handle every U.S. number format (`555-555-5555`, `(555)555-5555`, `1 (555) 555-5555`, etc.)  
- Reused validation and DOM logic from earlier projects (Roman Numeral Converter, Spam Filter)  
- Practiced event-driven programming with multiple buttons and Enter key handling  
- Styled with my signature **Retro CRT theme** — neon green phosphor text, scanlines, vignette, and glowing diagnostic-terminal feel  


- **3.2 Spam Filter** → *Comment Moderation Terminal*  
  [Troll Detector](https://codepen.io/Mike-MacDonagh/pen/ogbWBPV)  
  *Learned: evolved the FCC spam filter logic into a regex-based “troll detector” that scores toxicity and highlights problem phrases; designed with a retro CRT moderation console theme (green phosphor glow, scanlines, neon edges); added multi-category detection — profanity, insults, threats, shout typing, punctuation spam, elongated words, emoji floods, and link/mention bait — all rendered with heat scoring and live text highlighting.*
 
- **3.3 Number Sorter** → *Mixtape Sorter*  
  [Mixtape Sorter](https://codepen.io/Mike-MacDonagh/pen/XJXgdPX)  
  *Learned: applied number-sorting logic (Bubble, Selection, and Insertion Sort) to real data — sorting actual synthwave tracks by title, artist, or album. Reinforced algorithmic thinking by translating numeric comparison into string-based `localeCompare`, demonstrating loops, swaps, and control flow through a neon UI inspired by Sega CRT and vaporwave aesthetics.*
  
- **3.3 Statistics Calculator** → *D&D Dice Lab*  
  [D&D Dice Lab](https://codepen.io/Mike-MacDonagh/pen/PwZjgjZ)  
  *Learned: same stats engine under the hood — I parse dice like `3d6` or `1d20+5` into numbers, then run mean/median/mode, range, variance, and SD exactly like my calculator. Added a per-die vs per-pool toggle, DC success and d20 crit rates, a friendly instructions modal, and custom “scribble” radio buttons — all in a handwritten copybook UI that matches my Gradebook vibe.*

- **3.4 Spreadsheet** → *Budget Tracker*  
  [Budget Tracker](https://codepen.io/Mike-MacDonagh/pen/LEGzPxY)  
  *Learned: expanded the original FCC Spreadsheet logic into a fully functional Budget Tracker — retaining its regex-based formula engine (`=sum(A1:B3)` parsing, range expansion, and operator precedence) while applying it to real-world financial data. Built using pure HTML, CSS, and Vanilla JS, it generates a dynamic A–J × 30 grid where each cell can accept plain values or formulas. Added a seeded layout for Income, Expenses, and Summary totals, along with localStorage persistence for saving and loading sessions. Reinforced DOM creation, event-driven recalculation, recursion, and regex parsing — demonstrating how spreadsheet logic can power practical apps without any frameworks or external libraries.*


---

## 4. 💰 Cash Register
**Origin:** FCC Cash Register.  
**Project:** [Link TBD]  
**What I learned:** *TBD*  

- **4.1 Shopping Cart** → *Vans Storefront*  
  [Vans Shopping Cart](https://codepen.io/Mike-MacDonagh/pen/yyePoMO)  
  *Learned: built a fully functional shopping cart from scratch, themed around Vans (my go-to shoes). Implemented product rendering, live subtotal/tax/total updates, and item counting in pure JavaScript. Each card loads 320×320 product images via my jsDelivr CDN and supports fullscreen zoom for detailed viewing. Designed a centered, responsive 4-column grid with flex-grid alignment and a smart `:has()` rule to collapse the layout when the cart is hidden. Reinforced DOM manipulation, event delegation, and dynamic UI state management — turning a basic cart demo into a polished, real-world storefront simulation.*

- **4.2 Platformer Game** → *Mouse Maze*  
  [Mouse Maze](https://codepen.io/Mike-MacDonagh/pen/myVpmxJ)  
  *Learned: started from FCC 4.2 Platformer and shipped an emoji-first prototype to focus on core mechanics instead of art. Built a vanilla JS canvas engine with a TILE grid, AABB collisions, portals, multi-room navigation, hearts for lives, traps, and cheese collectibles. Added diagonal movement normalization, a HUD overlay, mobile D-pad controls, and cooldowns for hits and teleports. Implemented emoji rendering with shape fallbacks if the system font cannot draw them. Kept files modular with zero inline JS and minimal comments. This is my third game overall and second in JavaScript... the first was a Flash platformer in ActionScript.*

- **4.3 Dice Game** → *Lucky Roll*  
  [Lucky Roll](https://codepen.io/Mike-MacDonagh/pen/zxrpXaZ)  
  *Learned: built from scratch following the FCC 4.3 Dice Game project. Implemented randomized dice rolls using `Math.random()` and dynamic DOM updates for each face. Added a simple scoring system that rewards doubles and penalizes mismatches, along with a live credit counter. Focused on clean, modular JavaScript — handling state, event listeners, and result evaluation in separate functions. This project served as the foundation for the logic later used in my Casino Slot Machine, proving how dice mechanics can scale into larger randomized game systems.*


---

## 5. 🧙 RPG Creature Search App
**Origin:** FCC final project (custom expansion).  
**Project:** [Link TBD]  
**What I learned:** *TBD*  

- **5.1 Authors Page** → [Link TBD]  
- **5.2 Forum Leaderboard** → [Link TBD]  

---

## 🎓 Conclusion
This section will eventually summarize the **core skills** I developed across the 5 major projects and 20+ sub-projects:  
- Algorithm design and problem-solving  
- Working with arrays, objects, and strings  
- Regular expressions  
- DOM manipulation with JavaScript  
- Building interactive applications  

---

## 🚀 Next Step
After this, I’ll move on to **Front End Development Libraries** — integrating JavaScript with frameworks and UI libraries to create full interactive web apps.
