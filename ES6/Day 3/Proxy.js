let myObj = {
  name: "faridaa",
  age: 20,
  address: "giza",
};

let handler = {
  set: function (target, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number") {
        throw new TypeError("Age must be a number");
      }
      if (value < 25 || value > 60) {
        throw new RangeError("Age must be between 25 and 60");
      }
    } else if (prop === "name") {
      if (typeof value !== "string") {
        throw new TypeError("Name must be a string");
      }
      if (value.length !== 7) {
        throw new RangeError("Name must be 7 characters long");
      } else if (prop === "address") {
        if (typeof value !== "string") {
          throw new TypeError("Address must be a string");
        }
      }
    }
    target[prop] = value;
    return true;
  },
};

let proxyObj = new Proxy(myObj, handler);

try {
  proxyObj.age = 30;
  console.log("Age set to:", proxyObj.age);
} catch (e) {
  console.error(e.message);
}

try {
  proxyObj.name = "faridaa";
  console.log("Name set to:", proxyObj.name);
} catch (e) {
  console.error(e.message);
}

try {
  proxyObj.address = "giza";
  console.log("Address set to:", proxyObj.address);
} catch (e) {
  console.error(e.message);
}

try {
  proxyObj.age = 22;
} catch (e) {
  console.error(e.message);
}

try {
  proxyObj.name = "farida";
} catch (e) {
  console.error(e.message);
}
try {
  proxyObj.address = 12345;
} catch (e) {
  console.error(e.message);
}
