# 🔢 Number Sorter App – JS Comments & Notes

**Origin:** FCC JavaScript Course – *Learning Algorithmic Thinking by Building a Number Sorter*

---

## 🧩 Core Concept

This project teaches **algorithmic thinking** — the process of breaking a problem into logical, repeatable steps that a computer can execute.

Here, we learn to:
- Understand **how sorting works internally**.
- Build and visualize algorithms like **Bubble Sort**, **Selection Sort**, and **Insertion Sort**.
- Translate human reasoning (“smallest to largest”) into precise, step-by-step logic.

---

## 🧠 Main Logic: Sorting Numbers

When the user clicks the **Sort** button:
```js
sortButton.addEventListener("click", sortInputArray);
```

### 1️⃣ Capture User Input
```js
const inputValues = [...document.getElementsByClassName("values-dropdown")]
  .map((dropdown) => Number(dropdown.value));
```
- Collects all number values from dropdowns.
- Converts them from strings to numbers using `Number()`.
- Uses the spread operator (`...`) to transform the HTMLCollection into an array.

---

### 2️⃣ Sort the Numbers
```js
const sortedValues = inputValues.sort((a, b) => a - b);
```
- JavaScript’s built-in `.sort()` uses a **comparison function**.
- `a - b` ensures **numerical** (not lexicographical) sorting.
- Demonstrates **abstraction**: using a high-level built-in before learning manual algorithms.

---

### 3️⃣ Update the UI
```js
const updateUI = (array=[]) => {
  array.forEach((num, i) => {
    document.getElementById(`output-value-${i}`).innerText = num;
  });
}
```
- Iterates over the sorted array.
- Updates the text of each corresponding output box.
- Teaches **DOM manipulation based on algorithmic output**.

---

## 🧮 Manual Sorting Algorithms

These are custom re-creations of real algorithms — showing how sorting logic works behind the scenes.

### 🔁 Bubble Sort
```js
for (let i = 0; i < array.length; i++){
  for (let j = 0; j < array.length - 1; j++){
    if (array[j] > array[j+1]) {
      const temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
    }
  }
}
```
- Compares **each pair** of adjacent elements.
- “Bubbles” the largest numbers to the end of the array.
- Teaches **nested loops** and **value swapping**.

**Key insight:** this mimics how humans might sort playing cards by repeatedly scanning for out-of-order pairs.

---

### 🧩 Selection Sort
```js
for (let i = 0; i < array.length; i++){
  let minIndex = i;
  for (let j = i + 1; j < array.length; j++){
    if (array[j] < array[minIndex]) minIndex = j;
  }
  const temp = array[i];
  array[i] = array[minIndex];
  array[minIndex] = temp;
}
```
- Finds the **smallest number** in the remaining unsorted portion.
- Places it at the **current index**.
- Reduces the “unsorted” zone with each loop.

**Key insight:** shows how **tracking variables** (like `minIndex`) helps manage comparisons efficiently.

---

### 🧱 Insertion Sort
```js
for (let i = 1; i < array.length; i++){
  const currValue = array[i];
  let j = i - 1;
  while (j >= 0 && array[j] > currValue){
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = currValue;
}
```
- Builds the sorted list **one element at a time**.
- Shifts larger numbers to the right to insert the new one.
- Mimics how you’d sort cards by hand — inserting each new card into its correct place.

**Key insight:** teaches **while loops** and how **inner shifting** replaces value swapping.

---

## 🧠 Learning Algorithmic Thinking

Sorting is a foundation for algorithmic logic because it combines:
1. **Iteration** – Repeating steps through loops.  
2. **Comparison** – Making decisions with conditionals (`if` / `while`).  
3. **State change** – Updating data (`array[j] = ...`).  
4. **Abstraction** – Replacing manual loops with built-in tools like `.sort()`.  
5. **Pattern recognition** – Realizing different strategies achieve the same outcome.

**Takeaway:**  
> “Algorithmic thinking is less about memorizing formulas, and more about understanding *how to think in steps*.”

---

## 🧭 Next Steps / Ideas

- Add visualization (bars, animations) for each algorithm step.  
- Track and display the **number of swaps** or **comparisons** made.  
- Let the user choose which algorithm to run.  
- Explore sorting complexity: *O(n²)* for Bubble/Selection/Insertion vs faster algorithms like *O(n log n)* mergesort.  
- Apply similar logic to **filtering, searching, and pathfinding** later on.
