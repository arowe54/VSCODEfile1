// mostly same comparisons as java (ex. >, <=, etc...)
// Comparing Strings
alert('Z' > 'A');
alert('Glow' > 'Glee');
alert('Bee' > 'Be');
// ^ all true ^

// comparing boolean
// true == 1, false == 0

/*
 == cannot differentiate between 0 or empty string '' with false
== equality operator converts operands of different types to numbers
=== strict equality operator does not do type conversion
null === undefined returns false, but null == defined is true

comparisons < > <= >= convert null to number 0
== compares null to undefined
so null >= 0 is true, null == 0 is false

undefined is always converted to NaN for all comparisons, so is always false when compared
*/