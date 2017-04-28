
var QuoteQuery = function(){

};

QuoteQuery.prototype = {
  all: function(db, callback){
      db.collection('quotes').find().toArray(function(err, results){
        if (err) return console.log(err);
        callback(results)
      });
  },
  
}

module.exports = QuoteQuery;
