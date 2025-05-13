//-- charCodeAt() Syntax --
//-- str.charCodeAt(index) --

const greeting = "Good morning!";

// UTF-16 code unit of character at index 5, 5.2 dan 5.9
let result1 = greeting .charCodeAt(5);
let result2 = greeting .charCodeAt(5.2);
let result3 = greeting.charCodeAt(5.9);

console.log(result1); // 109
console.log(result2); // 109
console.log(result3); // 109

// Index Out of Range
// passing index greater than length of string 
// passing non-negative index value
let result4 = greeting.charCodeAt(18);
let result5 = greeting.charCodeAt(-9);

console.log(result4); // NaN
console.log(result5); // NaN

// with Default Parameter
// without passing parameter in charCodeAt() 
let result6 = greeting.charCodeAt();
// passing 0 as  parameter
let result7 = greeting.charCodeAt(0);

console.log(result6); // 71
console.log(result7); // 71