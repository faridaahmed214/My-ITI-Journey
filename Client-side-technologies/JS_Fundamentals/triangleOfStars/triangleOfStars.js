var row = prompt("Enter the number of rows");
for (var i = 1; i <= row; i++) {
  var stars = "";
  for (var j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}
