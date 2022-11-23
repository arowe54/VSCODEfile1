// Functions
/*
functions are reusable blocks of code

methods are functions part of objects
built-in functions == ex. .replace(), .join(), .random(), etc...

Scope:

Global scope:
top level outside functions is global scope
accessible everywhere
global functions are called globally (does not have to be on an object)
ex. parseFloat(), parseInt(), etc...

if two programs have the same variables in global scope, only the first one is recognized

Function Scope:
level inside functions is function scope
accessible to rest of function.
not accessible in everywhere.
*/

// random number between 0 and number
function random(number){
    return Math.floor(Math.random()*number);
}
// Math.random creates a random decimal number between 0 and 1, .floor rounds it down

random(3); // invoke the function
console.log(random(100));


// anonymous functions / function expressions
/*
functions with no name 
(usually because it recieves another function as a parameter).
(function (){
    statement;
})
*/

// arrow functions
/*
short form of creating functions.
makes code shorter and easier to read.

let func = (arg1, arg2, ... , argN) => {
    statement1;
    return statement2;
} 
is the same as 
let func = function(arg1, arg2, ..., argN) {statement 1; return statement 2;}

don't need () if only one parameter. don't need {} if only one return statement
*/
let sum = (a,b) => a+b;
alert(sum(1,2)); // 1 + 2 = 3

let double = n => n*2;  // let double = function(n) {return n;}

let age2 = prompt("What is your age?");
let greetings2 = (age2 < 18) ? 
    () => alert('Hello') : // creates function with no parameters and runs the alert
    () => alert('Hello kid');



// more practice

add7 = num => num+7;
console.log(add7(1)); // 8

multiply = (a,b) => a*b;
console.log(multiply(3,4)); // 12

function capitalize(word) {
    let secondWord = '';
    let firstLetter = '';
    let remainder = '';
    firstLetter = word.charAt(0).toUpperCase();
    remainder = word.substring(1).toLowerCase();
    return secondWord.concat(firstLetter + remainder)
}

    
console.log(capitalize("yELlow")) // creates empty string and concatenates "Y" + "ellow" to return a new string called "Yellow"

lastLetter = word => word.charAt(word.length-1);
console.log(lastLetter("abcd")); // d