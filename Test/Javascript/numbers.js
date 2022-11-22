/*
supported data types
number
Boolean
BigInt // a number outside of 64-bit floating point format, with the number n at the end
Null
Object
String
Symbol
Undefined


// operators are the basically the same as java
// ** are for exponents

let x = 123e5; // 12300000 (123 with 5 zeros)
let y = 123e-5; // 0.0123 (5 digits after decimal)

// js numbers are all 64-bit floating point
// the number is stored in bits 0-51
// exponent in bits 52-62
// sign in 63

// max number of decimals is 17


// integers are accurate up to 15 digits
let num1 = 999999999999999; 

let inAccurate = 0.2 + 0.1; // 0.30000 (lots of zeros) 4
console.log(inAccurate);

let accurate = (0.2*10 + 0.1*10)/10; // 0.3
console.log(accurate)

// adding a string to a number concatenates the string to the number
let num2 = 10;
let num3 = "20";
console.log(num2 + num3); // 1020

// js will try converting strings to numbers for operations
let num4 = "6";
let num5 = "2";
console.log(num4/num5); // *, /, and - works, but not +

// NaN means not a number
isNaN(num1); // checks if num1 is a number
let num6 = "NaN";

// infinity
// infinity or -infinity is returned if a number is calculated outside of largest possible number
// division by zero == infinity
// typeOf infinity; returns number bc infinity is a number in js

// Hexadecimals
// constants with a '0x' in the beginning are hexadecimals
let FIRSTHD = 0xFF

console.log("Don't write numbers with leading zeros (ex. 07).");


// change of base
/*
Js displays numbers base 10 by default.
Can use toString() method to output numbers from base 2 to 36

Hexadecimal = base 16
Decimal = 10
Octal = 8
Binary = 2
*/
let myNumber = 32;
console.log(myNumber.toString(32)); // 10
console.log(myNumber.toString(16)); // 20

myNumber.toString(12);

console.log(myNumber.toString(10)); // 32

myNumber.toString(8);
console.log(myNumber.toString(2)); // binary 100000

// when x == y, x and y are equal; when x === y, checks if x is the same as y
// comparing two objects always returns false
// numbers can be objects but you should not do that
// number() converts everything in parameter to a number if possible
