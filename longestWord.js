//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.


//Input: A string (string of mulitple words)
//Output: A number (the number of characters in the longest word in the string)
//Purpose: Be able to count the numbe rof letters in a word in a multi-word string, and to find and return the number of characters of the longest word in the input sentence


//Create a variable to store the longest string
//Variable to store our array
//.split() to turn our stirng into an array
//Create for loop through an array of words

//Conditional statement to test to see if the new word
  // compare the legnth of first string, to the legnth of the second string
  // if length of the second string is longer, make that the longest
// Increment the counter for the next item in the array to compare

//Return the variable storing the number of characters longest word

function findLongestWord(str) {
//Split the input string into an array of substrings/words
  var wordArray = str.split(" ");
  var longestWord = wordArray[0].length;
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord) {
      longestWord = wordArray[i].length;
    }
  }
  return longestWord;
}
  
  var result = findLongestWord("What if we try a super-long word such as otorhinolaryngology");
  console.log(result);
  