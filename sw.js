/* Do Re Meatles - service worker.
   Precaches the whole app so it opens instantly and works with no signal.
   VERSION is stamped by tools/stamp.sh from a hash of the app's content, so a new
   deploy gets a new cache name and existing installs pick up the update.
   Your own phrases live in localStorage, not in this cache, so updates never touch them. */
const VERSION = "d0be40b9bb";
const CACHE = "drm-" + VERSION;
const ASSETS = [
  "./",
  "./index.html",
  "./vendor/abcjs-basic-min.js",
  "./data/phrases.js",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }));
  /* no skipWaiting: a new version waits until the page accepts it */
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return (k !== CACHE) ? caches.delete(k) : null; }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("message", function(e){
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

/* Cache-first: everything the app needs is precached and none of it is per-user. */
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if (hit) return hit;
      return fetch(e.request).then(function(res){
        if (res && res.status === 200 && res.type === "basic"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return res;
      }).catch(function(){
        /* respondWith() rejects on undefined, so every path returns a real Response */
        if (e.request.mode === "navigate"){
          return caches.match("./index.html").then(function(shell){
            return shell || new Response(
              "<h1>Offline</h1><p>Open this once with a connection to install it.</p>",
              { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
          });
        }
        return new Response("", { status: 504, statusText: "Offline" });
      });
    })
  );
});
