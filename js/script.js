"use strict";
let input = document.getElementById("input");
let ul = document.getElementsByTagName("ul")[0];
let submit = document.getElementById("submit");

function addLiContent() {

  if(input.value == ""){
    return null;
  }else{
    ul.insertAdjacentHTML('afterbegin', "<li >" + input.value + "<div><i class='fas fa-trash poubelle'></i></div>" + "</li>" );
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
  let target = event.target;

  for(let li of  document.getElementsByTagName('li')){
    if(target == li){
      li.classList.toggle("checked");
  
    }
  }

  for(let trash of document.getElementsByClassName('poubelle')){
    if(target == trash){
      trash.parentElement.parentElement.remove();
    }
  }
  
}; 