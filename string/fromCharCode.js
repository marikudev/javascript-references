//-- fromCharCode() Syntax --
//-- String.fromCharCode(num1, ..., numN) --

// use of fromCharCode()
let string1 = String.fromCharCode(72, 69, 76, 76, 79);

// printing the equivalent characters
console.log(string1); // HELLO

// Using fromCodePoint() Method With Hexadecimal Value
// numbers can be passed as a hexadecimal value
let string2 = String.fromCharCode(0x2017);
let string3 = String.fromCharCode(0x2053);

console.log(string2); // ‗
console.log(string3); // ⁓

/* hexadecimal value 0x2017 whose decimal equivalent is 8215. 
The unicode point value 8215 is converted to a character "‗". */