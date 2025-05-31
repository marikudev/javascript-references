//-> join(): returns a new string by concatenating (merangkai/menggabung) all of the elements in an array, separated (dipisahkan) by a specified separator.
//-- Syntax: array.join(separator(pemisah)(opsional)): A string to separate each pair of adjacent (berdekatan) elements of the array. By default, it is comma ",".
//-- join() method does not change the original array. Elements like undefined, null, or empty array have an empty string representation.


//Example: Using join() method

var info = ["Terence", 28, "Kathmandu"];

var info_str = info.join(" | ");

// join() does not change the original array
console.log(info); // [ 'Terence', 28, 'Kathmandu' ]

// join() returns the string by joining with separator
console.log(info_str); // Terence | 28 | Kathmandu

// empty argument = no separator
var collection = [3, ".", 1, 4, 1, 5, 9, 2];
console.log(collection.join("")); // 3.141592

var random = [44, "abc", undefined, true];
console.log(random.join(" and ")); // 44 and abc and  and true