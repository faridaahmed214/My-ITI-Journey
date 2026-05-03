// تسجيل الـ Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
            .then(() => console.log("تم تسجيل الـ Service Worker بنجاح ✅"))
            .catch((err) => console.log("فشل تسجيل الـ Service Worker ❌", err));
    });
}

// التعامل مع زر التثبيت المخصص
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    // 1. منع ظهور نافذة التثبيت التلقائية
    e.preventDefault();
    // 2. حفظ الحدث لاستخدامه لاحقاً
    deferredPrompt = e;
    // 3. إظهار زر التثبيت الخاص بنا
    installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", () => {
    if (deferredPrompt) {
        // إظهار نافذة التثبيت
        deferredPrompt.prompt();
        // متابعة اختيار المستخدم
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("المستخدم وافق على التثبيت");
            } else {
                console.log("المستخدم رفض التثبيت");
            }
            deferredPrompt = null;
            // إخفاء الزر مرة أخرى
            installBtn.style.display = "none";
        });
    }
});