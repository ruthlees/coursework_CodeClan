
// Literal notation.

var myObject = {};

myObject.shape = " circle";
myObject.radius = 10;

console.log(myObject);


// 

var myOtherObject = new Object();

myOtherObject.size = 6;
myOtherObject.color = "red"; 

console.log(myOtherObject);


// 

var house1 = {
  sqFeet: 8000,
  bathrooms: 4,
  bedrooms: 6
}

var house2 = {
  sqFeet: 800,
  bathrooms: 1,
  bedrooms: 3
}

var house3 = {
  sqFeet: 1000,
  bathrooms: 2,
  bedrooms: 26
}

// example of a constructor

var House = function(sqFeet, bathrooms, bedrooms){
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.clean = function(){
    console.log("Your house was a digrace, but I've cleaned it");
  }
};


var house1 = new House(1000, 3, 4);
var house2 = new House(2000, 4, 5);
var house3 = new House(3000, 1, 7);


console.log(house1.sqFeet);
console.log(house2.bathrooms);
console.log(house3.bedrooms);
house1.clean();


//another example of a constructor

var Office = function(desks, meetingRooms){
  this.desks = desks;
  this.meetingRooms = meetingRooms;
  this.averageDesksPerMeetingRoom = function(){
    return this.desks/ this.meetingRooms;
  }
};

var office1 = new Office(100, 10);
var office2 = new Office(2, 2);

console.log(office1);
console.log(office1.averageDesksPerMeetingRoom());

//
