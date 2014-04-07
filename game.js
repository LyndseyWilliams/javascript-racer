
window.onload = function(){

var movePlayer = function(player){
    player.classList.remove('active');
    player.nextElementSibling.classList.add('active');
  }

document.getElementById('player1_strip').onclick = function(event){
  var player1 = document.querySelector('#player1_strip > td.active')
  movePlayer(player1)
}

document.getElementById('player2_strip').onclick = function(event){
  var player2 = document.querySelector('#player2_strip > td.active')
  movePlayer(player2)
  
 }
}

