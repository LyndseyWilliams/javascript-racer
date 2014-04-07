

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

// window.onload = function(){

// document.querySelector(".active").style.backgroundColor = "red";

// };



// // Function to change the content of t2
// function modifyText(new_text) {
//   var t2 = document.getElementById("t2");
//   t2.firstChild.nodeValue = new_text;
// }

// // Function to add event listener to table
// var el = document.getElementById("outside");
// el.addEventListener("click", function(){modifyText("four")}, false);

// // Function to change the content of t2
// function modifyText() {
//   var t2 = document.querySelectorAll(".t2");
//   if (t2 == ".t3") {
//     t2 = "two";
//   } else {
//     t2.firstChild.nodeValue = "four";
//   }
// }

// // add event listener to t
// var el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);

//   // if (t2.firstChild.nodeValue == "four") {
//   //   t2.firstChild.nodeValue = "two";
//   // } else {
//   //   t2.firstChild.nodeValue = "four";
//   // }
