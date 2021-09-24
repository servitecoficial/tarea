let counter = 0;
let message = "sigue sigue sigue!!!!!"
function countingClicks() {
  document.getElementById("conteo").innerHTML = ++counter;
  if(counter > 10){
    document.getElementById("eso").innerHTML = message;
  }
  
}