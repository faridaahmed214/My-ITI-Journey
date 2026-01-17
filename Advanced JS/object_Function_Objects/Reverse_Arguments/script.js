function reverseWay1() {
  let args = [].reverse.apply(arguments);
  return args;
}

function reverseWay2() {
  let args = [].slice.call(arguments);
  args.reverse();
  return args;
}

function reverseWay3() {
  return arguments.reverse();
}
console.log(reverseWay1(1, 2, 3, 4, 5));
console.log(reverseWay2(1, 2, 3, 4, 5));
console.log(reverseWay3(1, 2, 3, 4, 5));
