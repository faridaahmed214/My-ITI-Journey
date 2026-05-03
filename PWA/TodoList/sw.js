const CACHE_NAME = "todo-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./js/idb.js",
  "./js/db.js",
  "./js/app.js",
  "./logo.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
});
self.addEventListener("message", (event) => {
  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => {
        // Optional: Return a custom offline page or just log the error
        console.log("Fetch failed; returning offline fallback if available.");
      }),
  );
});
