// var array = [1, 2, 3, 4, 5];

// // for (var item of array){
// //   console.log(item);
// // }

// // forEach function - think of Ruby's ||

// array.forEach(function(number){
//   console.log(number);
// })

// var ourForEach = function(array, callback){
//   for ( var item of array){
//     callback(item);
//   }
// };

// ourForEach(array, function(item){
//   console.log("The item is: ", item);
// })

var Bank = function(){
  this.accounts = [100, 200, 300, 400];
  this.total = 0;
}


Bank.prototype = {
  setTotal: function(){
    this.total = 0;
    this.accounts.forEach(function(account){
      this.total += account;
    }.bind(this));
  }
}

var bank = new Bank ();
console.log("Bank's total: " + bank.total);
bank.setTotal();
console.log("Total after: " +  bank.total);