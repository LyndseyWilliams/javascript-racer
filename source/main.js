player1Position = 0
player2Position = 0
boardLength = 20

var setupLanes = function(number_of_cells_in_lane){
  for (index=0; index<number_of_cells_in_lane; index++){
   var player1 = document.getElementById("player1").appendChild(document.createElement('TD'));
   player1.className = 'inactive';
   var player2 = document.getElementById("player2").appendChild(document.createElement('TD'));
   player2.className = 'inactive';
  }
}

var movePlayerPosition = function(player, position){
  var playerRow = document.querySelector("#" + player).querySelectorAll("td")
  // determineWinner(playerRow)
  if (position > 0 && position < playerRow.length ){
    playerRow[position - 1 ].className = '';
  } else if (position > playerRow.length) {
    alert(player + " won");
  }

  if (position < playerRow.length)
  {
    playerRow[position].className = 'active';
  }
  // determineWinner(params)
// document.querySelector("#" + player).querySelectorAll("td")[position].className = 'active';
}

// var determineWinner = function(playerRow){
//   if playerRow > setupLanes - 1
//     alert('')
// }

var listenKeystroke = function(event) {
if (event.keyCode == 80)
  movePlayerPosition('player1', player1Position = player1Position + 1)
else if (event.keyCode == 81)
  movePlayerPosition('player2', player2Position = player2Position + 1)
}

document.onreadystatechange = function() {
    document.addEventListener("keyup", listenKeystroke, false);

  if (document.readyState == 'complete'){
    setupLanes(boardLength);
    movePlayerPosition('player1', player1Position);
    movePlayerPosition('player2', player2Position);
  }

}

// Start(boardLength)