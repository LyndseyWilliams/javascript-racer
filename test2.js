window.onload = function() {
  var form = document.querySelector(".board_length");
  form.addEventListener('submit', startround)
}

var startround = function(event){
  event.preventDefault();
  var players = this.players.value
  var number = this.number.value
  addPlayers(players);
  addCells(number);
}

function addPlayers(players){
  var player = document.querySelector(".racer_table");
  for (i = 0; i< players; i++){
    player.insertRow(1);
  }
}

function addCells(rows) {
  var players = document.querySelector(".racer_table").querySelectorAll('tr');
  for (x = 0; x<players.length; x++){
    players[x].insertCell(0).className = "woo"
    for (i = 1; i<rows; i++) {
      players[x].insertCell(1);
    }
  }
}

start_again();

function start_again() {
  document.addEventListener('keyup', press, false);

  function press(callback) {
    if(callback.keyCode == 65 || callback.keyCode ==  83 || callback.keyCode ==  68){
      movePosition(0);
    }
    if(callback.keyCode == 74 || callback.keyCode == 75 || callback.keyCode == 76){
      movePosition(1);
    }
    if(callback.keyCode == 32 || callback.keyCode == 33 || callback.keyCode == 34){
      movePosition(2);
    }
    if(callback.keyCode == 32 || callback.keyCode == 33 || callback.keyCode == 34){
      movePosition(3);
    }
  }

  function movePosition(player_num) {
    var players = document.querySelector(".racer_table").querySelectorAll('tr');
    cell = players[player_num].querySelector(".woo");
    if(cell.nextSibling === null){
      cell.className = "";
      alert("player " +player_num+ " wins");
      clearCells(players.length);
      start_again();
    }
    cell = cell.nextSibling;
    cell.className = "woo";
    cell.previousSibling.className = "";
  }
}

function clearCells(rows) {
  var players = document.querySelector(".racer_table").querySelectorAll('tr');
  for (x = 0; x<players.length; x++){
    players[x].cells[0].className = "woo"
    for (i = 1; i<rows; i++) {
      players[x].cells[i].className = "";
    }
  }
}