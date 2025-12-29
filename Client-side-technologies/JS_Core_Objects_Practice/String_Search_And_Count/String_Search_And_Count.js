let str = prompt("Enter a string");
let char = prompt("Enter a character to search for");
let caseSensitive = prompt("Should the search be case sensitive?please enter 'yes' or 'no':");
let count = 0;

if (str.length === 0 || char.length === 0) {
    alert("String and character cannot be empty.");


}
else {
    if (caseSensitive.toLowerCase() === 'no') {
    str = str.toLowerCase();
    char = char.toLowerCase();
}
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        count++;
    }
}
    alert('The character ' + char + ' occurs ' + count + ' times in the string "' + str + '"');
}
