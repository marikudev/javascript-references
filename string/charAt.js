//-- charAt() Syntax --
//-- string.charAt(index) --

// string declaration
const string = "Hello World!";

// finding character at index 8
let result = string.charAt(8);

console.log("Character at index 8 is: " + result);

// finding character at index 6.3, 6.9 and 6
let result1 = string.charAt(6.3);
let result2 = string.charAt(6.9);
let result3 = string.charAt(6);

console.log("Character at index 6.3 is: " + result1);
console.log("Character at index 6.9 is: " + result2);
console.log("Character at index 6 is: " + result3);

// passing empty parameter in charAt() -> the default value 0 is used
let result4 = string.charAt();

console.log("Character at index 0 is: " + result4);

// finding character at index 100 (Index Value Out of Range)
let result5 = string.charAt(100);

console.log("Character at index 100 is: " + result5); // Returns an empty string.

