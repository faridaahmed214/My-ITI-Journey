let str = prompt("Enter a string:");

function longestSubstring(s) {
    let longestWord = '';
    let splitted = s.split(' ');
    for (let i = 0; i < splitted.length; i++) {
        if (longestWord.length < splitted[i].length) {
            longestWord = splitted[i];
        }
    }
    return longestWord;
}

alert("Longest word is: " + longestSubstring(str));
console.log(longestSubstring(str));