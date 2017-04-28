
// // a blend of ruby and java ES5

// var number = 5;

// // ES6
// let number = 5;
// const number = 5;

// function  hello(name, age) {
//   // creating another reference that is equal to myString
//   console.log("Hello, " + name + " " + age);
// }

// var myString = "Ruth";
// // myString is a reference 
// var myAge = 31;

// // be careful of the order within the bracket because JS won't throw an error.
// hello(myString, myAge);

// var a = 1;
// var b = 2;
// var c = 2.5;

// var d = Math.floor(a/b);

// console.log(Math.floor(a/b));

// // a + b;
// // c - b;
// // a * c;

// var myString = "a nice string we have created";
// var age = 1;

// console.log(typeof(age));
// age = "not a string";
// console.log(typeof(age));

// console.log(myString);
// console.log(myString.length);
// console.log(myString.toUpperCase());

// works from left to right to concatenate what is being asked
// console.log(3 + "hello");  // 3hello
// console.log("Route" + 6 + 6); // Route 66
// console.log(6 + 6 + "Route"); // 12 Route

// console.log(1 > 2);
// console.log(2 == 2);
// console.log(2 == "2");
// console.log(2 == "two");
// console.log(8 !== "8");

// if(true) console.log("true");
// if(false) console.log("true");
// if(0) console.log("true");
// if(2) console.log("true");


// if (parseInt("2")) console.log("true");
// // will return true because the Int is wanting to find a number

// if(parseInt("cat")) console.log("true");
// // will return nothing as cat is not a number

// console.log(typeof(parseInt("cat")));

// var guitars = ["Fender", "Gibson", "Gretsch"];
// console.log("Guitars", guitars);

//ARRAYS
// var drums = new Array();
// drums.push("Pearl");
// drums.push("Yamaha");
// console.log("Drums", drums);

// console.log(drums[0]);
// // would return as undefined as it has not been assigned a value of any sort
// console.log(drums[10]);

// console[1] = "Gretsch";
// console.log[10] = "Jam";
 
// console.log(drums.length);

// // add to the last of the array
// drums.push("Bear");
// console.log(drums);

// // remove the first in the array
// drums.shift();
// console.log(drums);

// var shallowCopy = drums.slice();
// console.log(shallowCopy);

// var numbers = [1, 2, 3, 3, 2, 3, 2, 4, 5];

// console.log(numbers.splice(2, 2));
// console.log(numbers);

// console.log(guitars.concat(numbers));

//HASH
// var myPerson = {
//   name: "Ruth", 
//   age: 31,
//   language: "Java"
// };

// console.log('myPerson', myPerson);
// var propertyLanguage = "language";

// console.log("myPerson", myPerson["age"]); // more of a ruby response
// console.log('myPerson', myPerson.age); // more of a java response
// console.log("myPerson", myPerson[propertyLanguage]);

// myPerson.pet = "Parrot";
// myPerson.age = 34;

// console.log("myPerson", myPerson);

var myPerson = {
  name: "Ruth", 
  age: 31,
  language: "Java",
  address: {street: "Trongate", postcode: "G2 7DH"}
};

console.log("myPerson", myPerson);



