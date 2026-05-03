let obj = {
  name: "farida",
  age: 22,
  country: "Egypt",

  [Symbol.iterator]: function* () {
    let keys = Object.keys(this);

    for (let key of keys) {
      yield [key, this[key]];
    }
    //   keys.forEach(element => {
    //     yield [element, this[element]];

    //   });
  },
};

for (let [key, val] of obj) {
  console.log(`${key} : ${val}`);
}



// 1. Ne3mel el Object
let myRequest = new XMLHttpRequest();
// 2. Nejahhez el Talab (Method, URL, Async?)
myRequest.open("GET", "https://api.github.com/users/faridaahmed", true);
// 3. El Moraqeb (Event) - Hena byra2eb el taghyerat
myRequest.onreadystatechange = function () {
    //console.log(this.readyState); // Hatshoofi 1, 2, 3, 4 bytb3o wara ba3d
    // "El Shart el Zahaby"
    // Lazem ata2ked enno "Khalllas" (4) WA "Nege7" (200)
    if (this.readyState === 4 && this.status === 200) {
        // Hena bas a2dar asta5dem el Data!
        console.log(this.responseText); // El Data gat ahieh
    }
};
// 4. Eb3at ya basha
myRequest.send();