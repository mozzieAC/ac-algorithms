//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


//Input: A string
//Output: Nested array
//Purpose: take each character, get its matching dna pair, and return the results in a nested array

//create a variable that will hold all the the base-pairs (encapsulating/parent array)
//create a variable that will hold the elements of the input string as an array (arrOfStrings).
//split the string into an array and assign it to the created variable (arrOfStrings)
//loop through the elements of the array 
   //for each element in the array
   //conditional statement that tests what dna letter it is and create a base pair array with its matching letter
    //push the base pair array in to the parent array
//return parent array
//
//

function pairElement(str) {
  var parentArr = [];
  var arrOfStrings = str.split("");
  for (var i = 0; i < arrOfStrings.length; i++){
    if (arrOfStrings[i].toUpperCase() === "G") {
      var basePair = ["G", "C"];
      parentArr.push(basePair);
    } 
    else if (arrOfStrings[i].toUpperCase() === "C") {
      var basePair = ["C", "G"];
      parentArr.push(basePair);
    }
    else if (arrOfStrings[i].toUpperCase() === "A") {
      var basePair = ["A", "T"];
      parentArr.push(basePair);
    }
    else  {
      var basePair = ["T", "A"];
      parentArr.push(basePair);
    }
  } 
  return parentArr;
  
}

pairElement("GCG");

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]