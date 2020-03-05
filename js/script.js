"use strict";
let input = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];
let submit = document.getElementById("submit");

function addLiContent() {
  if(input.value == ""){
    return null;
  }else{
    ul.insertAdjacentHTML('beforeend', "<li >" + input.value + "<div onclick=\"this.parentElement.style.display = ' none';\" class='poubelle'><i class='fas fa-trash '></i></div>" + "</li>" );
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
let poubelle = document.getElementsByClassName('poubelle');

/*for(let idx of li){
  idx.addEventListener('click',(e) => {
      let target = e.target;
      
      if(target == idx){
        console.log(idx);
          idx.remove();
      }
  })}*/