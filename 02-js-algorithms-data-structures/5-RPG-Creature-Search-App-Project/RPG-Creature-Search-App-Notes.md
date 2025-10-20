# 🧬 RPG Creature Search App — Notes

## Origin
Based on the **FreeCodeCamp “RPG Creature Search App”** project from the JavaScript Algorithms & Data Structures certification.  
This project marks the transition from pure logic challenges into **API-driven UI** — combining DOM control, fetch requests, and error handling in one.

## User Stories Recap
- Input element with ID `search-input` (**required**).  
- Button element with ID `search-button`.  
- Output elements for each creature property:  
  - `#creature-name`  
  - `#creature-id`  
  - `#weight`  
  - `#height`  
  - `#types`  
  - `#hp`  
  - `#attack`  
  - `#defense`  
  - `#special-attack`  
  - `#special-defense`  
  - `#speed`  
- When user searches for **invalid** names (e.g., “Red”), show an **alert** → `"Creature not found"`.  
- For valid entries:
  - `"Pyrolynx"` should display correct stats and a single **type**: FIRE.  
  - `"2"` should display correct stats and two **types**: WATER, ROCK.  
- Each new search **clears** previous type elements.  
- The app must **fetch data** from:  
  `https://rpg-creature-api.freecodecamp.rocks/api/creature/{name-or-id}`  

## What I Used / Learned
This project ties together **asynchronous JavaScript**, **API integration**, and **DOM manipulation**.

- Used `fetch()` + `async/await` to retrieve JSON data from an external API.  
- Implemented **error handling** with `try/catch` and `alert("Creature not found")`.  
- Practiced **data mapping**: pulling specific fields from nested JSON objects.  
- Built helper functions:
  ```js
  function setText(el, value) {
    el.textContent = value;
  }
  function typeChip(txt) {
    const span = document.createElement("span");
    span.className = "type";
    span.textContent = txt.toUpperCase();
    return span;
  }
  ```
- Learned to **clear and rebuild** content dynamically (`typesEl.innerHTML = ""`).  
- Used modular DOM updates (`setBasics`, `setStats`, `setTypes`) to keep code organized.  
- Strengthened understanding of **API schema**, **case-insensitive input**, and **response validation**.

This reinforced asynchronous patterns:
```js
async function fetchCreature(query) {
  const endpoint = API_ONE + encodeURIComponent(query.toLowerCase());
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Creature not found");
  return res.json();
}
```
and reliable event handling:
```js
form.addEventListener("submit", handleSearch);
btn.addEventListener("click", handleSearch);
```

## Styling & Design Choices
The interface follows a **blue–purple cyberpunk** aesthetic:
- Neon glow gradients with a glassy panel effect.  
- Retro header font (“Press Start 2P”) for arcade feel.  
- Creature card layout: image, info, and stat grid.  
- Animated focus rings on inputs and neon button effects.  
- Responsive structure using flex and grid for alignment.  
- Pill-shaped type badges and stat boxes with subtle inner shadows.

This design ties in with the overall **MechMadHog cyberpunk** theme —  
clean UI, readable data, and strong neon visual cues.

## Summary
The RPG Creature Search App introduced **real API communication** and **UI data rendering**.  
It blends everything learned from earlier FCC logic projects and moves toward interactive app design:
- **Fetch + DOM** workflows.  
- **Error handling and validation.**  
- **Dynamic element generation.**  

This project feels like a small real-world app — an early step toward more complex tools like your planned **Aggravation Scorekeeper** and **Walter’s game utilities**.
