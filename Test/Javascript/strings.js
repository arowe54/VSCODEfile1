// use \ as an escape character
const bigMouth = 'I\'ve got a lot of words';
/*
\n is new line
\v is vertical tab
\t is tab
\b is backspace

*/
// mulit-line strings 
const longOne = "This is a very long string \
    across multiple lines of Code \
    and has the \\ character";

// can use \ or + but don't have to


// concatenating strings

// use template literals (` `) to concatenate strings
const firstName = "Andrew";
const greeting = `Hello, ${firstName}`;

const score = 43;
const highestScore = 55;

const usingExpression = `${longOne}\n{greeting} your score is ${score/highestScore * 100}%`;

console.log(`This is the expression\n ${usingExpression}`)


function greet(){
    const name = prompt("What is your name");
    alert(`Hello ${name}, nice to see you!`);
}

greet();

// can also concatenate using + like in Java
// strings and numbers can be combined

// const three = "3";
// console.log(toString(three));