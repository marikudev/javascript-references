/*-> from(): digunakan untuk membuat array baru dari objek yang menyerupai array atau objek yang bisa diiterasi. 
     Ini berguna saat kita ingin mengubah tipe data seperti string, NodeList, Set, atau Map menjadi array.
  -> Syntax: Array.from(arraylike, mapFunc, thisArg);  
  Metode Array.from() adalah metode statis, yang berarti harus dipanggil menggunakan nama kelas Array, bukan dari sebuah instance array.
# Parameter: #
  - arraylike → Objek seperti array atau yang bisa diiterasi (contoh: string, Map, Set).
  - mapFunc → Opsional, fungsi yang akan diterapkan ke setiap elemen.
  - thisArg → Opsional, nilai this yang akan digunakan dalam mapFunc.
  
- Nilai Kembali (Return Value): Metode ini mengembalikan instance array baru berdasarkan objek yang diberikan. */

//-- Contoh 1. Mengubah String Menjadi Array
const teks = "Hello";
const arrayHuruf = Array.from(teks);
console.log(arrayHuruf); // Output: ['H', 'e', 'l', 'l', 'o']
// Di sini, setiap karakter dalam string "Hello" dijadikan elemen dalam array.


//-- Contoh 2. Mengubah Set Menjadi Array
const unikSet = new Set([1, 2, 3, 4, 5]);
const arrayDariSet = Array.from(unikSet);
console.log(arrayDariSet); // Output: [1, 2, 3, 4, 5]
// Set tidak memiliki indeks seperti array, tetapi dengan Array.from(), kita bisa mengubahnya menjadi array biasa.


//-- Contoh 3. Menggunakan mapFunc untuk Memodifikasi elemen
const angka = [1, 2, 3, 4, 5];
const kuadrat = Array.from(angka, num => num ** 2);
console.log(kuadrat); // Output: [1, 4, 9, 16, 25]
// Di sini, setiap angka dalam array asli dipangkatkan dua saat diubah menjadi array baru.


//-- Contoh 4. Mengubah NodeList Menjadi Array (Manipulasi DOM)
const nodeList = document.querySelectorAll("p"); // Mengambil semua elemen <p>
const arrayNode = Array.from(nodeList);
console.log(arrayNode); // Sekarang bisa menggunakan metode array seperti map(), filter(), dll.
// NodeList bukan array asli, tetapi dengan Array.from(), kita bisa menggunakannya seperti array normal.

/* #Kesimpulan#
Metode Array.from() sangat berguna saat kita perlu mengubah berbagai tipe data menjadi array. 
Ini bisa digunakan untuk bekerja dengan string, Set, Map, NodeList, atau objek lain yang memiliki sifat seperti array. 
Jika kita ingin memodifikasi setiap elemen saat konversi, kita bisa menggunakan fungsi pemetaan langsung dalam Array.from().
*/



