let str = prompt("Enter a string to check if it's a palindrome:");
let caseSensitive = confirm("Should the check be case sensitive?");
let strNoPunct = str.replace(/[^a-zA-Z0-9]/g, "");
if (!caseSensitive) {
    strNoPunct = strNoPunct.toLowerCase();
}
let isPalindrome = true;
let reversedStr = strNoPunct.split('').reverse().join('');
if (strNoPunct !== reversedStr) {
    isPalindrome = false;
}
alert('"' + str + '" is ' + (isPalindrome ? 'a' : 'not a') + ' palindrome.');  