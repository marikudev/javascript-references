const message = "ball bat";

let result = message.replace("b", "c");
console.log(result);

//------------------------------------------

const text = "Java is awasome. Java is fun."

let pattern = "Java";
let newText = text.replace(pattern, "Javascript");
console.log(newText);

let pattern1 = /Java/g;
let newText1 = text.replace(pattern1, "ECMAScript");
console.log(newText1)