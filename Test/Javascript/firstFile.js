let message; // declares a variable called message
message = 'Hello'; // stores String in message

alert(message); // prints message to screen

let bestMovie = prompt("What is the highest grossing movie of all time?", "Avatar"); // asks message with a default value of Avatar in the input box

// prompt does not need a default value
prompt("You picked" + bestMovie); // tells user their choice from prompt

let user = 'John Rowe';
age = 25;

// can also do this
let user2 = 'Andrew Rowe',
    age2 = 18,
    message2 = 'hello';

// var is basically the same as let

let hello = 'Hello World';
message = hello; // changes message to 'Hello World'

// variables
/*
use camelCase
variables can only be letters, digits, _ or $
cannot start with a digit
cannot use reserved words (ex. let, class, return, function, etc...)

can use any language, including cryllic and chinese symbols. should use english (national convention)

older versions of js could use variables without defining them.
If you put 'use strict', you have to declare variables
*/

// constants
const myBirthday = '16.06.2004';

// constants are good for difficult to remember values (ex. colours in hexadecimal)
const COLOUR_RED = "#F00";
const COLOUR_GREEN = "#0F0";
const COLOUR_BLUE = "#00F";
const COLOUR_ORANGE = "#FF7F00";
let colourGreen = COLOUR_GREEN;
alert(colourGreen)

// if it is not known before loading the file, use regular camelCase

/*
 advice from https://javascript.info/variables

Use readable names,
stay away from abbreviations / short names (ex. a, b)
make it descriptive and concise
make it make sense (ex. if a user is a user, name variables like newUser instead of newVisitor)
use different variables for different values so debugging is easier
*/