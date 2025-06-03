//-> toString(): returns a string formed (yang dibentuk) by the elements of the given array.
//-- Syntax: array.toString(), this method does not change the original array.

//Example 1: Using toString() Method.
let info = ["Terence", 28, "Kathmandu"];

// returns the string representation of the info array 
let info_str = info.toString();

console.log(info_str); 

// toString() does not change the original array
console.log(info); 


//Example 2: toString() with Nested Arrays.
// defining a nested array
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array 
let resultingArray = nestedArray.toString();

console.log(resultingArray);

