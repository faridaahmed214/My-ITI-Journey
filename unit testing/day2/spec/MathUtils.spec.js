const { MathUtils } = require('../MathUtils');

describe('MathUtils', function() {
  let mathUtils;

  beforeEach(function() {
    mathUtils = new MathUtils();
  });

  describe('sum', function() {
    it('should correctly sum two numbers', function() {
      expect(mathUtils.sum(5, 3)).toBe(8);
      expect(mathUtils.sum(-2, 2)).toBe(0);
    });
  });

  describe('substract', function() {
    it('should correctly subtract two numbers', function() {
      expect(mathUtils.substract(10, 4)).toBe(6);
      expect(mathUtils.substract(5, 10)).toBe(-5);
    });
  });

  describe('multiply', function() {
    it('should correctly multiply two numbers', function() {
      expect(mathUtils.multiply(3, 4)).toBe(12);
      expect(mathUtils.multiply(-2, 5)).toBe(-10);
    });
  });

  describe('divide', function() {
    it('should correctly divide two numbers', function() {
      expect(mathUtils.divide(20, 5)).toBe(4);
      expect(mathUtils.divide(5, 2)).toBe(2.5);
    });
  });

  describe('average', function() {
    it('should correctly calculate the average of two numbers', function() {
      expect(mathUtils.average(10, 20)).toBe(15);
      expect(mathUtils.average(-10, 10)).toBe(0);
    });
  });

  describe('factorial', function() {
    it('should correctly calculate the factorial of a positive number', function() {
      expect(mathUtils.factorial(5)).toBe(120);
      expect(mathUtils.factorial(3)).toBe(6);
    });

    it('should return 1 for factorial of 0', function() {
      expect(mathUtils.factorial(0)).toBe(1);
    });

    it('should return 1 for factorial of 1', function() {
      expect(mathUtils.factorial(1)).toBe(1);
    });

    it('should throw an error for negative numbers', function() {
      expect(function() {
        mathUtils.factorial(-5);
      }).toThrowError("There is no factorial for negative numbers");
    });
  });

  describe('checkPositivity', function() {
    it('should return true for positive numbers', function() {
      expect(mathUtils.checkPositivity(10)).toBe(true);
    });

    it('should return true for 0', function() {
      expect(mathUtils.checkPositivity(0)).toBe(true);
    });

    it('should return false for negative numbers', function() {
      expect(mathUtils.checkPositivity(-10)).toBe(false);
    });
  });
});
