document.onreadystatechange = function(){
  startGame(10, 4)
}

var startGame = function(trackLength, numberOfPlayers){
  if (document.readyState == "complete"){
    setupLanes(trackLength, numberOfPlayers);
    document.addEventListener('keyup', handleKeyup, false)
  }
}


//---------------HELPER METHODS---------------------------------------------

//---------------SETUP---------------
var setupLanes = function(numberOfCellsInLane, numberOfPlayers){
  for (playerIndex=1; playerIndex<=numberOfPlayers;playerIndex++) {
    var playerRow = document.createElement("tr");
    playerRow.id = "player" + playerIndex;
    for (cellIndex=0; cellIndex<numberOfCellsInLane;cellIndex++){
      playerRow.appendChild(makeNewTD(cellIndex))
    }
    document.querySelector(".racer_table").appendChild(playerRow);
  }
}

//---------------EVENT HANDLING CODE---------------
var handleKeyup = function(keyUpEvent){
  var keyPressed = String.fromCharCode(keyUpEvent.keyCode)
  if (keyPressed == "Q"){
    updatePlayerPosition('player1')
  }else if(keyPressed == "P"){
    updatePlayerPosition('player2')
  }
}

var updatePlayerPosition = function(player){
  playerPosition = currentPosition(player);
  playerRow = allTdsForGivenPlayer(player);
  playerRow[playerPosition].className = '';
  if (playerPosition == (playerRow.length - 1)){
    declareWinner(player)
  }
  playerRow[playerPosition + 1].className = 'active';
}

var declareWinner = function(player){
  document.removeEventListener('keyup', handleKeyup, false)
  document.querySelector("h2").innerHTML = player + " is the winner!"
}

//---------------SETUP HELPER---------------

var makeNewTD = function(index){
  var newTableData = document.createElement("td")
    if (index == 0){
      newTableData.className = "active"
    }
  return newTableData
}

//---------------UPDATE HELPER---------------

var laneOf = function(player){
  return document.querySelector("#" + player)
}

var allTdsForGivenPlayer = function(player){
  return laneOf(player).querySelectorAll("td");
}

var activeSquare = function(player){
  return laneOf(player).querySelector("td.active");
}

var currentPosition = function(player){
  var tdsAsArray = Array.prototype.slice.call(allTdsForGivenPlayer(player))
  return tdsAsArray.indexOf(activeSquare(player));
}
