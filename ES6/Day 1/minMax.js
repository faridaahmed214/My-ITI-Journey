function minMax(...args) {
  let min = Math.min(...args);
  let max = Math.max(...args);
  return { min: min, max: max };
}

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let { min: elso8ayyar, max: elkebeer } = minMax(...numbers);

const output2 = document.getElementById("result2");
output2.innerHTML = `Input Numbers: ${numbers.join(", ")}
Min Value: ${elso8ayyar}
Max Value: ${elkebeer}`;
