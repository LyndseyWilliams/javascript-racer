
// we have a racetracke with td
// start with location = zero
// in td coooresponding to location
// make class active
// all other locations class = open or null


// for each keystroke add to location 1
// switch players
// when location is equal to length of track game over
// declare winner

var array_of_spaces = document.querySelector("#player1_strip");
var child_space = array_of_spaces.childNodes[0]
// var active_child_space

function move(player_number) {

  // locations and spaces are different ways to access the player1 strip and active cell
  var active_space_p1 = document.querySelector("#player" + player_number + "_strip").querySelector(".active");
  var current_cell_p1 = active_space_p1.nextElementSibling.className = "active";
  active_space_p1.className="crossed";
}

