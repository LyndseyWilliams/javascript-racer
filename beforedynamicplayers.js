document.onreadystatechange = function(){
  if (document.readyState == "complete"){
    setupLanes(10);
    document.addEventListener('keyup', handleKeyup, false)
  }
}



//---------------HELPER METHODS---------------------------------------------

//---------------SETUP
var setupLanes = function(number_of_cells_in_lane){
  for (index=0; index<number_of_cells_in_lane;index++){
    document.getElementById("player1").appendChild(makeNewTD(index));
    document.getElementById("player2").appendChild(makeNewTD(index));
  }
}

//---------------EVENT HANDLING CODE---------------
var handleKeyup = function(keyUpEvent){
  var keyPressed = String.fromCharCode(keyUpEvent.keyCode)
  console.log(keyPressed)
  if (keyPressed == "Q"){
    update_player_position('player1')
  }else if(keyPressed == "P"){
    update_player_position('player2')
  }
}

var update_player_position = function(player){
  new_position = current_position(player) + 1
  all_tds_for_given_player(player)[current_position(player)].className = '';
  all_tds_for_given_player(player)[new_position].className = 'active';
}

//---------------SETUP HELPER---------------

var makeNewTD = function(index){
  var new_table_data = document.createElement("td")
    if (index == 0){
      new_table_data.className = "active"
    }
  return new_table_data
}

//---------------UPDATE HELPER---------------

var lane_of = function(player){
  return document.querySelector("#" + player)
}

var active_square = function(player){
  return lane_of(player).querySelector("td.active");
}

var all_tds_for_given_player = function(player){
  return lane_of(player).querySelectorAll("td");
}

var current_position = function(player){
  var tds_as_array = Array.prototype.slice.call(all_tds_for_given_player(player))
  return tds_as_array.indexOf(active_square(player));
}
