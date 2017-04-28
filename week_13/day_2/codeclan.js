use codeclan;

db.createCollection("students", { capped: true, size: 16});

db.students.insert(
[{
  name: "John",
  favouriteFood: "Quiche"
},
{ name: "Daniel",
  favouriteFood: "kaysadeeus"
},
{ name: "Chris",
 favouriteFood: " Jam"

}]
  );

db.students.isCapped();
db.students.find().pretty();

db.createCollection("Instructors");

db.Instructors.insert([
{ name: "Ally",
  favouriteFood: "katsu curry"
},
{ name: "John",
  favouriteFood: "Not Quiche"
},
{ name: "Alan",
 favouriteFood: "Bread and Butter Pudding"
}
])

db.Instructors.find().pretty();
// db.Instructors.createIndex({name: 1});
// db.Instructors.renameCollection("Teachers");
show collections;

db.dropDatabase();