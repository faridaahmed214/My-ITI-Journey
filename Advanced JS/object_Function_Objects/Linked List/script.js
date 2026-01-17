var LinkedList = {
  data: [],

  isDuplicate: function (value) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].val === value) {
        return true;
      }
    }
    return false;
  },

  pushVal: function (itemObj) {
    var val = itemObj.val;
    if (this.isDuplicate(val)) {
      console.log("Error: " + val + " already exists");
      return;
    }

    if (this.data.length === 0) {
      this.data.push(itemObj);
    } else {
      var lastItem = this.data[this.data.length - 1];
      if (val > lastItem.val) {
        this.data.push(itemObj);
      } else {
        throw new Error("Exception: Value " + val + " does not fit after " + lastItem.val);
      }
    }
  },

  enqueue: function (itemObj) {
    this.pushVal(itemObj);
  },

  insertVal: function (index, itemObj) {
    var val = itemObj.val;

    if (this.isDuplicate(val)) {
      console.log("Error: " + val + " already exists");
      return;
    }

    if (index < 0 || index > this.data.length) {
      throw new Error("Exception: Index out of bounds");
    }

    var canInsert = false;

    if (this.data.length === 0) {
      canInsert = true;
    } else if (index === 0) {
      if (val < this.data[0].val) canInsert = true;
    } else if (index === this.data.length) {
      if (val > this.data[index - 1].val) canInsert = true;
    } else {
      var prevVal = this.data[index - 1].val;
      var nextVal = this.data[index].val;
      if (val > prevVal && val < nextVal) canInsert = true;
    }

    if (canInsert) {
      this.data.splice(index, 0, itemObj);
    } else {
      throw new Error("Exception: Value " + val + " does not fit at index " + index);
    }
  },

  removeVal: function (value) {
    var indexFound = -1;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].val === value) {
        indexFound = i;
        break;
      }
    }
    if (indexFound !== -1) {
      this.data.splice(indexFound, 1);
      console.log("Item " + value + " removed.");
    } else {
      console.log("Data not found");
    }
  },

  popVal: function () {
    if (this.data.length === 0) return;
    this.data.pop();
  },

  dequeue: function () {
    if (this.data.length === 0) return;
    this.data.splice(0, 1);
  },

  display: function () {
    var tempOutput = [];
    for (var i = 0; i < this.data.length; i++) {
      tempOutput.push(this.data[i].val);
    }
    console.log(tempOutput);
  },
};


LinkedList.pushVal({val: 10});
LinkedList.pushVal({val: 30});
LinkedList.pushVal({val: 50});
LinkedList.display(); 

try {
    LinkedList.insertVal(1, {val: 20});
    LinkedList.display();
} catch (e) { console.log(e.message); }

try {
    LinkedList.pushVal({val: 5}); 
} catch (e) { console.log(e.message); }

LinkedList.removeVal(30);
LinkedList.display(); 
LinkedList.dequeue();
LinkedList.display(); 
LinkedList.popVal();
LinkedList.display();