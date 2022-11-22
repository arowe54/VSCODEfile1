/*
When the user inputs a Number
loop from 1 to the number
If it is divisible by 3 with no remainder, print Fizz
If it is divisible by 5 with no remainder, print Buzz
If it is divisible by 3 and 5 with no remainder, print FizzBuzz
*/
let answer = parseInt(prompt("What is the number you want to FizzBuzz"));

// for loops are mostly the same as in Java (except let)
for (let i = 1; i <= answer; i++){ // usually start from 0 and go to i<answer
    if (i % 3 == 0 && i % 5 == 0) { // if divisible by 3 and 5
        console.log("FizzBuzz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}