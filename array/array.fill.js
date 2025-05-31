//-> fill():  returns an array by filling (mengisi) all elements with a specified value (nilai yang ditentukan).
//-- Syntax: array.fill(value, start, end)

/* The fill() method can take 3 parameters:
- value - Value to fill the array with.
- start (optional) - Start index (default is 0).
- end (optional) - End index (default is Array.length), which is always excluded.*/

/* Notes:
- If start or end is negative, indexes are counted (dihitung) backwards (kebelang/mundur).
- Since fill() is a mutator method, it changes the array itself (not a copy) and returns it.*/

//---- Example 1: Using fill() Method
var prices = [651, 41, 4, 3, 6];

// filling every element of the array with '5'
new_prices = prices.fill(5);

console.log(prices); // Output: [ 5, 5, 5, 5, 5 ]
console.log(new_prices); // Output: [ 5, 5, 5, 5, 5 ]
/* As the method is mutator, prices.fill(5) modifies the original array 
and hence (karena itu) both (kedua) prices and new_prices hold (memperoleh) the same value.*/


//---- Example 2: fill() Method with Three Arguments
// array definition
var language = ["JavaScript", "Python", "C", "C++"];

// replacing element of array from index 1 to 3 by 'JavaScript'
language.fill("JavaScript", 1, 3);
// printing the original array
console.log(language); // Output: [ 'JavaScript', 'JavaScript', 'JavaScript', 'C++' ]


//---- Example 3: fill() Method with Invalid Indexes
var rank = [8, 9, 3, 7];

// on passing negative index, counting starts from back
rank.fill(15, -2); // akan mengisi dua elemen terakhir 
console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid index result in no change
rank.fill(15, 7, 8);
console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid indexes
rank.fill(15, NaN, NaN);
console.log(rank);  // [ 8, 9, 15, 15 ]

// invalid indexes, returns the array without changing.

