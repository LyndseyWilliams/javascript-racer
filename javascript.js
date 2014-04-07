

var update_player_position = function(player,position) {

//Set up player class using input player variable
  var player_class = "#" + player + "_strip"

  //STEP 1 Select Play Row
  var player_row = document.querySelector(player_class);

  //Select player by Active TD class
  var player = player_row.querySelector(".active");

  // Remove Active Class for active player turns blank
  player.removeAttribute('class');

  //Activate player that is received as input
  var new_position = player_row.querySelectorAll("td")[position];

  //Set Active class for selected position
  new_position.setAttribute('class','active');

};

//Create function that gets current position of player

var get_index_of_player = function(player_row) {

  node_list_of_td = player_row.querySelectorAll("td");

  array_of_td = Array.prototype.slice.call(node_list_of_td);

  var active_cell = player_row.querySelector('.active')

  return array_of_td.indexOf(active_cell)
}

// Moves selected player incrementally one player up

var move_player = function (player) {

  var player_class = "#" + player + "_strip"

  var player_row = document.querySelector(player_class);

  var current_index = get_index_of_player(player_row);

  update_player_position(player,current_index + 1 )

}

document.onreadystatechange = function() {

document.addEventListener('keyup', move_player())

}
