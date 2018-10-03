/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = dashInsert("13");
console.log(result) // "1-3"

**/


//Input: A string of numbers
//Output: A string of numbers with dashes in between any touching odd numbers
//Purpose: Put dashes in bewteen any touching odd numbers


function dashInsert(str) {
//Split string into an array of numbers
//Store the array in a variable
//Create a variable to store the output of the loop
//Create a for loop that loops through the elements of the array
	//Conditional statement that checks if the number we are looking at and the number that comes next in the array are odd (using modulo).
		// If they are, we want to add the number itself and a dash elements to the varialbe storing our output
		//If they are not both odd, add the number to the variable storing our output
		//If numbers next to each other are odd add dash between them using push?
//Return the variable storing the output from our loop
	
	var newString = ""; 
	var numberArray = str.split("");
	for (var i = 0; i < numberArray.length; i++) {

		if (numberArray[i] % 2 === 1 && numberArray[i+1] % 2 === 1){
			newString = newString + numberArray[i] + "-";
		} else {
			newString = newString + numberArray[i];
		}
	}	
	return newString;
	}


