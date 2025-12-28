var start = parseInt(prompt("Enter the start of the range:"));
var end = parseInt(prompt("Enter the end of the range:"));
var state = prompt("Enter 'even' to sum even numbers or 'odd' to sum odd numbers or 'no' to sum all numbers:");
var sum = 0;
var nums = '';
for (var i = start; i <= end; i++) {
    if (state === "even" && i % 2 === 0) {
      nums += i + " ";
    sum += i;
  } else if (state === "odd" && i % 2 !== 0) {
    nums += i + " ";
    sum += i;
    } else if (state === "no") {
    nums += i + " ";
    sum += i;
  }
}

console.log(
  "%cThe sum of " + state + " numbers between " + start + " and " + end + " is: " + sum + ". (Numbers: " + nums + ")", 
  "color: #007bff; font-weight: bold;");
