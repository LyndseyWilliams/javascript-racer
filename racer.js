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
  var player1 = new Player()
  var player2 = new Player()
  var form = document.querySelector('.input-form')
  form.addEventListener('submit', makeBoard, false)
}

function updatePlayer(event, self){
  self.updatePlayerPosition( event.keyCode )
  self.checkWinnerWinnerChickenDinner()
  self.drawPlayer()
  // oneKeyTap(strip1)
  // gameEnd(strip1, "left player")
  // oneKeyTap(strip2)
  // gameEnd(strip2, "right player")
}

var possible_keys = [65,76]
function Player(){
  var self = this
  this.position = 0
  this.victory = false
  this.keyCode = possible_keys.pop()
  document.addEventListener('keyup', function(event){
    updatePlayer(event, self)
  } , false)
}

Player.prototype = {
  updatePlayerPosition: function(keycode) {
    console.log('position', this.keyCode, this.position)
    if (keycode === this.keyCode){
      this.position += 1
    }
  },

  checkWinnerWinnerChickenDinner: function(){
    // console.log("winner?")
  },

  drawPlayer: function(){
    // console.log("drawPlayer")
  }
}



