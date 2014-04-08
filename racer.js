$(document).ready(function(){

document.addEventListener('keyup', racer, false)


})



var racer = function(event){
  var keyPress = String.fromCharCode(event.keyCode);
  if (keyPress == "Q") {
  var player1 = document.querySelector('#player1 > td.active')
  movePlayer(player1)


  }else if (keyPress == "P"){
  var player2 = document.querySelector('#player2 > td.active')
  movePlayer(player2)
  }
  
}
var movePlayer = function(player){
    player.classList.remove('active');
    var nextCell = player.nextElementSibling;
    nextCell.classList.add('active')
    checkWinner(nextCell)
  }


  var checkWinner = function(nextCell){
    if (nextCell.classList.contains("finish")) {
      var display = (nextCell.parentElement.id + " WINNNER")
      document.getElementById('showWinner').innerHTML = display
      document.removeEventListener('keyup', racer)
    };
  }