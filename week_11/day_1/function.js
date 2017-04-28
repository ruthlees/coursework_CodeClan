
// // declaration 
// function hello(){
//   return "Hello everyone!";
// }

// //invotation and definitely needs those round brackets
// console.log(hello());

// function mood(name, mood, weather){
//   return name + ": you are " + mood + " and it is " + weather;
// }

// console.log(mood("John", "happy", "sunny"));

// function add(){
//  var i;
//  var total =  0;
//  for(i = 0; i < arguments.length; i++){
//   total += arguments[i];
//  }
//  return total;
// }

// console.log(add(1, 2, 3));


//annoymous function 
// adding a variable makes it a very powerful construct and it is the variable name that you use to
// invoke
// var hello = function(){
//   console.log("hello world");
// }

// hello();

// var mood = function(name, mood, weather){
//   return name + " you are: " + mood + " and it is " + weather;
// }

// console.log(mood("John", "happy", "snowing"));

var add = function (a, b) {
  return a + b;
}

var log = function(functionToInvoke){
console.log(functionToInvoke(2, 1));
}

log(add);

var name = function(first_name, surname){
  return "Howdy, I am " + first_name + " " + surname +"!"
}

console.log(name("Ruth", "Lees"))


var multiply = function(a, b){
  return a * b;
}
console.log(multiply(2, 3));

var birds = ["parrot", "penguin", "pigeon"];

var arrayFirst = function(birds){
  return birds[0]
}
console.log(birds[0]);

girls(["Anna", "Bethal", "Charlotte", "Diana", "Ena"]);

function lists(){
for(var name of girls)s