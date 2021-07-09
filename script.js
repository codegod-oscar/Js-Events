window.onload = function click(){
 x = document.getElementById('animate').addEventListener("animationend",changeColor);
 x.style.backgroundColor = 'black';
}

function changeColor(){
  alert('Animation End');
}
