var QuoteView = require('./views/quoteView');

var app = function(){
  var url = 'http://localhost:3000/quotes'
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  var quoteString = this.responseText;
  var quotes = JSON.parse(quoteString);
  var quoteView = new QuoteView(quotes);
}

window.onload = app;