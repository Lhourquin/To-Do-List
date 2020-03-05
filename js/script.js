"use strict";
let input = document.getElementById("input");
let ul = document.getElementsByTagName("ul")[0];
let submit = document.getElementById("submit");

function addLiContent() {

  if(input.value == ""){
    return null;
  }else{
    ul.insertAdjacentHTML('afterbegin', "<li >" + input.value + "<div class='poubelle'><i class='fas fa-trash '></i></div>" + "</li>" );
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




////

