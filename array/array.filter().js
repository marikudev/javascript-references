/*-> filter(): digunakan untuk menyaring elemen dalam array berdasarkan kriteria yang diberikan dalam fungsi callback. 
Hasilnya adalah array baru yang hanya berisi elemen yang memenuhi kondisi tersebut.
-> Syntax: arr.filter(callback(element), thisArg); Di sini, "arr" adalah array yang ingin difilter.
Parameter:
- callback - Fungsi yang digunakan untuk menguji setiap elemen array. Fungsi ini mengembalikan:
  + true jika elemen lulus uji (akan disertakan dalam array baru).
  + false jika elemen tidak lulus uji (akan diabaikan).
- thisArg (opsional) - Nilai yang digunakan sebagai this saat callback dieksekusi. 
  Secara default, nilainya undefined.
  
Metode filter() mengembalikan array baru yang berisi elemen yang memenuhi kondisi.
*/

//-- Contoh 1: Menyaring Angka Genap
const numbers = [10, 15, 20, 25, 30];

const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0; // Hanya angka yang habis dibagi 2 yang dipilih.
});
// use arrow function
// const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [10, 20, 30]


//-- Contoh 2: Memfilter Nama dengan Huruf Tertentu
const names = ["Ali", "Aisyah", "Budi", "Citra", "Dina"];

const namesWithA = names.filter(function (name) {
    return name.includes("A") || name.includes("a"); // Hanya nama yang mengandung huruf "A" atau "a" yang disertakan.
});
//use arrow function
// const namesWithA = names.filter(name => name.includes("A") || name.includes("a"));

console.log(namesWithA); // Output: ["Ali", "Aisyah", "Citra"]


//-- Contoh 3: Memfilter Data dalam Array Objek
const students = [
    { name: "Rina", score: 85 },
    { name: "Budi", score: 60 },
    { name: "Sari", score: 90 },
    { name: "Doni", score: 70 }
];

const passedStudents = students.filter(function (student) {
    return student.score >= 75;
});
// use arrow function
// const passedStudents = students.filter(student => student.score >= 75);

console.log(passedStudents);
/* Output: [
            { name: "Rina", score: 85 },
            { name: "Sari", score: 90 }  ]  */

//-- Example 4: Filtering out values from Array
const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]

function checkPrice(element) {
  return element > 2000 && !Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]

// using arrow function
let newPrices = prices.filter((price) => (price > 2000 && !Number.isNaN(price)));
console.log(newPrices); // [ 3000, 5000, 8000 ]

//-- Example 5: Searching in Array
const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];

function searchFor(arr, query) {  // fungsi utama
    function condition(element) {  // fungsi callback
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
   /* - element.toLowerCase() → Konversi elemen ke huruf kecil agar pencarian tidak bersifat case-sensitive.
      - query.toLowerCase() → Konversi kata pencarian ke huruf kecil.
      - .indexOf(query.toLowerCase()) !== -1 → Mengecek apakah query ada dalam element:
        + Jika indexOf() mengembalikan -1, berarti query tidak ditemukan.
        + Jika tidak -1, berarti query ditemukan dan elemen dipertahankan dalam array hasil. */
    }
    return arr.filter(condition); // fungsi utama
  /* - filter(condition) → Menyaring elemen array "arr" berdasarkan fungsi condition().
     - Hanya elemen yang mengandung "query" akan disimpan. */
}

let newArr = searchFor(languages, "ja");
console.log(newArr); // [ 'JavaScript', 'Java' ]

// using arrow function
const searchArr = (arr, query) => arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);

let newLanguages = searchArr(languages, "p"); // Pemanggilan Fungsi dengan (query "p")
console.log(newLanguages); // [ 'JavaScript', 'Python', 'PHP' ]


/* Kesimpulan:
- filter() tidak mengubah array asli, tetapi menghasilkan array baru.
- Hanya elemen yang memenuhi kondisi dalam callback yang akan dipilih.
- Sangat berguna untuk menyaring data dalam array, baik berupa angka, string, maupun objek. */




