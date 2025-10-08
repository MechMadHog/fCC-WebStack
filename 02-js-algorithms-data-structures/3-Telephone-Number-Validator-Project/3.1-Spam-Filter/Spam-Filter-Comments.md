# 📧 Spam Filter App – JS Comments & Notes

**Origin:** FCC JavaScript Course – *Regular Expressions and Validation by Building a Spam Filter*  

---

## What I Covered in JavaScript

### 🧩 Core Concept

This project introduced **regular expressions (regex)** to detect spammy text patterns in messages.  
It demonstrates pattern matching, case insensitivity, and logical checks using arrays and `.some()`.

---

### 🧠 Main Logic: `isSpam()`

```js
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
```

- The function loops through each regex pattern in `denyList`.
- `.some()` returns `true` if **any** pattern matches the input message.
- Each regex tests for specific spam-like content (see below).

---

### ⚙️ Regex Patterns Used

**1. helpRegex**
```js
/please help|assist me/i
```
- Matches “please help” or “assist me” in any case.
- Detects phishing or emotional manipulation messages.

**2. dollarRegex**
```js
/[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i
```
- Matches monetary offers like “1000 dollars” or “2 million dollars”.
- Demonstrates grouping `(?:...)` and quantifiers `+` with whitespace handling.

**3. freeRegex**
```js
/(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i
```
- Detects leetspeak variants of “free money” using character classes `[e3][o0]`.
- Anchors `(?:^|\s)` and `(?:$|\s)` catch start or end boundaries.

**4. stockRegex**
```js
/(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i
```
- Matches spam like “stock alert” with possible obfuscation (5 for S, 7 for T, etc.).
- Complex pattern — showcases regex creativity and tolerance for substitutions.

**5. dearRegex**
```js
/(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i
```
- Finds “dear friend” and similar greetings used in scam emails.
- Mixes literal and obfuscated spellings for realism.

---

### 💡 How It Works Together

- All regex patterns stored in an array:  
  ```js
  const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];
  ```
- When the **“Check Message”** button is clicked:
  - Validates message input (alerts if empty).  
  - Calls `isSpam(message)` and updates result text.  
  - Displays either:
    - `"Oh no! This looks like a spam message."`
    - `"This message does not seem to contain any spam."`
  - Clears the input afterward.

---

## Key Learnings

- How to **write and test regex patterns** for real-world strings.  
- Handling **case-insensitive** text with the `/i` flag.  
- Using **character classes** `[ ]` and **non-capturing groups** `(?: )`.  
- Combining multiple conditions with `.some()` for quick boolean checks.  
- DOM event handling and string validation.  
- Building pattern-based filters to detect hidden or obfuscated spam.

---

## Next Steps / Ideas

- Add more patterns for links (`https?://`), suspicious domains, or excessive punctuation.  
- Use **regex flags** like `g` or `m` for broader searches.  
- Display which keyword triggered the spam detection.  
- Allow users to add custom spam words to the `denyList`.  
- Style output messages with colors or icons for clarity.