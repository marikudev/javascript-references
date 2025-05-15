//-- endsWith() Syntax --
//-- string.endsWith(searchString, length) --

// string definition
let sentence = "JavaScript is fun";

// checking if the given string ends with "fun"
let check = sentence.endsWith("fun");

console.log(check);

// checking if the given string ends with "is"
let check1 = sentence.endsWith("is");

console.log(check1);

// Case Sensitive Strings
let check2 = sentence.endsWith("Fun");

console.log(check2);

// with two Parameters
let check3 = sentence.endsWith("JavaScript", 10);
// PS: length itu jumlah karakter bukan jumlah indeks.

console.log(check3);