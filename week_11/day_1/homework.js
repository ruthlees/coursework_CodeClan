// Section 1

// What types are these?

/* 1.1 */ 1; //Number
/* 1.2 */ "cat"; //String
/* 1.3 */ true; //boolean
/* 1.4 */ []; //array
/* 1.5 */ {}; //object(but acts all hashy)
/* 1.6 */ 1.1; //Number
/* 1.7 */ var myVariable; //variable declaration


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; //true
/* 2.2 */ "cat"; //true
/* 2.3 */ true; //true
/* 2.4 */ NaN; //false
/* 2.5 */ []; //true
/* 2.6 */ {}; //true
/* 2.7 */ undefined; //false
/* 2.8 */ ""; //false
/* 2.9 */ 0; //false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
       var number = 32;
// 3.2 Assign a variable that is a string
       var string = "soft kitty, warm kitty, little ball of fur";
// 3.3 Assign a variable that is a boolean
       var bakingQueen = true;
// 3.4 Assign a variable that is an object
       var birds = ["parrot", "penguin", "pigeon"];



// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
     
     var greeting = false;

     switch(greeting){
       case true:
       console.log("Hello!");
       break;
       case false:
       console.log("Bye!")
     }


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
        var pet = animals[0];
           console.log(pet);
// 5.2. Assign the last element to a variable
        var rodent = animals[3]
           console.log(rodent);
// 5.3. Assign the length of an array to a variable
        var size = animals.length
          console.log(size);
// 5.4. Add an item to the end of the array
        animals.push("mole");
          console.log(animals);
// 5.5. Add an item to the start of the array
         animals.unshift("ferret");
            console.log(animals);
// 5.6. Assign the index of hedgehog to a variable
        var spikey = animals[2];
            console.log(spikey);

// Section 6

// 6.1 Create an array of 5 vegetables
        var vegetables = new Array();
        vegetables.push("tomato");
        vegetables.push("onion");
        vegetables.push("sweetcorn");
        vegetables.push("peas");
        vegetables.push("potato");
// 6.2 Loop over the array and write to the console using a "while"
        var vegetables = ["tomato", "onion", "sweetcorn", "peas", "potato"];
         var i = 0;

        while(vegetables[i]){
          console.log(vegetables);
          vegetables++;
        }

// 6.3 Loop again using a "for" with a counter
          var vegetables = ["tomato", "onion", "sweetcorn", "peas", "potato"];
           
           var count = 0;

           for(i= 0; i < vegetables.length; i++){
            vegetables[i] = count++;
            console.log(vegetables[count]);
           }
            

// 6.4 Loop again using a "for of"
          var vegetables = ["tomato", "onion", "sweetcorn", "peas", "potato"];

          for (var veg of vegetables){
          console.log(veg);
          }

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
 var sum = accounts.reduce(add(amount, 0);

 function add(a, b){
  return a + b;
 }

 console.log(sum);


// 7.2 Find the amount of money in the account with the largest balance
// 7.3 Find the name of the account with the smallest balance
// 7.4 Calculate the average bank account value
// 7.5 Find the value of marcs bank account
// 7.6 Find the holder of the largest bank account
// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method