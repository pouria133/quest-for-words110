self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("quest-for-words-cache").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/",
        "/manifest.json",
        "/icon-192x192.png",
        "/icon-512x512.png",
        "/beep-01a.mp3",
        "/beep-02.mp3",
        "/hello-01.mp3",
        "/where-01.mp3"
      ]).catch(err => console.error("Cache addAll failed:", err));
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(err => console.error("Fetch failed:", err));
    })
  );
});