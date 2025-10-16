// Required elements
const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

// Regex for Telephone Number Validator:
// - optional leading "1" with optional space
// - area code as "(555)" or "555"
// - optional space or dash between groups
// - total digits must match US format
const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;

function validateNumber(str) {
  return pattern.test(str);
}

function showResult(str, isValid) {
  results.textContent = (isValid ? 'Valid US number: ' : 'Invalid US number: ') + str;
}

// Events
checkBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) {
    alert('Please provide a phone number');
    return;
  }
  showResult(value, validateNumber(value));
});

clearBtn.addEventListener('click', () => {
  results.textContent = '';
});

// Optional: allow Enter key to trigger "Check"
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkBtn.click();
});
