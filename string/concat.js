//-> concat() method concatenates (menggabungkan) given arguments to the given string.
//-- Syntax: string.concat(string1, ..., stringN)
//-- The assignment (penugasan) operators like '+' and '+=' are strongly recommended over the concat() method.

console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("".concat(4, 5)); // 45

let string1 = "Hello";
let string2 = "World";

// concatenating two strings
let newString = string1.concat(", ", string2, "!");
console.log(newStr); // Hello, World!