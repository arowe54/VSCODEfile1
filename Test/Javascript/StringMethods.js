// All String methods return a new string

let text = "ABCDEF";
let length = text.length; // 6

// Extracting String parts

// slice() extracts a part of a string and returns extracted part in a new string
// slice(start, end), first index is 0
let textSliced = text.slice(2,4); // CDE
let textSliced2 = text.slice(4); // no end. 'EF'
let textFromBack = text.slice(-4); // negative counts from end. 'BCDEF'

console.log(`Using Slice:\n${textSliced} ${textSliced2} ${textFromBack}`);

// substring() is the same as slice() except negative parameters are treated as zero
textSubbed = text.substring(-4); // ABCDEF because -4 == 0 in substring

// substr() is the same as slice() except second parameter is the length of the extracted part
str = text
let part1 = str.substr(1,4); // BCDE
let part2 = str.substr(4); // EF
let part3 = str.substr(-2); // DEF

console.log(`Using substring() and substr():\n
    Substring: ${textSubbed}\n
    Substr: ${part1} ${part2} ${part3}`);


// replacing strings
// replace() method replaces a spefified value with another value in a string
const firstHome ="I live in Bayfield Hall";
const secondHome = firstHome.replace("Bayfield", "London"); // replaces 'Bayfield' with 'London'

console.log(firstHome + "\n" + secondHome); 

// replace creates a new string
// replace only replaces first instance of the word

// replace is case sensitive
const badCarChoice = "I don't really want a ferrari because its too expensive";
const goodCarChoice = badCarChoice.replace(/really/i, "don't"); // not case sensitive

const reallyGoodCarChoice = goodCarChoice.replace(/don't/g, "really"); // prints 'I really really want a ferrari because its too expensive'
console.log(reallyGoodCarChoice);

// replaceAll() replaces a regular expression instead of a String
// does not create a new string and does not work in Internet Explorer

let pets = "Cats dogs cats Dogs";
pets = pets.replaceAll(/Cats/g, "Dogs");
console.log(pets);

/*
for a String text;
text.toUpperCase() converts all characters in text to upper case
text.toLowerCase() converts all to lower case
*/


// concat() joins two or more strings
let welcome = "Hello";
let planet = "World";
let greeting2 = welcome.concat(" ", planet); // prints "Hello World"


// trim
// removes whitespace from both sides of a string
let bigWhite = "       No empty space     ";
let noWhite = bigWhite.trim(); // No empty space

// trimStart() removes white space from front, trimEnd() removes whiteSpace from end of a string

// padding
// padStart() pads a string with another string, padEnd() pads at the end of the string
const four = '4';
const padded = four.padStart(4, 'x'); // xxx4
const padded2 = four.padEnd(4, 'x'); // 4xxx

console.log(`${greeting2}\n${noWhite}\n${padded}\t${padded2}`);

// text = "ABCDEF"
let char3 = text.charAt(2); // C
// property access
/*
text.charAt(2) is the same as text[2]
strings are not arrays. If no character is found, returns undefined, but charAt() returns an empty string
is also read only
*/
let charCode1 = text.charCodeAt(0); // unicode of H is 72

// Converting a String to an Array
// split()
let finalText = "A,B CDE|FG";
let textArray1 = finalText.split(","); // split on commas
let textArray2 = finalText.split(" "); // split on spaces
let textArray3 = finalText.split("|"); // split on pipe (or any other character if you want to switch | with that char

console.log(finalText+"\n"+textArray1 + " split on commas\n" + textArray2 +" split on spaces\n" + textArray3 + " split on the pipe");

//join()
const stringArray = ('I', 'love', 'chocolate');
let joinedArray = stringArray.join(' '); // joins the stringArray into one string (one value)
console.log(joinedArray); // 