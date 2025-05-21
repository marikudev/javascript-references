// trim menghapus spasi atau whitespace (seperti spasi, tab, dan newline) dari awal dan akhir sebuah string.

const teks = "Mohamad Faizal Malik ";
const spaceTeks = teks.trim(); 

console.log(spaceTeks);

//-> trim(): removes whitespace from both (kedua) ends of a string. (hanya spasi awal & akhir)
//-- Syntax trim(): string.trim()

const message = "   JAVASCRIPT IS FUN    ";

// remove leading and trailing whitespaces
const newMessage = message.trim();
console.log(newMessage);

// Output: JAVASCRIPT IS FUN