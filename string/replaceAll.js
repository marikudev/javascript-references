// -> returns a new string with all matches of a pattern replaced (diganti) by a replacement (penggantian).

//-- replaceAll() Syntax --
//-- str.replaceAll(pattern, replacement) --

const text = "Java is awesome. Java is fun.";

// passing a string as the first parameter
let pattern = "Java";
let new_text = text.replaceAll(pattern, "JavaScript");
console.log(new_text);

// passing a regex as the first parameter
pattern = /Java/g;
new_text = text.replaceAll(pattern, "JavaScript");
console.log(new_text);


// Case-Insensitive Replacement (Replace Without Considering Uppercase/Lowercase)

const text1 = "javaSCRIPT JavaScript";

// all occurrences of javascript is replaced
let pattern1 = /javascript/gi; // case-insensitive and global search
let new_text1 = text1.replaceAll(pattern1, "JS");
console.log(new_text1); // JS JS

// Passing Function as a Replacement

const text2 = "3.1415";

// generate a random digit between 0 and 9
function generateRandomDigit() {
  return Math.floor(Math.random() * 10);
}
// regex to match a digit
const pattern2 = /\d/g;
const new_text2 = text2.replaceAll(pattern2, generateRandomDigit);
console.log(new_text2); // 4.3518