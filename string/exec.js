//-> exec() : Metode exec() akan mencari kecocokan pertama dalam string

// Contoh exec() tanpa lastIndex()
const regexp = /(\d{4})-(\d{2})-(\d{2})/;
const string = "Tanggal penting: 2025-05-14 dan 2023-11-07";

const match = regexp.exec(string);

console.log(match[0]); // "2025-05-14"
console.log(match[1]); // "2025" (Capturing group 1: Tahun)
console.log(match[2]); // "05"   (Capturing group 2: Bulan)
console.log(match[3]); // "14"   (Capturing group 3: Hari)

/* Penjelasan: exec() hanya menangkap satu kecocokan pertama (2025-05-14), dan kita bisa mengakses bagian-bagiannya lewat indeks pada array hasil. */
//-------------------------------------------------------------------
// Contoh exec() dengan lastIndex() dan Loop "while"
/* Ketika kita menggunakan flag g (global), exec() akan mengupdate lastIndex, memungkinkan kita mencari kecocokan berikutnya: */
const regexp1 = /(\d{4})-(\d{2})-(\d{2})/g;
const string1 = "Tanggal penting: 2025-05-14 dan 2023-11-07";
let match1;

while ((match1 = regexp1.exec(string1)) !== null) {
    console.log(`Ditemukan: ${match1[0]}`);
    console.log(`Tahun: ${match1[1]}, Bulan: ${match1[2]}, Hari: ${match1[3]}`);
    console.log(`Posisi pencarian sekarang: ${regexp1.lastIndex}`);
} //
/* Ditemukan: 2025-05-14
Tahun: 2025, Bulan: 05, Hari: 14
Posisi pencarian sekarang: 17

Ditemukan: 2023-11-07
Tahun: 2023, Bulan: 11, Hari: 07
Posisi pencarian sekarang: 35 */

// Penjelasan:
/* - exec() menangkap setiap kecocokan satu per satu, lalu secara otomatis memperbarui lastIndex, sehingga loop dapat berjalan hingga semua kecocokan ditemukan.
   - Kita bisa melihat posisi lastIndex setelah setiap kecocokan, memastikan bahwa pencarian berjalan dengan benar. */
/*  Kesimpulan:
- Jika hanya ingin menangkap satu kecocokan pertama, cukup gunakan exec() tanpa g flag.
- Jika ingin menangkap semua kecocokan, gunakan g flag dan jalankan dalam loop dengan lastIndex yang diperbarui otomatis.*/
//----------------------------------------------------------------
// Contoh exec() dengan lastIndex() versi Loop "for"
for (let match2; (match2 = regexp1.exec(string1)) !== null; ) {
    console.log(`Ditemukan: ${match2[0]}`);
    console.log(`Tahun: ${match2[1]}, Bulan: ${match2[2]}, Hari: ${match2[3]}`);
    console.log(`Posisi pencarian sekarang: ${regexp1.lastIndex}`);
}
// Penjelasan:
/* - Struktur for yang digunakan di sini tidak memiliki bagian inisialisasi atau increment karena exec() secara otomatis memperbarui lastIndex saat digunakan dengan flag g.
   - Loop berjalan selama regex.exec(text) masih menemukan kecocokan.
   - Setiap kecocokan diproses seperti sebelumnya, termasuk menampilkan hasil dan indeks pencarian selanjutnya.*/


