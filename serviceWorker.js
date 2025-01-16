// Nome da key onde ficaram guardados os arquivos
const staticBigBite = "big-bite-pwa-v1"

// Lista de aquivos para ser salvos em cache
const assets = [
    "/",
    "/index.html",
    "/item_details.html",
    "/confirm_order.html",
    "/style.css",
    "/app.js",
    "/assets/logo_w.png",
    "/assets/double-x.jpg",
    "/assets/o-burger-x.jpg",
    "/assets/x-bacon.jpg",
    "/assets/x-burger.jpg",
    "/assets/x-futuro.jpg",
    "/assets/x-salada.jpg",
]

// Salva os arquivos listados em cache
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBigBite).then(cache => {
            cache.addAll(assets)
        })
    )
})

// Trazemos os dados salvos em cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})