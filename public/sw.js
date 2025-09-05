// Service Worker for Manacle Technologies - Mobile Performance Optimization
const CACHE_NAME = 'manacle-v1.0.1';
const STATIC_CACHE = 'manacle-static-v2';
const DYNAMIC_CACHE = 'manacle-dynamic-v2';

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
self.addEventListener('install', function (event) {
    console.log('SW: Installing service worker');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(function (cache) {
                console.log('SW: Caching critical resources');
                return cache.addAll(CRITICAL_RESOURCES);
            })
            .then(function () {
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function (event) {
    console.log('SW: Activating service worker');
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                        console.log('SW: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function () {
            return self.clients.claim();
        })
    );
});

// Fetch event - cache strategy (conservative to avoid HTML-as-JS issues)
self.addEventListener('fetch', function (event) {
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
        (async function() {
            const req = event.request;
            const url = new URL(req.url);

            // Never serve cached HTML for JS module requests
            if (req.destination === 'script' || req.headers.get('accept')?.includes('text/javascript')) {
                try {
                    const netRes = await fetch(req);
                    // Only cache JS if content-type is JS and status 200
                    const ct = netRes.headers.get('content-type') || '';
                    if (netRes.status === 200 && ct.includes('javascript')) {
                        const clone = netRes.clone();
                        caches.open(STATIC_CACHE).then((cache) => cache.put(req, clone));
                    }
                    return netRes;
                } catch (e) {
                    const cached = await caches.match(req);
                    if (cached) return cached;
                    throw e;
                }
            }

            // For CSS assets, use stale-while-revalidate
            if (req.destination === 'style' || url.pathname.endsWith('.css')) {
                const cache = await caches.open(STATIC_CACHE);
                const cached = await cache.match(req);
                const fetchPromise = fetch(req).then((res) => {
                    if (res.status === 200) cache.put(req, res.clone());
                    return res;
                });
                return cached || fetchPromise;
            }

                // For images, use cache-first strategy
                if (requestUrl.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif)$/)) {
                    return fetch(event.request)
                        .then(function (response) {
                            if (response.status === 200) {
                                const responseToCache = response.clone();
                                caches.open(STATIC_CACHE)
                                    .then(function (cache) {
                                        cache.put(event.request, responseToCache);
                                    });
                            }
                            return response;
                        })
                        .catch(function () {
                            // Return a fallback image if network fails
                            return new Response('', { status: 404 });
                        });
                }

            // For images, use cache-first strategy
            if (url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif)$/)) {
                const cache = await caches.open(STATIC_CACHE);
                const cached = await cache.match(req);
                if (cached) return cached;
                const res = await fetch(req);
                if (res.status === 200) cache.put(req, res.clone());
                return res;
            }

            // For other requests, use network-first strategy
            try {
                const res = await fetch(req);
                if (res.status === 200) {
                    const clone = res.clone();
                    caches.open(DYNAMIC_CACHE).then((cache) => cache.put(req, clone));
                }
                return res;
            } catch (e) {
                const cached = await caches.match(req);
                if (cached) return cached;
                throw e;
            }
        })()
    );
});

// Message event - handle cache updates
self.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Background sync for offline functionality
self.addEventListener('sync', function (event) {
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Handle background sync operations
            console.log('SW: Background sync triggered')
        );
    }
});
