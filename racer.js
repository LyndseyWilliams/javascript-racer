var strip1 = document.querySelector("#player1_strip")

var strip2 = document.querySelector("#player2_strip")

var movePlayer = function(strip){
  var currentActiveSpot = findPlayer(strip)
  var newActiveSpot = currentActiveSpot.nextElementSibling
  newActiveSpot.className = "active"
  currentActiveSpot.className = ""

}

var findPlayer = function(strip){
  var currentActiveSpot = strip.querySelector('.active')
  return currentActiveSpot
};

// var declareWinner = function(strip) {
//   if (
//       alert("winner!!")
// }

document.onkeyup = function(e) {
  if (e.keyCode == 80){
    movePlayer(strip1)
  }

  if (e.keyCode == 81) {
    movePlayer(strip2)
  }
};

