let capacity = 0;
let cache = new Map();

function setCapacity() {
  capacity = Number(document.getElementById("capacityInput").value);
  cache.clear();
  updateUI();
  toast(`Cache capacity set to ${capacity}`);
}

function put() {
  const key = document.getElementById("keyInput").value;
  const value = document.getElementById("valueInput").value;

  if (key === "" || value === "") {
    toast("Enter both key and value");
    return;
  }

  if (cache.has(key)) {
    cache.delete(key);
    toast(`Updated key ${key}`);
  } else if (cache.size >= capacity) {
    const lruKey = cache.keys().next().value;
    cache.delete(lruKey);
    toast(`Evicted least used key ${lruKey}`);
  } else {
    toast(`Inserted key ${key}`);
  }

  cache.set(key, value);
  updateUI();
}

function get() {
  const key = document.getElementById("keyInput").value;

  if (!cache.has(key)) {
    toast("Cache MISS – key not found");
    return;
  }

  const value = cache.get(key);
  cache.delete(key);
  cache.set(key, value);

  toast(`Cache HIT – key ${key}`);
  updateUI();
}

function updateUI() {
  const container = document.getElementById("cacheContainer");
  container.innerHTML = "";

  const items = Array.from(cache).reverse();

  items.forEach(([k, v], i) => {
    const box = document.createElement("div");
    box.className = "cache-box";

    if (i === 0) box.classList.add("mru");
    if (i === items.length - 1) box.classList.add("lru");

    box.innerHTML = `<div>${k}</div><div>${v}</div>`;
    container.appendChild(box);
  });
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.style.display = "block";

  setTimeout(() => {
    t.style.display = "none";
  }, 2200);
}
