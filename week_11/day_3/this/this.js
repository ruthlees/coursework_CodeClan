// var make = "Honda";

// var car = {
//   make: "Nissan",
 
// };


// var getMake = function(){
//   console.log(this.make);
// };

// car.getMake = getMake;

// car.getMake();
// console.log(car.make);

// getMake();
// // this. within a function is a reference to the car object 


// content = "I'm a global scope!";

// function simpleCall(){
//   console.log(this.content);
// }

// simpleCall();

// var message = {
//   content: "I'm a JavaScript ninja!",
//   showContent: function(){
//     console.log(this.content);
//   }
// }

// message.showContent();


// //CONSTRUCTORS

// function Message(content){
//   this.content = content;
//   this.showContent = function(){
//     console.log(this.content);
//   }
// }

// var Message = function(content){
//     this.content = content;
//     this.showContent = function(){
//       console.log(this.content);
//     }
// }

// var message = new Message("This is driving me nets");

// message.showContent();

// var message is a new instance of the class
// var Message is like a blueprint so the this. is refering to the new instance

// BIND this. to something

var Animal = function(type, legs){
  this. type = type;
  this.legs = legs;
  this.loginfo = function(){
    console.log(this);
    console.log("The " + this.type + " has " + this.legs + " legs." )
  }
};

var myCat = new Animal("cat", 4);
setTimeout(myCat.loginfo.bind(myCat), 3000);


var myDog = new Animal("Dog", 4);
setTimeout(myCat.loginfo.bind(myDog), 4000);
