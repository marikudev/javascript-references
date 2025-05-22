// -> checks if a given string comes before, after, or is equivalent as another string in sort order (urutan pengurutan).

//-- localeCompare() Syntax --
//-- string.localeCompare(compareStr, locales, options) --


// comparing 'c' with 'b' using localeCompare()
let result1 = 'c'.localeCompare('b');

console.log(result1); // 1 (the reference string is sorted after compareStr)

// comparing 'c' with 'b' using localeCompare()
let result2 = 'b'.localeCompare('c');

console.log(result2); // -1 (the reference string is sorted before compareStr)

// comparing 'JavaScript' and 'JavaScript' using localeCompare()
let result3 = 'JavaScript'.localeCompare('JavaScript');
console.log(result3); // 0 (two strings are equivalent)

// comparing 'Python' and 'JavaScript' using localeCompare()
let result4 = 'Python'.localeCompare('JavaScript');
console.log(result4); // 1



// passing locale that specifies the German formatting convention  
let value1 = "ä".localeCompare("z", "de");

console.log(value1); // -1 (a negative value: in German, ä sorts before z)

// passing locale that specifies the Swedish formatting convention 
let value2 = "ä".localeCompare("z", "sv");

console.log(value2); // 1 (a positive value: in Swedish, ä sorts after z)

// untuk kode de dan sv, lihat (List of ISO 639-1 codes)


// default comparison between two numbers '5' and '40'
console.log("5".localeCompare("40")); // 1 ('5' and '40' adalah string, sehingga '5' > '40')

// the last parameters indicates 'options'
let value3 = "5".localeCompare("40", undefined, { numeric: true });
console.log(value3); // -1 (a negative value, karena ada option { numeric: true } maka 5 and 40 menjadi number sehingga '5' < '40' )