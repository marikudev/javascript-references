//-> unshift(): adds one or more elements to the beginning of an array and returns the new length of the array.
//-- Syntax: array.unshift(element1, element2, ..., elementN)
/* - This method changes the original array and its length.
   - To add elements to the end of an array, use the JavaScript Array push() method. */
   
// Example: Using unshift() method
var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.unshift("C++");

console.log(count); // output: 5
console.log(languages); //return: [ 'C++', 'JavaScript', 'Python', 'Java', 'Lua' ]


var priceList = [12, 21, 35];

var count1 = priceList.unshift(44, 10, 1.6);
console.log(count1); // output: 6 
console.log(priceList); // return: [ 44, 10, 1.6, 12, 21, 35 ]
