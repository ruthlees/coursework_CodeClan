//starting up the server.js file
var express = require('express');
var app = express();
var path = require('path');

var data = {name: "Saturn", size: 90876};

// calling on 'get' finding a home root of a brower and a function for request and response (evoke that callback)
// app.get('/', function(req, res){
//   res.json({data: 'Wassupp!'});
// });

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(req, res){
  res.json(data);
  // res.json({name: "Saturn", size: 90876});
});

app.use(express.static('public'));

// listen out for any activity from any port
app.listen(3000, function(){
  console.log('App running on port' + this.address().port);
});
