var str = prompt("Enter a string:");
for (var i = 1; i <= 6; i++) {
  document.writeln(
    "<h" +
      i +
      " style='text-align: center; color: red;'>" +
      str +
      "</h" +
      i +
      "> <br>"
  );
}
