let registered = document.getElementById("greetBtn");

registered.addEventListener("click", function () {
  let userName = document.getElementById("nameInput").value.trim();
  let userAge = document.getElementById("ageInput").value.trim();
  let userGender = document.querySelector('input[name="gender"]:checked').value;
  let userFavColor = document.getElementById("favColorSelect").value.trim();

  if (userName === "") {
    alert("Please enter your name");
    return;
  }

  let specificCookieName = "visitCount_" + userName;

  let visits = getCookie(specificCookieName);

  let newCount = 1;
  if (visits !== "") {
    newCount = parseInt(visits) + 1;
  }

  setCookie("userName", userName, 30);
  setCookie("userAge", userAge, 30);
  setCookie("userGender", userGender, 30);
  setCookie("userFavColor", userFavColor, 30);

  setCookie(specificCookieName, String(newCount), 30);

  location.assign("profile.html");
});
