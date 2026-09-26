// QField Service Worker for performance optimization
const CACHE_NAME = 'qfield-v1.0.0';
const STATIC_CACHE = 'qfield-static-v1.0.0';

// Resources to cache immediately
const PRECACHE_URLS = [
  '/',
  '/success-stories/',
  '/blog/',
];

// Cache strategies for different resource types
const CACHE_STRATEGIES = {
  // Static assets - cache first with long TTL
  static: {
    match: /\.(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|eot|ttf)$/,
    strategy: 'CacheFirst',
    cacheName: STATIC_CACHE,
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  },
  
  // API and dynamic content - network first
  api: {
    match: /\/api\//,
    strategy: 'NetworkFirst',
    cacheName: 'qfield-api',
    maxAge: 5 * 60 * 1000 // 5 minutes
  },
  
  // Pages - network first with cache fallback
  pages: {
    match: /\/$/,
    strategy: 'NetworkFirst',
    cacheName: CACHE_NAME,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
};

// Install event - precache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Precaching critical resources');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return cacheName.startsWith('qfield-') && 
                   cacheName !== CACHE_NAME && 
                   cacheName !== STATIC_CACHE;
          })
          .map(cacheName => {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external requests (different origin)
  if (url.origin !== location.origin) return;
  
  // Determine cache strategy
  let strategy = null;
  for (const [name, config] of Object.entries(CACHE_STRATEGIES)) {
    if (config.match.test(url.pathname)) {
      strategy = config;
      break;
    }
  }
  
  if (!strategy) {
    // Default strategy for unmatched requests
    strategy = CACHE_STRATEGIES.pages;
  }
  
  event.respondWith(
    handleRequest(request, strategy)
  );
});

// Cache strategy implementations
async function handleRequest(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cachedResponse = await cache.match(request);
  
  switch (strategy.strategy) {
    case 'CacheFirst':
      if (cachedResponse && !isExpired(cachedResponse, strategy.maxAge)) {
        return cachedResponse;
      }
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.status === 200) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        return cachedResponse || new Response('Offline', { status: 503 });
      }
    
    case 'NetworkFirst':
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.status === 200) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        return cachedResponse || new Response('Offline', { status: 503 });
      }
    
    default:
      return fetch(request);
  }
}

// Check if cached response is expired
function isExpired(response, maxAge) {
  const dateHeader = response.headers.get('date');
  if (!dateHeader) return true;
  
  const responseTime = new Date(dateHeader).getTime();
  return (Date.now() - responseTime) > maxAge;
}