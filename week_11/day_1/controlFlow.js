
// var myName = "Matthew";

// // if statement

// if(myName === "Matthew"){
//   console.log("yo my name is " + myName);
// }

// // else condition

// var counter = 1;
// if(counter > 0 ){
//   console.log("The counter is greater than 0");
// }else{
//   console.log("The counter is less than or equal to 0");
// }

// // if else condition

// var counter = 1;

// if(counter > 0 ){
//   console.log("The counter is greater than 0");
// }else if (counter < 0){
//   console.log("The counter is less than 0");
// } else {
//   console.log("The counter is 0")
// }

// // switch 

// var pet = "cat";

// switch(pet){
//   case "cat":
//   console.log("Soft kitty, warm kitty,  little ball of fur");
//   break;
//   case "dog":
//   console.log("Who let the dog out?")
//   break;
//   default:
//   console.log("No pet, sad");
// }

//  console.log(1 + 1 === 2 ? "yay maths" : "no, maths is broken")

// FOR LOOP EXAMPLE

var pets = ["dog", "cat", "pika"];

for(var i = 0; i < pets.length; i++){
  console.log(pets[i]);
}

// FOR OF LOOP EXAMPLE

for (var pet of pets){
  console.log(pet);
}

// FOR IN LOOP looping around an object such as a hash

var obj = { student1: 3, student2: 12, student3: 30};

for (var key in obj){
  console.log("obj." + key + " = " + obj[key]);
}

//WHILE LOOP

var x = 0;

while(x < 10){
  console.log("loop " + x);
  x = x + 1;
  // x++
}


