import { describe, it, expect } from "@jest/globals";
import { Add, AddV2, AddV3, AddV4, AddV5 } from "./stringCalculator";

describe("String Calculator - Step 1: 0 or 1 number", () => {
  it("should return 0 for an empty string", () => {
    expect(Add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(Add("1")).toBe(1);
  });
});

describe("String Calculator - Step 2: 2 numbers", () => {
  it("should return 0 for an empty string", () => {
    expect(AddV2("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(AddV2("1")).toBe(1);
  });

  it("should return the sum of two comma-separated numbers", () => {
    expect(AddV2("1,2")).toBe(3);
  });
});

describe("String Calculator - Step 3: Unknown number of numbers", () => {
  it("should return 0 for an empty string", () => {
    expect(AddV3("")).toBe(0);
  });

  it("should handle a single number", () => {
    expect(AddV3("1")).toBe(1);
  });

  it("should handle two numbers", () => {
    expect(AddV3("1,2")).toBe(3);
  });

  it("should handle three numbers", () => {
    expect(AddV3("1,2,3")).toBe(6);
  });

  it("should handle many numbers", () => {
    expect(AddV3("1,2,3,4,5")).toBe(15);
  });
});

describe("String Calculator - Step 4: Newlines as delimiters", () => {
  it("should return 0 for an empty string", () => {
    expect(AddV4("")).toBe(0);
  });

  it("should handle comma-separated numbers", () => {
    expect(AddV4("1,2")).toBe(3);
  });

  it("should handle newline between numbers", () => {
    expect(AddV4("1\n2")).toBe(3);
  });

  it("should handle mix of newlines and commas", () => {
    expect(AddV4("1\n2,3")).toBe(6);
  });

  it("should handle multiple newlines", () => {
    expect(AddV4("1\n2\n3\n4")).toBe(10);
  });
});

describe("String Calculator - Step 5: Negatives not allowed", () => {
  it("should still work with positive numbers", () => {
    expect(AddV5("1\n2,3")).toBe(6);
  });

  it("should throw when a single negative is passed", () => {
    expect(() => AddV5("-1,2,3")).toThrow("negatives not allowed: -1");
  });

  it("should throw and list all negatives", () => {
    expect(() => AddV5("-1,2,-3")).toThrow("negatives not allowed: -1, -3");
  });

  it("should throw when all numbers are negative", () => {
    expect(() => AddV5("-1,-2,-3")).toThrow("negatives not allowed: -1, -2, -3");
  });
});
