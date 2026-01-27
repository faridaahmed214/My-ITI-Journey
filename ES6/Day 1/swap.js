let a = 5;
let b = 10;
let msgBefore = `Before: a = ${a}, b = ${b}`;

[a, b] = [b, a]; 

let msgAfter = `After:  a = ${a}, b = ${b}`;

const output1 = document.getElementById('result1');
output1.innerHTML = `${msgBefore} \n ${msgAfter}`;