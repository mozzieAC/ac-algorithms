//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//Input: A number
//Output: A number
//Purpose: take the input number and mulitply it by all the positive integers less than it until reaching the number 1.



function factorializeIt(num) {
  //creata new variable: factorialized, that will store the output
  //create a loop, that will run from 1 until the value of the input number
  //Multiply the value of our new variaalbe by the current value of our counter, i,in the loop have the variable factorialized take the value of itself times the i, until i is greater than num
  // 
  // i = num while i > 1, take num and multiply it by num - i i--
  //return statement at the end of the function
  var factorialized = 1;
  for (i = 1; i <= num; i++) {
    factorialized = factorialized * i;
  }
  return factorialized;
}

factorializeIt(5);