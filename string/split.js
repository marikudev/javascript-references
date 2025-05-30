//-> split(): method divides (membagi) a string into a list of substrings and returns them as an array.
//-- Syntax split(): string.split(separator, limit) (separator = pemisah)
//-- split() method does not change the original string.

console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const string = "Java is awesome. Java is fun. Java not JavaScript";

let pattern = "."; // Memisahkan Berdasarkan Titik
let newText = string.split(pattern); 
console.log(newText); // [ 'Java is awesome', ' Java is fun', ' Java not JavaScript', '' ]

let pattern1 = "."; 
// only split string to maximum to parts 
let newText1 = string.split(pattern1, 2); // Memisahkan Maksimal Dua Bagian
console.log(newText1); // [ 'Java is awesome', ' Java is fun' ]

const string2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";"; // Memisahkan Berdasarkan Tanda ";"
let newText2 = string2.split(pattern2);
console.log(newText2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// using RegExp
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = string2.split(pattern3);
console.log(newText3); // [ 'JavaScript', 'Python', 'C', 'C++' ]
/* - \s* -> Menghapus spasi sebelum dan sesudah ";"
   - (?:;|$) -> Memisahkan berdasarkan ";" atau akhir dari string $
   - \s* -> Menghapus spasi lagi setelah pemisahan */