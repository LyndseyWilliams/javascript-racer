var player1_position = [1,1];
var player2_position = [1,1];


document.onreadystatechange = function() {
    document.addEventListener('keyup', playGame, false)


  }

function playGame(event) {

  if (event.keyCode == 65) {
      getNewPosition(1);

   }
   else if (event.keyCode == 76) {
      getNewPosition(2);
   }
   else {
    return '';
   }
  if (player1_position[player1_position.length - 1] == 30 || player2_position[player2_position.length - 1] == 30) {
    declareWinner();
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
  document.removeEventListener('keyup', playGame, false);
}

function updatePlayerPosition(player, new_position, old_position){
  var old = player + "_" + old_position;
  var updated = player + "_" + new_position;
  // var old_position = document.getElementById(old).className = '';
  var new_position = document.getElementById(updated).className = "active";
  var old_position = document.getElementById(old).className = '';

}

function getNewPosition(player) {
  if (player === 1) {
    player1_position.push(roll() + player1_position[player1_position.length - 1]);
    console.log('player 1');
    console.log(player1_position);
    // debugger
    if (player1_position[player1_position.length - 1] > 30) {
      player1_position[player1_position.length - 1] = 30;
    }
    updatePlayerPosition(player, player1_position[player1_position.length - 1], player1_position[player1_position.length - 2]);
  }
  else if (player === 2) {
    player2_position.push(roll() + player2_position[player2_position.length - 1]);
    console.log('player 2');
    console.log(player2_position);
    if (player2_position[player2_position.length - 1] > 30) {
      player2_position[player2_position.length - 1] = 30;
    }
    updatePlayerPosition(player, player2_position[player2_position.length - 1], player2_position[player2_position.length - 2]);
  }
  else {
    return '';
  }
}

function roll() {
  var num = Math.floor(Math.random() * 6 + 1);
  return num;
}






