// Service Worker for Able AllStars PWA
const CACHE_NAME = 'able-allstars-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/index.css',
  '/html/about.html',
  '/html/projects.html',
  '/html/programs.html',
  '/html/donate.html',
  '/html/team.html',
  '/html/contact.html',
  '/public/logo-300h.png',
  '/assets/images/favicon.ico',
  '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Cache install failed:', err))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/html/404.html');
            }
          });
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});