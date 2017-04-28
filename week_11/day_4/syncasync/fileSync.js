var fs = require("fs");


// readFileSync is a block
var buffer = fs.readFileSync("./us-states.txt");
var bufferString = buffer.toString();

var lineCount = bufferString.split("\n").length;

console.log("There are " + lineCount + " lines in the file.");
console.log("You have finished the file.")

// console.log(bufferString);