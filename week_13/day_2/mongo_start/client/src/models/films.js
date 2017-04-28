var Film = require('./film');
var Review = require('./review');

var Films = function() {

}

Films.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  // this all function is for getting info back from the browser
  all: function(callback){
    this.makeRequest('http://localhost:3000/api/films', function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var films = Films.prototype.populateFilms(results);
      // console.log(films);
      callback(films);
    })
  },
  populateFilms: function(results){
    var films = [];
     for(var result of results){
      var film = new Film(result);
      films.push(film);
     }
     return films;
  },
  add: function(newFilm, callback){
    var filmToAdd = JSON.stringify(newFilm);
    console.log("NEW film", filmToAdd);
    this.makePostRequest("http://localhost:3000/api/films", callback, filmToAdd);
  },

  makePostRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send(payload);
  },
  

}




module.exports = Films;


// var review1 = new Review({
//   comment: "It's not even a thing. What just happened. I want my life back.",
//   rating: 1,
//   author: "Val"
// });

// var review2 = new Review({
//   comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
//   rating: 100,
//   author: "Val"
// });

// var film1 = new Film({
//   title: "Now You See Me",
//   actors: ["Woody Harrelson", "Jesse Eisenberg"],
//   genre: "Mystery"
// });

// var film2 = new Film({
//   title: "Star Wars Episode IV: A New Hope",
//   actors: ["Harrison Ford", "Alec Guiness"],
//   genre: "Action"
// });

// film1.addReview(review1);
// film2.addReview(review2);

// return [film1, film2];