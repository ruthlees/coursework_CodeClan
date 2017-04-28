// var talk = function(){
//   //function scopr or local scope
//   var name = "john";
//   console.log("My name is " + name);
// }

// talk();

// var name = " John";

// var talk = function(){
//   var name = "Ally";
//   console.log("My name is" + name);
// }

// talk();
// console.log("The variable name has the value of: " + name);

var name = 'John'; // name is a global scope which can be access from outside the function

var printName = function() {
  console.log('My name is ' + name );
};

printName(); // My name is John


// while there is a global scope available to the function there is a var score within the function that would be access first 
score = 5; 

var result = function() {
  var score = 3;
  return score;
};

console.log(result()); // result will be 3


//again the function will access the array within itself even if it is a global scope because the function has been inovatated first
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//while suspect1, 2 and 4 will be called to the function due to their global scope, suspect3 will come from the function itself when the function is called allSuspects();
// when the console.log is called then the global scope of suspect3 is used as there is no function being called here

var suspectOne = 'John';
var suspectTwo = 'Ally';
var suspectThree = 'Alan';
var suspectFour = 'Steve';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );


// printName calls the detective.name which will be Ace Ventura as it is a global scope variable
// printName(detective) is within a function and therefore will be calling on its own array
// the console.log will be Poirot as it is calling the function

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  // detective[name] overrides the global variable Ace Venutra
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//the console.log will call out the murderer as Steve since it is a global scope and the function has not been called within the console. outerFunction = Alan, innerFunction = Ally

var murderer = 'Steve';

var outerFunction = function() {
  var murderer = 'Alan';
     var innerFunction = function() {
    murderer = 'Ally';
  }
  innerFunction();
}
outerFunction();

console.log('the murderer is ', murderer);




var wizard = "Harry";

var edgeFunction = function(){
  var wizard = "Voldemort";
     var outerFunction = function(){
       var wizard = "Ron";
         var innerFunction = function(){
           wizard = "Hermione";
         }
         innerFunction();
     }
     outerFunction();
}
edgeFunction();

console.log(wizard());