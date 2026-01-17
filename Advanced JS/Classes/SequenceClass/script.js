function Sequence(start, end, step) {
  let list = [];

  let fillList = function () {
    if (step === 0) throw new Error("Step cannot be 0");

    for (let i = start; i <= end; i += step) {
      list.push(i);
    }
  };

  fillList();

  let isDuplicate = function (val) {
    return list.includes(val);
  };

  this.getList = function () {
    return list.slice();
  };

  this.append = function (val) {
    if (isDuplicate(val)) {
      throw new Error("Error: " + val + " already exists");
    }
    if (list.length > 0) {
      let lastVal = list[list.length - 1];
      if (val !== lastVal + step) {
        throw new Error("Exception: Value " + val + " is not in the seq");
      }
    }

    list.push(val);
    console.log("Appended:", val);
  };

  this.prepend = function (val) {
    if (isDuplicate(val)) {
      throw new Error("Error: " + val + " already exists");
    }
    if (list.length > 0) {
      let firstVal = list[0];
      if (val !== firstVal - step) {
        throw new Error("Exception: Value " + val + " is not in the seq");
      }
    }

    list.splice(0, 0, val);
    console.log("Prepended:", val);
  };

  this.pop = function () {
    if (list.length === 0) throw new Error("List is empty");
    let removed = list.pop();
    console.log(removed + " is Popped");
    return removed;
  };

  this.dequeue = function () {
    if (list.length === 0) throw new Error("List is empty");
    let removed = list.splice(0, 1);
    console.log("Dequeued:", removed);
    return removed;
  };

  this.display = function () {
    console.log("Current Sequence:", list.slice());
  };
}

let mySeq = new Sequence(5, 50, 10);
mySeq.display();
console.log("Trying to access private list:", mySeq.list);
try {
  mySeq.append(55);
} catch (e) {
  console.error(e.message);
}
mySeq.display();
try {
  mySeq.append(70);
} catch (e) {
  console.error("Catch Expected Error:", e.message);
}

try {
  mySeq.prepend(-5);
} catch (e) {
  console.error(e.message);
}
mySeq.display();
try {
  mySeq.prepend(5);
} catch (e) {
  console.error("Catch Expected Error:", e.message);
}
mySeq.pop();
mySeq.display();
mySeq.dequeue();
mySeq.display();
