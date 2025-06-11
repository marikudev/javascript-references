//-> find(): digunakan untuk mencari elemen pertama dalam sebuah array yang memenuhi kondisi tertentu berdasarkan fungsi yang diberikan. 
// Jika ada elemen yang memenuhi kondisi, find() akan mengembalikan nilai dari elemen tersebut. Jika tidak ada yang sesuai, hasilnya adalah undefined.
//-- Syntax: arr.find(callback(element, index, arr), thisArg). 
/* Dimana:
- arr adalah array tempat pencarian dilakukan.
- callback adalah fungsi yang dijalankan pada setiap elemen array.
- element adalah elemen saat ini yang sedang diperiksa.
- index (opsional) adalah indeks dari elemen saat ini dalam array.
- arr (opsional) adalah referensi ke array yang sedang diproses.
- thisArg (opsional) adalah nilai yang ingin digunakan sebagai this dalam fungsi callback. */

// Example 1: Kita memiliki sebuah daftar angka, dan kita ingin mencari angka pertama yang lebih besar dari 10.
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find((num) => num > 10);
console.log(found); // Output: 12
// Apa yang Terjadi Jika Tidak Ada yang Cocok?
const found2 = numbers.find((num) => num > 140);
console.log(found2); // Output: undefined
/* Perbedaan find() dengan filter()
   - find() hanya mengembalikan satu elemen pertama yang cocok.
   - filter() mengembalikan semua elemen yang cocok dalam bentuk array.
Contoh filter(): */
const filtered = numbers.filter((num) => num > 10);
console.log(filtered); // Output: [12, 130, 44]
/* Kesimpulan
- find() digunakan untuk mencari elemen pertama yang memenuhi kondisi.
- Jika tidak ada yang cocok, hasilnya adalah undefined.
- Berbeda dengan filter(), yang mengembalikan semua elemen yang cocok.*/

// Example 2: Using find() method
function isEven(element) {
  return element % 2 == 0;
}

let randomArray = [1, 45, 8, 98, 7];

let firstEven = randomArray.find(isEven);
console.log(firstEven); // 8

// using arrow operator
let firstOdd = randomArray.find((element) => element % 2 == 1);
console.log(firstOdd); // 1


//Example 3: find() with Object elements
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(member) {
  return member.age >= 18;
}

console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

// using arrow function and deconstructing
let adultMember = team.find(({ age }) => age >= 18);

console.log(adultMember); // { name: 'Alan', age: 20 }
