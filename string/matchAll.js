//-> matchAll(): returns an iterator (nengakses elemen satu per satu) of results after matching a string against (terhadap) a regular expression.
//-- Syntax: string.matchAll(regexp) --
//-- returned iterator's each item will have the following additional properties: group, index dan input.

// string definition 
const string1= "I am learning JavaScript not Java.";

// pattern having 'Java' with any number of characters from a to z
const regexp =  /Java[a-z]*/gi;  //[a-z]* → menangkap huruf kecil apa pun setelah "Java", tetapi boleh tidak ada sama sekali.


// finding matches in the string for the given regular expression 
let result1 = string1.matchAll(regexp);

// converting result into an array 
console.log(Array.from(result1));

/* output:
[
  'JavaScript',
  index: 14,
  input: 'I am learning JavaScript not Java.',
  groups: undefined
]
[
  'Java',
  index: 29,
  input: 'I am learning JavaScript not Java.',
  groups: undefined
] */
//------------------------------------------------------------------
// string definition 
const string2 = "His name is  Albert and albert likes to code.";

// pattern having 'albert' or 'Albert'  
const regexp2 = /albert/gi;

//  finding 'albert' or 'Albert' in the string  
const result2 = string2.matchAll(regexp2);

console.log(Array.from(result2));

/* output:
[
  [
    'Albert',
    index: 13,
    input: 'His name is  Albert and albert likes to code.',
    groups: undefined
  ],
  [
    'albert',
    index: 24,
    input: 'His name is  Albert and albert likes to code.',
    groups: undefined
  ]
] */

