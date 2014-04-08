document.onreadystatechange = function(){
  if (document.readyState == "complete"){
    setupLanes(10, 4);
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
  console.log(keyPressed)
  if (keyPressed == "Q"){
    updatePlayerPosition('player1')
  }else if(keyPressed == "P"){
    updatePlayerPosition('player2')
  }
}

var updatePlayerPosition = function(player){
  playerPosition = currentPosition(player)
  playerRow = allTdsForGivenPlayer(player)
  playerRow[playerPosition].className = '';
  playerRow[playerPosition + 1].className = 'active';
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

var lane_of = function(player){
  return document.querySelector("#" + player)
}

var activeSquare = function(player){
  return lane_of(player).querySelector("td.active");
}

var allTdsForGivenPlayer = function(player){
  return lane_of(player).querySelectorAll("td");
}

var currentPosition = function(player){
  var tdsAsArray = Array.prototype.slice.call(allTdsForGivenPlayer(player))
  return tdsAsArray.indexOf(activeSquare(player));
}
