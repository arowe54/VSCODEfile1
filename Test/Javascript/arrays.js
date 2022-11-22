// arrays


// .map()
// .map() takes each item in the array, performs the function, then creates a new array with returned values
const originals = [1, 3, 5];
const doubled = originals.map(item => item*2);

console.log(doubled); // [2, 6, 10]


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
console.log(joinedArray);