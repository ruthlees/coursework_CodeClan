var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){
  for(var item of state){
    addItem(list, item);
  }
  //for each item in the state, invoke addItem
}

var addItem = function(list, item){
  var newItem = document.createElement('li');  //add an item to the list
  newItem.innerText = item;
  list.appendChild(newItem);

}

var handleClick = function(){
  var value = document.querySelector('#new-item');   //get the value of the input box
  var list = document.querySelector('#todo-list'); //get the "todo-list" element from the DOM
  addItem(list, input.value);  
  save(input.value);                     //invoke addItem
  input.value = "";                

  //invoke save
}

var save = function(item){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  state.push(item);
  var stringArray = JSON.stringify(state);          //NOTE You'll have to use JSON.stringify
  localStorage.setItem("todoList", stringArray);
}

window.onload = init;






//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
