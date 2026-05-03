let secureSystem = {
  id: 101,
  config: "public-config",
  _hiddenKey: "secret-value"
};

let handler = {
  has(target, prop) {
    if (prop.startsWith("_")) {
      return false;
    }
    return Reflect.has(target, prop);
  },

  deleteProperty(target, prop) {
    if (prop === "id") {
      return false;
    }
    return Reflect.deleteProperty(target, prop);
  },

  ownKeys(target) {
    return Reflect.ownKeys(target).filter(key => !key.startsWith("_"));
  },

  defineProperty(target, prop, descriptor) {
    if (prop === "admin") {
      return false;
    }
    return Reflect.defineProperty(target, prop, descriptor);
  },

  preventExtensions(target) {
    console.log("Freezing system...");
    return Reflect.preventExtensions(target);
  }
};

let proxy = new Proxy(secureSystem, handler);

console.log("config" in proxy);
console.log("_hiddenKey" in proxy);

delete proxy.config;
delete proxy.id;
console.log(secureSystem);

console.log(Object.keys(proxy));

Object.defineProperty(proxy, "newFeature", { value: true });
Object.defineProperty(proxy, "admin", { value: true });
console.log(secureSystem.newFeature);
console.log(secureSystem.admin);

Object.preventExtensions(proxy);
Object.defineProperty(proxy, "anotherOne", { value: 1 });