var sum = 0;
var input = prompt("Enter a number (0 to stop):");
var num = parseInt(input);

while (num !== 0 && sum <= 100) {
  if (!isNaN(num)) {
    sum += num;
  } else {
    alert("Please enter a valid number");
  }

  if (sum <= 100) {
    input = prompt("Enter another number (0 to stop):");
    num = parseInt(input);
  }
}

console.log("The total sum is: " + sum);
