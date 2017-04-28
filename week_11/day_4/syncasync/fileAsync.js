// fs = file system
// Async is a none blocking program

// can't guarantee the running order of the program

var fs = require("fs");

fs.readFile("./us-states.txt", "utf-8", function(err, data){
  if(err){
    console.log("Uh-oh!" + err);
  } else {
     var bufferString = data.toString();

     var lineCount = bufferString.split("\n").length;
     console.log("There are " + lineCount + " lines it the file");
     console.log("You've finished reading your file");
  }
});

console.log("The next line in the program");
