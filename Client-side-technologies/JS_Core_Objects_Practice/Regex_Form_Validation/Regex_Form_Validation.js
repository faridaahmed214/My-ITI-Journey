let userName = prompt("Enter your name:");
let phoneNo = prompt("Enter your phone number:");
let mobileNo = prompt("Enter your mobile number:");
let email = prompt("Enter your email address:");

let namePattern = /^[A-Za-z\s]+$/;
let phonePattern = /^\d{8}$/;
let mobilePattern = /^01[0125]\d{8}$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isValid = true;

if (!namePattern.test(userName)) {
    console.log("Invalid name.");
    isValid = false;
}
if (!phonePattern.test(phoneNo)) {
    console.log("Invalid phone number.");
    isValid = false;
}
if (!mobilePattern.test(mobileNo)) {
    console.log("Invalid mobile number. ");
    isValid = false;
}
if (!emailPattern.test(email)) {
    console.log("Invalid email.");
    isValid = false; 
}

let color = prompt("Enter a color:");
if (isValid) {
    document.writeln("<h2 style='color:" + color + "; text-align:center;'>Form Submitted Successfully!</h2><br>");
    document.writeln("<h3 style='color:" + color + "; text-align:center;'>Name: " + userName + "</h3><br>");
    document.writeln("<h3 style='color:" + color + "; text-align:center;'>Phone Number: " + phoneNo + "</h3><br>");
    document.writeln("<h3 style='color:" + color + "; text-align:center;'>Mobile Number: " + mobileNo + "</h3><br>");
    document.writeln("<h3 style='color:" + color + "; text-align:center;'>Email: " + email + "</h3><br>");
}
else {
    document.writeln("<h2 style='color:red'; text-align:center;'>Form Submission Failed. Please correct the errors and try again.</h2>");
}