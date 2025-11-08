# React + Redux

## Vite Tree
- App files: .jsx (components with JSX), .js (non-JSX utilities)
- Redux Toolkit (RTK): .js or .jsx (e.g., store.js, features/todosSlice.js)
- Entry (Vite): main.jsx
- Styles: .css (or .module.css if you want scoped styles)
- Tests (optional): .test.jsx / .spec.jsx

The most confusing part is figuring out how to structure the folders, it's not covered as part of the certificate.

index.html
src/
  main.jsx
  App.jsx
  app/store.js
  features/todos/todosSlice.js
  features/todos/Todos.jsx
  styles.css
