self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("quest-for-words-cache").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/",
        "/icon-192x192.png",
        "/icon-512x512.png",
        "https://www.soundjay.com/buttons/beep-01a.mp3",
        "https://www.soundjay.com/buttons/beep-02.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});