const message = "JavaScript is not Java";

const index = message.indexOf("ot");
console.log("indeks ke: " + index);


// Argumen kedua menentukan indeks awal pencarian

let index2 = message.indexOf("a", 2);
console.log(index2);

// indexOf returns -1 if not found

let index3 = message.indexOf("Phyton");
console.log(index3);

// Finding All the Occurrences (kemunculan/keberadaan) of an Element

function findAllIndex(string, value) {
    indices = [];
    var currentIndex = string.indexOf(value);
    while (currentIndex != -1) {
      indices.push(currentIndex);
      currentIndex = string.indexOf(value, currentIndex + value.length);
    }
    return indices;
  }
  
  var str = "JavaScript is as related to Java as Carpenter is to Carpet.";
  
  var occurance1 = findAllIndex(str, "J");
  console.log(occurance1); // [ 0, 28 ]
  
  var occurance2 = findAllIndex(str, "Carpet");
  console.log(occurance2); // [ 52 ]
  
  var occurance3 = findAllIndex(str, "x");
  console.log(occurance3); // []