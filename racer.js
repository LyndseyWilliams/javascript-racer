// var racer1 = document.getElementById('player1_strip')

// var racer1 = document.querySelectorAll('.active')[0].nextElementSibling;

var strip1 = document.querySelector("#player1_strip");
var strip2 = document.querySelector("#player2_strip");

var findPlayer = function(strip) {
  // console.log("it works");
  return strip.querySelector(".active");
};

var movePlayerOneSpace = function(player) {
  player.className = ""
  player.nextElementSibling.className = "active"
};

var oneRound = function(strip) {
  var player = findPlayer(strip);
  movePlayerOneSpace(player)
}

// oneRound(strip1)
