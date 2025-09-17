# Random Background Color Changer — Debugging Notes

A quick log of what I fixed and why. This was a pure debugging pass… no new features, just making the original idea actually run.

## Final JS (working)

```js
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];
// 1. Missing commas stopped the array from being recognized.

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  // 2. "math" needed to be "Math".
  // 3. Math.floor(...) rounds down to a whole number.
  return randomIndex;
}

const body = document.querySelector("body");
// 4. queryselector -> querySelector (camelCase).

const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
// 5. IDs must be selected with '#'.

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];
  // 6. The () are required when calling a function.
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");
// 7. The HTML id needed to be "btn" to match this selector.

btn.onclick = changeBackgroundColor;
/* 8(6b). Here () are not used because we assign the function reference,
      we are not calling it immediately. */
