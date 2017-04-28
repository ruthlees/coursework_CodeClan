use farm;

db.animals.insert(
{
  name: "Erik",
  type: "Polar Bear"
});

db.animals.insert({
  name: "Freddy",
  type: "Frog"
});

// db.animals.find({name: "Freddy"}).pretty();

// db.animals.update(
//    { name: "Freddy"},
//    { 
//     $set: {type: "Flamingo"}
//    }
//   );

// // db.animals.save(
// // { name: "Freddy"},
// // {
// //   name: "Polly",
// //   type: "Penguin"
// // });

// db.animals.find({name: "Freddy"}).pretty();
db.animals.remove({name: "Freddy"});
db.animals.find();
db.dropDatabase();