let address = {
    street: "abc st.",
    buildingNum: 15,
    city: "xyz"
}
function showAddress(address) {
    let date = new Date();
    console.log(address.buildingNum + " " + address.street + ", " + address.city+" city registered in "+ date.toLocaleDateString());

}
showAddress(address);


//1.2
let object1 = {
    nm: ' farida',
    age: 22
}
let property = 'age';
function dispVal(obj, str) {
    console.log(obj[str]);
}
dispVal(object1, property);