// ==================== Problem 1 ====================
const capitalizeText = (input) => {
  if (typeof input !== "string"){
    throw new TypeError("parameter should be string")
  };
  return input.toUpperCase();
};

// ==================== Problem 2 ====================
const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

// ==================== Problem 4 ====================
function CheckPositivity(x){
  if(x > 0){
    return true;
  } else {
    return false;
  }
}

// ==================== Problem 5 ====================
function Mult(x){
  if (x <= 0) {
    throw new Error("x should be greater than 0");
  }
  return x * 2;
}


document.getElementById('myForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numValue = document.getElementById('numInput').value;
    const strValue = document.getElementById('strInput').value;
    
    const numError = document.getElementById('numError');
    const strError = document.getElementById('strError');
    
    numError.textContent = "";
    strError.textContent = "";
    
    if (numValue === "" || isNaN(numValue)) {
        numError.textContent = "Please enter a valid number.";
    }
    
    const regexLetters = /^[A-Za-z\s]+$/;
    if (strValue === "" || !regexLetters.test(strValue)) {
        strError.textContent = "Please enter a valid string (letters only).";
    }
});