//-> include(): digunakan untuk memeriksa apakah suatu nilai ada dalam array. Jika nilai ditemukan, maka metode ini akan mengembalikan true, dan jika tidak ditemukan, maka akan mengembalikan false.
/* Selain itu, kita bisa menentukan dari indeks mana pencarian dimulai. Jika tidak disebutkan, pencarian dimulai dari awal (index 0).
Jika kita menggunakan angka negatif, maka pencarian dimulai dari akhir array. */
//-- Syntax: arr.includes(valueToFind, fromIndex); 
/*- arr → Array yang ingin dicek.
  - valueToFind → Nilai yang ingin dicari dalam array.
  - fromIndex (opsional) → Posisi awal pencarian dalam array. Jika tidak disebutkan, pencarian dimulai dari indeks 0.
Catatan Tentang fromIndex
  - Jika menggunakan angka positif, pencarian dimulai dari indeks tersebut.
  - Jika menggunakan angka negatif, pencarian dimulai dari belakang array.
  - Misalnya, -1 berarti mulai dari elemen terakhir, -2 berarti mulai dari elemen kedua dari belakang. */

//Example 1: Pengecekan nilai dalam array
let buah = ["apel", "mangga", "pisang", "jeruk"];

console.log(buah.includes("mangga")); // Output: true
console.log(buah.includes("durian")); // Output: false

// Pencarian dengan indeks mulai tertentu
console.log(buah.includes("apel", 1)); // Output: false (karena pencarian dimulai dari indeks 1, bukan 0)

// Pencarian dari akhir dengan indeks negatif
console.log(buah.includes("pisang", -2)); // Output: true (karena mulai dari indeks `array.length - 2`)

/* - buah.includes("mangga") → Mengembalikan true, karena "mangga" ada di dalam array.
   - buah.includes("durian") → Mengembalikan false, karena "durian" tidak ada dalam array.
   - buah.includes("apel", 1) → Mengembalikan false, karena pencarian dimulai dari indeks 1, sementara "apel" ada di indeks 0.
   - buah.includes("pisang", -2) → Mengembalikan true, karena indeks negatif -2 berarti pencarian dimulai dari indeks array.length - 2.
Dengan cara ini, kita dapat dengan mudah mengecek apakah suatu nilai ada dalam array tanpa harus menggunakan perulangan (for atau while).*/

// #Kesimpulan# Metode includes() sangat berguna untuk mengecek apakah suatu nilai ada dalam array tanpa perlu menggunakan perulangan. Sederhana, cepat, dan mudah digunakan!.

// Example 2: Using includes() method
let languages = ["JavaScript", "Java", "C", "C++"];

// checking whether the array contains 'C'
let check1 = languages.includes("C");
console.log(check1); // true

// checking whether the array contains 'Ruby'
let check2 = languages.includes("Ruby");
console.log(check2); // false

// Example 3: includes() for Case-Sensitive Search
let languages3 = ["JavaScript", "Java", "C", "Python"];

// checking whether the array contains 'Python'
let check3 = languages3.includes("Python");
console.log(check1); // true

// checking whether the array contains 'python'
let check4 = languages3.includes("python");
console.log(check2); // false

//Example 4: includes() with two Parameters
let languages5 = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check5 = languages5.includes("Java", 2);

console.log(check5); // false

// the search starts from third last element 
let check6 = languages5.includes("Java", -3);

console.log(check6); // true 