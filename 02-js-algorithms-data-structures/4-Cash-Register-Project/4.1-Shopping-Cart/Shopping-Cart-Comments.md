# 🛒 Shopping Cart — Comments & Concepts

## Overview

This project introduced **Object-Oriented Programming (OOP)** in JavaScript through a real-world example — a functional shopping cart system.

It demonstrates how to structure code using **classes**, **methods**, and **object instances**, while keeping data and behavior organized together.

---

## Key OOP Concepts

### 🧱 Classes and Instances
The `ShoppingCart` class defines a *blueprint* for cart objects:
```js
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }
}
```
When we call:
```js
const cart = new ShoppingCart();
```
we create an **instance** of that class — an individual cart that stores its own data.

---

### 🔑 The `this` Keyword
Inside a class, `this` refers to the **specific instance** of the object that called the method.  
For example:
```js
this.items.push(product);
this.total = 0;
```
Here, `this.items` and `this.total` belong to the **current cart**, not a global variable.

When we attach event listeners, we sometimes need to bind the context manually:
```js
clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
```
Without `.bind(cart)`, `this` inside `clearCart()` would point to the button, not the cart object.

---

### ⚙️ Methods and Encapsulation
Each function inside the class acts as a **method** that manipulates the cart’s internal data:
- `addItem(id, products)` → Adds a product by ID.  
- `getCounts()` → Returns the total number of items.  
- `clearCart()` → Empties the cart with user confirmation.  
- `calculateTaxes(amount)` → Calculates tax from subtotal.  
- `calculateTotal()` → Combines subtotal and taxes, updating UI.

This encapsulation makes the cart self-contained — it manages its own data and logic.

---

### 🧮 Array Methods and Computation
The project uses key array methods to manage data:
```js
products.find(...)
this.items.reduce(...)
this.items.forEach(...)
```
These handle searching, accumulating totals, and iterating without manual loops.

---

### 💬 Event Handling and the DOM
Event listeners connect the **logic (class)** to the **interface (HTML)**:
```js
btn.addEventListener("click", (event) => {
  cart.addItem(Number(event.target.id), products);
  cart.calculateTotal();
});
```
This links button clicks to cart updates, dynamically modifying the DOM.

---

## 🧠 Learned Concepts Summary

| Concept | Description |
|----------|-------------|
| `class` | Defines an object template with properties & methods |
| `constructor()` | Initializes object properties when created |
| `this` | Refers to the current object instance |
| `.bind(this)` | Ensures method keeps its class context |
| Encapsulation | Keeping related data & behavior together |
| `.reduce()`, `.find()`, `.forEach()` | Array methods for calculations and iteration |
| Event Listeners | Bridge between user actions and code logic |
| `.toFixed(2)` | Rounds to two decimals for cleaner numbers |

---

## 🧩 Reflection

This project was a bridge between **functional programming** and **object-oriented design** — showing how to group logic inside reusable, modular structures.

It’s also a strong foundation for more advanced OOP concepts like inheritance, composition, and modularization (separating logic into files).

---

**Next Steps:**
- Add `removeItem()` and `updateQuantity()` methods.  
- Store the cart in `localStorage`.  
- Move to ES Modules for cleaner imports/exports.  
- Later integrate backend logic for persistent carts.
