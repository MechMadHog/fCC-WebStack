# 🔢 Decimal to Binary Converter – JS Comments & Notes

**Origin:** FCC JavaScript Course – *Recursion and Call Stack Visualization by Building a Binary Converter*  

---

## What I Covered in JavaScript

### 🧩 Main Function: `decimalToBinary()`

This recursive function converts a decimal number into its binary string.

```js
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};
```

**How it works:**
- **Base case:** if `input` is `0` or `1`, return the string directly.
- **Recursive case:**  
  - Calls itself with `Math.floor(input / 2)` → halves the input each time.  
  - Appends `(input % 2)` → remainder becomes the next binary digit.  
  - As recursion unwinds, the binary string builds from left to right.

**Example:**
```js
decimalToBinary(5)
// → decimalToBinary(2) + 1
// → decimalToBinary(1) + 0 + 1
// → "1" + "0" + "1" = "101"
```

---

### ⚙️ Input Validation – `checkUserInput()`

Handles all user input and validation before conversion.

```js
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};
```

**Logic Flow:**
- Converts the user input to an integer using `parseInt()`.
- Checks for:
  - Empty input,
  - Invalid (non-number) input,
  - Negative numbers.
- Displays an alert if validation fails.
- If the user enters **5**, triggers the animation sequence.
- Otherwise, calls `decimalToBinary()` and prints the result.

---

### 🎬 Call Stack Animation – `showAnimation()`

Simulates how recursion works by showing each stack frame over time.

```js
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};
```

**What it does:**
- Displays each recursive call step-by-step.
- Uses `setTimeout()` to:
  1. Add the element representing the call,
  2. Replace its text with an explanation message,
  3. Remove it from the DOM to simulate the stack “popping”.
- After 20 seconds, shows the final binary output (`101`).

**Animation Data Example:**
```js
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,
    msg: "decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack.",
    showMsgDelay: 15000,
    removeElDelay: 20000
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: "decimalToBinary(2) returns '1' + 0 (2 % 2)...",
    showMsgDelay: 10000,
    removeElDelay: 15000
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case)...",
    showMsgDelay: 5000,
    removeElDelay: 10000
  }
];
```

---

### ⌨️ Event Handling

- **`convertBtn`** → triggers conversion when clicked.  
- **`numberInput`** → listens for the `Enter` key press.  
- Both actions call `checkUserInput()` to handle validation and conversion.

---

## Key Learnings

- Deepened understanding of **recursion** and the **call stack**.  
- Practiced building a **base case** and a **recursive case**.  
- Used the **modulus operator (%)** to find binary remainders.  
- Learned how to **animate recursion visually** with `setTimeout`.  
- Practiced input validation and user feedback.  
- Reinforced function composition and code separation (logic, UI, animation).

---

## Next Steps / Ideas

- Add a **binary-to-decimal converter** mode.  
- Make the animation more dynamic (color transitions, arrows).  
- Show **each recursive return value** as the stack unwinds.  
- Let the user slow down or speed up the animation.  
- Add conversion for larger numbers (bit grouping).
