let input = document.getElementById("input");
let button = document.getElementById("btn");
function change(){
if(button.getAttribute("data-text")=="show"){
    button.innerHTML = "hide";
    button.setAttribute("data-text" , "hide");
    input.setAttribute("type" , "text")
}
  else{
    button.innerHTML = "show";
    button.setAttribute("data-text" , "show");
    input.setAttribute("type" , "password")
  }  
}
button.addEventListener('click' , change)