
function doSomeMathsForMe(n, callback){
  console.log(callback(n));
  // return callback(n);
}

function increment(number){
  return number + 1;

}

function square(number){
  return  number * number;
}


function functionCaller(myCallback, x){
  return myCallback(x);
}

functionCaller(console.log, 5);
doSomeMathsForMe(3, square); 

// var newNumber = doSomeMathsForMe(3, square);
// console.log(newNumber);

