/*-> forEach(): metode yang digunakan untuk menjalankan suatu fungsi pada setiap elemen di dalam array. Metode ini tidak mengubah array asli, tetapi hanya mengeksekusi fungsi yang diberikan untuk setiap elemen dalam array.
  -> Syntax: array.forEach(callback(currentValue), thisArg);
    - arr adalah array yang ingin kita iterasi.
    - callback adalah fungsi yang akan dieksekusi pada setiap elemen dalam array.
    - currentValue adalah nilai dari elemen yang sedang diproses.
    - thisArg (opsional) adalah nilai yang digunakan sebagai this dalam fungsi callback.
Catatan Penting:
- Tidak mengubah array asli: forEach() hanya menjalankan fungsi pada setiap elemen, tetapi tidak memodifikasi array itu sendiri.
- Eksekusi berurutan: Fungsi callback akan dijalankan secara berurutan dari elemen pertama hingga terakhir dalam array.
- Tidak akan mengeksekusi elemen yang kosong: Jika ada elemen dalam array yang tidak memiliki nilai, forEach() akan melewatinya. */ 

//-- Contoh 1: Menampilkan Setiap Elemen dalam Array
const angka = [1, 2, 3, 4, 5];

angka.forEach(function(item) {
    console.log(item); // Akan mencetak 1, 2, 3, 4, 5
}); // Di sini, setiap elemen dalam array angka akan dicetak ke konsol.


//-- Contoh 2: Menjumlahkan Semua Angka dalam Array
const angka2 = [10, 20, 30];
let total2 = 0;

angka2.forEach(function(item2) {
    total2 += item2;
});
console.log(total2); // Output: 60
/* #Proses Eksekusi Langkah Demi Langkah#
- Deklarasi Variabel
  - angka adalah array [10, 20, 30] yang berisi angka yang akan dijumlahkan.
  - total adalah variabel dengan nilai awal 0, yang akan digunakan untuk menyimpan hasil penjumlahan.
- Memulai Iterasi dengan forEach()
  - forEach() akan memanggil fungsi callback untuk setiap elemen di dalam array, dengan setiap elemen dikirim sebagai item.
- Iterasi Pertama (item = 10)
  - total = 0 + 10 → Nilai total sekarang menjadi 10.
- Iterasi Kedua (item = 20)
  - total = 10 + 20 → Nilai total sekarang menjadi 30.
- Iterasi Ketiga (item = 30)
  - total = 30 + 30 → Nilai total sekarang menjadi 60. */


//-- Contoh 3: Menggunakan thisArg
const daftarNama = ["Aldi", "Budi", "Citra"];

const obj = {
    prefix: "Nama: ",
    cetakNama: function(nama) {
        console.log(this.prefix + nama);
    }
};
daftarNama.forEach(obj.cetakNama, obj); // Output: "Nama: Aldi", "Nama: Budi", "Nama: Citra"
// Di sini, kita menggunakan thisArg (obj) agar fungsi bisa mengakses properti prefix.
/* #Proses Eksekusi Langkah Demi Langkah#
- Deklarasi Array daftarNama
  - daftarNama adalah array yang berisi nama-nama: ["Aldi", "Budi", "Citra"].
- Membuat Objek obj
  - obj adalah objek yang memiliki properti prefix dengan nilai "Nama: ", serta metode cetakNama, yang akan mencetak nama dengan prefix.
- Memanggil forEach() dengan obj.cetakNama sebagai Callback
  - forEach() akan menjalankan fungsi cetakNama untuk setiap elemen di daftarNama.
  - thisArg yang diberikan (obj) digunakan untuk memastikan bahwa "thi"s di dalam cetakNama mengacu pada obj.
    Jika thisArg tidak diberikan dalam forEach(), maka nilai this di dalam fungsi callback tidak secara otomatis 
    merujuk ke objek tertentu, sehingga bisa saja menjadi undefined atau mengacu pada konteks global (window di browser, global di Node.js)
    Mari kita coba dengan contoh yang tidak menggunakan thisArg:
    const obj = {
      prefix: "Nama: ",
      cetakNama: function(nama) {
          console.log(this.prefix + nama);
      }
    };

    // Tidak memberikan thisArg
    daftarNama.forEach(obj.cetakNama);

    Output yang dihasilkan:
      undefinedAldi
      undefinedBudi
      undefinedCitra

    Mengapa undefined muncul?
      - forEach() memanggil fungsi cetakNama, tetapi tidak tahu bahwa fungsi tersebut harus menggunakan this dari obj.
      - Akibatnya, this.prefix dalam fungsi tidak mengacu pada obj.prefix, tetapi malah menjadi undefined.

    #Solusi Alternatif#
    Jika tidak ingin menggunakan thisArg, ada beberapa solusi:
    1️⃣ Gunakan Arrow Function
        Arrow function tidak memiliki this sendiri, sehingga tetap menggunakan this dari lingkup terluar (obj):
        daftarNama.forEach(nama => console.log(obj.prefix + nama));

    2️⃣ Gunakan .bind(obj)
        Metode .bind(obj) memastikan bahwa this tetap mengacu pada obj:
        daftarNama.forEach(obj.cetakNama.bind(obj));

    ✅ Output:
        Nama: Aldi
        Nama: Budi
        Nama: Citra

    #Kesimpulan Tanpa thisArg#
      Tanpa thisArg, this dalam metode forEach() bisa tidak sesuai dengan yang diharapkan, 
      sehingga properti dalam objek bisa menjadi undefined.
      Gunakan thisArg, arrow function, atau .bind(obj) untuk memastikan this mengacu pada objek yang benar!

- Iterasi Pertama (nama = "Aldi")
  - this.prefix mengacu pada "Nama: " dari obj.
  - console.log("Nama: " + "Aldi"); → Cetak "Nama: Aldi".
- Iterasi Kedua (nama = "Budi")
  - this.prefix tetap "Nama: ".
  - console.log("Nama: " + "Budi"); → Cetak "Nama: Budi".
- Iterasi Ketiga (nama = "Citra")
  - this.prefix tetap "Nama: ".
  - console.log("Nama: " + "Citra"); → Cetak "Nama: Citra". */

/* Kesimpulan:
- forEach() sangat berguna untuk iterasi array dan menjalankan suatu fungsi pada setiap elemennya.
- Tidak mengubah array asli, hanya menjalankan fungsi yang diberikan.
- Bisa menggunakan thisArg untuk menetapkan konteks this dalam callback. */

