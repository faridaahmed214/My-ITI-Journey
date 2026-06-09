export function Add(numbers: string): number {
  if (numbers === "") return 0;
  return parseInt(numbers);
}

export function AddV2(numbers: string): number {
  if (numbers === "") return 0;

  if (numbers.includes(",")) {
    const parts = numbers.split(",");
    return parseInt(parts[0] ?? "0") + parseInt(parts[1] ?? "0");
  }
  return parseInt(numbers);
}

export function AddV3(numbers: string): number {
  if (numbers === "") return 0;

  const parts = numbers.split(",");
  let sum = 0;
  for (const part of parts) {
    sum += parseInt(part);
  }
  return sum;
}

export function AddV4(numbers: string): number {
  if (numbers === "") return 0;

  const parts = numbers.replace(/\n/g, ",").split(",");
  let sum = 0;
  for (const part of parts) {
    sum += parseInt(part);
  }
  return sum;
}

export function AddV5(numbers: string): number {
  if (numbers === "") return 0;

  const parts = numbers.replace(/\n/g, ",").split(",");
  const nums = parts.map((p) => parseInt(p));

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error("negatives not allowed: " + negatives.join(", "));
  }
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  return sum;
}
