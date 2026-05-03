const CACHE_NAME = "sakina-app-v4"; // غيرنا الرقم لـ 4 عشان نضمن التحديث
const ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/404.html",
  "/style.css",
  "/script.js",
  "/images/icon192.png", // تأكدي إن أسماء الصور دي صح 100%
  "/images/icon512.png",
];

// 1. Install Event (تسطيب التطبيق وحفظ الملفات)
self.addEventListener("install", (event) => {
  self.skipWaiting(); // أمر فوري بتشغيل الـ Service Worker الجديد
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching Assets...");
        return cache.addAll(ASSETS);
      })
      .catch((err) => console.log("Error Caching Assets:", err)),
  );
});

// 2. Activate Event (تنظيف الكاش القديم)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        }),
      );
    }),
  );
  return self.clients.claim(); // السيطرة الفورية على الصفحات المفتوحة
});

// 3. Fetch Event (التعامل مع الشبكة والـ Offline)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        // التعامل مع الرابط الخطأ (404) لو جاي من السيرفر
        if (res.status === 404) {
          return caches.match("/404.html");
        }

        // التخزين الديناميكي (أي حاجة جديدة نحفظها للمرة الجاية)
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, resClone);
        });

        return res;
      })
      .catch((err) => {
        // في حالة انقطاع الإنترنت (Offline Error)
        return caches.match(event.request).then((cachedRes) => {
          // 1. لو الملف محفوظ في الكاش، هاته
          if (cachedRes) {
            return cachedRes;
          }

          // 2. لو مش محفوظ، وهو "صفحة HTML"، هات صفحة الأوفلاين
          if (event.request.headers.get("accept").includes("text/html")) {
            return caches.match("/offline.html");
          }

          // 3. (مهم جداً) لو مش محفوظ ومش HTML (صورة مثلاً)، رجع رد فاضي عشان ميعملش Crash
          return new Response("Offline - Resource Not Found", {
            status: 404,
            statusText: "Not Found",
          });
        });
      }),
  );
});
