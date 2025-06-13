/*-> flatMap() adalah metode dalam JavaScript yang digunakan untuk memetakan setiap elemen dalam array menggunakan 
     fungsi callback, lalu meratakan hasilnya menjadi satu array baru. 
     Metode ini adalah gabungan dari map() dan flat() dengan depth = 1.
  -> Syntax: arr.flatMap(callback(currentValue), thisArg);  #dengan kriteria:
    - arr adalah array yang ingin dimodifikasi.
    - callback adalah fungsi yang akan diterapkan pada setiap elemen dalam array.
    - currentValue adalah nilai dari elemen yang sedang diproses.
    - thisArg (opsional) adalah nilai yang digunakan sebagai this dalam fungsi callback.
    📌 Hasilnya adalah array baru yang sudah diratakan satu tingkat setelah proses mapping.
Catatan Penting
✅ Tidak mengubah array asli, tetapi menghasilkan array baru.
✅ Setara dengan .map().flat(1), tetapi lebih efisien karena bekerja dalam satu operasi.
✅ Menghapus elemen kosong dalam array setelah proses mapping.*/

//-- Contoh 1: Memisahkan Kata dalam Array
const kalimat = ["Halo Dunia", "JavaScript AI"];

const hasil = kalimat.flatMap(item => item.split(" "));
console.log(hasil); // Output: ["Halo", "Dunia", "JavaScript", "AI"]
/*Penjelasan:
- map() mengubah setiap string menjadi array kata dengan split(" ").
- flat() meratakan hasil agar semua kata menjadi elemen dalam satu array.
➡️ Hasilnya adalah array baru tanpa sub-array.*/


//-- Contoh 2: Menggandakan Setiap Angka dan Meratakannya
const angka = [1, 2, 3];

const hasil1 = angka.flatMap(num => [num, num * 2]);
console.log(hasil1); // Output: [1, 2, 2, 4, 3, 6]
/* Penjelasan:
- map() menggandakan setiap angka menjadi array [angka, angka * 2].
- flat() meratakan hasil agar semua angka menjadi elemen dalam satu array.
➡️ Setiap angka sekarang memiliki pasangannya yang dikalikan dua.*/

//-- Contoh 3: Menghapus Elemen null dalam Array
const data = ["A", null, "B", null, "C"];

const hasil2 = data.flatMap(item => item ? [item] : []);
console.log(hasil2); // Output: ["A", "B", "C"]
/*Penjelasan:
- map() menghapus null dengan menggantinya dengan array kosong [].
- flat() memastikan elemen yang tersisa tetap menjadi satu array.
➡️ Hasilnya adalah array baru tanpa elemen null. */

/*#Kesimpulan#
- Gunakan flatMap() jika ingin memetakan elemen, lalu langsung meratakan hasilnya dalam satu operasi.
- Lebih efisien daripada map().flat() karena hanya melakukan satu iterasi.
- Cocok untuk pemrosesan data, manipulasi teks, dan transformasi array kompleks.
- Menghasilkan array baru tanpa mengubah array asli. */