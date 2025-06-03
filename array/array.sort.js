//-> sort(): sorts the items of an array in a specific order (urutan tertentu) (ascending (naik) or descending).
//-- Syntax: array.sort(compareFunction) 
//-- sort(): changes the original array (mengubah array asli), String ini kemudian dibandingkan menggunakan nilai titik kode ASCII.

//Example 1: Sorting the Elements of an Array
// sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// returns the sorted array
console.log(names.sort()); // output: [ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]
//-> Array is sorted in ascending order.

// modifies the array in place
console.log(names); // output: [ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]

var priceList = [1000, 50, 2, 7, 14];
priceList.sort();
// Number is converted to string and sorted
console.log(priceList) // output: [ 1000, 14, 2, 50, 7 ]

//Example 2: Sorting using Custom Function
//array such that the longest name, comes last.

/*  how the optional compareFunction works?
Any compareFunction has the following syntax:
function (a, b){
    // sorting logic
    // return a Number 
}
two parameters a and b represent these two values respectively (masing-masing).

The compareFunction should return a Number. This returned value is used to sort the elements in the following way:
- If returned value < 0, a is sorted before b (a comes before b).
- If returned value > 0, b is sorted before a (b comes before a).
- If returned value == 0, a and b remain unchanged relative to each other */

function lengthCompare(a, b){
    return a.length - b.length;
}
/* 
- If a.length - b.length < 0, a comes before b. For example, "Adam" comes before "Jeffrey" as 4 - 7 < 0.
- If a.length - b.length > 0, b comes before a. For example, "Danil" comes after "Ben" as 5 - 3 > 0.
- If a.length - b.length == 0, their position is unchanged. For example, the relative position of 
  "Jeffrey" and "Fabiano" is unchanged because 7 - 7 == 0. */

// sort according to string length
names.sort(lengthCompare);
console.log(names); // output: [ 'Ben', 'Adam', 'Danil', 'Jeffrey', 'Fabiano' ]

// Example 3: Sorting Numbers Numerically (numeric sorting)
/* NOTE: semua elemen (selain Undefined) akan diubah menjadi string sebelum mengurutkannya,
kita tidak dapat mengurutkan angka menggunakan nilai numeriknya secara default. */

// define array
var priceList = [1000, 50, 2, 7, 14];
// sort() using function expression
// ascending order
priceList.sort(function (a, b) {
  return a - b;
});

/* function (a, b) {
  return a - b;
  }
- If a - b < 0, a comes before b. For example, 2 comes before 7 as 2 - 7 < 0.
- If a - b > 0, b comes before a. For example, 1000 comes after 50 as 1000 - 50 > 0. */

console.log("Ascending - " + priceList); // Output: Ascending - 2,7,14,50,1000

// sort() using arrow function expression
// descending order
priceList.sort((a, b) => b - a);

console.log("Descending - " + priceList); // Output: Descending - 1000,50,14,7,2


