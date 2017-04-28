var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var saved = localStorage.getItem("Selection");
  setSpanText(saved);

  var savedFoods = localStorage.getItem("favFoods") || [];
  favFoods = JSON.parse(savedFoods);
  setFaveFoods(favFoods);

  // favFoods.forEach(function(item){
  //   console.log(item);
  // })
}


var favFoods = [];

var setSpanText = function(text){
  var span = document.querySelector('#fav-food');
  span.innerText = text;
}

var setFaveFoods = function(favFoods){
  var foodsSpan = document.querySelector('#allMyFavouriteFoods span');
  foodsSpan.innerText = favFoods.join(", ");
}

var handleButtonClick = function(){
  var input = document.querySelector('input');
  setSpanText(input.value);
  localStorage.setItem("Selection", input.value);

  favFoods.push(input.value);
  var data = JSON.stringify(favFoods);
  localStorage.setItem("favFoods", data);
  input.value = "";
};


window.onload = app;
