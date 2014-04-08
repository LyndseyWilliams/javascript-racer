

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
      movePosition(2);
    }
  }
  function movePosition(player_num) {
    var players = document.querySelector(".racer_table").querySelectorAll('tr');
    cell = players[player_num].querySelector(".woo");
    cell = cell.nextSibling;
    console.log(cell);
    console.log(players[0]);
    if(cell.nextSibling == null){
      // var n = player_num.toString()

      alert("player " + player_num + " wins");
      location.reload();
    }
    cell.className = "woo";
    cell.previousSibling.className = "";
  }
}

function do_over(){
  var allKids = document.querySelector("#player1_strip").childNodes;
  for(var i=0; i<allKids.length; i++) {
    allKids[i].className = "";
     }

  var allKids = document.querySelector("#player2_strip").childNodes;
  for(var i=0; i<allKids.length; i++) {
    allKids[i].className = "";
     }
  document.querySelector("#player1_strip").querySelector('td').className = "active";
  document.querySelector("#player2_strip").querySelector('td').className = "active1";
  start_again();
}

