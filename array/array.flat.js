/*-> flat(): metode yang digunakan untuk meratakan (flattening) array bersarang hingga kedalaman tertentu. 
    Artinya, jika ada sub-array di dalam array, flat() akan menggabungkan elemen-elemen tersebut ke dalam array utama, 
    tergantung pada kedalaman yang ditentukan.
  -> Syntax: arr.flat(depth);   #dengan kriteria:
    - arr adalah array yang akan diratakan.
    - depth (opsional) adalah jumlah tingkat kedalaman sub-array yang ingin diratakan. Default: 1.
    📌 Jika kedalaman tidak ditentukan, metode ini hanya meratakan satu tingkat dari array bersarang.
Catatan Penting:
✅ Tidak mengubah array asli, tetapi menghasilkan array baru yang sudah diratakan.
✅ Menghapus slot kosong dalam array, sehingga elemen kosong tidak ikut ditampilkan.
✅ Jika depth terlalu kecil, sub-array yang lebih dalam tetap akan bertahan. */

//-- Contoh 1: Meratakan Array Bersarang Satu Tingkat
const arrayNested = [1, [2, 3], [4, 5]];

const hasil = arrayNested.flat();
console.log(hasil); // Output: [1, 2, 3, 4, 5]
/* Penjelasan:
- flat() dengan default depth = 1 akan menggabungkan elemen dalam sub-array satu tingkat ke dalam array utama.
➡️ Hasilnya adalah array tanpa sub-array. */

//-- Contoh 2: Meratakan Array Bersarang Lebih Dalam
const arrayNestedDeep = [1, [2, [3, [4, 5]]]];

console.log(arrayNestedDeep.flat(2)); 
// Output: [1, 2, 3, [4, 5]]
console.log(arrayNestedDeep.flat(Infinity)); 
// Output: [1, 2, 3, 4, 5]
/* Penjelasan:
- flat(2) → Hanya meratakan hingga kedalaman 2 tingkat, sehingga [4, 5] masih dalam sub-array.
- flat(Infinity) → Meratakan seluruh sub-array tanpa batasan.
➡️ Gunakan flat(Infinity) jika ingin menghilangkan seluruh sub-array.*/


//-- Contoh 3: Menghapus Slot Kosong dalam Array
const arrayKosong = [1, , 3, [4, , 6]];

console.log(arrayKosong.flat());
// Output: [1, 3, 4, 6]
/* Penjelasan:
- Slot kosong (,) dalam array akan dihilangkan secara otomatis oleh flat().
- Ini berguna jika terdapat array dengan elemen yang hilang atau tidak terdefinisi. */

/* Kesimpulan:
- Gunakan flat() untuk menggabungkan elemen dalam array bersarang hingga kedalaman tertentu.
- Menghasilkan array baru, tanpa mengubah array asli.
- Slot kosong dalam array akan dihapus secara otomatis.
- Gunakan flat(Infinity) jika ingin meratakan seluruh sub-array tanpa batas. */

