/*-> every(): metode yang digunakan untuk memeriksa apakah semua elemen dalam array memenuhi kondisi tertentu. 
Jika seluruh elemen dalam array lolos uji dalam fungsi callback, maka every() akan mengembalikan true. 
Jika ada satu saja elemen yang gagal memenuhi kondisi, maka every() akan mengembalikan false.
  -> Syntax: arr.every(callback(currentValue), thisArg);  #dengan kriteria:
  - arr adalah array yang akan diperiksa.
  - callback adalah fungsi pengujian yang akan dijalankan pada setiap elemen dalam array.
  - currentValue adalah nilai dari elemen array yang sedang diuji.
  - thisArg (opsional) adalah nilai untuk this saat menjalankan fungsi callback.
Catatan Penting:
- Tidak mengubah array asli: every() hanya melakukan pengecekan, tidak memodifikasi isi array.
- Berhenti lebih cepat: Jika menemukan satu elemen saja yang tidak memenuhi kondisi, every() langsung berhenti dan mengembalikan false.
- Mengembalikan true untuk array kosong: Jika array kosong, every() tetap mengembalikan true karena tidak ada elemen yang gagal memenuhi kondisi. */

//-- Contoh 1: Memeriksa Apakah Semua Angka Lebih Besar dari 0
const angka = [10, 20, 30, 40];

const semuaLebihDari0 = angka.every(item => item > 0); // every() mengecek apakah semua angka lebih besar dari 0.
console.log(semuaLebihDari0); // Output: true

//-- Contoh 2: Memeriksa Apakah Semua Angka Genap
const angka2 = [2, 4, 6, 7, 8];

const semuaGenap = angka2.every(item => item % 2 === 0); // every() mengecek apakah semua angka dalam array genap (item % 2 === 0).
console.log(semuaGenap); // Output: false

//-- Contoh 3: Menggunakan thisArg dalam every()
const daftarNama = ["Aldi", "Budi", "Citra"];

const obj = {
    awalan: "A",
    cekAwalan: function(nama) {
        return nama.startsWith(this.awalan);
    }
};

// Memeriksa apakah semua nama diawali dengan "A"
const semuaNamaDenganAwalanA = daftarNama.every(obj.cekAwalan, obj);
console.log(semuaNamaDenganAwalanA); // Output: false
/* Penjelasan:
- thisArg (obj) digunakan agar this.awalan tetap merujuk ke obj.awalan ("A").
- every() mengecek apakah semua nama diawali dengan "A".
- Karena ada "Budi" dan "Citra" yang tidak diawali "A", maka hasilnya false. */

/* #Kesimpulan#
- Gunakan every() jika ingin memastikan bahwa seluruh elemen dalam array memenuhi kondisi tertentu.
- Jika semua elemen memenuhi, hasilnya true; jika ada satu saja yang gagal, hasilnya false.
- Tidak mengubah array asli dan berhenti lebih cepat saat menemukan elemen yang tidak memenuhi kondisi.
- Bisa menggunakan thisArg untuk memberikan konteks pada fungsi callback. */


