//-> reverse(): returns the array in reverse order (urutan terbalik).
//-- Syntax: array.reverse(). this method reverses the order of elements in place, it means the method changes the original array.

let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// reversing the order of languages array
let reversedArray = languages.reverse();

console.log("Reversed Array: ", reversedArray);

// modifies the original array
console.log("Original Array: ", languages);

/* Output:
Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
Original Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
Array aslinya berubah. */

/* But if we use the spread operator(...) in the array along with the reverse() 
method, it does not modify (tidak merubah) the original array. */

let languages2 = ["JavaScript", "Python", "C++", "Java", "Lua"];

// using spread operator to reverse the array
let reversedArray2 = [...languages2].reverse();

console.log("Reversed Array:", reversedArray2);

// modifies the original array
console.log("Original Array:", languages2);

/* Output:
Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
Original Array: [ 'JavaScript', 'Python', 'C++', 'Java', 'Lua' ]
Array aslinya tidak berubah. */
