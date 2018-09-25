/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/




/*
My pseudo code:
Input: two numbers 
Output: true, false, 0 (or -1 if undefined or not a number)

Create nested if statements
create variable "result" to hold value of the comparison
if a > b result is true
if a < b result is false
if a = b result is 0
if a or b is undefined or NAN result is -1
return result
**/


//Laura's pseudo code:
//inputs: two numbers, a + b, parameters
//output: true, false, 0, or -1

// purpose: evaluate a and be to see if they are numbers AND how they compare to one another )ie, if one is bigger

function isBigger(a, b) {
	//conditional statement to test if a > b
	// conditional statement to test if a < b
	// conditional statement if a === b
	// if a or be are not numbers
	var result = ""
	if (typeof a === "number" && typeof b === "number") {
		if (a > b) {
			result = true;
		} else if (a < b) {
			result = false;
		}	else {
			result = 0;
		}
	} else {
		result = -1;
	}
	return result;	
}