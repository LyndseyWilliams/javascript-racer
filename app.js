var setupLanes = function(number_of_cells_in_lane){
  for (index=0; index<number_of_cells_in_lane;index++){
    document.getElementById("player1").appendChild(document.createElement("TD"));
    document.getElementById("player2").appendChild(document.createElement("TD"));
  }
}

var update_player_position = function(player, position){
  document.querySelector("#" + player).querySelectorAll("td")[position].class = 'active';
}

document.onreadystatechange = function(){
  if (document.readyState == "complete"){
    setupLanes(20);
    update_player_position('player1', 10)
  }
}