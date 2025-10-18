# 🎮 Platformer Game: *Comments & Learnings*

## 🧠 What I Learned

- Recreated classic platformer movement  wher I learned to handle drawing, updating, and clearing frames efficiently using `requestAnimationFrame`.
- Built a **Player class** with realistic physics:
  - Gravity system (`velocity.y += gravity`)
  - Jumping, falling, and horizontal movement limits
  - Edge constraints (preventing leaving screen)
- Implemented **Platform and Checkpoint classes** for modular game elements:
  - Platforms provide surfaces with collision detection
  - Checkpoints trigger UI feedback and disable collision after final goal
- Designed **collision detection rules** using logical arrays (`every(rule => rule)`) to simplify complex spatial checks.
- Controlled **player movement** via keyboard events (`keydown`, `keyup`) while keeping states stored in a `keys` object.
- Applied **camera simulation** by shifting platform and checkpoint positions instead of moving the player past the center — simulating world scrolling.
- Used **conditional UI states** (`start-screen`, `checkpoint-screen`) to handle start, checkpoints, and completion messages.
- Practiced **code modularity and readability** by using ES6 classes and clear naming conventions.
- Discovered how to make gameplay responsive by introducing a **proportionalSize()** helper that adapts sprite size to window height.

---

## 🧩 Technical Highlights

- Canvas rendering and frame clearing  
- Object-oriented structure (`Player`, `Platform`, `CheckPoint`)  
- Gravity and collision logic  
- World scrolling mechanic  
- Event-driven movement  
- Checkpoint logic and game state management  
- Responsive sizing and scaling  

---

**Next Steps:**  
- Add sprites or textures for characters and platforms  
- Implement sound effects or background music  
- Add enemy / moving hazards  
- Create a restart/reset feature  
- Store checkpoint progress in `localStorage`  

---

