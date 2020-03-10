"use strict";
let input = document.getElementById("input");
let ul = document.getElementsByTagName("ul")[0];
let submit = document.getElementById("submit");
let arr = ul.children;

/////function for add li to the list   and to the locale storage
function addLiContent() {

  if(input.value == ""){
    return null;
  }else{
    ul.insertAdjacentHTML('afterbegin', "<li>" + input.value + "<div class=''><i class='fas fa-trash poubelle'></i></div>" + "</li>" );
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      
      newArr.push(arr[i].innerHTML);
      window.localStorage.list = newArr;

    }
    console.log(arr);
    deleteLiContent();
  }
}

submit.onclick = addLiContent;


input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    submit.click();
  }
});


///////Function for reset the input value , checkeed and remove

function deleteLiContent(){

  input.value = "";
}

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