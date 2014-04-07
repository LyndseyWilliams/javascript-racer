var setupLanes = function(number_of_cells_in_lane){
  for (index=0; index<number_of_cells_in_lane; index++){
   document.getElementById("player1_row").appendChild(document.createElement('TD'));
   document.getElementById("player2_row").appendChild(document.createElement('TD'));
  }
}
 var update_player_position = function(player, position){
  document.querySelector("#" + player).querySelectorAll("td")[position].className = 'active';
 }

current_position = 0

document.onreadystatechange = function() {
  if (document.readyState == 'complete'){
    setupLanes(20);
    update_player_position('player1_row', current_position);
    update_player_position('player2_row', current_position);
  }
}




// TODO
// event listener to hear a key stroke
// Move the player on each key stroke
//   * Find the td which is active
//   * Look up the method to move to the next element in the document






