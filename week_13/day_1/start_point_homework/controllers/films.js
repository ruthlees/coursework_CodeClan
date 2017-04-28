//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = express.Router();

filmRouter.get('/', function(req, res){
  res.json({data: films});
});

filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]});
});

//update
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
}); 

//delete
filmRouter.delete('/:id', function(req, res){
  films.splice(films[req.params.id], 1);
  res.json({data: films});
});

//create
filmRouter.post('/', function(req, res){
  newReview = new review(
  {
    comment: req.body.comment,
    rating: req.body.rating,
    author: req.author.author
  })
  newFilm = new film({
    title: req.body.name,
    actors: req.body.actors,
    genre: req.body.genre,
  })
  newFilm.addReview(newReview);
  films.push(newFilm);
  res.json({data: films});
});

module.exports = filmRouter;