var lengthOfTrack = 0;
var numPlayers = 2;

function setBoard(){
lengthOfTrack = document.getElementById("length").value;
lengthOfTrack = parseInt(lengthOfTrack);
numPlayers = document.getElementById("players").value;
console.log(lengthOfTrack);

setGameBoard();

}


function setGameBoard(){
  // console.log(numPlayers);
  // console.log(lengthOfTrack);

  var table = document.getElementById('racer_table');
    for (var i = 1; i <= numPlayers; i++) {
      var tr = document.createElement('tr');
      var row = table.appendChild(tr);
      row.id = 'player' + i;

        for (var j = 1; j <= lengthOfTrack; j++) {
          var td = document.createElement('td');
          var column = row.appendChild(td);
          column.id = i +'_' + j;
        };
    };

    setPositionArrays();
};

var Positions = {};

function setPositionArrays(){
  console.log(numPlayers);
  for (var i = 1; i <= numPlayers; i++) {
    Positions['player' + i] = [1,1]
  };

console.log(Positions);

};
// var player1 = document.getElementById('player1');
// var player2 = document.getElementById('player2');

// console.log(player1);
// console.log(player2);
// console.log(lengthOfTrack);


// };
// };



var gameOver = false;

document.onreadystatechange = function() {
    document.addEventListener('keyup', playGame, false)
  }

function playGame(event) {
  if (event.keyCode == 65) {
      getNewPosition(1);
   }
   else if (event.keyCode == 69) {
      getNewPosition(2);
   }
   else if (event.keyCode == 73) {
    getNewPosition(3)
   }
   else if (event.keyCode == 79) {
    getNewPosition(4)
   }
   else if (event.keyCode == 85) {
    getNewPosition(5)
   }
   else {
    return '';
   }
  if (Positions['player1'][Positions['player1'].length - 1] == lengthOfTrack ||
    Positions['player2'][Positions['player2'].length - 1] == lengthOfTrack ||
    Positions['player3'][Positions['player3'].length - 1] == lengthOfTrack ||
    Positions['player4'][Positions['player4'].length - 1] == lengthOfTrack ||
    Positions['player5'][Positions['player5'].length - 1] == lengthOfTrack) {
    declareWinner();
  }
}

function declareWinner() {
  winners = [];
  for (var i = 1; i <= numPlayers; i++) {
    if (Positions['player'+i][Positions['player'+i].length - 1 ] == lengthOfTrack) {
      winners.push('player' + i);
    };
  };

  if (winners.length > 1) {
    document.getElementById('winner').innerHTML = "It's a Tie!";
  }
  else {
    document.getElementById('winner').innerHTML = winners[0] + " Wins!";
  }
  document.removeEventListener('keyup', playGame, false);
  gameOver = true;
  playAgain();

}


function updatePlayerPosition(player, new_position, old_position){
  var old = player + "_" + old_position;
  var updated = player + "_" + new_position;
  var new_position = document.getElementById(updated).className = "active";
  var old_position = document.getElementById(old).className = '';
}

function getNewPosition(player) {

    Positions['player' + player].push(roll() + Positions['player' + player][Positions['player' + player].length - 1]);
    console.log('player' + player);
    console.log(Positions['player' + player]);
    if (Positions['player' + player][Positions['player' + player].length - 1] > lengthOfTrack) {
      Positions['player' + player][Positions['player' + player].length - 1] = lengthOfTrack;
    }
    updatePlayerPosition(player, Positions['player' + player][Positions['player' + player].length - 1], Positions['player' + player][Positions['player' + player].length - 2]);
}


function roll() {
  var num = Math.floor(Math.random() * 6 + 1);
  return num;
}

function playAgain(){
  if (gameOver === true) {
    document.getElementById('play-again').className = "display";
  }
}


