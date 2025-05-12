// -> pads (mengisi) the current string with another string to the start (di awal).

//-- Sintaksis padStart() -- 
//-- string.padStart(targetLength, padString) --

// string definition
let string = "CODE";

// padding "$" to the start of the string
// until the length of final padded string reaches 10
let paddedString1 = string.padStart(10, "$");

console.log(paddedString1); // $$$$$$CODE



// padding 'JavaScript' to the start of the string
// until the length of padded string reaches 17
let  paddedString2= string.padStart(17, 'JavaScript');

console.log(paddedString2); // JavaScriptJavCODE