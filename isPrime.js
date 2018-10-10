/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/

//Input: A number between 1 and 2^16
//Output: return true if the number is prime, return false if it is not.
//Remember 2 is a prime number and 1 is not.

//if 
//for loop, i =1; i <= input number; i++
	//conditional statment: if statement to check if the input number is 1 or 2
		//if strictly equal to 2 return true
		//else if strictly equal to 1 return false
	//checks if the input number is evenly divisible by i with 0 as its remainder, if true return false,
	//else if input number is strictly equal to 2, return true
	
//Hint: You may not need to check numbers up to num to check for primeness.



function isPrime(num) {
	if (num === 1){
			return false;
  }
  for (var i = 2; i < num; i++){
		 if (num === 2){
			return true;
		} else if (num % i === 0) {
			return false;
		}
	}
  return true;
}

