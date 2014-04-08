
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


var game = {
  state: "ongoing"
}

// Creates the first player track
var create_player1 = function(){
row = document.querySelector("#player1_strip");
  var newPlayer = document.createElement("td");
   newPlayer = row.insertCell(0);
   newPlayer.className = "active";
}

// Creates the second player track
var create_player2 = function(){
row = document.querySelector("#player2_strip");
  var newPlayer = document.createElement("td");
   newPlayer = row.insertCell(0);
   newPlayer.className = "active";
 }

var extend_player1_track = function(){
for (var i= 1; i < lengthOfTrack; i++) {
  row = document.querySelector("#player1_strip");
  var newSpace = document.createElement("td")
  console.log(newSpace)
  newSpace = row.insertCell(i); // note insert cell will not carry class
  newSpace.className = "inactive";
   };
}

var extend_player2_track = function(){
for (var i= 1; i < lengthOfTrack; i++) {
  row = document.querySelector("#player2_strip");
  var newSpace = document.createElement("td")
  newSpace = row.insertCell(i); // note insert cell will not carry class
   newSpace.className = "inactive";
  };
}

var setUpBoard = function(track_length){
  lengthOfTrack = track_length
  create_player1()
  create_player2()
  extend_player1_track()
  extend_player2_track()
}




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


//if there are no spaces with the class 'inactive'
//the game is over and that player has won.
var checkWinner = function(player_strip){
  if (document.querySelector(player_strip).querySelector(".inactive") == null){
    console.log("Winner" + player_strip);
    game.state = "won";
  }
}

var restart = function(){
  location.reload();
}



// document.onkeyup = function(e){
// if (e.keyCode==80){
//   move1()
//   checkWinner("#player1_strip")
//   };
// if (e.keyCode==81){
//   move2()
//   checkWinner("#player2_strip")
//   }
// };

// Lets ask why this works, but just an add an event listener does not
//document.onreadystatechange throws weird errors when you change the html
window.onload = function(){
document.addEventListener('keyup', play_game);

}
// //This works, too
 var play_game = function(e) {
  if (game.state == "ongoing"){
       if (e.keyCode==80){
       document.addEventListener('keyup', move1());
        document.addEventListener('keyup', checkWinner("#player1_strip"));
        };

      if (e.keyCode==81){
        document.addEventListener('keyup', move2());
        document.addEventListener('keyup', checkWinner("#player2_strip"));
       };

   };

};

setUpBoard(10);

// describe("A suite", function() {
//   it("has at least two columns", function() {
//     expect(true).toBe(true);
//   });
// });