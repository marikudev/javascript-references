// -> returns an integer that denotes (menunjukkan) the Unicode point value of a character in the string.

//-- codePointAt() Syntax --
//-- string.codePointAt(pos) --

let fruit = "Apple";

// unicode code point of character "A"
let codePoint = fruit.codePointAt(0);

console.log("Unicode Code Point of 'A' is " + codePoint); // 65

let message = "Happy Birthday";

// without passing parameter in codePointAt()
let codePoint1 = message.codePointAt();

console.log(codePoint1);

// passing 0 as parameter
let codePoint2 = message.codePointAt(0);

console.log(codePoint2);

// get unicode point of character at index 53
let codePoint53 = message.codePointAt(53);

console.log(codePoint53);