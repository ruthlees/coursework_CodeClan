var express = require('express');
var router = express.Router();

//define a couple more routes

router.use('/cats', require('./cats'));

router.use('/dogs', require('./dogs'));

router.get('/', function(req, res){
  res.json({data: "Welcome"});
});

router.get('/about', function(req, res){
  res.json({data: "All about use"});
});

module.exports = router;