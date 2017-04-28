// console.log("Hello World!");

var wizard = {
  name: "Harry",
  defend: function(){
    return "Expecto Patronum!";
}
};

// window.alert("Hello World!")
document.onload = function() {alert("hello world!")};
console.log(wizard.name + " shouts " + wizard.defend());
