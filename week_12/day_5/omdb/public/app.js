var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var getUrl = function(searchTerm){
  return "http://www.omdbapi.com/?t=" + searchTerm;
};

var requestComplete = function(){
  var responseString = this.responseText;
  var movie = JSON.parse(responseString);

  showUI(movie);
};

var showUI = function(movie){
  var myMovieInfo = {
    title: movie.Title,
    director: movie.Director,
    actors: movie.Actors,
    poster: movie.Poster
  };
  var myMovie = new Movie(myMovieInfo);
  
  var movieDiv = document.getElementById("movie");
  movieDiv.innerHTML = "";

  movieDiv.appendChild(myMovie.getHtml());

  movieDiv.classList.add("hasContent");
};

var app = function(){
  var searchLink = document.getElementById("search");
  
  searchLink.onclick = function(){
    var textInput = document.querySelector('input[type="text"]');
    var searchTerm = textInput.value;
    var url = getUrl(searchTerm);
    makeRequest(url, requestComplete);
  };
};

window.onload = app;w






// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = callback;
//   request.send();
// };

// var getURL = function(searchTerm){
//   return "http://www.omdbapi.com/?t=" + searchTerm;
// };

// var requestComplete = function(){
//   var responseString = this.responseText;
//    var movie = JSON.parse(responseString);

//     showUI(movie);
// };

// // if you want to put the movie append child in another file then remember to look at John's working example from GitHub
// var showUI = function(movie){
//   var h2 = document.createElement('h2');
//   h2.innerText = movie.Title;

//   var ul = document.createElement('ul');

//   var actorsLi = document.createElement('li');
//   actorsLi.innerText = movie.Actors;

//   var directorLi = document.createElement('li');
//   directorLi.innerText = movie.Director;

//   ul.appendChild(actorsLi);
//   ul.appendChild(directorLi);

//   var img = document.createElement('img');
//   img.src = movie.Poster;

//   var movieDiv = document.getElementById("movie");
//   movieDiv.innerHTML = "";
//   movieDiv.appendChild(h2);
//   movieDiv.appendChild(ul);
//   movieDiv.appendChild(img);

//   movieDiv.classList.add("hasContent")
// };


// var app = function(){ // firing when the page loads

//   var searchLink = document.getElementById("search");
  
//   searchLink.onclick = function(){
//     var textInput = document.querySelector('input[type="text]');
//     var searchTerm = textInput.value;
//     // debugger;
//     var url = getUrl(searchTerm);
//     makeRequest(url, requestComplete);
//   };
// };

// window.onload = app;