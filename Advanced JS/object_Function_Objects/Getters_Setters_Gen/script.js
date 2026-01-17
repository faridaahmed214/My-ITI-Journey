var myObj = {
  id: "ay haga",
  location: "ay kalam",
  addr: "----",

  getSetGen: function () {
    var me = this;

    for (var key in this) {
      if (typeof this[key] !== "function") {
        (function (rightKey) {
          var caprightKey =
            rightKey.charAt(0).toUpperCase() + rightKey.slice(1);

          me["get" + caprightKey] = function () {
            return me[rightKey];
          };

          me["set" + caprightKey] = function (val) {
            me[rightKey] = val;
          };
        })(key);
      }
    }
  },
};

console.log("Testing myObj");
myObj.getSetGen();

console.log(myObj.getId());
myObj.setLocation("Smart Village");
console.log(myObj.getLocation());

console.log(" Testing another object");

var user = {
  name: "farida",
  age: 22,
};

myObj.getSetGen.call(user);

console.log(user.getName());

user.setAge(25);
console.log(user.getAge());
console.log(user);
