let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00],
];

let cash;

const cashInput = document.getElementById("cash");
const changeDueEl = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const DENOMS = [
  ["ONE HUNDRED", 100.0],
  ["TWENTY", 20.0],
  ["TEN", 10.0],
  ["FIVE", 5.0],
  ["ONE", 1.0],
  ["QUARTER", 0.25],
  ["DIME", 0.10],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

const toCents = (n) => Math.round(n * 100);
const fromCents = (c) => c / 100;

const fmtMoney = (n) => {
  const s = (Math.round(n * 100) / 100).toFixed(2).replace(/\.?0+$/, "");
  return `$${s}`;
};

const buildStatusLine = (status, changePairs) => {
  if (!changePairs || !changePairs.length) return `Status: ${status}`;
  const parts = changePairs.map(([name, amount]) => `${name}: ${fmtMoney(amount)}`);
  return `Status: ${status} ${parts.join(" ")}`.trim();
};

const getChange = (priceVal, cashVal, drawer) => {
  const changeDueCents = toCents(cashVal - priceVal);
  if (changeDueCents === 0) {
    return { status: "EXACT", changePairs: [] };
  }

  const totalInDrawerCents = toCents(drawer.reduce((sum, [, amt]) => sum + amt, 0));

  if (totalInDrawerCents < changeDueCents) {
    return { status: "INSUFFICIENT_FUNDS", changePairs: [] };
  }

  const drawerMap = Object.fromEntries(drawer);

  let remaining = changeDueCents;
  const out = [];

  for (const [name, val] of DENOMS) {
    let use = 0;
    let availableCents = toCents(drawerMap[name] || 0);
    const denomCents = toCents(val);

    while (remaining >= denomCents && availableCents > 0) {
      remaining -= denomCents;
      availableCents -= denomCents;
      use += denomCents;
    }
    if (use > 0) {
      out.push([name, fromCents(use)]);
    }
  }

  if (remaining > 0) {
    return { status: "INSUFFICIENT_FUNDS", changePairs: [] };
  }

  if (totalInDrawerCents === changeDueCents) {
    return { status: "CLOSED", changePairs: out };
  }

  return { status: "OPEN", changePairs: out };
};

const setChangeText = (text) => {
  changeDueEl.textContent = text;
};

const dbgPrice = document.getElementById("dbg-price");
const dbgCid = document.getElementById("dbg-cid");
if (dbgPrice) dbgPrice.textContent = price;
if (dbgCid)   dbgCid.textContent = JSON.stringify(cid, null, 2);

purchaseBtn.addEventListener("click", () => {
  const value = Number(cashInput.value);
  cash = value;

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    setChangeText("No change due - customer paid with exact cash");
    return;
  }

  const { status, changePairs } = getChange(price, cash, cid);

  if (status === "INSUFFICIENT_FUNDS") {
    setChangeText("Status: INSUFFICIENT_FUNDS");
    return;
  }

  if (status === "CLOSED") {
    setChangeText(buildStatusLine("CLOSED", changePairs));
    return;
  }

  setChangeText(buildStatusLine("OPEN", changePairs));
});
