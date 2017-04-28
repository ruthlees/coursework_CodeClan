// Example of sorting 'Callback Hell' and fixing it with a 'Promise'

 //example of Promise
const fs = require('fs');

const readFile = (fileName, callback) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if(err) return reject(err);

    resolve(result + data.toString());
    });
  });
}

readFile("1.txt", "")
.then((result) => readFile("2.txt", result))
.then((result) => readFile("3.txt", result))
.then((result) => readFile("4.text", result))
.then((result) => readFile("5.text", result))
.then((result) => console.log(result));
.catch((err) => console.log("Error", err.message))

 //this will be done with FETCH which will replace XMLHttpRequest

  // example of CALLBACK HELL
const fs = require('fs');

const readFile = (fileName, callback) => {
 fs.readFile(fileName, (err, data) => {
   if(err) return err;

   callback(data.toString());
 });
}

readFile("1.txt", (data) => {
  let result = data;
  readFile("2.txt", (data) => {
    result += data;
    readFile("3.txt", (data) => {
      result += data;
      readFile("4.txt", (data) => {
        result += data;
        console.log(result);
      })
    })
  })
});



// Example of default parameters
var showMood = function(name = "John", mood = "sleepy"){
  console.log(name, "is", mood);
}

showMood("Colin");


//Example of destructering

  //example of one
var arr = [1, 2, 3, 4];
var first = [0];
var second = [1];

var [first, ,third, fourth] = [1, 2, 3, 4];
var second 

console.log(first, second, third, fourth);

  example of two 
const myObj = {first: "John", last: "McC"};
const {first: f, last: l} = myObj;

console.log(f,l);

const person = {first: "John", last: "McC"};

var logPerson = ({first, last}) => { 
   console.log(first, last);
 };

 logPerson(person);

  //example of deconstrutoring in react 

  import React from 'react';
  var PersonComponent  = ({name, bio, age})=> {
    return (
      <h1>{name}</h1>
      <p>{bio}</p>
      <p>{name} is {age} years old.</p>
        );
  };



  import React from 'react';
  class Person extends {
    render(){
      var {name, bio, age} = this.props;
      return (
        <h1>{this.props.name}</h1>
        <p>{this.props.bio}</p>
        <p>{this.props.name} is {age} years old.</p>
        );
    }
  }

