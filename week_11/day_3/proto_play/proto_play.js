// var wisePerson = {
//   wisdom: function(){
//     console.log("Commit often");
//   }
// }

// // wisePerson.wisdom();


// // var myPerson = Object.create(null);
// // var myPerson = {}; this is kinda equal to the above statement

// var myPerson = Object.create(wisePerson);
// myPerson.walk = function(){
//   console.log("Left, right, left, right")
// }

// myPerson.walk();
// myPerson.wisdom();


var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;

}

Fish.prototype = {
  swim: function(){
    console.log( this.name + " goes splish splash");
  },
  eat: function(plankton){
    this.belly.push(plankton);
  },
  belly: []
};

var myFish = new Fish("nemo", "orange");
myFish.swim(); 
myFish.eat(" yum yum plankton");
console.log(myFish.belly);

var myFish2 = new Fish("swimmy", "dolphin-coloured");
console.log(myFish2.swim());

// console.log(myFish.__proto__);
