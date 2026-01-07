function exactlyTwo(p1, p2) {
  if (arguments.length !== 2) {
    throw new Error(
      "number of parameters either less than or exceeds 2 parameters"
    );
  }
  console.log("Success! The two parameters are: " + p1 + " and " + p2);
}

function addNumbers() {
  if (arguments.length === 0) {
    throw new Error("Function called without passing any parameters");
  }

  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error("all data types must be numbers");
    }
    sum += arguments[i];
  }

  return sum;
}

console.log("Test 1");
try {
  console.log(exactlyTwo(10, 20, 30));
} catch (e) {
  console.error(e.message);
}

console.log("Test 2");
try {
  let result = addNumbers(10, 20, "Ali", 40);
  console.log("Result: " + result);
} catch (e) {
  console.error(e.message);
}

console.log(" Test 3");
try {
  console.log("Sum: " + addNumbers(5, 10, 15));
} catch (e) {
  console.error(e.message);
}
