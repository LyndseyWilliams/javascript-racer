
// we have a racetracke with td
// start with location = zero
// in td coooresponding to location
// make class active
// all other locations class = open or null


// for each keystroke add to location 1
// switch players
// when location is equal to length of track game over
// declare winner

// var array_of_spaces = document.querySelector("#player1_strip");
// var child_space = array_of_spaces.childNodes[0]
// var active_child_space


//Move player 1 /corresponds to p key (code 80)
function move1() {
  var active_space_p1 = document.querySelector("#player1_strip").querySelector(".active");
  var current_cell_p1 = active_space_p1.nextElementSibling.className = "active";
  active_space_p1.className="crossed";
}
//Move player Two corresponds to q key (code 81)
function move2() {
  var active_space_p1 = document.querySelector("#player2_strip").querySelector(".active");
  var current_cell_p1 = active_space_p1.nextElementSibling.className = "active";
  active_space_p1.className="crossed";
}


document.onkeyup = function(e){
  console.log(e.keyCode);
if (e.keyCode==80){move1()};
if (e.keyCode==81){move2()}
};

// //This works, too
//  document.onkeyup = function(e) {
//   if(e.keyCode==80){
//   document.addEventListener('keyup', move1()); //could put false at the end of it, if you wanna execute the function, make sure its a function not a result
//    }
// };
