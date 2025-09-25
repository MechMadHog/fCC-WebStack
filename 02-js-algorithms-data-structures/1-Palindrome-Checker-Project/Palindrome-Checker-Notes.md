# Palindrome Checker – Project Notes

This was my first actual **DIY project** after completing the guided FreeCodeCamp lessons. 
The challenge was to build a working palindrome checker that passes all of the FCC user stories.  

---

## Following the User Stories
- **Input + Button + Result elements:**  
  From earlier projects I already knew how to wire up inputs and buttons (like the Calorie Counter). I reused that structure with `id="text-input"`, `id="check-btn"`, and `id="result"`.

- **Empty input alert:**  
  In my Background Color / Lightbulb project I practiced debugging simple `if` statements. 
  I applied the same check here: if the input is blank, run `alert("Please input a value");`.

- **Check palindromes ignoring punctuation/case:**  
  Regex cleaning came from the Calorie Counter project (where I used regex to sanitize inputs). 
  I reused that knowledge to strip out non-alphanumeric characters.  
  Splitting and reversing a string was the same kind of array logic I’d already used in earlier challenges.

- **Exact output formatting:**  
  Like the RPG “Echoes Beyond the Rift,” where the story text had to match exactly, here I learned the importance of reproducing the **exact phrasing** the tests expected:  
  `original input + " is a palindrome."` or  
  `original input + " is not a palindrome."`

---

## Re-using Earlier Lessons
- **DOM Selection & Events:** carried over from the Lightbulb and Pyramid Generator, using `getElementById` and `addEventListener`.
- **Regex Input Cleaning:** directly borrowed from the Calorie Counter.  
- **String / Array Methods:** splitting, joining, and reversing like I did when looping through arrays in earlier exercises.  
- **Modal & Result Area:** instead of a modal, I used a result `p` like in the RPG where I updated story text dynamically.  
- **Styling Theme:** applied lessons from responsive layouts and color theming, but with an **Alice-in-Wonderland + accessibility** twist.

---

## What I Learned
- How to consolidate multiple smaller skills (loops, regex, event handling, DOM updates) into a complete project.  
- That **exact user story wording matters** — I had to match punctuation and spacing exactly.  
- How to balance playful styling with readability and accessibility.  
- This was my first step beyond following a tutorial — combining old knowledge into a new build.
