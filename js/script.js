"use strict";
let input = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];
let submit = document.getElementById("submit");

function addLiContent() {
  if(input.value == ""){
    return null;
  }else{
    ul.insertAdjacentHTML('beforeend', "<li>" + input.value + "<i class='fas fa-trash-alt icon'></i>" + "</li>" );
    deleteLiContent();
  }
}

function deleteLiContent(){

  input.value = "";
}

submit.onclick = addLiContent;

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    submit.click();
  }
});

ul.onclick = function (event){
   event.target.classList.toggle("checked");
}; 
