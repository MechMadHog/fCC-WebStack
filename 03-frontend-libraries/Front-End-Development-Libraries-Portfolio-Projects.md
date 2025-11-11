# Front End Development Libraries, Portfolio Projects

**FreeCodeCamp Certificate 03: Front End Development Libraries (In Progress)**  
[View Certificate](#)

🧠 This is my third FreeCodeCamp certificate.  
If the first proved I could **build** the house (HTML/CSS) and the second wired it with **logic** (JavaScript), this one is about lighting it up;bringing color, motion, and interactivity through libraries and frameworks.

Here I move from raw DOM scripting into the tools that power real front-end apps: **React**, **Redux**, **Bootstrap**, and **SASS**. Each project is about state, data-flow, and user experience... how components render, respond, and evolve.

Like before, I treat the base assignments as **scaffolds** / foundations to customize and expand into portfolio pieces that feel alive and expressive.

---

## 1. 🟡 Random (Simpsons) Quote Machine  
**Origin:** FCC Random Quote Machine  
**Project:** [Simpsons Quote Machine](https://codepen.io/Mike-MacDonagh/pen/KwVjwzy)  

**What I learned:**  
- Built a React 17 app to avoid known testing issues with React 18’s root API.  
- Managed local state for quote and author, rendered dynamically.  
- Created a **Simpsons-themed UI** using bright yellows, teal accents, and cartoon clouds.  
- Used a **local quotes array** for reliability instead of unstable APIs.  
- Styled purely with **CSS** to capture the show’s flat-toon aesthetic while keeping all FCC test IDs intact.  

---

## 2. 📝 Markdown Previewer  
**Origin:** FCC Markdown Previewer  
**Project:** [Markdown Previewer](https://codepen.io/Mike-MacDonagh/pen/KwVOPrL)  

**What I learned:**  
- Built a React 17 app with a controlled `<textarea id="editor">` that live-renders into `<div id="preview">` using **Marked**.  
- Enabled **GitHub-flavored Markdown** with `gfm: true` and single-newline support via `breaks: true`.  
- Designed a **light UI theme** (purple, greys, white) with a clean split-view layout, responsive grid, and accessible focus states.  
- Wrote a **Markdown Cheatsheet** as the default text, meeting all FCC requirements (H1/H2, link, inline code, code block, list items, blockquote, image, bold). Used my own avatar image for the example.  
- Safely rendered HTML with `dangerouslySetInnerHTML` using Marked output and preserved exact FCC IDs/test hooks.  

---

## 3. 🥁 Drum Machine  
**Origin:** FCC Drum Machine  
**Project:** [Drum Machine](https://codepen.io/Mike-MacDonagh/pen/EaKYVOX)  

**What I learned:**  
- Built an interactive **React 17** app that plays audio clips mapped to both on-screen buttons and keyboard keys.  
- Managed **state and event handling** to display the active sound name and trigger playback dynamically.  
- Implemented **keyboard listeners** for responsive real-time drumming using `useEffect` for cleanup and performance.  
- Designed a **bold arcade-style UI** with strong contrast, teal accents, and tactile button feedback.  
- Ensured **FCC test compliance** by keeping exact `id` attributes and accessible button elements.  
- Structured and styled the layout with pure **CSS Grid** to maintain clarity and rhythm-machine alignment.  

---

## 4. 🧮 JavaScript Calculator  
**Origin:** FCC JavaScript Calculator  
**Project:** [JavaScript Calculator](https://codepen.io/Mike-MacDonagh/pen/YPqKyRj)  

**What I learned:**  
- Built the interface with **jQuery** for DOM logic and **Bootstrap** for layout and responsive styling.  
- Tracked both the current entry and the full expression to handle chained operations cleanly.  
- Implemented **AC** and **CE**, guarded against duplicate decimals, and handled leading zeros correctly.  
- Normalized consecutive operators and computed results on `=` to match typical calculator behavior.  
- Kept IDs and test hooks exact for FCC while keeping the UI accessible and keyboard friendly.  

---

## 5. ⏱️ 25 + 5 Clock (Pomodoro)
**Origin:** FCC 25 + 5 Clock  
**Project:** [Pomodoro Clock](https://codepen.io/Mike-MacDonagh/pen/MYygaZe)

**What I learned:**
- Implemented **session** and **break** lengths with bounds and live UI sync (increments/decrements disabled at runtime).
- Built a reliable **countdown** that survives pauses/resumes without drift; resets to default on command.
- On reaching 00:00, plays an **audio beep** exactly once and switches between session ↔ break automatically.
- Kept logic predictable with a single **state machine** (Idle → Running → Paused → Switch), avoiding race conditions.
- Added an **animated circular progress** ring tied to remaining seconds, and accessible labels/aria-live for screen readers.
- Ensured full keyboard support (space = start/pause, r = reset) and **mobile-friendly** layout.


---

## 🎓 Conclusion
This certificate is where logic gets restructured. 
By the end of it, I’ll have built five complete React apps that not only pass FCC’s tests but stand alone as cohesive, themed experiences;each showing how I can use libraries as creative instruments, not crutches.
