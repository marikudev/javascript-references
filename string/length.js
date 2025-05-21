//-> length returns the number of characters in a string.
//-- Syntax: string.length

let sentence = "I love Programiz.";

let len = sentence.length;

console.log(len); // 17

let string2 = "Programming";

// assigning a value to string's length property
string2.length = 5;

// doesn't change the original string
console.log(string2); // Programming

// returns the length of 'Programming'
console.log(string2.length); // 11