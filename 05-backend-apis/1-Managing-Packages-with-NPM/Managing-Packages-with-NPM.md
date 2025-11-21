# Managing Packages with NPM - Review Notes

This covers everything completed during the **Managing Packages with NPM** section. Use this as a quick refresher before future backend projects.

---

## 1. `package.json` - The Core of a Node Project
`package.json` is a JSON file that stores metadata about Wer project:
- Project name
- Version
- Description
- Author
- Dependencies
- Scripts

It must always be valid JSON:
- Double quotes only
- Commas between fields
- No trailing commas

---

## 2. Adding Fields
We added the following fields:

### **Author**
```json
"author": "Mike MacDonagh"
```

### **Description**
```json
"description": "A project that does something awesome"
```

Both are optional, but they’re considered best practice.

---

## 3. Dependencies
Dependencies are packages Wer project requires to run. They live inside:
```json
"dependencies": {
  "express": "^4.14.0"
}
```
We added and modified an example dependency to learn version control.

---

## 4. Semantic Versioning (SemVer)
Semantic versioning uses the format:

```
MAJOR.MINOR.PATCH
```

### **MAJOR** - Breaking changes
Increase when old code may stop working.

### **MINOR** - New features (backwards-compatible)
Safe upgrades.

### **PATCH** - Bug fixes
Very safe upgrades.

Examples:
- `1.2.13` → MAJOR 1, MINOR 2, PATCH 13
- `2.0.0` → Big breaking change

---

## 5. Version Prefixes
npm allows us to control how much freedom it has to update dependencies.

### **Exact version**
```json
"@freecodecamp/example": "1.2.13"
```
Only installs *exactly* version 1.2.13.

---

### **Tilde (`~`) - Allow PATCH updates**
```json
"@freecodecamp/example": "~1.2.13"
```
Allows versions:
- `1.2.14`
- `1.2.99`

But **NOT**:
- `1.3.0`

Useful when we want small safe bug fixes.

---

### **Caret (`^`) - Allow MINOR and PATCH updates**
```json
"@freecodecamp/example": "^1.2.13"
```
Allows updates:
- `1.3.x`
- `1.9.x`

But **NOT**:
- `2.x.x`

This is the most common prefix in real projects.

---

## 6. Removing a Dependency
We practiced removing an item from the `dependencies` object.  
When a dependency is deleted:
- It no longer installs
- It’s removed from `node_modules` on next clean install
- Wer project should no longer reference it

---

## 7. Running the Project
To start the Node server:
```bash
npm start
```
This runs whatever is inside the `"start"` script.

We visited:
```
http://localhost:3000/
```
to verify everything was working.

freeCodeCamp tests interact with Wer local project by making HTTP requests to the running server.

