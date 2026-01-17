{
  function Vehicle(speed, color) {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract Class 'Vehicle' cannot be instantiated.");
    }
    if (typeof speed !== "number") {
      throw new Error("Property 'speed' must be a number.");
    }
    if (typeof color !== "number") {
      throw new Error("Property 'color' must be a number.");
    }
    Object.defineProperties(this, {
      speed: {
        value: speed,
        writable: false,
        enumerable: false,
        configurable: false,
      },
      color: {
        value: color,
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });
  }
  Vehicle.prototype.turnLeft = function () {
    console.log("Vehicle is turning LEFT");
  };
  Vehicle.prototype.turnRight = function () {
    console.log("Vehicle is turning RIGHT");
  };
  Vehicle.prototype.start = function () {
    console.log("Vehicle Started");
    return true;
  };
  Vehicle.prototype.stop = function () {
    console.log("Vehicle Stopped");
    return false;
  };
  Vehicle.prototype.goBackward = function (speed, accel) {
    console.log("Going BACKWARD with speed " + speed + " and accel" + accel);
  };
  Vehicle.prototype.goForward = function (speed, accel) {
    console.log("Going FORWARD with speed " + speed + " and accel" + accel);
  };
  Vehicle.prototype.toString = function () {
    return "Vehicle [speed= " + this.speed + ", color= " + this.color + " ]";
  };
  Vehicle.prototype.valueOf = function () {
    return this.speed;
  };
}
{
  function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
    Vehicle.call(this, speed, color);

    if (typeof sizeOfEngine !== "number") {
      throw new Error("Property 'sizeOfEngine' must be a number.");
    }
    if (typeof licensePlate !== "string") {
      throw new Error("Property 'licensePlate' must be a string.");
    }

    Object.defineProperties(this, {
      sizeOfEngine: {
        value: sizeOfEngine,
        writable: false,
        enumerable: false,
        configurable: false,
      },
      licensePlate: {
        value: licensePlate,
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });
  }

  MotorVehicle.prototype = Object.create(Vehicle.prototype);
  MotorVehicle.prototype.constructor = MotorVehicle;

  MotorVehicle.prototype.getSizeOfEngine = function () {
    console.log(this.sizeOfEngine);
  };

  MotorVehicle.prototype.getLicensePlate = function () {
    console.log(this.licensePlate);
  };

  MotorVehicle.prototype.toString = function () {
    return (
      "MotorVehicle [ " +
      Vehicle.prototype.toString.call(this) +
      ", Engine= " +
      this.sizeOfEngine +
      ", Plate= " +
      this.licensePlate +
      " ]"
    );
  };
}
{
  function DumpTruck(
    speed,
    color,
    sizeOfEngine,
    licensePlate,
    loadCapacity,
    numWheels,
    weight
  ) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

    if (typeof loadCapacity !== "number") {
      throw new Error("Property 'loadCapacity' must be a number.");
    }
    if (typeof numWheels !== "number") {
      throw new Error("Property 'numWheels' must be a number.");
    }
    if (typeof weight !== "number") {
      throw new Error("Property 'weight' must be a number.");
    }

    var _loadCapacity = loadCapacity;
    var _numWheels = numWheels;
    var _weight = weight;

    Object.defineProperties(this, {
      loadCapacity: {
        get: function () {
          return _loadCapacity;
        },
        set: function (val) {
          if (typeof val !== "number") {
            throw new Error("Property 'loadCapacity' must be a number.");
          }
          _loadCapacity = val;
        },
        enumerable: true,
        configurable: false,
      },
      numWheels: {
        get: function () {
          return _numWheels;
        },
        set: function (val) {
          if (typeof val !== "number") {
            throw new Error("Property 'numWheels' must be a number.");
          }
          _numWheels = val;
        },
        enumerable: true,
        configurable: false,
      },
      weight: {
        get: function () {
          return _weight;
        },
        set: function (val) {
          if (typeof val !== "number") {
            throw new Error("Property 'weight' must be a number.");
          }
          _weight = val;
        },
        enumerable: true,
        configurable: false,
      },
    });
  }
  DumpTruck.prototype = Object.create(MotorVehicle.prototype);
  DumpTruck.prototype.constructor = DumpTruck;
  DumpTruck.prototype.lowerLoad = function () {
    console.log("Lowering load...");
  };
  DumpTruck.prototype.raiseLoad = function () {
    console.log("Raising load...");
  };

  DumpTruck.prototype.toString = function () {
    return (
      "DumpTruck [ " +
      MotorVehicle.prototype.toString.call(this) +
      ", Capacity=" +
      this.loadCapacity +
      ", Wheels=" +
      this.numWheels +
      ", Weight=" +
      this.weight +
      " ]"
    );
  };

  function Car(
    speed,
    color,
    sizeOfEngine,
    licensePlate,
    numOfDoors,
    numWheels,
    weight
  ) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
    if (typeof numOfDoors !== "number") {
      throw new Error("Property 'numOfDoors' must be a number.");
    }
    if (typeof numWheels !== "number") {
      throw new Error("Property 'numWheels' must be a number.");
    }
    if (typeof weight !== "number") {
      throw new Error("Property 'weight' must be a number.");
    }
    var _numOfDoors = numOfDoors;
    var _numWheels = numWheels;
    var _weight = weight;
    Object.defineProperties(this, {
      numOfDoors: {
        get: function () {
          return _numOfDoors;
        },
        set: function (val) {
          if (typeof val !== "number") {
            throw new Error("Property 'numOfDoors' must be a number.");
          }
          _numOfDoors = val;
        },
        enumerable: true,
        configurable: false,
      },
      numWheels: {
        get: function () {
          return _numWheels;
        },
        set: function (val) {
          if (typeof val !== "number") {
            throw new Error("Property 'numWheels' must be a number.");
          }
          _numWheels = val;
        },
        enumerable: true,
        configurable: false,
      },
      weight: {
        get: function () {
          return _weight;
        },
        set: function (val) {
          if (typeof val !== "number") {
            throw new Error("Property 'weight' must be a number.");
          }
          _weight = val;
        },
        enumerable: true,
        configurable: false,
      },
    });
  }
  Car.prototype = Object.create(MotorVehicle.prototype);
  Car.prototype.constructor = Car;

  Car.prototype.switchOnAirCon = function () {
    console.log("Air Conditioner is ON");
  };
  Car.prototype.getNumOfDoors = function () {
    console.log(this.numOfDoors);
  };
  Car.prototype.toString = function () {
    return (
      "Car [ " +
      MotorVehicle.prototype.toString.call(this) +
      ", Doors=" +
      this.numOfDoors +
      ", Wheels=" +
      this.numWheels +
      ", Weight=" +
      this.weight +
      " ]"
    );
  };
}

{
  try {
    const v = new Vehicle(100, 0);
    console.error("FAILED: Vehicle instantiated directly!");
  } catch (e) {
    console.log("SUCCESS: " + e.message);
  }

  const myCar = new Car(180, 0, 1600, "ABC-123", 4, 4, 1500);
  const myTruck = new DumpTruck(100, 1, 3000, "TRK-999", 5000, 6, 8000);

  console.log(myCar.toString());
  console.log(myTruck.toString());

  myCar.start();
  myCar.turnLeft();
  myCar.switchOnAirCon();
  myTruck.raiseLoad();

  console.log("Old Car Weight: " + myCar.weight);

  myCar.weight = 2000;
  console.log("New Car Weight (Updated): " + myCar.weight);

  try {
    myCar.weight = "Heavy";
  } catch (e) {
    console.log("SUCCESS: Caught invalid weight update -> " + e.message);
  }
  console.log(
    "Car Weight after invalid update (Should be 2000): " + myCar.weight
  );

  console.log("Speed before: " + myCar.speed);
  try {
    myCar.speed = 300;
  } catch (e) {
    console.log("Error writing to read-only property (Strict mode)");
  }
  console.log("Speed after attempt (Should be 180): " + myCar.speed);

  const totalSpeed = myCar + myTruck;
  console.log("Car Speed + Truck Speed = " + totalSpeed);

  if (totalSpeed === 280) {
    console.log("SUCCESS: Math operation worked.");
  } else {
    console.error("FAILED: Math operation result is wrong.");
  }
}
