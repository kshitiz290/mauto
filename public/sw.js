// Service Worker for Manacle Technologies - Mobile Performance Optimization
const CACHE_NAME = 'manacle-v1.0.0';
const STATIC_CACHE = 'manacle-static-v1';
const DYNAMIC_CACHE = 'manacle-dynamic-v1';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/manacle_logo.png',
  '/manacle_logo_dark.png'
];

// Static assets to cache (loaded on demand)
const STATIC_ASSETS = [
  '/x.svg',
  '/robots.txt',
  '/sitemap.xml'
];

// Install event - cache critical resources
self.addEventListener('install', function(event) {
  console.log('SW: Installing service worker');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(function(cache) {
        console.log('SW: Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  console.log('SW: Activating service worker');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch event - cache strategy
self.addEventListener('fetch', function(event) {
  const requestUrl = new URL(event.request.url);
  
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (requestUrl.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(cachedResponse) {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // For CSS/JS assets, use cache-first strategy
        if (requestUrl.pathname.startsWith('/assets/')) {
          return fetch(event.request)
            .then(function(response) {
              // Cache the response for future requests
              if (response.status === 200) {
                const responseToCache = response.clone();
                caches.open(STATIC_CACHE)
                  .then(function(cache) {
                    cache.put(event.request, responseToCache);
                  });
              }
              return response;
            });
        }

        // For images, use cache-first strategy
        if (requestUrl.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif)$/)) {
          return fetch(event.request)
            .then(function(response) {
              if (response.status === 200) {
                const responseToCache = response.clone();
                caches.open(STATIC_CACHE)
                  .then(function(cache) {
                    cache.put(event.request, responseToCache);
                  });
              }
              return response;
            })
            .catch(function() {
              // Return a fallback image if network fails
              return new Response('', { status: 404 });
            });
        }

        // For other requests, use network-first strategy
        return fetch(event.request)
          .then(function(response) {
            // Cache successful responses
            if (response.status === 200) {
              const responseToCache = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
            }
            return response;
          })
          .catch(function() {
            // Try to return from cache if network fails
            return caches.match(event.request);
          });
      })
  );
});

// Message event - handle cache updates
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background sync for offline functionality
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync operations
      console.log('SW: Background sync triggered')
    );
  }
});
