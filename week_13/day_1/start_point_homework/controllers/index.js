var express = require('express');
var router = express.Router();

router.use('/api/films', require('./films'));

router.get('/', function(req, res){
  res.json({date: 'Welcome'});
});


module.exports = router;