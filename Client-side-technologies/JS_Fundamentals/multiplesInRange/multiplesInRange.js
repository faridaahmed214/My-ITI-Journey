var start = prompt("Enter the start of the range:");
var end = prompt("Enter the end of the range:");

start = parseInt(start);
end = parseInt(end);

var multiplesOfThree = '';
var multipleOfFive = '';
var sum = 0;

for (var i = start; i <= end; i++) {
 
    if (i % 3 === 0) {
        multiplesOfThree += i + ' ';
    }
    if (i % 5 === 0) {
        multipleOfFive += i + ' ';
    }

   

    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log("The numbers between " + start + " and " + end + " that are multiples of 3 are: " + multiplesOfThree);
console.log("The numbers between " + start + " and " + end + " that are multiples of 5 are: " + multipleOfFive);


console.log("The sum of all these numbers is: " + sum);