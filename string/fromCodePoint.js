// -> returns a string created by using the given sequence (urutan/rangkaian) of unicode code points.

//-- Sintaks fromCodePoint() --
//-- String.fromCodePoint(num1, ..., numN) --


// return 'Hello' string from given unicode
let greet = String.fromCodePoint(72, 101, 108, 108, 111);

// printing the equivalent characters
console.log(greet); // Hello



// passing unicode as a hexadecimal value
let string2 = String.fromCodePoint(0x2017);

console.log(string2); // ‗



// passing invalid unicode value  
let string3 = String.fromCodePoint(Infinity);

console.log(string3); // RangeError: Invalid code point Infinity