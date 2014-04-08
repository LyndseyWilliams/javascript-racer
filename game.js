
window.onload = function(){

var movePlayer1 = function(player1){
  player1.classList.remove('active');
  if (player1.nextElementSibling != null)
   player1.nextElementSibling.classList.add('active');
  else
  alert("player1 wins!!!!!");
  }

  var movePlayer2 = function(player2){
  player2.classList.remove('active');
  if (player2.nextElementSibling != null)
   player2.nextElementSibling.classList.add('active');
  else
  alert("player2 wins!!!!!");
  }

document.getElementById('player1_strip').onclick = function(event){
  var player1 = document.querySelector('#player1_strip > td.active')
  movePlayer1(player1)
}

document.getElementById('player2_strip').onclick = function(event){
  var player2 = document.querySelector('#player2_strip > td.active')
  movePlayer2(player2)
 }
}



