function* fibonacciRange(num) {
  let a = 0,
    b = 1;
  for (let i = 0; i < num; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function* fibonacciUpTo(max) {
  let a = 0,
    b = 1;
  while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fibRangeGen = fibonacciRange(5);
for (let num of fibRangeGen) {
  console.log(num);
}

let fibUpToGen = fibonacciUpTo(90);
for (let num of fibUpToGen) {
  console.log(num);
}
