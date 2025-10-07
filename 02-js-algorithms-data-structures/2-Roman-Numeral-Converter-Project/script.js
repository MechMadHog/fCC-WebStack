const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const toRoman = (num) => {
  const map = [
    { v: 1000, r: "M" },
    { v: 900,  r: "CM" },
    { v: 500,  r: "D" },
    { v: 400,  r: "CD" },
    { v: 100,  r: "C" },
    { v: 90,   r: "XC" },
    { v: 50,   r: "L" },
    { v: 40,   r: "XL" },
    { v: 10,   r: "X" },
    { v: 9,    r: "IX" },
    { v: 5,    r: "V" },
    { v: 4,    r: "IV" },
    { v: 1,    r: "I" },
  ];
  let res = "";
  for (const {v, r} of map) {
    while (num >= v) {
      res += r;
      num -= v;
    }
  }
  return res;
};

function setOutput(text, cls = "") {
  output.className = "output " + cls;
  output.textContent = text;
}

function handleConvert() {
  const raw = input.value.trim();
  const num = Number(raw);

  // Story: empty input
  if (raw === "" || Number.isNaN(num)) {
    setOutput("Please enter a valid number", "err");
    return;
  }

  // Story: -1
  if (num < 1) {
    setOutput("Please enter a number greater than or equal to 1", "err");
    return;
  }

  // Story: 4000 or greater
  if (num >= 4000) {
    setOutput("Please enter a number less than or equal to 3999", "err");
    return;
  }

  // Valid path
  const roman = toRoman(Math.floor(num));
  setOutput(roman, "ok");
}

btn.addEventListener("click", handleConvert);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleConvert();
});
