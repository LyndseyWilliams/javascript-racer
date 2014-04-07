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

var oneKeyTap = function(strip) {
  var player = findPlayer(strip);
  movePlayerOneSpace(player)
}

document.onkeyup = function(e) {
  console.log(e.keyCode)
  if (e.keyCode == 65)
  {
    oneKeyTap(strip1)
  }
  else if (e.keyCode == 76)
  {
    oneKeyTap(strip2)
  }
};

//method below finds key numbers
// document.onkeyup = function(e) {
//   console.log(e.keyCode)
//   if (e.keyCode == 65){
//     // console.log('yay')
//     oneKeyTap(strip1)
//   }
// };