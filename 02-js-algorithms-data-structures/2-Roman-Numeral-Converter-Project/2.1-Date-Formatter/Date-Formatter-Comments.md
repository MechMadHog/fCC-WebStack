# 📅 Date Formatter App – Comments & Notes

**Origin:** FCC JavaScript Course – *Learn Basic String and Array Methods by Building a Date Formatter*  

---

## What I Covered

- **JavaScript (script.js)**  
  - Grabbed DOM elements:  
    - `currentDateParagraph` → displays the formatted date.  
    - `dateOptionsSelectElement` → dropdown selector for different formats.  
  - Used the **Date object** to capture: `day`, `month`, `year`, `hours`, `minutes`.  
  - Built a **default formatted date** string: `day - month - year`.  
  - Inserted that into the DOM with `.textContent`.

- **Event Listener**  
  - Added a `"change"` event to the dropdown menu.  
  - Switch statement handles different cases:  
    - **`yyyy-mm-dd`** → reverses order using `.split()`, `.reverse()`, `.join()`.  
    - **`mm-dd-yyyy-h-mm`** → builds string with month, day, year, hours + minutes.  
    - **Default** → falls back to `day - month - year`.

---

## Key Learnings

- How to **use the Date object** to pull out individual values.  
- How to dynamically **update the DOM** based on user input.  
- Practiced **string manipulation** with `.split()`, `.reverse()`, `.join()`.  
- Reinforced the value of **switch statements** for cleaner multiple-choice logic.  
- Learned to keep a **default format** as a fallback case.

---

## Next Steps / Ideas

- Add more date formats (ISO, locale-based, long month names, etc.).  
- Style the dropdown and output with a **CRT-inspired neon theme** to match my other CodePens.  
- Add seconds to the display for real-time updates.  
- Experiment with `setInterval` to refresh the time live.  
