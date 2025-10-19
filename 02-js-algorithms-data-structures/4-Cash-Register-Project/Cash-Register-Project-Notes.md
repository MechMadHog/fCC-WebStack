# 💵 Cash Register — Notes

## Origin
Based on the **FreeCodeCamp “Cash Register”** project from the JavaScript Algorithms & Data Structures certification.
This is my 4th DIY project, each one is getting more complicated than the last.

## User Stories Recap
- Input element with ID `cash`.  
- Output element with ID `change-due`.  
- Button element with ID `purchase-btn`.  
- When the value in `#cash` is **less than price**, show an **alert**:  
  `"Customer does not have enough money to purchase the item"`.  
- When the value in `#cash` is **equal to price**, display:  
  `"No change due - customer paid with exact cash"`.  
- When the customer **overpays**, calculate change based on denominations:  
  - Return correct combination of notes and coins.  
  - Display **Status: OPEN**, **CLOSED**, or **INSUFFICIENT_FUNDS**.  
- Denominations:  
  - PENNY $0.01  
  - NICKEL $0.05  
  - DIME $0.10  
  - QUARTER $0.25  
  - ONE $1  
  - FIVE $5  
  - TEN $10  
  - TWENTY $20  
  - ONE HUNDRED $100  

## What I Used / Learned
This project ties together **validation, loops, arithmetic, and DOM output**.

- Reused **validation logic** from earlier projects (*Palindrome Checker*, *Binary Converter*).  
- Built a **greedy algorithm** for change distribution, ensuring the highest denominations are used first.  
- Handled **floating-point rounding errors** by converting everything to **cents** and back.  
- Used **status mapping** to control messages (`OPEN`, `CLOSED`, `INSUFFICIENT_FUNDS`, `EXACT`).  
- Implemented **clear branching logic** for underpay, exact pay, and overpay scenarios.  
- Practiced returning complex UI strings like `"Status: OPEN QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"`.  
- Strengthened understanding of **2D arrays**, object mapping, and iterative loops.

This reinforced key patterns:
```js
const toCents = (n) => Math.round(n * 100);
const fromCents = (c) => c / 100;
```
and a consistent output builder:
```js
const buildStatusLine = (status, changePairs) => {
  const parts = changePairs.map(([name, amount]) => `${name}: $${amount.toFixed(2)}`);
  return `Status: ${status} ${parts.join(" ")}`.trim();
};
```

## Styling & Design Choices
Kept the interface **minimal and functional**:
- Clean card layout with subtle shadows.  
- Input row for cash entry with a single **Purchase** button.  
- Live “debug” section showing current `price` and `cid` for testing.  
- Color palette: light neutral base with a blue accent (`#005eff`).  
- Rounded inputs and simple typography for readability.  

This layout keeps the focus on logic and results..

## Summary
The Cash Register project acts as a **capstone** for fundamental JS problem-solving:
- **DOM interaction** + **algorithmic logic** in one cohesive system.  
- Reaffirms precision handling, branching, and UI feedback.  
- Simulates real-world programming logic; handling money, validation, and edge cases.

Each project builds progressively and this one really ties together everything learned from previous FCC challenges.
