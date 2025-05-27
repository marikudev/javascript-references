// -> pads (mengisi) the current string with another string to the end (di akhir).

//-- Sintaksis padEnd() --
//-- string.padEnd(targetLength, padString) --

// string definition 
let string = "CODE";

// padding "$" to the end of the given string
// until the length of final padded string reaches 10
let  paddedString1= string.padEnd(10, "$");

console.log(paddedString1); // CODE$$$$$$



// padding 'JavaScript' to the end of the string
//  until the length of padded string reaches 18

let  paddedString2= string.padEnd(18, 'JavaScript');

console.log(paddedString2); // CODEJavaScriptJava



// the passed padString is truncated to meet the target length
paddedString3= string.padEnd(10, "ABCDEFGHIJKL");

console.log(paddedString3); // CODEABCDEF