const API_ONE = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const btn = document.getElementById("search-button");

const nameEl = document.getElementById("creature-name");
const idEl = document.getElementById("creature-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const typesEl = document.getElementById("types");
const hpEl = document.getElementById("hp");
const atkEl = document.getElementById("attack");
const defEl = document.getElementById("defense");
const spaEl = document.getElementById("special-attack");
const spdEl = document.getElementById("special-defense");
const speEl = document.getElementById("speed");

const imgEl = document.getElementById("creature-image");


function clearTypes() { typesEl.innerHTML = ""; }

function typeChip(txt) {
  const span = document.createElement("span");
  span.className = "type";
  span.textContent = String(txt).toUpperCase();
  return span;
}

function setText(el, value) {
  el.textContent = value;
}


function normalizeTypes(types) {

  return (types || []).map((t) => {
    if (typeof t === "string") return t;
    if (t?.type?.name) return t.type.name;
    if (t?.name) return t.name;
    return String(t);
  });
}

function normalizeStats(stats) {

  if (!Array.isArray(stats)) return stats || {};
  const out = {};
  stats.forEach((s) => {
    const keyRaw = (s?.stat?.name || s?.name || "").toLowerCase();
    const key = keyRaw.replace(/_/g, "-"); // 'special-attack' etc
    const val = (s?.base_stat ?? s?.value ?? s?.amount ?? s?.stat?.value);
    if (key) out[key] = val;
  });
  return out;
}


function setBasics(creature) {
  setText(nameEl, (creature.name || "").toUpperCase());
  setText(idEl, `#${creature.id}`);
  setText(weightEl, `Weight: ${creature.weight}`);
  setText(heightEl, `Height: ${creature.height}`);
}

function setTypes(typesArr) {
  clearTypes();
  const names = normalizeTypes(typesArr);
  names.forEach((n) => typesEl.appendChild(typeChip(n)));
}

function setStats(stats = {}) {
  const s = normalizeStats(stats);

  setText(hpEl, s["hp"] ?? s.hp ?? "");
  setText(atkEl, s["attack"] ?? s.attack ?? "");
  setText(defEl, s["defense"] ?? s.defense ?? "");
  setText(spaEl, s["special-attack"] ?? s["special_attack"] ?? s.specialAttack ?? "");
  setText(spdEl, s["special-defense"] ?? s["special_defense"] ?? s.specialDefense ?? "");
  setText(speEl, s["speed"] ?? s.speed ?? "");
}

function setImage(sprites = {}) {
  if (!imgEl) return;
  const url = sprites.front_default || sprites.front || "";
  imgEl.src = url || "";
  imgEl.alt = url ? `${nameEl.textContent} sprite` : "";
}


async function fetchCreature(query) {
  const endpoint = API_ONE + encodeURIComponent(String(query).trim().toLowerCase());
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Creature not found");
  return res.json();
}

async function handleSearch(e) {
  e?.preventDefault();
  const raw = input.value.trim();
  if (!raw) return;

  try {
    const data = await fetchCreature(raw);
    setBasics(data);
    setTypes(data.types);
    setStats(data.stats);
    setImage(data.sprites);
  } catch (err) {
    alert("Creature not found");
  
    clearTypes();
  }
}

form.addEventListener("submit", handleSearch);
btn.addEventListener("click", handleSearch);
