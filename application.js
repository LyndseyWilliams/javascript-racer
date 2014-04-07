window.addEventListener('load', function(){

//player 1 row
var player1 = document.getElementById('player1');
// console.log(player1);

//player 2 row
var player2 = document.getElementById('player2');
// console.log(player2);

var player1_position = [0,1];
var player2_position = [0,1];

function roll() {
  var num = Math.floor(Math.random() * 6 + 1);
  return num;
}

function getNewPosition(player) {
  if (player == 1) {
    player1_position.push(roll() + player1_position[player1_position.length - 1]);
    if (player1_position[player1_position.length - 1] > 30) {
      player1_position[player1_position.length - 1] = 30;
    }
    updatePlayerPosition(player, player1_position[player1_position.length - 1], player1_position[player1_position.length - 2]);
  }
  else {
    player2_position.push(roll() + player2_position[player2_position.length - 1]);
    if (player2_position[player2_position.length - 1] > 30) {
      player2_position[player2_position.length - 1] = 30;
    }
    updatePlayerPosition(player, player2_position[player2_position.length - 1], player2_position[player1_position.length - 2]);
  }
}


function updatePlayerPosition(player, new_position, old_position){
  var old = player + "_" + old_position;
  var updated = player + "_" + new_position;
  var old_position = document.getElementById(old).className = '';
  var new_position = document.getElementById(updated).className = "active";
  console.log(old_position)
}

function playGame(){
  getNewPosition(1);
  getNewPosition(2);
  console.log(player1_position);
  console.log(player2_position);
}

function game(){
  while (player1_position[player1_position.length - 1] < 30 && player2_position[player2_position.length - 1] < 30){
    playGame();
  declareWinner()
  }
}

function declareWinner() {
  if (player1_position[player1_position.length - 1] == 30 && player2_position[player2_position.length - 1] == 30) {
    document.getElementById('winner').innerHTML="It's a Tie!";

  }
  else if (player1_position[player1_position.length - 1] == 30) {
    document.getElementById('winner').innerHTML="Player 1 Wins!";
  }
  else if (player2_position[player2_position.length - 1] == 30) {
    document.getElementById('winner').innerHTML="Player 2 Wins!";
  }
}

game()

})

