//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 



//Input: radius, a number
//Output: value of the caluculations (number) OR the sentence (a string)


//Add radius a the parameter of our function
function circleCalculation (r) {
	//calculcate the area of the circle, store the value in a variable
	var circleArea = Math.round(Math.PI * Math.pow(r, 2));
	//calucluate the perimeter, store the value in a variable
	var circlePerimeter = Math.round(Math.PI * 2 * r);
	// create a sentence that concatenates the values in the sentance
	var sentence = ("The area of the circle is " + circleArea + " and the perimeter of the circle is " + circlePerimeter + ".");
	//return the value of those caluclations OR return a sentence
	return sentence;
}

var circleSentence = circleCalculation(10);
console.log(circleSentence);