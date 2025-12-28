var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var num3 = prompt("Enter the third number:");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
var divBy12 = num1 % num2 === 0;
var divBy13 = num1 % num3 === 0;
if (divBy12 && divBy13) {
  alert(num1 + " is divisible by both " + num2 + " and " + num3);
} else if (divBy12) {
  alert(num1 + " is divisible by " + num2 + " but not by " + num3);
} else if (divBy13) {
  alert(num1 + " is divisible by " + num3 + " but not by " + num2);
} else {
  alert(num1 + " is not divisible by either " + num2 + " or " + num3);
}
