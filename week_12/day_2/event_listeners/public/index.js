var app = function(){

  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var input = document.querySelector('input');
  input.onkeyup = handleKeyPress;

  var select = document.querySelector('select');
  select.onchange = handleSelectChanged;
  
}

var handleSelectChanged = function(){
  var pTag = document.querySelector('#select-result');
  // you can assign an individual answer to a name :-
  // var result = "";
  // if (this.value === "Caesar") result = "Et tu, brute?";
  // you can use a hash instead of the above
  pTag.innerText = this.value + ", excellent!!!";
}

var buttonCounter = 0;

var handleButtonClick = function(event){
  var pTag = document.querySelector('#button-result');
  buttonCounter += 1;
  pTag.innerText = "Woah dude, totally been clicked " + buttonCounter + ", man."
  console.log(event);
}

var handleKeyPress = function(){
  var pTag = document.querySelector('#text-result');
  // var input = document.querySelector('input');
  pTag.innerText = this.value; //put this. instead of repeating line 6 and delete 21
}

window.onload = app;
