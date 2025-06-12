//-> findIndex(): Metode findIndex() digunakan pada array dalam JavaScript untuk mencari indeks dari elemen pertama yang memenuhi kondisi tertentu. Jika tidak ada elemen yang memenuhi kondisi, metode ini akan mengembalikan -1.
//-- Syntax: arr.findIndex(callback(element, index, arr),thisArg)
/* Metode ini membutuhkan sebuah callback function, yaitu fungsi yang dijalankan pada setiap elemen dalam array. Callback function ini menerima tiga parameter:
   - element - Elemen saat ini yang sedang diperiksa.
   - index (opsional) - Indeks dari elemen yang sedang diperiksa.
   - arr (opsional) - Array yang sedang diperiksa.
Selain itu, kita bisa memberikan parameter tambahan thisArg, yaitu objek yang akan digunakan sebagai this di dalam callback function.*/

//Example 1: Using findIndex() method
// function that returns even number
function isEven(element) {
    return element % 2 == 0;
  }
  
  // defining an array of integers
  let numbers = [1, 45, 8, 98, 7];
  
  // returns the index of the first even (genap) number in the array
  let firstEven = numbers.findIndex(isEven);
  
  console.log(firstEven); // Indeks ke: 2 
  // Metode ini mengembalikan 2 yang merupakan indeks angka genap pertama di numbers "8" .
  
  //Example 2: findIndex() with Arrow Function
  // defining an array
  let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];
  
  // returns the first index of 'Wednesday' in the array
  let index = days.findIndex((day) => day === "Wednesday");
  
  console.log(index); // "Wednesday" adalah indeks ke: 1
  
  
  // Example 3: findIndex() with Object Elements
  // defining an object 
  const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];
  
  // function that returns age greater (lebih besar) than or equal to 18
  function isAdult(member) {
    return member.age >= 18;
  }
  
  // returns the index of the first element which is 
  // greater than or equal to 18  
  console.log(team.findIndex(isAdult)); // indeks ke: 2 (alian, 20)
  
  