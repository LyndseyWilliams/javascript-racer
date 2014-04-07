$(document).ready(function(){


var movePlayer = function(player){
    player.classList.remove('active');
    player.nextElementSibling.classList.add('active');
  }

document.onkeyup = function(event){
  var keyPress = String.fromCharCode(event.keyCode);
  if (keyPress == "Q") {
  var player1 = document.querySelector('#player1_strip > td.active')
  movePlayer(player1)


  }else if (keyPress == "P"){
  var player2 = document.querySelector('#player2_strip > td.active')
  movePlayer(player2)
  }



}



})
