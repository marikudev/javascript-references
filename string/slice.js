//-> slice(): extracts and returns a section of a string.
//-- Syntax slice(): string.slice(beginIndex, endIndex(optional))
//-- slice() method does not change the original string.

const string = "JavaScript is a very absurd programming language.";

// from index 28 to end
console.log(string.slice(28)); // 'programming language.'

// from index 4 to 14
console.log(string.slice(4, 15)); // 'Script is a'

//-- Using slice() method with negative indices ---------
/* Jika beginIndexatau endIndexnegatif, 
nilai-nilai dihitung dari belakang. Misalnya, -1 mewakili elemen terakhir, -2 mewakili elemen kedua terakhir dan seterusnya. */

const string1 = "JavaScript is a very absurd programming language.";

// from 9th to last element till end
console.log(string1.slice(-9)); // 'language.'

// from 9th to last element to 2nd to last element
console.log(string.slice(-9, -2)); // 'languag'
