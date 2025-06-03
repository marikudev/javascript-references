/*-> copyWithin() adalah metode dalam JavaScript yang digunakan untuk menyalin elemen dalam array ke posisi lain 
    di dalam array yang sama, tanpa mengubah panjang array. 
    Metode ini mengubah array asli dengan menyalin elemen dari posisi tertentu ke lokasi lain dalam array.
  -> Syntax: arr.copyWithin(target, start, end);  #dengan kriteria:
    - arr adalah array yang ingin dimodifikasi.
    - target adalah indeks tujuan di mana elemen akan disalin.
    - start (opsional) adalah indeks awal dari elemen yang ingin disalin. Default: 0.
    - end (opsional) adalah indeks akhir dari elemen yang ingin disalin (tidak termasuk). 
      Default: akhir array.
    - "Jika indeks negatif", maka posisi dihitung dari akhir array
Catatan Penting:
✅ copyWithin() mengubah isi array asli, tidak seperti metode lain yang mengembalikan array baru.
✅ Tidak menambah atau menghapus elemen, hanya mengganti isi array sesuai posisi yang ditentukan.
✅ Indeks negatif dihitung dari akhir array, misalnya -1 berarti elemen terakhir.*/

//-- Contoh 1: Menyalin Elemen di Awal ke Tengah
const angka = [1, 2, 3, 4, 5];

angka.copyWithin(2, 0, 2); 
console.log(angka); // Output: [1, 2, 1, 2, 5]
/* Penjelasan:
- target = 2 → Salin elemen ke indeks 2.
- start = 0 → Mulai salinan dari indeks 0.
- end = 2 → Berhenti sebelum indeks 2 (hanya elemen [1, 2] yang disalin).
➡️ Hasilnya: Elemen [1, 2] disalin ke indeks 2 dan 3. */

//-- Contoh 2: Menyalin dengan Indeks Negatif
const angka2 = [10, 20, 30, 40, 50];

angka2.copyWithin(-2, 0, 3); 
console.log(angka2); // Output: [10, 20, 30, 10, 20]
/* Penjelasan:
- target = -2 → Artinya mulai menyalin dari posisi kedua terakhir (3).
- start = 0 → Mulai salinan dari indeks 0.
- end = 3 → Salin hingga indeks 3 (tidak termasuk), yaitu [10, 20, 30].
➡️ Hasilnya: Elemen [10, 20, 30] disalin ke indeks 3 dan 4.*/

//-- Contoh 3: Menyalin Seluruh Array ke Posisi Awal
const huruf = ["a", "b", "c", "d", "e"];

huruf.copyWithin(0, 3); 
console.log(huruf); // Output: ["d", "e", "c", "d", "e"]
/* Penjelasan:
- target = 0 → Menyalin ke awal array.
- start = 3 → Mulai salinan dari indeks 3 ("d" dan "e").
- end dihilangkan, sehingga akan menyalin hingga akhir array.
➡️ Hasilnya: "d" dan "e" menggantikan "a" dan "b". */

/* #Kesimpulan#
- copyWithin() mengubah array asli dengan menyalin elemen dari suatu bagian ke bagian lain.
- Tidak mengubah panjang array, hanya mengganti nilai tertentu.
- Indeks negatif dihitung dari akhir array, sangat berguna untuk posisi fleksibel.
- Dapat digunakan untuk modifikasi cepat tanpa membuat array baru. */
