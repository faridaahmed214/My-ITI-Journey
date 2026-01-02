let num = prompt("Enter length of array:");
let arr = [];
for (let i = 0; i < num; i++) {
    let x;
    x = prompt("enter element " + (i + 1));
    arr.push(Number(x));

}

function compareNumbersAsc(a, b) {
    return a - b;
}
function compareNumbersDesc(a, b) {
    return b - a;
}
console.log("Sorted array ASC is: " + arr.sort(compareNumbersAsc));
console.log("Sorted array DESC is: " + arr.sort(compareNumbersDesc));