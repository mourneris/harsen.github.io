const CACHE_NAME = 'harsen-v1';

// List of files to cache when the service worker is installed
const urlsToCache = [
    '/', // Caches the index.html file
    'index.html',
    'style.css',
    'app.js',
    '/images/Logo_rectangular.png',
    '/images/Logo_favicon.png'
];

// 1. Install Event: Caches all required assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// 2. Fetch Event: Intercepts network requests
self.addEventListener('fetch', event => {
    event.respondWith(
        // Try to find the requested resource in the cache first
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // Cache miss - try to fetch from the network
                return fetch(event.request);
            })
    );
});

// 3. Activate Event: Cleans up old caches (important for updates)
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});