function getCookie(cookieName) {
  if (arguments.length === 0) {
    throw new Error("The cookie name is required");
  }

  if (typeof cookieName !== "string" || cookieName.trim() === "") {
    throw new Error("Invalid cookie name");
  }

  if (arguments.length > 1) {
    throw new Error("Too many arguments");
  }

  let cookieArr = document.cookie.split("; ");

  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i];

    if (cookie.startsWith(cookieName + "=")) {
      return cookie.split("=")[1];
    }
  }

  return "";
}

function setCookie(cookieName, cookieValue, expiryDate) {
  if (arguments.length < 2) {
    throw new Error("At least cookie name and value are required");
  }
  if (typeof cookieName !== "string" || cookieName.trim() === "") {
    throw new Error("Invalid cookie name");
  }
  if (typeof cookieValue !== "string" || cookieValue.trim() === "") {
    throw new Error("Invalid cookie value");
  }

  let safeName = encodeURIComponent(cookieName.trim());
  let safeValue = encodeURIComponent(cookieValue.trim());

  let cookieString = safeName + "=" + safeValue + "; path=/;";

  if (typeof expiryDate === "number") {
    let d = new Date();
    d.setTime(d.getTime() + expiryDate * 24 * 60 * 60 * 1000);
    cookieString += "expires=" + d.toUTCString() + ";";
  }

  document.cookie = cookieString;
  return cookieString;
}
function deleteCookie(cookieName) {
  if (arguments.length === 0) {
    throw new Error("The cookie name is required");
  }
  if (typeof cookieName !== "string" || cookieName.trim() === "") {
    throw new Error("Invalid cookie name");
  }
  if (arguments.length > 1) {
    throw new Error("Too many arguments");
  }
  document.cookie = cookieName + "=; expires=Fri, 02 Jan 2004 00:00:00 UTC;";
}

function allCookieList() {
  let cookieArr = document.cookie.split("; ");
  return cookieArr;
}

function hasCookie(cookieName) {
  if (arguments.length === 0) {
    throw new Error("The cookie name is required");
  }
  if (typeof cookieName !== "string" || cookieName.trim() === "") {
    throw new Error("Invalid cookie name");
  }
  if (arguments.length > 1) {
    throw new Error("Too many arguments");
  }
  let cookieArr = document.cookie.split("; ");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i];
    if (cookie.startsWith(cookieName + "=")) {
      return true;
    }
  }
  return false;
}
