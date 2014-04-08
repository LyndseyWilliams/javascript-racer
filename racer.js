var strip1 = document.querySelector("#player1_strip");
var strip2 = document.querySelector("#player2_strip");


var userLengthInput = function(){
  return document.getElementById('boardLength').value
}

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

// var submitButton = document.querySelector('.button')
var makeBoard = function()
{
  event.preventDefault()
  createBoard(userLengthInput())
}

// \new awesome code yayayaya
window.addEventListener('load', initialize, false)

function initialize(){
  var form = document.querySelector('.input-form')
  form.addEventListener('submit',makeBoard,false)
  var player1 = new Player()
  var player2 = new Player()
  console.log("players: ", player1, player2)
}

document.onkeyup = function(e) {
  if (e.keyCode == 65)
  {
    this.updatePlayerPosition()
    this.checkWinnerWinnerChickenDinner()
    this.drawPlayer()
    // oneKeyTap(strip1)
    // gameEnd(strip1, "left player")
  }
  else if (e.keyCode == 76)
  {
    oneKeyTap(strip2)
    gameEnd(strip2, "right player")
  }
};

var possible_keys = [65,76]
function Player(){
  this.position = 0
  this.victory = false
  this.keyCode = possible_keys.pop()
}


Player.prototype = {
  updatePlayerPosition: function() {
    if (e.keyCode === Player.keycode){
      this.position += 1
    }
  },

  checkWinnerWinnerChickenDinner: function(){
    console.log("salar sucks, also winner shit")
  },

  drawPlayer: function(){
    console.log("drawPlayer")
  }
}



