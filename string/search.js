//-> search():  searches for a match (kecocokan) between a given (diberikan) string and a regular expression.
//-- Syntax: string.search(regexp) --
//-- Returns the index of the first match between the regular expression and the given string. else -1.

// defining string
let string1 = "JavaScript JavaScript1";

// pattern having 'JavaScript' followed by a digit
let regExp = /(JavaScript)\d/;

// searching for a match between regExp and given string
let index1 = string1.search(regExp);

console.log(index1); // 11 (indeks ke 11)

// Passing non-regExp in search()
let string2 = "I love to code in JavaScript.";

// searching word " " in the given string
let index2 = string2.search("code"); // "code" is non-regExp will be convert to regExp  

console.log(index2); // 10 (indeks ke 10)
