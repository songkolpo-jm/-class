const C='ytp-v13',F=['./','./index.html','./manifest.webmanifest','./icon.svg','./favicon.svg','./favicon.ico','./icon-192.png','./icon-256.png','./icon-384.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
const ok=u=>u.origin===location.origin||(u.hostname==='www.gstatic.com'&&u.pathname.startsWith('/firebasejs/'));
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||!ok(new URL(e.request.url)))return;
e.respondWith(fetch(e.request).then(r=>{if(r.ok){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x))}return r}).catch(()=>caches.match(e.request)))});
