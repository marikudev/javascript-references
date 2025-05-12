//-- repeat() Syntax --
//-- string.repeat(count) --

// string declaration
const holiday = "Happy holiday!";

// repeating the given string 2 times
const result1 = holiday.repeat(2);

console.log(result1);

// using 0 as a count value
// returns an empty string
let result2 = holiday.repeat(0);

console.log(result2);

// using non-integer count value, 3.2 and 3.7 are converted to the nearest index 3
let result3 = holiday.repeat(3.2);
let result4 = holiday.repeat(3.7);
console.log(result3);
console.log(result4);

// using negative number as count value
let result5 = holiday.repeat(-1);

console.log(result5); // RangeError: Invalid count value