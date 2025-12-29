let radius = prompt("Enter the radius of the circle:");
radius = parseFloat(radius);
let area = Math.PI * Math.pow(radius, 2);
document.writeln("<h2 style='color:blue'; text-align:center;'>The area of the circle is: " + area + "cm<sup>2</sup></h2>");

let value = prompt("Enter a number to calculate its square root:");
value = parseFloat(value);
let squareRoot = Math.sqrt(value);
alert("The square root of " + value + " is: " + squareRoot);

let angle = prompt("Enter an angle:");
angle = parseFloat(angle);
let radians = angle * (Math.PI / 180);
let cosineValue = Math.cos(radians);
console.log("The cosine of " + angle + " degrees is: " + cosineValue );