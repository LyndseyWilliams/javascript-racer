var strip1 = document.querySelector("#player1_strip")

var strip2 = document.querySelector("#player2_strip")



var movePlayer = function(strip){
  var currentActiveSpot = findPlayer(strip)
  var newActiveSpot = currentActiveSpot.nextElementSibling
  newActiveSpot.className = "active"
  currentActiveSpot.className = ""
};

var findPlayer = function(strip){
  var currentActiveSpot = strip.querySelector('.active')
  return currentActiveSpot
};

// var checkWinner = function(strip, currentActiveSpot) {
//   var lastBox = strip.lastElementChild
//     if (currentActiveSpot == lastBox)
//        alert("winner!!")
// }


var checkWinner = function(strip, playerName) {
  var currentActiveSpot = findPlayer(strip)
  var lastBox = strip.lastElementChild
  if (currentActiveSpot.className === lastBox.className){
     alert( playerName + " wins!!!")
  }
}

document.onkeyup = function(e) {
  if (e.keyCode == 80){
    movePlayer(strip1)
    checkWinner(strip1, "Player 1")
  }
  else if (e.keyCode == 81) {
    movePlayer(strip2)
    checkWinner(strip2, "Player 2")
  };
};

