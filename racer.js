var gameWon = false
var strip1 = document.querySelector("#player1_strip")
var strip2 = document.querySelector("#player2_strip")


var movePlayer = function(strip){
  var currentActiveSpot = findPlayer(strip)
  var newActiveSpot = currentActiveSpot.nextElementSibling

  if (gameWon == false) {
    newActiveSpot.className = "active"
    currentActiveSpot.className = ""
  };
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
     gameWon = true
      document.removeEventListener("keyup", makinMoves)


     var displayWinningText = function() {
       var winNode = document.createTextNode(playerName + " wins!  ");
       document.getElementById('winner').appendChild(winNode);
     }

     var displayResetButton = function() {
       var resetButton = document.createElement("button");
       var t=document.createTextNode("Reset Game")
       resetButton.appendChild(t);
       resetButton.addEventListener("click", resetGame(strip2));
       document.getElementById('winner').appendChild(resetButton);

     }
     displayWinningText()
     displayResetButton()
  }
}

var makinMoves = function(e) {
  if (e.keyCode == 80){
    movePlayer(strip1)
    checkWinner(strip1, "Player 1")
  }
  else if (e.keyCode == 81) {
    movePlayer(strip2)
    checkWinner(strip2, "Player 2")
  };
};

var useKeys = document.addEventListener("keyup", makinMoves)


var resetGame = function(strip){
  console.log("HELLO")
   strip.firstElementChild.className = "active"
  // useKeys
}

