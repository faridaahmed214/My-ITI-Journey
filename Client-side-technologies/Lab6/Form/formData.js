let queryString = window.location.search;
let clearedString = queryString.replace("?", "");
let urlParams = clearedString.split("&");
let formData = {};

for (let i = 0; i < urlParams.length; i++) {
  if (urlParams[i]) {
    let key = urlParams[i].split("=")[0].replace("+", " ");
    let value = urlParams[i].split("=")[1].replace("+", " ");
    formData[key] = decodeURIComponent(value);
  }
}

document.getElementById("displayName").innerText =
  "Hello " +
  (formData.gender == "male" ? "Mr." : "Mrs.") +
  " " +
  formData.username;
document.getElementById("displayImage").src =
  formData.gender == "male" ? "male.png" : "female.png";
document.getElementById("displayData").innerText =
  "Email: " +
  formData.email +
  "\n" +
  "Address: " +
  formData.address +
  "\n" +
  "Mobile: " +
  formData.mobile;

let userAgent = window.navigator.userAgent;

let isGoogleChrome =
  userAgent.includes("Chrome") &&
  !userAgent.includes("Edg") &&
  !userAgent.includes("OPR");

if (!isGoogleChrome) {
  alert("For better experience, please use Google Chrome browser.");
}
