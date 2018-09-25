/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/
//Input: string
//Output: string: alphabatized 
//purpose: alphabatized list of the letters in the string (that was the input (exclusing spaces))
function alphabetSoup(str) {
	//take in the string as the argument of the function.
	//turn the string into an array of characters using split to separate the string in to substrings and store the restulting array as a variable. the split method takes in a deliimter (use empty string)	var letters = str.split('');
	//Sort the array to alphabatize it
	//Join the elements in the array back into a string, the argument will be "" for the .join() method will be ''
	//Get rid of the spaces using trim
	//return it
	var letters = str.split('').sort().join('').trim();
	return letters;
}

	
  
// SECOND WAY TO DO IT:
  
//   function alphabetSoup2(str) {
   
// 	var letters = str.split('');
// 	var array = letters.sort();
// 	var newArray = array.join("");
// 	var newString=newArray.trim();
// 	return newString;
//   }
  

