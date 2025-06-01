//-> array.length - returns or sets the number of elements in an array.


var companyList = ["Apple", "Google", "Facebook", "Amazon"];
console.log(companyList.length); // Output: 4

var randomList = ["JavaScript", 44];
console.log(randomList.length); // Output: 2

var emptyArray = [ ];
console.log(emptyArray.length); // Output: 0


// Using Array length in for loop
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// languages.length can be used to find out 
// the number of times to loop over an array
for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

/* Output:
JavaScript
Python
C++
Java
Lua */

//Example 3: Changing length property of Array
// truncate (memotong) the Array to 3 elements
languages.length = 3

// Output: [ 'JavaScript', 'Python', 'C++' ]
console.log(languages)

// extend (membentang) the Array to length 6
languages.length = 6

console.log(languages)
// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
// Menjadi "<3 empty items>" karna sudah sudah dipotong (languages.length = 3)
