{
  function Shape(length, width) {
    if (this.constructor === Shape) {
      throw new Error(
        "Abstract Class 'Shape' cannot be instantiated directly."
      );
    }
    Object.defineProperties(this, {
      length: {
        value: length,
        writable: false,
        enumerable: false,
        configurable: false,
      },
      width: {
        value: width,
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });
  }

  Shape.prototype.getArea = function () {
    throw new Error("Method 'getArea()' must be implemented by subclasses.");
  };
  Shape.prototype.getPerimeter = function () {
    throw new Error(
      "Method 'getPerimeter()' must be implemented by subclasses."
    );
  };
  Shape.prototype.toString = function () {
    throw new Error("Method 'toString()' must be implemented by subclasses.");
  };
}
{
  function Rectangle(length, width) {
    if (Rectangle.instance && this.constructor === Rectangle) {
      return Rectangle.instance;
    }
    Shape.call(this, length, width);
    Rectangle.instance = this;
  }

  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;

  Rectangle.prototype.getArea = function () {
    return this.length * this.width;
  };
  Rectangle.prototype.getPerimeter = function () {
    return 2 * (this.length + this.width);
  };
  Rectangle.prototype.toString = function () {
    return (
      "Rectangle[length=" +
      this.length +
      ",width=" +
      this.width +
      ",area=" +
      this.getArea() +
      ",perimeter=" +
      this.getPerimeter() +
      "]"
    );
  };
  Rectangle.prototype.valueOf = function () {
    return this.getArea();
  };
}
{
  function Square(length) {
    if (Square.instance) {
      throw new Error(
        "Singleton Class 'Square' cannot be instantiated more than once."
      );
    }
    Rectangle.call(this, length, length);
    Square.counter++;
    Square.instance = this;
  }

  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;

  Square.counter = 0;
  Square.getCount = function () {
    return Square.counter;
  };

  Square.prototype.toString = function () {
    return (
      "Square[length=" +
      this.length +
      ",area=" +
      this.getArea() +
      ",perimeter=" +
      this.getPerimeter() +
      "]"
    );
  };
}
{
  try {
    let shape = new Shape(10, 20);
    console.error("FAILED: Shape instantiated directly.");
  } catch (e) {
    console.log("SUCCESS: " + e.message);
  }
  let rect1 = new Rectangle(10, 5);
  console.log("rect1: " + rect1.toString());
  let rect2 = new Rectangle(50, 50);
  console.log("rect2: " + rect2.toString());
  let sumResult = rect1 + rect2;
  if (rect1 === rect2 && rect2.length === 10) {
    console.log(
      "SUCCESS: Rectangle is Singleton (rect1 === rect2) and sum is " +
        sumResult
    );
  } else {
    console.error("FAILED: Rectangle created a new instance.");
  }
  let sq1 = new Square(5);
  console.log("sq1: " + sq1.toString());

  try {
    let sq2 = new Square(9);
    console.error("FAILED: Second Square was created (Should allow only one).");
  } catch (e) {
    console.log("SUCCESS: " + e.message);
  }
  console.log("Square Count (Should be 1): " + Square.getCount());
  let result = rect1 + sq1;
  console.log("rect1 + sq1 = " + result);
  if (result === 75) {
    console.log("SUCCESS: Arithmetic operation worked correctly.");
  } else {
    console.error("FAILED: Arithmetic operation result is wrong.");
  }

  rect1.length = 999;
  delete rect1.width;

  if (rect1.length === 10 && rect1.width === 5) {
    console.log("SUCCESS: Properties are read-only and cannot be deleted.");
  } else {
    console.error("FAILED: Properties were modified or deleted.");
  }
}
