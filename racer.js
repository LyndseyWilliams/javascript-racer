$(document).ready(function(){

var lengthOfTrack = 40
var numPlayers = 2

document.addEventListener('keyup', racer, false)
generate(numPlayers,lengthOfTrack)

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

  var generate = function(numPlayers, lengthOfTrack){
    p = 0
    for(i = 0; i < numPlayers; i++){
      playerTrack = document.createElement('tr')
      player = "player" + (p+1)
      playerTrack.setAttribute('id', player)
      raceTrack = document.querySelector('.racer_table')
      raceTrack.appendChild(playerTrack)
      var c = 0
      for(j=0; j < lengthOfTrack; c++){
        var col = document.createElement('td')
        document.querySelector('#' + player).appendChild(col);
        if (j === 0) {
          col.setAttribute('class', 'active')
        };
        j++
      }
      p++
    }
  }










