// functions

/*
functions are reusable blocks of code

built-in functions == ex. .replace(), .join(), .random(), etc...


methods are functions part of objects
global functions are called globally (does not have to be on an object)
global functions == ex. parseFloat(), parseInt(), etc...

top level outside of functions is global scope (accessible everywhere)
bottom level inside functions is not global scope (not accessible everywhere)

if two programs have the same variables in global scope, js will only recognize the first one imported
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

// used as a short form of creating functions
/*
let func = (arg1, arg2, ... , argN) => {
    statement1;
    return statement2;
} 
is the same as 
let func = function(arg1, arg2, ..., argN) {statement 1; return statement 2;}

don't need () if only one parameter. don't need {} if only one return statement

let func2 = (arg) => statement;

*/
let sum = (a,b) => a+b;
alert(sum(1,2)); // 1 + 2 = 3

let double = n => n*2;  // let double = function(n) {return n;}

// makes code shorter and more readable
let age = 19;
let welcome = (age < 18) ?
    () => alert('Hello') : // creates function with no parameters and returns the alert
    () => alert('Hello kid');
welcome();


const originals = [1, 3, 5];
const doubled = originals.map(item => item*2);
// .map() takes each item in the array, performs the function, then creates a new array with returned values
console.log(doubled); // [2, 6, 10]
