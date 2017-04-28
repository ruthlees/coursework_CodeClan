
//setTimeout is an inbuilt JS function
//the function is an annoymous function since it hasn't been declared or named
//the order is important unless it is a named function

// function print(){ // is a named function
//   console.log("Inside the callback function");
// };

// var print = function(){ // is an annoymous function with a reference point called print
//   console.log("Inside the callback function");
// };

// setTimeout(print, 2000);

// var logRed = function(){
//   console.log("It's red!");
// }

// var logNotRed = function(){
//   console.log("It's NOT red!");
// }


// var redChecker = function(colour, logRed, logNotRed){
//   if(colour === "red"){
//   logRed();
// } else {
//   logNotRed();
//  }
// }

// redChecker("red", logRed, logNotRed);


function publish(item, author, callback){
  console.log(item);
  var date = new Date();

  callback(author, date);
};

function messages(author, date){
  var sendTime = date.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime);
};

function articleDetails(author, date){
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published on " + pubDate);
}
publish("My Article", "Ruth", articleDetails);


