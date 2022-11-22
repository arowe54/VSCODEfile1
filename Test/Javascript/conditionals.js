// logical operators

// || (OR)

// converts each operand to boolean, checks if true, and returns first truthy value in original form
a = true;
b = false;
c = 4>3;
d = 3>4;
result = a || b; // a
alert(a || b || c); // a
alert(b || d); // d

// short circuits
false || alert("printed"); // prints alert
true || alert("printed"); // does not print


// AND &&

// returns true only if both operands are true
// converts each operand to a boolean, returns the first false value or last true statement
console.log(a &&  b); // false
console.log(a && c); // true, c

// && could be an if statement, but if statements are easier to read
let x = 1;
(x > 0) && alert("Greater than zero"); // prints alert
(x<0) && alert("Greater than zero"); // returns false


// AND has higher precedence than O
// a && b || c && d == (a&&b) || (c&&d)
console.log(a && b || c && d);


// NOT !
// returns inverse boolean value (ex. !true = false, !false = true)


// if, else, and else if
// basically same as Java

/*
if (condition){
    statement;
} else if (condition2) {
    statement;
} else {
    statement;
}

can also put nesting if else statements

*/

// Switch Statements
/*
switch (expression){
    case choice1: // if expression == choice1
        statement;
        break;
    case choice2:
        statement;
        break;
    // as many cases as necessary
    default:
        statement; // run this code if switch does not break before it
}
*/

// Ternary Operator
/*
tests a condition and returns one value/expression if it is true and another if it is false

good for an if ... else block
*/

// condition ? statementForTrue : secondStatementForFalse;
let isBirthday = true;
const greeting = isBirthday
    ? 'Happy Birthday, have a good day!' 
    : 'Good Morning.';

console.log(greeting); // prints the happy birthday message

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
// basically an if else, : is else-if, ? runs statement;
// good for when there is only one command

alert(message);

// last usage
let favMovie = prompt('What is my favorite movie?');
// basically an if-else statement
(favMovie == 'Lord of the Rings') ?
    alert('Right!') : alert('Wrong');
