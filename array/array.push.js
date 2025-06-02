//-> push(): adds zero or more elements to the end of the array.
//-- Syntax: array.push(element1, element2, ..., elementN)
/* Returns the new (after appending (membubuhkan) the arguments) length of the array upon which (yang) the method was called.
- This method changes the original array and its length.
- To add elements to the beginning of an array, use the JavaScript Array unshift() method.*/

//Example: Using push() method
var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.push("C++");
console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'Lua', 'C++' ]
console.log(count); // 5

var priceList = [12, 21, 35];

var count1 = priceList.push(44, 10, 1.6);
console.log(priceList); // [ 12, 21, 35, 44, 10, 1.6 ]
console.log(count1); // 6