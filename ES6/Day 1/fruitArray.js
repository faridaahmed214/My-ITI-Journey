var fruits = ["Apple", "strawberry", "Banana", "Orange", "Mango"];
let displayLog = [];

let checkString = fruits.every((fruit) => typeof fruit === "string");
displayLog.push(`Every (is string?): ${checkString}`);

let checkA = fruits.some((fruit) => fruit.toLowerCase().startsWith("a"));
displayLog.push(`Some (Starts with A?): ${checkA}`);

let filtered = fruits.filter(
  (fruit) =>
    fruit.toLowerCase().startsWith("s") || fruit.toLowerCase().startsWith("b"),
);

displayLog.push(`Filter (S or B): [${filtered.join(", ")}]`);

let mappedArray = fruits.map((fruit) => "I like " + fruit);
displayLog.push(`Map function applied.`);

mappedArray.forEach((fruit) => displayLog.push(`ForEach: ${fruit}`));

const output3 = document.getElementById("result3");
output3.innerHTML =
  `Original: [${fruits.join(", ")}]\n\n` + displayLog.join("\n\n");
