//-- includes() Syntax --
//-- string.includes(searchString, position) --

let sentence = "Java is to JavaScript what Car is to Carpet.";

let check = sentence.includes("Java");
console.log(check); // true

// case sensitive
let check1 = sentence.includes("java");
console.log(check1); // false

// second argument specifies position to start at
let check2 = sentence.includes("Java", 11);
console.log(check2); // true

let check2x = sentence.includes("Java", 12);
console.log(check2x); // false


let check3 = sentence.includes("whose");
console.log(check3); // false


let check4 = sentence.includes("");
console.log(check4); // true