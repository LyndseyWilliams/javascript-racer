var update_player_position = function(player,position) {
  var player_class = "#" + player + "_strip" //Set up player class using input player variable
  var player_row = document.querySelector(player_class);  //STEP 1 Select Play Row
  var player = player_row.querySelector(".active");  //Select player by Active TD class
  player.removeAttribute('class');  // Remove Active Class for active player turns blank
  var new_position = player_row.querySelectorAll("td")[position];  //Activate player that is received as input
  new_position.setAttribute('class','active');  //Set Active class for selected position
};

//Create function that gets current position of player

var get_index_of_player = function(player_row) {
  node_list_of_td = player_row.querySelectorAll("td");
  array_of_td = Array.prototype.slice.call(node_list_of_td);
  var active_cell = player_row.querySelector('.active')
  var index_of_active = array_of_td.indexOf(active_cell)
  var index_of_active_and_length = [index_of_active, (array_of_td.length)]
  return index_of_active_and_length
}

// Moves selected player incrementally one player up
var move_player = function (player) {
  var player_class = "#" + player + "_strip"
  var player_row = document.querySelector(player_class);
  var index_of_active_and_length = get_index_of_player(player_row);
  update_player_position(player,index_of_active_and_length[0] + 1 )
  // var current_index = get_index_of_player(player_row);
  // Alert player they have won if they have reached the last column in the table.
  console.log(index_of_active_and_length[0])
  console.log(index_of_active_and_length[1])
  if ((index_of_active_and_length[0]+2) >= index_of_active_and_length[1]) // Button for chosen_length goes here too
   {alert(player + " WINS!");
  location.reload();
  }
}

var select_player = function(event) {
  if (event.keyCode == 80) // P
    {console.log(event.keyCode == 80)
      move_player("player1")
    }
  else if (event.keyCode == 81) // Q
    {console.log(event.keyCode == 81)
      move_player("player2")
    }
  else if (event.keyCode == 90) // Z
    {console.log(event.keyCode == 66)
      move_player("player3")
    }
  else if (event.keyCode == 77) // M
    {console.log(event.keyCode == 66)
      move_player("player4")
    }
  else // Alert player to begin the game by pressing the appropriate keys.
    {console.log("You pressed the wrong key")}
}


document.onreadystatechange = function() {
  document.addEventListener('keyup', select_player, false);
}


var generate_strip = function(chosen_length, player_amount) {

  var p = 0 // sets up the beginning for table row (player) creation
  while (p < player_amount) {
    player_track = document.createElement('tr')
    strip_name = "player" + (p+1) + "_strip"
    player_track.setAttribute('id',strip_name)
    racer_table = document.querySelector('.racer_table')
    racer_table.appendChild(player_track)

    var i = 0 // Set up beginning for track creation
    while (i < chosen_length) {
      var col = document.createElement('td')
      document.querySelector('#' + strip_name).appendChild(col);
      // Make
      if (i === 0) {
        col.setAttribute('class','active')
      }
      i++;
    }

    p++;
  }
}

// var chosen_length = document.querySelector()

// player_track = document.createElement('tr')
// <tr>​</tr>​

// undefined

// <table class=​"racer_table">​…​</table>​
// racer_table.appendChild(player_track)
// <tr id=​"player3_strip">​</tr>​

// <tr id=​"player3_strip">​</tr>​
//  var i = 0 // Set up beginning for track creation
// undefined
//  while (i < chosen_length) {
//     var col = document.createElement('td')
//     document.querySelector('#player3_strip').appendChild(col);
//     i++;
//   }
// ReferenceError: chosen_length is not defined
//  while (i < 10) {
//     var col = document.createElement('td')
//     document.querySelector('#player3_strip').appendChild(col);
//     i++;
//   }
// 9