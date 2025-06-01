//-> pop(): removes the last element from an array and returns that element.
//-- Syntax: array.pop(). -> Removes the last element from array and returns that value.
//-- This This method changes the original array and its length (panjangnya).

//Example: Using pop() method
var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];

var popped = languages.pop();

console.log(popped); // output: Lua
console.log(languages); 
// return: [ 'JavaScript', 'Python', 'Java', 'C++' ] (original array changed)

// pop returns any type of object
var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numbers.pop()); // [ -5, -4, -3 ]
console.log(numbers); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] (original array changed)
