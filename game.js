
window.onload = function(){

function Game(player_1_row, player_2_row) {

var movePlayer1 = function(player1){
  player1.classList.remove('active');
  if (player1.nextElementSibling != null){
   player1.nextElementSibling.classList.add('active');
 } else {
    alert("player1 wins!!!!!");
  location.reload();
  }
}

  var movePlayer2 = function(player2){
  player2.classList.remove('active');
  if (player2.nextElementSibling != null) {
   player2.nextElementSibling.classList.add('active');
 } else {
    alert("player2 wins!!!!!");
    location.reload();
  }
}

document.getElementById('player1_strip').onclick = function(event){
  var player1 = document.querySelector('#player1_strip > td.active')
  movePlayer1(player1)
}

document.getElementById('player2_strip').onclick = function(event){
  var player2 = document.querySelector('#player2_strip > td.active')
  movePlayer2(player2)
 }


document.getElementById('click').onclick = function(event)
{
  var table = document.getElementsByClassName("racer_table");
  row1 = player1_strip
  row2 = player2_strip
  var cell1 = row1.insertCell(-1);
  var cell2 = row2.insertCell(-1);
}

// document.getElementById('player_click').onclick = function(event)
// {
//   var table1 = document.querySelector(".racer_table");
//   row1 = player1_strip
//   table1.insertRow(-1);
//   var cell3 = row1.insertCell(-1);

// }
}
}

