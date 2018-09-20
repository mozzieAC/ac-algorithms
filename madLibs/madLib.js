$(document).ready(function(){

function makeMadLib(){
    var noun = $("#noun").val();
    var adjective = $("#adjective").val();
    var person = $("#person").val();
    var sentence = person + " really likes " + adjective + " " + noun + ".";
    $("#story").append("<p>" + sentence + "</p>");
    var object = {};
    object.noun = noun;
    object.adjective = adjective;
    object.person = person;
    return object;
}

$("#lib-button").on("click", function(){
    var userObject = makeMadLib();
    console.log(userObject);
})

})


// <!-- 
// 1) Add a script tag to the bottom of the page for your code.
// 2) Add an event listener to the button so that it calls a makeMadLib function when clicked.
// 3)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Laura really likes pink cucumbers.") -->

// <!-- Bonus: Make an object with the list elements as keys and the inputs as values.  -->


// <!-- Input: elements from a form, strings supplied by user: noun, adjective, person--> 
// <!-- Output: the sentence, a string displayed to the user-->
// <!-- Add script tag to link jquery -->
// <!-- Event listener / On click (lib it) -->
// <!-- create object from input -->
// <!-- make sentece by concatenating inputs -->
// <!-- return sentence -->
// <!-- store value of the fucntion -->
// <!-- test by console logging that value-->




//Input: elements from the form, strings the user supplies
//Output: the sentence, a string displayed to the user
//Create function called makeMadLib
        //Get the values from the form
        //Append those values concatenated in a sentence to the DOM
//Create an event listener that listens for a click of the button with an id of lib-button
        //When clicked, the event function should call the makeMadLib function

//NON OBJECT VERSION:
// function makeMadLib(){
// 	var noun = $("#noun").val();
// 	var adjective = $("#adjective").val();
// 	var pwerson = $("#person").val();
// 	var sentence = person + " really likes " + adjective + " " + noun + ".";
// 	$("#story").append("<p>" + sentence + "</p>");
// }
// $("#lib-button").on("click", function(){
//     makeMadLib();
    
