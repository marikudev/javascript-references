// -> Returns a specified part (bagian tertentu) of the string between start and end indexes.

//-- substring() Syntax --
//-- string.substring(indexStart, indexEnd) --

let string1 = "Programiz JavaScript Tutorials";

// first character
substr1 = string1.substring(0, 3);
console.log(substr1); // Pro

// if start > end, they are swapped
substr2 = string1.substring(3, 0);
console.log(substr2); // Pro

// From 11th to last character
substr3 = string1.substring(10);
console.log(substr3); // JavaScript Tutorials


// the extreme values are 0 and str.length

// same as string.substring(0)
substr4 = string1.substring(-44, 90);
console.log(substr4); // Programiz JavaScript Tutorials

// indexEnd is exclusive
substr5 = string1.substring(0, string1.length - 4);
console.log(substr5); // Programiz JavaScript Tutorial


//-- Example: Replacing a substring within a string --

// Replaces old characters with new characters in a string
function replaceString(oldChars, newChars, string) {
  for (let i = 0; i < string.length; ++i) {
    if (string.substring(i, i + oldChars.length) == oldChars) {
      string =
        string.substring(0, i) +
        newChars +
        string.substring(i + oldChars.length, string.length);
    }
  }
  return string;
}

const string = "Java Tutorials";
let newString = replaceString("Java", "JavaScript", string);
console.log(newString); // JavaScript Tutorials


/* Penjelasan eksekusi Langkah Demi Langkah:

1. Pemanggilan Fungsi:
Baris kode const newString = replaceString("Java", "JavaScript", string); memanggil fungsi replaceString dengan argumen:
oldChars = "Java"
newChars = "JavaScript"
string = "Java Tutorials"

2. Masuk ke dalam Fungsi:
Eksekusi masuk ke dalam blok kode fungsi replaceString.

3. Inisialisasi Perulangan for:
for (let i = 0; i < string.length; ++i): Perulangan for dimulai.
let i = 0: Variabel i (yang berfungsi sebagai indeks) diinisialisasi dengan nilai 0.

4. Kondisi Perulangan:
i < string.length: Kondisi ini diperiksa. Panjang dari string ("Java Tutorials") adalah 14. Jadi, kondisi awalnya adalah 0 < 14, yang bernilai true. Karena kondisinya benar, blok kode di dalam perulangan akan dieksekusi.

5. Iterasi Pertama (i = 0):
- Kondisi if: if (string.substring(i, i + oldChars.length) == oldChars)
string.substring(i, i + oldChars.length) menjadi string.substring(0, 0 + 4) yang menghasilkan "Java".
"Java" == oldChars menjadi "Java" == "Java", yang bernilai true.

- Blok if dieksekusi:
string = string.substring(0, i) + newChars + string.substring(i + oldChars.length, string.length);
string = string.substring(0, 0) + "JavaScript" + string.substring(0 + 4, 14);
string = "" + "JavaScript" + " Tutorials";
Sekarang, nilai variabel string di dalam fungsi menjadi "JavaScript Tutorials".
Increment i: ++i akan meningkatkan nilai i menjadi 1.

6. Iterasi Kedua (i = 1):
Kondisi Perulangan: i < string.length menjadi 1 < 14, yang bernilai true.
Kondisi if: if (string.substring(i, i + oldChars.length) == oldChars)
string.substring(i, i + oldChars.length) menjadi string.substring(1, 1 + 4) yang menghasilkan "ava ".
"ava " == oldChars menjadi "ava " == "Java", yang bernilai false.
Blok if tidak dieksekusi.
Increment i: ++i akan meningkatkan nilai i menjadi 2.

7. Iterasi Ketiga hingga Kesepuluh (i = 2 hingga 9):
Proses serupa terjadi. Pada setiap iterasi, substring akan mengambil potongan string sepanjang panjang oldChars dimulai dari indeks i. Potongan ini akan dibandingkan dengan "Java". Karena tidak ada kemunculan "Java" lagi dimulai dari indeks 2 hingga 9, kondisi if akan selalu bernilai false, dan blok kodenya tidak akan dieksekusi. Nilai variabel string di dalam fungsi tetap "JavaScript Tutorials".

8. Iterasi Kesebelas (i = 10):
Kondisi Perulangan: i < string.length menjadi 10 < 14, yang bernilai true.
Kondisi if: if (string.substring(i, i + oldChars.length) == oldChars)
string.substring(i, i + oldChars.length) menjadi string.substring(10, 10 + 4) yang menghasilkan "Tuto".
"Tuto" == "Java", yang bernilai false.
Blok if tidak dieksekusi.
Increment i: ++i akan meningkatkan nilai i menjadi 11.

9. Iterasi Kedua Belas (i = 11):
Kondisi Perulangan: i < string.length menjadi 11 < 14, yang bernilai true.
Kondisi if: if (string.substring(i, i + oldChars.length) == oldChars)
string.substring(i, i + oldChars.length) menjadi string.substring(11, 11 + 4) yang menghasilkan "utor".
"utor" == "Java", yang bernilai false.
Blok if tidak dieksekusi.
Increment i: ++i akan meningkatkan nilai i menjadi 12.

10. Iterasi Ketiga Belas (i = 12):
Kondisi Perulangan: i < string.length menjadi 12 < 14, yang bernilai true.
Kondisi if: if (string.substring(i, i + oldChars.length) == oldChars)
string.substring(i, i + oldChars.length) menjadi string.substring(12, 12 + 4) yang menghasilkan "tori".
"tori" == "Java", yang bernilai false.
Blok if tidak dieksekusi.
Increment i: ++i akan meningkatkan nilai i menjadi 13.

11. Iterasi Keempat Belas (i = 13):
Kondisi Perulangan: i < string.length menjadi 13 < 14, yang bernilai true.
Kondisi if: if (string.substring(i, i + oldChars.length) == oldChars)
string.substring(i, i + oldChars.length) menjadi string.substring(13, 13 + 4) yang menghasilkan "oria".
"oria" == "Java", yang bernilai false.
Blok if tidak dieksekusi.
Increment i: ++i akan meningkatkan nilai i menjadi 14.

12. Kondisi Perulangan False:
i < string.length menjadi 14 < 14, yang bernilai false. Perulangan for berhenti.

13. Pengembalian Nilai:
return string;: Fungsi mengembalikan nilai dari variabel string, yang saat ini adalah "JavaScript Tutorials".

14. Penyimpanan Nilai Kembali:
Nilai yang dikembalikan oleh fungsi ("JavaScript Tutorials") disimpan dalam variabel newString.

15. Menampilkan Output:
console.log(newString);: Perintah ini akan mencetak nilai dari newString ke konsol, yaitu "JavaScript Tutorials".*/