// var racer1 = document.getElementById('player1_strip')

// var racer1 = document.querySelectorAll('.active')[0].nextElementSibling;

var strip1 = document.querySelector("#player1_strip");
var strip2 = document.querySelector("#player2_strip");

var createBoard = function(board_length){
  for (var i = 0; i < board_length; i++)
  {
    strip1.insertCell(1)
    strip2.insertCell(1)
  }
}

var resetBoardLength = function(){
  var stripLength = strip1.querySelectorAll('td').length
  for (var i = stripLength; i > 2; i--)
  {
    strip1.deleteCell(-1)
    strip2.deleteCell(-1)
  }
}

var findPlayer = function(strip) {
  // console.log("it works");
  return strip.querySelector(".active");
};

var movePlayerOneSpace = function(player) {
  player.className = ""
  player.nextElementSibling.className = "active"
};

var gameEnd = function(strip, player_name){
  if (strip.lastElementChild.className === "active")
  {
    alert( "winner: "+ player_name);
    movePlayerToBeginning()
    resetBoardLength()
  }
}

var movePlayerToBeginning = function(){
  var course1 = document.querySelectorAll('.active')[0]
  var course2 = document.querySelectorAll('.active')[1]
  course1.className = ""
  course2.className = ""
  document.querySelector("#player1_strip").querySelector('td').className = 'active'
  document.querySelector("#player2_strip").querySelector('td').className = 'active'
}

var oneKeyTap = function(strip) {
  var player = findPlayer(strip);
  movePlayerOneSpace(player)
}

document.onkeyup = function(e) {
  if (e.keyCode == 65)
  {
    oneKeyTap(strip1)
    gameEnd(strip1, "left player")
  }
  else if (e.keyCode == 76)
  {
    oneKeyTap(strip2)
    gameEnd(strip2, "right player")
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