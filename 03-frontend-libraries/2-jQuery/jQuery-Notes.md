# **2. jQuery**

## 🧩 What is jQuery
**jQuery** is a small JavaScript library that simplifies DOM selection, traversal, manipulation, and event handling. It also smooths out browser quirks. It became the default interactivity layer for many sites that used Bootstrap 3.

I use modern DOM APIs by default now, but knowing jQuery helps when working with older codebases and many tutorials.

---

## 🧠 Key Concepts I Practiced
This section was completed as **one project**. I created a separate **`script.js`** instead of putting code in a `<script>` tag in the HTML... it keeps things tidy.

### ✅ Setup
- `$(document).ready(handler)` to run code after the DOM is ready.

### ✅ Selecting and manipulating
- `$("#id")`, `$(".class")`, `$("tag")` for quick selectors.  
- `.addClass()` and `.removeClass()` to toggle classes.  
- `.css(prop, value)` to set inline styles.  
- `.prop("disabled", true)` to change element properties.  
- `.html("<em>…</em>")` to replace inner HTML.  
- `.remove()` to delete elements.

### ✅ DOM traversal and movement
- `.parent()` and `.children()` to move up and down the tree.  
- `.appendTo(selector)` to move elements between containers.  
- `.clone().appendTo(...)` to duplicate elements.

### ✅ Pseudo-selectors
- `:nth-child(n)` to target specific children.  
- `:even` to target even-indexed matches.

### ✅ Chaining
- jQuery methods return the jQuery object, so you can chain calls for compact, readable code.

---

## 📁 What is in my files
- **index.html**... the FCC jQuery Playground markup.  
- **script.js**... all steps from the course, with earlier steps left in as comments so I can see the progression.

### Sample lines from `script.js`
```js
$(document).ready(function () {
  // $("button").addClass("animated bounce");
  // $("#target3").addClass("animated fadeOut");

  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true");

  // $("#target4").html("<em>#target4</em>");
  $("#target4").remove();

  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");

  $("#target1").parent().css("background-color", "red");
  $("#right-well").children().css("color", "orange");

  $(".target:nth-child(2)").addClass("animated bounce");
  $(".target:even").addClass("animated shake");

  $("body").addClass("animated hinge");
});
```

---

## 🧪 Notes and gotchas
- Selector syntax is CSS-like. Do not mix HTML inside `$(...)`  
  Example fix: `$(button id="target4")…` → `$("#target4")…`  
- `.html()` sets HTML... `.text()` sets plain text.  
- Many Bootstrap 3 components expect jQuery. Bootstrap 5 does not.

---

## 🔧 Alternatives
- **Vanilla JS**... `document.querySelector`, `classList`, `closest`, `fetch`.  
- **cash-dom** or **Zepto**... small jQuery-like APIs.  
- **Alpine.js**... light interactivity in the markup without a full framework.

---

## 💡 Reflection
jQuery made common DOM work fast and simple. Doing the steps in `script.js` demonstrated selection, class toggling, moving nodes between containers, cloning, and simple styling. Keeping previous lines commented helped me document the learning path in the file itself.
