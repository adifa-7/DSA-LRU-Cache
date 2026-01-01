let capacity = 0;
let cache = new Map();

function setCapacity() {
    capacity = parseInt(document.getElementById("capacity").value);
    cache.clear();
    updateUI();
    showMessage("Cache capacity set to " + capacity, "");
}

function get() {
    const key = document.getElementById("key").value;

    if (cache.has(key)) {
        const value = cache.get(key);
        cache.delete(key);
        cache.set(key, value); // move to MRU
        updateUI("hit", key);
        showMessage("Cache HIT for key " + key, "hit");
    } else {
        updateUI("miss", key);
        showMessage("Cache MISS for key " + key, "miss");
    }
}

function put() {
    const key = document.getElementById("key").value;
    const value = document.getElementById("value").value;

    if (cache.has(key)) {
        cache.delete(key);
    } else if (cache.size === capacity) {
        const lruKey = cache.keys().next().value;
        cache.delete(lruKey);
        showMessage("Evicted key " + lruKey, "evict");
    }

    cache.set(key, value);
    updateUI();
}

function updateUI(type, highlightKey) {
    const cacheDiv = document.getElementById("cache");
    cacheDiv.innerHTML = "";

    for (let [key, value] of Array.from(cache.entries()).reverse()) {
        const div = document.createElement("div");
        div.className = "cache-item";

        if (key === highlightKey && type) {
            div.classList.add(type);
        }

        div.innerHTML = `<strong>${key}</strong><br>${value}`;
        cacheDiv.appendChild(div);
    }
}

function showMessage(msg, type) {
    const message = document.getElementById("message");
    message.innerText = msg;
    message.className = type;
}
