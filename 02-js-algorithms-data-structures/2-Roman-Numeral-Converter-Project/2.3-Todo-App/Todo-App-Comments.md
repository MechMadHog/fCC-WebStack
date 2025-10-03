# ✅ To-Do App – JS Comments & Notes

**Origin:** FCC JavaScript Course – *Forms, Local Storage, and DOM Manipulation by Building a To-Do App*  

---

## What I Covered in JavaScript

- **Data & State**
  - Tasks stored in `taskData` array, synced with `localStorage`.
  - `currentTask` holds the active task when editing.
  - `removeSpecialChars()` utility strips unwanted characters from strings.

- **Core Functions**
  - `addOrUpdateTask()`  
    - Checks that the title field isn’t empty (`trim()` + alert).  
    - Builds `taskObj` with unique `id` (`title` slug + `Date.now()`), `title`, `date`, `description`.  
    - Adds new tasks to the start of the array with `.unshift()`.  
    - Updates existing tasks by index when editing.  
    - Calls `updateTaskContainer()` and `reset()` afterward.
  - `updateTaskContainer()`  
    - Clears the container and rebuilds it with template literals.  
    - Loops through `taskData` with `.forEach()`.  
    - Appends task info and `Edit` / `Delete` buttons with inline `onclick`.
  - `deleteTask(buttonEl)`  
    - Finds task index via `id`, removes it from DOM and `taskData`.  
    - Updates `localStorage`.
  - `editTask(buttonEl)`  
    - Loads existing task into form inputs.  
    - Switches button label to **Update Task**.  
    - Toggles form visibility for editing.  
  - `reset()`  
    - Resets form inputs.  
    - Resets `currentTask` and button text back to **Add Task**.  
    - Hides the form.

- **Form & Dialog Handling**
  - Handles **open/close form** with toggle classes.  
  - On close, checks if inputs have unsaved changes → shows confirmation dialog.  
  - Cancel = closes dialog.  
  - Discard = resets form + closes dialog.
  - Prevents default form submission with `e.preventDefault()`.

- **Local Storage**
  - Data persisted between sessions with `localStorage.setItem()`.  
  - App loads stored tasks on refresh with `JSON.parse()` at startup.  
  - Updates storage after every add, update, or delete.

---

## Key Learnings

- Importance of **input validation** (required title).  
- How to create unique IDs for tasks using string manipulation and timestamps.  
- Using `.findIndex()` to match and update array entries.  
- DOM rendering patterns: `.forEach()` with template literals.  
- Form state handling: switching between Add vs Update modes.  
- Practical use of **localStorage** to keep tasks between sessions.  
- Safe closing with **confirmation dialogs** to avoid losing data.  

---

## Next Steps / Ideas

- Add **task completion toggle** (done/undone).  
- Style overdue tasks differently by comparing dates.  
- Allow sorting (by date, title, newest/oldest).  
- Support search/filter across tasks.  
- Improve accessibility by replacing inline `onclick` with proper event delegation.  

