// Palindrome Checker — FCC-style tests
// Rules: ignore all non-alphanumeric chars and case. Show exact messages.

/* Elements */
const inputEl = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

/* Helpers */
function normalize(str) {
  // keep letters & numbers only
  return str.toLowerCase().replace(/[^0-9a-z]/gi, "");
}

function isPalindrome(str) {
  const cleaned = normalize(str);
  const reversed = cleaned.split("").reverse().join("");
  return cleaned.length > 0 && cleaned === reversed;
}

/* Actions */
function handleCheck(e) {
  e.preventDefault();

  const original = inputEl.value;
  if (original.trim() === "") {
    alert("Please input a value");
    return;
  }

  const ok = isPalindrome(original);

  // exact required text:
  resultEl.textContent = `${original} ${ok ? "is" : "is not"} a palindrome.`;

  // simple styling feedback
  resultEl.classList.remove("ok", "no");
  resultEl.classList.add(ok ? "ok" : "no");
}

/* Events */
btn.addEventListener("click", handleCheck);
document.getElementById("pal-form").addEventListener("submit", handleCheck);
