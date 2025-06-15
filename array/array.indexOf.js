//-> indexOf():  returns the first index of occurance (kemunculan) of an array element, or -1 if it is not found.
//-- Syntax: array.indexOf(searchElement, fromIndex (opsional)). "fromIndex: Indeks untuk memulai pencarian. Secara default, nilainya adalah 0."
/* -> Mengembalikan indeks pertama elemen dalam array jika elemen tersebut hadir setidaknya satu kali.
   -> Mengembalikan -1 jika elemen tidak ditemukan dalam array. */

//Example 1: Using indexOf() method
var priceList = [10, 8, 2, 31, 10, 1, 65];

// indexOf() returns the first occurance
var index1 = priceList.indexOf(31);
console.log(index1); // 3

var index2 = priceList.indexOf(10);
console.log(index2); // 0

// second argument specifies the search's start index
var index3 = priceList.indexOf(10, 1);
console.log(index3); // 4

// indexOf returns -1 if not found
var index4 = priceList.indexOf(69.5);
console.log(index4); // -1
/* Notes:
- If fromIndex >= array.length, array is not searched and -1 is returned.
- If fromIndex < 0, the index is calculated backward (dihitung mundur). For example, -1 denotes (menunjukan) the last element's index and so on. */


//Example 2: Finding All the Occurrences of an Element.
function findAllIndex(array, element) {
  indices = [];
  var currentIndex = array.indexOf(element);
  while (currentIndex != -1) {
    indices.push(currentIndex);
    currentIndex = array.indexOf(element, currentIndex + 1);
  }
  return indices;
}
// //versi for loop
// function findAllIndex(array, element) {
//     let indices = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             indices.push(i);
//         }
//     }
//     return indices;
// }

var priceList5 = [10, 8, 2, 31, 10, 1, 65, 10];

var occurance1 = findAllIndex(priceList5, 10);
console.log(occurance1); // [ 0, 4, 7 ]

var occurance2 = findAllIndex(priceList5, 8);
console.log(occurance2); // [ 1 ]

var occurance3 = findAllIndex(priceList5, 9);
console.log(occurance3); // 

//Example 3: Finding If Element exists else Adding the Element
function checkOrAdd(array, element) {
  if (array.indexOf(element) === -1) {
    array.push(element);
    console.log("Element not Found! Updated the array.");
  } else {
    console.log(element + " is already in the array.");
  }
}

var parts = ["Monitor", "Keyboard", "Mouse", "Speaker"];

checkOrAdd(parts, "CPU"); // Element not Found! Updated the array.
console.log(parts); // [ 'Monitor', 'Keyboard', 'Mouse', 'Speaker', 'CPU' ]

checkOrAdd(parts, "Mouse"); // Mouse is already in the array.




