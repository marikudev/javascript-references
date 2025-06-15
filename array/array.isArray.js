/* -> Array.isArray() digunakan untuk memeriksa apakah suatu nilai merupakan array atau bukan. 
Ini sangat berguna ketika kita perlu memastikan tipe data sebelum melakukan operasi pada sebuah variabel.
-> Syntax: Array.isArray(value); Di sini, value adalah nilai yang ingin kita cek apakah merupakan array.
Cara Kerja:
- Jika value adalah sebuah array, maka mengembalikan true.
- Jika value bukan array, maka mengembalikan false.
- TypedArray (misalnya Int8Array, Uint8Array, dll.) selalu menghasilkan false, meskipun memiliki sifat mirip array. */

//-- Contoh 1: Memeriksa Apakah Variabel Merupakan Array
console.log(Array.isArray([1, 2, 3]));  // Output: true
console.log(Array.isArray("Hello"));    // Output: false
console.log(Array.isArray({ a: 1 }));   // Output: false
console.log(Array.isArray(null));       // Output: false
console.log(Array.isArray(undefined));  // Output: false

//-- Contoh 2: Memeriksa Array dalam Kondisi
const data = [10, 20, 30];

if (Array.isArray(data)) {
    console.log("Ini adalah array!");
} else {
    console.log("Ini bukan array.");
}    
// Output: "Ini adalah array!" 

//-- Contoh 3: TypedArray Menghasilkan false
console.log(Array.isArray(new Int8Array([1, 2, 3])));  // Output: false
console.log(Array.isArray(new Uint8Array([1, 2, 3]))); // Output: false
/* Penjelasan: TypedArray (Int8Array, Uint8Array, dll.) meskipun mirip array, 
tetap dianggap bukan array oleh Array.isArray(). */

//-- contoh 4: 
// checking whether fruits is an array or not
let fruits = ["Apple", "Grapes", "Banana"];
console.log(Array.isArray(fruits)); // true

// checking whether text is an array or not
let text = "Apple";
console.log(Array.isArray(text)); // false

// passing an empty array []
console.log(Array.isArray([])); // true 

// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7))); // true

// passing a boolean value
console.log(Array.isArray(true)); // false

// passing undefined
console.log(Array.isArray(undefined)); // false

// not passing any argument in isArray()
console.log(Array.isArray()); // false 

/* Kesimpulan:
- Array.isArray() hanya untuk memeriksa apakah suatu nilai adalah array.
- Mengembalikan true jika nilai adalah array, dan false jika bukan.
- TypedArray selalu menghasilkan false meskipun menyerupai array.
- Berguna untuk validasi sebelum melakukan operasi pada array.*/



