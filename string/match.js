//-> match() : returns the result of matching (pencocokan) a string against (terhadap) a regular expression.

//-- match() Syntax --
/*   string = "sentence"
     regexp = /word/
     string.match(regexp) 
  -> Returns an Array containing (yg berisi) the matches, one item for each match. else null. */

  const string = "I am learning JavaScript not Java.";
  const regexp1 = /Java/;
  let result1 = string.match(regexp1);
  
  console.log("Result of matching /Java/ :");
  console.log(result1); 
  /*[
    'Java',
    index: 14,
    input: 'I am learning JavaScript not Java.',
    groups: undefined
    ]*/
  
  const regexp2 = /Java/g;
  let result2 = string.match(regexp2);
  
  console.log("Result of matching /Java/ with g flag:")
  console.log(result2); // [ 'Java', 'Java' ]
  
  //-----------------------------------------------------------------------
  const string1 = "My name is Albert. YOUR NAME is Soyuj.";
  
  // expression matches case-insensitive "name is"+ any alphabets till (hingga) period (titik) (.)
  const regexp3 = /name\sis\s[a-zA-Z]+\./gi;
  let result3 = string1.match(regexp3);
  
  console.log(result3); // [ 'name is Albert.', 'NAME is Soyuj.' ]
  
  // using named capturing groups (hanya menangkap nama pertama)
  const regexp4 = /name\sis\s(?<name>[a-zA-Z]+)\./i;
  let found = string1.match(regexp4);
  
  console.log(found.groups); // {name: "Albert"}
  
  // using named capturing groups (menangkap seluruh nama)
  const re1 = /name\sis\s(?<name>[a-zA-Z]+)\./gi;
  let found1 = [...string.matchAll(re1)];
  
  found1.forEach(match => {
      console.log(match.groups.name);
  }); // Albert
      // Sojuy
  
    