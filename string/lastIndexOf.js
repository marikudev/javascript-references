// defining a string
var str = "Programmiing";
var str1 = "I love JavaScript";

// find last occurrence of "g" in str
var substr = "g";
var result = str.lastIndexOf("g");
console.log(result);


// find last occurrence of "i" in str
var substr1 = "i";
var result1 = str.lastIndexOf(substr1);
console.log(result1);


// passing second parameter 'fromIndex' in lastIndexOf()
var substr2 = "g";
var fromIndex = 6;
var result2 = str.lastIndexOf(substr2, fromIndex);
console.log(result2);


// passing a substring that is not in a given string
var result3 = str.lastIndexOf("Java");
console.log(result3);

// Pencarian (Case-Sensitive) peka terhadap Huruf besar/kecil
var result4 = str1.lastIndexOf("JavaScript");
var result5 = str1.lastIndexOf("javaScript");
console.log(result4);
console.log(result5);
