var setupLanes = function(number_of_cells_in_lane){
  for (index=0; index<number_of_cells_in_lane; index++){
   document.getElementById("player1").appendChild(document.createElement('TD'));
   document.getElementById("player2").appendChild(document.createElement('TD'));
  }
}

 var movePlayerPosition = function(player, position){
    var playerRow = document.querySelector("#" + player).querySelectorAll("td")
    if (position > 0){
      playerRow[position - 1].className = ''
    }
    playerRow[position].className = 'active'
    // determineWinner(params)
  // document.querySelector("#" + player).querySelectorAll("td")[position].className = 'active';
 }

 // var determineWinner = function(params){

 // }

 var listenKeystroke = function(event) {
  if (event.keyCode == 80)
    movePlayerPosition('player1', player1Position = player1Position + 1)
  else if (event.keyCode == 81)
    movePlayerPosition('player2', player2Position = player2Position + 1)
 }

player1Position = 0
player2Position = 0

document.onreadystatechange = function() {
    document.addEventListener("keyup", listenKeystroke, false);

  if (document.readyState == 'complete'){
    setupLanes(20);
    movePlayerPosition('player1', player1Position);
    movePlayerPosition('player2', player2Position);
  }

}
