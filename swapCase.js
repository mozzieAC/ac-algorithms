/*

Given a string, swap the case of each character and return it.
Assume the string has only letters.

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.


*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/


//Input: A string
//Output: That string with every letter's case swapped
//Create a variable to contain the new string
// for loop to go through the characters of the sentence
	// if the character at index i, is strictly equal to that character.toLowercase , then change it to Uppercase,and add it to the newString variable else if strictly equal to that character.toUppercase, change it to lowercase and add it to the newString variable
//else add it to newString variable
//return newString variable



function swapCase(str) {
	var newString = "";
	for (var i = 0; i < str.length; i++){
		if (str.charAt(i) === str.charAt(i).toUpperCase()) {
			newString = newString + str.charAt(i).toLowerCase();
		} else {
			newString = newString + str.charAt(i).toUpperCase();
			}
  }
	return newString;
}




//Another way to do it:

//Input: A string
//Output: That string with every letter's case swapped
//Create a variable to contain the new string
//Split the string, setting the delimiter to be an empty string, "", and create a variable to store the new array
//Create  for loop that starts at position zero and loops through the elements in the new array
	//Conditional statements to see if the character you are on is uppercase
		//If true, make lowercase and add it the variable with the output string
	//Else If test if the character is lowerCase, 
		//if true, make it Uppercase and add it to the variable with the output string
	//If false, add the character to the string
//return the variable storing the output


function swapCase(str) {
	var newString = "";
	var charArray = str.split("");
	for (var i = 0; i < charArray.length; i++){
		if (charArray[i] === charArray[i].toUpperCase()){
			newString = newString + charArray[i].toLowerCase();
		} else {
      newString = newString + charArray[i].toUpperCase();
    }
  }
	return newString;
}



