var name = 'Ally'; // Global Scope A is outside a function


var myFunction = function(){
  //Scope B: Local scope in here 
 var name = 'John';
  var otherFunction = function(){
    //Scope C: 
    console.log(name);
  };
  otherFunction();
}

var myFunction = function(){
  console.log(this);
};

myFunction();
// calling the global scope with this instead the function as you are calling the myFunction(); from outside the function

var myObject = {name: 'Ruth', age: 31}

myObject.myMethod = function(){
  console.log(this);
};
// because the function is calling on my Object then the scope becomes a local scope because it is directly accessing myObject
myObject.myMethod();



var nav = document.querySelector('.nav');
ver toggleNav = function(){
  console.log(this);
}

nav.addEventListener('click', toggleNav, false);
