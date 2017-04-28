// var myPerson = {
//   name: "Winter Soldier",
//   age: 93,
//   weapon: "metal arm",
//   eat: function(){
//     console.log("Yum yum");
//   }, 
//   talk: function(){
//     console.log("Hi my name is " + this.name);
//   },
// }


// myPerson.talk();


// var myDog = Object.create(null);

// myDog.smell = "terrible";
// myDog.talk  = function(){
//   console.log("Bark bark, I am a dog and I smell " + this.smell);
// }

// console.log("myDog", myDog);
// myDog.talk();

// var guineaPig = Object.create(null);
// // acts like an inheritance 
// var killerGuineaPig = Object.create(guineaPig);


var bear = {
  name: "Mr Buttons",
  type: "Black Canadian Bear",
  belly: function() {
    console.log("Belly needs food grrrrrr!");
  },
  eat: function(){
    console.log("Salmon are my thing because I am " + this.type);
  },
  food: "salmon",
}

bear.eat();


var bear = {
  name: "Mr Buttons",
  type: "Black Canadian Bear",
  belly: [],
  eat: function(salmon){
    this.belly.push.(salmon);
  },
}