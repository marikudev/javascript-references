/*-> entries(): metode digunakan untuk mengembalikan iterator berisi pasangan key/value untuk setiap indeks dalam array. 
Iterator ini memungkinkan kita untuk melakukan iterasi dengan indeks dan nilai secara bersamaan.
 -> Syntax: arr.entries();  #dengan kriteria:
  - arr adalah array yang ingin dibuat menjadi iterator.
  - entries() tidak memerlukan parameter saat dipanggil.
  - Mengembalikan Array Iterator Object yang berisi pasangan indeks dan nilai.
Catatan Penting:
- Tidak mengubah array asli: entries() hanya menghasilkan iterator tanpa mengubah isi array.
- Iterator digunakan dalam loop seperti for...of atau dengan metode .next() untuk mengambil nilai.*/

//-- Contoh 1: Menggunakan for...of untuk Mendapatkan Indeks dan Nilai
const buah = ["Apel", "Jeruk", "Mangga"];

const iterator = buah.entries();

for (let [index, value] of iterator) {
    console.log(`Indeks ${index}: ${value}`);
}
/* Penjelasan:
- entries() mengembalikan iterator yang berisi [index, value] untuk setiap elemen dalam array.
- Dengan for...of, kita bisa langsung mendapatkan indeks dan nilai tanpa harus menggunakan .map() atau forEach(). */

//-- Contoh 2: Menggunakan .next() untuk Mengakses Iterator secara Manual
const angka2 = [10, 20, 30];

const iterator2 = angka2.entries();

console.log(iterator2.next().value); // Output: [0, 10]
console.log(iterator2.next().value); // Output: [1, 20]
console.log(iterator2.next().value); // Output: [2, 30]
console.log(iterator2.next().done);  // Output: true (iterator sudah habis)
/* Penjelasan:
- .next() digunakan untuk mendapatkan pasangan [index, value] satu per satu.
- Ketika semua elemen sudah diakses, done akan bernilai true. */

/* Kesimpulan:
- Gunakan entries() jika ingin mendapatkan indeks dan nilai dalam satu operasi.
- Bisa digunakan dengan for...of atau .next() untuk iterasi manual.
- Tidak mengubah array asli, hanya membuat iterator baru. */



